// src/components/site/Categories.tsx
"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, easeOut, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import catEarrings    from "@/assets/cat-earrings.webp";
import catNecklaces   from "@/assets/cat-necklaces.webp";
import catRings       from "@/assets/cat-rings.webp";
import heroModel      from "@/assets/hero-model.webp";
import journalAtelier from "@/assets/journal-atelier.webp";
import journalCare    from "@/assets/journal-care.webp";
import crimsonHoops   from "@/assets/product-crimson-hoops.webp";
import emeraldRing    from "@/assets/product-emerald-ring.webp";
import garnetDrops    from "@/assets/product-garnet-drops.webp";
import rossoPearl     from "@/assets/product-rosso-pearl.webp";


// ─── Inline ThreeDImageRing (Lightswind source) ───────────────────────────────
interface ThreeDImageRingProps {
  images: string[];
  width?: number;
  perspective?: number;
  imageDistance?: number;
  initialRotation?: number;
  animationDuration?: number;
  staggerDelay?: number;
  hoverOpacity?: number;
  containerClassName?: string;
  ringClassName?: string;
  imageClassName?: string;
  backgroundColor?: string;
  draggable?: boolean;
  mobileBreakpoint?: number;
  mobileScaleFactor?: number;
  inertiaPower?: number;
  inertiaTimeConstant?: number;
  inertiaVelocityMultiplier?: number;
}

function ThreeDImageRing({
  images = [],
  width = 300,
  perspective = 2000,
  imageDistance = 500,
  initialRotation = 180,
  animationDuration = 1.5,
  staggerDelay = 0.1,
  hoverOpacity = 0.5,
  containerClassName,
  ringClassName,
  imageClassName,
  backgroundColor,
  draggable = true,
  mobileBreakpoint = 768,
  mobileScaleFactor = 0.8,
  inertiaPower = 0.8,
  inertiaTimeConstant = 300,
  inertiaVelocityMultiplier = 20,
}: ThreeDImageRingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rotationY = useMotionValue(initialRotation);
  const startX = useRef(0);
  const currentRotationY = useRef(initialRotation);
  const isDragging = useRef(false);
  const velocity = useRef(0);
  const [currentScale, setCurrentScale] = useState(1);
  const [showImages, setShowImages] = useState(false);
  const angle = useMemo(() => 360 / images.length, [images.length]);

  const getBgPos = (imageIndex: number, currentRot: number, scale: number) => {
    const scaledImageDistance = imageDistance * scale;
    const effectiveRotation = currentRot - 180 - imageIndex * angle;
    const parallaxOffset = ((effectiveRotation % 360 + 360) % 360) / 360;
    return `${-(parallaxOffset * (scaledImageDistance / 1.5))}px 0px`;
  };

  useEffect(() => {
    const unsubscribe = rotationY.on("change", (latestRotation) => {
      if (ringRef.current) {
        Array.from(ringRef.current.children).forEach((el, i) => {
          (el as HTMLElement).style.backgroundPosition = getBgPos(i, latestRotation, currentScale);
        });
      }
      currentRotationY.current = latestRotation;
    });
    return () => unsubscribe();
  }, [rotationY, images.length, imageDistance, currentScale, angle]);

  useEffect(() => {
    const handleResize = () => {
      setCurrentScale(window.innerWidth <= mobileBreakpoint ? mobileScaleFactor : 1);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint, mobileScaleFactor]);

  useEffect(() => { setShowImages(true); }, []);

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!draggable || !isDragging.current) return;
    const clientX = "touches" in event ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
    const deltaX = clientX - startX.current;
    velocity.current = -deltaX * 0.5;
    rotationY.set(currentRotationY.current + velocity.current);
    startX.current = clientX;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    if (ringRef.current) ringRef.current.style.cursor = "grab";
    currentRotationY.current = rotationY.get();
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", handleDragEnd);
    const initial = rotationY.get();
    const velocityBoost = velocity.current * inertiaVelocityMultiplier;
    animate(initial, initial + velocityBoost, {
      type: "inertia",
      velocity: velocityBoost,
      power: inertiaPower,
      timeConstant: inertiaTimeConstant,
      restDelta: 0.5,
      modifyTarget: (t) => Math.round(t / angle) * angle,
      onUpdate: (v) => rotationY.set(v),
    });
    velocity.current = 0;
  };

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    if (!draggable) return;
    isDragging.current = true;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    startX.current = clientX;
    rotationY.stop();
    velocity.current = 0;
    if (ringRef.current) ringRef.current.style.cursor = "grabbing";
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", handleDragEnd);
  };

  const imageVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full overflow-hidden select-none relative", containerClassName)}
      style={{ backgroundColor, transform: `scale(${currentScale})`, transformOrigin: "center center" }}
      onMouseDown={draggable ? handleDragStart : undefined}
      onTouchStart={draggable ? handleDragStart : undefined}
    >
      <div
        style={{
          perspective: `${perspective}px`,
          width: `${width}px`,
          height: `${width * 1.33}px`,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          ref={ringRef}
          className={cn("w-full h-full absolute", ringClassName)}
          style={{ transformStyle: "preserve-3d", rotateY: rotationY, cursor: draggable ? "grab" : "default" }}
        >
          <AnimatePresence>
            {showImages && images.map((url, index) => (
              <motion.div
                key={index}
                className={cn("w-full h-full absolute", imageClassName)}
                style={{
                  transformStyle: "preserve-3d",
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backfaceVisibility: "hidden",
                  rotateY: index * -angle,
                  z: -imageDistance * currentScale,
                  transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
                  backgroundPosition: getBgPos(index, currentRotationY.current, currentScale),
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={imageVariants}
                transition={{ delay: index * staggerDelay, duration: animationDuration, ease: easeOut }}
                whileHover={{ opacity: 1, transition: { duration: 0.15 } }}
                onHoverStart={() => {
                  if (isDragging.current || !ringRef.current) return;
                  Array.from(ringRef.current.children).forEach((el, i) => {
                    if (i !== index) (el as HTMLElement).style.opacity = `${hoverOpacity}`;
                  });
                }}
                onHoverEnd={() => {
                  if (isDragging.current || !ringRef.current) return;
                  Array.from(ringRef.current.children).forEach((el) => {
                    (el as HTMLElement).style.opacity = "1";
                  });
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Local assets → URL strings ───────────────────────────────────────────────

// 10 images — ring distributes them evenly at 36° apart
const ringImages = [
  catRings,
  crimsonHoops,
  catNecklaces,
  emeraldRing,
  catEarrings,
  garnetDrops,
  heroModel,
  rossoPearl,
  journalAtelier,
  journalCare,
];

// ─── Categories section ───────────────────────────────────────────────────────
// In Categories.tsx — replace the outer <section> wrapper with this:
export function Categories() {
  return (
    <div className="relative w-full h-full">
      {/* Text header */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Gallery</p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight tracking-tight text-foreground">
           From Ready-Made,<br />
            <em className="text-foreground/60" style={{ fontStyle: "italic" }}>
              to Custom Creations.
            </em>
          </h2>
        </div>
        <p className="text-sm text-foreground/50 max-w-xs leading-relaxed">
         Whether you are purchasing from our vast ready-stock of machine-made designs or trusting us to handcraft a custom diamond piece from your own sketch, we guarantee unmatched purity and craftsmanship.
        </p>
      </div>

      <p className="text-center text-[11px] tracking-[0.2em] uppercase text-foreground/30 pb-2">
        Hold and Slide to explore
      </p >

      {/* Ring fills remaining height — no overflow, no dead zones */}
      <div className="w-full" style={{ height: '490px' }}>
       <ThreeDImageRing
  images={ringImages}
  width={600}
  perspective={3000}
  imageDistance={680}     
  initialRotation={180}
  animationDuration={1.4}
  staggerDelay={0.08}
  hoverOpacity={0.45}
  mobileScaleFactor={0.55}
  inertiaPower={0.85}
  inertiaTimeConstant={320}
  inertiaVelocityMultiplier={22}
  draggable
/>
      </div>
    </div>
  );
}