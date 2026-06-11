import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/ongoing", label: "Ongoing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/locations", label: "Locations" },
  { to: "/blog", label: "Insights" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled
              ? "glass-strong"
              : "bg-[oklch(0.12_0.02_250/0.45)] backdrop-blur-md border border-white/10"
          }`}
        >
          <Logo />
          <nav className="hidden xl:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-foreground/95 hover:text-gold transition-colors relative"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/contact"
              className="rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Enquire
            </Link>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden rounded-full p-2 text-gold"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden mt-3 glass-strong rounded-3xl p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-foreground/80 hover:text-gold text-base"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full border border-gold/40 px-5 py-2 text-center text-xs uppercase tracking-[0.2em] text-gold"
              >
                Enquire
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
