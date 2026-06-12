import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import interior from "@/assets/interior-1.jpg";
import tower from "@/assets/tower-night.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HarshArti Realty" },
      { name: "description", content: "A private real-estate practice founded in Kolkata, curating premium residences with stewardship and discretion." },
      { property: "og:title", content: "About HarshArti Realty" },
      { property: "og:description", content: "Our story, vision and the people behind the practice." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="The practice" title={<><span>An atelier for </span><span className="italic text-gradient-gold">homes that last.</span></>}>
        Harsh Arti Realty Pvt. Ltd. is a private, family-led practice that
        represents buyers, sellers and investors across Kolkata's most
        considered addresses. We believe a home is the longest-held asset
        most families ever own — and we treat each transaction with that gravity.
      </PageHero>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img src={interior} alt="Founder office" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Founder's vision</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              "We do not sell square footage. We safeguard <span className="italic text-gradient-gold">decisions.</span>"
            </h2>
            <p className="mt-8 text-foreground/70 leading-relaxed">
              Founded with the conviction that Kolkata deserves an advisory firm
              measured by stewardship rather than volume. Today the same
              principle governs every listing we represent — from a 1,200 sq ft
              residence in Rajarhat to a 4,000 sq ft sky home on EM Bypass.
            </p>
            <div className="mt-10 flex gap-12">
              {[["12+", "Years"], ["800+", "Families"], ["7", "Corridors"]].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl text-gold">{n}</p>
                  <p className="text-xs text-foreground/50 mt-1 tracking-wider uppercase">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl mb-16">Our charter</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Vision", d: "To be India's most trusted private real-estate practice — known for restraint, taste and long-term thinking." },
              { t: "Mission", d: "Match each buyer with the address that will appreciate as a life decision, not merely as an asset." },
              { t: "Values", d: "Discretion. Stewardship. Architectural literacy. A standing distaste for the merely loud." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
                  <span className="font-display text-6xl text-gold/30">0{i+1}</span>
                  <h3 className="font-display text-2xl mt-4">{v.t}</h3>
                  <p className="mt-3 text-foreground/65 text-sm leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 bg-[oklch(0.11_0.02_250)]">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Recognition</p>
            <h2 className="font-display text-4xl md:text-6xl mb-16">Quiet awards.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Best Residential Advisor", "Bengal Property Awards, 2023"],
              ["Top NRI Advisory Partner", "Real Estate Excellence, 2022"],
              ["Featured Practice", "ET Realty Tribute, 2024"],
              ["RERA Compliance Hall of Honor", "2023"],
            ].map(([t, s]) => (
              <Reveal key={t}>
                <div className="flex items-start gap-6 border-t border-gold/20 py-6">
                  <span className="text-gold font-display text-2xl">★</span>
                  <div>
                    <p className="font-display text-xl">{t}</p>
                    <p className="text-sm text-foreground/55 mt-1">{s}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold uppercase mb-6">— Counted</p>
            <h2 className="font-display text-4xl md:text-5xl">Numbers we are willing to claim.</h2>
          </div>
          {[[800, "+", "Families"], [25, "+", "Towers"], [12, "yr", "Practice"]].map(([n, s, l]) => (
            <Reveal key={l as string}>
              <div className="text-center md:text-left">
                <Counter to={n as number} suffix={s as string} />
                <p className="mt-3 text-sm text-foreground/60">{l as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}