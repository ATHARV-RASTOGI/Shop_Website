// src/components/ui/ScrollToTop.tsx
// Minimal circle button — fades in after 500px scroll,
// shows a thin gold progress arc, chevron inside.
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const scrolled = window.scrollY;
    const total =
      document.documentElement.scrollHeight - window.innerHeight;
    setProgress(total > 0 ? scrolled / total : 0);
    setVisible(scrolled > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // SVG circle math
  const SIZE = 44;
  const STROKE = 2;
  const R = (SIZE - STROKE) / 2;
  const C = 2 * Math.PI * R;
  const dash = C * progress;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-6 sm:right-8 z-50 group"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          {/* Progress arc */}
          <svg
            width={SIZE}
            height={SIZE}
            className="absolute inset-0"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              stroke="oklch(0.74 0.12 75 / 0.18)"
              strokeWidth={STROKE}
            />
            {/* Progress */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              stroke="oklch(0.74 0.12 75)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={`${dash} ${C}`}
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            />
          </svg>

          {/* Button face */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: SIZE, height: SIZE }}
          >
            <div className="w-8 h-8 rounded-full bg-background/90 border border-border/60 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:border-foreground/30 transition-colors duration-300">
              <ChevronUp className="w-3.5 h-3.5 text-foreground/70 group-hover:text-foreground transition-colors" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
