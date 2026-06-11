import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { l as locations } from "./router-BSGwyunL.js";
import { Train, Plane, Building2, TrendingUp } from "lucide-react";
import { useState } from "react";
import "framer-motion";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
function Locations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Where we work", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Corridors, not ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "listings." })
    ] }), children: "We represent residences only in micro-markets we know intimately. Below: the streets, the train lines and the slow infrastructure stories that shape value." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl glass-strong rounded-[2.5rem] p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-gold mb-4", children: "— Map intelligence" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "A live map of our footprint." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/65", children: "Hover any corridor to see active listings, average ticket size and 3-year price trend." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-square w-full max-w-xl mx-auto", children: [
        /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 360", className: "w-full h-full", children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: "mapGlow", cx: "50%", cy: "50%", r: "55%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--gold)", stopOpacity: "0.2" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "transparent" })
          ] }) }),
          /* @__PURE__ */ jsx("rect", { x: "8", y: "24", width: "384", height: "300", rx: "28", fill: "none", stroke: "var(--gold)", strokeOpacity: "0.28" }),
          /* @__PURE__ */ jsx("rect", { x: "20", y: "36", width: "360", height: "276", rx: "24", fill: "url(#mapGlow)" }),
          /* @__PURE__ */ jsx("circle", { cx: "200", cy: "170", r: "58", fill: "none", stroke: "var(--gold)", strokeOpacity: "0.3" }),
          /* @__PURE__ */ jsx("circle", { cx: "200", cy: "170", r: "94", fill: "none", stroke: "var(--gold)", strokeOpacity: "0.18", strokeDasharray: "4 8" }),
          /* @__PURE__ */ jsx("path", { d: "M102 208 Q140 110 166 84 Q214 74 244 108 Q286 132 302 164 Q290 220 260 242 Q208 262 176 272 Q126 252 102 208 Z", fill: "none", stroke: "var(--gold)", strokeOpacity: "0.36", strokeDasharray: "5 8" }),
          locations.map((l, i) => {
            const a = i / locations.length * Math.PI * 2 - Math.PI / 2;
            const r = 96;
            const x = 200 + Math.cos(a) * r;
            const y = 170 + Math.sin(a) * r;
            const isActive = i === activeIndex;
            const nextA = (i + 1) % locations.length / locations.length * Math.PI * 2 - Math.PI / 2;
            const nx = 200 + Math.cos(nextA) * r;
            const ny = 170 + Math.sin(nextA) * r;
            return /* @__PURE__ */ jsxs("g", { children: [
              /* @__PURE__ */ jsx("path", { d: `M ${x} ${y} Q 200 170 ${nx} ${ny}`, stroke: "var(--gold)", strokeOpacity: "0.22", strokeWidth: "1", fill: "none" }),
              /* @__PURE__ */ jsxs("g", { onMouseEnter: () => setActiveIndex(i), className: "cursor-pointer", children: [
                /* @__PURE__ */ jsx("circle", { cx: x, cy: y, r: isActive ? 9 : 7, fill: "var(--ink)", stroke: "var(--gold)", strokeOpacity: isActive ? 0.9 : 0.55 }),
                /* @__PURE__ */ jsx("circle", { cx: x, cy: y, r: "3.2", fill: "var(--gold)" }),
                /* @__PURE__ */ jsxs("circle", { cx: x, cy: y, r: "10", fill: "none", stroke: "var(--gold)", strokeOpacity: "0.4", children: [
                  /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "7;14;7", dur: "2.6s", repeatCount: "indefinite", begin: `${i * 0.25}s` }),
                  /* @__PURE__ */ jsx("animate", { attributeName: "stroke-opacity", values: "0.45;0;0.45", dur: "2.6s", repeatCount: "indefinite", begin: `${i * 0.25}s` })
                ] }),
                /* @__PURE__ */ jsx("text", { x, y: y - 14, textAnchor: "middle", className: `${isActive ? "fill-gold" : "fill-foreground/65"} font-sans uppercase tracking-[0.16em]`, fontSize: "10", children: l.name })
              ] })
            ] }, `${l.name}-link`);
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-[67%] w-[74%] -translate-x-1/2 rounded-2xl border border-gold/35 bg-[oklch(0.12_0.02_250/0.95)] p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.24em] text-gold/80", children: "Active Corridor" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-xl text-foreground", children: activeLocation.name }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-3 gap-2 text-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-foreground/50", children: "Listings" }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-gold", children: String(activeLocation.count).padStart(2, "0") })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-foreground/50", children: "Ticket" }),
              /* @__PURE__ */ jsxs("p", { className: "font-display text-lg text-gold", children: [
                "₹",
                (1.6 + activeIndex * 0.35).toFixed(1),
                "Cr"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-foreground/50", children: "3Y Trend" }),
              /* @__PURE__ */ jsxs("p", { className: "font-display text-lg text-gold", children: [
                "+",
                8 + activeIndex * 2,
                "%"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: locations.map((l, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-7 group hover:border-gold/50 transition-all h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: l.name }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-3xl text-gold", children: String(l.count).padStart(2, "0") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-foreground/65", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Train, { size: 14, className: "text-gold" }),
          " Metro within 1 km"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Plane, { size: 14, className: "text-gold" }),
          " Airport · 25 min"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Building2, { size: 14, className: "text-gold" }),
          " Schools & malls nearby"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(TrendingUp, { size: 14, className: "text-gold" }),
          " Growth · ",
          8 + i * 2,
          "% YoY"
        ] })
      ] })
    ] }) }, l.name)) }) })
  ] });
}
export {
  Locations as component
};
