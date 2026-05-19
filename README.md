# miraai.fun

Promotional landing page for [Mira](https://miraai.fun) — the personal AI agent that acts inside Telegram.

## Stack

- React 18 + Vite
- CSS Modules
- React Router v6

## Getting started

```bash
npm install
cp .env.example .env   # add your CTA referral link
npm run dev            # http://localhost:5173
```

## CTA link

The main "Open App" button reads from the environment:

```env
VITE_MIRA_CTA_URL=https://t.me/mira?start=your_ref
```

Set this in `.env` for local dev and in **Vercel → Settings → Environment Variables** for production. No code change needed.

## Phone screenshots

Drop replacements into `public/assets/` — filenames must match exactly:

| File | Used in |
|---|---|
| `public/assets/phone-left.png` | Hero (left, tilted) |
| `public/assets/photo-center.png` | Hero (center) + How it works |
| `public/assets/phone-right.png` | Hero (right, tilted) |

## Deploy

Deployed on Vercel at **[miraai.fun](https://miraai.fun)**.

Push to `main` → Vercel auto-deploys.
