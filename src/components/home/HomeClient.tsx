"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`group rounded-xl border border-brand-sand bg-white/50 transition-all duration-300 ${isOpen ? "shadow-md bg-white border-brand-sage/20" : "hover:bg-white/80"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
      >
        <h3 className={`text-sm font-serif transition-colors ${isOpen ? "text-brand-earth" : "text-brand-sage"}`}>
          {q}
        </h3>
        <span className={`text-lg transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 pb-5 pt-0">
          <p className="text-xs text-brand-fog leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

interface Testimonial {
  author: string;
  location: string;
  text: string;
}

export default function HomeClient({ testimonials = [] }: { testimonials?: Testimonial[] }) {
  return (
    <div className="min-h-screen bg-brand-linen">
      {/* ───── Hero ───── */}
      <section className="relative pt-28 pb-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-lg">
            <h1 className="text-4xl sm:text-5xl leading-snug mb-6 font-serif">
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
              <Link
                href="/book"
                className="btn-primary"
              >
                Begin Your Journey
              </Link>
              <Link href="#services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/2] w-full max-w-lg mx-auto lg:ml-auto rounded-2xl overflow-hidden shadow-lg border border-brand-sand/30">
            <Image
              src="/assets/hero-art.png"
              alt="Warm abstract art representing connection and mental bridge"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ───── Focus / Values ───── */}
      <section className="py-24 px-6 bg-brand-sand">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl sm:text-4xl mb-4 font-serif">What guides us</h2>
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
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-portrait-purva.jpg"
                alt="Purva Sreekaanth, Psychologist and Founder of Setu"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl leading-tight font-serif">
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
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 font-serif">
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

      {/* ───── Testimonials (Infinite Scroll) ───── */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-brand-sand/30 overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-center">Voices of resilience</h2>
          </div>

          <div className="relative flex pause-on-hover">
            <div className="flex animate-marquee gap-8 py-4 px-4 min-w-full">
              {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <div 
                  key={i}
                  className="w-[280px] sm:w-[350px] flex-shrink-0 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-brand-sand/50 flex flex-col justify-between"
                >
                  <p className="text-brand-fog italic leading-relaxed mb-6 text-sm sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif text-brand-sage font-medium">{t.author}</p>
                    <p className="text-xs text-brand-fog/70 uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── FAQ (AI Discovery & User Clarity) ───── */}
      <section className="py-16 px-6 bg-brand-linen">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl mb-2 font-serif text-brand-sage">Frequently Asked Questions</h2>
            <p className="text-xs text-brand-fog">Simple answers to your initial steps at Setu.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How is Setu different from traditional therapy?",
                a: "Setu focuses on 'mind care' rather than a clinical 'patient' model. We specialize in the Indian diaspora experience, meaning you don't have to explain your cultural background—we already speak that language. Our approach combines evidence-based CBT and ACT with cultural sensitivity.",
              },
              {
                q: "What does 'culturally rooted' care actually mean?",
                a: "It means we honor the unique family dynamics, inherited traditions, and lived experiences of being Indian. Whether it's navigating intergenerational expectations or the specific challenges of living abroad, our guidance is shaped by an understanding of these roots.",
              },
              {
                q: "Is Setu suitable for someone living outside India?",
                a: "Absolutely. Setu was built specifically for the global Indian diaspora. We operate across time zones and provide a secure, borderless space for mental wellness, regardless of where you currently call home.",
              },
              {
                q: "Are the sessions confidential and secure?",
                a: "Yes. Your privacy is our highest priority. All sessions are conducted in a judgment-free, confidential environment, ensuring you have a safe space to explore your inner self without reservations.",
              },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Contact CTA ───── */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif">
            Ready to take the first step?
          </h2>
          <p className="text-brand-fog leading-relaxed">
            Reaching out is a small act of courage. Send me a message and
            we&apos;ll find a time that works for you — no pressure, no
            judgment.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-brand-sage text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all hover:bg-brand-sage/85 hover:shadow-md mx-auto"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="bg-brand-earth text-brand-sand/90 py-16 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
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

        <div className="mx-auto max-w-5xl mt-12 pt-6 border-t border-brand-sand/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-sand/30">
          <span>© {new Date().getFullYear()} Setu Mental Wellness</span>
          <span>Rooted in empathy</span>
        </div>
      </footer>
    </div>
  );
}
