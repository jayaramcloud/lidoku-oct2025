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
oct2025/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   ├── linux/
│   │   └── page.tsx          # Linux course page
│   ├── docker/
│   │   └── page.tsx          # Docker course page
│   └── kubernetes/
│       └── page.tsx          # Kubernetes course page
├── public/                   # Static assets (images, etc.)
├── components/               # Reusable React components (future)
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies
├── DEPLOYMENT.md             # Detailed deployment guide
├── QUICKSTART.md             # Quick reference guide
└── README.md                 # This file
```

## Customization

### Update Course Content

Each course page has a highlighted section for custom content:
- Edit `app/linux/page.tsx` for Linux course details
- Edit `app/docker/page.tsx` for Docker course details
- Edit `app/kubernetes/page.tsx` for Kubernetes course details

### Add Instructor Photo

1. Place image in `public/` folder
2. Edit `app/page.tsx` around line 150
3. Replace avatar placeholder with image component

### Modify Branding

- **Site Title:** Edit `app/layout.tsx` (line 5)
- **Logo:** Edit `app/page.tsx` (line 11)
- **Colors:** Adjust in individual page components or `tailwind.config.ts`

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
