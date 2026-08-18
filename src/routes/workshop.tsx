// src/routes/workshop.tsx
import { createFileRoute } from "@tanstack/react-router";
import { JournalWorkshopPage } from "@/components/views/JournalWorkshopPage";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/workshop")({
  head: () => ({
    meta: [
      { title: SEO.workshop.title },
      { name: "description", content: SEO.workshop.description },
      { property: "og:title", content: SEO.workshop.ogTitle },
      { property: "og:type", content: "article" },
    ],
  }),
  component: JournalWorkshopPage,
});
