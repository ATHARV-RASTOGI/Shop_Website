// src/components/views/AboutPage.tsx
import { ReactLenis } from "lenis/react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { cld } from "@/lib/images";
import { Sparkles, Hammer, ShieldCheck, ArrowRight } from "lucide-react";

export function AboutPage() {
  useReveal();

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero Section */}
        <section className="relative px-6 pt-28 pb-20 max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-4">The House & Craft</p>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-foreground mb-8"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Crafting Timeless Elegance <br className="hidden sm:inline" />
            <span className="italic text-primary">Since 1985</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
            From our roots in Farrukhabad, K.K Jewelers bridges generational Indian craftsmanship with contemporary luxury design.
          </p>
        </section>

        <div className="w-full h-px bg-border/40" />

        {/* Story Section 1 — Handcrafted Heritage */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div data-reveal className="lg:col-span-6 space-y-6">
              <span className="eyebrow">Our Heritage</span>
              <h2
                className="text-3xl sm:text-5xl font-light leading-tight text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                A Legacy Built on Trust <br />
                <span className="italic text-primary">& Meticulous Precision</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Founded with a commitment to pure gold standards and unmatched artistry, K.K Jewelers has served discerning clients across India. Every creation begins with ethically sourced raw gold and hand-selected stones, transformed by master artisans who have perfected their trade over decades.
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed">
                For decades, our family has upheld the art of handcrafting jewellery with integrity — every piece carrying forward a tradition of trust and meticulous precision.
              </p>
            </div>
            <div data-reveal data-reveal-delay="150" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-secondary aspect-[4/3]">
                <img
                  src={cld("Blue_stone_2_pjjdzn", 1000)}
                  alt="Jewelry crafting at K.K Jewelers atelier"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values / Process 3-Grid */}
        <section className="py-20 px-6 bg-secondary border-y border-border/40">
          <div className="max-w-[1400px] mx-auto">
            <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow">Pillars of Quality</span>
              <h2
                className="text-3xl sm:text-4xl font-light text-foreground mt-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Our Uncompromising Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-reveal data-reveal-delay="100" className="p-8 rounded-2xl bg-background border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium font-serif mb-3">100% Certified Purity</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    All our gold pieces carry official BIS Hallmarking (22K & 18K), and all diamonds come with independent lab certification guarantees.
                  </p>
                </div>
                <p className="text-[11px] text-foreground/35 mt-6 tracking-wide">
                  BIS Hallmark verified · HUID traceable
                </p>
              </div>

              <div data-reveal data-reveal-delay="200" className="p-8 rounded-2xl bg-background border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 text-primary">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium font-serif mb-3">Handcrafted Atelier</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    Each piece is hand-set and hand-finished in our dedicated workshop, blending classic techniques with modern ergonomic design.
                  </p>
                </div>
                <p className="text-[11px] text-foreground/35 mt-6 tracking-wide">
                  Master karigars with 20+ years of experience
                </p>
              </div>

              <div data-reveal data-reveal-delay="300" className="p-8 rounded-2xl bg-background border border-border/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium font-serif mb-3">Bespoke Commissions</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    We offer custom design services — turning your sketches, family heirloom stones, or unique inspirations into one-of-a-kind treasures.
                  </p>
                </div>
                <p className="text-[11px] text-foreground/35 mt-6 tracking-wide">
                  Typical turnaround: 2–4 weeks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section 2 — Atelier & Workshop */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div data-reveal data-reveal-delay="150" className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-secondary aspect-[4/3]">
                <img
                  src={cld("Song_Drop", 1000)}
                  alt="Fine jewelry workshop details"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div data-reveal className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="eyebrow">The Atelier</span>
              <h2
                className="text-3xl sm:text-5xl font-light leading-tight text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Where Materials <br />
                <span className="italic text-primary">Become Heirlooms</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Whether you visit our showroom in Farrukhabad or reach out for a custom consultation, every interaction with K.K Jewelers is tailored to your personal journey.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-full"
                >
                  <span>Visit Our Showroom</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
