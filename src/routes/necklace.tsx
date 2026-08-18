// src/routes/necklace.tsx
import { createFileRoute } from "@tanstack/react-router";
import { NecklaceCollection } from "@/components/views/NecklaceCollection";
import { getNecklaces } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/necklace")({
  loader: () => getNecklaces(),
  head: () => ({
    meta: [
      { title: SEO.necklace.title },
      { name: "description", content: SEO.necklace.description },
      { property: "og:title", content: SEO.necklace.ogTitle },
      { property: "og:description", content: SEO.necklace.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NecklaceCollection,
});