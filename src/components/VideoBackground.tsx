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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Track user interaction for browsers that require it
    const handleUserInteraction = () => {
      setUserInteracted(true);
      if (video.paused) {
        playVideo();
      }
    };

    // Function to attempt video playback with autoplay policy handling
    const playVideo = async () => {
      if (!video) return;

      try {
        // Ensure video is muted for autoplay to work in all browsers
        video.muted = true;
        video.playsInline = true;
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsVideoLoaded(true);
          setShowFallback(false);
          console.log('Video autoplay successful');
        }
      } catch (error: any) {
        console.warn('Video autoplay failed:', error.name, error.message);
        
        if (error.name === 'NotAllowedError') {
          // Autoplay was prevented - this is expected on many sites
          console.log('Autoplay blocked by browser policy - showing fallback');
          setShowFallback(true);
          
          // Add event listeners for user interaction
          document.addEventListener('click', handleUserInteraction, { once: true });
          document.addEventListener('touchstart', handleUserInteraction, { once: true });
          document.addEventListener('keydown', handleUserInteraction, { once: true });
        } else {
          // Other errors (network, codec, etc.)
          setHasError(true);
          setShowFallback(true);
          onLoadError?.();
        }
      }
    };

    // Handle video load events
    const handleCanPlay = () => {
      console.log('Video can play - attempting autoplay');
      playVideo();
    };

    const handleLoadStart = () => {
      console.log('Video load started');
    };

    const handleError = (e: Event) => {
      console.error('Video load error:', e);
      setHasError(true);
      setShowFallback(true);
      onLoadError?.();
    };

    const handleTimeUpdate = () => {
      // Only track this once to confirm video is actually playing
      if (!isVideoLoaded) {
        setIsVideoLoaded(true);
        setShowFallback(false);
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
  }, [sources, onLoadError, isVideoLoaded]);

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
      {/* Video Element */}
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
        {sources.map((src, index) => (
          <source key={index} src={src} type="video/mp4" />
        ))}
        {/* Fallback text for browsers without video support */}
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Image */}
      {(showFallback || hasError) && fallbackImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${fallbackImage})`,
            opacity: showFallback || hasError ? 1 : 0
          }}
        />
      )}

      {/* User Interaction Overlay (only shown if autoplay is blocked) */}
      {showFallback && !hasError && !userInteracted && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
          onClick={() => {
            setUserInteracted(true);
            const video = videoRef.current;
            if (video) {
              video.play().then(() => {
                setShowFallback(false);
              }).catch(() => {
                console.log('Manual play failed');
              });
            }
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white text-center">
            <div className="text-lg mb-2">🎬</div>
            <div className="text-sm">Click to play video</div>
          </div>
        </div>
      )}
    </div>
  );
} 