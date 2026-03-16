"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My Story", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-brand-sand px-8 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-10">
          <Link 
            href="/" 
            className="font-serif text-2xl font-semibold text-brand-earth hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            setu
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-base text-brand-fog">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-brand-earth",
                  pathname === link.href ? "text-brand-earth font-medium" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://calendly.com/spu-psych/counselling-session"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-sage text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all hover:bg-brand-sage/85 hover:shadow-md active:scale-95"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-brand-earth focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-linen z-[90] flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8 text-2xl font-serif text-brand-earth">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-brand-warm transition-colors",
                pathname === link.href ? "text-brand-warm" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://calendly.com/spu-psych/counselling-session"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sage scale-125 mt-4"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </header>
  );
}
