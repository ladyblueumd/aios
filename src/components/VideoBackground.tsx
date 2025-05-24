'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  sources: string[];
  fallbackImage?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoadError?: () => void;
}

export default function VideoBackground({
  sources,
  fallbackImage,
  className = '',
  style = {},
  onLoadError
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('Initializing...');
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

  // Add multiple video source options for better fallback
  const videoSources = [
    '/videos/7020018_Particle_Dot_1080p_optimized.mp4',
    // Fallback to original if optimized fails
    '/videos/7020018_Particle_Dot_3840x2160.mp4',
    // Alternative video if primary fails
    '/videos/6994947_Cyber_Ai_1080p_optimized.mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setDebugInfo(`Attempting to load video source ${currentSourceIndex + 1}...`);

    // Check if we're in production and test video accessibility
    const testVideoSource = async () => {
      try {
        const response = await fetch(videoSources[currentSourceIndex], { 
          method: 'HEAD',
          cache: 'no-cache'
        });
        
        if (!response.ok || response.headers.get('content-length') === '132') {
          throw new Error(`Video source ${currentSourceIndex + 1} failed or corrupted`);
        }
        
        setDebugInfo(`Video source ${currentSourceIndex + 1} accessible, proceeding...`);
      } catch (error) {
        console.warn(`Video source ${currentSourceIndex + 1} failed:`, error);
        setDebugInfo(`Source ${currentSourceIndex + 1} failed, trying next...`);
        
        // Try next source
        if (currentSourceIndex < videoSources.length - 1) {
          setCurrentSourceIndex(currentSourceIndex + 1);
          return;
        } else {
          // All sources failed, use fallback
          setDebugInfo('All video sources failed, using fallback image');
          setHasError(true);
          setShowFallback(true);
          onLoadError?.();
          return;
        }
      }
    };

    // Test video accessibility in production
    if (process.env.NODE_ENV === 'production') {
      testVideoSource();
    }

    // Track user interaction for browsers that require it
    const handleUserInteraction = () => {
      setUserInteracted(true);
      setDebugInfo('User interaction detected, attempting play...');
      if (video.paused) {
        playVideo();
      }
    };

    // Function to attempt video playback with autoplay policy handling
    const playVideo = async () => {
      if (!video) return;

      try {
        setDebugInfo('Attempting to play video...');
        
        // Ensure video is muted for autoplay to work in all browsers
        video.muted = true;
        video.playsInline = true;
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsVideoLoaded(true);
          setShowFallback(false);
          setDebugInfo('Video playing successfully!');
          console.log('Video autoplay successful');
        }
      } catch (error: any) {
        console.warn('Video autoplay failed:', error.name, error.message);
        
        if (error.name === 'NotAllowedError') {
          // Autoplay was prevented - this is expected on many sites
          setDebugInfo('Autoplay blocked - click to play video');
          setShowFallback(true);
          
          // Add event listeners for user interaction
          document.addEventListener('click', handleUserInteraction, { once: true });
          document.addEventListener('touchstart', handleUserInteraction, { once: true });
          document.addEventListener('keydown', handleUserInteraction, { once: true });
        } else {
          // Other errors (network, codec, etc.)
          setDebugInfo(`Video error: ${error.message}`);
          setHasError(true);
          setShowFallback(true);
          onLoadError?.();
        }
      }
    };

    // Handle video load events
    const handleCanPlay = () => {
      setDebugInfo('Video can play - attempting autoplay');
      playVideo();
    };

    const handleLoadStart = () => {
      setDebugInfo('Video loading started...');
    };

    const handleError = (e: Event) => {
      console.error('Video load error:', e);
      setDebugInfo(`Video load error - trying next source or fallback`);
      
      // Try next video source if available
      if (currentSourceIndex < videoSources.length - 1) {
        setCurrentSourceIndex(currentSourceIndex + 1);
      } else {
        setHasError(true);
        setShowFallback(true);
        onLoadError?.();
      }
    };

    const handleTimeUpdate = () => {
      // Only track this once to confirm video is actually playing
      if (!isVideoLoaded) {
        setIsVideoLoaded(true);
        setShowFallback(false);
        setDebugInfo('Video playing and updating time');
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };

    // Set up video event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup function
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [sources, onLoadError, isVideoLoaded, currentSourceIndex]);

  // Handle intersection observer for performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, ensure it's playing if possible
            if (video.paused && !hasError && (userInteracted || video.muted)) {
              video.play().catch(() => {
                // Ignore errors here, fallback is already handled
              });
            }
          } else {
            // Video is not visible, pause to save resources
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasError, userInteracted]);

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Video Element with multiple sources */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          showFallback ? 'opacity-0' : 'opacity-100'
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        poster={fallbackImage}
        style={{
          objectPosition: 'center',
          backgroundColor: '#000'
        }}
      >
        {/* Use current video source */}
        <source 
          src={videoSources[currentSourceIndex]} 
          type="video/mp4" 
        />
        
        {/* Fallback text for browsers without video support */}
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Image - Always show if video fails */}
      {(showFallback || hasError) && fallbackImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${fallbackImage})`,
            opacity: 1
          }}
        />
      )}

      {/* User Interaction Overlay (more prominent design) */}
      {showFallback && !hasError && !userInteracted && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer backdrop-blur-sm"
          onClick={() => {
            setUserInteracted(true);
            const video = videoRef.current;
            if (video) {
              video.play().then(() => {
                setShowFallback(false);
                setDebugInfo('Video started after user interaction');
              }).catch((error) => {
                setDebugInfo(`Manual play failed: ${error.message}`);
                console.log('Manual play failed:', error);
              });
            }
          }}
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 text-white text-center shadow-2xl max-w-sm mx-4">
            <div className="text-4xl mb-4 animate-pulse">🎬</div>
            <div className="text-lg font-semibold mb-2">Video Background</div>
            <div className="text-sm mb-4 opacity-90">Click anywhere to play the background video</div>
            <div className="text-xs opacity-70">{debugInfo}</div>
          </div>
        </div>
      )}

      {/* Debug info in development and production */}
      {(process.env.NODE_ENV === 'development' || showFallback || hasError) && (
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs p-3 font-mono max-w-xs">
          <div className="font-bold mb-1">Video Status</div>
          Status: {debugInfo}
          <br />
          Source: {currentSourceIndex + 1}/{videoSources.length}
          <br />
          Video: {isVideoLoaded ? 'Playing' : 'Not Playing'}
          <br />
          Fallback: {showFallback ? 'Showing' : 'Hidden'}
          <br />
          Error: {hasError ? 'Yes' : 'No'}
          <br />
          Environment: {process.env.NODE_ENV}
        </div>
      )}
    </div>
  );
} 