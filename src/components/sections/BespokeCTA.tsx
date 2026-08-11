export function BespokeCTA() {
  return (
    <section data-reveal className="reveal py-24 px-6 text-center bg-secondary">
      <p className="eyebrow mb-4">Bespoke</p>
      <h2
        className="text-3xl sm:text-4xl font-light text-foreground mb-6"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        None of these is quite right?
      </h2>
      <p className="text-lg text-foreground/50 max-w-sm mx-auto mb-10 leading-relaxed">
        We also make custom pieces for you. Bring a design, a stone, or just a feeling —
        our workshop will take it from there.
      </p>
      <button className="px-10 py-4 text-[11px] tracking-[0.24em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200 rounded-full">
        <a href="/contact">Contact Us</a>
      </button>
    </section>
  );
}
