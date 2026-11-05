// src/components/views/GoldCoinsPage.tsx
// Dedicated subpage for 24K Gold Coins (Ginnis) of varying weights (1g, 2g, 5g)

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReactLenis } from "lenis/react";
import { useReveal } from "@/hooks/use-reveal";
import { BespokeCTA } from "@/components/sections/BespokeCTA";
import { CoinsNav } from "@/components/views/coins/CoinsNav";
import { CoinCard } from "@/components/views/coins/CoinCard";
import {
  DEFAULT_GOLD_COINS,
  mergeBullionItems,
  type LoaderProduct,
} from "@/components/views/coins/types";
import { Route } from "@/routes/coins/gold";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function GoldCoinsPage() {
  useReveal();
  const products = (Route.useLoaderData() || []) as LoaderProduct[];
  const goldCoins = mergeBullionItems(DEFAULT_GOLD_COINS, products, "coins");

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
            Gold Coins (Ginnis)
          </h1>
          <p className="text-sm sm:text-base text-foreground/60 max-w-2xl font-light leading-relaxed">
            
          </p>

          {/* Quick Subpage Link to Silver */}
          <div className="mt-8 flex items-center justify-center sm:justify-start gap-4">
            <span className="text-xs tracking-[0.16em] uppercase text-foreground/45">
              Looking for Silver?
            </span>
            <Link
              to="/coins/silver"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.16em] uppercase text-primary hover:text-primary/80 transition-colors font-medium border-b border-primary/30 pb-0.5"
            >
              Explore Silver Dollar Notes
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <div className="w-full h-px bg-foreground/10" />

        {/* Gold Coins Cards Section */}
        <section id="gold-coins" className="w-full">
          <div className="border-b border-foreground/10 bg-background/50 py-6 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs tracking-[0.2em] uppercase text-foreground/60">
                Weights Available: 1g · 2g · 5g
              </span>
              <span className="text-[11px] tracking-[0.22em] uppercase text-foreground/40">
                Total Pieces: {goldCoins.length}
              </span>
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

        {/* Bespoke CTA */}
        <BespokeCTA />

        <div className="w-full h-px bg-foreground/10" />
        <Footer />
      </main>
    </ReactLenis>
  );
}
