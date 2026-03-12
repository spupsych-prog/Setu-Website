"use client";

import { Container, Grid, Text, Title, Button, Group, Stack, Box } from '@mantine/core';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-4xl font-serif font-bold text-brand-saffron tracking-tight">
            Setu
          </Link>
          <div className="flex gap-8 items-center font-medium text-brand-saffron/80">
            <Link href="#blog" className="hover:text-brand-saffron transition-colors">Blog</Link>
            <Link href="#story" className="hover:text-brand-saffron transition-colors">My Story</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-brand-beige/30">
        <Container size="xl">
          <Grid gutter={80} align="center">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <div className="fluid-art aspect-square relative">
                <Image 
                  src="/assets/hero-art.png" 
                  alt="Abstract fluid art" 
                  fill
                  className="object-cover"
                />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="xl">
                <div>
                  <Text className="text-brand-saffron font-medium italic mb-2 tracking-wide uppercase text-sm">
                    Bridging Cultures, Healing Minds
                  </Text>
                  <h1 className="text-6xl md:text-8xl leading-[1.1] mb-6">
                    Culturally rooted, <br />
                    globally accessible <br />
                    mind care.
                  </h1>
                </div>
                <Text size="lg" className="text-gray-700 max-w-xl leading-relaxed">
                  At Setu, we believe that mental wellness is not a luxury, but a necessity. 
                  Our mission is to support the <span className="font-bold text-brand-saffron">Indian diaspora worldwide</span> with accessible, 
                  culturally sensitive mind care services. Whether you're a student abroad, a 
                  working professional, or part of a family navigating life across borders, we're here 
                  to help you feel balanced, understood, and supported.
                </Text>
                <Link href="#contact" className="btn-primary w-fit text-lg py-4">
                  Get Started
                </Link>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      {/* Focus Section */}
      <section className="py-32 bg-white">
        <Container size="xl">
          <Grid gutter={80}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <h2 className="text-7xl font-serif">Our Focus</h2>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Grid gutter={60}>
                {[
                  { title: "Deeply Rooted", desc: "Care that understands Indian values, family dynamics, and traditions." },
                  { title: "Truly Borderless", desc: "Connect with qualified professionals from anywhere in the world." },
                  { title: "Confidential & Secure", desc: "Always Private, Judgment-free spaces for your growth." },
                  { title: "Seamlessly Flexible", desc: "Online sessions that fit your schedule and lifestyle." },
                ].map((item, i) => (
                  <Grid.Col key={i} span={{ base: 12, sm: 6 }}>
                    <Stack gap="xs">
                      <h3 className="text-2xl text-brand-saffron">{item.title}</h3>
                      <Text className="text-gray-600 leading-relaxed">{item.desc}</Text>
                    </Stack>
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      {/* My Story Section */}
      <section id="story" className="py-32 bg-brand-peach/40">
        <Container size="lg">
          <Stack gap={40}>
            <h2 className="text-7xl font-serif">My Story</h2>
            <div className="space-y-8 text-xl text-gray-800 leading-[1.8] max-w-4xl font-light">
              <p>My journey into mental health care began with a simple curiosity — how people make sense of their inner worlds. Over time, that curiosity deepened into a commitment to help others navigate their emotions with compassion and clarity.</p>
              <p>I am a <span className="font-bold text-brand-saffron">psychologist</span> trained in evidence-based therapeutic approaches including cognitive behavioral therapy, acceptance and commitment therapy, dialectic behavioral therapy, and person-centric therapy with experience working across individual, couple, and family settings.</p>
              <p>Setu was born from the realization that many of us need a space to be understood both <span className="italic">personally and culturally</span>. We build a bridge between the science of psychology and the lived realities of people who carry many identities at once.</p>
            </div>
          </Stack>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <Container size="xl">
          <h2 className="text-7xl font-serif mb-20 text-center md:text-left">Services</h2>
          <Grid gutter={40}>
            {[
              { 
                title: "Individual Mind Care", 
                img: "/assets/service-1.png",
                desc: "Our individual mind care sessions provide a safe, confidential space to explore your emotions, manage stress, and strengthen resilience."
              },
              { 
                title: "Family & Relationship Support", 
                img: "/assets/service-2.png",
                desc: "Our couples and family support programs are designed to nurture understanding, communication, and connection."
              },
              { 
                title: "Student & Young Adult Wellness", 
                img: "/assets/service-1.png", 
                desc: "Our programs provide practical tools and emotional support to help you cope with academic pressure, career anxiety, and homesickness."
              },
            ].map((service, i) => (
              <Grid.Col key={i} span={{ base: 12, md: 4 }}>
                <Stack gap="xl">
                  <div className="fluid-art aspect-video relative">
                    <Image src={service.img} alt={service.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl text-brand-saffron">{service.title}</h3>
                  <Text className="text-gray-600 leading-normal">{service.desc}</Text>
                  <Link href="#contact" className="text-brand-saffron font-bold flex items-center gap-2 group">
                    View Details 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-peach/80 border-t border-brand-saffron/10">
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Link href="/" className="text-4xl font-serif font-bold text-brand-saffron block mb-6">Setu</Link>
              <Text className="text-brand-saffron max-w-xs leading-relaxed italic">
                Navigating life&apos;s intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <div className="md:px-10">
                <Text className="font-bold text-brand-saffron mb-6 uppercase tracking-widest text-sm">Contact</Text>
                <Stack gap="xs" className="text-brand-saffron/80">
                  <Link href="mailto:spu.psych@gmail.com" className="hover:text-brand-saffron underline decoration-dotted">spu.psych@gmail.com</Link>
                  <Text>Tuesday — Sunday</Text>
                  <Text>6:30pm — 8:30pm</Text>
                  <Text>(Indian Standard Time)</Text>
                </Stack>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <div className="md:px-20">
                <Text className="font-bold text-brand-saffron mb-6 uppercase tracking-widest text-sm">Menu</Text>
                <Stack gap="sm" className="font-medium text-brand-saffron/80">
                  <Link href="#blog" className="hover:text-brand-saffron">Blog</Link>
                  <Link href="#story" className="hover:text-brand-saffron">My Story</Link>
                  <Link href="#privacy" className="hover:text-brand-saffron italic">Privacy Policy</Link>
                </Stack>
              </div>
            </Grid.Col>
          </Grid>
          <Text className="mt-20 text-center text-brand-saffron/40 font-mono text-xs uppercase tracking-widest">
            © 2026 Setu Mental Wellness. Premium Custom Build.
          </Text>
        </Container>
      </footer>
    </main>
  );
}
