import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { properties } from "@/lib/properties";
import interior from "@/assets/interior-1.jpg";
import tower from "@/assets/tower-night.jpg";
import heroCity from "@/assets/hero-city.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/completed")({
  head: () => ({
    meta: [
      { title: "Completed Projects — HarshArti Realty" },
      { name: "description", content: "Delivered residences and the families now living in them — success stories from across Kolkata." },
      { property: "og:title", content: "Completed Projects — HarshArti Realty" },
      { property: "og:description", content: "Before-and-after, testimonials and finished addresses." },
    ],
  }),
  component: Completed,
});

function Completed() {
  const list = properties.filter((p) => p.status === "completed");
  const imgs = [interior, tower, heroCity];
  return (
    <>
      <PageHero eyebrow="Delivered" title={<>Stories that have <span className="italic text-gradient-gold">moved in.</span></>}>
        A selection of completed homes. Each one is now occupied — many by clients who have returned for a second or third address.
      </PageHero>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <BeforeAfter before={tower} after={interior} />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...list, ...properties.slice(0, 4)].map((p, i) => (
            <Reveal key={`${p.slug}-${i}`} delay={i * 0.06}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={imgs[i % 3]} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Delivered · {2020 + (i % 5)}</span>
                    <h3 className="font-display text-2xl mt-2 group-hover:text-gold transition-colors">{p.name}</h3>
                    <p className="text-xs text-foreground/55 mt-1">{p.location}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden select-none">
      <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
      <div className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-gold text-ink font-display">↔</div>
      </div>
      <span className="absolute top-4 left-4 text-xs tracking-[0.3em] uppercase text-foreground/80 bg-ink/60 backdrop-blur px-3 py-1 rounded-full">Before</span>
      <span className="absolute top-4 right-4 text-xs tracking-[0.3em] uppercase text-foreground/80 bg-ink/60 backdrop-blur px-3 py-1 rounded-full">After</span>
    </div>
  );
}