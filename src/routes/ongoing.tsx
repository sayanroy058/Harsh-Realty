import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { properties } from "@/lib/properties";
import { motion } from "framer-motion";
import miraniaEvara from "@/assets/Properties/Mirania_Evara.jpg";
import merlinNiyasa from "@/assets/Properties/Merlin Niyasa.webp";
import nidhara from "@/assets/Properties/Nidhara.jpg";
import psAurus from "@/assets/Properties/PS Aurus.jpg";
import psSansara from "@/assets/Properties/PS Sansara.jpg";
import psQuintessa from "@/assets/Properties/PS Quintessa.avif";

export const Route = createFileRoute("/ongoing")({
  head: () => ({
    meta: [
      { title: "Ongoing Projects — HarshArti Realty" },
      { name: "description", content: "Active developments under construction across Kolkata, with live progress tracking." },
      { property: "og:title", content: "Ongoing Projects — HarshArti Realty" },
      { property: "og:description", content: "Live construction progress and completion forecasts." },
    ],
  }),
  component: Ongoing,
});

function Ongoing() {
  const list = properties.filter((p) => p.status === "ongoing");
  const imgs = {
    "mirania-evara": miraniaEvara,
    "merlin-niyasa": merlinNiyasa,
    nidhara,
    "ps-aurus": psAurus,
    "ps-sansara": psSansara,
    "ps-quintessa": psQuintessa,
  } as const;

  return (
    <>
      <PageHero eyebrow="Active developments" title={<>Under <span className="italic text-gradient-gold">construction</span>.</>}>
        Live progress on every site we currently represent. Drone walkthroughs, milestone tracking and structural updates — refreshed monthly.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-6">
          {list.map((p, i) => {
            const progress = 35 + (i * 12) % 55;
            return (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block glass rounded-3xl overflow-hidden hover:border-gold/40 transition-all">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img src={imgs[p.slug as keyof typeof imgs]} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{p.location}</p>
                          <h3 className="font-display text-3xl group-hover:text-gold transition-colors">{p.name}</h3>
                          <p className="text-sm text-foreground/60 mt-2">{p.bhk} · {p.area}</p>
                        </div>
                        <p className="font-display text-2xl text-gold">{p.price}</p>
                      </div>
                      <div className="mt-8">
                        <div className="flex justify-between text-xs mb-2">
                          <span className="text-foreground/55">Construction progress</span>
                          <span className="text-gold font-display">{progress}%</span>
                        </div>
                        <div className="h-px bg-gold/15 relative overflow-hidden rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/60 to-gold"
                            style={{ height: 2 }}
                          />
                        </div>
                        <div className="mt-6 grid grid-cols-4 gap-2 text-xs">
                          {["Excavation", "Structure", "Finishing", "Handover"].map((m, j) => (
                            <div key={m} className={`text-center py-2 rounded-md border ${j * 25 < progress ? "border-gold/40 text-gold" : "border-foreground/10 text-foreground/30"}`}>{m}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
