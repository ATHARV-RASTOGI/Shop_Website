// src/components/views/coins/CoinCard.tsx
// Single Coin / Silver Note Card component with placeholder and real-asset support

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Coins, Banknote, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { EnquireModal } from "@/components/ui/EnquireModal";
import { StylishCarousel } from "@/components/ui/StylishCarousel";
import type { CoinItem } from "./types";

interface ScrollParagraphProps {
  text?: string;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

function ScrollParagraph({
  text = "",
  className,
  as: Component = "p",
  style,
}: ScrollParagraphProps) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.55"],
  });

  if (words.length === 0) {
    return <Component ref={containerRef} className={cn("text-center", className)} style={style} />;
  }

  return (
    <Component ref={containerRef} className={cn("text-center", className)} style={style}>
      {words.map((word, i) => {
        const start = (i / words.length) * 0.7;
        const end = start + 0.3;

        return <WordReveal key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
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
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

export function CoinCard({
  item,
  index,
  total,
  sectionId,
  isGold = true,
}: {
  item: CoinItem;
  index: number;
  total: number;
  sectionId: string;
  isGold?: boolean;
}) {
  const isEven = index % 2 === 0;
  const [enquireOpen, setEnquireOpen] = useState(false);
  const validAngles = (item.angles || []).filter(
    (a): a is { src: string; alt: string; title: string } =>
      Boolean(
        a?.src && typeof a.src === "string" && a.src.trim() !== "" && !a.src.endsWith("/undefined"),
      ),
  );
  const hasImages = validAngles.length > 0;

  return (
    <article
      id={`${sectionId}-${index}`}
      data-reveal
      className={cn(
        "reveal grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[640px] bg-secondary group/article scroll-mt-36 lg:scroll-mt-28",
        !isEven && "lg:[&>*:first-child]:order-2",
      )}
    >
      {/* Media / Carousel / Placeholder side */}
      <div className="relative flex items-center justify-center bg-secondary p-8">
        {item.tag && (
          <span className="absolute top-10 left-10 z-10 text-[10px] tracking-[0.22em] uppercase text-foreground/50 border border-foreground/15 px-2.5 py-1 rounded-full bg-secondary/80 backdrop-blur-sm">
            {item.tag}
          </span>
        )}

        <div
          className="relative w-full rounded-2xl bg-background border border-foreground/6 shadow-sm flex items-center justify-center overflow-hidden"
          style={{ minHeight: "600px" }}
        >
          {hasImages ? (
            <StylishCarousel
              items={validAngles}
              slideSize="clamp(275px, 25vmin, 350px)"
              rotationDegrees={24}
              inactiveScale={0.76}
              yOffsetPercent={54}
              springBounce={0.12}
              springDuration={0.75}
              borderRadius="0.75rem"
              showArrows
              showDots
              clickToNavigate
              layoutIdPrefix={`glow-${sectionId}-${index}`}
            />
          ) : (
            /* Styled Placeholder Image Container */
            <div className="relative w-full h-full min-h-[580px] p-8 flex flex-col items-center justify-center text-center select-none">
              {/* Ambient metallic glow */}
              <div
                className={cn(
                  "absolute inset-0 opacity-25 pointer-events-none blur-3xl",
                  isGold
                    ? "bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.3)_0%,transparent_70%)]"
                    : "bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.3)_0%,transparent_70%)]",
                )}
              />

              {/* Bullion Emblem Silhouette Frame */}
              <div
                className={cn(
                  "relative z-10 flex flex-col items-center justify-center transition-transform duration-500 group-hover/article:scale-[1.03]",
                  isGold ? "w-60 h-60 sm:w-72 sm:h-72" : "w-72 h-44 sm:w-80 sm:h-48",
                )}
              >
                {/* Outer frame */}
                <div
                  className={cn(
                    "absolute inset-0 border border-dashed flex items-center justify-center shadow-inner transition-colors duration-300",
                    isGold
                      ? "rounded-full border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent group-hover/article:border-amber-500/60"
                      : "rounded-xl border-slate-400/40 bg-gradient-to-br from-slate-400/10 via-slate-400/5 to-transparent group-hover/article:border-slate-400/60",
                  )}
                >
                  {/* Inner decorative rim */}
                  <div
                    className={cn(
                      "absolute inset-3 border",
                      isGold
                        ? "rounded-full border-amber-500/20"
                        : "rounded-lg border-slate-400/20",
                    )}
                  />
                </div>

                {/* Central Emblem & Weight Badge */}
                <div className="relative z-10 flex flex-col items-center justify-center px-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-sm",
                      isGold
                        ? "bg-amber-500/15 text-amber-500 border border-amber-500/30"
                        : "bg-slate-400/15 text-slate-300 border border-slate-400/30",
                    )}
                  >
                    {isGold ? <Coins className="w-6 h-6" /> : <Banknote className="w-6 h-6" />}
                  </div>

                  <span
                    className="text-3xl sm:text-4xl font-light tracking-wide text-foreground"
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    }}
                  >
                    {item.weightLabel}
                  </span>

                  <span className="text-[10px] tracking-[0.26em] uppercase text-foreground/50 mt-1 font-medium">
                    {isGold ? "24K · 999 Gold" : "999 Fine Silver"}
                  </span>
                </div>
              </div>

              {/* Ready for upload label container */}
              <div className="relative z-10 mt-8 max-w-xs">
                <span className="inline-block text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-sm text-foreground/60 mb-2">
                  Image Slot Ready
                </span>
                <p className="text-[11px] tracking-[0.14em] uppercase text-foreground/40">
                  Ready for Supabase & Cloudinary upload
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Text side — Centered and aligned */}
      <div
        className={cn(
          "flex flex-col items-center text-center justify-center px-10 py-14",
          !isEven && "lg:pr-10 lg:pl-16",
        )}
      >
        {/* Navigation counter */}
        <div className="flex items-center gap-4 mb-6">
          <a
            href={index > 0 ? `#${sectionId}-${index - 1}` : undefined}
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-foreground/5",
              index === 0 && "opacity-30 cursor-default pointer-events-none",
            )}
            aria-label="Previous piece"
          >
            <ChevronLeft className="w-3 h-3 text-foreground/50" />
          </a>
          <span className="text-[11px] tracking-[0.28em] text-foreground/35 uppercase block">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <a
            href={index < total - 1 ? `#${sectionId}-${index + 1}` : undefined}
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-foreground/5",
              index === total - 1 && "opacity-30 cursor-default pointer-events-none",
            )}
            aria-label="Next piece"
          >
            <ChevronRight className="w-3 h-3 text-foreground/50" />
          </a>
        </div>

        {/* Heading */}
        <ScrollParagraph
          as="h2"
          text={item.name}
          className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-1 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        />

        {/* Subtitle */}
        <p className="text-xs tracking-[0.18em] uppercase text-foreground/50 mb-8">
          {item.subtitle}
        </p>

        {/* Weight specification */}
        <div className="mb-10 text-center">
          <span className="block text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-1">
            Weight
          </span>
          <span className="text-sm font-medium text-foreground tracking-wide">
            {item.weight}
          </span>
        </div>

        {/* Enquire CTA */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => setEnquireOpen(true)}
            className="px-7 py-3 text-[11px] tracking-[0.22em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 rounded-full"
          >
            Enquire
          </button>
        </div>
      </div>

      <EnquireModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        itemName={item.name}
      />
    </article>
  );
}
