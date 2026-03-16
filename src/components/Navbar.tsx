"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scripts = [
    "setu",      // English
    "सेतु",      // Devanagari (Hindi, Marathi, Konkani, etc.)
    "সেতু",      // Bengali/Assamese/Manipuri
    "சேது",      // Tamil
    "సేతు",      // Telugu
    "ಸೇತು",      // Kannada
    "സേതു",      // Malayalam
    "સેતુ",      // Gujarati
    "ਸੇਤੂ",      // Gurmukhi (Punjabi)
    "ସେତୁ",      // Odia
    "سیتو",      // Perso-Arabic (Urdu/Kashmiri)
    "سيٽو",      // Sindhi
    "सेतुः",     // Sanskrit (with Visarga)
  ];
  const [scriptIndex, setScriptIndex] = useState(0);

  // Cycle brand name scripts every second
  useEffect(() => {
    const interval = setInterval(() => {
      setScriptIndex((prev) => (prev + 1) % scripts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="mx-auto max-w-5xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-brand-sand px-8 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-10 gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <Link 
              href="/" 
              className="font-serif text-3xl font-bold text-brand-earth hover:opacity-80 transition-all duration-500 min-w-[110px]"
              onClick={() => setIsOpen(false)}
            >
              <span className="inline-block transition-all duration-500 transform animate-in fade-in zoom-in-95 fill-mode-both">
                {scripts[scriptIndex]}
              </span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="h-8 sm:h-10 w-px bg-brand-sand/60" />
              <p className="text-brand-sage text-[8px] sm:text-[10px] font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-[1.3] opacity-90">
                A Bridge to<br />Wellness
              </p>
            </div>
          </div>

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
              href="/book"
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

      {/* Mobile Menu Popup */}
      <div
        className={cn(
          "fixed inset-0 z-[90] md:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-brand-earth/20 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Popup Card */}
        <div
          className={cn(
            "absolute top-24 right-6 left-6 bg-white rounded-3xl shadow-2xl border border-brand-sand p-8 transition-all duration-300 transform",
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          )}
        >
          <button
            className="absolute top-6 right-6 p-2 text-brand-earth hover:text-brand-warm transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center space-y-6 pt-4 text-xl font-serif text-brand-earth">
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
              href="/book"
              className="btn-sage w-full mt-4"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
