# Vercel Development Workflow Guide

## Overview
This guide explains how to develop your AI/OS website while maintaining a live production site on Vercel.

## Development Workflow

### 1. Local Development
Always develop and test locally first:

```bash
# Start the development server
npm run dev

# This runs on http://localhost:3000 by default
# Hot reloading is enabled - changes appear instantly
```

### 2. Vercel's Deployment Strategy

#### Production Deployment (main branch)
- URL: Your main Vercel URL (e.g., https://aios.vercel.app)
- Triggered by: Pushes to `main` branch
- This is your live site that users see

#### Preview Deployments
- URL: Unique URL for each branch/PR (e.g., https://aios-feature-xyz.vercel.app)
- Triggered by: Pushes to ANY branch other than main
- Perfect for testing before going live

### 3. Recommended Workflow

#### For Small Changes:
```bash
# 1. Make changes locally
# 2. Test locally with npm run dev
# 3. Commit and push to main
git add .
git commit -m "Update: description of changes"
git push origin main

# This deploys directly to production
```

#### For Larger Features or Risky Changes:
```bash
# 1. Create a feature branch
git checkout -b feature/new-feature

# 2. Make your changes and test locally
npm run dev

# 3. Commit and push to feature branch
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# 4. Vercel creates a preview deployment
# 5. Test on the preview URL
# 6. If everything works, merge to main
git checkout main
git merge feature/new-feature
git push origin main

# 7. Delete the feature branch
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### 4. Using Vercel CLI (Optional)

Install Vercel CLI for more control:

```bash
# Install globally
npm i -g vercel

# Link your project
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Pull environment variables
vercel env pull
```

### 5. Environment Variables

#### Local Development (.env.local):
```
# Create .env.local for local development
NEXT_PUBLIC_API_KEY=your-dev-key
DATABASE_URL=your-dev-database
```

#### Production (Vercel Dashboard):
1. Go to Vercel Dashboard > Settings > Environment Variables
2. Add your production variables
3. They're automatically available during build

### 6. Instant Rollback

If something goes wrong:
1. Go to Vercel Dashboard
2. Click on "Deployments"
3. Find a previous working deployment
4. Click "..." menu > "Promote to Production"

### 7. Development Tips

#### Check Deployment Status:
```bash
# See recent commits and their deployment status
git log --oneline -10
```

#### Monitor Builds:
- Watch build progress in Vercel Dashboard
- Check build logs for errors
- Monitor performance metrics

#### Useful Scripts to Add:
Add these to your package.json:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "build:analyze": "ANALYZE=true next build",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next node_modules",
    "fresh": "npm run clean && npm install && npm run dev"
  }
}
```

### 8. Git Workflow Protection

Create a pre-push hook to prevent accidental bad pushes:

```bash
# .git/hooks/pre-push
#!/bin/sh
npm run build || {
    echo "Build failed. Push aborted."
    exit 1
}
```

### 9. Monitoring Your Live Site

1. **Vercel Analytics**: Built-in analytics for performance
2. **Speed Insights**: Monitor Core Web Vitals
3. **Function Logs**: Debug API routes and server-side issues
4. **Error Tracking**: Set up Sentry or similar for production errors

### 10. Common Commands Reference

```bash
# Local development
npm run dev                 # Start dev server
npm run build              # Build locally to test
npm run start              # Run production build locally

# Git workflow
git status                 # Check what's changed
git diff                   # See specific changes
git add .                  # Stage all changes
git commit -m "message"    # Commit changes
git push origin main       # Deploy to production
git push origin feature/x  # Create preview deployment

# Troubleshooting
npm run clean              # Clean build cache
npm install                # Reinstall dependencies
git pull origin main       # Get latest changes
```

## Best Practices

1. **Always test locally first** with `npm run dev`
2. **Use preview deployments** for significant changes
3. **Keep commits small and focused** for easy rollbacks
4. **Write descriptive commit messages** for better tracking
5. **Monitor your deployment logs** in Vercel dashboard
6. **Set up notifications** for failed deployments
7. **Use environment variables** for sensitive data
8. **Regular backups** of your database/content

## Quick Start Daily Workflow

```bash
# Morning routine
cd ~/Volumes/LLM-Drive/umd_website/umd_2
git pull origin main       # Get any changes
npm install                # Update dependencies if needed
npm run dev               # Start developing

# After making changes
git add .
git commit -m "Description of changes"
git push origin main      # Deploy to production

# Check deployment
# Visit Vercel dashboard or your live URL
```
