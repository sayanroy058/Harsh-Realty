import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import narLogo from "@/assets/memberships/nar-logo.jpg";
import recaLogo from "@/assets/memberships/reca-logo.png";

const navGroups = [
  {
    title: "Portfolio",
    links: [
      ["Projects", "/projects"],
      ["Commercial", "/commercial"],
      ["Ongoing", "/ongoing"],
      ["Gallery", "/gallery"],
    ] as const,
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Insights", "/blog"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ] as const,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-[oklch(0.09_0.018_250)]">
      <div className="hairline absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* brand */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo />
            <p className="text-sm leading-relaxed text-foreground/50 max-w-sm">
              A private real-estate practice curating rare residential addresses
              across Kolkata and India's most coveted growth corridors.
            </p>

            {/* memberships */}
            <div className="pt-2">
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold/70 mb-3">
                Proud Members Of
              </p>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-colors hover:border-gold/30">
                  <img
                    src={narLogo}
                    alt="NAR India — National Association of Realtors"
                    className="h-11 w-auto object-contain transition-all duration-300"
                  />
                </span>
                <span className="grid place-items-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-colors hover:border-gold/30">
                  <img
                    src={recaLogo}
                    alt="RECA — Real Estate Consultants Association"
                    className="h-10 w-auto object-contain transition-all duration-300"
                  />
                </span>
              </div>
            </div>

            {/* socials */}
            <div className="flex gap-2 pt-1">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-gold/20 text-foreground/40 hover:border-gold hover:bg-gold hover:text-ink transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* nav columns */}
          {navGroups.map((group) => (
            <div key={group.title} className="md:col-span-2 flex flex-col gap-3">
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-1">
                {group.title}
              </p>
              {group.links.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="group inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-gold transition-colors duration-200 w-fit"
                >
                  {label}
                  <ArrowUpRight
                    size={12}
                    className="text-gold/0 group-hover:text-gold/70 transition-colors"
                  />
                </Link>
              ))}
            </div>
          ))}

          {/* contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-1">
              Get in touch
            </p>
            <a
              href="tel:+919147222025"
              className="flex items-center gap-2.5 text-sm text-foreground/50 hover:text-gold transition-colors"
            >
              <Phone size={13} className="text-gold/60 shrink-0" />
              +91 9147222025
            </a>
            <a
              href="mailto:sales@harshartirealty.in"
              className="flex items-center gap-2.5 text-sm text-foreground/50 hover:text-gold transition-colors"
            >
              <Mail size={13} className="text-gold/60 shrink-0" />
              sales@harshartirealty.in
            </a>
            <p className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/50">
              <MapPin
                size={13}
                className="text-gold/60 mt-0.5 shrink-0"
              />
              Aurora Waterfront, GN 34/1, GN Block, Salt Lake Sector-V, 16th
              Floor, Unit 1622, Beside IEM Ashram Building, Kolkata - 700091
            </p>
            <Link
              to="/contact"
              className="mt-2 self-start rounded-full border border-gold/35 px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 pt-6 border-t border-gold/8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-foreground/30">
          <p>
            © {new Date().getFullYear()} Harsh Arti Realty Pvt. Ltd. All rights
            reserved.
          </p>
          <p className="tracking-wider">RERA Compliant · Crafted with intent</p>
        </div>
      </div>
    </footer>
  );
}
