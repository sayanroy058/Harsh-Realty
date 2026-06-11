import { jsxs, jsx } from "react/jsx-runtime";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { s as sarayu, E as EnquiryForm } from "./router-BSGwyunL.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { C as Counter } from "./Counter-BtrLPyjy.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lucide-react";
import "lenis";
const accent = "oklch(0.82 0.13 70)";
const accentSoft = "oklch(0.9 0.1 75)";
function Sarayu() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return /* @__PURE__ */ jsxs("div", { style: {
    ["--gold"]: accent,
    ["--gold-soft"]: accentSoft
  }, children: [
    /* @__PURE__ */ jsxs("section", { ref, className: "relative h-[100svh] overflow-hidden", children: [
      /* @__PURE__ */ jsxs(motion.div, { style: {
        y
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: sarayu, alt: "Ayodhya sunrise on the Sarayu", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
          background: `linear-gradient(180deg, oklch(0.85 0.12 60 / 0.2), oklch(0.2 0.04 50 / 0.6) 60%, oklch(0.13 0.02 250))`
        } })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { style: {
        y: sunY
      }, className: "absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { width: "500", height: "500", viewBox: "0 0 500 500", className: "opacity-30", children: /* @__PURE__ */ jsxs("g", { stroke: accent, strokeOpacity: "0.5", fill: "none", strokeWidth: "0.5", children: [
        Array.from({
          length: 8
        }).map((_, i) => /* @__PURE__ */ jsx("circle", { cx: "250", cy: "250", r: 50 + i * 25, transform: `rotate(${i * 22.5} 250 250)` }, i)),
        Array.from({
          length: 12
        }).map((_, i) => /* @__PURE__ */ jsx("line", { x1: "250", y1: "50", x2: "250", y2: "450", transform: `rotate(${i * 30} 250 250)` }, i))
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24", children: [
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4
        }, className: "text-xs tracking-[0.4em] uppercase mb-6", style: {
          color: accentSoft
        }, children: "— Flagship 03 · Ayodhya · A sacred address" }),
        /* @__PURE__ */ jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.6,
          duration: 1.4
        }, className: "font-display text-[12vw] md:text-[6.5vw] leading-[0.95]", children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground/70 text-xl tracking-[0.4em] uppercase block mb-4", children: "HOABL Presents" }),
          "The ",
          /* @__PURE__ */ jsx("span", { className: "italic", style: {
            color: accentSoft
          }, children: "Sarayu." })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1
        }, className: "mt-8 max-w-md text-foreground/75 italic", children: "A pilgrimage you can invest in. Plots on the riverfront of one of India's most ancient cities." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 py-32 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: `radial-gradient(circle at 50% 0%, ${accent}25, transparent 50%)`
      } }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl relative", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-6", style: {
            color: accentSoft
          }, children: "— The story" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-7xl leading-tight max-w-4xl", children: [
            "A 7,000-year-old city is ",
            /* @__PURE__ */ jsx("span", { className: "italic", style: {
              color: accentSoft
            }, children: "writing" }),
            " its next chapter."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "text-foreground/70 leading-relaxed text-lg", children: "Since the consecration of the Ram Mandir, Ayodhya is on a once-in-a-century investment arc. New airport, ring roads, riverfront redevelopment — and a tourism flow estimated at 50 million annually. The Sarayu places you on the right bank of all of it." }) }),
          /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-8", children: [[50, "M", "Annual visitors"], [22, "%", "5-yr CAGR"], [15, "min", "From airport"], [2024, "", "Possession"]].map(([n, s, l]) => /* @__PURE__ */ jsxs("div", { className: "border-t pt-4", style: {
            borderColor: `${accent}40`
          }, children: [
            /* @__PURE__ */ jsx(Counter, { to: n, suffix: s }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-foreground/55", children: l })
          ] }, l)) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl mb-12", children: [
        "A cultural ",
        /* @__PURE__ */ jsx("span", { className: "italic", style: {
          color: accentSoft
        }, children: "timeline" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [{
        y: "2024",
        t: "Ram Mandir consecration",
        d: "150M+ visitors in first year of opening."
      }, {
        y: "2025",
        t: "Maharishi Valmiki Intl. Airport",
        d: "Daily flights from 20+ cities."
      }, {
        y: "2026",
        t: "Sarayu riverfront completion",
        d: "5 km of promenade, ghats, plazas."
      }, {
        y: "2030",
        t: "Projected township maturity",
        d: "Schools, hospitals, hospitality online."
      }].map((e, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-8 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-4xl shrink-0 w-24", style: {
          color: accentSoft
        }, children: e.y }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 border-l pl-8 pb-8", style: {
          borderColor: `${accent}30`
        }, children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: e.t }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/60 mt-2", children: e.d })
        ] })
      ] }) }, e.y)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square rounded-[2.5rem] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: interior, alt: "", className: "h-full w-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
          background: `linear-gradient(135deg, transparent 50%, ${accent}40)`
        } })
      ] }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.15, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-4", style: {
          color: accentSoft
        }, children: "— Location dashboard" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl", children: [
          "Numbers worth ",
          /* @__PURE__ */ jsx("span", { className: "italic", style: {
            color: accentSoft
          }, children: "memorising" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-5", children: [["Airport", "15 min"], ["Ram Mandir", "12 min"], ["Sarayu Ghats", "Walking distance"], ["Lucknow", "2 hr by expressway"], ["Possession", "Q4 2026"]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-3", style: {
          borderColor: `${accent}25`
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground/60 text-sm", children: k }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg", style: {
            color: accentSoft
          }, children: v })
        ] }, k)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl glass-strong rounded-3xl p-10", style: {
      borderColor: `${accent}40`
    }, children: /* @__PURE__ */ jsx(EnquiryForm, { name: "HOABL The Sarayu" }) }) })
  ] });
}
export {
  Sarayu as component
};
