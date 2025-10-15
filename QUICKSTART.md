# LiDoKu - Quick Start Guide

## 🎉 Your Site is Live!

**Production URL:** https://lidoku.com

## What You Have

A complete Next.js training platform with:
- ✓ Modern, responsive design
- ✓ Home page with course cards
- ✓ Dedicated pages for Linux, Docker, Kubernetes
- ✓ Instructor profile (Suma Kadur)
- ✓ Automatic deployments via Vercel
- ✓ SSL certificate enabled

## Site Pages

- **Home:** https://lidoku.com
- **Linux Course:** https://lidoku.com/linux
- **Docker Course:** https://lidoku.com/docker
- **Kubernetes Course:** https://lidoku.com/kubernetes

## Make Updates

```bash
# 1. Edit your files (e.g., course content)
# 2. Commit and push
git add .
git commit -m "Update course content"
git push

# 3. Vercel automatically deploys in 2-3 minutes
# 4. Check https://lidoku.com
```

## Local Development

```bash
npm run dev      # Start dev server → http://localhost:3000
npm run build    # Test production build
```

## Customize Your Content

### Update Course Pages

Edit these files to add your specific course details:
- `app/linux/page.tsx` - Linux training content
- `app/docker/page.tsx` - Docker training content
- `app/kubernetes/page.tsx` - Kubernetes training content

Each page has a highlighted section at the bottom for your custom content (pricing, enrollment, etc.)

### Update Instructor Photo

1. Add image to `public/` folder (e.g., `public/suma-kadur.jpg`)
2. Edit `app/page.tsx` around line 150
3. Replace the avatar div with:
```tsx
<img
  src="/suma-kadur.jpg"
  alt="Suma Kadur"
  className="w-32 h-32 rounded-full object-cover"
/>
```

### Update Home Page

Edit `app/page.tsx` to modify:
- Hero section (lines 26-51)
- Course cards (lines 60-120)
- About section (lines 124-189)

## Key Files

```
oct2025/
├── app/
│   ├── page.tsx              ← Home page
│   ├── linux/page.tsx        ← Linux course page
│   ├── docker/page.tsx       ← Docker course page
│   ├── kubernetes/page.tsx   ← Kubernetes course page
│   ├── layout.tsx            ← Site layout & metadata
│   └── globals.css           ← Global styles
├── public/                   ← Static files (images, etc.)
├── DEPLOYMENT.md             ← Full deployment guide
└── package.json              ← Dependencies
```

## Quick Links

- **Live Site:** https://lidoku.com
- **Vercel Dashboard:** https://vercel.com/jayaramcloud/lidoku-oct2025
- **GitHub Repo:** https://github.com/jayaramcloud/lidoku-oct2025

## Need Help?

See **DEPLOYMENT.md** for detailed documentation including:
- Troubleshooting
- Environment variables
- Monitoring and analytics
- Full command reference
