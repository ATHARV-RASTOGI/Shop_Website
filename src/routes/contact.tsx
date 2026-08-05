// src/routes/contact.tsx
import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/views/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — K.K Jewelers" },
      {
        name: "description",
        content:
          "Get in touch with K.K Jewelers. Visit our showroom in Farrukhabad, schedule an appointment, or enquire about custom bespoke jewelry commissions.",
      },
      { property: "og:title", content: "Contact Us — K.K Jewelers" },
      {
        property: "og:description",
        content: "Visit our showroom in Farrukhabad or send an enquiry.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});
