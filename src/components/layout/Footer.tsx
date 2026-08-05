import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div data-reveal className="lg:col-span-6">
            <span className="eyebrow">Correspondence</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1] tracking-[-0.015em]">
              Letters from<br />
              <span className="italic text-primary">the shop.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Four times a year, a short letter with new pieces, a journal note,
              and an early look at the next edition.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            data-reveal
            data-reveal-delay="160"
            className="lg:col-span-6 lg:self-end"
          >
            <label htmlFor="newsletter" className="eyebrow block">
              Email address
            </label>
            <div className="mt-3 flex items-center gap-4 border-b border-foreground pb-3">
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-transparent font-serif text-xl outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="shrink-0 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary"
              >
                Subscribe →
              </button>
            </div>
            {done && (
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-primary">
                Merci — you're on the list.
              </p>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              By subscribing you agree to our privacy policy. Unsubscribe at any
              time.
            </p>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-12 lg:px-12">
        <div className="col-span-2 md:col-span-5">
          <div className="font-serif text-2xl tracking-tight">
            K.K <span className="italic text-primary">Jewelers</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
          Serving India from Farrukhabad, we offer ready-made gold and daimond jewelry alongside bespoke, custom-designed gold and diamond pieces handcrafted in our Delhi workshop.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <a href="#" aria-label="X / Twitter" className="text-foreground transition-colors hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M18.244 2H21.5l-7.51 8.58L23 22h-6.844l-5.36-7.014L4.7 22H1.44l8.04-9.184L1 2h6.99l4.85 6.412L18.244 2Zm-1.2 18h1.9L7.06 4H5.06l11.984 16Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-foreground transition-colors hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow">Shop</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/rings" className="hover:text-primary">Rings</Link></li>
            <li><Link to="/necklace" className="hover:text-primary">Necklaces</Link></li>
            <li><Link to="/earings" className="hover:text-primary">Earrings</Link></li>
            <li><Link to="/rings" className="hover:text-primary">2026 Collection</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="eyebrow">House</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/journal" className="hover:text-primary">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2">
          <h4 className="eyebrow">Atelier</h4>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
            <div>K.K Jewelers</div>
            <div>2/207 Nehru Road</div>
            <div>209625 Farrukhabad, UttarPradesh</div>
            <div className="pt-3">
              <a href="tel: +91 789 456 1230" className="text-foreground hover:text-primary">
                +91 789 456 1230
              </a>
            </div>
            <div>
              <a href="mailto:hello@tmpl.digital" className="text-foreground hover:text-primary">
                hello@tmpl.digital
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center lg:px-12">
          <div>© {new Date().getFullYear()} K.K Jewelers · Made in India</div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-foreground">Shipping & Returns</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
