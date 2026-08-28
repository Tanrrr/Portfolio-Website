# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Windows-7-desktop-themed portfolio with a single-page, dark-themed, project-first site that leads with IceIQ and the Amazon internship.

**Architecture:** A single-page React app (`App.jsx`) composed of section components (`Hero`, `FeaturedProject`, `Projects`, `Experience`, `About`, `Contact`) rendered in scroll order under a fixed glass `Navbar`, with anchor-link navigation (no client-side routing). Project content lives in a single data module (`src/data/projects.js`) consumed by both the featured case study and the secondary project grid. All desktop-metaphor code (windows, taskbar, icons) is deleted outright rather than adapted.

**Tech Stack:** React (Create React App / `react-scripts`), Tailwind CSS, Framer Motion, react-icons, `@emailjs/browser` (existing contact form, kept and restyled — see Deviation note below).

**Spec:** [docs/superpowers/specs/2026-08-27-portfolio-redesign-design.md](../specs/2026-08-27-portfolio-redesign-design.md)

**Deviation from spec:** The spec called for a simple mailto/social-links contact section, reasoning that a working form added unnecessary complexity. While mapping the file structure for this plan, a fully working `Contact.jsx` (EmailJS form, real service/template IDs, already functional) was found already in the repo, uncommitted. Since the effort tradeoff the spec was weighing no longer applies — the form already exists and works — this plan restyles and keeps that form instead of replacing it with plain links. Flagged here since it differs from what was approved.

## Global Constraints

- Dark theme by default: background `#0a0a0f`, text `#f5f7fa`, accent `#00d4ff`.
- Headline font: Space Grotesk (Google Fonts). Body font: Inter.
- No new dependencies. Remove `7.css` and `react-router-dom` (both tied to the retired desktop concept).
- Single-page site, anchor-link navigation only — no client-side routing.
- No automated test suite is added. Verification is `npm run build`/`npm start` plus manual browser check at each task, per the spec's stated testing bar (a presentational site with no business logic to unit test).
- IceIQ live URL: `https://fantasy.tannerbronson.ca`. IceIQ's repository stays **private** — it's a planned future SaaS product — so its case study links only to the live site, with no GitHub link.
- lottery20 and ChadGPT have no public GitHub repo yet — the owner will push `github.com/Tanrrr/lottery20` and `github.com/Tanrrr/ChadGPT` before launch. The plan links to those URLs on the assumption they'll exist by then.

---

### Task 1: Remove the desktop-concept code and dependencies

**Files:**
- Delete: `src/components/Desktop.jsx`, `src/components/Taskbar.jsx`, `src/components/Win7Window.jsx`, `src/components/DesktopIcon.jsx`, `src/components/GadgetWidget.jsx`, `src/components/MiniBrowser.jsx`, `src/components/Sidebar.jsx`, `src/components/StickyBackground.jsx`, `src/components/AeroBackground.jsx`, `src/components/FishTank.jsx`, `src/components/PeelingAlbum.jsx`, `src/components/MusicPlayer.jsx`, `src/hooks/useWindowManager.js`, `src/pages/Home.jsx`, `src/pages/Resume.jsx`
- Delete (assets): `public/frutiger-bg.png`, `public/windows7start.png`, `public/music/` (directory), `src/images/album/` (directory)
- Modify: `package.json`, `src/App.jsx`

**Interfaces:**
- Produces: `App.jsx` renders an empty placeholder — no exported API, just confirms the app still boots after the desktop cluster is gone.

- [ ] **Step 1: Delete the desktop-concept components and hook**

```bash
cd "c:\Users\tanrr\Desktop\Personal projects\Portfolio-Website"
rm src/components/Desktop.jsx src/components/Taskbar.jsx src/components/Win7Window.jsx \
   src/components/DesktopIcon.jsx src/components/GadgetWidget.jsx src/components/MiniBrowser.jsx \
   src/components/Sidebar.jsx src/components/StickyBackground.jsx src/components/AeroBackground.jsx \
   src/components/FishTank.jsx src/components/PeelingAlbum.jsx src/components/MusicPlayer.jsx \
   src/hooks/useWindowManager.js src/pages/Home.jsx src/pages/Resume.jsx
```

- [ ] **Step 2: Delete now-orphaned assets**

```bash
rm public/frutiger-bg.png public/windows7start.png
rm -rf public/music src/images/album
```

- [ ] **Step 3: Remove the desktop-only dependencies**

```bash
npm uninstall 7.css react-router-dom
```

- [ ] **Step 4: Replace App.jsx with a placeholder**

```jsx
export default function App() {
  return <div />;
}
```

- [ ] **Step 5: Verify the build still succeeds**

Run: `npm run build`
Expected: build completes with no errors (CRA's default warnings, if any, are fine — there should be no "Module not found" errors referencing any deleted file).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove Windows-7-desktop concept and its dependencies"
```

---

### Task 2: Dark theme design tokens, global CSS, and fonts

**Files:**
- Modify: `tailwind.config.js`, `src/index.css`, `public/index.html`, `src/App.jsx`
- Delete: `src/styles/win7.css`

**Interfaces:**
- Produces: Tailwind color tokens `ink`, `panel`, `fg`, `fg-muted`, `accent`, `accent-dim`, `glass-border`; font families `font-display` (Space Grotesk) and `font-sans` (Inter, default body font); CSS component classes `.glass-card`, `.btn-accent`, `.btn-outline`, `.tag`, `.glass-input`, `.heading-accent`. Every later task's components consume these.

- [ ] **Step 1: Rewrite `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        panel: 'rgba(255,255,255,0.04)',
        fg: '#f5f7fa',
        'fg-muted': 'rgba(245,247,250,0.65)',
        accent: '#00d4ff',
        'accent-dim': 'rgba(0,212,255,0.20)',
        'glass-border': 'rgba(255,255,255,0.10)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        'mesh-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(4%, -6%) scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'mesh-drift': 'mesh-drift 14s ease-in-out infinite',
      },
      boxShadow: {
        glass:      '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
        'accent-glow': '0 0 24px rgba(0,212,255,0.35)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
```

- [ ] **Step 2: Delete the old Windows-7 stylesheet**

```bash
rm src/styles/win7.css
```

- [ ] **Step 3: Rewrite `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0a0a0f;
    color: #f5f7fa;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', 'Inter', sans-serif;
  }
}

@layer components {
  .glass-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 1.2rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06);
  }

  .btn-accent {
    @apply relative overflow-hidden font-semibold rounded-2xl px-6 py-3 no-underline inline-block;
    color: #0a0a0f;
    background: #00d4ff;
    box-shadow: 0 4px 20px rgba(0,212,255,0.35);
    transition: transform 0.15s, box-shadow 0.15s;
  }

  .btn-accent:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 28px rgba(0,212,255,0.5);
  }

  .btn-outline {
    @apply relative overflow-hidden font-semibold rounded-2xl px-6 py-3 no-underline inline-block;
    color: #f5f7fa;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.20);
    transition: transform 0.15s, background 0.15s;
  }

  .btn-outline:hover {
    transform: translateY(-1px);
    background: rgba(255,255,255,0.08);
  }

  .tag {
    @apply text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block;
    background: rgba(0,212,255,0.10);
    border: 1px solid rgba(0,212,255,0.30);
    color: #00d4ff;
  }

  .glass-input {
    @apply w-full rounded-xl px-3.5 py-2.5 text-sm outline-none;
    color: #f5f7fa;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.15);
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .glass-input::placeholder {
    color: rgba(245,247,250,0.35);
  }

  .glass-input:focus {
    border-color: rgba(0,212,255,0.6);
    box-shadow: 0 0 0 2px rgba(0,212,255,0.18);
  }

  .heading-accent {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    background: linear-gradient(135deg, #f5f7fa 0%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.04);
}
::-webkit-scrollbar-thumb {
  background: rgba(0,212,255,0.35);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,212,255,0.5);
}
```

- [ ] **Step 4: Add Space Grotesk to the Google Fonts link and update page metadata in `public/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Tanner Bronson — Software Engineer. Amazon SWE intern building full-stack and cloud-native applications, including IceIQ, a serverless fantasy hockey analytics platform." />
    <link rel="icon" href="%PUBLIC_URL%/profile.png" />
    <title>Tanner Bronson — Software Engineer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

- [ ] **Step 5: Update `App.jsx` to prove the tokens work**

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <h1 className="heading-accent text-4xl p-8">Tanner Bronson</h1>
    </div>
  );
}
```

- [ ] **Step 6: Verify visually**

Run: `npm start`, open `http://localhost:3000`.
Expected: near-black background, "Tanner Bronson" heading in Space Grotesk with a white-to-cyan gradient fill. No console errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: establish dark theme design tokens and global styles"
```

---

### Task 3: Rebuild the nav

**Files:**
- Modify: `src/components/Navbar.jsx`, `src/App.jsx`

**Interfaces:**
- Consumes: `.heading-accent`, `bg-ink`/`bg-accent-dim`/`text-fg`/`text-fg-muted` tokens, `scrollbar-hide` utility (from `tailwind-scrollbar-hide`, already installed) — all from Task 2.
- Produces: `<Navbar />` — floating fixed nav with anchor links to `#iceiq`, `#projects`, `#experience`, `#about`, `#contact`, and active-section highlighting via `IntersectionObserver`. Later tasks' sections must use exactly these `id`s.

- [ ] **Step 1: Rewrite `src/components/Navbar.jsx`**

```jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Featured',   href: '#iceiq' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

const SECTION_IDS = ['hero', 'iceiq', 'projects', 'experience', 'about', 'contact'];

function useActiveSection() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers = SECTION_IDS.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      observer.observe(el);
      return observer;
    }).filter(Boolean);

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl border-b transition-colors ${
        scrolled ? 'bg-ink/80 border-glass-border' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={e => handleNav(e, '#hero')}
          className="heading-accent font-display font-bold text-lg no-underline flex-shrink-0"
        >
          Tanner Bronson
        </a>

        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = active === href.replace('#', '');
            return (
              <a
                key={href}
                href={href}
                onClick={e => handleNav(e, href)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium no-underline whitespace-nowrap transition-colors ${
                  isActive ? 'bg-accent-dim text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Add the nav to `App.jsx`**

```jsx
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <h1 className="heading-accent text-4xl p-8 pt-24">Tanner Bronson</h1>
    </div>
  );
}
```

- [ ] **Step 3: Verify visually**

Run: `npm start`.
Expected: a floating glass nav bar at the top with the logo and five links (Featured, Projects, Experience, About, Contact). Nothing scrolls anywhere useful yet (target sections don't exist) — that's expected at this point. No console errors. Narrow the browser window and confirm the link row scrolls horizontally without wrapping or overflowing the page.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: rebuild nav for the single-page dark theme"
```

---

### Task 4: Hero section

**Files:**
- Create: `src/pages/Hero.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: design tokens from Task 2; `src/images/me4.jpg` and `src/images/resume.pdf` (both already present in the repo).
- Produces: `<Hero />` rendering `<section id="hero">` — the anchor target `#hero` that `Navbar`'s logo link points at.

- [ ] **Step 1: Create `src/pages/Hero.jsx`**

```jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import headshot from '../images/me4.jpg';
import resumePdf from '../images/resume.pdf';

const SOCIALS = [
  { href: 'https://github.com/Tanrrr', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tanner-bronson-04399b238/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:tanrrrbronson@gmail.com', icon: FaEnvelope, label: 'Email' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl animate-mesh-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl animate-mesh-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', animationDelay: '-7s' }}
      />

      <div className="relative max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={headshot}
          alt="Tanner Bronson"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-glass-border shadow-glass-lg flex-shrink-0"
        />

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-accent text-4xl md:text-6xl font-bold leading-tight mb-3"
          >
            Tanner Bronson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-fg-muted font-medium mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-fg-muted leading-relaxed max-w-xl mb-8"
          >
            I build full-stack and cloud-native applications — most recently a
            serverless SaaS analytics platform and internal tooling at Amazon.
            Based in Edmonton, Alberta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="#iceiq" className="btn-accent">View My Work</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
            <a href={resumePdf} download="Tanner_Bronson_Resume.pdf" className="btn-outline">
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex gap-5"
          >
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-fg-muted hover:text-accent transition-colors"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire it into `App.jsx`**

```jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
    </div>
  );
}
```

- [ ] **Step 3: Verify visually**

Run: `npm start`.
Expected: full-height hero with headshot, name, title, pitch, three CTA buttons, and social icons, with two soft glowing blobs drifting slowly behind it. "View My Work" and "Get in Touch" don't scroll anywhere yet (targets don't exist) — expected at this point. "Download Resume" should download the PDF immediately. No console errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add hero section"
```

---

### Task 5: Project data and the IceIQ case study

**Files:**
- Create: `src/data/projects.js`, `src/pages/FeaturedProject.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: design tokens and `GlassCard` (existing, unmodified) from earlier tasks.
- Produces: `export const PROJECTS` — an array of objects shaped `{ id, title, tagline, description, stack: string[], metrics?: {label, value}[], outcome?: string, live?: string, github?: string, featured?: true }`. Tasks 5 and 6 both consume this shape; `metrics` is only present on the featured entry, `outcome` only on the secondary ones. `<FeaturedProject />` renders `<section id="iceiq">`.

- [ ] **Step 1: Create `src/data/projects.js`**

```js
export const PROJECTS = [
  {
    id: "iceiq",
    title: "IceIQ",
    tagline: "Multi-user fantasy hockey analytics SaaS",
    description:
      "IceIQ links to a user's Yahoo Fantasy account and turns their league data into standings, power rankings, a luck index, performance heatmaps, and auto-generated weekly recaps. The backend is fully serverless: Lambda functions behind API Gateway sync league data from the Yahoo Fantasy API, fan out daily sync jobs through SQS, and compute analytics into DynamoDB. Clerk handles authentication (email, Google, Apple) and every API call is JWT-authorized and scoped to the user's own leagues.",
    stack: ["React", "AWS Lambda", "API Gateway", "DynamoDB", "SQS", "Clerk", "Yahoo Fantasy API"],
    metrics: [
      { label: "Active users", value: "100+" },
      { label: "Monthly infra cost", value: "$0" },
      { label: "Critical flows", value: "Playwright E2E" },
    ],
    live: "https://fantasy.tannerbronson.ca",
    featured: true,
  },
  {
    id: "lottery20",
    title: "lottery20",
    tagline: "Fantasy draft lottery platform",
    description:
      "A Next.js app that runs fantasy league draft lotteries with animated ball-draw results. Supabase handles auth and data with row-level security enforcing that league members can only see and act on their own league's data, backed by a full unit, integration, and Playwright E2E test suite.",
    stack: ["Next.js", "TypeScript", "Supabase", "Playwright"],
    outcome: "Full unit/integration/E2E coverage with Supabase RLS-enforced multi-tenant security.",
    github: "https://github.com/Tanrrr/lottery20",
  },
  {
    id: "fantasytracker",
    title: "fantasytracker",
    tagline: "Fantasy hockey stat visualizer",
    description:
      "A Python pipeline that pulls a season of Yahoo Fantasy Hockey data and turns it into shareable infographics — seasonal awards, stat leaderboards, and visual recaps generated automatically with pandas and matplotlib.",
    stack: ["Python", "pandas", "matplotlib", "Pillow"],
    outcome: "Automates a season's worth of league stats into ready-to-share visual recaps.",
    github: "https://github.com/Tanrrr/FantasyHockeyTracker",
  },
  {
    id: "chadgpt",
    title: "ChadGPT",
    tagline: "Local LLM chat app",
    description:
      "A self-hosted chat interface for a locally-running LLM (llama.cpp), with a FastAPI backend, streaming responses, and optional live web search grounding.",
    stack: ["Python", "FastAPI", "llama.cpp"],
    outcome: "Full chat experience — streaming, history, optional web search — running entirely on local infrastructure.",
    github: "https://github.com/Tanrrr/ChadGPT",
  },
];
```

- [ ] **Step 2: Create `src/pages/FeaturedProject.jsx`**

```jsx
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { PROJECTS } from '../data/projects';

const iceiq = PROJECTS.find(p => p.id === 'iceiq');

export default function FeaturedProject() {
  return (
    <section id="iceiq" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="tag mb-4"
      >
        Featured Project
      </motion.p>

      <GlassCard style={{ padding: '40px 44px' }}>
        <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-2">
          {iceiq.title}
        </h2>
        <p className="text-fg-muted text-lg mb-6">{iceiq.tagline}</p>
        <p className="text-fg-muted leading-relaxed mb-8">{iceiq.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {iceiq.metrics.map(({ label, value }) => (
            <div key={label}>
              <p className="heading-accent text-2xl font-bold">{value}</p>
              <p className="text-fg-muted text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {iceiq.stack.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={iceiq.live} target="_blank" rel="noopener noreferrer" className="btn-accent">
            View Live Site
          </a>
        </div>
      </GlassCard>
    </section>
  );
}
```

Note: no GitHub link here — IceIQ's repo is private (planned future SaaS product).

- [ ] **Step 3: Wire it into `App.jsx`**

```jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import FeaturedProject from './pages/FeaturedProject';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
      <FeaturedProject />
    </div>
  );
}
```

- [ ] **Step 4: Verify visually**

Run: `npm start`, scroll down or click "Featured" in the nav.
Expected: the IceIQ case study renders with description, three metrics (100+, $0, Playwright E2E), stack tags, and one working link ("View Live Site" opens `fantasy.tannerbronson.ca`) — no GitHub link. Nav highlights "Featured" while this section is in view.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add project data and IceIQ featured case study"
```

---

### Task 6: Secondary projects grid

**Files:**
- Create: `src/components/ProjectCard.jsx`
- Modify: `src/pages/Projects.jsx` (full rewrite — replaces the old four-project list), `src/App.jsx`

**Interfaces:**
- Consumes: `PROJECTS` from Task 5, `GlassCard` (existing).
- Produces: `<ProjectCard project={...} delay={...} />`; `<Projects />` rendering `<section id="projects">`.

- [ ] **Step 1: Create `src/components/ProjectCard.jsx`**

```jsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from './GlassCard';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <GlassCard delay={delay} hover style={{ padding: '28px 32px' }} className="flex flex-col gap-3">
      <h3 className="font-display font-bold text-xl text-fg">{project.title}</h3>
      <p className="text-accent text-sm font-semibold">{project.tagline}</p>
      <p className="text-fg-muted text-sm leading-relaxed flex-1">{project.description}</p>
      {project.outcome && (
        <p className="text-fg-muted text-sm leading-relaxed italic">{project.outcome}</p>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.stack.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <FaExternalLinkAlt size={13} /> Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
          >
            <FaGithub size={15} /> GitHub
          </a>
        )}
      </div>
    </GlassCard>
  );
}
```

- [ ] **Step 2: Rewrite `src/pages/Projects.jsx`**

```jsx
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';

const secondary = PROJECTS.filter(p => !p.featured);

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-2">More Projects</h2>
      <p className="text-fg-muted mb-10">A few other things I've built recently.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondary.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire it into `App.jsx`**

```jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import FeaturedProject from './pages/FeaturedProject';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
    </div>
  );
}
```

- [ ] **Step 4: Verify visually**

Run: `npm start`, click "Projects" in the nav.
Expected: three glass cards (lottery20, fantasytracker, ChadGPT) fade up on scroll, each with stack tags and a GitHub link. Cards lift slightly on hover. GitHub links for lottery20/ChadGPT will 404 until those repos are pushed — expected per the plan's constraints.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add secondary projects grid"
```

---

### Task 7: Experience section

**Files:**
- Create: `src/pages/Experience.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `GlassCard`, design tokens.
- Produces: `<Experience />` rendering `<section id="experience">`.

- [ ] **Step 1: Create `src/pages/Experience.jsx`**

```jsx
import GlassCard from '../components/GlassCard';

const HIGHLIGHTS = [
  'Built a self-service React app that let 5 engineering teams deploy and manage their own alarm configurations, replacing a manual process.',
  'Developed automation with AWS Lambda and CloudWatch to provision alarm points programmatically, reducing hands-on setup per team.',
  'Collaborated in an Agile team on iterative delivery and rapid problem-solving.',
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-10">Experience</h2>

      <GlassCard style={{ padding: '36px 40px' }} className="border-l-4 border-l-accent">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-xl text-fg">Software Engineer Intern</h3>
          <span className="text-fg-muted text-sm">May 2025 – July 2025</span>
        </div>
        <p className="text-accent font-semibold mb-5">Amazon</p>

        <ul className="flex flex-col gap-3">
          {HIGHLIGHTS.map(item => (
            <li key={item} className="flex gap-3 text-fg-muted leading-relaxed">
              <span className="text-accent mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </section>
  );
}
```

- [ ] **Step 2: Wire it into `App.jsx`**

```jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import FeaturedProject from './pages/FeaturedProject';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Experience />
    </div>
  );
}
```

- [ ] **Step 3: Verify visually**

Run: `npm start`, click "Experience" in the nav.
Expected: a glass card with a cyan left accent bar, "Software Engineer Intern — Amazon", dates, and three bullet highlights.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add experience section"
```

---

### Task 8: About/skills section

**Files:**
- Modify: `src/pages/About.jsx` (full rewrite of the existing file — replaces the placeholder interests/skills content), `src/App.jsx`

**Interfaces:**
- Consumes: `GlassCard`, design tokens.
- Produces: `<About />` rendering `<section id="about">`.

- [ ] **Step 1: Rewrite `src/pages/About.jsx`**

```jsx
import GlassCard from '../components/GlassCard';

const SKILLS = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C#', 'C++'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Next.js', 'Selenium', 'REST API'] },
  { category: 'Databases & Tools', items: ['MySQL', 'SQLite3', 'Git', 'AWS', 'Firebase', 'Figma'] },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-10">About</h2>

      <GlassCard style={{ padding: '36px 40px' }} className="mb-6">
        <p className="text-fg-muted leading-relaxed mb-4">
          I'm a Computer Science student at the University of Alberta and a
          software engineer who likes building things end-to-end — from
          serverless cloud backends to the frontends that sit on top of them.
          My recent work spans AWS-based SaaS platforms, internal tooling at
          Amazon, and full-stack apps with real users.
        </p>
        <p className="text-fg-muted leading-relaxed">
          University of Alberta — B.Sc. Computer Science, expected 2028.
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map(({ category, items }) => (
          <GlassCard key={category} style={{ padding: '24px 28px' }}>
            <h3 className="text-accent text-xs font-bold uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(item => <span key={item} className="tag">{item}</span>)}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire it into `App.jsx`**

```jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import FeaturedProject from './pages/FeaturedProject';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Experience />
      <About />
    </div>
  );
}
```

- [ ] **Step 3: Verify visually**

Run: `npm start`, click "About" in the nav.
Expected: bio + education line in one card, three skill-category cards below it (Languages, Frameworks, Databases & Tools) with tag pills.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add about/skills section"
```

---

### Task 9: Contact section and footer

**Files:**
- Modify: `src/pages/Contact.jsx` (restyle for dark theme — keeps the existing EmailJS logic as-is, see Deviation note in the plan header), `src/App.jsx`

**Interfaces:**
- Consumes: `GlassCard`, design tokens, `@emailjs/browser` (existing dependency, existing service/template IDs already in the current file).
- Produces: `<Contact />` rendering `<section id="contact">`, plus a footer line.

- [ ] **Step 1: Rewrite `src/pages/Contact.jsx`**

```jsx
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const FIELDS = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'subject', label: 'Subject', type: 'text' },
];

const SOCIALS = [
  { href: 'https://github.com/Tanrrr', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tanner-bronson-04399b238/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:tanrrrbronson@gmail.com', icon: FaEnvelope, label: 'tanrrrbronson@gmail.com' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    emailjs.init('WqJJg1oSstq-q621m');
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });
    try {
      const response = await emailjs.send('service_0jnmt78', 'template_1', {
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      if (response.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'error', message: `Failed to send: ${error.message || 'Please try again.'}` });
    }
  };

  return (
    <section id="contact" className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="heading-accent text-3xl md:text-4xl font-bold mb-10">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard style={{ padding: '32px 36px' }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {FIELDS.map(({ id, label, type }) => (
              <div key={id}>
                <label className="text-sm font-medium text-fg-muted block mb-1.5">{label}</label>
                <input
                  type={type} id={id} name={id}
                  value={formData[id]} onChange={handleChange} required
                  className="glass-input"
                />
              </div>
            ))}

            <div>
              <label className="text-sm font-medium text-fg-muted block mb-1.5">Message</label>
              <textarea
                id="message" name="message"
                value={formData.message} onChange={handleChange} required
                rows={4} className="glass-input resize-y"
              />
            </div>

            <motion.button
              type="submit"
              className="btn-accent mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.message && (
              <p className={`text-center text-sm ${
                status.type === 'success' ? 'text-green-400'
                : status.type === 'error' ? 'text-red-400'
                : 'text-fg-muted'
              }`}>
                {status.message}
              </p>
            )}
          </form>
        </GlassCard>

        <GlassCard style={{ padding: '32px 36px' }}>
          <h3 className="font-display font-bold text-xl text-fg mb-3">Let's connect</h3>
          <p className="text-fg-muted leading-relaxed mb-6">
            I'm always open to chatting about new opportunities, interesting
            problems, or anything you're building.
          </p>

          <div className="flex flex-col gap-4">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-fg-muted hover:text-accent transition-colors text-sm font-medium"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </GlassCard>
      </div>

      <p className="text-center text-fg-muted text-xs mt-16 pb-8">
        © {new Date().getFullYear()} Tanner Bronson. Built with React & Tailwind.
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Wire it into `App.jsx`**

```jsx
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import FeaturedProject from './pages/FeaturedProject';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
```

- [ ] **Step 3: Verify visually**

Run: `npm start`, click "Contact" in the nav.
Expected: a form card (name/email/subject/message, styled to the dark theme) and a "Let's connect" card with social links, plus a copyright footer line. Fill out the form and submit — expect either a success message or a clear error message (network-dependent; the point is the request fires and the UI reflects the result, not that delivery is guaranteed in this check).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add contact section and footer"
```

---

### Task 10: Full-site QA pass

**Files:**
- None expected — this task is verification only. If it finds a real problem, fix it in the specific file(s) at fault before committing.

**Interfaces:**
- Consumes: the complete site from Tasks 1–9.

- [ ] **Step 1: Production build check**

Run: `npm run build`
Expected: builds cleanly with no errors.

- [ ] **Step 2: Full manual walkthrough**

Run: `npm start`, then in the browser:
- Scroll top to bottom once without clicking the nav — confirm every section appears in order (Hero → IceIQ → Projects → Experience → About → Contact) with no layout breaks or overlapping content.
- Click every nav link — confirm each scrolls to the correct section and the nav highlights it.
- Resize the browser to a narrow (mobile) width — confirm the nav link row scrolls horizontally instead of wrapping/breaking, the hero stacks to a single column, and the project/skill grids collapse to one column.
- Confirm both external links on the IceIQ card and all social links open the correct URLs in a new tab.
- Confirm "Download Resume" downloads `src/images/resume.pdf`.

- [ ] **Step 3: Fix anything the walkthrough surfaces, then commit**

```bash
git add -A
git commit -m "fix: address issues found in full-site QA pass"
```

(Skip this commit if the walkthrough found nothing to fix.)

---

## Non-goals (explicitly out of scope, per the spec)

- Migrating off Create React App to Vite.
- Building a working contact form from scratch (superseded — see Deviation note; the existing form is kept instead).
- Capturing real IceIQ screenshots for the case study (the section is built to stand on its own with text/metrics; screenshots can be added as a follow-up once available).
- Pushing `lottery20` and `ChadGPT` to GitHub — the site's owner will do this before launch; until then those two GitHub links in the projects grid will 404.
