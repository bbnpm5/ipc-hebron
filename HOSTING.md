# Hosting Recommendations for IPC Hebron Website

This document provides budget-friendly hosting options for deploying the IPC Hebron church website, with a focus on cost-effective solutions suitable for India.

## Recommended Hosting Options

### 1. Vercel (Recommended - FREE Tier Available)

**Best for:** Easiest deployment, excellent performance, free SSL

**Pricing:**
- **Free Tier:** Perfect for most church websites
  - Unlimited personal projects
  - 100GB bandwidth per month
  - Automatic SSL certificates
  - Global CDN
  - Custom domain support
- **Pro Plan:** $20/month (if you need more features later)

**Pros:**
- ✅ Completely free for basic needs
- ✅ Zero configuration - just connect GitHub
- ✅ Automatic deployments on git push
- ✅ Excellent performance with global CDN
- ✅ Built-in analytics
- ✅ Easy custom domain setup
- ✅ Perfect for React/Vite projects

**Cons:**
- ❌ Serverless functions have usage limits on free tier
- ❌ No database included (but you can use external services)

**Setup Steps:**
1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Vite and configures everything
5. Deploy! Your site is live in minutes

**Domain Setup:**
- Buy domain from Namecheap, GoDaddy, or any registrar
- Add domain in Vercel dashboard
- Update DNS records as instructed
- SSL is automatic

---

### 2. Netlify (Great Alternative - FREE Tier)

**Best for:** Similar to Vercel, also excellent for static sites

**Pricing:**
- **Free Tier:**
  - 100GB bandwidth per month
  - 300 build minutes per month
  - Automatic SSL
  - Custom domain support
- **Pro Plan:** $19/month

**Pros:**
- ✅ Free tier is very generous
- ✅ Easy GitHub integration
- ✅ Form handling (useful for contact/prayer forms)
- ✅ Built-in analytics
- ✅ Split testing capabilities

**Cons:**
- ❌ Build minutes can be limited for frequent updates
- ❌ Less optimized for React than Vercel

**Setup Steps:**
1. Push code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub and select repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

---

### 3. Railway (Good for Full-Stack - Low Cost)

**Best for:** If you need backend services or database

**Pricing:**
- **Free Trial:** $5 credit (enough for ~1 month)
- **Hobby Plan:** ~$5-10/month (pay-as-you-go)
- **Pro Plan:** $20/month

**Pros:**
- ✅ Very affordable
- ✅ Easy database setup (PostgreSQL, MySQL, MongoDB)
- ✅ Good for full-stack applications
- ✅ Simple deployment from GitHub

**Cons:**
- ❌ Not free long-term
- ❌ More complex than Vercel/Netlify for static sites

---

### 4. Render (Budget-Friendly Alternative)

**Best for:** Simple deployments with free tier

**Pricing:**
- **Free Tier:**
  - Static sites: Free forever
  - Web services: Free with limitations (spins down after inactivity)
- **Starter Plan:** $7/month

**Pros:**
- ✅ Free static site hosting
- ✅ Automatic SSL
- ✅ Custom domains
- ✅ Easy GitHub integration

**Cons:**
- ❌ Free tier web services spin down after inactivity
- ❌ Slower cold starts on free tier

---

### 5. GitHub Pages (Completely Free)

**Best for:** Maximum budget savings, simple sites

**Pricing:**
- **Free:** Forever, unlimited

**Pros:**
- ✅ Completely free
- ✅ Easy setup
- ✅ Good for static sites

**Cons:**
- ❌ No server-side features
- ❌ Limited to static sites
- ❌ Requires GitHub Actions for build
- ❌ Slightly more setup needed

**Setup Steps:**
1. Build your site: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings
4. Site is live at `username.github.io/repository-name`

---

## Cost Comparison Summary

| Provider | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Vercel** | ✅ Excellent | $20/mo | React apps, easiest setup |
| **Netlify** | ✅ Excellent | $19/mo | Static sites, forms |
| **Railway** | ⚠️ Trial only | $5-20/mo | Full-stack apps |
| **Render** | ✅ Good | $7/mo | Budget hosting |
| **GitHub Pages** | ✅ Free | N/A | Maximum savings |

## Recommended Setup for IPC Hebron

### Option 1: Vercel (Recommended)
1. **Cost:** FREE
2. **Setup Time:** 10 minutes
3. **Best for:** Getting started quickly with zero cost

### Option 2: Netlify (Alternative)
1. **Cost:** FREE
2. **Setup Time:** 10 minutes
3. **Best for:** If you need form handling without backend

## Domain Name Recommendations

### Indian Domain Registrars (Cheaper for .in domains):
- **GoDaddy India:** ₹99-299/year for .in domains
- **BigRock:** ₹199-399/year
- **Hostinger:** ₹199-299/year

### International Options:
- **Namecheap:** $8-12/year for .com
- **Google Domains:** $12/year for .com

**Recommended Domain:**
- `ipchebronneria.in` or `ipchebron.in` (if available)
- `.in` domains are cheaper and more relevant for Indian audience

## Deployment Steps (Vercel - Recommended)

### Prerequisites:
1. GitHub account
2. Code pushed to GitHub repository

### Step-by-Step:

1. **Prepare your code:**
   ```bash
   npm run build
   # Test locally
   npm run preview
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ipc-hebron.git
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vercel/React
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live!

4. **Add Custom Domain:**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your domain (e.g., `ipchebronneria.in`)
   - Update DNS records at your domain registrar:
     - Add A record: `@` → Vercel IP (shown in dashboard)
     - Add CNAME: `www` → `cname.vercel-dns.com`
   - SSL certificate is automatic

## Additional Services You Might Need

### 1. Email Service (for contact forms)
- **SendGrid:** Free tier (100 emails/day)
- **Mailgun:** Free tier (5,000 emails/month)
- **Resend:** Free tier (3,000 emails/month)

### 2. Database (if needed for sermons, events, etc.)
- **Supabase:** Free tier (500MB database)
- **PlanetScale:** Free tier (5GB database)
- **MongoDB Atlas:** Free tier (512MB)

### 3. Image Hosting (for gallery)
- **Cloudinary:** Free tier (25GB storage, 25GB bandwidth)
- **Imgur:** Free (unlimited)
- **Your hosting provider:** Usually included

### 4. Payment Gateway (for donations)
- **Razorpay:** 2% transaction fee (no setup fee)
- **PayU:** 2% transaction fee
- **Instamojo:** 2% + ₹2 per transaction

## Monthly Cost Estimate

**Minimal Setup (Free):**
- Hosting: ₹0 (Vercel/Netlify free tier)
- Domain: ₹200/year (≈₹17/month)
- **Total: ₹17/month**

**With Additional Services:**
- Hosting: ₹0
- Domain: ₹17/month
- Email service: ₹0 (free tier)
- Payment gateway: 2% of donations (only when used)
- **Total: ₹17/month + transaction fees**

## Support and Resources

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Netlify Documentation: [docs.netlify.com](https://docs.netlify.com)
- React Deployment Guide: [react.dev/learn/start-a-new-react-project](https://react.dev/learn/start-a-new-react-project)

## Next Steps

1. ✅ Choose a hosting provider (recommend Vercel)
2. ✅ Set up GitHub repository
3. ✅ Deploy to hosting platform
4. ✅ Purchase domain name
5. ✅ Configure custom domain
6. ✅ Test all features
7. ✅ Go live!

---

**Note:** All prices are approximate and may vary. Check current pricing on provider websites before making decisions.
