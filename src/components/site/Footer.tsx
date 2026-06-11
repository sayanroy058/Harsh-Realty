import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Ongoing", "/ongoing"],
  ["Gallery", "/gallery"],
  ["Insights", "/blog"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

const socialLinks = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.09_0.018_250)]">
      {/* gold hairline top */}
      <div className="hairline absolute inset-x-0 top-0" />

      {/* top cta band */}
      <div className="relative overflow-hidden border-b border-gold/10">
        <div className="bg-radial-gold absolute inset-0 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Ready to invest?</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Let's find your next rare address.
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-ink hover:brightness-110 transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        {/* brand col */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <Logo />
          <p className="text-sm leading-relaxed text-foreground/55 max-w-sm">
            Harshaarti Realty curates rare residential addresses across Kolkata
            and India's most coveted growth corridors — a private practice for
            buyers, sellers and investors of distinction.
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/25 text-foreground/50 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* spacer */}
        <div className="hidden md:block md:col-span-1" />

        {/* navigate col */}
        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">Navigate</p>
          <ul className="space-y-3">
            {navLinks.map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-foreground/55 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="block h-px w-4 bg-gold/0 group-hover:bg-gold/60 transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact col */}
        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">Get in Touch</p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/20 text-gold">
                <MapPin size={13} />
              </span>
              <span className="text-sm text-foreground/55 leading-relaxed">
                Kolkata, West Bengal, India
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/20 text-gold">
                <Phone size={13} />
              </span>
              <a href="tel:+919147222025" className="text-sm text-foreground/55 hover:text-gold transition-colors">
                +91 9147 222 025
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/20 text-gold">
                <Mail size={13} />
              </span>
              <a href="mailto:sales@harshartirealty.in" className="text-sm text-foreground/55 hover:text-gold transition-colors break-all">
                sales@harshartirealty.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gold/8">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-foreground/30">
          <p>© {new Date().getFullYear()} Harsh Arti Realty Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>RERA Compliant</span>
            <span className="h-3 w-px bg-foreground/20" />
            <span>Crafted with intent</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
