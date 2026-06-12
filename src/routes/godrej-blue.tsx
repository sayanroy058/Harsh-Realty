import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import godrej from "@/assets/godrej-hero.jpg";
import interior from "@/assets/interior-1.jpg";
import tower from "@/assets/tower-night.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EnquiryForm } from "./projects.$slug";
import { Droplet, Waves, Sparkles, Building2 } from "lucide-react";

export const Route = createFileRoute("/godrej-blue")({
  head: () => ({
    meta: [
      { title: "Godrej Blue — A residence borrowed from the water" },
      { name: "description", content: "Waterfront luxury residences. Glass architecture, liquid interiors, premium living." },
      { property: "og:title", content: "Godrej Blue" },
      { property: "og:description", content: "A flagship waterfront experience by HarshArti Realty." },
      { property: "og:image", content: godrej },
    ],
  }),
  component: Godrej,
});

const accent = "oklch(0.72 0.18 235)";
const accentSoft = "oklch(0.82 0.15 230)";

function Godrej() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  return (
    <div style={{ ["--gold" as never]: accent, ["--gold-soft" as never]: accentSoft }}>
      <section ref={ref} className="relative h-[100svh] overflow-hidden">
        <motion.div style={{ y, filter: blur }} className="absolute inset-0">
          <img src={godrej} alt="Godrej Blue waterfront" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${accent}30, oklch(0.1 0.05 235 / 0.6) 60%, oklch(0.13 0.02 250))` }} />
        </motion.div>

        {/* ripples */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border pointer-events-none"
            style={{ borderColor: accent, left: `${20 + i * 18}%`, bottom: `${20 + (i * 5) % 30}%`, width: 80, height: 80 }}
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}

        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: accentSoft }}>
            — Flagship 02 · Waterfront residence
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1.2 }} className="font-display text-[12vw] md:text-[7vw] leading-[0.95]">
            Godrej<br/><span className="italic" style={{ color: accentSoft }}>Blue.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 max-w-md text-foreground/75 italic">
            A residence borrowed from the water. Glass, reflection, and the slow rhythm of tide.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 70% 30%, ${accent}20, transparent 60%)` }} />
        <div className="mx-auto max-w-6xl relative">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: accentSoft }}>— Architecture</p>
            <h2 className="font-display text-4xl md:text-7xl leading-tight max-w-4xl">Floor-to-ceiling <span className="italic" style={{ color: accentSoft }}>glass</span>, four-sided views.</h2>
          </Reveal>
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[[42, " fl", "Tower floors"], [3, " BHK", "Configurations"], [180, "°", "Water view"], [12, "+", "Amenities"]].map(([n, s, l]) => (
              <Reveal key={l as string}>
                <div className="border-t pt-6" style={{ borderColor: `${accent}40` }}>
                  <Counter to={n as number} suffix={s as string} />
                  <p className="mt-3 text-sm text-foreground/60">{l as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {[
            { img: interior, t: "Three-bedroom suite", d: "1,513 – 1,920 sq ft" },
            { img: tower, t: "Sky home, 38th floor", d: "2,400 – 2,910 sq ft" },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                <img src={c.img} alt={c.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: accentSoft }}>Apartment showcase</p>
                  <h3 className="font-display text-3xl mt-2">{c.t}</h3>
                  <p className="text-sm text-foreground/65 mt-2">{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl mb-12">Amenities, <span className="italic" style={{ color: accentSoft }}>fluid</span>.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { i: Droplet, t: "Infinity pool" }, { i: Waves, t: "Spa & sauna" }, { i: Sparkles, t: "Sky lounge" }, { i: Building2, t: "Co-working" },
              { i: Droplet, t: "Wellness deck" }, { i: Waves, t: "Library" }, { i: Sparkles, t: "Concierge" }, { i: Building2, t: "EV charging" },
            ].map(({ i: Icon, t }) => (
              <Reveal key={t}>
                <div className="glass rounded-2xl p-6 hover:border-[var(--gold)]/60 transition-all">
                  <Icon size={20} style={{ color: accentSoft }} />
                  <p className="mt-4 font-display text-lg">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl glass-strong rounded-3xl p-10" style={{ borderColor: `${accent}40` }}>
          <EnquiryForm name="Godrej Blue" />
        </div>
      </section>
    </div>
  );
}