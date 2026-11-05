// src/routes/coins/index.tsx
// Route for /coins collection overview page

import { createFileRoute } from "@tanstack/react-router";
import { CoinsCollection } from "@/components/views/CoinsCollection";
import { getCoins } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/coins/")({
  loader: () => getCoins(),
  head: () => ({
    meta: [
      { title: SEO.coins.title },
      { name: "description", content: SEO.coins.description },
      { property: "og:title", content: SEO.coins.ogTitle },
      { property: "og:description", content: SEO.coins.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoinsCollection,
});
