// src/components/views/coins/CoinsNav.tsx
// Sub-navigation bar for navigating between Coins Overview, Gold Coins, and Silver Notes subpages

import { Link, useLocation } from "@tanstack/react-router";
import { Coins, Banknote, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoinsNavProps {
  className?: string;
}

export function CoinsNav({ className }: CoinsNavProps) {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");

  const TABS = [
    {
      label: "Gold Coins (Ginnis)",
      href: "/coins/gold",
      isActive: currentPath === "/coins/gold",
      icon: Coins,
      badgeColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    },
    {
      label: "Silver Dollar Notes",
      href: "/coins/silver",
      isActive: currentPath === "/coins/silver",
      icon: Banknote,
      badgeColor: "text-slate-400 border-slate-400/30 bg-slate-400/10",
    },
  ];

  return (
    <nav
      aria-label="Coins subpages navigation"
      className={cn(
        "w-full border-y border-border/50 bg-background/80 backdrop-blur-md sticky top-[88px] lg:top-12 z-40",
        className,
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 py-2.5 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                to={tab.href}
                className={cn(
                  "flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs tracking-[0.16em] uppercase whitespace-nowrap transition-all duration-200 border",
                  tab.isActive
                    ? "bg-foreground text-background border-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground border-transparent hover:border-foreground/15 hover:bg-secondary/60",
                )}
              >
                <Icon
                  className={cn(
                    "w-3.5 h-3.5",
                    tab.isActive ? "text-background" : "text-foreground/60",
                  )}
                />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
