// src/components/site/JournalWorkshopPage.tsx
// Journal article: "Inside the Workshop — How Your Piece Is Crafted"

import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import atelier from "@/assets/journal-atelier.webp";

// ─── Article sections ─────────────────────────────────────────────────────────
const SECTIONS = [
  {
    heading: "Where it begins — the commission",
    body: `Every piece we make starts with a conversation. Some clients arrive with a precise technical brief — stone dimensions, carat weight, a CAD sketch. Others bring a feeling: a photograph torn from a magazine, a grandmother's ring they want to reinterpret, or simply the words "something I can wear every day but that still feels important." Both are valid starting points. Our role in the first meeting is less designer and more listener. We record everything — the occasion, the budget, the hand size, even the client's relationship with jewelry — before a single line is drawn.`,
  },
  {
    heading: "Sketching and approval",
    body: `Within a week of the commission meeting, our head jeweler produces two or three hand-drawn sketches in pencil and gouache. We deliberately avoid rendering software at this stage; digital mockups look finished in a way that discourages honest feedback. Pencil says "this is still a conversation." Once a direction is chosen, we move to a precise technical drawing at 1:1 scale, annotated with measurements and tolerances. The client signs off on this drawing — it is the contract between the idea and the object.`,
  },
  {
    heading: "The wax model",
    body: `Before any gold is melted, the piece is carved in jeweler's wax. This is where the three-dimensional form becomes real and holdable for the first time. The wax is carved by hand using fine gravers and heat pens; for complex forms, we may also use a CNC mill to rough out the basic volume before hand-finishing. The client is invited to the atelier to hold the wax model, try it on, and request adjustments. A wax correction takes an afternoon; the same change in gold would take a week and cost significantly more. This stage exists entirely to protect the client's vision.`,
  },
  {
    heading: "Casting and forging",
    body: `The approved wax is placed inside a steel flask and surrounded with investment plaster, which sets overnight. The flask is then fired in a kiln — the wax melts away (the "lost wax" process, unchanged in its essentials for three thousand years), leaving a perfect negative cavity. Molten gold, alloyed to our specification, is cast into the cavity under centrifugal force. Once cooled and broken from the investment, the raw casting looks rough and matte — nothing like the finished ring. The work now begins in earnest.`,
  },
  {
    heading: "Finishing — where the hours live",
    body: `A cast piece arrives at the bench covered in sprues (the channels through which gold flowed during casting), surface pitting, and tool marks from the wax stage that the casting faithfully reproduced. These are removed with progressively finer abrasives — files, emery sticks, rubber wheels, and finally polishing compounds on a motorized mop. A simple band might take three hours to finish to mirror quality. A complex pavé setting can take three days. We do not rush this stage; the quality of a polish is visible under any light at any angle for the entire lifetime of the piece.`,
  },
  {
    heading: "Stone setting",
    body: `Setting is the most technically demanding part of the process and the one where most jewelry fails. A poorly set stone rocks under the prongs, catches on fabric, or — worst — loosens over time and is lost. Our setters train for years before working on client pieces. For pavé work, each stone is placed individually into a drilled seat, the surrounding gold pushed over with a graver to secure it, and then "bright-cut" — a micro-bevel cut into the gold between stones that maximizes light return. A two-centimeter section of pavé might contain forty stones and take an entire afternoon. We test every finished setting by rocking each stone with a fine probe; anything that moves goes back to the bench.`,
  },
  {
    heading: "Final inspection and delivery",
    body: `Before leaving the atelier, every finished piece is examined under a 10× loupe for setting integrity, surface quality, and dimensional accuracy against the original technical drawing. It is weighed, measured, and photographed in our archive. We then clean it ultrasonically, polish it by hand one final time, and place it in our box with a care card and a record of its materials. The piece ships — or is delivered in person — with a written certificate describing the metal alloy, the stones (with carat weight and origin where traceable), and the artisan who made it. We consider that certificate part of the object.`,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function JournalWorkshopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[52vh] min-h-[340px] overflow-hidden bg-secondary">
        <img
          src={atelier}
          alt="Inside the K.K Jewelers atelier"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-6 pb-28 pt-14">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          The Journal
        </Link>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-5">
          <span>Workshop</span>
          <span className="h-px w-5 bg-border" />
          <span>6 min read</span>
          <span className="h-px w-5 bg-border" />
          <span>By our Head Jeweler</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl font-light leading-tight tracking-tight text-foreground mb-5"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
        >
          Inside the Workshop —<br />
          <span className="italic text-primary">How Your Piece Is Crafted</span>
        </h1>

        {/* Standfirst */}
        <p className="text-base leading-relaxed text-muted-foreground mb-12 max-w-lg border-l-2 border-primary/40 pl-5">
          Step behind the scenes to see how our skilled artisans hand-set diamonds
          and craft custom orders — from first sketch to final polish.
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
          Interested in commissioning a piece? Start the conversation at{" "}
          <a
            href="mailto:commission@kkjewelers.com"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            commission@kkjewelers.com
          </a>
          . We reply personally, usually within two business days.
        </p>

        {/* Back to journal */}
        <div className="mt-14">
          <Link
            to="/"
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
