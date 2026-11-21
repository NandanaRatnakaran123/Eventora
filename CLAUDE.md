# CLAUDE.md – Eventora-Frontend

Public, SEO-optimised website and customer area for Eventora (event planning and management): home, about, services (weddings, corporate events, birthdays, engagements, decor, catering, photography), packages, gallery/portfolio, vendors, testimonials, blog, contact, enquiry/quote request form, WhatsApp/call buttons, Google reviews, customer registration/login, event booking + Razorpay advance payment, My Events/My Bookings.

> Status: freshly scaffolded (create-next-app). Only the root layout and a placeholder home page exist; everything above is planned, not built.

## Stack
Next.js 16 (App Router, `cacheComponents` and `partialPrefetching` enabled), React 19, TypeScript (strict, `@/*` alias to project root), Tailwind CSS 4 (via `@tailwindcss/turbopack`), ESLint 9 (`eslint-config-next`). Geist fonts via `next/font`.
TODO: state management, server-data fetching, Razorpay and deployment target are not set up yet. Confirm choices before adding.

## Structure (app/ at project root, no src/)
- app/layout.tsx – root layout, fonts, default metadata. app/page.tsx – home (placeholder). app/globals.css – Tailwind entry.
- public/ – static assets (currently only default Next.js SVGs).
- next.config.ts, tsconfig.json, eslint.config.mjs – config.
- Planned (not yet created): route groups for public vs customer pages, components, API/lib helpers.

## Conventions
- Next.js here has breaking changes: read the relevant guide in `node_modules/next/dist/docs/` before writing code (see AGENTS.md).
- Public pages are server components with `generateMetadata`, sitemap, robots, JSON-LD for SEO.
- Mobile-first Tailwind. Route all API calls through one shared client (to be created, e.g. `lib/api`).
- Server data and client state must not be duplicated; pick one owner per piece of data.
- Gallery/portfolio: use `next/image` with sizes, alt text and lazy loading; never ship raw full-size photos.
- Quote request/enquiry: one shared form flow, validated, with WhatsApp/call as fallback CTAs.
- Event-type filters (wedding, corporate, birthday, etc.): drive them from URL query params so they are shareable and SEO-friendly.
- Replace the default "Create Next App" metadata with Eventora's before release.
- Env vars: keep a `.env.example` (NEXT_PUBLIC_ prefix for client). None exist yet.

## Commands
- `npm run dev` – start dev server.
- `npm run build` – production build.
- `npm run start` – serve the production build.
- `npm run lint` – run ESLint.

## Branch workflow
- `master`: stable, deployable. Merge only via pull request.
- `[dev-name-1]`, `[dev-name-2]`: personal development branches. Work and commit here, then open a PR into `master`.
- Never commit `.env` files; update `.env.example` when adding variables.

## Ticket workflow (project management tool: Sync-N-Track, project "Eventora")
Work is tracked as tickets in Sync-N-Track, so the team can update the board in step with the work. Every ticket announcement must state **three things: ticket name, module, and sprint/cycle**. If any of them is unknown, ask before starting.
- **Before starting any ticket**, announce it in the chat in this format:
  `STARTED: <ticket name> | Module: <module> | Sprint/Cycle: <cycle name>` plus one line on what will be done.
- Work on **one ticket at a time**. Do not mix in work from other tickets.
- **When the ticket is finished** (built, tested, committed and pushed to the developer's own dev branch), announce:
  `DONE: <ticket name> | Module: <module> | Sprint/Cycle: <cycle name>. Moving to next ticket: <next ticket name> (Module: <module>, Sprint/Cycle: <cycle name>)`
  with a short summary of what changed and anything left open.
- If a ticket is blocked, say so clearly (`BLOCKED: <ticket name> | Module | Sprint/Cycle, reason`) instead of silently moving on.
- Commit messages should reference the ticket id or name when one exists.
