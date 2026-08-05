// src/routes/journal.tsx
import { createFileRoute } from "@tanstack/react-router";
import { JournalCarePage } from "@/components/views/JournalCarePage";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Art of Caring for Gold & Silver Jewelry — K.K Jewelers Journal" },
      {
        name: "description",
        content:
          "A short guide to keeping fine metals luminous — from daily wear to deep cleans, written by our head jeweler.",
      },
      { property: "og:title", content: "Jewelry Care Guide — K.K Jewelers Journal" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: JournalCarePage,
});
