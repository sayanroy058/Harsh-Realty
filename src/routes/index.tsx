import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroCity from "@/assets/hero-city.jpg";
import tower from "@/assets/tower-night.jpg";
import sarayu from "@/assets/sarayu-hero.jpg";
import vinayak from "@/assets/Properties/Vinayanak21Acres.webp";
import godrej from "@/assets/Properties/GodrejBlues.jpg";
import nprVisaaya from "@/assets/Properties/NPR_Visaya.avif";
import primarcAadvika from "@/assets/Properties/Primiarc Aadvika.webp";
import miraniaEvara from "@/assets/Properties/Mirania_Evara.jpg";
import merlinNiyasa from "@/assets/Properties/Merlin Niyasa.webp";
import nidhara from "@/assets/Properties/Nidhara.jpg";
import psAurus from "@/assets/Properties/PS Aurus.jpg";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal, FadeIn } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { properties, flagships } from "@/lib/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HarshArti Realty — Rare Addresses, Curated" },
      { name: "description", content: "A private real-estate practice curating premium apartments, villas and townships across Kolkata and India." },
      { property: "og:title", content: "HarshArti Realty" },
      { property: "og:description", content: "Rare addresses, curated for connoisseurs of space, light and location." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Flagships />
      <Showcase />
      <Journey />
      <Investment />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroCity} alt="Cinematic luxury cityscape at sunset" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-background" />
        <div className="absolute inset-0 bg-radial-gold" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-32 px-6">
        <div className="mx-auto max-w-7xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs tracking-[0.4em] text-gold uppercase mb-8"
          >
            — Est. Kolkata · A private practice
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="font-display text-[14vw] md:text-[8.5vw] leading-[0.95] tracking-tight"
          >
            <span className="block">Rare addresses,</span>
            <span className="block italic text-gradient-gold">curated.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="max-w-md text-foreground/70 text-sm md:text-base leading-relaxed">
              HarshArti Realty is a concierge for connoisseurs of space, light and location. Apartments, villas and townships across Kolkata and India's most coveted corridors.
            </p>
            <div className="flex gap-4">
              <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all">
                Explore Portfolio <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm uppercase tracking-[0.2em] text-foreground hover:border-gold transition-all">
                Private Concierge
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

function Marquee() {
  const words = ["Kolkata", "•", "Howrah", "•", "Rajarhat", "•", "New Town", "•", "EM Bypass", "•", "Ayodhya", "•", "New Alipore", "•", "Kankurgachi", "•"];
  return (
    <section className="border-y border-gold/10 py-6 overflow-hidden bg-ink/40">
      <div className="flex marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 gap-12 px-6 font-display text-3xl text-foreground/30">
            {words.map((w, j) => <span key={`${i}-${j}`}>{w}</span>)}
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 25, s: "+", l: "Curated residences" },
    { n: 12, s: "+", l: "Years of practice" },
    { n: 7, s: "", l: "Premium corridors" },
    { n: 800, s: "+", l: "Families settled" },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— By the numbers</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight mb-20">
            A practice measured in <span className="italic text-gradient-gold">stewardship</span>, not square footage.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="border-t border-gold/20 pt-6">
                <Counter to={s.n} suffix={s.s} />
                <p className="mt-3 text-sm text-foreground/60">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flagships() {
  const imgs = { "vinayak-21-acres": vinayak, "godrej-blue": godrej, "hoabl-the-sarayu": sarayu } as const;
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Featured opportunities</p>
              <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight">
                Three worlds. Three<br/><span className="italic text-gradient-gold">flagship</span> portals.
              </h2>
            </div>
            <p className="max-w-sm text-foreground/60 text-sm">
              Each flagship is its own digital experience — a different climate, a different mood, a different investment thesis.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-6">
          {flagships.map((f, i) => (
            <FadeIn key={f.slug} delay={i * 0.12}>
              <Link to={`/${f.slug}` as "/vinayak-21-acres"} className="group block relative h-[560px] overflow-hidden rounded-3xl">
                <img src={imgs[f.slug as keyof typeof imgs]} alt={f.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${f.accent}30, transparent 70%)` }}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.4em] text-gold uppercase">Flagship {String(i + 1).padStart(2, "0")}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl leading-tight">{f.name}</h3>
                    <p className="mt-3 text-sm text-foreground/70 italic">{f.tagline}</p>
                    <div className="mt-6 h-px w-12 bg-gold transition-all duration-500 group-hover:w-32" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const featured = properties.slice(0, 6);
  const imgs = {
    "npr-visaaya": nprVisaaya,
    "primarc-aadvika": primarcAadvika,
    "mirania-evara": miraniaEvara,
    "merlin-niyasa": merlinNiyasa,
    nidhara,
    "ps-aurus": psAurus,
  } as const;

  return (
    <section className="relative py-32 px-6 bg-[oklch(0.11_0.02_250)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Active portfolio</p>
              <h2 className="font-display text-4xl md:text-6xl">New launches & quiet listings</h2>
            </div>
            <Link to="/projects" className="text-sm text-gold border-b border-gold/40 hover:border-gold pb-1 flex items-center gap-2">
              All projects <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={imgs[p.slug as keyof typeof imgs]}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  {p.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-gold text-ink px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">{p.location}</p>
                    <h3 className="font-display text-2xl group-hover:text-gold transition-colors">{p.name}</h3>
                    <div className="mt-4 flex justify-between items-end text-xs text-foreground/70">
                      <div>
                        <p>{p.bhk}</p>
                        <p className="mt-1">{p.area}</p>
                      </div>
                      <p className="font-display text-lg text-gold">{p.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const items = [
    { year: "2010", t: "Real Estate Journey Started", d: "Took the first step into real estate with a vision to help families find homes that stand the test of time." },
    { year: "2024", t: "HA Realty Founded", d: "Established HA Realty to deliver a refined, client-first experience rooted in trust, integrity, and lasting value." },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6 text-center">— Architectural journey</p>
          <h2 className="font-display text-4xl md:text-6xl text-center mb-20">An <span className="italic text-gradient-gold">unhurried</span> timeline.</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          {items.map((it, i) => (
            <Reveal key={it.year} delay={i * 0.1}>
              <div className={`relative flex items-center my-12 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1 md:px-12">
                  <div className={`glass rounded-2xl p-6 max-w-sm ${i % 2 ? "md:ml-auto" : ""}`}>
                    <p className="font-display text-3xl text-gold">{it.year}</p>
                    <h3 className="mt-2 text-xl font-display">{it.t}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{it.d}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gold ring-4 ring-background animate-float" />
                <div className="flex-1" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl glass-strong rounded-[2.5rem] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[420px] md:h-auto">
            <img src={tower} alt="Investment opportunities" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Investment</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Real estate, <span className="italic text-gradient-gold">re-thought</span> as a long-form asset.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              We help private buyers, NRIs and family offices identify residences with rare combinations of micro-market, build quality and developer pedigree.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[["IRR", "20–25%"], ["Horizon", "5–7 yr"], ["Cycle", "Off-market"]].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase">{k}</p>
                  <p className="mt-2 font-display text-xl text-gold">{v}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 w-fit hover:border-gold">
              Schedule a private consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "They found us a north-facing home in a building we did not know existed. That is the practice.", a: "Ananya Sen", r: "Resident, EM Bypass" },
    { q: "Quietly the best buy-side advisors in Kolkata. They protect the buyer first, every time.", a: "Rohit Agarwal", r: "Family office principal" },
    { q: "We bought sight-unseen from Dubai. Walkthrough, paperwork, registration — they choreographed all of it.", a: "Meera Kapoor", r: "NRI investor" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Voices</p>
          <h2 className="font-display text-4xl md:text-6xl mb-16 max-w-3xl">Quiet praise from quiet people.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full">
                <span className="font-display text-6xl text-gold leading-none">"</span>
                <p className="-mt-6 text-foreground/85 leading-relaxed italic">{x.q}</p>
                <div className="mt-8 pt-6 border-t border-gold/15">
                  <p className="font-display text-lg">{x.a}</p>
                  <p className="text-xs text-foreground/50 mt-1">{x.r}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl text-center relative">
        <div className="absolute inset-0 bg-radial-gold blur-3xl opacity-50" />
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6 relative">— A standing invitation</p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] relative">
            Begin a <span className="italic text-gradient-gold">private</span><br/>conversation.
          </h2>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-3 rounded-full bg-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-gold-soft transition-all relative group">
            Reach the concierge
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
