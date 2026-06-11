import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { C as Counter } from "./Counter-BtrLPyjy.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import "framer-motion";
import "react";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "The practice", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { children: "An atelier for " }),
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "homes that last." })
    ] }), children: "Harsh Arti Realty Pvt. Ltd. is a private, family-led practice that represents buyers, sellers and investors across Kolkata's most considered addresses. We believe a home is the longest-held asset most families ever own — and we treat each transaction with that gravity." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl aspect-[4/5]", children: /* @__PURE__ */ jsx("img", { src: interior, alt: "Founder office", className: "h-full w-full object-cover", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Founder's vision" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl leading-tight", children: [
          '"We do not sell square footage. We safeguard ',
          /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "decisions." }),
          '"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-foreground/70 leading-relaxed", children: "Founded with the conviction that Kolkata deserves an advisory firm measured by stewardship rather than volume. Today the same principle governs every listing we represent — from a 1,200 sq ft residence in Rajarhat to a 4,000 sq ft sky home on EM Bypass." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 flex gap-12", children: [["12+", "Years"], ["800+", "Families"], ["7", "Corridors"]].map(([n, l]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-gold", children: n }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/50 mt-1 tracking-wider uppercase", children: l })
        ] }, l)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl mb-16", children: "Our charter" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        t: "Vision",
        d: "To be India's most trusted private real-estate practice — known for restraint, taste and long-term thinking."
      }, {
        t: "Mission",
        d: "Match each buyer with the address that will appreciate as a life decision, not merely as an asset."
      }, {
        t: "Values",
        d: "Discretion. Stewardship. Architectural literacy. A standing distaste for the merely loud."
      }].map((v, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8 h-full", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-display text-6xl text-gold/30", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mt-4", children: v.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-foreground/65 text-sm leading-relaxed", children: v.d })
      ] }) }, v.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-32 bg-[oklch(0.11_0.02_250)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Recognition" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl mb-16", children: "Quiet awards." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [["Best Residential Advisor", "Bengal Property Awards, 2023"], ["Top NRI Advisory Partner", "Real Estate Excellence, 2022"], ["Featured Practice", "ET Realty Tribute, 2024"], ["RERA Compliance Hall of Honor", "2023"]].map(([t, s]) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6 border-t border-gold/20 py-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gold font-display text-2xl", children: "★" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/55 mt-1", children: s })
        ] })
      ] }) }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-3 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Counted" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Numbers we are willing to claim." })
      ] }),
      [[800, "+", "Families"], [25, "+", "Towers"], [12, "yr", "Practice"]].map(([n, s, l]) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx(Counter, { to: n, suffix: s }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-foreground/60", children: l })
      ] }) }, l))
    ] }) })
  ] });
}
export {
  About as component
};
