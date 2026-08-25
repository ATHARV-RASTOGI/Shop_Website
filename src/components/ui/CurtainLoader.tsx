// src/components/ui/CurtainLoader.tsx
// Curtain Reveal — two panels slide apart like theatre curtains,
// revealing the page beneath. 'K.K Jewelers' fades in the centre.
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CurtainLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Wait for DOM + fonts, then start exit
    const t1 = setTimeout(() => setExiting(true), 1400);
    // Fully unmount after curtains finish sliding
    const t2 = setTimeout(() => setVisible(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  const panelVariants = {
    initial: { scaleY: 1 },
    exit: (dir: number) => ({
      scaleY: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: dir * 0.05 },
    }),
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col"
        >
          {/* Top panel — slides up */}
          <motion.div
            className="flex-1 origin-top"
            style={{ backgroundColor: "var(--sand)" }}
            variants={panelVariants}
            initial="initial"
            exit="exit"
            custom={0}
          />

          {/* Centre brand text — fades in then out */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gold diamond glyph */}
            <svg
              width="28"
              height="36"
              viewBox="0 0 28 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path
                d="M14 1 L27 11 L14 35 L1 11 Z"
                stroke="oklch(0.74 0.12 75)"
                strokeWidth="1.4"
                fill="none"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              />
              <motion.path
                d="M1 11 L27 11"
                stroke="oklch(0.74 0.12 75)"
                strokeWidth="1.1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
              />
            </svg>

            <span
              className="text-[clamp(1.1rem,4vw,1.6rem)] tracking-[0.28em] uppercase text-foreground/80"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              K.K{" "}
              <span style={{ color: "oklch(0.74 0.12 75)" }}>Jewelers</span>
            </span>
          </motion.div>

          {/* Bottom panel — slides down */}
          <motion.div
            className="flex-1 origin-bottom"
            style={{ backgroundColor: "var(--sand)" }}
            variants={panelVariants}
            initial="initial"
            exit="exit"
            custom={0.05}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
