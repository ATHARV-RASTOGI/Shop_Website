"use client";

import { useMemo } from "react";
import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";
import { cld } from "@/lib/images";

export function Categories() {
  const slides: SqueezeSlide[] = useMemo(
    () => [
      {
        id: "rings",
        title: "Gold Rings Collection",
        description:
          "Hallmarked 22K & 18K gold bands, solitaire mounts, and heritage cocktail rings handcrafted for timeless elegance.",
        image: cld("Blue_stone_2_pjjdzn", 1200),
        imageAlt: "K.K Jewelers Handcrafted Sapphire and Gold Ring",
        action: "Explore Rings",
        href: "/rings",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Collection · 01
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              Gold Rings
            </h3>
          </div>
        ),
      },
      {
        id: "necklaces",
        title: "Necklaces & Chains",
        description:
          "From delicate daily chains to magnificent bridal chokers and royal heritage haars, masterfully assayed.",
        image: cld("Long_heavy_1", 1200),
        imageAlt: "K.K Jewelers Heritage Gold Necklace",
        action: "Explore Necklaces",
        href: "/necklace",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Collection · 02
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              Necklaces
            </h3>
          </div>
        ),
      },
      {
        id: "earrings",
        title: "Earrings & Jhumkas",
        description:
          "Intricate handcrafted jhumkas, chandelier drops, and understated contemporary studs for every celebration.",
        image: cld("Latkan", 1200),
        imageAlt: "K.K Jewelers Traditional Gold Latkan Earrings",
        action: "Explore Earrings",
        href: "/earings",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Collection · 03
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              Gold Earrings
            </h3>
          </div>
        ),
      },
      {
        id: "bracelets",
        title: "Gold Bracelets & Kadas",
        description:
          "Sculptural 22K gold cuffs, diamond-accented tennis bracelets, and regal kadas crafted with master artisanship.",
        image: cld("Spiral", 1200),
        imageAlt: "K.K Jewelers Handcrafted Gold Bracelet & Kada",
        action: "Explore Bracelets",
        href: "/bracelets",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Collection · 04
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              Bracelets & Kadas
            </h3>
          </div>
        ),
      },
      {
        id: "coins",
        title: "24K Gold Coins (Ginnis)",
        description:
          "Certified 24K pure 999 hallmarked gold coins in 1g, 2g, and 5g weights with tamper-evident assay cards.",
        image: cld("Sun_shape", 1200),
        imageAlt: "24K Pure Gold Coin Ginni Bullion",
        action: "View Bullion",
        href: "/coins/gold",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Investment Bullion
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              24K Gold Coins
            </h3>
          </div>
        ),
      },
      {
        id: "heritage",
        title: "Temple & Heritage Jewelry",
        description:
          "Classical Indian motifs and antique finishes celebrating centuries of artisanal jewelry-making tradition.",
        image: cld("Temple_jewel_1", 1200),
        imageAlt: "Temple & Heritage Classical Gold Jewelry",
        action: "Our Heritage",
        href: "/about",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Tradition · Since 1940
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              Temple & Heritage
            </h3>
          </div>
        ),
      },
      {
        id: "bespoke",
        title: "Bespoke & Custom Creations",
        description:
          "Collaborate directly with our master craftsmen to bring your bespoke gold and diamond vision to life.",
        image: cld("Crown_1", 1200),
        imageAlt: "Custom Bespoke Jewelry Creations",
        action: "Commission a Piece",
        href: "/contact",
        overlay: (
          <div>
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 block font-sans">
              Atelier Workshop
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light tracking-wide">
              Bespoke Creations
            </h3>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <section className="relative w-full h-full flex flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
      {/* Section Header */}
      <div className="max-w-5xl w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <p className="eyebrow mb-2">Collections</p>
          <h2 className="text-3xl sm:text-5xl font-light leading-tight tracking-tight text-foreground font-serif">
            From Ready-Made,
            <br />
            <em className="text-foreground/60 italic">to Custom Creations.</em>
          </h2>
        </div>
        <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
          Explore our vast ready-stock of BIS-hallmarked designs, or commission a custom gold and
          diamond piece handcrafted by our master artisans.
        </p>
      </div>

      {/* Squeeze Carousel */}
      <div className="w-full">
        <SqueezeCarousel
          slides={slides}
          height="clamp(220px, 32vw, 380px)"
          accent="var(--burgundy)"
          accentForeground="var(--cream)"
          radius="12px"
          autoplay={false}
          controls={true}
        />
      </div>
    </section>
  );
}
