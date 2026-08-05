import care from "@/assets/journal-care.webp";
import atelier from "@/assets/journal-atelier.webp";
import { Link } from "@tanstack/react-router";

const ARTICLES = [
  {
    tag: "Care",
    read: "5 min read",
    title: "The Art of Caring for Gold & Silver Jewelry",
    excerpt:
      "A short guide to keeping fine metals luminous — from daily wear to deep cleans, written by our head jeweler.",
    img: care,
    href: "/journal" as const,
  },
  {
    tag: "Workshop",
    read: "6 min read",
    title: "Inside the Workshop — How Your Piece Is Crafted",
    excerpt:
      "Step behind the scenes to see how our skilled artisans hand-set diamonds and craft custom orders exactly to our customers' requests.",
    img: atelier,
    href: "/workshop" as const,
  },
];

export function Journal() {
  return (
    <section id="journal" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal>
            <span className="eyebrow">The Journal</span>
            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.015em]">
              Practical notes<br />
              <span className="italic text-primary">on jewelry.</span>
            </h2>
          </div>
          <a
            data-reveal
            data-reveal-delay="160"
            href="#"
            className="border-b border-foreground pb-1 text-xs uppercase tracking-[0.22em]"
          >
            All articles
          </a>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          {ARTICLES.map((a, i) => {
            const inner = (
              <>
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-background">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={1000}
                    height={800}
                    className="product-img h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{a.tag}</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-3 max-w-md font-serif text-2xl leading-tight tracking-tight lg:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-5 inline-block border-b border-foreground/70 pb-1 text-xs uppercase tracking-[0.22em] transition-colors group-hover:border-primary group-hover:text-primary">
                  Read article
                </span>
              </>
            );

            const sharedClass = `group block ${i === 1 ? "md:mt-24" : ""}`;

            return (
              <Link
                key={a.title}
                to={a.href}
                data-reveal
                data-reveal-delay={i * 160}
                className={sharedClass}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
