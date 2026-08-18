// src/lib/constants.ts
// ─────────────────────────────────────────────────────────────────
// Centralized site configuration.
// To change ANY text that appears on the website or in search
// engine results, edit the values below. No other files need
// to be touched.
// ─────────────────────────────────────────────────────────────────

/** Your Vercel URL (update this when you purchase a custom domain) */
export const SITE_URL = "https://kk-jewelers.vercel.app";

/** Default OG image shown when a page is shared on social media */
export const OG_IMAGE =
  "https://res.cloudinary.com/kjlajbrr/image/upload/f_auto,q_auto,w_1200/Blue_stone_2_pjjdzn";

// ─── Store Details ───────────────────────────────────────────────
export const STORE_LOCATION = {
  name: "K.K Jewelers",
  lat: 27.391009853631893,
  lng: 79.57995851210842,
  address: "2/207 Nehru Road, 209625 Farrukhabad, Uttar Pradesh, India",
  phone: "+91 7307082547",
  email: "rastogiatharv05@gmail.com",
  hours: [
    { days: "Monday – Saturday", time: "10:30 AM – 7:30 PM" },
    { days: "Sunday", time: "By Appointment" },
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=27.391009853631893,79.57995851210842",
  googleMapsDirUrl: "https://www.google.com/maps/dir/?api=1&destination=27.391009853631893,79.57995851210842",
};

// ─── SEO — Page Titles & Descriptions ────────────────────────────
// Each key matches a route. "title" is the browser tab title and
// Google search result heading. "description" is the snippet shown
// beneath it. Keep descriptions between 120–160 characters.
// ─────────────────────────────────────────────────────────────────
export const SEO = {
  /** Global defaults (used in __root.tsx) */
  siteName: "K.K Jewelers",
  twitterHandle: "@kkjewelers",

  /** Homepage: / */
  home: {
    title: "K.K Jewelers — Traditional, Modern & Heritage Hallmarked Gold Jewellery",
    description:
      "Explore our curated collection of hallmarked gold jewellery — from traditional heritage designs to modern statement pieces. Handcrafted by master artisans at K.K Jewelers, Farrukhabad.",
    ogTitle: "K.K Jewelers — Traditional, Modern & Heritage Jewellery",
    ogDescription:
      "Handcrafted hallmarked gold jewellery — traditional, modern, and heritage designs by K.K Jewelers.",
  },

  /** About page: /about */
  about: {
    title: "Our Heritage & Craftsmanship — K.K Jewelers",
    description:
      "Discover the story behind K.K Jewelers. Rooted in Farrukhabad's rich jewellery-making tradition, we blend heritage artisanship with modern design to create timeless pieces.",
    ogTitle: "Our Heritage & Craftsmanship — K.K Jewelers",
    ogDescription:
      "Traditional craftsmanship meets modern elegance. Learn the K.K Jewelers story.",
  },

  /** Rings collection: /rings */
  rings: {
    title: "Gold Rings Collection — Hallmarked 22K & 18K | K.K Jewelers",
    description:
      "Browse our collection of hallmarked gold rings — from classic heritage bands to modern sculptural designs. Every ring is handcrafted and BIS-certified at K.K Jewelers.",
    ogTitle: "Gold Rings — K.K Jewelers Collection",
    ogDescription:
      "Hallmarked gold rings, handcrafted in traditional and modern styles. Explore the collection.",
  },

  /** Necklaces collection: /necklace */
  necklace: {
    title: "Gold Necklaces & Chains — Heritage & Modern Designs | K.K Jewelers",
    description:
      "Discover our handcrafted gold necklaces — from delicate heritage pendants to bold modern chains. BIS-hallmarked 22K & 18K gold, crafted by master artisans.",
    ogTitle: "Gold Necklaces — K.K Jewelers Collection",
    ogDescription:
      "Handcrafted gold necklaces in heritage and modern designs. Explore the K.K Jewelers collection.",
  },

  /** Earrings collection: /earings */
  earings: {
    title: "Gold Earrings Collection — Traditional & Contemporary | K.K Jewelers",
    description:
      "Explore our gold earrings — jhumkas, studs, hoops, and modern drops. Each pair is handcrafted with hallmarked gold by our master karigars at K.K Jewelers.",
    ogTitle: "Gold Earrings — K.K Jewelers Collection",
    ogDescription:
      "Traditional and contemporary gold earrings, handcrafted at K.K Jewelers.",
  },

  /** Contact page: /contact */
  contact: {
    title: "Visit Our Showroom or Book an Appointment — K.K Jewelers",
    description:
      "Get in touch with K.K Jewelers in Farrukhabad. Visit our showroom, schedule an appointment, or enquire about custom bespoke jewellery commissions.",
    ogTitle: "Contact Us — K.K Jewelers",
    ogDescription:
      "Visit our Farrukhabad showroom or send a custom jewellery enquiry.",
  },

  /** Journal — Care guide: /journal */
  journal: {
    title: "The Art of Caring for Gold & Silver Jewellery — K.K Jewelers Journal",
    description:
      "A short guide to keeping fine metals luminous — from daily wear to deep cleans, written by our head jeweler.",
    ogTitle: "Jewellery Care Guide — K.K Jewelers Journal",
  },

  /** Journal — Workshop: /workshop */
  workshop: {
    title: "Inside the Workshop — How Your Piece Is Crafted · K.K Jewelers",
    description:
      "Step behind the scenes to see how our skilled artisans hand-set diamonds and craft custom orders exactly to our customers' requests.",
    ogTitle: "Inside the Workshop — K.K Jewelers Journal",
  },
};
