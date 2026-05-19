# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve dist/ locally
```

No linter or test suite is configured.

## CTA link

The primary "Open in Telegram" button reads `VITE_MIRA_CTA_URL` at build time.

```bash
cp .env.example .env   # then set VITE_MIRA_CTA_URL=<referral link>
```

Set the same variable in **Vercel → Settings → Environment Variables** for production. The fallback is `https://t.me/MiraAIBot`.

## Architecture

**Stack:** React 18 + Vite, React Router v6, CSS Modules. No UI library, no TypeScript.

**i18n** (`src/i18n/`): a single `LangProvider` wraps the entire app in `main.jsx`. Every component that needs text calls `const { t } = useLang()`. All copy for both languages lives in `src/i18n/translations.js` — this is the only file to edit for text changes.

**Routing** (`src/App.jsx`): three routes — `/`, `/group-chats`, `/blog`. The latter two are stub pages that share `src/pages/StubPage.module.css`.

**Component hierarchy:**
- `Header` + `Footer` are shared layout; `Header` owns the EN/RU language toggle and the CTA button.
- `CTAButton` is the single source of truth for the CTA href — it reads the env var and accepts an optional `href` prop override.
- Page sections live in `src/sections/` and are composed in `src/pages/Home.jsx`.

**Design tokens** are in `src/styles/tokens.css` (colors, spacing, type scale, shadows, radii). `src/styles/global.css` sets the body background gradient, reset, and the `.container` utility class.

## Assets

Phone screenshots are in `public/assets/` as both PNG and WebP. The `<picture>` elements in `Hero.jsx` and `HowItWorks.jsx` serve WebP first with PNG fallback. The center phone (`photo-center.*`) is preloaded in `index.html`.

| File | Used in |
|---|---|
| `phone-left.png/.webp` | Hero left |
| `photo-center.png/.webp` | Hero center + HowItWorks |
| `phone-right.png/.webp` | Hero right |

When replacing screenshots, regenerate the WebP files:
```bash
cwebp -q 82 photo-center.png -o photo-center.webp
```

## Mobile hero

On ≤640px the three-phone composition is hidden and replaced by a CSS scroll-snap carousel (`src/sections/Hero.jsx`). The carousel auto-scrolls to the center phone on mount and tracks the active dot via a `scroll` event listener.
