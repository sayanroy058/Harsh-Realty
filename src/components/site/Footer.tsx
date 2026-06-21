import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, Instagram, Facebook, Linkedin, MapPin } from "lucide-react";

const navLinks = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Ongoing", "/ongoing"],
  ["Gallery", "/gallery"],
  ["Insights", "/blog"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-[oklch(0.09_0.018_250)]">
      <div className="hairline absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Logo />
            <p className="text-xs leading-relaxed text-foreground/45">
              Curating rare residential addresses across Kolkata and India's most
              coveted growth corridors.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-gold/20 text-foreground/40 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* nav links */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[9px] uppercase tracking-[0.35em] text-gold mb-3">Pages</p>
            {navLinks.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="text-xs text-foreground/45 hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[9px] uppercase tracking-[0.35em] text-gold mb-1">Contact</p>
            <a
              href="tel:+919147222025"
              className="flex items-center gap-2 text-xs text-foreground/45 hover:text-gold transition-colors"
            >
              <Phone size={11} className="text-gold/60" />
              +91 9147222025
            </a>
            <a
              href="mailto:sales@harshartirealty.in"
              className="flex items-center gap-2 text-xs text-foreground/45 hover:text-gold transition-colors"
            >
              <Mail size={11} className="text-gold/60" />
              sales@harshartirealty.in
            </a>
            <p className="flex items-start gap-2 text-xs text-foreground/45">
              <MapPin size={11} className="text-gold/60 mt-0.5 shrink-0" />
              Aurora Waterfront, GN 34/1, GN BLOCK, Salt lake Sector -V, 16th Floor, Unit - 1622, Beside IEM Ashram Building, Kolkata - 700091
            </p>
            <Link
              to="/contact"
              className="mt-2 self-start rounded-full border border-gold/35 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 pt-5 border-t border-gold/8 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-foreground/25">
          <p>© {new Date().getFullYear()} Harsh Arti Realty Pvt. Ltd. All rights reserved.</p>
          <p>RERA Compliant · Crafted with intent</p>
        </div>
      </div>
    </footer>
  );
}
