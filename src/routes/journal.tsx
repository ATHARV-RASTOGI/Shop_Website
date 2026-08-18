// src/routes/journal.tsx
import { createFileRoute } from "@tanstack/react-router";
import { JournalCarePage } from "@/components/views/JournalCarePage";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: SEO.journal.title },
      { name: "description", content: SEO.journal.description },
      { property: "og:title", content: SEO.journal.ogTitle },
      { property: "og:type", content: "article" },
    ],
  }),
  component: JournalCarePage,
});
