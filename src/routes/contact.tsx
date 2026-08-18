// src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/views/ContactPage";
import { SEO } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: SEO.contact.title },
      { name: "description", content: SEO.contact.description },
      { property: "og:title", content: SEO.contact.ogTitle },
      { property: "og:description", content: SEO.contact.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});
