import { sendGAEvent } from "@next/third-parties/google";

export const trackInteraction = (eventName: string, params: Record<string, string | number>) => {
  try {
    sendGAEvent("event", eventName, params);
  } catch (error) {
    console.warn("GA tracking error", error);
  }
};

// ── Page CTAs ─────────────────────────────────────────────
export const trackCTA = (ctaName: string, location: string) => {
  trackInteraction("cta_click", {
    cta_name: ctaName,
    location: location,
  });
};

// ── Section dwell time ────────────────────────────────────
export const trackSectionView = (sectionName: string, dwellTimeMs: number) => {
  trackInteraction("section_view", {
    section_name: sectionName,
    dwell_time_ms: dwellTimeMs,
  });
};

// ── Scroll depth ──────────────────────────────────────────
export const trackScrollDepth = (depthPercentage: number, pageUrl: string) => {
  trackInteraction("scroll_depth", {
    depth_percentage: depthPercentage,
    page_url: pageUrl,
  });
};

// ── FAQ item expansion ────────────────────────────────────
export const trackFAQExpand = (question: string) => {
  trackInteraction("faq_expand", { question });
};

// ── Service card hover ────────────────────────────────────
export const trackCardHover = (cardName: string, location: string) => {
  trackInteraction("card_hover", {
    card_name: cardName,
    location,
  });
};

// ── Footer + email links ──────────────────────────────────
export const trackFooterLink = (linkName: string) => {
  trackInteraction("footer_link_click", { link_name: linkName });
};

export const trackEmailClick = (location: string) => {
  trackInteraction("email_click", { location });
};

// ── Booking events ────────────────────────────────────────
export const trackBookingConfirmed = () => {
  trackInteraction("booking_confirmed", { value: 1 });
};

export const trackBookingAbandoned = (dwellTimeMs: number) => {
  trackInteraction("booking_abandoned", { dwell_time_ms: dwellTimeMs });
};

// ── Blog reading completion ───────────────────────────────
export const trackBlogPostCompleted = (postTitle: string) => {
  trackInteraction("blog_post_completed", { post_title: postTitle });
};

// ── Logo navigation ───────────────────────────────────────
export const trackLogoClick = (fromPage: string) => {
  trackInteraction("logo_click", { from_page: fromPage });
};

// ── 404 error pages ───────────────────────────────────────
export const track404 = (attemptedPath: string) => {
  trackInteraction("page_not_found", { attempted_path: attemptedPath });
};
