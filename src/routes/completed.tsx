import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { properties } from "@/lib/properties";
import { propertyImages } from "@/lib/propertyImages";

export const Route = createFileRoute("/completed")({
  head: () => ({
    meta: [
      { title: "Ready-to-Move Projects — HarshArti Realty" },
      {
        name: "description",
        content:
          "Explore ready-to-move residential projects represented by HarshArti Realty.",
      },
      {
        property: "og:title",
        content: "Ready-to-Move Projects — HarshArti Realty",
      },
      {
        property: "og:description",
        content: "Completed residences available for enquiry.",
      },
    ],
  }),
  component: Completed,
});

function Completed() {
  const list = properties.filter((property) => property.status === "completed");

  return (
    <>
      <PageHero
        eyebrow="Ready to move"
        title={
          <>
            Homes ready for their{" "}
            <span className="italic text-gradient-gold">next chapter.</span>
          </>
        }
      >
        Explore completed residential projects currently listed as ready to
        move.
      </PageHero>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((property, index) => (
            <Reveal key={property.slug} delay={index * 0.06}>
              <Link
                to="/projects/$slug"
                params={{ slug: property.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={propertyImages[property.slug]}
                    alt={property.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
                      {property.statusLabel}
                    </span>
                    <h3 className="font-display text-2xl mt-2 group-hover:text-gold transition-colors">
                      {property.name}
                    </h3>
                    <p className="text-xs text-foreground/55 mt-1">
                      {property.location}
                    </p>
                    <p className="font-display text-xl text-gold mt-4">
                      {property.price}
                    </p>
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
