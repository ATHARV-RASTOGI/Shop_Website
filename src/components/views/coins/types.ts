// src/components/views/coins/types.ts
// Shared definitions and default fallback data for bullion coins and notes

export interface CoinItem {
  id: string;
  category: string;
  name: string;
  weight: string;
  weightLabel: string;
  subtitle: string;
  description: string;
  material: string;
  purity: string;

  tag: string;
  angles?: { src: string; alt: string; title: string }[];
}

export const DEFAULT_GOLD_COINS: CoinItem[] = [
  {
    id: "gold-coin-1g",
    category: "coins",
    name: "1g Gold Coin (Ginni)",
    weight: "1g (1 Gram)",
    weightLabel: "1g",
    subtitle: "24K (999 Purity)",
    description:
      "Minted in 24K pure hallmarked gold with mirror-polished surfaces and sharp milled edges. Sealed in certified tamper-evident blister packaging with individual assay certificate.",
    material: "24K Pure Gold",
    purity: "999 Fine (99.9% Pure)",
    
    tag: "24K Bullion · 1g",
    angles: [],
  },
  {
    id: "gold-coin-2g",
    category: "coins",
    name: "2g Gold Coin (Ginni)",
    weight: "2g (2 Grams)",
    weightLabel: "2g",
    subtitle: "24K (999 Purity) BIS Hallmarked Gold",
    description:
      "Precision die-struck 2-gram 24K pure gold ginni featuring traditional embossing and high relief. A cherished store of value, perfect for auspicious occasions and gifting.",
    material: "24K Pure Gold",
    purity: "999 Fine (99.9% Pure)",
   
    tag: "24K Bullion · 2g",
    angles: [],
  },
  {
    id: "gold-coin-5g",
    category: "coins",
    name: "5g Gold Coin (Ginni)",
    weight: "5g (5 Grams)",
    weightLabel: "5g",
    subtitle: "24K (999 Purity)",
    description:
      "Substantial 5-gram investment-grade 24K gold coin with brilliant uncirculated luster and security edge reeding. Assayed for guaranteed 99.9% fineness.",
    material: "24K Pure Gold",
    purity: "999 Fine (99.9% Pure)",
   
    tag: "24K Bullion · 5g",
    angles: [],
  },
];

export const DEFAULT_SILVER_NOTES: CoinItem[] = [
  {
    id: "silver-note-10g",
    category: "silver_notes",
    name: "10g Silver Dollar Note",
    weight: "10g (10 Grams)",
    weightLabel: "10g",
    subtitle: "999 Fine Silver Currency Ingot",
    description:
      "Precision-etched fine silver banknote foil ingot crafted in 99.9% pure silver, replicating classic currency aesthetics with intricate guilloche security motifs.",
    material: "999 Fine Silver",
    purity: "999 Pure (99.9% Pure)",
  
    tag: "999 Silver · 10g",
    angles: [],
  },
  {
    id: "silver-note-20g",
    category: "silver_notes",
    name: "20g Silver Dollar Note",
    weight: "20g (20 Grams)",
    weightLabel: "20g",
    subtitle: "999 Fine Silver Currency Ingot",
    description:
      "Pure silver dollar currency bar combining the artistry of classic banknote engravings with hallmarked investment bullion certification.",
    material: "999 Fine Silver",
    purity: "999 Pure (99.9% Pure)",
   
    tag: "999 Silver · 20g",
    angles: [],
  },
  {
    id: "silver-note-50g",
    category: "silver_notes",
    name: "50g Silver Dollar Note",
    weight: "50g (50 Grams)",
    weightLabel: "50g",
    subtitle: "999 Fine Silver Currency Ingot",
    description:
      "Substantial 50g fine silver currency bar with high-relief dollar motifs, mirror polish borders, and matte frosted proof finish.",
    material: "999 Fine Silver",
    purity: "999 Pure (99.9% Pure)",
    
    tag: "999 Silver · 50g",
    angles: [],
  },
  {
    id: "silver-note-100g",
    category: "silver_notes",
    name: "100g Silver Dollar Note",
    weight: "100g (100 Grams)",
    weightLabel: "100g",
    subtitle: "999 Fine Silver Currency Ingot",
    description:
      "Signature 100-gram silver dollar note ingot, presented in a protective presentation capsule, ideal for ceremonial gifting and wealth preservation.",
    material: "999 Fine Silver",
    purity: "999 Pure (99.9% Pure)",
 
    tag: "999 Silver · 100g",
    angles: [],
  },
];

export type LoaderProduct = {
  id?: string;
  category?: string;
  name?: string;
  weight?: string;
  weightLabel?: string;
  subtitle?: string;
  description?: string;
  material?: string;
  purity?: string;
  certification?: string;
  tag?: string;
  angles?: { src: string; alt: string; title: string }[];
};

export function isSilverBullion(p: { category?: string; name?: string }): boolean {
  const cat = (p.category || "").toLowerCase();
  const name = (p.name || "").toLowerCase();
  if (
    cat.includes("gold") ||
    cat.includes("ginni") ||
    name.includes("gold") ||
    name.includes("ginni")
  ) {
    return false;
  }
  return (
    cat.includes("silver") ||
    cat === "notes" ||
    cat.includes("note") ||
    name.includes("silver") ||
    name.includes("dollar") ||
    name.includes("note")
  );
}

export const isSilverNote = isSilverBullion;

function matchesWeight(target: string | undefined, weightLabel: string): boolean {
  if (!target) return false;
  const num = weightLabel.replace(/[^0-9]/g, "");
  if (!num) return target.toLowerCase().includes(weightLabel.toLowerCase());
  if (target.trim() === num) return true;
  const regex = new RegExp(`\\b${num}\\s*(?:g|gm|gram|grams)\\b`, "i");
  return regex.test(target);
}

export function mergeBullionItems(
  defaults: CoinItem[],
  dbItems: LoaderProduct[],
  defaultCat: "coins" | "silver_notes",
): CoinItem[] {
  if (!dbItems || dbItems.length === 0) {
    return defaults;
  }

  const result: CoinItem[] = [];
  const usedDbItems = new Set<LoaderProduct>();

  for (const def of defaults) {
    const match = dbItems.find(
      (p) =>
        !usedDbItems.has(p) &&
        ((p.id && p.id === def.id) ||
          matchesWeight(p.name, def.weightLabel) ||
          matchesWeight(p.weight, def.weightLabel) ||
          matchesWeight(p.weightLabel, def.weightLabel)),
    );

    if (match) {
      usedDbItems.add(match);
      result.push({
        ...def,
        id: match.id || def.id,
        category: match.category || defaultCat,
        name: match.name || def.name,
        weight: match.weight || def.weight,
        weightLabel: match.weightLabel || def.weightLabel,
        subtitle: match.subtitle || def.subtitle,
        description: match.description || def.description,
        material: match.material || def.material,
        purity: match.purity || def.purity,
      
        tag: match.tag || def.tag,
        angles: match.angles && match.angles.length > 0 ? match.angles : def.angles,
      });
    } else {
      result.push(def);
    }
  }

  let extraIndex = 0;
  for (const item of dbItems) {
    if (usedDbItems.has(item)) continue;
    extraIndex += 1;
    const weightMatch =
      item.weightLabel ||
      item.weight?.match(/\d+\s*(?:g|gm|gram|grams)?/i)?.[0] ||
      item.name?.match(/\d+\s*(?:g|gm|gram|grams)?/i)?.[0] ||
      "Assayed";
    const slug = (item.name || "bullion")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    result.push({
      id: item.id || `${defaultCat}-extra-${extraIndex}-${slug}`,
      category: item.category || defaultCat,
      name: item.name || `${weightMatch} Bullion`,
      weight: item.weight || `${weightMatch} (Assayed)`,
      weightLabel: item.weightLabel || weightMatch,
      subtitle:
        item.subtitle ||
        (defaultCat === "coins"
          ? "24K (999 Purity) BIS Hallmarked Gold"
          : "999 Fine Silver Currency Ingot"),
      description:
        item.description ||
        (defaultCat === "coins"
          ? "Hallmarked 24K pure gold coin minted by K.K Jewelers."
          : "Fine silver dollar currency note assayed at K.K Jewelers."),
      material: item.material || (defaultCat === "coins" ? "24K Pure Gold" : "999 Fine Silver"),
      purity:
        item.purity || (defaultCat === "coins" ? "999 Fine (99.9% Pure)" : "999 Pure (99.9% Pure)"),
      
      tag:
        item.tag ||
        (defaultCat === "coins" ? `24K Bullion · ${weightMatch}` : `999 Silver · ${weightMatch}`),
      angles: item.angles || [],
    });
  }

  return result;
}
