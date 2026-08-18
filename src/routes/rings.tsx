// src/routes/rings.tsx
import { createFileRoute } from "@tanstack/react-router";
import { RingsCollection } from "@/components/views/RingCollection";
import { getRings } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/rings")({
  loader: () => getRings(),
  head: () => ({
    meta: [
      { title: SEO.rings.title },
      { name: "description", content: SEO.rings.description },
      { property: "og:title", content: SEO.rings.ogTitle },
      { property: "og:description", content: SEO.rings.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RingsCollection,
});