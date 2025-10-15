# Deploying LiDoKu to Vercel

Your LiDoKu site is now successfully deployed at **https://lidoku.com**

This guide documents the deployment process and provides instructions for future updates.

## Prerequisites

- ✓ Vercel account at https://vercel.com
- ✓ GitHub account with repository access
- ✓ lidoku.com domain registered in Vercel
- ✓ Git and Node.js installed locally

## Deployment Process Used

### Step 1: Set Up SSH Authentication

GitHub requires SSH or Personal Access Token for authentication:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add key to GitHub
# Go to: https://github.com/settings/ssh/new
# Copy your public key: cat ~/.ssh/id_ed25519.pub
# Paste and save

# Configure Git remote for SSH
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

### Step 2: Push Code to GitHub

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit - LiDoKu training site"

# Add remote and push
git remote add origin git@github.com:jayaramcloud/lidoku-oct2025.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel via Dashboard

1. **Log in to Vercel:**
   - Go to https://vercel.com/dashboard
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `jayaramcloud/lidoku-oct2025`
   - Click "Import"

3. **Configure (Auto-detected):**
   - Framework Preset: **Next.js** ✓
   - Root Directory: `./`
   - Build Command: `npm run build` ✓
   - Output Directory: `.next` ✓
   - Install Command: `npm install` ✓
   - **Click "Deploy"**

4. **Wait for Build:**
   - Build completes in 2-3 minutes
   - You'll get a preview URL: `https://lidoku-oct2025.vercel.app`

### Step 4: Connect Domain

1. **Add Domain:**
   - Go to Project → Settings → Domains
   - Click "Add Domain"
   - Enter: `lidoku.com`
   - Click "Add"

2. **DNS Configuration:**
   - Since lidoku.com is registered in Vercel, DNS is automatic ✓
   - Domain shows "Valid Configuration" when ready

3. **Add www subdomain (Optional):**
   - Click "Add Domain"
   - Enter: `www.lidoku.com`
   - Vercel provides CNAME value if needed

4. **SSL Certificate:**
   - Automatically provisioned by Vercel ✓
   - Takes 1-2 minutes after DNS verification

## Site Structure

```
lidoku.com/              → Home page with all courses
├── /linux              → Linux training page
├── /docker             → Docker training page
└── /kubernetes         → Kubernetes training page
```

## Automatic Deployments

Every time you push to the `main` branch, Vercel automatically:
- Builds your project
- Runs linting
- Deploys to production
- Updates https://lidoku.com

## Making Updates

### Update Course Content

```bash
# Edit files (e.g., app/linux/page.tsx)
# Then commit and push:
git add .
git commit -m "Update Linux course content"
git push

# Vercel deploys automatically in 2-3 minutes
```

### Update Home Page

Edit `app/page.tsx` to modify:
- Hero section
- Course cards
- About section (including instructor info)

### Update Instructor Information

The instructor section is in `app/page.tsx` starting at line 142.

To add a real photo, replace the avatar placeholder:
```tsx
<img
  src="/suma-kadur.jpg"
  alt="Suma Kadur"
  className="w-32 h-32 rounded-full object-cover"
/>
```

Place the image in the `public/` folder.

## Local Development

```bash
# Start development server
npm run dev
# Visit: http://localhost:3000

# Test production build
npm run build
npm start

# Run linter
npm run lint
```

## Monitoring & Analytics

- **Build Logs:** https://vercel.com/jayaramcloud/lidoku-oct2025/deployments
- **Analytics:** Project Dashboard → Analytics tab
- **Domain Status:** Project Dashboard → Settings → Domains

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Test locally: `npm run build`
3. Check for TypeScript errors: `npm run lint`

### Domain Not Working

1. Verify DNS in Vercel: Settings → Domains
2. Check status shows "Valid Configuration"
3. Wait for DNS propagation (5-30 minutes typically)
4. Test with: https://dnschecker.org

### Hydration Warning

If you see hydration errors in development, they're caused by browser extensions (Grammarly, etc.) and won't affect production. Already fixed with `suppressHydrationWarning` in layout.

## Environment Variables

To add environment variables (for future features):

1. Go to: Project → Settings → Environment Variables
2. Add your variables
3. Redeploy or push a new commit

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Production server locally
npm run lint         # Check code quality

# Git workflow
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Deploy to Vercel (automatic)

# SSH
ssh -T git@github.com  # Test GitHub connection
```

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Support:** https://vercel.com/support

## Site is Live! 🎉

- **Production URL:** https://lidoku.com
- **Vercel Dashboard:** https://vercel.com/jayaramcloud/lidoku-oct2025
- **GitHub Repository:** https://github.com/jayaramcloud/lidoku-oct2025

All updates pushed to the `main` branch will automatically deploy to production.
