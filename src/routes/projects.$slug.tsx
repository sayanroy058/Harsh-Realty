import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { properties } from "@/lib/properties";
import { propertyImages } from "@/lib/propertyImages";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = properties.find((property) => property.slug === params.slug);
    return {
      meta: [
        { title: `${p?.name ?? "Project"} — HarshArti Realty` },
        {
          name: "description",
          content: p
            ? `${p.name} at ${p.location}. ${p.bhk}, ${p.area}. ${p.price}.`
            : "Project details",
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const p = properties.find((property) => property.slug === slug);
  if (!p) throw notFound();

  const facts = [
    ["Land Area", p.landArea],
    ["Towers", p.towers],
    ["Floors", p.floors],
    ["Total Units", p.units],
    ["Configuration", p.bhk],
    ["Status", p.statusLabel],
  ];

  return (
    <>
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
          src={propertyImages[p.slug]}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-ink/45 to-ink/25" />
        <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20">
          <Link
            to="/projects"
            className="text-xs tracking-[0.3em] uppercase text-gold mb-6 hover:underline"
          >
            ← All projects
          </Link>
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-4">
            {p.location}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-6xl md:text-8xl leading-[0.95]"
          >
            {p.name}
          </motion.h1>
          <div className="mt-8 flex flex-wrap gap-8 md:gap-12 text-sm">
            {[
              ["Configuration", p.bhk],
              ["Area", p.area],
              ["Starting", p.price],
              ["Status", p.statusLabel],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                  {label}
                </p>
                <p className="mt-2 font-display text-lg text-gold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              — Project Overview
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Complete development details.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facts.map(([label, value], index) => (
              <Reveal key={label} delay={index * 0.04}>
                <div className="glass rounded-2xl p-6 h-full">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/45">
                    {label}
                  </p>
                  <p className="mt-3 font-display text-xl text-gold">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-4 glass rounded-2xl p-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/45">
                RERA Registration
              </p>
              <p className="mt-3 font-display text-xl text-gold">
                {p.rera ?? "Not provided in the project data"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl mb-10">
              Configurations & pricing
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3">
            {p.pricing.map((item) => (
              <Reveal key={item}>
                <div className="glass rounded-xl p-5 flex items-start gap-3 h-full">
                  <Check size={16} className="text-gold mt-1 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              — Enquiry
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Interested in {p.name}?
            </h2>
            <p className="mt-4 text-foreground/65">
              Request current availability and a personalised consultation.
            </p>
          </div>
          <EnquiryForm name={p.name} />
        </div>
      </section>
    </>
  );
}

export function EnquiryForm({ name }: { name: string }) {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="grid gap-3">
      <p className="text-xs tracking-[0.3em] uppercase text-gold">
        Enquire about {name}
      </p>
      <input
        className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
        placeholder="Your name"
      />
      <input
        className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
        placeholder="Email or phone"
      />
      <textarea
        rows={3}
        className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
        placeholder="Tell us about your requirements"
      />
      <button className="mt-2 rounded-full bg-gold text-ink py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all">
        Request callback
      </button>
    </form>
  );
}
