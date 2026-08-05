// src/routes/necklaces.tsx
// Thin route — mirrors src/routes/rings.tsx and src/routes/earrings.tsx

import { createFileRoute } from "@tanstack/react-router";
import { NecklaceCollection } from "@/components/views/NecklaceCollection";

export const Route = createFileRoute("/necklace")({
  head: () => ({
    meta: [
      { title: "Necklaces — K.K Jewelers 2026 Collection" },
      {
        name: "description",
        content:
          "Seven sculptural gold necklaces, hand-made in our Parisian atelier. Chains, pendants, rivières, and collars — each exists in a numbered edition.",
      },
      { property: "og:title", content: "Necklaces — K.K Jewelers" },
      {
        property: "og:description",
        content: "Seven sculptural gold necklaces, made to order in Paris. Discover the 2026 edit.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NecklaceCollection,
});