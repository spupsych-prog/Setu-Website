"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { track404 } from "@/lib/analytics";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    track404(pathname ?? "unknown");
  }, [pathname]);

  return (
    <main className="min-h-screen bg-brand-linen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-brand-sage text-sm font-medium tracking-widest uppercase mb-4">
        404 — Page Not Found
      </p>
      <h1 className="text-4xl sm:text-5xl font-serif text-brand-earth mb-6 leading-tight">
        This path doesn&apos;t exist&hellip; yet.
      </h1>
      <p className="text-brand-fog leading-relaxed max-w-md mb-10">
        The page you&apos;re looking for may have moved or never existed. Let&apos;s get you back to somewhere familiar.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/book" className="btn-ghost">
          Book a Session
        </Link>
      </div>
    </main>
  );
}
