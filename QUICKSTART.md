# LiDoKu - Quick Start Guide

## What You Have

A complete Next.js SPA for lidoku.com featuring:
- Modern, responsive design with Tailwind CSS
- Three training sections: Linux, Docker, Kubernetes
- Optimized for Vercel deployment
- TypeScript for type safety
- SEO-friendly structure

## Deploy to Vercel in 3 Steps

### Option 1: Deploy via GitHub (Recommended)

```bash
# 1. Initialize Git and push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/lidoku.git
git push -u origin main

# 2. Go to vercel.com → Import Project → Select your repo → Deploy

# 3. Add your domain in Vercel:
#    Settings → Domains → Add lidoku.com
```

### Option 2: Deploy via Vercel CLI (Fastest)

```bash
# 1. Install and login
npm install -g vercel
vercel login

# 2. Deploy
vercel --prod

# 3. Add domain in Vercel dashboard
```

## Local Preview

```bash
npm run dev      # Development mode (http://localhost:3000)
npm run build    # Production build
npm run start    # Production preview
```

## Next Steps After Deployment

1. Verify your site at https://lidoku.com
2. Check SSL certificate is active
3. Test responsive design on mobile
4. Customize content in `app/page.tsx`
5. Add more pages as needed

## File Structure

```
oct2025/
├── app/
│   ├── page.tsx         ← Main landing page (edit here)
│   ├── layout.tsx       ← Site layout & metadata
│   └── globals.css      ← Global styles
├── DEPLOYMENT.md        ← Full deployment guide
└── package.json         ← Dependencies
```

## Need Help?

See DEPLOYMENT.md for detailed step-by-step instructions.
