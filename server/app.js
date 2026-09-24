import express from "express";
import { rateLimit } from "express-rate-limit";
import { fileURLToPath } from "node:url";
import { contactSchema } from "../shared/contact.js";

export function createApp({ env = process.env, fetchImpl = fetch } = {}) {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", Number(env.TRUST_PROXY || 0));
  app.use("/api", (_req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });
  app.use(
    "/api/contact",
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 5,
      standardHeaders: "draft-7",
      legacyHeaders: false,
      message: {
        error:
          "Too many messages. Please try again in 15 minutes or email me directly.",
      },
    }),
  );
  app.post(
    "/api/contact",
    express.json({ limit: "32kb" }),
    async (req, res) => {
      if (!req.is("application/json"))
        return res.status(415).json({ error: "Please send a JSON request." });
      const result = contactSchema.safeParse(req.body);
      if (!result.success)
        return res
          .status(400)
          .json({
            error: "Please check your name, email, and message.",
            fields: result.error.flatten().fieldErrors,
          });
      const { name, email, message, website } = result.data;
      if (website) return res.json({ success: true });
      if (!env.RESEND_API_KEY)
        return res
          .status(503)
          .json({
            error:
              "The contact form is temporarily unavailable. Please email me directly.",
          });
      try {
        const response = await fetchImpl("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: env.CONTACT_FROM || "Alain Portfolio <onboarding@resend.dev>",
            to: [env.CONTACT_TO || "superronancraft@gmail.com"],
            reply_to: email,
            subject: `Portfolio inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          }),
          signal: AbortSignal.timeout(15000),
        });
        if (!response.ok) {
          console.error("Resend rejected contact submission:", response.status);
          return res
            .status(502)
            .json({
              error:
                "Your message could not be sent. Please try again later or email me directly.",
            });
        }
        const data = await response.json();
        if (!data.id) throw new Error("Missing email receipt");
        return res.json({ success: true });
      } catch {
        return res
          .status(502)
          .json({
            error:
              "We could not confirm your message was sent. Please email me directly or try again later.",
          });
      }
    },
  );
  app.all("/api/contact", (_req, res) =>
    res
      .status(405)
      .set("Allow", "POST")
      .json({ error: "Use POST to send a message." }),
  );
  app.use("/api", (_req, res) =>
    res.status(404).json({ error: "Endpoint not found." }),
  );
  const dist = fileURLToPath(new URL("../dist/", import.meta.url));
  app.use(express.static(dist));
  app.get("/{*path}", (_req, res) =>
    res.sendFile("index.html", { root: dist }),
  );
  // Express identifies error middleware by its four-argument signature.
  // eslint-disable-next-line no-unused-vars
  app.use((error, _req, res, _next) => {
    if (error.type === "entity.too.large")
      return res.status(413).json({ error: "Your message is too large." });
    if (error.type === "entity.parse.failed")
      return res.status(400).json({ error: "Invalid JSON request." });
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again later." });
  });
  return app;
}
