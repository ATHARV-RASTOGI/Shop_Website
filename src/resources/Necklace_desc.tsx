
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

export const NECKLACES = [
  {
    id: "rosso-pearl-strand",
    name: "Rosso Pearl Strand",
    subtitle: "18K Gold · Akoya Pearl · Graduated Strand",
    price: "€1 480",
    tag: "SIGNATURE",
    description:
      "Forty-three Akoya pearls graded across five half-millimetre increments — 6.5mm at the clasp, 9mm at the centre — strung on raw silk and knotted by hand between each stone. The clasp is a hand-forged gold hook, not a box mechanism. The graduation is deliberate: the eye is drawn to the centre, where the pearl is largest and the nacre deepest.",
    material: "18K yellow gold clasp, 43 × Akoya pearl, A++ grade, raw silk cord",
    edition: "Made to order — 4 week lead",
    sliderImages: [
      { id: "rps-1", url: rossoPearl,     alt: "Full length",   title: "Full length"   },
      { id: "rps-2", url: catNecklaces,   alt: "Clasp detail",  title: "Clasp"         },
      { id: "rps-3", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "rps-4", url: journalAtelier, alt: "Knot detail",   title: "Detail"        },
      { id: "rps-5", url: journalCare,    alt: "Pearl surface", title: "Surface"       },
    ],
  },
  {
    id: "crimson-pendant",
    name: "Crimson Pendant",
    subtitle: "18K Gold · Ruby · Pendant Chain",
    price: "€920",
    tag: "BESTSELLER",
    description:
      "A single 1.4ct oval ruby — unheated, Mozambique origin — suspended from an anchor-link chain at 42cm. The pendant bail is formed from the same ingot as the chain: no solder point, no colour discontinuity. The ruby rotates freely on the bail so it always falls face-forward.",
    material: "18K yellow gold, anchor-link chain, 1.4ct unheated Mozambique ruby",
    edition: "One of ten",
    sliderImages: [
      { id: "cp-1", url: crimsonHoops,   alt: "Pendant front", title: "Front"         },
      { id: "cp-2", url: garnetDrops,    alt: "Chain detail",  title: "Chain"         },
      { id: "cp-3", url: catNecklaces,   alt: "Full length",   title: "Full length"   },
      { id: "cp-4", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "cp-5", url: rossoPearl,     alt: "Ruby close-up", title: "Stone"         },
    ],
  },
  {
    id: "emerald-collar",
    name: "Emerald Collar",
    subtitle: "18K Gold · Colombian Emerald · Collar",
    price: "€2 240",
    tag: "NEW",
    description:
      "A rigid collar in forged 18K gold set with seven Colombian emeralds across the front arc — each between 0.4ct and 0.8ct, gradient-cut to follow the curve of the collar. The back section is open, held at the nape by a friction-fit post. No stone is treated; the inclusions are disclosed and documented.",
    material: "18K yellow gold, 7 × Colombian emerald (3.2ct total), unheated, natural inclusions",
    edition: "One of four",
    sliderImages: [
      { id: "ec-1", url: emeraldRing,    alt: "Collar front",  title: "Front"         },
      { id: "ec-2", url: catNecklaces,   alt: "Side profile",  title: "Profile"       },
      { id: "ec-3", url: journalAtelier, alt: "Stone row",     title: "Stones"        },
      { id: "ec-4", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "ec-5", url: catEarrings,    alt: "Nape detail",   title: "Nape"          },
    ],
  },
  {
    id: "noir-chain",
    name: "Noir Chain",
    subtitle: "18K Black Gold · Plain · Architectural",
    price: "€680",
    tag: "",
    description:
      "A 48cm trace chain in blackened 18K gold — each link 3 × 1.5mm, oxidised rather than plated so the colour is stable. Worn alone it is the quietest possible statement; layered with the Crimson Pendant it becomes its ground. The lobster clasp is hidden inside an elongated oval link so it disappears when worn.",
    material: "18K blackened gold, trace link, hidden lobster clasp",
    edition: "Stock — ships in 4 days",
    sliderImages: [
      { id: "nc-1", url: catNecklaces,   alt: "Chain full",    title: "Full length"   },
      { id: "nc-2", url: journalCare,    alt: "Link detail",   title: "Links"         },
      { id: "nc-3", url: catRings,       alt: "Clasp detail",  title: "Clasp"         },
      { id: "nc-4", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "nc-5", url: journalAtelier, alt: "Texture",       title: "Texture"       },
    ],
  },
  {
    id: "sapphire-riviere",
    name: "Sapphire Rivière",
    subtitle: "18K Gold · Ceylon Sapphire · Rivière",
    price: "€3 100",
    tag: "",
    description:
      "Eleven Ceylon sapphires — cornflower, unheated, matched in tone — set in individual claw mounts and linked by fine forged gold connectors so the necklace moves as a single fluid arc. Each stone is certified by AGL. The clasp locks and unlocks with one hand.",
    material: "18K white gold, 11 × unheated Ceylon sapphire (6.8ct total), AGL certified",
    edition: "One of three",
    sliderImages: [
      { id: "sr-1", url: catNecklaces,   alt: "Rivière full",  title: "Full"          },
      { id: "sr-2", url: journalAtelier, alt: "Stone row",     title: "Stones"        },
      { id: "sr-3", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "sr-4", url: emeraldRing,    alt: "Mount detail",  title: "Mount"         },
      { id: "sr-5", url: rossoPearl,     alt: "Clasp detail",  title: "Clasp"         },
    ],
  },
  {
    id: "garnet-drop-pendant",
    name: "Garnet Drop Pendant",
    subtitle: "18K Gold · Pyrope Garnet · Drop Pendant",
    price: "€760",
    tag: "NEW",
    description:
      "A briolette-cut pyrope garnet — 2.1ct, deeper red than any ruby under candlelight — caged in a hand-formed gold wire pendant at 40cm. The cage is not soldered; it is woven, so the stone and wire are a single inseparable object. The garnet spins slowly in the cage when the wearer moves.",
    material: "18K yellow gold, woven wire cage, 2.1ct pyrope garnet briolette",
    edition: "One of eight",
    sliderImages: [
      { id: "gd-1", url: garnetDrops,    alt: "Pendant front", title: "Front"         },
      { id: "gd-2", url: catNecklaces,   alt: "Chain detail",  title: "Chain"         },
      { id: "gd-3", url: crimsonHoops,   alt: "Cage detail",   title: "Cage"          },
      { id: "gd-4", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "gd-5", url: journalCare,    alt: "Stone detail",  title: "Stone"         },
    ],
  },
  {
    id: "pavé-tennis",
    name: "Pavé Tennis",
    subtitle: "18K Gold · White Diamond · Tennis Necklace",
    price: "€4 200",
    tag: "",
    description:
      "A 40cm tennis necklace with 118 round brilliant VS1 diamonds set in four-claw mounts — each claw filed to a point so the diamond appears to float. Total carat weight 4.72ct. The necklace lies completely flat and does not rotate; the clasp is a safety-box mechanism with a secondary lock.",
    material: "18K white gold, 118 × VS1 round brilliant (4.72ct total), GIA batch certified",
    edition: "Made to order — 8 week lead",
    sliderImages: [
      { id: "pt-1", url: journalAtelier, alt: "Necklace full", title: "Full"          },
      { id: "pt-2", url: catNecklaces,   alt: "Diamond row",   title: "Diamonds"      },
      { id: "pt-3", url: heroModel,      alt: "Worn",          title: "Worn"          },
      { id: "pt-4", url: rossoPearl,     alt: "Clasp detail",  title: "Clasp"         },
      { id: "pt-5", url: journalCare,    alt: "Mount detail",  title: "Mounts"        },
    ],
  },
];
