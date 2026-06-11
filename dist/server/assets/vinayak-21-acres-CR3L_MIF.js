import { jsxs, jsx } from "react/jsx-runtime";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { v as vinayak, E as EnquiryForm } from "./router-BSGwyunL.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { C as Counter } from "./Counter-BtrLPyjy.js";
import { Leaf, TreePine, Sun, Mountain } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
const accent = "oklch(0.78 0.16 140)";
function Vinayak() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  return /* @__PURE__ */ jsxs("div", { style: {
    ["--gold"]: accent,
    ["--gold-soft"]: "oklch(0.86 0.15 140)"
  }, children: [
    /* @__PURE__ */ jsxs("section", { ref, className: "relative h-[100svh] overflow-hidden", children: [
      /* @__PURE__ */ jsxs(motion.div, { style: {
        y,
        scale
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: vinayak, alt: "Vinayak 21 Acres aerial", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
          background: `linear-gradient(180deg, ${accent}30 0%, oklch(0.13 0.02 250 / 0.4) 60%, oklch(0.13 0.02 250) 100%)`
        } })
      ] }),
      Array.from({
        length: 8
      }).map((_, i) => /* @__PURE__ */ jsx(motion.div, { className: "absolute", style: {
        left: `${10 + i * 11}%`,
        top: `${15 + i * 7 % 60}%`,
        color: accent,
        opacity: 0.4
      }, animate: {
        y: [0, -20, 0],
        rotate: [0, 15, 0]
      }, transition: {
        duration: 6 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }, children: /* @__PURE__ */ jsx(Leaf, { size: 24 }) }, i)),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24", children: [
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4,
          duration: 1
        }, className: "text-xs tracking-[0.4em] uppercase mb-6", style: {
          color: accent
        }, children: "— Flagship 01 · 21 acres in green Bengal" }),
        /* @__PURE__ */ jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.6,
          duration: 1.2
        }, className: "font-display text-[12vw] md:text-[7vw] leading-[0.95]", children: [
          "Vinayak",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic", style: {
            color: accent
          }, children: "21 Acres" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1,
          duration: 1
        }, className: "mt-8 max-w-md text-foreground/75 italic", children: "A township woven into the land. Walk past the gate and the city falls away." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-6", style: {
          color: accent
        }, children: "— The land" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-7xl leading-tight max-w-4xl", children: [
          "Twenty-one acres. ",
          /* @__PURE__ */ jsx("span", { className: "italic", style: {
            color: accent
          }, children: "Forty-thousand" }),
          " trees promised."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 grid md:grid-cols-4 gap-8", children: [[21, " ac", "Total area"], [40, "k+", "Trees planted"], [60, "%", "Open land"], [120, "+", "Plots"]].map(([n, s, l]) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "border-t pt-6", style: {
        borderColor: `${accent}40`
      }, children: [
        /* @__PURE__ */ jsx(Counter, { to: n, suffix: s }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-foreground/60", children: l })
      ] }) }, l)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl glass-strong rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center", style: {
      borderColor: `${accent}30`
    }, children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-4", style: {
          color: accent
        }, children: "— Masterplan" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Explore by zone." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/65", children: "A living masterplan — green belts, plot availability, water bodies and amenity clusters, all in one view." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 gap-4 text-sm", children: [{
          i: TreePine,
          t: "Green Belt",
          c: "8 acres"
        }, {
          i: Sun,
          t: "Plot zones",
          c: "4 clusters"
        }, {
          i: Mountain,
          t: "Water bodies",
          c: "2 lakes"
        }, {
          i: Leaf,
          t: "Amenities",
          c: "Clubhouse"
        }].map(({
          i: Icon,
          t,
          c
        }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Icon, { size: 18, style: {
            color: accent
          } }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: t }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/50", children: c })
          ] })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-square rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 400", className: "w-full h-full", children: [
        /* @__PURE__ */ jsx("rect", { width: "400", height: "400", fill: "oklch(0.18 0.06 140)" }),
        /* @__PURE__ */ jsx("path", { d: "M40 60 Q200 100 360 80 L360 340 Q200 300 40 320 Z", fill: accent, fillOpacity: "0.2" }),
        Array.from({
          length: 24
        }).map((_, i) => {
          const x = 60 + i % 6 * 50;
          const y2 = 80 + Math.floor(i / 6) * 60;
          const avail = i % 3 !== 0;
          return /* @__PURE__ */ jsx("rect", { x, y: y2, width: 36, height: 42, fill: avail ? accent : "oklch(0.3 0.02 140)", fillOpacity: avail ? 0.7 : 0.3, rx: "3" }, i);
        }),
        /* @__PURE__ */ jsx("text", { x: "200", y: "380", textAnchor: "middle", fill: "currentColor", fontSize: "10", className: "fill-foreground/50 uppercase tracking-widest", children: "Live masterplan · hover plots" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(InvestmentCalc, { accent }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: interior, alt: "Lifestyle", className: "h-full w-full object-cover", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.15, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-4", style: {
          color: accent
        }, children: "— Lifestyle" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl leading-tight", children: [
          "A morning here is a ",
          /* @__PURE__ */ jsx("span", { className: "italic", style: {
            color: accent
          }, children: "long one" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-foreground/70 leading-relaxed", children: "Walking trails through native forest. Sunrise yoga on the lake deck. An organic farmer's table on Sundays. The township is built for the unhurried hours the city has forgotten." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl glass-strong rounded-3xl p-10", children: /* @__PURE__ */ jsx(EnquiryForm, { name: "Vinayak 21 Acres" }) }) })
  ] });
}
function InvestmentCalc({
  accent: accent2
}) {
  const [size, setSize] = useState(2400);
  const rate = 6500;
  const value = size * rate;
  const fiveYr = value * 1.65;
  return /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-4", style: {
        color: accent2
      }, children: "— Growth calculator" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl", children: [
        "If you buy ",
        /* @__PURE__ */ jsx("span", { className: "italic", style: {
          color: accent2
        }, children: "today" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "mt-12 glass rounded-3xl p-10", children: [
      /* @__PURE__ */ jsxs("label", { className: "text-xs tracking-[0.3em] uppercase text-foreground/50", children: [
        "Plot size: ",
        /* @__PURE__ */ jsxs("span", { className: "text-foreground", children: [
          size.toLocaleString(),
          " sq ft"
        ] })
      ] }),
      /* @__PURE__ */ jsx("input", { type: "range", min: "1200", max: "6000", step: "100", value: size, onChange: (e) => setSize(Number(e.target.value)), className: "w-full mt-4 accent-[oklch(0.78_0.16_140)]" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid sm:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-foreground/40", children: "Today's value" }),
          /* @__PURE__ */ jsxs("p", { className: "font-display text-3xl mt-2", style: {
            color: accent2
          }, children: [
            "₹ ",
            (value / 1e7).toFixed(2),
            " Cr"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-foreground/40", children: "In 5 years*" }),
          /* @__PURE__ */ jsxs("p", { className: "font-display text-3xl mt-2", style: {
            color: accent2
          }, children: [
            "₹ ",
            (fiveYr / 1e7).toFixed(2),
            " Cr"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-foreground/40", children: "Projected IRR" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl mt-2", style: {
            color: accent2
          }, children: "13%" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-foreground/40 mt-6", children: "*Based on micro-market 5-yr CAGR. Not a guaranteed forecast." })
    ] }) })
  ] }) });
}
export {
  Vinayak as component
};
