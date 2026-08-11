import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [ 
  { label: "Rings",      href: "/rings" },
  { label: "Earrings",   href: "/earings" },
  { label: "Necklaces",  href: "/necklace" },
  { label: "Journal",    href: "/journal" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsCondensed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/60 transition-all duration-300">
      <div
        className={cn(
          "max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-300",
          isCondensed ? "h-12" : "h-16"
        )}
      >
        
        {/* Left — Back button on sub-pages, empty on home to preserve center alignment */}
        <div className="flex items-center gap-3 flex-1 min-w-[100px]">
          {!isHome && (
            <Link
              to="/"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className={cn("transition-opacity duration-300", isCondensed ? "opacity-0 hidden sm:inline" : "opacity-100")}>Home</span>
            </Link>
          )}
        </div>

        {/* Center — Wordmark / Logo */}
        <Link
          to="/"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 font-serif tracking-tight text-foreground select-none whitespace-nowrap transition-all duration-300",
            isCondensed ? "text-base lg:text-lg" : "text-lg lg:text-2xl"
          )}
        >
          K.K <span className="text-primary">Jewelers</span>
        </Link>

        {/* Right — Desktop nav + Actions + Mobile hamburger */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-200 [&.active]:text-foreground [&.active]:border-b [&.active]:border-foreground/40 pb-px"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md absolute w-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-6 py-4 text-[12px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border-b border-border/40 last:border-0 [&.active]:text-foreground [&.active]:font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4 text-[12px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
             <button onClick={() => setMenuOpen(false)}>Search</button>
          </div>
        </nav>
      )}
    </header>
  );
}