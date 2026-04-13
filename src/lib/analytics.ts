import { sendGAEvent } from "@next/third-parties/google";

export const trackInteraction = (eventName: string, params: Record<string, string | number>) => {
  try {
    sendGAEvent("event", eventName, params);
  } catch (error) {
    console.warn("GA tracking error", error);
  }
};

export const trackCTA = (ctaName: string, location: string) => {
  trackInteraction("cta_click", {
    cta_name: ctaName,
    location: location,
  });
};

export const trackSectionView = (sectionName: string, dwellTimeMs: number) => {
  trackInteraction("section_view", {
    section_name: sectionName,
    dwell_time_ms: dwellTimeMs,
  });
};

export const trackScrollDepth = (depthPercentage: number, pageUrl: string) => {
  trackInteraction("scroll_depth", {
    depth_percentage: depthPercentage,
    page_url: pageUrl,
  });
};
