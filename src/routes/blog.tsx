import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior-1.jpg";
import tower from "@/assets/tower-night.jpg";
import heroCity from "@/assets/hero-city.jpg";
import vinayak from "@/assets/vinayak-hero.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — HarshArti Realty" },
      { name: "description", content: "Market insights, real-estate trends and editorial dispatches from our research desk." },
    ],
  }),
  component: Blog,
});

const posts = [
  { t: "Why EM Bypass is Kolkata's quietest blue chip", c: "Market", d: "Dec 2025", read: "8 min", img: tower, featured: true },
  { t: "Reading a floor plan like an architect", c: "Guides", d: "Nov 2025", read: "6 min", img: interior },
  { t: "Ayodhya's long arc as an investable city", c: "Outlook", d: "Nov 2025", read: "10 min", img: heroCity },
  { t: "Townships vs towers: a buyer's mental model", c: "Guides", d: "Oct 2025", read: "5 min", img: vinayak },
  { t: "The discreet rise of NRI demand in New Town", c: "Market", d: "Oct 2025", read: "7 min", img: tower },
  { t: "What RERA actually protects (and what it does not)", c: "Legal", d: "Sep 2025", read: "9 min", img: interior },
];

function Blog() {
  const [hero, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="The journal" title={<>Field <span className="italic text-gradient-gold">notes</span>.</>}>
        Long-form dispatches from our research desk. Market intelligence, architectural literacy and quiet observations on the cities we love.
      </PageHero>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <a href="#" className="group block relative aspect-[16/9] rounded-3xl overflow-hidden">
              <img src={hero.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Featured · {hero.c}</span>
                <h2 className="font-display text-3xl md:text-6xl mt-3 max-w-3xl group-hover:text-gold transition-colors">{hero.t}</h2>
                <p className="mt-4 text-sm text-foreground/60">{hero.d} · {hero.read}</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <a href="#" className="group block">
                <div className="aspect-[5/4] overflow-hidden rounded-2xl mb-5">
                  <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{p.c}</span>
                <h3 className="font-display text-2xl mt-2 group-hover:text-gold transition-colors">{p.t}</h3>
                <p className="mt-3 text-xs text-foreground/50">{p.d} · {p.read}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}