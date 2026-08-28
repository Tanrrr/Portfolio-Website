# Portfolio Redesign Design Spec

## Problem

The current portfolio is a Windows 7 "Aero desktop" pastiche (draggable windows,
taskbar, glass UI). It reads as a nostalgic gimmick rather than a professional
site, and its content is stale: the Projects page lists four small/old projects
(Unity FPS, Discord bot, Firebase chat app, Selenium scraper) and omits
everything built since, including the Amazon internship and IceIQ — the
strongest project in the portfolio owner's history. Goal: a redesign that reads
as confident and current, built to impress recruiters who scan a site for
roughly 8 seconds looking for top projects, stack, and measurable outcomes.

## Decision: drop the desktop concept

The Windows-desktop metaphor (windows, taskbar, icons) is removed entirely in
favor of a single-page, modern, project-first site. This was chosen over two
alternatives considered: refining the desktop concept in place, or keeping it
as an opt-in "retro mode" alongside a modern default. Both were rejected —
the owner wants the primary experience to read as professional with real wow
factor, not split attention between two identities.

## Content

**Experience** — Amazon Software Engineering Intern (May–July 2025), using
the resume's existing bullets verbatim:
- Built a self-service React app letting 5 engineering teams manage their own
  alarm configurations, replacing a manual process.
- Built AWS Lambda/CloudWatch automation to provision alarm points
  programmatically.
- Collaborated in an Agile team on iterative delivery.

**Projects** — four featured, all current work (explicitly excluding the
resume's older "Software Applications" entries — QUAKE-style FPS and Roblox
Game Update Notifier — which the owner considers stale and not representative
of current skill level):

1. **IceIQ** (centerpiece, full case-study treatment) — multi-user fantasy
   hockey analytics SaaS. Serverless AWS backend (Lambda, API Gateway,
   DynamoDB, SQS fan-out for daily sync), Clerk auth (email/Google/Apple),
   Yahoo Fantasy API integration, JWT-authorized league-scoped APIs,
   Playwright E2E coverage. Metrics to surface: 100+ users, effectively
   $0/month on AWS Free Tier. Live and deployed — link to the real site,
   plus screenshots.
2. **lottery20** — Next.js + Supabase fantasy draft lottery tool. RLS
   security, full unit/integration/E2E (Playwright) test coverage.
3. **fantasytracker** — Python data pipeline generating stat visualizations
   and infographics from the Yahoo Fantasy API (pandas, matplotlib, Pillow).
4. **ChadGPT** — local LLM chat app on llama.cpp + FastAPI, streaming
   responses, optional web search.

No other projects from the personal-projects folder are featured in this
pass (candidates considered and set aside: draftanalyzertool, shottracker,
playoffscenarios, bbvw2 dex, fantasylottery — each had a documentation or
redundancy gap; PokeCheque and autoquiz were excluded on judgment grounds —
scalper-bot framing and a committed secret, respectively).

Out of scope / noted but not actioned: `autoquiz` has a hardcoded OpenAI API
key committed in its own repo. Unrelated to this project; flagged for the
owner to rotate/remove separately.

## Visual system

- **Theme**: dark by default. Background near-black (e.g. `#0a0a0f`). One
  vivid accent color, electric blue/cyan in the vein of the current brand
  color but applied sparingly rather than as a gradient wash.
- **Glass, refined**: frosted-glass panels for project cards and nav, but
  tighter blur radius, crisper borders, and real drop shadows — a deliberate
  step up from the old Aero glass-card look, not a continuation of it.
- **Motion with intent**: scroll-triggered reveals, a subtle animated
  gradient-mesh/particle field behind the hero, hover lift/glow on project
  cards, smooth section transitions. Framer Motion (already a dependency)
  covers all of this — no new animation library needed.
- **Typography**: Space Grotesk (via Google Fonts) for headlines — a large,
  geometric-sans display face — paired with a clean readable sans (system
  font stack or Inter) for body copy. Type scale carries a meaningful share
  of the "wow" impression.
- **Nav**: slim floating/glass top nav with anchor links to each section.

## Page structure

Single-page, anchor-linked scroll site (no client-side routing):

1. **Hero** — name, title, one-line pitch, socials, resume download. Visible
   without scrolling.
2. **Featured project (IceIQ)** — case study: problem, architecture,
   metrics, live link, screenshots.
3. **Other projects** — grid of lottery20, fantasytracker, ChadGPT as glass
   cards: stack tags, one-line outcome, GitHub/demo links.
4. **Experience** — Amazon internship, given full visual weight.
5. **About/Skills** — brief bio + skills grouped by category (languages,
   frameworks, databases & tools), pulled from the resume's skill list.
6. **Contact** — GitHub/LinkedIn/email links, resume download repeated.

## Tech approach

Reuses existing dependencies; no new libraries added.

**Keep**: React, Tailwind, Framer Motion, react-icons.

**Remove** (dependencies):
- `7.css` — Windows 7 UI library, no longer needed once the desktop concept
  is gone.
- `react-router-dom` — only consumer was the old Sidebar; a single-page site
  navigates via anchor links, not routes.

**Remove** (components, all tied to the retired desktop concept): `Desktop.jsx`,
`Taskbar.jsx`, `Win7Window.jsx`, `DesktopIcon.jsx`, `GadgetWidget.jsx`,
`MiniBrowser.jsx`, `Sidebar.jsx`, `StickyBackground.jsx`, `AeroBackground.jsx`,
`FishTank.jsx`, `PeelingAlbum.jsx`, `MusicPlayer.jsx`.

**Contact form**: `@emailjs/browser` stays installed but unused in this pass.
A simple mailto/social-links contact section is sufficient per the research
on how recruiters scan portfolios; a working form is deferred as optional
future work if the owner wants one later.

**Explicitly out of scope for this redesign**: migrating off Create React App
(`react-scripts`) to Vite. CRA is unmaintained upstream but still builds
correctly; this is a separate tooling decision with its own risk/effort
tradeoff, not a visual-redesign concern.

## Testing

No dedicated test suite exists today (CRA's default `react-scripts test`
scaffold is present but unused). This redesign does not add automated tests —
it's a content/presentation site with no business logic to unit test. Manual
verification in a browser (desktop + mobile viewport) before considering the
work done is the bar, consistent with the project's current practice.
