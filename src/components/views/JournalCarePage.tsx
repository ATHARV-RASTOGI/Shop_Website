// src/components/site/JournalCarePage.tsx
// Journal article: "The Art of Caring for Gold & Silver Jewelry"

import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import care from "@/assets/journal-care.webp";

// ─── Article sections ─────────────────────────────────────────────────────────
const SECTIONS = [
  {
    heading: "The enemy of brilliance",
    body: `Gold and silver are among the most stable metals on earth — they don't rust, they won't corrode from air alone. What dulls them is far more mundane: the invisible film that accumulates from skin oils, perfume, hand cream, and household dust. Over weeks it builds a haze that sits between the metal and the light, muting the very luster you paid for. The good news is that removing it takes less than two minutes.`,
  },
  {
    heading: "Daily wear — the small habits",
    body: `Put your jewelry on last, after perfume, moisturizer, and hairspray have dried. Take it off first when you come home — before washing up, before the gym, before bed. These two rules alone will extend the time between cleans by months. Store each piece separately; gold scratches gold, and even a delicate chain can abrade a polished surface when they tumble together in a drawer. A soft cloth pouch or a lined box with individual compartments costs almost nothing.`,
  },
  {
    heading: "The weekly wipe",
    body: `Every week, give each piece thirty seconds with a dry microfibre cloth — the kind used for spectacles. Work in one direction across flat surfaces; circular motions create micro-scratches over time. For pavé or channel-set stones, flip the cloth to a clean corner and run it lightly over the setting. You are not cleaning the diamonds — you are lifting the grease film off the gold around them. The stones will seem brighter for it.`,
  },
  {
    heading: "The monthly deep clean",
    body: `Once a month, fill a small bowl with warm (not hot) water and a drop of unscented dish soap. Immerse the piece for three to four minutes, then lift it out and use a baby toothbrush — the softest bristle grade you can find — to work gently around settings, under stones, and along the inner curve of the band. Rinse under cool running water, then lay flat on a clean cloth and let it air-dry fully before storing. Do not use this method on pieces with emeralds, opals, turquoise, or any treated or filled stone; those require a jeweler's ultrasonic or a dry buff only.`,
  },
  {
    heading: "Silver and its particular needs",
    body: `Silver tarnishes — it is a chemical reality, not a sign of poor quality. The dark film is silver sulfide, formed when the metal reacts with sulfur compounds in the air and in skin. A proprietary silver cloth (impregnated with a mild reducing agent) removes it in seconds; so does a paste of baking soda and water applied with a soft cloth and rinsed off cleanly. Avoid "dip" solutions for pieces that combine silver with gold, gemstones, or enamel — they are non-selective and can strip coatings or bleach organic materials. If tarnish has worked deep into engraving or filigree, bring the piece to us: we have tools that reach where fingers cannot.`,
  },
  {
    heading: "When to visit your jeweler",
    body: `Once a year — at minimum — bring your fine pieces in for a professional inspection. We check prong tips for wear, look for hairline fractures in shanks, test clasp tension, and re-tighten any pavé stones that have begun to move. Preventative attention costs a fraction of what it takes to replace a lost stone or resize a cracked band. Think of it the way you think of a car service: not because something is wrong, but because you want to catch things before they become wrong.`,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function JournalCarePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[52vh] min-h-[340px] overflow-hidden bg-secondary">
        <img
          src={care}
          alt="Caring for gold and silver jewelry"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-6 pb-28 pt-14">

        {/* Back link */}
        <Link
          to="/journal"
          className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          The Journal
        </Link>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
          <span>Care</span>
          <span className="h-px w-5 bg-border" />
          <span>5 min read</span>
          <span className="h-px w-5 bg-border" />
          <span>By our Head Jeweler</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl font-light leading-tight tracking-tight text-foreground mb-5"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          The Art of Caring for<br />
          <span className="italic text-primary">Gold &amp; Silver Jewelry</span>
        </h1>

        {/* Standfirst */}
        <p className="text-base leading-relaxed text-muted-foreground mb-12 max-w-lg border-l-2 border-primary/40 pl-5">
          A short guide to keeping fine metals luminous — from daily wear habits
          to deep cleans, written by our head jeweler.
        </p>

        <div className="w-full h-px bg-border/60 mb-12" />

        {/* Body sections */}
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.heading}>
              <h2
                className="text-xl font-light tracking-tight text-foreground mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {s.heading}
              </h2>
              <p className="text-[15px] leading-[1.85] text-muted-foreground">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="w-full h-px bg-border/60 mt-16 mb-10" />

        {/* Footer note */}
        <p className="text-[13px] text-muted-foreground/70 leading-relaxed">
          If you have questions about a specific piece — its stone, its finish, or
          its history — write to us at{" "}
          <a
            href="mailto:care@kkjewelers.com"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            care@kkjewelers.com
          </a>
          . We answer personally, usually within a day.
        </p>

        {/* Back to journal */}
        <div className="mt-14">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to journal
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
