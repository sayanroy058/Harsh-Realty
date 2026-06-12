import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import vinayak from "@/assets/vinayak-hero.jpg";
import interior from "@/assets/interior-1.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EnquiryForm } from "./projects.$slug";
import { Leaf, TreePine, Sun, Mountain } from "lucide-react";

export const Route = createFileRoute("/vinayak-21-acres")({
  head: () => ({
    meta: [
      { title: "Vinayak 21 Acres — A township woven into the land" },
      { name: "description", content: "21 acres of green-belt township living. Plots, masterplan and lifestyle." },
      { property: "og:title", content: "Vinayak 21 Acres" },
      { property: "og:description", content: "A flagship township by HarshArti Realty — nature, openness, slow luxury." },
      { property: "og:image", content: vinayak },
    ],
  }),
  component: Vinayak,
});

// Override accent via inline css var
const accent = "oklch(0.78 0.16 140)";

function Vinayak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div style={{ ["--gold" as never]: accent, ["--gold-soft" as never]: "oklch(0.86 0.15 140)" }}>
      <section ref={ref} className="relative h-[100svh] overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img src={vinayak} alt="Vinayak 21 Acres aerial" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${accent}30 0%, oklch(0.13 0.02 250 / 0.4) 60%, oklch(0.13 0.02 250) 100%)` }} />
        </motion.div>

        {/* floating leaves */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${10 + i * 11}%`, top: `${15 + (i * 7) % 60}%`, color: accent, opacity: 0.4 }}
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <Leaf size={24} />
          </motion.div>
        ))}

        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: accent }}>
            — Flagship 01 · 21 acres in green Bengal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1.2 }} className="font-display text-[12vw] md:text-[7vw] leading-[0.95]">
            Vinayak<br/><span className="italic" style={{ color: accent }}>21 Acres</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-8 max-w-md text-foreground/75 italic">
            A township woven into the land. Walk past the gate and the city falls away.
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: accent }}>— The land</p>
            <h2 className="font-display text-4xl md:text-7xl leading-tight max-w-4xl">Twenty-one acres. <span className="italic" style={{ color: accent }}>Forty-thousand</span> trees promised.</h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[[21, " ac", "Total area"], [40, "k+", "Trees planted"], [60, "%", "Open land"], [120, "+", "Plots"]].map(([n, s, l]) => (
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
        <div className="mx-auto max-w-7xl glass-strong rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center" style={{ borderColor: `${accent}30` }}>
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accent }}>— Masterplan</p>
            <h2 className="font-display text-4xl md:text-5xl">Explore by zone.</h2>
            <p className="mt-4 text-foreground/65">A living masterplan — green belts, plot availability, water bodies and amenity clusters, all in one view.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {[
                { i: TreePine, t: "Green Belt", c: "8 acres" },
                { i: Sun, t: "Plot zones", c: "4 clusters" },
                { i: Mountain, t: "Water bodies", c: "2 lakes" },
                { i: Leaf, t: "Amenities", c: "Clubhouse" },
              ].map(({ i: Icon, t, c }) => (
                <div key={t} className="flex items-center gap-3"><Icon size={18} style={{ color: accent }} /><div><p className="text-sm">{t}</p><p className="text-xs text-foreground/50">{c}</p></div></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <rect width="400" height="400" fill="oklch(0.18 0.06 140)" />
                <path d="M40 60 Q200 100 360 80 L360 340 Q200 300 40 320 Z" fill={accent} fillOpacity="0.2" />
                {Array.from({ length: 24 }).map((_, i) => {
                  const x = 60 + (i % 6) * 50;
                  const y = 80 + Math.floor(i / 6) * 60;
                  const avail = i % 3 !== 0;
                  return <rect key={i} x={x} y={y} width={36} height={42} fill={avail ? accent : "oklch(0.3 0.02 140)"} fillOpacity={avail ? 0.7 : 0.3} rx="3" />;
                })}
                <text x="200" y="380" textAnchor="middle" fill="currentColor" fontSize="10" className="fill-foreground/50 uppercase tracking-widest">Live masterplan · hover plots</text>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <InvestmentCalc accent={accent} />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={interior} alt="Lifestyle" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accent }}>— Lifestyle</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A morning here is a <span className="italic" style={{ color: accent }}>long one</span>.</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">Walking trails through native forest. Sunrise yoga on the lake deck. An organic farmer's table on Sundays. The township is built for the unhurried hours the city has forgotten.</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl glass-strong rounded-3xl p-10">
          <EnquiryForm name="Vinayak 21 Acres" />
        </div>
      </section>
    </div>
  );
}

function InvestmentCalc({ accent }: { accent: string }) {
  const [size, setSize] = useState(2400);
  const rate = 6500;
  const value = size * rate;
  const fiveYr = value * 1.65;
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accent }}>— Growth calculator</p>
          <h2 className="font-display text-4xl md:text-6xl">If you buy <span className="italic" style={{ color: accent }}>today</span>.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 glass rounded-3xl p-10">
            <label className="text-xs tracking-[0.3em] uppercase text-foreground/50">Plot size: <span className="text-foreground">{size.toLocaleString()} sq ft</span></label>
            <input type="range" min="1200" max="6000" step="100" value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full mt-4 accent-[oklch(0.78_0.16_140)]" />
            <div className="mt-10 grid sm:grid-cols-3 gap-8">
              <div><p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">Today's value</p><p className="font-display text-3xl mt-2" style={{ color: accent }}>₹ {(value / 10000000).toFixed(2)} Cr</p></div>
              <div><p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">In 5 years*</p><p className="font-display text-3xl mt-2" style={{ color: accent }}>₹ {(fiveYr / 10000000).toFixed(2)} Cr</p></div>
              <div><p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">Projected IRR</p><p className="font-display text-3xl mt-2" style={{ color: accent }}>13%</p></div>
            </div>
            <p className="text-[10px] text-foreground/40 mt-6">*Based on micro-market 5-yr CAGR. Not a guaranteed forecast.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}