// src/components/site/RingDivider.tsx
// Replace the 3D canvas with a scroll-velocity marquee using Lightswind ThreeDScrollTrigger

import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

// ─── Utility ────────────────────────────────────────────────────────────────
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// ─── Shared velocity context ─────────────────────────────────────────────────
const VelocityContext = React.createContext<MotionValue<number> | null>(null);

function VelocityProvider({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    return sign * Math.min(5, (Math.abs(v) / 1000) * 5);
  });
  return (
    <VelocityContext.Provider value={velocityFactor}>
      {children}
    </VelocityContext.Provider>
  );
}

// ─── Marquee row ─────────────────────────────────────────────────────────────
interface MarqueeRowProps {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
}

function MarqueeRow({ children, baseVelocity = 4, direction = 1, className = "" }: MarqueeRowProps) {
  const sharedVelocity = useContext(VelocityContext);
  const { scrollY } = useScroll();
  const localVelocity = useVelocity(scrollY);
  const localSmooth = useSpring(localVelocity, { damping: 50, stiffness: 400 });
  const localFactor = useTransform(localSmooth, (v) => {
    const sign = v < 0 ? -1 : 1;
    return sign * Math.min(5, (Math.abs(v) / 1000) * 5);
  });

  const velocityFactor = sharedVelocity ?? localFactor;

  const containerRef = useRef<HTMLDivElement>(null);
  const [numCopies, setNumCopies] = useState(4);
  const x = useMotionValue(0);
  const prevTimeRef = useRef<number | null>(null);
  const unitWidthRef = useRef(0);
  const baseXRef = useRef(0);

  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
  const BlockContent = useMemo(() => (
    <div className="inline-flex shrink-0 items-center">{childrenArray}</div>
  ), [childrenArray]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const block = container.querySelector(".marquee-block") as HTMLElement;
    if (block) {
      unitWidthRef.current = block.scrollWidth;
      const needed = Math.max(4, Math.ceil(container.offsetWidth / unitWidthRef.current) + 2);
      setNumCopies(needed);
    }
  }, [childrenArray]);

  const isInView = useInView(containerRef, { margin: "20%" });

  useAnimationFrame((time) => {
    if (!isInView) return;
    if (prevTimeRef.current == null) prevTimeRef.current = time;
    const dt = Math.max(0, (time - prevTimeRef.current) / 1000);
    prevTimeRef.current = time;
    const unitWidth = unitWidthRef.current;
    if (unitWidth <= 0) return;

    const velocity = velocityFactor.get();
    const speedMultiplier = Math.min(5, Math.abs(velocity));
    const scrollDir = velocity >= 0 ? 1 : -1;
    const currentDir = direction * scrollDir;
    const pixelsPerSecond = (unitWidth * baseVelocity) / 100;
    const moveBy = currentDir * pixelsPerSecond * (1 + speedMultiplier) * dt;
    const newX = baseXRef.current + moveBy;

    if (newX >= unitWidth) baseXRef.current = newX % unitWidth;
    else if (newX <= 0) baseXRef.current = unitWidth + (newX % unitWidth);
    else baseXRef.current = newX;

    x.set(baseXRef.current);
  });

  const xTransform = useTransform(x, (v) => `translate3d(${-v}px,0,0)`);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="inline-flex will-change-transform transform-gpu" style={{ transform: xTransform }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <div key={i} className={`inline-flex shrink-0 items-center ${i === 0 ? "marquee-block" : ""}`}>
            {BlockContent}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Jewellery tokens ─────────────────────────────────────────────────────────
// Row 1 — brand words in large serif caps
const topItems = [
  "K.K Jewelers",
  "✦",
  "HALLMARK GOLD",
  "✦",
  "22 K Gold",
  "✦",
  "Rings",
  "✦",
  "Earings",
   "✦",
  "Necklaces",
  "✦"
];

// Row 2 — smaller descriptors in lighter weight, opposite direction
const bottomItems = [
  "DIAMOND DESIGNS",
  "◆",
  "Made to Order",
  "◆",
  "Fine Jewellery",
  "◆",
];

// ─── Divider ─────────────────────────────────────────────────────────────────
export function RingDivider() {
  return (
    <VelocityProvider>
      <section
        aria-hidden="true"
        className="relative w-full overflow-hidden bg-secondary py-7 flex flex-col gap-4"
      >
        {/* Subtle top rule */}
        <div className="absolute inset-x-0 top-0 h-px bg-foreground/10" />

        {/* Row 1 — large gold serif text scrolling right */}
        <MarqueeRow baseVelocity={3.5} direction={1}>
          {topItems.map((item, i) => (
            <span
              key={i}
              className={
                item === "✦"
                  ? "mx-5 text-foreground/30 text-sm select-none"
                  : "mx-8 text-[22px] font-light tracking-[0.18em] uppercase text-foreground/80 select-none"
              }
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            >
              {item}
            </span>
          ))}
        </MarqueeRow>

        {/* Hairline separator */}
        <div className="mx-auto w-10 h-px bg-foreground/15" />

        {/* Row 2 — smaller descriptors scrolling left */}
        <MarqueeRow baseVelocity={2.8} direction={-1}>
          {bottomItems.map((item, i) => (
            <span
              key={i}
              className={
                item === "◆"
                  ? "mx-5 text-foreground/25 text-[10px] select-none"
                  : "mx-7 text-[11px] font-medium tracking-[0.28em] uppercase text-foreground/50 select-none"
              }
            >
              {item}
            </span>
          ))}
        </MarqueeRow>

        {/* Subtle bottom rule */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10" />
      </section>
    </VelocityProvider>
  );
}