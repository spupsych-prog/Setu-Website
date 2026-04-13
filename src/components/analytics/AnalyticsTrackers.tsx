"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth, trackSectionView } from "@/lib/analytics";

export function ScrollTracker() {
  const pathname = usePathname();
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    // Reset tracked depths on route change
    trackedDepths.current.clear();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight <= 0) return;

      const scrollPercentage = Math.round((scrollY / docHeight) * 100);
      
      const thresholds = [25, 50, 75, 90, 100];
      
      for (const threshold of thresholds) {
        if (scrollPercentage >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);
          trackScrollDepth(threshold, pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}

interface TrackSectionProps {
  id?: string;
  name: string;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function TrackSection({ id, name, children, className = "", threshold = 0.5 }: TrackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Started viewing
            startTimeRef.current = Date.now();
          } else {
            // Stopped viewing
            if (startTimeRef.current > 0) {
              const dwellTime = Date.now() - startTimeRef.current;
              // Only track if they looked at it for more than 1 second
              if (dwellTime > 1000) {
                trackSectionView(name, dwellTime);
              }
              startTimeRef.current = 0; // reset
            }
          }
        });
      },
      { threshold } 
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      
      // If we unmount while viewing, log the time
      if (startTimeRef.current > 0) {
        const dwellTime = Date.now() - startTimeRef.current;
        if (dwellTime > 1000) {
          trackSectionView(name, dwellTime);
        }
      }
    };
  }, [name, threshold]);

  return (
    <div id={id} ref={containerRef} className={className}>
      {children}
    </div>
  );
}
