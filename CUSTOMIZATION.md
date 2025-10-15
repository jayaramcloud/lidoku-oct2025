# LiDoKu Customization Guide

This guide shows you how to customize your LiDoKu training site to match your specific needs.

## Quick Edits

### Update Site Title & Description

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Custom Title - Linux, Docker & Kubernetes Training",
  description: "Your custom description here",
};
```

### Update Logo/Brand Name

Edit `app/page.tsx` (line 11):

```tsx
<Link href="/" className="text-2xl font-bold text-white">
  YourBrand  {/* Change this */}
</Link>
```

### Update Hero Section

Edit `app/page.tsx` (lines 28-35):

```tsx
<h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
  Your Custom Headline
</h1>
<p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
  Your custom tagline or description
</p>
```

## Course Content Customization

### Linux Course Page

File: `app/linux/page.tsx`

**Update course modules** (starting at line 71):
```tsx
<div className="space-y-6">
  {/* Add/edit your modules */}
  <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
    <h3 className="text-xl font-bold text-blue-400 mb-3">Your Module Title</h3>
    <p className="text-gray-300 mb-4">
      Your module description
    </p>
    <div className="text-sm text-gray-500">Duration: X hours</div>
  </div>
</div>
```

**Add custom content** (line 171):
Replace the placeholder section with your:
- Pricing information
- Enrollment links
- Course schedule
- Prerequisites
- Instructor information

### Docker Course Page

File: `app/docker/page.tsx`

Same structure as Linux course. Edit modules starting at line 71 and custom content at line 171.

### Kubernetes Course Page

File: `app/kubernetes/page.tsx`

Same structure. Edit modules at line 71 and custom content at line 171.

## Instructor Profile

### Update Instructor Information

Edit `app/page.tsx` (lines 158-183):

```tsx
<h4 className="text-2xl font-bold text-white mb-2">
  Your Name
</h4>
<p className="text-cyan-400 font-semibold mb-4">
  Your Title
</p>
<p className="text-gray-300 mb-4">
  Your subtitle or specialization
</p>
<p className="text-gray-400 mb-6">
  Your bio and experience description
</p>
```

### Add Instructor Photo

1. **Add your photo** to the `public/` folder:
   ```bash
   # Copy your image
   cp /path/to/your/photo.jpg public/instructor.jpg
   ```

2. **Edit `app/page.tsx`** (around line 150):
   ```tsx
   <div className="flex-shrink-0">
     <img
       src="/instructor.jpg"
       alt="Your Name"
       className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
     />
   </div>
   ```

### Update Expertise Tags

Edit `app/page.tsx` (lines 175-182):

```tsx
<div className="flex flex-wrap gap-2">
  <span className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">
    Your Skill 1
  </span>
  <span className="bg-cyan-900/50 text-cyan-200 px-3 py-1 rounded-full text-sm">
    Your Skill 2
  </span>
  {/* Add more tags */}
</div>
```

## Styling Customization

### Change Color Scheme

The site uses three main colors:
- **Blue** (#3b82f6) - Linux
- **Cyan** (#06b6d4) - Docker
- **Teal** (#14b8a6) - Kubernetes

To change colors, search and replace in files:

**Example: Change Linux blue to purple**
```tsx
// Find and replace in app/page.tsx and app/linux/page.tsx
text-blue-400    → text-purple-400
bg-blue-600      → bg-purple-600
hover:bg-blue-700 → hover:bg-purple-700
border-blue-500  → border-purple-500
```

### Customize Fonts

Edit `app/globals.css`:

```css
body {
  font-family: 'Your Font', Arial, Helvetica, sans-serif;
}
```

Then add the font import in `app/layout.tsx` or use Next.js font optimization.

## Add New Pages

### Create a New Page

1. **Create directory and file:**
   ```bash
   mkdir app/about
   touch app/about/page.tsx
   ```

2. **Add content:**
   ```tsx
   import Link from 'next/link';

   export default function AboutPage() {
     return (
       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
         {/* Copy navigation from other pages */}
         <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
           {/* ... */}
         </nav>

         <section className="px-4 py-20">
           <div className="max-w-4xl mx-auto">
             <h1 className="text-4xl font-bold text-white mb-8">
               About Us
             </h1>
             {/* Your content */}
           </div>
         </section>

         {/* Copy footer from other pages */}
       </div>
     );
   }
   ```

3. **Add link to navigation** in all page files:
   ```tsx
   <Link href="/about" className="text-gray-300 hover:text-white transition">
     About
   </Link>
   ```

## Add Images

### Static Images

1. **Place images** in `public/` folder:
   ```
   public/
   ├── logo.png
   ├── course-banner.jpg
   └── instructor.jpg
   ```

2. **Use in components:**
   ```tsx
   <img src="/logo.png" alt="Logo" className="w-32 h-32" />
   ```

### Optimized Images (Next.js Image)

```tsx
import Image from 'next/image';

<Image
  src="/course-banner.jpg"
  alt="Course Banner"
  width={1200}
  height={600}
  className="rounded-lg"
/>
```

## Add Call-to-Action Buttons

### Add Enrollment Links

Edit course pages (e.g., `app/linux/page.tsx` around line 197):

```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="https://your-enrollment-link.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105"
  >
    Enroll Now - $99
  </a>
  <Link
    href="/contact"
    className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105"
  >
    Contact Us
  </Link>
</div>
```

## Add Analytics

### Google Analytics

1. **Get your GA4 Measurement ID** from Google Analytics

2. **Create `app/components/GoogleAnalytics.tsx`:**
   ```tsx
   'use client';
   import Script from 'next/script';

   export default function GoogleAnalytics({ gaId }: { gaId: string }) {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${gaId}');
           `}
         </Script>
       </>
     );
   }
   ```

3. **Add to `app/layout.tsx`:**
   ```tsx
   import GoogleAnalytics from './components/GoogleAnalytics';

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
           {children}
         </body>
       </html>
     );
   }
   ```

## Testing Changes Locally

After making changes:

```bash
# Test in development
npm run dev
# Visit http://localhost:3000

# Test production build
npm run build
npm start
```

## Deploy Changes

```bash
git add .
git commit -m "Describe your changes"
git push

# Vercel automatically deploys in 2-3 minutes
```

## Common Customizations Checklist

- [ ] Update site title and description
- [ ] Add instructor photo
- [ ] Update instructor bio
- [ ] Customize course modules
- [ ] Add pricing/enrollment information
- [ ] Update contact information
- [ ] Add social media links
- [ ] Customize colors (if desired)
- [ ] Add Google Analytics
- [ ] Test on mobile devices

## Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev

## Additional Resources

- **DEPLOYMENT.md** - Deployment and hosting guide
- **QUICKSTART.md** - Quick reference for common tasks
- **README.md** - Project overview
