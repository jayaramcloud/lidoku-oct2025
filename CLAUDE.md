# CLAUDE.md

The lidoku.com landing site. The product itself (courses, sign-in, lab machines) is the app at app.lidoku.com, repo `jayaramcloud/lidoku-turbo`; start with its `CLAUDE.md` for the whole system.

## What's here

- Next.js 15, App Router, Tailwind; **static export** (`output: 'export'`, `trailingSlash: true`) to `out/`.
- `lib/courses.ts`: all course copy (modules, skills, outcomes), each track's lab-machine blurb and sample commands, `labsReady` per track, and the app links (`NEXT_PUBLIC_APP_URL`, default `https://app.lidoku.com`).
- `components/`: `site-chrome.tsx` (nav + footer), `terminal-demo.tsx` (animated replay of real lab sessions; respects reduced motion), `course-page.tsx` (layout of `/linux`, `/docker`, `/kubernetes`).
- Look: dark zinc + teal brand `#4ee8c2`, the same as the app.

## Commands

```bash
npm ci
npm run dev                       # http://localhost:3000
npm run build && npm run lint     # build writes out/
npx wrangler pages deploy         # production: Cloudflare Pages project lidoku-landing (wrangler.toml)
```

Deploys are manual (direct upload, no Git integration). Production is on Cloudflare Pages with custom domains `lidoku.com` and `www.lidoku.com`; Vercel is only the domain registrar now, and `vercel.json` is unused.

## Rules

- Claims must be true of the product: Kubernetes stays "Labs coming soon" (`labsReady: false`) until its lab machines ship; no pricing claims ("free", prices) without the owner's say.
- The terminal demo shows real outputs captured from lab machines; keep it that way.
- Keep every page statically exportable (no server functions, no `next/image` optimization).
