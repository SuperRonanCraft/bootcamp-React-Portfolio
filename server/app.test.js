import test from "node:test";
import assert from "node:assert/strict";
import { createApp } from "./app.js";

const valid = {
  name: "Alex Morgan",
  email: "alex@example.com",
  message: "I would love to discuss a project.",
};
async function fixture(t, options = {}) {
  const server = createApp(options).listen(0, "127.0.0.1");
  await new Promise((resolve) => server.once("listening", resolve));
  t.after(() => new Promise((resolve) => server.close(resolve)));
  return (body, extra = {}) =>
    fetch(`http://127.0.0.1:${server.address().port}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      ...extra,
    });
}
test("sends only to the configured owner, with visitor reply-to and plain text", async (t) => {
  let payload;
  const post = await fixture(t, {
    env: {
      RESEND_API_KEY: "test-key",
      CONTACT_FROM: "Portfolio <hello@example.com>",
      CONTACT_TO: "owner@example.com",
    },
    fetchImpl: async (url, options) => {
      assert.equal(url, "https://api.resend.com/emails");
      assert.equal(options.headers.Authorization, "Bearer test-key");
      payload = JSON.parse(options.body);
      return Response.json({ id: "test-email-id" });
    },
  });
  const response = await post({
    ...valid,
    name: "  Alex Morgan  ",
    to: "attacker@example.com",
    message: "<script>alert(1)</script>",
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.deepEqual(payload.to, ["owner@example.com"]);
  assert.equal(payload.reply_to, valid.email);
  assert.equal(payload.subject, "Portfolio inquiry from Alex Morgan");
  assert.equal(payload.html, undefined);
  assert.ok(payload.text.includes("<script>"));
});
test("rejects invalid, oversized, or multiline fields without sending", async (t) => {
  const post = await fixture(t, {
    fetchImpl: () => assert.fail("Should not send"),
  });
  for (const body of [
    { ...valid, email: "invalid" },
    { ...valid, message: " " },
    { ...valid, name: "Alex\nBCC: spam" },
    { ...valid, message: "a".repeat(5001) },
  ]) {
    assert.equal((await post(body)).status, 400);
  }
});
test("honeypot reports success without sending", async (t) => {
  const post = await fixture(t, {
    fetchImpl: () => assert.fail("Should not send"),
  });
  assert.equal(
    (await post({ ...valid, website: "https://spam.example" })).status,
    200,
  );
});
test("missing configuration returns actionable error", async (t) => {
  const post = await fixture(t, { env: {} });
  assert.equal((await post(valid)).status, 503);
});
test("provider errors do not expose secrets or submitted data", async (t) => {
  const post = await fixture(t, {
    env: { RESEND_API_KEY: "secret" },
    fetchImpl: async () =>
      Response.json({ message: "secret provider details" }, { status: 403 }),
  });
  const response = await post(valid);
  assert.equal(response.status, 502);
  assert.ok(!(await response.text()).includes("secret"));
});
test("network errors and missing receipts never report success", async (t) => {
  for (const fetchImpl of [
    async () => {
      throw new Error("network");
    },
    async () => Response.json({}),
  ]) {
    const post = await fixture(t, {
      env: { RESEND_API_KEY: "test" },
      fetchImpl,
    });
    assert.equal((await post(valid)).status, 502);
  }
});
test("rejects malformed JSON, large requests, wrong types and methods", async (t) => {
  const post = await fixture(t);
  assert.equal((await post(null, { body: "{" })).status, 400);
  assert.equal((await post({ message: "a".repeat(40000) })).status, 413);
  assert.equal(
    (await post(valid, { headers: { "Content-Type": "text/plain" } })).status,
    415,
  );
  const response = await post(undefined, { method: "GET" });
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("Allow"), "POST");
});
test("rate limits repeated submissions", async (t) => {
  const post = await fixture(t, { env: {} });
  for (let i = 0; i < 5; i++) assert.equal((await post(valid)).status, 503);
  const response = await post(valid);
  assert.equal(response.status, 429);
  assert.ok(response.headers.get("retry-after"));
});
