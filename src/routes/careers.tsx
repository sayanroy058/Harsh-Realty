import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — HarshArti Realty" },
      { name: "description", content: "Join a private real-estate practice in Kolkata. Open roles and culture." },
    ],
  }),
  component: Careers,
});

const jobs = [
  { t: "Senior Buyer's Advisor", l: "Kolkata · Full-time", d: "Represent private buyers across our premium corridors. 5+ yrs in luxury real-estate." },
  { t: "NRI Relationship Lead", l: "Kolkata · Hybrid", d: "Own the NRI desk end to end — outreach, virtual tours, documentation." },
  { t: "Architectural Researcher", l: "Kolkata · Full-time", d: "Build our editorial library of floor-plan and developer dossiers." },
  { t: "Brand & Photography Lead", l: "Kolkata · Full-time", d: "Direct the visual language of every listing we represent." },
];

function Careers() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHero eyebrow="Careers" title={<>Join a <span className="italic text-gradient-gold">quiet</span> practice.</>}>
        We hire slowly and rarely. If real estate is something you read about in the evening, we should talk.
      </PageHero>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-4">
          {[["Stewardship", "We are paid only when the client is right."], ["Restraint", "We do not market what we have not vetted."], ["Books", "Every team member gets a quarterly book budget."]].map(([t, d]) => (
            <Reveal key={t}>
              <div className="glass rounded-2xl p-7"><p className="font-display text-xl text-gold">{t}</p><p className="mt-2 text-sm text-foreground/65">{d}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl mb-12">Open positions</h2>
          </Reveal>
          <div className="border-t border-gold/15">
            {jobs.map((j, i) => (
              <div key={i} className="border-b border-gold/15">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-8 flex justify-between items-center text-left group">
                  <div>
                    <p className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors">{j.t}</p>
                    <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mt-2">{j.l}</p>
                  </div>
                  <span className={`grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition-transform ${open === i ? "rotate-45 bg-gold text-ink" : ""}`}>
                    <ArrowUpRight size={16} />
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pb-8 max-w-2xl text-foreground/70">
                        <p>{j.d}</p>
                        <button className="mt-5 rounded-full bg-gold text-ink px-6 py-2 text-xs uppercase tracking-[0.2em]">Apply now</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}