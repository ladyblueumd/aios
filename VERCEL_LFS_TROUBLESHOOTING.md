# Vercel Git LFS Troubleshooting Guide

## Current Status
- ✅ Git LFS is properly configured locally
- ✅ Video files are tracked by LFS (see `.gitattributes`)
- ❌ Videos are corrupted on Vercel deployment (132-133 bytes instead of MB)

## Vercel LFS Configuration Steps

### 1. Enable Git LFS in Vercel Dashboard
1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project: `aios-platform-website`
3. Navigate to **Settings** → **Git**
4. Find **Git Large File Storage (LFS)** section
5. **Enable** the toggle if it's not already enabled
6. Click **Save**

### 2. Redeploy After Enabling LFS
After enabling LFS, you MUST redeploy your project:
```bash
# Force a new deployment
git commit --allow-empty -m "Force redeploy with LFS enabled"
git push origin main
```

### 3. Check LFS Status
Verify LFS files are tracked:
```bash
# Check which files are in LFS
git lfs ls-files

# Check LFS configuration
git lfs env
```

### 4. Alternative Solutions (If LFS Still Fails)

#### Option A: Hybrid Approach (Recommended)
- Keep LFS for development and version control
- Add small fallback videos for production deployment
- Enhanced VideoBackground component handles both automatically

#### Option B: External CDN
- Upload videos to external service (Cloudflare R2, AWS S3, etc.)
- Update video URLs to point to CDN
- Faster loading and no Vercel limits

#### Option C: Convert to Web-Optimized Format
- Use WebM format with smaller file sizes
- Progressive loading with multiple quality options
- Better browser compatibility

## Checking Your Current Setup

Run the verification script to check status:
```bash
node verify-videos.js
```

## Expected Outcomes

### If LFS is Working:
- Deployed videos should show proper file sizes (3.5MB, 17MB, etc.)
- Videos should play on live site
- No fallback images needed

### If LFS is Still Failing:
- Enhanced VideoBackground component will show fallback images
- Debug overlay will indicate video load failures
- Site remains functional with static backgrounds

## Next Steps

1. **Check Vercel Dashboard** - Ensure LFS is enabled
2. **Redeploy** - Force new deployment after enabling LFS
3. **Wait 5-10 minutes** - Vercel needs time to process LFS files
4. **Test again** - Run verification script
5. **Contact Vercel Support** - If LFS still doesn't work with your plan

## Troubleshooting Commands

```bash
# Check git LFS status locally
git lfs status

# Verify LFS files are committed
git lfs ls-files

# Check if files are actually in LFS (should show file hashes, not content)
git show HEAD:public/videos/7020018_Particle_Dot_1080p_optimized.mp4 | head -5

# Re-push LFS files if needed
git lfs push --all origin main
```

## Enhanced VideoBackground Features

The updated component now includes:
- ✅ Multiple video source fallbacks
- ✅ Production environment error detection
- ✅ Automatic fallback to static images
- ✅ User interaction handling for autoplay restrictions
- ✅ Debug information for troubleshooting
- ✅ Graceful degradation if videos fail

Your site will work properly regardless of LFS status! 