// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { RingDivider } from "@/components/sections/RingDivider";
import { Featured } from "@/components/sections/Featured";
import { Journal } from "@/components/sections/Journal";
import { Footer } from "@/components/layout/Footer";
import React, { Suspense } from "react";
import { STORE_LOCATION, SEO } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { getFeatured } from "@/lib/products";
import heroImg from "@/assets/hero-model.webp";
const StoreMap = React.lazy(() => import("@/components/ui/StoreMap"));

export const Route = createFileRoute("/")({
  loader: async () => {
    const featured = await getFeatured();
    return { featured };
  },
  head: () => ({
    meta: [
      { title: SEO.home.title },
      { name: "description", content: SEO.home.description },
      { property: "og:title", content: SEO.home.ogTitle },
      { property: "og:description", content: SEO.home.ogDescription },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});
const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 sm:px-8">
    <div className="bg-background rounded-2xl overflow-hidden">
      {children}
    </div>
  </div>
);

function Home() {
  const { featured } = Route.useLoaderData();
  useReveal();

  return (
    <main className="min-h-screen bg-secondary text-foreground flex flex-col gap-4 pt-4 pb-4">
      <div className="px-4 sm:px-8">
        <div className="bg-background rounded-2xl overflow-hidden">
          <Header />
          <Hero product={featured?.[0]} />
        </div>
      </div>

      <Box><RingDivider /></Box>
      <Box><Featured products={featured} /></Box>

      {/* Categories — fixed height to eliminate dead space */}
      <div className="px-4 sm:px-8">
        <div className="bg-background rounded-2xl overflow-hidden" style={{ height: '880px' }}>
          <Categories />
        </div>
      </div>

      <Box><Journal /></Box>

      {/* Store Location */}
      <div className="px-4 sm:px-8">
        <div className="bg-background rounded-2xl overflow-hidden">
          <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">Find Us</h2>
                  <p className="text-sm text-muted-foreground mt-1">{STORE_LOCATION.address}</p>
                </div>
                <a
                  href={STORE_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-[0.16em] border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-colors self-start sm:self-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <Suspense fallback={<div style={{ height: '480px', width: '100%' }} className="rounded-lg bg-foreground/8" />}>
                <StoreMap
                  lat={STORE_LOCATION.lat}
                  lng={STORE_LOCATION.lng}
                  label={STORE_LOCATION.name}
                  zoom={15}
                />
              </Suspense>
            </div>
          </section>
        </div>
      </div>

      <Box><Footer /></Box>
    </main>
  );
}