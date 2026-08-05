// src/components/site/RingsCollection.tsx
// All rings page UI — StylishCarousel, ring data, cards, hero, bespoke CTA
// Imported and rendered by src/routes/rings.tsx

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { RINGS } from "@/resources/Rings_desc";
import { ReactLenis } from 'lenis/react';
import { useReveal } from "@/hooks/use-reveal";
import { EnquireModal } from "@/components/ui/EnquireModal";
import { StylishCarousel } from "@/components/ui/StylishCarousel";



interface ScrollParagraphProps {
  text: string;
  className?: string;
}

interface ScrollParagraphProps {
  text: string;
  className?: string;
  as?: React.ElementType; // Allows us to pass "h2", "h1", etc.
  style?: React.CSSProperties; // Allows us to pass the inline font family
}

function ScrollParagraph({ text, className, as: Component = "p", style }: ScrollParagraphProps) {
  const words = text.split(" ");
  // We use HTMLElement here so it accepts any tag
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.55"],
  });

  return (
    <Component
      ref={containerRef}
      className={cn("text-center", className)}
      style={style}
    >
      {words.map((word, i) => {
        const start = (i / words.length) * 0.7; 
        const end = start + 0.3;
        
        return (
          <WordReveal
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </Component>
  );
}

function WordReveal({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  // Subtle opacity and small upward lift for an elegant load
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y       = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.25em]" // standard space between inline words
    >
      {word}
    </motion.span>
  );
}



// ─── Ring data ────────────────────────────────────────────────────────────────


// ─── Single ring card ─────────────────────────────────────────────────────────
function RingCard({ ring, index }: { ring: typeof RINGS[0]; index: number }) {
  const isEven = index % 2 === 0;
  const [isSaved, setIsSaved] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <article
      id={`ring-${index}`}
      data-reveal
      className={cn(
        "reveal grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[560px] bg-secondary group/article",
        !isEven && "lg:[&>*:first-child]:order-2"
      )}
    >
      {/* Carousel side */}
      <div className="relative flex items-center justify-center bg-secondary p-8">
        {ring.tag && (
          <span className="absolute top-10 left-10 z-10 text-[10px] tracking-[0.22em] uppercase text-foreground/50 border border-foreground/15 px-2.5 py-1 rounded-full bg-secondary/80 backdrop-blur-sm">
            {ring.tag}
          </span>
        )}

        <div
          className="relative w-full rounded-2xl bg-background border border-foreground/6 shadow-sm flex items-center justify-center overflow-hidden"
          style={{ minHeight: "500px" }}
        >
          <StylishCarousel
            items={ring.angles}
            slideSize="clamp(280px, 20vmin, 220px)"
            rotationDegrees={24}
            inactiveScale={0.76}
            yOffsetPercent={54}
            springBounce={0.12}
            springDuration={0.75}
            borderRadius="0.75rem"
            showArrows
            showDots
            clickToNavigate
            layoutIdPrefix={`glow-ring-${index}`}
          />
        </div>
      </div>

      {/* Text side — Centered and aligned perfectly */}
      <div
        className={cn(
          "flex flex-col items-center text-center justify-center px-10 py-14",
          !isEven && "lg:pr-10 lg:pl-16"
        )}
      >
        <div className="flex items-center gap-4 mb-6">
          <a
            href={index > 0 ? `#ring-${index - 1}` : undefined}
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-foreground/5",
              index === 0 && "opacity-30 cursor-default pointer-events-none"
            )}
            aria-label="Previous piece"
          >
            <ChevronLeft className="w-3 h-3 text-foreground/50" />
          </a>
          <span className="text-[11px] tracking-[0.28em] text-foreground/35 uppercase">
            {String(index + 1).padStart(2, "0")} / {String(RINGS.length).padStart(2, "0")}
          </span>
          <a
            href={index < RINGS.length - 1 ? `#ring-${index + 1}` : undefined}
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-foreground/5",
              index === RINGS.length - 1 && "opacity-30 cursor-default pointer-events-none"
            )}
            aria-label="Next piece"
          >
            <ChevronRight className="w-3 h-3 text-foreground/50" />
          </a>
        </div>

        <ScrollParagraph
  as="h2"
  text={ring.name}
  className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-1 leading-tight"
  style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
/>

        <p className="text-xs tracking-[0.18em] uppercase text-foreground/50 mb-8">
          {ring.subtitle}
        </p>

        <ScrollParagraph
          text={ring.description}
          className="text-[20px] leading-[1.8] text-foreground/70 mb-10 max-w-md"
        />

        <div className="flex flex-col gap-2 mb-10 text-[12px] text-foreground/50">
          <div className="flex items-start justify-center gap-4 text-left w-full max-w-[200px] mx-auto">
            <span className="text-foreground/35 uppercase tracking-widest text-[10px] w-16 flex-shrink-0">Material</span>
            <span className="flex-1 text-foreground/70">{ring.material}</span>
          </div>
          <div className="flex items-start justify-center gap-4 text-left w-full max-w-[200px] mx-auto">
            <span className="text-foreground/35 uppercase tracking-widest text-[10px] w-16 flex-shrink-0">Edition</span>
            <span className="flex-1 text-foreground/70">{ring.edition}</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => setEnquireOpen(true)}
            className="px-7 py-3 text-[11px] tracking-[0.22em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 rounded-full"
          >
            Enquire
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={cn(
              "px-5 py-3 text-[11px] tracking-[0.22em] uppercase border transition-all duration-300 rounded-full w-24 flex items-center justify-center",
              isSaved
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/30 text-foreground/65 hover:border-foreground/50 hover:text-foreground"
            )}
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
      <EnquireModal isOpen={enquireOpen} onClose={() => setEnquireOpen(false)} itemName={ring.name} />
    </article>
  );
}
// ─── Main export — used by src/routes/rings.tsx ───────────────────────────────
export function RingsCollection() {
  useReveal();

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {/* The 'root' prop tells Lenis to hijack the browser's native scroll */}
      <main className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Page hero */}
        <section className="relative px-6 pt-28 pb-16 max-w-5xl mx-auto">
          <p className="eyebrow mb-4">The Collection</p>
          <h1
            className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight text-foreground mb-6"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Rings
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p className="text-[15px] text-foreground/55 leading-relaxed max-w-md">
              Ten pieces. Each exists in a numbered edition — some as few as six.
              Every angle photographed. Every material disclosed.
            </p>
            <span className="text-[11px] tracking-[0.22em] uppercase text-foreground/35">
              10 pieces · Paris, 2026
            </span>
          </div>
        </section>

        <div className="w-full h-px bg-foreground/10" />

        {/* Ring cards */}
        <div className="flex flex-col">
          {RINGS.map((ring, i) => (
            <div key={ring.id}>
              <RingCard ring={ring} index={i} />
              {i < RINGS.length - 1 && <div className="w-full h-px bg-foreground/8" />}
            </div>
          ))}
        </div>

        {/* Bespoke CTA */}
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