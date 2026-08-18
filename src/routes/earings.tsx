// src/routes/earings.tsx
import { createFileRoute } from "@tanstack/react-router";
import { EarringsCollection } from "@/components/views/EarringsCollection";
import { getEarrings } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/earings")({
  loader: () => getEarrings(),
  head: () => ({
    meta: [
      { title: SEO.earings.title },
      { name: "description", content: SEO.earings.description },
      { property: "og:title", content: SEO.earings.ogTitle },
      { property: "og:description", content: SEO.earings.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EarringsCollection,
});