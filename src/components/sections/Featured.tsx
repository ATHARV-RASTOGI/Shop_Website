import emerald from "@/assets/product-emerald-ring.webp";
import crimson from "@/assets/product-crimson-hoops.webp";
import garnet from "@/assets/product-garnet-drops.webp";
import rosso from "@/assets/product-rosso-pearl.webp";

type Product = {
  name: string;
  price: string;
  category: string;
  img: string;
  // grid placement (desktop)
  colSpan: string;
  rowSpan?: string;
  align?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Emerald Royale Ring",
    price: "€420",
    category: "Ring · 18k Gold",
    img: emerald,
    colSpan: "lg:col-span-5",
    align: "lg:mt-0",
  },
  {
    name: "Crimson Drop Hoops",
    price: "€260",
    category: "Earring · Enamel",
    img: crimson,
    colSpan: "lg:col-span-4 lg:col-start-8",
    align: "lg:mt-32",
  },
  {
    name: "Garnet Aurelia Drops",
    price: "€310",
    category: "Earring · Garnet",
    img: garnet,
    colSpan: "lg:col-span-4 lg:col-start-2",
    align: "lg:mt-0",
  },
  {
    name: "Rosso Pearl Strand",
    price: "€340",
    category: "Necklace · Pearl",
    img: rosso,
    colSpan: "lg:col-span-5 lg:col-start-7",
    align: "lg:-mt-24",
  },
];

export function Featured() {
  return (
    <section id="collection" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-20 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <span className="eyebrow"> · The Edit · </span>
            <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.02em]">
              Our Beautiful,<br />
              <span className="italic text-primary">Collections,</span><br />
            </h2>
          </div>
          <div data-reveal data-reveal-delay="180" className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Browse our large variety of ready-to-wear machine-made gold and silver jewelry. Along with some custom designs.
            </p>
            <a href="#" className="mt-6 inline-block border-b border-foreground pb-1 text-xs uppercase tracking-[0.22em]">
              View all pieces
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-20">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              data-reveal-delay={i * 120}
              className={`group ${p.colSpan} ${p.align ?? ""}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="product-img h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/95 px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-foreground transition-transform duration-500 group-hover:translate-y-0">
                  Add to bag
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.category}
                  </p>
                </div>
                <span className="font-serif text-lg italic text-primary">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
