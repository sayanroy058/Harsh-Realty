import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import miraniaEvara from "@/assets/Properties/Mirania_Evara.jpg";
import merlinNiyasa from "@/assets/Properties/Merlin Niyasa.webp";
import merlinFResidencies from "@/assets/Properties/Merlin F Residencies.jpg";
import godrejBlue from "@/assets/Properties/GodrejBlues.jpg";
import psNavyom from "@/assets/Properties/PS Navyom.jpg";
import psAurus from "@/assets/Properties/PS Aurus.jpg";
import primarcAadvika from "@/assets/Properties/Primiarc Aadvika.webp";
import nprVisaaya from "@/assets/Properties/NPR_Visaya.avif";
import nidhara from "@/assets/Properties/Nidhara.jpg";
import psSansara from "@/assets/Properties/PS Sansara.jpg";
import psQuintessa from "@/assets/Properties/PS Quintessa.avif";
import vinayak21Acres from "@/assets/Properties/Vinayanak21Acres.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — HarshArti Realty" },
      { name: "description", content: "Cinematic photography from our residences, towers and drone walkthroughs." },
    ],
  }),
  component: Gallery,
});

const cats = ["All", "Exteriors", "Aerial"] as const;
const media = [
  { src: miraniaEvara, alt: "Mirania Evara", cat: "Exteriors", h: "tall" },
  { src: merlinNiyasa, alt: "Merlin Niyasa", cat: "Aerial", h: "wide" },
  { src: merlinFResidencies, alt: "Merlin F Residencies", cat: "Aerial", h: "wide" },
  { src: godrejBlue, alt: "Godrej Blue", cat: "Exteriors", h: "wide" },
  { src: psNavyom, alt: "PS Navyom", cat: "Aerial", h: "wide" },
  { src: psAurus, alt: "PS Aurus", cat: "Exteriors", h: "tall" },
  { src: primarcAadvika, alt: "Primarc Aadvika", cat: "Exteriors", h: "wide" },
  { src: nprVisaaya, alt: "NPR Visaaya", cat: "Exteriors", h: "tall" },
  { src: nidhara, alt: "Nidhara", cat: "Aerial", h: "wide" },
  { src: psSansara, alt: "PS Sansara", cat: "Exteriors", h: "tall" },
  { src: psQuintessa, alt: "PS Quintessa", cat: "Exteriors", h: "tall" },
  { src: vinayak21Acres, alt: "Vinayak 21 Acres", cat: "Exteriors", h: "wide" },
] as const;

function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<(typeof media)[number] | null>(null);
  const list = cat === "All" ? media : media.filter((m) => m.cat === cat);

  return (
    <>
      <PageHero eyebrow="Gallery" title={<>The <span className="italic text-gradient-gold">light</span> of our addresses.</>}>
        Slow photography of finished interiors, dawn exteriors and drone studies — collected from across our portfolio.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all ${
                  cat === c ? "border-gold bg-gold text-ink" : "border-gold/30 text-foreground/70 hover:text-gold hover:border-gold/60"
                }`}
              >{c}</button>
            ))}
          </div>
          <div className={cat === "Aerial"
            ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
            : "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          }>
            {list.map((m, i) => (
              <Reveal key={`${m.src}-${i}`} delay={(i % 6) * 0.05}>
                <button onClick={() => setOpen(m)} className="group block w-full overflow-hidden rounded-2xl break-inside-avoid">
                  <img src={m.src} alt={m.alt} loading="lazy" className={`w-full transition-all duration-700 group-hover:scale-105 ${m.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover`} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl grid place-items-center p-6"
          >
            <motion.img
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              src={open.src} alt={open.alt} className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-gold text-ink"><X /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
