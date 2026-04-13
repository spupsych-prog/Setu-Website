"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackScrollDepth,
  trackSectionView,
  trackBookingAbandoned,
  trackBlogPostCompleted,
} from "@/lib/analytics";

// ── Global scroll-depth tracker ───────────────────────────────────────────────
export function ScrollTracker() {
  const pathname = usePathname();
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
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

// ── Section dwell-time tracker ────────────────────────────────────────────────
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
            startTimeRef.current = Date.now();
          } else {
            if (startTimeRef.current > 0) {
              const dwellTime = Date.now() - startTimeRef.current;
              if (dwellTime > 1000) trackSectionView(name, dwellTime);
              startTimeRef.current = 0;
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      if (startTimeRef.current > 0) {
        const dwellTime = Date.now() - startTimeRef.current;
        if (dwellTime > 1000) trackSectionView(name, dwellTime);
      }
    };
  }, [name, threshold]);

  return (
    <div id={id} ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// ── Booking abandonment (exit-intent) tracker ─────────────────────────────────
export function BookingAbandonmentTracker() {
  const startTimeRef = useRef(Date.now());
  const firedRef = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Fire only when mouse moves above viewport (toward browser chrome / address bar)
      if (e.clientY <= 0 && !firedRef.current) {
        firedRef.current = true;
        const dwellTimeMs = Date.now() - startTimeRef.current;
        trackBookingAbandoned(dwellTimeMs);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return null;
}

// ── Blog post read-completion tracker ─────────────────────────────────────────
// Fires when the reader scrolls past 85% of the page AND has been on the page long enough
// that the dwell time is at least 50% of the estimated reading time.
function parseReadingTimeMs(readingTimeText: string): number {
  const match = readingTimeText.match(/(\d+)/);
  if (!match) return 60_000; // default 1 min
  return parseInt(match[1], 10) * 60_000;
}

export function BlogReadCompletionTracker({
  postTitle,
  readingTime,
}: {
  postTitle: string;
  readingTime: string;
}) {
  const firedRef = useRef(false);
  const startTimeRef = useRef(Date.now());
  const estimatedMs = parseReadingTimeMs(readingTime);

  useEffect(() => {
    const handleScroll = () => {
      if (firedRef.current) return;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPct = (scrollY / docHeight) * 100;
      const dwellMs = Date.now() - startTimeRef.current;

      // Considered "completed" if scrolled past 85% AND spent at least half the expected reading time
      if (scrollPct >= 85 && dwellMs >= estimatedMs * 0.5) {
        firedRef.current = true;
        trackBlogPostCompleted(postTitle);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [postTitle, estimatedMs]);

  return null;
}
