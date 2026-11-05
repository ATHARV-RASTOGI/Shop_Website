import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { isSilverBullion } from "@/components/views/coins/types";

const CLOUD_NAME = "kjlajbrr";

function cld(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

type ProductImage = {
  public_id?: string;
  url?: string;
  src?: string;
  alt?: string;
  title?: string;
};

export const getRings = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "rings")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];
    return {
      ...row,
      angles: rawImages.map((img) => ({
        src: cld(img.public_id),
        alt: img.alt,
        title: img.title,
      })),
    };
  });
});

export const getEarrings = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "earrings")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];
    return {
      ...row,
      angles: rawImages.map((img) => ({
        src: cld(img.public_id),
        alt: img.alt,
        title: img.title,
      })),
    };
  });
});

export const DEFAULT_BRACELETS = [
  {
    id: "bracelet-heritage-kada",
    name: "Royal Heritage Kada",
    subtitle: "22K BIS Hallmarked Solid Gold",
    description:
      "A statement handcrafted solid gold kada adorned with exquisite floral filigree and textured millgrain accents, embodying royal Indian heritage.",
    material: "22K Yellow Gold (BIS Hallmarked)",
    angles: [
      { src: cld("Spiral"), alt: "Royal Heritage Kada - Front View", title: "Front View" },
      { src: cld("Crown_1"), alt: "Royal Heritage Kada - Detail View", title: "Detail View" },
      {
        src: cld("Temple_jewel_1"),
        alt: "Royal Heritage Kada - Clasp Angle",
        title: "Clasp Angle",
      },
    ],
  },
  {
    id: "bracelet-diamond-cuff",
    name: "Pavé Diamond Solitaire Cuff",
    subtitle: "18K Gold with Certified VVS Diamonds",
    description:
      "A modern architectural open cuff sculpted in lustrous 18K gold and crowned with brilliant-cut diamonds, balancing minimalist geometry with timeless glamour.",
    material: "18K Gold & Natural Certified Diamonds",
    angles: [
      {
        src: cld("Blue_stone_2_pjjdzn"),
        alt: "Diamond Solitaire Cuff - Profile",
        title: "Profile Angle",
      },
      { src: cld("Modrop_1"), alt: "Diamond Solitaire Cuff - Close-up", title: "Close-up" },
      { src: cld("Sun_shape"), alt: "Diamond Solitaire Cuff - Studio", title: "Studio Light" },
    ],
  },
  {
    id: "bracelet-lattice-chain",
    name: "Filigree Lattice Bangle-Bracelet",
    subtitle: "22K Pure Gold Openwork Craftsmanship",
    description:
      "Artisanal openwork gold links woven with traditional karigari techniques. Designed for effortless daily elegance and festive celebrations alike.",
    material: "22K Pure Gold",
    angles: [
      {
        src: cld("Song_Drop"),
        alt: "Filigree Lattice Bracelet - Wrist Angle",
        title: "Wrist Angle",
      },
      { src: cld("red-ring-1"), alt: "Filigree Lattice Bracelet - Top Angle", title: "Top Angle" },
      {
        src: cld("Latkan"),
        alt: "Filigree Lattice Bracelet - Link Details",
        title: "Link Details",
      },
    ],
  },
];

export const getBracelets = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", "bracelets")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_BRACELETS;
    }

    return data.map(({ images, ...row }) => {
      const rawImages = (images || []) as ProductImage[];
      return {
        ...row,
        angles:
          rawImages.length > 0
            ? rawImages.map((img) => ({
                src: img.public_id ? cld(img.public_id) : img.src || img.url || cld("Spiral"),
                alt: img.alt || row.name,
                title: img.title || "Detail View",
              }))
            : DEFAULT_BRACELETS[0].angles,
      };
    });
  } catch {
    return DEFAULT_BRACELETS;
  }
});

export const getNecklaces = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "necklaces")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];

    const sliderImages =
      rawImages.length > 0
        ? rawImages.map((img) => ({
            id: img.public_id,
            url: cld(img.public_id),
            alt: img.alt,
            title: img.title,
          }))
        : [
            {
              id: "fallback-necklace",
              url: cld("Long_heavy_1"),
              alt: "Necklaces Collection",
              title: "Necklaces",
            },
          ];

    return {
      ...row,
      sliderImages,
    };
  });
});

interface RawProductRow {
  images?: unknown;
  name?: string;
  category?: string;
  [key: string]: unknown;
}

function formatBullionProducts(data: RawProductRow[]) {
  return data.map(({ images, ...row }) => {
    let rawImages: unknown[] = [];
    if (Array.isArray(images)) {
      rawImages = images;
    } else if (typeof images === "string" && images.trim() !== "") {
      try {
        const parsed = JSON.parse(images);
        rawImages = Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        rawImages = [images];
      }
    }

    const validImages = rawImages
      .map((img) => {
        if (!img) return null;
        if (typeof img === "string" && img.trim() !== "") {
          return {
            src: img.trim(),
            alt: (row.name as string) || "Bullion item",
            title: (row.name as string) || "",
          };
        }
        if (typeof img === "object") {
          const pImg = img as ProductImage;
          const rawSrc = pImg.public_id || pImg.url || pImg.src;
          if (!rawSrc || typeof rawSrc !== "string" || rawSrc.trim() === "") return null;
          return {
            src: rawSrc.trim(),
            alt: pImg.alt || (row.name as string) || "Bullion item",
            title: pImg.title || (row.name as string) || "",
          };
        }
        return null;
      })
      .filter((img): img is { src: string; alt: string; title: string } => Boolean(img));

    return {
      ...row,
      angles: validImages.map((img) => {
        const src =
          img.src.startsWith("http://") || img.src.startsWith("https://") ? img.src : cld(img.src);

        return {
          src,
          alt: img.alt,
          title: img.title,
        };
      }),
    };
  });
}

export const getCoins = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;
    if (!url || !key) {
      return [];
    }

    const supabase = createClient(url, key);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .in("category", [
        "coins",
        "coin",
        "gold_coins",
        "gold-coins",
        "gold_coin",
        "ginni",
        "ginnis",
        "silver_notes",
        "silver-notes",
        "silver_note",
        "silver_coins",
        "silver-coins",
        "silver_coin",
        "silver",
        "notes",
      ])
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return [];
    }

    return formatBullionProducts(data);
  } catch (err) {
    console.error("Error fetching coins from Supabase:", err);
    return [];
  }
});

export const getGoldCoins = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;
    if (!url || !key) {
      return [];
    }

    const supabase = createClient(url, key);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .in("category", ["coins", "coin", "gold_coins", "gold-coins", "gold_coin", "ginni", "ginnis"])
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return [];
    }

    const goldItems = data.filter((item) => !isSilverBullion(item));
    return formatBullionProducts(goldItems);
  } catch (err) {
    console.error("Error fetching gold coins from Supabase:", err);
    return [];
  }
});

export const getSilverNotes = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;
    if (!url || !key) {
      return [];
    }

    const supabase = createClient(url, key);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .in("category", [
        "coins",
        "coin",
        "silver_notes",
        "silver-notes",
        "silver_note",
        "silver_coins",
        "silver-coins",
        "silver_coin",
        "silver",
        "notes",
      ])
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return [];
    }

    const silverItems = data.filter((item) => isSilverBullion(item));
    return formatBullionProducts(silverItems);
  } catch (err) {
    console.error("Error fetching silver notes from Supabase:", err);
    return [];
  }
});

export const getFeatured = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  const { data, error } = await supabase.from("products").select("*").eq("featured", true).limit(4);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ images, ...row }) => {
    const rawImages = (images || []) as ProductImage[];
    return {
      ...row,
      image: rawImages.length > 0 ? cld(rawImages[0].public_id) : cld("red-ring-1"),
    };
  });
});
