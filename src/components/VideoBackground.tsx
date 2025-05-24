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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Track user interaction for browsers that require it
    const handleUserInteraction = () => {
      setUserInteracted(true);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      // Try to play the video
      attemptPlay();
    };

    const handleError = () => {
      console.warn('Video failed to load, falling back to background image');
      setHasError(true);
      setIsVideoLoaded(false);
      onLoadError?.();
    };

    const attemptPlay = async () => {
      if (!video) return;

      try {
        // First try to play muted
        video.muted = true;
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Video autoplay successful');
        }
      } catch (error: any) {
        console.warn('Autoplay failed:', error.message);
        
        // If autoplay fails, we'll wait for user interaction
        if (error.name === 'NotAllowedError') {
          console.log('Autoplay blocked, waiting for user interaction');
          
          // Try again after user interaction
          const retryPlay = () => {
            if (userInteracted && video) {
              video.play().catch((e) => {
                console.warn('Video play failed even after user interaction:', e);
              });
            }
          };

          // Check periodically if user has interacted
          const intervalId = setInterval(() => {
            if (userInteracted) {
              retryPlay();
              clearInterval(intervalId);
            }
          }, 1000);

          // Clean up after 10 seconds
          setTimeout(() => clearInterval(intervalId), 10000);
        }
      }
    };

    // Set up event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', () => {
      console.log('Video data loaded');
    });

    // Cleanup function
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [userInteracted, onLoadError]);

  // If video has error and we have a fallback image, show it
  if (hasError && fallbackImage) {
    return (
      <div
        className={`bg-cover bg-center bg-no-repeat ${className}`}
        style={{
          backgroundImage: `url(${fallbackImage})`,
          ...style
        }}
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        webkit-playsinline="true" // Legacy iOS support
        className={className}
        style={style}
        onError={() => {
          console.error('Video element error');
          setHasError(true);
        }}
      >
        {sources.map((src, index) => (
          <source key={index} src={src} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background image while video loads or if it fails */}
      {(!isVideoLoaded || hasError) && fallbackImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
          style={{
            backgroundImage: `url(${fallbackImage})`,
            zIndex: -1
          }}
        />
      )}
    </>
  );
} 