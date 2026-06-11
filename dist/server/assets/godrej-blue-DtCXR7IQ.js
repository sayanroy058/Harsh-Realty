import { jsxs, jsx } from "react/jsx-runtime";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { g as godrej, E as EnquiryForm } from "./router-BSGwyunL.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { C as Counter } from "./Counter-BtrLPyjy.js";
import { Droplet, Waves, Sparkles, Building2 } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
const accent = "oklch(0.72 0.18 235)";
const accentSoft = "oklch(0.82 0.15 230)";
function Godrej() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);
  return /* @__PURE__ */ jsxs("div", { style: {
    ["--gold"]: accent,
    ["--gold-soft"]: accentSoft
  }, children: [
    /* @__PURE__ */ jsxs("section", { ref, className: "relative h-[100svh] overflow-hidden", children: [
      /* @__PURE__ */ jsxs(motion.div, { style: {
        y,
        filter: blur
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: godrej, alt: "Godrej Blue waterfront", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
          background: `linear-gradient(180deg, ${accent}30, oklch(0.1 0.05 235 / 0.6) 60%, oklch(0.13 0.02 250))`
        } })
      ] }),
      Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsx(motion.span, { className: "absolute rounded-full border pointer-events-none", style: {
        borderColor: accent,
        left: `${20 + i * 18}%`,
        bottom: `${20 + i * 5 % 30}%`,
        width: 80,
        height: 80
      }, animate: {
        scale: [1, 3],
        opacity: [0.5, 0]
      }, transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.8
      } }, i)),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24", children: [
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4
        }, className: "text-xs tracking-[0.4em] uppercase mb-6", style: {
          color: accentSoft
        }, children: "— Flagship 02 · Waterfront residence" }),
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
          "Godrej",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic", style: {
            color: accentSoft
          }, children: "Blue." })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1
        }, className: "mt-8 max-w-md text-foreground/75 italic", children: "A residence borrowed from the water. Glass, reflection, and the slow rhythm of tide." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 py-32 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: `radial-gradient(circle at 70% 30%, ${accent}20, transparent 60%)`
      } }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl relative", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase mb-6", style: {
            color: accentSoft
          }, children: "— Architecture" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-7xl leading-tight max-w-4xl", children: [
            "Floor-to-ceiling ",
            /* @__PURE__ */ jsx("span", { className: "italic", style: {
              color: accentSoft
            }, children: "glass" }),
            ", four-sided views."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-20 grid md:grid-cols-4 gap-8", children: [[42, " fl", "Tower floors"], [3, " BHK", "Configurations"], [180, "°", "Water view"], [12, "+", "Amenities"]].map(([n, s, l]) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "border-t pt-6", style: {
          borderColor: `${accent}40`
        }, children: [
          /* @__PURE__ */ jsx(Counter, { to: n, suffix: s }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-foreground/60", children: l })
        ] }) }, l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-6", children: [{
      img: interior,
      t: "Three-bedroom suite",
      d: "1,513 – 1,920 sq ft"
    }, {
      img: tower,
      t: "Sky home, 38th floor",
      d: "2,400 – 2,910 sq ft"
    }].map((c) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden group", children: [
      /* @__PURE__ */ jsx("img", { src: c.img, alt: c.t, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 inset-x-0 p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase", style: {
          color: accentSoft
        }, children: "Apartment showcase" }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl mt-2", children: c.t }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/65 mt-2", children: c.d })
      ] })
    ] }) }, c.t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl mb-12", children: [
        "Amenities, ",
        /* @__PURE__ */ jsx("span", { className: "italic", style: {
          color: accentSoft
        }, children: "fluid" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-4", children: [{
        i: Droplet,
        t: "Infinity pool"
      }, {
        i: Waves,
        t: "Spa & sauna"
      }, {
        i: Sparkles,
        t: "Sky lounge"
      }, {
        i: Building2,
        t: "Co-working"
      }, {
        i: Droplet,
        t: "Wellness deck"
      }, {
        i: Waves,
        t: "Library"
      }, {
        i: Sparkles,
        t: "Concierge"
      }, {
        i: Building2,
        t: "EV charging"
      }].map(({
        i: Icon,
        t
      }) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 hover:border-[var(--gold)]/60 transition-all", children: [
        /* @__PURE__ */ jsx(Icon, { size: 20, style: {
          color: accentSoft
        } }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-lg", children: t })
      ] }) }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl glass-strong rounded-3xl p-10", style: {
      borderColor: `${accent}40`
    }, children: /* @__PURE__ */ jsx(EnquiryForm, { name: "Godrej Blue" }) }) })
  ] });
}
export {
  Godrej as component
};
