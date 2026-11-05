// src/components/views/SilverNotesPage.tsx
// Dedicated subpage for 999 Fine Silver Dollar Notes of varying weights (10g, 20g, 50g, 100g)

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReactLenis } from "lenis/react";
import { useReveal } from "@/hooks/use-reveal";
import { BespokeCTA } from "@/components/sections/BespokeCTA";
import { CoinsNav } from "@/components/views/coins/CoinsNav";
import { CoinCard } from "@/components/views/coins/CoinCard";
import {
  DEFAULT_SILVER_NOTES,
  mergeBullionItems,
  type LoaderProduct,
} from "@/components/views/coins/types";
import { Route } from "@/routes/coins/silver";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function SilverNotesPage() {
  useReveal();
  const products = (Route.useLoaderData() || []) as LoaderProduct[];
  const silverNotes = mergeBullionItems(DEFAULT_SILVER_NOTES, products, "silver_notes");

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <CoinsNav />

        {/* Page Hero */}
        <section className="relative px-6 pt-20 pb-16 max-w-5xl mx-auto text-center sm:text-left">
          <div className="flex flex-wrap items-center gap-2 mb-4 justify-center sm:justify-start">
            <span className="eyebrow">The Collection</span>
        
            
          </div>

          <h1
            className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight text-foreground mb-4"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Silver Dollar Notes
          </h1>
         
          {/* Quick Subpage Link to Gold */}
          <div className="mt-8 flex items-center justify-center sm:justify-start gap-4">
            <span className="text-xs tracking-[0.16em] uppercase text-foreground/45">
              Looking for Gold?
            </span>
            <Link
              to="/coins/gold"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.16em] uppercase text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 pb-0.5"
            >
              Explore 24K Gold Coins (1g, 2g, 5g)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <div className="w-full h-px bg-foreground/10" />

        {/* Silver Dollar Notes Cards Section */}
        <section id="silver-notes" className="w-full">
          <div className="border-b border-foreground/10 bg-background/50 py-6 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs tracking-[0.2em] uppercase text-foreground/60">
                Weights Available: 10g · 20g · 50g · 100g
              </span>
              <span className="text-[11px] tracking-[0.22em] uppercase text-foreground/40">
                Total Pieces: {silverNotes.length}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            {silverNotes.map((note, i) => (
              <div key={note.id}>
                <CoinCard
                  item={note}
                  index={i}
                  total={silverNotes.length}
                  sectionId="silver-note"
                  isGold={false}
                />
                {i < silverNotes.length - 1 && <div className="w-full h-px bg-foreground/8" />}
              </div>
            ))}
          </div>
        </section>

        {/* Bespoke CTA */}
        <BespokeCTA />

        <div className="w-full h-px bg-foreground/10" />
        <Footer />
      </main>
    </ReactLenis>
  );
}
