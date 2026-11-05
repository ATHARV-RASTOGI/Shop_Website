// src/routes/bracelets.tsx
import { createFileRoute } from "@tanstack/react-router";
import { BraceletCollection } from "@/components/views/BraceletCollection";
import { getBracelets } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/bracelets")({
  loader: () => getBracelets(),
  head: () => ({
    meta: [
      { title: SEO.bracelets.title },
      { name: "description", content: SEO.bracelets.description },
      { property: "og:title", content: SEO.bracelets.ogTitle },
      { property: "og:description", content: SEO.bracelets.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BraceletCollection,
});
