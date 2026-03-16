"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Individual Mind Care",
      img: "/assets/service-individual.png",
      description: "A safe, confidential space to explore your emotions, untangle stress, and build inner resilience. Whether you're navigating anxiety, depression, or life transitions, we walk alongside you with compassion and expertise.",
      details: [
        "Cognitive Behavioral Therapy (CBT)",
        "Acceptance & Commitment Therapy (ACT)",
        "Stress & Anxiety Management",
        "Trauma-Informed Care",
        "Identity & Self-Esteem Support"
      ]
    },
    {
      title: "Family & Relationships",
      img: "/assets/service-family.png",
      description: "Nurturing understanding and rebuilding connection between partners and family members. We help you navigate the beautiful complexity of relationships, especially within the context of Indian family dynamics.",
      details: [
        "Couples Counseling",
        "Intergenerational Conflict Resolution",
        "Parent-Child Relationship Building",
        "Communication Strategies",
        "Premarital Counseling"
      ]
    },
    {
      title: "Student Wellness",
      img: "/assets/service-student.png",
      description: "Compassionate support for young adults navigating academic pressure, career anxiety, or the quiet ache of homesickness while living abroad. We bridge the gap between where you are and where you want to be.",
      details: [
        "Academic Stress & Burnout",
        "Career Identity Exploration",
        "Cultural Adjustment & Acculturation",
        "Social Anxiety & Belonging",
        "Managing Homesickness"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-linen text-brand-earth">
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
              <Link href="/services" className="text-brand-earth font-medium">
                Services
              </Link>
              <Link href="https://calendly.com/spu-psych/counselling-session" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-sage text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all hover:bg-brand-sage/85 hover:shadow-md">
                Book a Session
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-36 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl mb-20">
            <p className="text-brand-sage text-sm font-medium tracking-widest uppercase mb-4">
              How we can walk together
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif leading-tight mb-6">
              Pathways to <span className="italic text-brand-warm">well-being</span>, designed for your unique journey.
            </h1>
            <p className="text-brand-fog text-lg leading-relaxed">
              At Setu, we offer multiple modalities of care, each deeply rooted in psychological science and culturally sensitive to the Indian diaspora.
            </p>
          </header>

          <div className="space-y-24">
            {services.map((service, index) => (
              <section key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif text-brand-sage">{service.title}</h2>
                  <p className="text-brand-fog leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-brand-fog">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-warm" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link href="https://calendly.com/spu-psych/counselling-session" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Book a {service.title} Session
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* ───── Contact CTA ───── */}
      <section className="py-24 px-6 bg-brand-sand/30">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-serif">Not sure where to start?</h2>
          <p className="text-brand-fog leading-relaxed">
            Every journey begins with a single step. Book a free discovery call to discuss your needs and find the path that feels right for you.
          </p>
          <Link
            href="https://calendly.com/spu-psych/counselling-session"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-sage text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all hover:bg-brand-sage/85 hover:shadow-md mx-auto"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>

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
              <Link href="/" className="block hover:text-brand-blush transition-colors">Home</Link>
              <Link href="/about" className="block hover:text-brand-blush transition-colors">Our Story</Link>
              <Link href="/services" className="block hover:text-brand-blush transition-colors">Services</Link>
              <Link href="https://calendly.com/spu-psych/counselling-session" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-blush transition-colors">
                Book a Session
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
