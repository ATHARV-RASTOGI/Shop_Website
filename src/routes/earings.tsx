// src/routes/earrings.tsx
// Thin route — mirrors src/routes/rings.tsx exactly

import { createFileRoute } from "@tanstack/react-router";
import { EarringsCollection } from "@/components/views/EarringsCollection";
import { getEarrings } from "@/lib/products";

export const Route = createFileRoute("/earings")({
  loader: () => getEarrings(),
  head: () => ({
    meta: [
      { title: "Earrings — K.K Jewelers 2026 Collection" },
      {
        name: "description",
        content:
          "Eight pairs of sculptural gold earrings, hand-set in our Parisian atelier. Each exists in a numbered edition — explore every angle before it finds its wearer.",
      },
      { property: "og:title", content: "Earrings — K.K Jewelers" },
      {
        property: "og:description",
        content: "Eight pairs of sculptural gold earrings, made to order in Paris. Discover the 2026 edit.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EarringsCollection,
});