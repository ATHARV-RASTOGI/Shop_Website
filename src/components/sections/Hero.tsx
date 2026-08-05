import heroImg from "@/assets/hero-model.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pb-32 lg:pt-20">
        {/* Left: copy */}
        <div className="lg:col-span-5 lg:pt-16">
          <div data-reveal>
            <span className="eyebrow">2026 Collection </span>
          </div>

          <h1
            data-reveal
            data-reveal-delay="120"
            className="mt-8 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.02em]"
          >
           Relationship ,<br />
            <span className="italic text-primary">Build on Trust</span><br />
          </h1>

          <p
            data-reveal
            data-reveal-delay="240"
            className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
          >
           Explore our wide range of <b>hallmarked</b> gold jewelry , along with silver . Have a unique idea? Let our expert Delhi karigars handcraft your custom designs .

          </p>
          <div data-reveal data-reveal-delay="360" className="mt-10 flex items-center gap-6">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs uppercase tracking-[0.22em] text-foreground"
            >
              Discover the edit
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>

          <dl
            data-reveal
            data-reveal-delay="500"
            className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 text-xs"
          >
            <div>
              <dt className="eyebrow">Open Since</dt>
              <dd className="mt-2 font-serif text-2xl"> 19-- </dd>
            </div>
            <div>
              <dt className="eyebrow">Workshop </dt>
              <dd className="mt-2 font-serif text-2xl">Delhi</dd>
            </div>
          </dl>
        </div>

        {/* Right: asymmetrical image */}
        <div className="relative lg:col-span-7">
          <div
            data-reveal
            data-reveal-delay="200"
            className="relative ml-auto aspect-[3/4] w-full overflow-hidden lg:w-[88%]"
          >
            <img
              src={heroImg}
              alt="Model wearing the 2026 K.K Jewelers collection"
              width={1380}
              height={1600}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute left-0 top-0 -translate-x-1/3 translate-y-2/3 bg-background/85 p-5 backdrop-blur-sm md:p-7">
              <div className="eyebrow">Featured</div>
              <div className="mt-2 font-serif text-lg leading-snug">
                Garnet Aurelia Drops<br />
                <span className="italic text-primary">€310</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
