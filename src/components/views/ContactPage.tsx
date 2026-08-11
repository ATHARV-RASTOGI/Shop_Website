// src/components/views/ContactPage.tsx
import { useState, Suspense, lazy } from "react";
import { ReactLenis } from "lenis/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { STORE_LOCATION } from "@/lib/constants";
import { EnquireModal } from "@/components/ui/EnquireModal";
import { MapPin, Phone, Mail, Clock, ExternalLink, Send } from "lucide-react";

const StoreMap = lazy(() => import("@/components/ui/StoreMap"));

export function ContactPage() {
  useReveal();
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [subject, setSubject] = useState("");

  const handleGeneralEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const mailUrl = `mailto:${STORE_LOCATION.email}?subject=General Enquiry — K.K Jewelers&body=Hello K.K Jewelers team,`;
    window.location.href = mailUrl;
  };

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero Section */}
        <section className="relative px-6 pt-28 pb-16 max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-4">Contact Us</p>
          <h1
            className="text-4xl sm:text-6xl font-light leading-[1.08] tracking-tight text-foreground mb-6"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          >
            Get in Touch <br />
            <span className="italic text-primary">with our Showroom</span>
          </h1>
          <p className="text-base text-foreground/65 max-w-lg mx-auto leading-relaxed">
            Whether you wish to enquire about an existing piece, or discuss a custom order, we are here to assist.
          </p>
        </section>

        <div className="w-full h-px bg-border/40" />

        {/* Contact Details & Direct Enquiry Form Grid */}
        <section className="py-20 px-6 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info Cards */}
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-2xl bg-secondary border border-border/60 shadow-sm space-y-6">
                <h3 className="text-2xl font-light font-serif">Showroom </h3>
                
                <div className="space-y-5 text-sm text-foreground/80">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-full bg-background shrink-0 text-primary border border-border/40">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-foreground/60 mt-0.5 leading-relaxed">{STORE_LOCATION.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-full bg-background shrink-0 text-primary border border-border/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telephone</p>
                      <a href={`tel:${STORE_LOCATION.phone}`} className="text-foreground/60 hover:text-primary transition-colors mt-0.5 block">
                        {STORE_LOCATION.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-full bg-background shrink-0 text-primary border border-border/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href={`mailto:${STORE_LOCATION.email}`} className="text-foreground/60 hover:text-primary transition-colors mt-0.5 block">
                        {STORE_LOCATION.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-full bg-background shrink-0 text-primary border border-border/40">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      {STORE_LOCATION.hours.map((h, i) => (
                        <p key={i} className="text-foreground/60 mt-0.5">
                          {h.days}: <span className="text-foreground">{h.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border/40 flex items-center gap-6">
                  <span className="text-xs uppercase tracking-widest text-foreground/40">Follow Us</span>
                  <div className="flex items-center gap-4">
                    <a href="#" aria-label="X / Twitter" className="text-foreground/60 hover:text-primary transition-colors">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M18.244 2H21.5l-7.51 8.58L23 22h-6.844l-5.36-7.014L4.7 22H1.44l8.04-9.184L1 2h6.99l4.85 6.412L18.244 2Zm-1.2 18h1.9L7.06 4H5.06l11.984 16Z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="3" width="18" height="18" rx="4" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Enquiry Action Form */}
            <div data-reveal data-reveal-delay="150" className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-secondary border border-border/60 shadow-sm space-y-6 h-full flex flex-col justify-between">
                <div>
                  <span className="eyebrow mb-2 block">Direct Communication</span>
                  <h3 className="text-2xl font-light font-serif mb-4">Send a Message</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-6">
                    Clicking send will compose a direct message in your mail client addressed to our concierge team.
                  </p>

                  <form onSubmit={handleGeneralEnquiry} className="space-y-4">
                    <div>
                      <label htmlFor="topic" className="block text-xs uppercase tracking-[0.16em] text-foreground/60 mb-2">
                        Enquiry Topic
                      </label>
                      <select
                        id="topic"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border/80 rounded-xl text-sm focus:outline-none focus:border-foreground/50 text-foreground"
                      >
                        <option value="">General Enquiry</option>
                        <option value="Custom Order">Custom Order</option>
                        <option value="Piece Availability">Check Piece Availability</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-xs uppercase tracking-[0.2em] bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Compose Email Enquiry</span>
                    </button>
                  </form>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <p className="text-s text-foreground/45 text-center">
                    Call us directly at <a href={`tel:${STORE_LOCATION.phone}`} className="underline hover:text-foreground">{STORE_LOCATION.phone}</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Map Section with Free Open in Google Maps Action */}
        <section data-reveal className="py-16 px-6 bg-secondary border-t border-border/40">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow mb-1 block">Interactive Map</span>
                <h2
                  className="text-3xl font-light text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Find Us in Farrukhabad
                </h2>
                <p className="text-sm text-foreground/60 mt-1">{STORE_LOCATION.address}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={STORE_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.16em] bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-full"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={STORE_LOCATION.googleMapsDirUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.16em] border border-foreground/20 text-foreground hover:bg-foreground/10 transition-colors rounded-full"
                >
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Leaflet + OpenStreetMap Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/60">
              <Suspense fallback={<div style={{ height: '480px', width: '100%' }} className="rounded-2xl bg-foreground/8" />}>
                <StoreMap
                  lat={STORE_LOCATION.lat}
                  lng={STORE_LOCATION.lng}
                  label={STORE_LOCATION.name}
                  zoom={15}
                />
              </Suspense>
            </div>
          </div>
        </section>

        <EnquireModal
          isOpen={enquireOpen}
          onClose={() => setEnquireOpen(false)}
          itemName="General Concierge Request"
        />

        <Footer />
      </main>
    </ReactLenis>
  );
}
