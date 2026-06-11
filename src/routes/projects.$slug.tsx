import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { properties } from "@/lib/properties";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import interior from "@/assets/interior-1.jpg";
import tower from "@/assets/tower-night.jpg";
import heroCity from "@/assets/hero-city.jpg";
import { Download, MapPin, Phone, Mail, Check } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = properties.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.name ?? "Project"} — Harshaarti Realty` },
        { name: "description", content: `${p?.name} at ${p?.location}. ${p?.bhk}, ${p?.area}.` },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const p = properties.find((x) => x.slug === slug);
  if (!p) throw notFound();

  const gallery = [interior, tower, heroCity, interior, tower];

  return (
    <>
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
          src={tower}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-ink/40 to-ink/30" />
        <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20">
          <Link to="/projects" className="text-xs tracking-[0.3em] uppercase text-gold mb-6 hover:underline">← All projects</Link>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{p.location}</p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="font-display text-6xl md:text-8xl leading-[0.95]">
            {p.name}
          </motion.h1>
          <div className="mt-8 flex flex-wrap gap-12 text-sm">
            {[["Configuration", p.bhk], ["Area", p.area], ["Starting", p.price], ["Status", p.status]].map(([k, v]) => (
              <div key={k}><p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">{k}</p><p className="mt-2 font-display text-lg text-gold capitalize">{v}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Overview</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-5xl leading-tight">
                A residence designed for <span className="italic text-gradient-gold">long evenings</span>.
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                {p.name} is a {p.bhk} residence in {p.location}, conceived for
                buyers who prize ceiling height, cross-ventilation and a
                neighbourhood that ages gracefully. Floor plates have been
                designed around natural light, with deep balconies and double-glazed
                joinery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[600px]">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.05} className={i === 0 ? "row-span-2 col-span-2" : ""}>
              <div className="relative h-full overflow-hidden rounded-2xl group">
                <img src={g} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-12">Amenities</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Sky lounge", "Infinity pool", "Library", "Concierge", "Spa & sauna", "Co-working", "EV charging", "Children's atelier"].map((a) => (
              <Reveal key={a}>
                <div className="glass rounded-xl p-5 flex items-center gap-3">
                  <Check size={16} className="text-gold" />
                  <span className="text-sm">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Brochure</p>
            <h2 className="font-display text-3xl md:text-4xl">Take {p.name} home with you.</h2>
            <p className="mt-4 text-foreground/65">Download the full dossier — floor plans, specifications and pricing.</p>
            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold text-ink px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all">
              <Download size={16} /> Download Brochure
            </button>
          </div>
          <EnquiryForm name={p.name} />
        </div>
      </section>
    </>
  );
}

export function EnquiryForm({ name }: { name: string }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); }} className="grid gap-3">
      <p className="text-xs tracking-[0.3em] uppercase text-gold">Enquire about {name}</p>
      <input className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Your name" />
      <input className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Email or phone" />
      <textarea rows={3} className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your home" />
      <button className="mt-2 rounded-full bg-gold text-ink py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all">Request callback</button>
    </form>
  );
}