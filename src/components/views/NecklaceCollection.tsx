// src/components/site/NecklaceCollection.tsx
// Necklace page — AngledSlider hero (Lightswind, adapted for Vite) + editorial product cards
// Route: src/routes/necklaces.tsx → component: NecklaceCollection

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { EnquireModal } from "@/components/ui/EnquireModal";
import { StylishCarousel } from "@/components/ui/StylishCarousel";
import { ReactLenis } from "lenis/react";
import { Route } from "@/routes/necklace";

function NecklaceCard({ necklace, index, total }: { necklace: any; index: number; total: number }) {
  const isEven = index % 2 === 0;
  const [isSaved, setIsSaved] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
 
  const carouselItems = necklace.sliderImages.map((img: { url: string; alt: string; title: string }) => ({
    src: img.url,
    alt: img.alt,
    title: img.title
  }));

  return (
    <article
      id={`necklace-${index}`}
      data-reveal
      className={cn(
        "reveal grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[600px] bg-secondary group/article",
        !isEven && "lg:[&>*:first-child]:order-2"
      )}
    >
      {/* Carousel side - 60% */}
      <div className="relative flex items-center justify-center bg-secondary p-8 lg:col-span-3">
        {necklace.tag && (
          <span className="absolute top-10 left-10 z-10 text-[10px] tracking-[0.22em] uppercase text-foreground/50 border border-foreground/15 px-2.5 py-1 rounded-full bg-secondary/80 backdrop-blur-sm">
            {necklace.tag}
          </span>
        )}
        <div
          className="relative w-full rounded-2xl bg-background border border-foreground/6 shadow-sm flex items-center justify-center overflow-hidden"
          style={{ minHeight: "550px" }}
        >
          <StylishCarousel
            items={carouselItems}
            slideSize="clamp(260px, 46vmin, 440px)"
            rotationDegrees={24}
            inactiveScale={0.76}
            yOffsetPercent={54}
            springBounce={0.12}
            springDuration={0.75}
            borderRadius="0.75rem"
            showArrows
            showDots
            clickToNavigate
            layoutIdPrefix={`glow-necklace-${index}`}
          />
        </div>
      </div>
 
      {/* Text side - 40% */}
      <div
        className={cn(
          "flex flex-col items-center text-center justify-center px-10 py-14 lg:col-span-2",
          !isEven && "lg:pr-10 lg:pl-16"
        )}
      >
        <div className="flex items-center gap-4 mb-6">
          <a
            href={index > 0 ? `#necklace-${index - 1}` : undefined}
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-foreground/5",
              index === 0 && "opacity-30 cursor-default pointer-events-none"
            )}
            aria-label="Previous piece"
          >
            <ChevronLeft className="w-3 h-3 text-foreground/50" />
          </a>
          <span className="text-[11px] tracking-[0.28em] text-foreground/35 uppercase block">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <a
            href={index < total - 1 ? `#necklace-${index + 1}` : undefined}
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-foreground/5",
              index === total - 1 && "opacity-30 cursor-default pointer-events-none"
            )}
            aria-label="Next piece"
          >
            <ChevronRight className="w-3 h-3 text-foreground/50" />
          </a>
        </div>
 
        <h2
          className="text-3xl sm:text-4xl font-light tracking-tight text-foreground mb-1 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          {necklace.name}
        </h2>
 
        <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-7">
          {necklace.subtitle}
        </p>
 
        <p className="text-[14px] leading-[1.85] text-foreground/65 mb-8 max-w-md">
          {necklace.description}
        </p>
 
        <div className="mb-8 text-[11px] text-foreground/45">
          <div className="flex items-start justify-center gap-4 text-left w-full max-w-[200px] mx-auto">
            <span className="text-foreground/30 uppercase tracking-widest text-[9px] w-16 flex-shrink-0">Material</span>
            <span className="flex-1 text-foreground/65">{necklace.material}</span>
          </div>
        </div>
 
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => setEnquireOpen(true)}
            className="px-6 py-2.5 text-[10px] tracking-[0.22em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 rounded-full"
          >
            Enquire
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={cn(
              "px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase border transition-all duration-300 rounded-full w-24 flex items-center justify-center",
              isSaved
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/25 text-foreground/55 hover:border-foreground/45 hover:text-foreground"
            )}
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
 
      </div>
      <EnquireModal isOpen={enquireOpen} onClose={() => setEnquireOpen(false)} itemName={necklace.name} />
    </article>
  );
}
 
// ─── Main export ──────────────────────────────────────────────────────────────
export function NecklaceCollection() {
  useReveal();
  const NECKLACES = Route.useLoaderData();

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="min-h-screen bg-background text-foreground">
        <Header />
  
        {/* Page header — text only, no hero slider */}
        <section className="relative px-6 pt-28 pb-16 max-w-5xl mx-auto">
          <p className="eyebrow mb-4">The Collection</p>
          <h1
            className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight text-foreground mb-6"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Necklaces
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p className="text-[15px] text-foreground/55 leading-relaxed max-w-md">
              {NECKLACES.length} pieces. Chains, pendants, rivières, and collars — each made once, or close to it.
              Every detail photographed. Every material disclosed.
            </p>
            <span className="text-[11px] tracking-[0.22em] uppercase text-foreground/35">
              {NECKLACES.length} pieces · Paris, 2026
            </span>
          </div>
        </section>
  
        <div className="w-full h-px bg-foreground/10" />
  
        {/* Necklace cards — each with its own mini slider + text */}
        <div className="flex flex-col gap-6 bg-secondary p-6">
          {NECKLACES.map((necklace, i) => (
            <div key={necklace.id} className="rounded-2xl overflow-hidden">
              <NecklaceCard necklace={necklace} index={i} total={NECKLACES.length} />
            </div>
          ))}
        </div>
  
        <section data-reveal className="reveal py-24 px-6 text-center bg-secondary">
          <p className="eyebrow mb-4">Bespoke</p>
          <h2
            className="text-3xl sm:text-4xl font-light text-foreground mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            None of these is quite right?
          </h2>
          <p className="text-sm text-foreground/50 max-w-sm mx-auto mb-10 leading-relaxed">
            We make pieces to commission. Bring a stone, a sketch, or just a feeling —
            our atelier will take it from there.
          </p>
          <button className="px-10 py-4 text-[11px] tracking-[0.24em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 rounded-full">
            Start a commission
          </button>
        </section>
  
        <div className="w-full h-px bg-foreground/10" />
        <Footer />
      </main>
    </ReactLenis>
  );
}