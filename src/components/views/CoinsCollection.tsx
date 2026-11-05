// src/components/views/CoinsCollection.tsx
// Dedicated Coins & Bullion Collection Overview Page
// Displays Gold Coins (Ginnis: 1g, 2g, 5g) and Silver Dollar Notes of varying weights
// Features prominent subpage navigation to /coins/gold and /coins/silver

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReactLenis } from "lenis/react";
import { useReveal } from "@/hooks/use-reveal";
import { BespokeCTA } from "@/components/sections/BespokeCTA";
import { CoinsNav } from "@/components/views/coins/CoinsNav";
import { CoinCard } from "@/components/views/coins/CoinCard";
import {
  DEFAULT_GOLD_COINS,
  DEFAULT_SILVER_NOTES,
  mergeBullionItems,
  isSilverNote,
  type LoaderProduct,
} from "@/components/views/coins/types";
import { Route } from "@/routes/coins/index";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Coins, Banknote } from "lucide-react";

export function CoinsCollection() {
  useReveal();
  const products = (Route.useLoaderData() || []) as LoaderProduct[];

  const dbGold = products.filter((p) => !isSilverNote(p));
  const dbSilver = products.filter((p) => isSilverNote(p));

  const goldCoins = mergeBullionItems(DEFAULT_GOLD_COINS, dbGold, "coins");
  const silverNotes = mergeBullionItems(DEFAULT_SILVER_NOTES, dbSilver, "silver_notes");

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
        <CoinsNav />

        {/* Page Hero */}
        <section className="relative px-6 pt-20 pb-16 max-w-5xl mx-auto">
          <p className="eyebrow mb-4">The Bullion Collection</p>
          <h1
            className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight text-foreground mb-4"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Coins & Dollar Notes
          </h1>
          <p className="text-sm sm:text-base text-foreground/60 max-w-xl font-light leading-relaxed mb-8">
          
          </p>

          {/* Quick Subpage Switcher Cards */}
        
        </section>

        <div className="w-full h-px bg-foreground/10" />

        {/* Section 1: Gold Coins (Ginnis) */}
        <section id="gold-coins" className="w-full">
          <div className="border-b border-foreground/10 bg-background/50 py-8 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-amber-500 mb-2 font-medium">
                  24K Hallmarked Bullion
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-light tracking-tight text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                >
                  Gold Coins (Ginnis)
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-xs tracking-[0.16em] uppercase text-foreground/50">
                  1g, 2g, and 5g certified minted weights
                </p>
                <Link
                  to="/coins/gold"
                  className="inline-flex items-center gap-1.5 text-xs tracking-[0.16em] uppercase text-primary hover:text-primary/80 font-medium"
                >
                  Dedicated Gold Page
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {goldCoins.map((coin, i) => (
              <div key={coin.id}>
                <CoinCard
                  item={coin}
                  index={i}
                  total={goldCoins.length}
                  sectionId="gold-coin"
                  isGold={true}
                />
                {i < goldCoins.length - 1 && <div className="w-full h-px bg-foreground/8" />}
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-foreground/10" />

        {/* Section 2: Silver Dollar Notes */}
        <section id="silver-notes" className="w-full">
          <div className="border-b border-foreground/10 bg-background/50 py-8 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase text-slate-400 mb-2 font-medium">
                  999 Fine Bullion
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-light tracking-tight text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
                >
                  Silver Dollar Notes
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-xs tracking-[0.16em] uppercase text-foreground/50">
                  Precision engraved 999 fine silver currency ingots
                </p>
                <Link
                  to="/coins/silver"
                  className="inline-flex items-center gap-1.5 text-xs tracking-[0.16em] uppercase text-primary hover:text-primary/80 font-medium"
                >
                  Dedicated Silver Page
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
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
