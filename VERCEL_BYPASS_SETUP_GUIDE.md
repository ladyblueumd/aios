# Vercel Deployment Protection Bypass Setup Guide

## Overview
When Vercel deployment protection is enabled, you need a bypass key to access protected deployments programmatically or through automation tools. This guide shows you how to set up the bypass key both locally and in production.

## What is Deployment Protection?
Based on the 401 error on your live site (`https://aios-4r9pwd5h5-ultramarine-dreams-llc.vercel.app/`), you have Vercel's deployment protection enabled. This is a security feature that restricts access to your deployments.

## Step 1: Enable Protection Bypass for Automation in Vercel

### Via Vercel Dashboard:
1. Go to your Vercel dashboard
2. Select your project: `aios-platform-website`
3. Navigate to **Settings** → **Deployment Protection**
4. Find the **Protection Bypass for Automation** section
5. Click **Enable** to generate a secret
6. Copy the generated secret (keep it secure!)

### What this does:
- Generates a unique secret for your project
- Automatically sets `VERCEL_AUTOMATION_BYPASS_SECRET` environment variable in production
- Allows you to bypass protection using HTTP headers or query parameters

## Step 2: Local Development Setup

### Create/Update `.env.local` file:
```bash
# Your .env.local file (already created)
VERCEL_AUTOMATION_BYPASS_SECRET=paste-your-actual-secret-here
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### Important Notes:
- Replace `your-bypass-secret-here` with the actual secret from Vercel
- The `.env.local` file is already in your `.gitignore` (safe from commits)
- This file is only for local development

## Step 3: Using the Bypass Key

### Method 1: HTTP Header (Recommended)
```javascript
const response = await fetch('https://your-site.vercel.app/api/endpoint', {
  headers: {
    'x-vercel-protection-bypass': process.env.VERCEL_AUTOMATION_BYPASS_SECRET
  }
});
```

### Method 2: Query Parameter
```javascript
const url = `https://your-site.vercel.app/api/endpoint?x-vercel-protection-bypass=${process.env.VERCEL_AUTOMATION_BYPASS_SECRET}`;
const response = await fetch(url);
```

### Method 3: For Browser Testing (Sets Cookie)
```javascript
const response = await fetch('https://your-site.vercel.app/api/endpoint', {
  headers: {
    'x-vercel-protection-bypass': process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
    'x-vercel-set-bypass-cookie': 'true'
  }
});
```

## Step 4: Production Environment Variables

### Automatic Setup:
- When you enable "Protection Bypass for Automation" in Vercel, the `VERCEL_AUTOMATION_BYPASS_SECRET` is automatically added to your production environment
- No manual configuration needed in production

### Manual Verification:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Confirm `VERCEL_AUTOMATION_BYPASS_SECRET` is listed
3. If missing, regenerate it in the Deployment Protection settings

## Step 5: Testing the Setup

### Local Testing:
```bash
# Start your development server
npm run dev -- -p 3001

# Test with curl (replace YOUR_SECRET with actual secret)
curl -H "x-vercel-protection-bypass: YOUR_SECRET" http://localhost:3001/api/test
```

### Production Testing:
```bash
# Test your live site (replace YOUR_SECRET with actual secret)
curl -H "x-vercel-protection-bypass: YOUR_SECRET" https://aios-4r9pwd5h5-ultramarine-dreams-llc.vercel.app/
```

## Step 6: Code Implementation

### For Next.js API Routes:
```javascript
// pages/api/example.js or app/api/example/route.js
export default function handler(req, res) {
  // The bypass header is automatically processed by Vercel
  // Your API will work normally once the header is provided
  res.json({ message: 'Access granted!' });
}
```

### For Client-Side Requests:
```javascript
// In your React components
const fetchProtectedData = async () => {
  const headers = {};
  
  // Add bypass header if needed (usually automatic in production)
  if (process.env.NODE_ENV === 'development') {
    headers['x-vercel-protection-bypass'] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  }
  
  const response = await fetch('/api/data', { headers });
  return response.json();
};
```

## Security Best Practices

1. **Never commit the secret to Git**
   - Use `.env.local` for local development
   - It's already in your `.gitignore`

2. **Regenerate if compromised**
   - Go to Vercel Dashboard → Settings → Deployment Protection
   - Generate a new secret if the old one is exposed

3. **Use environment-specific secrets**
   - Different secrets for staging/production if needed
   - Vercel handles this automatically per project

## Troubleshooting

### Common Issues:

1. **401 Unauthorized Error**
   - Check if bypass header is included
   - Verify the secret is correct
   - Ensure deployment protection is properly configured

2. **Header Not Working**
   - Try query parameter method instead
   - Check for typos in header name: `x-vercel-protection-bypass`

3. **Secret Not Available**
   - Regenerate in Vercel Dashboard
   - Redeploy your app after regenerating
   - Check environment variables in Vercel

### Debug Commands:
```bash
# Check environment variables locally
echo $VERCEL_AUTOMATION_BYPASS_SECRET

# Test with curl
curl -I -H "x-vercel-protection-bypass: YOUR_SECRET" https://your-site.vercel.app/

# Check if secret is working
curl -H "x-vercel-protection-bypass: YOUR_SECRET" https://your-site.vercel.app/api/health
```

## Next Steps

1. **Get your bypass secret from Vercel Dashboard**
2. **Update `.env.local` with the real secret**
3. **Test local development access**
4. **Verify production deployment works**
5. **Update any automation scripts to include the bypass header**

## Support Resources

- [Vercel Protection Bypass Documentation](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation)
- [Environment Variables Guide](https://vercel.com/docs/build-step#environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**Created:** May 24, 2025  
**Status:** Ready for implementation  
**Project:** AIOS Platform Website 