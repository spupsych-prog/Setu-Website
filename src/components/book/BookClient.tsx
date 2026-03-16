"use client";

import { useEffect } from "react";

export default function BookClient() {
  useEffect(() => {
    // @ts-ignore
    const cal = window.Cal;
    if (cal) {
      cal("init", "counselling-session", { origin: "https://app.cal.com" });
      cal.ns["counselling-session"]("ui", {
        theme: "auto",
        cssVarsPerTheme: {
          light: { "cal-brand": "#B8695E" },
          dark: { "cal-brand": "#3A6B4F" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      cal.ns["counselling-session"]("inline", {
        elementOrSelector: "#my-cal-inline-counselling-session",
        calLink: "purva-sreekaanth-pmqvue/counselling-session",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" },
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-brand-linen pt-36 pb-24 px-6 text-brand-earth">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <p className="text-brand-sage text-sm font-medium tracking-widest uppercase mb-4">
            Reservation
          </p>
          <h1 className="text-4xl font-serif mb-4">Book a Counselling Session</h1>
          <p className="text-brand-fog max-w-xl mx-auto italic">
            Select a convenient time for your session. All consultations are confidential and culturally sensitive.
          </p>
        </header>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-sand ring-8 ring-white/50">
          <div
            id="my-cal-inline-counselling-session"
            className="w-full h-full min-h-[700px] overflow-scroll"
          />
        </div>
      </div>
    </main>
  );
}
