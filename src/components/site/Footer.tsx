import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-[oklch(0.1_0.02_250)]">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/65">
            Harshaarti Realty curates rare residential addresses across Kolkata
            and India's most coveted growth corridors — a private practice for
            buyers, sellers and investors of distinction.
          </p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Navigate</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            {[
              ["About", "/about"],
              ["Projects", "/projects"],
              ["Ongoing", "/ongoing"],
              ["Completed", "/completed"],
              ["Gallery", "/gallery"],
              ["Insights", "/blog"],
              ["Careers", "/careers"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="hover:text-gold transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Reach</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-gold shrink-0" /><span>Kolkata, West Bengal, India</span></li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-gold shrink-0" /><span>+91 98 0000 0000</span></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-gold shrink-0" /><span>sales@harshartirealty.in</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Harsh Arti Realty Pvt. Ltd. All rights reserved.</p>
          <p>RERA Compliant · Crafted with intent</p>
        </div>
      </div>
    </footer>
  );
}