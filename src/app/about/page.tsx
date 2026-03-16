"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-linen">
      {/* ───── Nav ───── */}

      <main className="pt-36 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Column */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white/50">
              <Image
                src="/assets/about-portrait.png"
                alt="Psychologist portrait"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Column */}
            <div className="space-y-10">
              <section>
                <p className="text-brand-sage text-sm font-medium tracking-widest uppercase mb-4">
                  The Heart behind Setu
                </p>
                <h1 className="text-4xl sm:text-5xl font-serif leading-tight mb-8">
                  Guiding you back to yourself, with <span className="italic text-brand-warm">empathy</span> and cultural depth.
                </h1>
                <div className="space-y-6 text-brand-fog leading-[1.85] text-lg">
                  <p>
                    I believe that healing isn't about fixing something that's broken. It's about uncovering the strength that has always been there, and building a bridge between who you are and who you want to become.
                  </p>
                  <p>
                    My journey into psychology was driven by a fascination with the human story—how we carry our past, navigate our present, and dream of our future. As a psychologist, I've dedicated my career to creating the kind of space I wish everyone had: one where you don't have to explain the cultural nuances of your life because they are already understood and honored.
                  </p>
                </div>
              </section>

              <section className="bg-brand-sand/50 p-8 rounded-2xl border border-brand-sand">
                <h2 className="text-2xl font-serif text-brand-earth mb-6">Expertise & Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-brand-sage text-lg mb-2">Cognitive Behavioral Approach (CBT)</h3>
                    <p className="text-sm text-brand-fog">Practical tools to navigate anxiety, manage stress, and transform self-limiting thought patterns into empowering beliefs.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-brand-sage text-lg mb-2">Acceptance & Commitment Approach (ACT)</h3>
                    <p className="text-sm text-brand-fog">Learning to sit with difficult emotions while taking meaningful steps toward a life aligned with your values.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-brand-sage text-lg mb-2">Culturally Rooted Care</h3>
                    <p className="text-sm text-brand-fog">Integrating the unique family dynamics, traditions, and lived experiences of the Indian diaspora into the care process.</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-brand-sage text-lg mb-2">Person-Centric Focus</h3>
                    <p className="text-sm text-brand-fog">A collaborative partnership where your intuition and goals lead the way, supported by my professional guidance.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-serif text-brand-earth">My Commitment to You</h2>
                <div className="space-y-4 text-brand-fog leading-relaxed">
                  <p>
                    Whether you are navigating the complexities of life abroad, managing intergenerational family dynamics, or simply seeking a professional to help you find clarity, I am here to walk alongside you. 
                  </p>
                  <p>
                    At Setu, we don't just bridge cultures; we bridge the gap between silence and being heard. Your story is sacred here.
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href="/book" 
                    className="btn-primary"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* ───── Footer ───── */}
      <footer className="bg-brand-earth text-brand-sand/90 py-16 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-semibold text-brand-blush block mb-3">
              setu
            </Link>
            <p className="text-brand-sand/70 max-w-xs leading-relaxed">
              A bridge to culturally rooted mental wellness for the Indian diaspora worldwide.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase tracking-widest text-brand-blush text-xs mb-4 font-medium">Say Hello</p>
            <div className="space-y-2 text-brand-sand/70">
              <Link href="mailto:spu.psych@gmail.com" className="block hover:text-brand-blush transition-colors">
                spu.psych@gmail.com
              </Link>
              <p>Tue – Sun · 6 : 30 – 8 : 30 pm IST</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="uppercase tracking-widest text-brand-blush text-xs mb-4 font-medium">Explore</p>
            <div className="space-y-2 text-brand-sand/70">
              <Link href="/about" className="block hover:text-brand-blush transition-colors">Our Story</Link>
              <Link href="/services" className="block hover:text-brand-blush transition-colors">Services</Link>
              <Link 
                href="/book" 
                className="block hover:text-brand-blush transition-colors"
              >
                Book a Session
              </Link>
              <Link href="#privacy" className="block hover:text-brand-blush transition-colors mt-4 text-xs opacity-60">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-brand-sand/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-sand/30">
          <span>© {new Date().getFullYear()} Setu Mental Wellness</span>
          <span>Rooted in empathy</span>
        </div>
      </footer>
    </div>
  );
}
