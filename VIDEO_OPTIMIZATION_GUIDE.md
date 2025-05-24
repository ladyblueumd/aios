# Video Optimization Guide for Web Autoplay

## Overview
This guide explains how to optimize videos for reliable autoplay in web browsers and troubleshoot common video playback issues.

## Video Requirements for Autoplay

### 1. Format and Encoding
- **Format**: MP4 (H.264/AVC video codec)
- **Container**: MP4 container
- **Audio**: AAC codec (if audio present)
- **Resolution**: Recommended max 1920x1080 for compatibility
- **Frame Rate**: 30fps or lower

### 2. Web Optimization Settings
- **Progressive Download**: Video should be optimized for streaming (moov atom at beginning)
- **Bitrate**: Reasonable bitrate for web delivery (2-8 Mbps for 1080p)
- **Keyframes**: Regular keyframes every 2-3 seconds for seeking

## Browser Autoplay Policies

### Modern Browser Restrictions
1. **Chrome/Edge**: Allows muted autoplay, blocks unmuted autoplay unless user has interacted
2. **Safari**: Strict policies, especially on mobile devices and low power mode
3. **Firefox**: Similar to Chrome, allows muted autoplay
4. **Mobile Browsers**: Generally more restrictive

### Required Attributes
```html
<video 
  autoplay 
  muted 
  loop 
  playsinline 
  preload="metadata"
  controls={false}
  disablePictureInPicture
>
```

## Video Optimization Commands (FFmpeg)

### Basic Web Optimization
```bash
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -pix_fmt yuv420p \
  output.mp4
```

### For Large Videos (4K to 1080p)
```bash
ffmpeg -i input.mp4 \
  -vf scale=1920:1080 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -pix_fmt yuv420p \
  output_optimized.mp4
```

### Create Multiple Versions
```bash
# 1080p version
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 -movflags +faststart output_1080p.mp4

# 720p version (fallback)
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 25 -movflags +faststart output_720p.mp4
```

## Troubleshooting Video Autoplay Issues

### 1. Check Browser Console
Open developer tools and check for errors:
- `NotAllowedError`: Autoplay blocked by browser policy
- `AbortError`: Video loading was aborted
- Network errors: Check if video files are accessible

### 2. Test User Interaction
Try clicking anywhere on the page, then check if video starts playing.

### 3. Verify Video Properties
```javascript
// Check if video can play
const video = document.querySelector('video');
console.log('Can play MP4:', video.canPlayType('video/mp4'));
console.log('Video duration:', video.duration);
console.log('Video ready state:', video.readyState);
```

### 4. Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Video not playing on Safari | Add `webkit-playsinline="true"` attribute |
| Video not playing on mobile | Ensure `playsinline` attribute is present |
| Video loads but doesn't autoplay | Check browser autoplay policy, ensure `muted` attribute |
| Video shows black screen | Check video encoding, ensure progressive download |
| High CPU usage | Lower video resolution/bitrate, use hardware acceleration |

## Implementation with VideoBackground Component

Our custom `VideoBackground` component handles:
- Autoplay restriction detection
- User interaction tracking
- Fallback to background image
- Error handling and retry logic
- Cross-browser compatibility

### Usage Example
```tsx
<VideoBackground
  sources={[
    '/videos/primary_video.mp4',
    '/videos/fallback_video.mp4'
  ]}
  fallbackImage="/images/background.jpg"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ filter: 'brightness(0.3)' }}
  onLoadError={() => console.log('Video failed to load')}
/>
```

## Performance Considerations

### 1. Video Size
- Keep file sizes reasonable (< 50MB for background videos)
- Consider video length (15-30 seconds for loops)

### 2. Loading Strategy
- Use `preload="metadata"` for faster initial load
- Consider lazy loading for videos below the fold

### 3. Fallback Strategy
- Always provide a fallback background image
- Use appropriate image formats (WebP with JPEG fallback)

## Testing Checklist

- [ ] Video plays automatically on Chrome (desktop)
- [ ] Video plays automatically on Safari (desktop)
- [ ] Video works on mobile devices (iOS/Android)
- [ ] Fallback image displays when video fails
- [ ] No console errors related to video
- [ ] Video doesn't cause performance issues
- [ ] Video plays after user interaction if autoplay blocked

## Additional Resources

- [MDN Autoplay Guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay)
- [Chrome Autoplay Policy](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)
- [Safari Autoplay Policy](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/) 