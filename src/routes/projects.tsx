import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { properties } from "@/lib/properties";
import { propertyImages } from "@/lib/propertyImages";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — HarshArti Realty" },
      {
        name: "description",
        content:
          "Explore curated residential projects across Kolkata's premium corridors.",
      },
      { property: "og:title", content: "Projects — HarshArti Realty" },
      {
        property: "og:description",
        content: "Apartments, villas and townships across Kolkata.",
      },
    ],
  }),
  component: Projects,
});

const filters = ["All", "Ongoing", "Completed"] as const;

function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => {
    if (filter === "All") return properties;
    const map = { Ongoing: "ongoing", Completed: "completed" } as const;
    return properties.filter((p) => p.status === map[filter]);
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            A <span className="italic text-gradient-gold">considered</span>{" "}
            portfolio.
          </>
        }
      >
        Each project below is one we represent personally. Use the filters to
        traverse by stage, or open any residence for a fuller dossier.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 mb-12 sticky top-24 z-30 glass-strong rounded-full p-2 w-fit">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase transition-colors ${
                  filter === f
                    ? "text-ink"
                    : "text-foreground/70 hover:text-gold"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-bg"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {list.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <img
                      src={propertyImages[p.slug]}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-ink/60 backdrop-blur border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                      {p.statusLabel}
                    </span>
                    <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-gold/0 border border-gold/40 text-gold transition-all group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
                      <ArrowUpRight size={14} />
                    </span>
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">
                        {p.location}
                      </p>
                      <h3 className="font-display text-2xl group-hover:text-gold transition-colors">
                        {p.name}
                      </h3>
                      <div className="mt-4 flex justify-between items-end text-xs text-foreground/70">
                        <div>
                          <p>{p.bhk}</p>
                          <p className="mt-1">{p.area}</p>
                        </div>
                        <p className="font-display text-lg text-gold">
                          {p.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
