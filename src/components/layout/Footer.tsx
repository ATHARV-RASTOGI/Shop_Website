import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { STORE_LOCATION } from "@/lib/constants";

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
     
      {/* Main */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-12 lg:px-12">
        <div className="col-span-2 md:col-span-5">
          <div className="font-serif text-2xl tracking-tight">
            K.K <span className="italic text-primary">Jewelers</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
          Serving people of  Farrukhabad and beyond , we offer ready-made gold and daimond jewelry alongside bespoke, custom-designed gold and diamond pieces handcrafted in our workshop.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-foreground transition-colors hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
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
          <h4 className="eyebrow">Location</h4>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-muted-foreground">
            <div>K.K Jewelers</div>
            <div>2/207 Nehru Road</div>
            <div>209625 Farrukhabad, UttarPradesh</div>
            <div className="pt-3">
              <a href={`tel:${STORE_LOCATION.phone}`} className="text-foreground hover:text-primary">
                {STORE_LOCATION.phone}
              </a>
            </div>
            <div>
              <a href={`mailto:${STORE_LOCATION.email}`} className="text-foreground hover:text-primary">
                {STORE_LOCATION.email}
              </a>
            </div>
          </address>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow">Items</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/rings" className="hover:text-primary">Rings</Link></li>
            <li><Link to="/necklace" className="hover:text-primary">Necklaces</Link></li>
            <li><Link to="/earings" className="hover:text-primary">Earrings</Link></li>
            <li><Link to="/rings" className="hover:text-primary">2026 Collection</Link></li>
          </ul>
        </div>

        

        
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center lg:px-12">
          <div>© {new Date().getFullYear()} K.K Jewelers · Made in India</div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
