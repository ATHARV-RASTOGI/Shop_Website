// src/routes/workshop.tsx
import { createFileRoute } from "@tanstack/react-router";
import { JournalWorkshopPage } from "@/components/views/JournalWorkshopPage";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: "Inside the Workshop — How Your Piece Is Crafted · K.K Jewelers Journal" },
      {
        name: "description",
        content:
          "Step behind the scenes to see how our skilled artisans hand-set diamonds and craft custom orders exactly to our customers' requests.",
      },
      { property: "og:title", content: "Inside the Workshop — K.K Jewelers Journal" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: JournalWorkshopPage,
});
