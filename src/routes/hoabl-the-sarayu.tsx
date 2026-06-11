import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sarayu from "@/assets/sarayu-hero.jpg";
import interior from "@/assets/interior-1.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EnquiryForm } from "./projects.$slug";

export const Route = createFileRoute("/hoabl-the-sarayu")({
  head: () => ({
    meta: [
      { title: "HOABL The Sarayu — Ayodhya · A pilgrimage you can invest in" },
      { name: "description", content: "Heritage land plots on the banks of the Sarayu, Ayodhya. A spiritual and investment journey." },
      { property: "og:title", content: "HOABL The Sarayu — Ayodhya" },
      { property: "og:description", content: "Premium investment in Ayodhya's growth corridor." },
      { property: "og:image", content: sarayu },
    ],
  }),
  component: Sarayu,
});

const accent = "oklch(0.82 0.13 70)";
const accentSoft = "oklch(0.9 0.1 75)";

function Sarayu() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div style={{ ["--gold" as never]: accent, ["--gold-soft" as never]: accentSoft }}>
      <section ref={ref} className="relative h-[100svh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={sarayu} alt="Ayodhya sunrise on the Sarayu" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, oklch(0.85 0.12 60 / 0.2), oklch(0.2 0.04 50 / 0.6) 60%, oklch(0.13 0.02 250))` }} />
        </motion.div>

        {/* sacred geometry orbit */}
        <motion.div style={{ y: sunY }} className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none">
          <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-30">
            <g stroke={accent} strokeOpacity="0.5" fill="none" strokeWidth="0.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <circle key={i} cx="250" cy="250" r={50 + i * 25} transform={`rotate(${i * 22.5} 250 250)`} />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={i} x1="250" y1="50" x2="250" y2="450" transform={`rotate(${i * 30} 250 250)`} />
              ))}
            </g>
          </svg>
        </motion.div>

        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: accentSoft }}>
            — Flagship 03 · Ayodhya · A sacred address
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1.4 }} className="font-display text-[12vw] md:text-[6.5vw] leading-[0.95]">
            <span className="text-foreground/70 text-xl tracking-[0.4em] uppercase block mb-4">HOABL Presents</span>
            The <span className="italic" style={{ color: accentSoft }}>Sarayu.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 max-w-md text-foreground/75 italic">
            A pilgrimage you can invest in. Plots on the riverfront of one of India's most ancient cities.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 0%, ${accent}25, transparent 50%)` }} />
        <div className="mx-auto max-w-6xl relative">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: accentSoft }}>— The story</p>
            <h2 className="font-display text-4xl md:text-7xl leading-tight max-w-4xl">A 7,000-year-old city is <span className="italic" style={{ color: accentSoft }}>writing</span> its next chapter.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <p className="text-foreground/70 leading-relaxed text-lg">Since the consecration of the Ram Mandir, Ayodhya is on a once-in-a-century investment arc. New airport, ring roads, riverfront redevelopment — and a tourism flow estimated at 50 million annually. The Sarayu places you on the right bank of all of it.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-8">
                {[[50, "M", "Annual visitors"], [22, "%", "5-yr CAGR"], [15, "min", "From airport"], [2024, "", "Possession"]].map(([n, s, l]) => (
                  <div key={l as string} className="border-t pt-4" style={{ borderColor: `${accent}40` }}>
                    <Counter to={n as number} suffix={s as string} />
                    <p className="mt-2 text-xs text-foreground/55">{l as string}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl mb-12">A cultural <span className="italic" style={{ color: accentSoft }}>timeline</span>.</h2>
          </Reveal>
          <div className="space-y-6">
            {[
              { y: "2024", t: "Ram Mandir consecration", d: "150M+ visitors in first year of opening." },
              { y: "2025", t: "Maharishi Valmiki Intl. Airport", d: "Daily flights from 20+ cities." },
              { y: "2026", t: "Sarayu riverfront completion", d: "5 km of promenade, ghats, plazas." },
              { y: "2030", t: "Projected township maturity", d: "Schools, hospitals, hospitality online." },
            ].map((e, i) => (
              <Reveal key={e.y} delay={i * 0.08}>
                <div className="flex gap-8 items-start">
                  <div className="font-display text-4xl shrink-0 w-24" style={{ color: accentSoft }}>{e.y}</div>
                  <div className="flex-1 border-l pl-8 pb-8" style={{ borderColor: `${accent}30` }}>
                    <h3 className="font-display text-2xl">{e.t}</h3>
                    <p className="text-foreground/60 mt-2">{e.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden">
              <img src={interior} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, transparent 50%, ${accent}40)` }} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accentSoft }}>— Location dashboard</p>
            <h2 className="font-display text-4xl md:text-5xl">Numbers worth <span className="italic" style={{ color: accentSoft }}>memorising</span>.</h2>
            <div className="mt-10 space-y-5">
              {[
                ["Airport", "15 min"],
                ["Ram Mandir", "12 min"],
                ["Sarayu Ghats", "Walking distance"],
                ["Lucknow", "2 hr by expressway"],
                ["Possession", "Q4 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b pb-3" style={{ borderColor: `${accent}25` }}>
                  <span className="text-foreground/60 text-sm">{k}</span>
                  <span className="font-display text-lg" style={{ color: accentSoft }}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl glass-strong rounded-3xl p-10" style={{ borderColor: `${accent}40` }}>
          <EnquiryForm name="HOABL The Sarayu" />
        </div>
      </section>
    </div>
  );
}