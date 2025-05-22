'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true
}: UseScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isInView };
};

export const useScrollAnimationClass = (
  hiddenClass: string = 'scroll-hidden',
  revealedClass: string = 'scroll-revealed',
  options?: UseScrollAnimationOptions
) => {
  const { elementRef, isInView } = useScrollAnimation(options);
  
  const animationClass = isInView ? revealedClass : hiddenClass;
  
  return { elementRef, animationClass, isInView };
};

// Metro-style staggered animation hook
export const useStaggeredAnimation = (
  itemCount: number,
  delay: number = 100,
  options?: UseScrollAnimationOptions
) => {
  const { elementRef, isInView } = useScrollAnimation(options);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    if (isInView) {
      const timeouts: NodeJS.Timeout[] = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setAnimatedItems(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * delay);
        
        timeouts.push(timeout);
      }

      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [isInView, itemCount, delay]);

  return { elementRef, animatedItems, isInView };
}; 