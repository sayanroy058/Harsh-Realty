import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { properties } from "@/lib/properties";
import { getPropertyImage } from "@/lib/propertyImages";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Projects — HarshArti Realty" },
      {
        name: "description",
        content:
          "Premium office and retail spaces across Kolkata's leading business districts, represented by HarshArti Realty.",
      },
      { property: "og:title", content: "Commercial Projects — HarshArti Realty" },
      {
        property: "og:description",
        content: "Office and retail spaces across Kolkata.",
      },
    ],
  }),
  component: Commercial,
});

function Commercial() {
  const list = properties.filter((p) => p.category === "commercial");

  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title={
          <>
            Spaces for <span className="italic text-gradient-gold">enterprise.</span>
          </>
        }
      >
        A curated selection of office and retail developments across Kolkata's
        foremost business districts. Open any listing for a fuller dossier.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={getPropertyImage(p.slug)}
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
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
