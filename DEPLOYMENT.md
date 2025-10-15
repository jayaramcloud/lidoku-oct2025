# Deploying LiDoKu to Vercel

This guide will walk you through deploying your Next.js site to Vercel and connecting it to your lidoku.com domain.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- Git installed on your computer
- Your lidoku.com domain already added to Vercel

## Step-by-Step Deployment Instructions

### Step 1: Initialize Git Repository

```bash
cd /home/jay/lidoku/oct2025
git init
git add .
git commit -m "Initial commit - LiDoKu training site"
```

### Step 2: Create GitHub Repository (Recommended)

1. Go to https://github.com/new
2. Create a new repository named "lidoku" (can be private or public)
3. DO NOT initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

### Step 3: Push to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/lidoku.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel (Method 1 - Via Dashboard)

1. Log in to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository (lidoku)
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)
5. Click "Deploy"
6. Wait 2-3 minutes for the build to complete

### Step 4 Alternative: Deploy via Vercel CLI

If you prefer using the command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? lidoku
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

### Step 5: Connect Your Custom Domain (lidoku.com)

1. In Vercel Dashboard, go to your project
2. Click on "Settings" tab
3. Click on "Domains" in the left sidebar
4. You should see lidoku.com already listed (since you own it)
5. Click "Add" and enter: `lidoku.com`
6. Click "Add" again and enter: `www.lidoku.com`
7. Vercel will automatically configure DNS (if managed by Vercel)

### Step 6: Configure DNS (if not using Vercel DNS)

If your domain DNS is NOT managed by Vercel:

**For lidoku.com (root domain):**
- Type: A
- Name: @ (or leave blank)
- Value: 76.76.19.19 (Vercel's IP)

**For www.lidoku.com:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

**Important:** DNS changes can take 1-48 hours to propagate.

### Step 7: Verify Deployment

1. Visit https://your-project.vercel.app (temporary URL)
2. Once DNS propagates, visit https://lidoku.com
3. Verify SSL certificate is active (should show padlock in browser)

## Automatic Deployments

Every time you push to the `main` branch on GitHub, Vercel will automatically:
- Build your project
- Run tests (if configured)
- Deploy to production
- Update lidoku.com

### Making Updates

```bash
# Make your changes to the code
# Then:
git add .
git commit -m "Description of changes"
git push

# Vercel will automatically deploy in 2-3 minutes
```

## Monitoring & Analytics

- **Build Logs:** Vercel Dashboard → Your Project → Deployments → Click on a deployment
- **Analytics:** Vercel Dashboard → Your Project → Analytics tab
- **Domain Status:** Vercel Dashboard → Your Project → Settings → Domains

## Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Check for missing dependencies

**Domain not working:**
- Verify DNS settings are correct
- Wait for DNS propagation (use https://dnschecker.org)
- Check domain configuration in Vercel dashboard

**404 errors:**
- Ensure vercel.json is committed to repository
- Check Next.js routing configuration

## Environment Variables (Future)

If you need to add environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support

## Quick Commands Reference

```bash
# Local development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server locally
npm run lint         # Run ESLint

# Git deployment
git add .
git commit -m "Your message"
git push

# Vercel CLI
vercel               # Deploy to preview
vercel --prod        # Deploy to production
vercel logs          # View logs
```
