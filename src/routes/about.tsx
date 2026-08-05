// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/views/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — K.K Jewelers" },
      {
        name: "description",
        content:
          "Discover the story, heritage, and uncompromising craftsmanship behind K.K Jewelers. Handcrafted gold and diamond jewelry made in Delhi & Farrukhabad.",
      },
      { property: "og:title", content: "About Us — K.K Jewelers" },
      {
        property: "og:description",
        content: "Discover the heritage and craftsmanship behind K.K Jewelers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});
