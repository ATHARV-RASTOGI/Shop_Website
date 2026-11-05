// src/routes/coins/gold.tsx
// Route for dedicated 24K Gold Coins (Ginnis) collection subpage

import { createFileRoute } from "@tanstack/react-router";
import { GoldCoinsPage } from "@/components/views/GoldCoinsPage";
import { getGoldCoins } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/coins/gold")({
  loader: () => getGoldCoins(),
  head: () => ({
    meta: [
      { title: SEO.coinsGold.title },
      { name: "description", content: SEO.coinsGold.description },
      { property: "og:title", content: SEO.coinsGold.ogTitle },
      { property: "og:description", content: SEO.coinsGold.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GoldCoinsPage,
});
