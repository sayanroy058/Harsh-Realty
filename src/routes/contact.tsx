import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HarshArti Realty" },
      { name: "description", content: "Reach our concierge. Private appointments, callbacks and WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Concierge" title={<>A <span className="italic text-gradient-gold">private</span> line.</>}>
        Tell us the city, the budget and the kind of evening you want from your home. We'll write back, never call uninvited.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <form onSubmit={(e) => e.preventDefault()} className="glass-strong rounded-3xl p-8 md:p-12 grid gap-4">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-2">— Smart enquiry</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Full name" />
                <input className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Phone" />
              </div>
              <input className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Email" />
              <div className="grid sm:grid-cols-2 gap-4">
                <select className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold">
                  <option>Looking to buy</option><option>Looking to sell</option><option>Investment advisory</option><option>NRI services</option>
                </select>
                <select className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold">
                  <option>Budget · ₹1–3 Cr</option><option>₹3–5 Cr</option><option>₹5–10 Cr</option><option>₹10 Cr+</option>
                </select>
              </div>
              <textarea rows={5} className="bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" placeholder="Tell us about the home you want" />
              <button className="mt-2 rounded-full bg-gold text-ink py-4 text-sm uppercase tracking-[0.3em] hover:bg-gold-soft transition-all">Send to concierge</button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { i: Phone, t: "Call", d: "+91 9147222025", s: "Mon–Sat · 10am – 8pm IST" },
                { i: Mail, t: "Write", d: "sales@harshartirealty.in", s: "Replies within 4 hours" },
                { i: MessageCircle, t: "WhatsApp", d: "Tap to chat", s: "Quickest channel" },
                { i: Calendar, t: "Appointment", d: "Book a private viewing", s: "On-site or virtual" },
                { i: MapPin, t: "Office", d: "Aurora Waterfront, GN 34/1, GN BLOCK, Salt lake Sector -V, 16th Floor, Unit - 1622, Beside IEM Ashram Building, Kolkata - 700091", s: "Visits by appointment" },
              ].map(({ i: Icon, t, d, s }) => (
                <div key={t} className="glass rounded-2xl p-6 flex items-start gap-5 hover:border-gold/40 transition-all">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold shrink-0"><Icon size={18} /></span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">{t}</p>
                    <p className="font-display text-lg mt-1">{d}</p>
                    <p className="text-xs text-foreground/50 mt-1">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}