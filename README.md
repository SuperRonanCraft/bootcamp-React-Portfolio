# Alain Núñez — developer portfolio

A React portfolio presenting full stack applications, Java plugins, and the skills behind them: React, TypeScript, Node.js, databases, Twilio API, Stripe, Codex AI, and MCP servers.

The contact form sends email through a server-side Resend integration. It includes shared client/server validation, a hidden spam field, rate limiting, pending/success/error feedback, and a direct email fallback. Project filters, light/dark themes, keyboard focus styles, and responsive layouts support browsing the work.

## Run locally

Requires Node.js 22 or newer.

```sh
npm install
```

Create `.env` from `.env.example` if you do not already have one. Keep your existing API key when updating an existing `.env`:

```dotenv
RESEND_API_KEY=re_your_key_here
CONTACT_FROM=Alain Portfolio <hello@your-verified-domain.com>
CONTACT_TO=superronancraft@gmail.com
```

`CONTACT_FROM` must use a sender domain verified in your Resend account. For testing, the default `Alain Portfolio <onboarding@resend.dev>` can send only to your Resend account's own email address. The destination defaults to `superronancraft@gmail.com`; change `CONTACT_TO` if needed. See [Resend sender/domain requirements](https://resend.com/docs/dashboard/domains/introduction) and the [send email API](https://resend.com/docs/api-reference/emails/send-email).

```sh
npm run dev
```

Open **http://localhost:5173**. This starts both Vite and the Node API; Vite forwards `/api` requests to port 3001. The development command reserves port 3001 for the API, independently of the production `PORT` setting.

The frontend sends `POST /api/contact` with the visitor's name, email, and message. The backend calls Resend using a fixed owner recipient and sets `reply_to` to the visitor's email. Messages are sent as plain text. A successful response means Resend accepted the email; inbox delivery is not guaranteed by the API receipt.

Secrets stay in `.env` or the hosting provider's environment settings. Never use a `VITE_` prefix for the API key or write environment variables into `public/`.

## Production / Render

```sh
npm run build
npm start
```

The Node server serves `dist/`, handles the email API, and falls back to the React app for page routes such as `/contact` and `/resume`. The default production port is 3001; hosting providers can set `PORT`.

Use a **Node Web Service**, not a static site, on Render:

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- Environment variables: `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`
- Set `TRUST_PROXY=1` for Render's single reverse proxy. Leave it at `0` locally. For another host, set the exact trusted proxy count for that deployment.

An existing Render Static Site must be replaced with a Web Service to execute the contact endpoint. Static hosting alone cannot send these emails. `npm run preview` previews frontend assets only; use `npm start` to check the full production app.

The contact endpoint allows five requests per IP per 15 minutes and rejects payloads over 32 KB. Its rate-limit store is in memory, suitable for a single Node instance. Use a shared rate-limit store or an upstream gateway if scaling to multiple instances.

## Verification

```sh
npm run lint
npm test
npm run build
```

API tests mock Resend and never send real email. They cover recipient isolation, reply-to behavior, validation, spam filtering, rate limiting, malformed requests, provider failures, and missing configuration.

To verify real delivery after configuring the sender, submit a clearly labeled test message through `/contact` and check the recipient inbox and Resend dashboard. A real delivery test has not been performed as part of the automated checks.

## Update content

- `src/assets/projects.json`: projects, descriptions, categories, technologies, and links.
- `src/components/Skills.jsx`: capability groups and technology labels.
- `src/pages/Portfolio.jsx`: introduction and background.
- `src/pages/Resume.jsx`: published résumé document URL.
- `src/assets/css/style.css`: design tokens, layouts, and responsive styles.

Project descriptions reflect the existing project records. No unverified usage counts, employment history, or performance metrics have been added.

## Contact & license

[GitHub](https://github.com/SuperRonanCraft) · [LinkedIn](https://www.linkedin.com/in/alain-nunez/) · superronancraft@gmail.com

Licensed under [The Unlicense](https://unlicense.org/).
