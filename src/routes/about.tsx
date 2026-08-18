// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/views/AboutPage";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: SEO.about.title },
      { name: "description", content: SEO.about.description },
      { property: "og:title", content: SEO.about.ogTitle },
      { property: "og:description", content: SEO.about.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});
