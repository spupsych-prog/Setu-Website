"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-linen">
      {/* ───── Nav ───── */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mt-4 flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-brand-sand px-8 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <Link href="/" className="font-serif text-2xl font-semibold text-brand-earth">
              setu
            </Link>

            <div className="flex items-center gap-8 text-base text-brand-fog">
              <Link href="/" className="transition-colors hover:text-brand-earth">
                Home
              </Link>
              <Link href="/about" className="transition-colors hover:text-brand-earth">
                My Story
              </Link>
              <Link href="/services" className="transition-colors hover:text-brand-earth">
                Services
              </Link>
              <Link href="https://calendly.com/spu-psych/counselling-session" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-sage text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all hover:bg-brand-sage/85 hover:shadow-md">
                Book a Session
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ───── Hero ───── */}
      <section className="relative pt-36 pb-24 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-lg">
            <p className="text-brand-sage text-sm font-medium tracking-widest uppercase mb-5">
              A Bridge to Wellness
            </p>
            <h1 className="text-4xl sm:text-5xl leading-snug mb-6">
              Culturally rooted,{" "}
              <span className="italic text-brand-warm">globally</span>{" "}
              accessible mind care.
            </h1>
            <p className="text-brand-fog leading-relaxed mb-8">
              Setu is a safe, warm space for the Indian diaspora to access
              culturally sensitive mental wellness — wherever you are in the
              world. Whether you&apos;re managing life abroad or navigating
              change at home, you belong here.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://calendly.com/spu-psych/counselling-session" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Begin Your Journey
              </Link>
              <Link href="#services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/hero-art.png"
              alt="Warm abstract art representing connection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ───── Focus / Values ───── */}
      <section className="py-24 px-6 bg-brand-sand">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl sm:text-4xl mb-4">What guides us</h2>
            <p className="text-brand-fog leading-relaxed">
              Care shaped by the unique, beautiful complexity of living between
              cultures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Deeply Rooted",
                desc: "Care that understands Indian values, family dynamics, and inherited traditions — so you never have to explain yourself.",
              },
              {
                title: "Truly Borderless",
                desc: "Connect with empathetic professionals across time zones, whenever you need support.",
              },
              {
                title: "Private & Secure",
                desc: "A confidential, judgment-free environment built for your comfort and growth.",
              },
              {
                title: "Seamlessly Flexible",
                desc: "Sessions that fit gracefully into your schedule, your time zone, and your life.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm border border-brand-sand transition-shadow hover:shadow-md"
              >
                <h3 className="font-serif text-lg text-brand-sage mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-fog leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Meet the Psychologist (About Teaser) ───── */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-portrait.png"
                alt="Psychologist portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl leading-tight">
                More than a clinical approach — <span className="italic text-brand-warm">a bridge back to yourself.</span>
              </h2>
              <p className="text-brand-fog leading-relaxed text-lg">
                I believe that healing begins when we are truly seen. At Setu, my goal is to provide a space where your cultural roots are honored and your emotional wellness is prioritized. 
              </p>
              <div className="pt-4">
                <Link href="/about" className="btn-sage">
                  Explore My Story & Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Services ───── */}
      <section id="services" className="py-24 px-6 bg-brand-sand">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Ways we can walk together
            </h2>
            <p className="text-brand-fog leading-relaxed">
              Multiple pathways of care, each designed to meet you exactly where
              you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Mind Care",
                img: "/assets/service-individual.png",
                desc: "A safe, confidential space to explore your emotions, untangle stress, and build inner resilience — at your own pace.",
              },
              {
                title: "Family & Relationships",
                img: "/assets/service-family.png",
                desc: "Sessions designed to nurture understanding and rebuild connection between partners and family members.",
              },
              {
                title: "Student Wellness",
                img: "/assets/service-student.png",
                desc: "Compassionate support for young adults navigating academic pressure, career anxiety, or the quiet ache of homesickness.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white overflow-hidden shadow-sm border border-brand-sand transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-lg text-brand-sage">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-fog leading-relaxed">
                    {service.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-sage transition-colors hover:text-brand-earth"
                  >
                    Learn more{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Contact CTA ───── */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl">
            Ready to take the first step?
          </h2>
          <p className="text-brand-fog leading-relaxed">
            Reaching out is a small act of courage. Send me a message and
            we&apos;ll find a time that works for you — no pressure, no
            judgment.
          </p>
          <Link
            href="https://calendly.com/spu-psych/counselling-session"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-sage text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all hover:bg-brand-sage/85 hover:shadow-md mx-auto"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="bg-brand-earth text-brand-sand/90 py-16 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold text-brand-blush block mb-3"
            >
              setu
            </Link>
            <p className="text-brand-sand/70 max-w-xs leading-relaxed">
              A bridge to culturally rooted mental wellness for the Indian
              diaspora worldwide.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase tracking-widest text-brand-blush text-xs mb-4 font-medium">
              Say Hello
            </p>
            <div className="space-y-2 text-brand-sand/70">
              <Link
                href="mailto:spu.psych@gmail.com"
                className="block hover:text-brand-blush transition-colors"
              >
                spu.psych@gmail.com
              </Link>
              <p>Tue – Sun · 6 : 30 – 8 : 30 pm IST</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="uppercase tracking-widest text-brand-blush text-xs mb-4 font-medium">
              Explore
            </p>
            <div className="space-y-2 text-brand-sand/70">
              <Link href="/about" className="block hover:text-brand-blush transition-colors">
                Our Story
              </Link>
              <Link href="/services" className="block hover:text-brand-blush transition-colors">
                Services
              </Link>
              <Link href="https://calendly.com/spu-psych/counselling-session" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-blush transition-colors">
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
