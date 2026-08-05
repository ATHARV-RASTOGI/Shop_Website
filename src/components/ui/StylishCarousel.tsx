import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: { src: string; alt?: string; title?: string }[];
  initialIndex?: number;
  slideSize?: string;
  rotationDegrees?: number;
  inactiveScale?: number;
  yOffsetPercent?: number;
  springBounce?: number;
  springDuration?: number;
  showArrows?: boolean;
  showDots?: boolean;
  clickToNavigate?: boolean;
  autoPlay?: number;
  className?: string;
  onIndexChange?: (index: number) => void;
  borderRadius?: string;
  arrowClassName?: string;
  layoutIdPrefix?: string;
}

export function StylishCarousel({
  items = [],
  initialIndex = 0,
  slideSize = "clamp(180px, 42vmin, 340px)",
  rotationDegrees = 28,
  inactiveScale = 0.62,
  yOffsetPercent = 48,
  springBounce = 0.15,
  springDuration = 0.8,
  showArrows = true,
  showDots = true,
  clickToNavigate = true,
  autoPlay = 0,
  className,
  onIndexChange,
  borderRadius = "0.75rem",
  arrowClassName,
  layoutIdPrefix = "glow",
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, Math.min(initialIndex, items.length - 1))
  );
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      setActiveIndex(clamped);
      onIndexChange?.(clamped);
    },
    [items.length, onIndexChange]
  );

  const toPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const toNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") toPrev();
      if (e.key === "ArrowRight") toNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toPrev, toNext]);

  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1 >= items.length ? 0 : prev + 1;
        onIndexChange?.(next);
        return next;
      });
    }, autoPlay);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, items.length, onIndexChange]);

  const spring = { type: "spring" as const, bounce: springBounce, duration: springDuration };

  if (!items.length) return null;

  return (
    <div
      className={cn("relative flex flex-col items-center select-none", className)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) delta > 0 ? toNext() : toPrev();
        touchStartX.current = null;
      }}
    >
      {/* Slides */}
      <div style={{ width: slideSize, aspectRatio: "1 / 1" }} className="relative mt-6 overflow-visible">
        <motion.div
          className="flex w-fit"
          animate={{ x: `${(-activeIndex * 100) / items.length}%` }}
          transition={spring}
        >
          {items.map((item, i) => {
            const offset = i - activeIndex;
            const isActive = offset === 0;
            return (
              <motion.div
                key={i}
                style={{ width: slideSize, aspectRatio: "1 / 1" }}
                className="flex-shrink-0 flex flex-col items-center gap-2 will-change-transform"
                animate={{
                  rotate: offset * rotationDegrees,
                  scale: isActive ? 1 : inactiveScale,
                  y: `${offset * yOffsetPercent}%`,
                }}
                transition={spring}
              >
                <AnimatePresence>
                  {item.title && (
                    <motion.span
                      key={`title-${i}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs font-medium whitespace-nowrap text-foreground/60 tracking-[0.14em] uppercase"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>

                <div
                  className="group/slide relative w-full h-full overflow-hidden shadow-2xl"
                  style={{ borderRadius }}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? `Angle ${i + 1}`}
                    draggable={false}
                    onClick={() => clickToNavigate && goTo(i)}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500",
                      isActive && "group-hover/slide:scale-105 group-hover/slide:brightness-110 cursor-zoom-in",
                      !isActive && "brightness-60",
                      clickToNavigate && !isActive && "cursor-pointer hover:brightness-90"
                    )}
                    loading="lazy"
                  />
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/40 backdrop-blur-sm p-3 rounded-full text-foreground/80">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId={`${layoutIdPrefix}-${i}`}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 2px hsl(var(--foreground) / 0.18)",
                        borderRadius,
                      }}
                      transition={spring}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-3 px-3 py-2 rounded-full bg-background/70 border border-foreground/8 backdrop-blur-md shadow-md">
        {showArrows && (
          <button
            aria-label="Previous"
            onClick={toPrev}
            disabled={activeIndex === 0}
            className={cn(
              "p-1.5 rounded-full transition-all hover:bg-foreground/8 disabled:opacity-25 disabled:cursor-not-allowed",
              arrowClassName
            )}
          >
            <ChevronLeft className="w-4 h-4 text-foreground/70" />
          </button>
        )}
        {showDots && (
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <motion.button
                key={i}
                aria-label={`Angle ${i + 1}`}
                onClick={() => goTo(i)}
                animate={{ width: activeIndex === i ? 24 : 7, opacity: activeIndex === i ? 1 : 0.3 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className="h-1.5 rounded-full bg-foreground cursor-pointer"
                style={{ minWidth: 7 }}
              />
            ))}
          </div>
        )}
        {showArrows && (
          <button
            aria-label="Next"
            onClick={toNext}
            disabled={activeIndex === items.length - 1}
            className={cn(
              "p-1.5 rounded-full transition-all hover:bg-foreground/8 disabled:opacity-25 disabled:cursor-not-allowed",
              arrowClassName
            )}
          >
            <ChevronRight className="w-4 h-4 text-foreground/70" />
          </button>
        )}
      </div>

      <p className="mt-2.5 text-[11px] text-foreground/35 font-medium tabular-nums tracking-wide">
        {activeIndex + 1} / {items.length}
      </p>
    </div>
  );
}
