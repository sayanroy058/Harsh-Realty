import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { locations } from "@/lib/properties";
import { TrendingUp, Train, Plane, Building2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — HarshArti Realty" },
      { name: "description", content: "Explore Kolkata's premium corridors — connectivity, infrastructure and investment outlook." },
    ],
  }),
  component: Locations,
});

function Locations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];

  return (
    <>
      <PageHero eyebrow="Where we work" title={<>Corridors, not <span className="italic text-gradient-gold">listings.</span></>}>
        We represent residences only in micro-markets we know intimately. Below: the streets, the train lines and the slow infrastructure stories that shape value.
      </PageHero>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl glass-strong rounded-[2.5rem] p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Map intelligence</p>
            <h2 className="font-display text-4xl md:text-5xl">A live map of our footprint.</h2>
            <p className="mt-4 text-foreground/65">Hover any corridor to see active listings, average ticket size and 3-year price trend.</p>
          </div>
          <div className="relative aspect-square w-full max-w-xl mx-auto">
            <svg viewBox="0 0 400 360" className="w-full h-full">
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect x="8" y="24" width="384" height="300" rx="28" fill="none" stroke="var(--gold)" strokeOpacity="0.28" />
              <rect x="20" y="36" width="360" height="276" rx="24" fill="url(#mapGlow)" />

              <circle cx="200" cy="170" r="58" fill="none" stroke="var(--gold)" strokeOpacity="0.3" />
              <circle cx="200" cy="170" r="94" fill="none" stroke="var(--gold)" strokeOpacity="0.18" strokeDasharray="4 8" />
              <path d="M102 208 Q140 110 166 84 Q214 74 244 108 Q286 132 302 164 Q290 220 260 242 Q208 262 176 272 Q126 252 102 208 Z" fill="none" stroke="var(--gold)" strokeOpacity="0.36" strokeDasharray="5 8" />

              {locations.map((l, i) => {
                const a = (i / locations.length) * Math.PI * 2 - Math.PI / 2;
                const r = 96;
                const x = 200 + Math.cos(a) * r;
                const y = 170 + Math.sin(a) * r;
                const isActive = i === activeIndex;
                const nextA = (((i + 1) % locations.length) / locations.length) * Math.PI * 2 - Math.PI / 2;
                const nx = 200 + Math.cos(nextA) * r;
                const ny = 170 + Math.sin(nextA) * r;
                return (
                  <g key={`${l.name}-link`}>
                    <path d={`M ${x} ${y} Q 200 170 ${nx} ${ny}`} stroke="var(--gold)" strokeOpacity="0.22" strokeWidth="1" fill="none" />
                    <g onMouseEnter={() => setActiveIndex(i)} className="cursor-pointer">
                      <circle cx={x} cy={y} r={isActive ? 9 : 7} fill="var(--ink)" stroke="var(--gold)" strokeOpacity={isActive ? 0.9 : 0.55} />
                      <circle cx={x} cy={y} r="3.2" fill="var(--gold)" />
                      <circle cx={x} cy={y} r="10" fill="none" stroke="var(--gold)" strokeOpacity="0.4">
                        <animate attributeName="r" values="7;14;7" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
                        <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
                      </circle>
                      <text
                        x={x}
                        y={y - 14}
                        textAnchor="middle"
                        className={`${isActive ? "fill-gold" : "fill-foreground/65"} font-sans uppercase tracking-[0.16em]`}
                        fontSize="10"
                      >
                        {l.name}
                      </text>
                    </g>
                  </g>
                );
              })}

            </svg>

            <div className="absolute left-1/2 top-[67%] w-[74%] -translate-x-1/2 rounded-2xl border border-gold/35 bg-[oklch(0.12_0.02_250/0.95)] p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold/80">Active Corridor</p>
              <h3 className="mt-1 font-display text-xl text-foreground">{activeLocation.name}</h3>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/50">Listings</p>
                  <p className="font-display text-lg text-gold">{String(activeLocation.count).padStart(2, "0")}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/50">Ticket</p>
                  <p className="font-display text-lg text-gold">₹{(1.6 + activeIndex * 0.35).toFixed(1)}Cr</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/50">3Y Trend</p>
                  <p className="font-display text-lg text-gold">+{8 + activeIndex * 2}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-7 group hover:border-gold/50 transition-all h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl">{l.name}</h3>
                  <span className="font-display text-3xl text-gold">{String(l.count).padStart(2, "0")}</span>
                </div>
                <div className="space-y-3 text-sm text-foreground/65">
                  <p className="flex items-center gap-3"><Train size={14} className="text-gold" /> Metro within 1 km</p>
                  <p className="flex items-center gap-3"><Plane size={14} className="text-gold" /> Airport · 25 min</p>
                  <p className="flex items-center gap-3"><Building2 size={14} className="text-gold" /> Schools & malls nearby</p>
                  <p className="flex items-center gap-3"><TrendingUp size={14} className="text-gold" /> Growth · {8 + (i*2)}% YoY</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
