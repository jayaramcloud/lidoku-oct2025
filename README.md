> **Moved.** This site now lives in the monorepo [`jayaramcloud/lidoku-turbo`](https://github.com/jayaramcloud/lidoku-turbo) under `apps/landing` (history included), and deploys to Cloudflare Pages from there. This repo is kept read-only for reference.

# LiDoKu - Linux, Docker & Kubernetes Training

**Live Site:** https://lidoku.com

A professional training platform for Linux, Docker, and Kubernetes built with Next.js and deployed on Vercel.

## About

LiDoKu provides comprehensive training and resources for modern DevOps technologies. The platform features dedicated course pages, instructor profiles, and a modern, responsive design.

**Led by:** Suma Kadur - Head of Cloud DevOps/SecOps/SRE with 20+ years of experience in CloudOps, AI Operations, Platform Engineering & Compliance.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Version Control:** GitHub

## Site Structure

```
https://lidoku.com/          → Home page with course overview
├── /linux                   → Linux training course page
├── /docker                  → Docker training course page
└── /kubernetes              → Kubernetes training course page
```

## Features

- ✓ Responsive design (mobile, tablet, desktop)
- ✓ SEO-optimized with metadata
- ✓ Fast page loads (static generation)
- ✓ Automatic HTTPS/SSL
- ✓ Continuous deployment via GitHub
- ✓ Professional instructor profile section

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy Updates

```bash
git add .
git commit -m "Your update message"
git push

# Vercel automatically deploys in 2-3 minutes
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home: hero with live-terminal demo, how it works, paths, about
│   ├── layout.tsx            # Fonts (Inter, JetBrains Mono) and site metadata
│   ├── globals.css           # Dark theme shared with the Lidoku app (zinc + teal brand)
│   └── linux/ docker/ kubernetes/page.tsx   # One line each: <CoursePage course=... />
├── components/
│   ├── site-chrome.tsx       # Nav + footer used by every page
│   ├── terminal-demo.tsx     # Animated replay of real lab sessions (client component)
│   └── course-page.tsx       # Layout for a training path
├── lib/courses.ts            # All course content + the app links
└── tailwind.config.ts
```

## Customization

- **Course content:** everything (modules, skills, outcomes, sample lab commands) is in `lib/courses.ts`.
- **Labs live / coming soon:** `labsReady` per course in `lib/courses.ts`. Kubernetes is `false` until its lab machines ship.
- **Where "Start learning" goes:** set `NEXT_PUBLIC_APP_URL` in Vercel to the Lidoku app's URL (default `https://app.lidoku.com`); sign-up links go to `$NEXT_PUBLIC_APP_URL/auth/signup`.
- **Instructor photo:** put an image in `public/` and replace the `SK` block in `app/page.tsx`.

## Deployment

The site is deployed on Vercel with automatic deployments from the `main` branch.

- **Production URL:** https://lidoku.com
- **Vercel Dashboard:** https://vercel.com/jayaramcloud/lidoku-oct2025
- **GitHub Repository:** https://github.com/jayaramcloud/lidoku-oct2025

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Links & Resources

- **Live Site:** https://lidoku.com
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Docs:** https://vercel.com/docs

## License

Copyright © 2025 LiDoKu. All rights reserved.

## Support

For deployment issues or technical questions, refer to:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide
- [QUICKSTART.md](./QUICKSTART.md) - Quick reference
- Vercel Support: https://vercel.com/support

---

**Status:** ✅ Live and deployed at https://lidoku.com
