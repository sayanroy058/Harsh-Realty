import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const jobs = [{
  t: "Senior Buyer's Advisor",
  l: "Kolkata · Full-time",
  d: "Represent private buyers across our premium corridors. 5+ yrs in luxury real-estate."
}, {
  t: "NRI Relationship Lead",
  l: "Kolkata · Hybrid",
  d: "Own the NRI desk end to end — outreach, virtual tours, documentation."
}, {
  t: "Architectural Researcher",
  l: "Kolkata · Full-time",
  d: "Build our editorial library of floor-plan and developer dossiers."
}, {
  t: "Brand & Photography Lead",
  l: "Kolkata · Full-time",
  d: "Direct the visual language of every listing we represent."
}];
function Careers() {
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Careers", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Join a ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "quiet" }),
      " practice."
    ] }), children: "We hire slowly and rarely. If real estate is something you read about in the evening, we should talk." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-3 gap-4", children: [["Stewardship", "We are paid only when the client is right."], ["Restraint", "We do not market what we have not vetted."], ["Books", "Every team member gets a quarterly book budget."]].map(([t, d]) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-7", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-gold", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/65", children: d })
    ] }) }, t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl mb-12", children: "Open positions" }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-gold/15", children: jobs.map((j, i) => /* @__PURE__ */ jsxs("div", { className: "border-b border-gold/15", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "w-full py-8 flex justify-between items-center text-left group", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl md:text-3xl group-hover:text-gold transition-colors", children: j.t }),
            /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.3em] uppercase text-foreground/40 mt-2", children: j.l })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold transition-transform ${open === i ? "rotate-45 bg-gold text-ink" : ""}`, children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open === i && /* @__PURE__ */ jsx(motion.div, { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, exit: {
          height: 0,
          opacity: 0
        }, className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "pb-8 max-w-2xl text-foreground/70", children: [
          /* @__PURE__ */ jsx("p", { children: j.d }),
          /* @__PURE__ */ jsx("button", { className: "mt-5 rounded-full bg-gold text-ink px-6 py-2 text-xs uppercase tracking-[0.2em]", children: "Apply now" })
        ] }) }) })
      ] }, i)) })
    ] }) })
  ] });
}
export {
  Careers as component
};
