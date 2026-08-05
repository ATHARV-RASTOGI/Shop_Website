// src/routes/rings.tsx
// Thin route file — mirrors the pattern of src/routes/index.tsx
// All UI lives in src/components/site/RingsCollection.tsx

import { createFileRoute } from "@tanstack/react-router";
import { RingsCollection } from "@/components/views/RingCollection";

export const Route = createFileRoute("/rings")({
  head: () => ({
    meta: [
      { title: "Rings — K.K Jewelers 2026 Collection" },
      {
        name: "description",
        content:
          "Ten sculptural gold rings, hand-set in our Parisian atelier. Each piece exists in a single edition — explore every angle before it finds its wearer.",
      },
      { property: "og:title", content: "Rings — K.K Jewelers" },
      {
        property: "og:description",
        content: "Ten sculptural gold rings, made to order in Paris. Discover the 2026 edit.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RingsCollection,
});