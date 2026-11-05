// src/routes/coins/silver.tsx
// Route for dedicated 999 Fine Silver Dollar Notes collection subpage

import { createFileRoute } from "@tanstack/react-router";
import { SilverNotesPage } from "@/components/views/SilverNotesPage";
import { getSilverNotes } from "@/lib/products";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/coins/silver")({
  loader: () => getSilverNotes(),
  head: () => ({
    meta: [
      { title: SEO.coinsSilver.title },
      { name: "description", content: SEO.coinsSilver.description },
      { property: "og:title", content: SEO.coinsSilver.ogTitle },
      { property: "og:description", content: SEO.coinsSilver.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SilverNotesPage,
});
