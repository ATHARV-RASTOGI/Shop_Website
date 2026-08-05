import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

export function EnquireModal({ isOpen, onClose, itemName }: { isOpen: boolean; onClose: () => void; itemName: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Open mailto as fallback
    window.location.href = `mailto:hello@kkjewelers.com?subject=Enquiry about ${itemName}`;
    // Reset after a short delay
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-secondary border border-foreground/10 shadow-2xl p-8 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center py-8">
            <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-serif text-2xl mb-2">Request Received</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              We've opened your mail client to compose the enquiry. We will respond within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl mb-1">Enquire</h3>
            <p className="text-sm text-foreground/60 mb-6">
              You are enquiring about the <span className="font-medium text-foreground">{itemName}</span>.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <button
                type="submit"
                className="w-full py-4 text-xs tracking-[0.2em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Send Message via Mail
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
