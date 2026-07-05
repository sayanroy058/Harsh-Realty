import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { properties } from "@/lib/properties";
import { propertyImages } from "@/lib/propertyImages";

export const Route = createFileRoute("/ongoing")({
  head: () => ({
    meta: [
      { title: "Ongoing Projects — HarshArti Realty" },
      {
        name: "description",
        content:
          "Active developments under construction across Kolkata, with live progress tracking.",
      },
      { property: "og:title", content: "Ongoing Projects — HarshArti Realty" },
      {
        property: "og:description",
        content: "Live construction progress and completion forecasts.",
      },
    ],
  }),
  component: Ongoing,
});

function Ongoing() {
  const list = properties.filter((p) => p.status === "ongoing");
  return (
    <>
      <PageHero
        eyebrow="Active developments"
        title={
          <>
            Under{" "}
            <span className="italic text-gradient-gold">construction</span>.
          </>
        }
      >
        Live progress on every site we currently represent. Drone walkthroughs,
        milestone tracking and structural updates — refreshed monthly.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-6">
          {list.map((p, i) => {
            return (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block glass rounded-3xl overflow-hidden hover:border-gold/40 transition-all"
                >
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={propertyImages[p.slug]}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                            {p.location}
                          </p>
                          <h3 className="font-display text-3xl group-hover:text-gold transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-sm text-foreground/60 mt-2">
                            {p.bhk} · {p.area}
                          </p>
                        </div>
                        <p className="font-display text-2xl text-gold">
                          {p.price}
                        </p>
                      </div>
                      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        {[
                          ["Status", p.statusLabel],
                          ["Land", p.landArea],
                          ["Towers", p.towers],
                          ["Units", p.units],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-lg border border-gold/15 p-3"
                          >
                            <p className="text-foreground/45 uppercase tracking-wider">
                              {label}
                            </p>
                            <p className="mt-1 text-gold">{value}</p>
                          </div>
                        ))}
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
