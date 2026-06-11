import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { f as flagships, s as sarayu, g as godrej, v as vinayak, p as properties } from "./router-BSGwyunL.js";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { R as Reveal, F as FadeIn } from "./Reveal-D8XVvjTe.js";
import { C as Counter } from "./Counter-BtrLPyjy.js";
import "@tanstack/react-query";
import "lenis";
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(Flagships, {}),
    /* @__PURE__ */ jsx(Showcase, {}),
    /* @__PURE__ */ jsx(Journey, {}),
    /* @__PURE__ */ jsx(Investment, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
function Hero() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative h-[100svh] overflow-hidden", children: [
    /* @__PURE__ */ jsxs(motion.div, { style: {
      y,
      scale
    }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: heroCity, alt: "Cinematic luxury cityscape at sunset", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-background" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-gold" })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { style: {
      opacity
    }, className: "relative z-10 h-full flex flex-col justify-end pb-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl w-full", children: [
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3,
        duration: 1
      }, className: "text-xs tracking-[0.4em] text-gold uppercase mb-8", children: "— Est. Kolkata · A private practice" }),
      /* @__PURE__ */ jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.5,
        duration: 1.2
      }, className: "font-display text-[14vw] md:text-[8.5vw] leading-[0.95] tracking-tight", children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "Rare addresses," }),
        /* @__PURE__ */ jsx("span", { className: "block italic text-gradient-gold", children: "curated." })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 1.1,
        duration: 1
      }, className: "mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8", children: [
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-foreground/70 text-sm md:text-base leading-relaxed", children: "Harshaarti Realty is a concierge for connoisseurs of space, light and location. Apartments, villas and townships across Kolkata and India's most coveted corridors." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "group inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all", children: [
            "Explore Portfolio ",
            /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, className: "transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm uppercase tracking-[0.2em] text-foreground hover:border-gold transition-all", children: "Private Concierge" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.5,
      duration: 1
    }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/40", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.4em] uppercase", children: "Scroll" }),
      /* @__PURE__ */ jsx("div", { className: "h-12 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" })
    ] })
  ] });
}
function Marquee() {
  const words = ["Kolkata", "•", "Howrah", "•", "Rajarhat", "•", "New Town", "•", "EM Bypass", "•", "Ayodhya", "•", "New Alipore", "•", "Kankurgachi", "•"];
  return /* @__PURE__ */ jsx("section", { className: "border-y border-gold/10 py-6 overflow-hidden bg-ink/40", children: /* @__PURE__ */ jsx("div", { className: "flex marquee whitespace-nowrap", children: [...Array(2)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "flex shrink-0 gap-12 px-6 font-display text-3xl text-foreground/30", children: words.map((w, j) => /* @__PURE__ */ jsx("span", { children: w }, `${i}-${j}`)) }, i)) }) });
}
function Stats() {
  const stats = [{
    n: 25,
    s: "+",
    l: "Curated residences"
  }, {
    n: 12,
    s: "+",
    l: "Years of practice"
  }, {
    n: 7,
    s: "",
    l: "Premium corridors"
  }, {
    n: 800,
    s: "+",
    l: "Families settled"
  }];
  return /* @__PURE__ */ jsx("section", { className: "relative py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— By the numbers" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl max-w-3xl leading-tight mb-20", children: [
        "A practice measured in ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "stewardship" }),
        ", not square footage."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "border-t border-gold/20 pt-6", children: [
      /* @__PURE__ */ jsx(Counter, { to: s.n, suffix: s.s }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-foreground/60", children: s.l })
    ] }) }, s.l)) })
  ] }) });
}
function Flagships() {
  const imgs = {
    "vinayak-21-acres": vinayak,
    "godrej-blue": godrej,
    "hoabl-the-sarayu": sarayu
  };
  return /* @__PURE__ */ jsx("section", { className: "relative py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Featured opportunities" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl max-w-2xl leading-tight", children: [
          "Three worlds. Three",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "flagship" }),
          " portals."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-sm text-foreground/60 text-sm", children: "Each flagship is its own digital experience — a different climate, a different mood, a different investment thesis." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-6", children: flagships.map((f, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.12, children: /* @__PURE__ */ jsxs(Link, { to: `/${f.slug}`, className: "group block relative h-[560px] overflow-hidden rounded-3xl", children: [
      /* @__PURE__ */ jsx("img", { src: imgs[f.slug], alt: f.name, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700", style: {
        background: `radial-gradient(circle at 50% 80%, ${f.accent}30, transparent 70%)`
      } }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-8 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.4em] text-gold uppercase", children: [
            "Flagship ",
            String(i + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all group-hover:bg-gold group-hover:text-ink group-hover:rotate-45", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl leading-tight", children: f.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-foreground/70 italic", children: f.tagline }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 h-px w-12 bg-gold transition-all duration-500 group-hover:w-32" })
        ] })
      ] })
    ] }) }, f.slug)) })
  ] }) });
}
function Showcase() {
  const featured = properties.slice(0, 6);
  return /* @__PURE__ */ jsx("section", { className: "relative py-32 px-6 bg-[oklch(0.11_0.02_250)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Active portfolio" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "New launches & quiet listings" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "text-sm text-gold border-b border-gold/40 hover:border-gold pb-1 flex items-center gap-2", children: [
        "All projects ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: featured.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsx(Link, { to: "/projects/$slug", params: {
      slug: p.slug
    }, className: "group block", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsx("img", { src: i % 3 === 0 ? interior : i % 3 === 1 ? tower : heroCity, alt: p.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" }),
      p.tag && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 rounded-full bg-gold text-ink px-3 py-1 text-[10px] uppercase tracking-[0.2em]", children: p.tag }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 inset-x-0 p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] text-gold uppercase mb-2", children: p.location }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl group-hover:text-gold transition-colors", children: p.name }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-between items-end text-xs text-foreground/70", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: p.bhk }),
            /* @__PURE__ */ jsx("p", { className: "mt-1", children: p.area })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-gold", children: p.price })
        ] })
      ] })
    ] }) }) }, p.slug)) })
  ] }) });
}
function Journey() {
  const items = [{
    year: "2012",
    t: "Founded in Kolkata",
    d: "A private brokerage with a single belief: addresses are heirlooms."
  }, {
    year: "2016",
    t: "First flagship",
    d: "Curated our first 50-unit luxury tower on EM Bypass."
  }, {
    year: "2020",
    t: "Beyond Bengal",
    d: "Expanded representation to pan-India developments."
  }, {
    year: "2024",
    t: "Digital concierge",
    d: "Launched the cinematic experience you are reading now."
  }];
  return /* @__PURE__ */ jsx("section", { className: "relative py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6 text-center", children: "— Architectural journey" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl text-center mb-20", children: [
        "An ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "unhurried" }),
        " timeline."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" }),
      items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: `relative flex items-center my-12 ${i % 2 ? "md:flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: `glass rounded-2xl p-6 max-w-sm ${i % 2 ? "md:ml-auto" : ""}`, children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-gold", children: it.year }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 text-xl font-display", children: it.t }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-foreground/60", children: it.d })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gold ring-4 ring-background animate-float" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1" })
      ] }) }, it.year))
    ] })
  ] }) });
}
function Investment() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-32 px-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl glass-strong rounded-[2.5rem] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[420px] md:h-auto", children: [
      /* @__PURE__ */ jsx("img", { src: tower, alt: "Investment opportunities", className: "h-full w-full object-cover", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-10 md:p-16 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Investment" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl leading-tight", children: [
        "Real estate, ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "re-thought" }),
        " as a long-form asset."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-foreground/70 leading-relaxed", children: "We help private buyers, NRIs and family offices identify residences with rare combinations of micro-market, build quality and developer pedigree." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-3 gap-6", children: [["IRR", "12–18%"], ["Horizon", "5–7 yr"], ["Cycle", "Off-market"]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] text-foreground/40 uppercase", children: k }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-xl text-gold", children: v })
      ] }, k)) }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 w-fit hover:border-gold", children: [
        "Schedule a private consultation ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] })
    ] })
  ] }) }) });
}
function Testimonials() {
  const t = [{
    q: "They found us a north-facing home in a building we did not know existed. That is the practice.",
    a: "Ananya Sen",
    r: "Resident, EM Bypass"
  }, {
    q: "Quietly the best buy-side advisors in Kolkata. They protect the buyer first, every time.",
    a: "Rohit Agarwal",
    r: "Family office principal"
  }, {
    q: "We bought sight-unseen from Dubai. Walkthrough, paperwork, registration — they choreographed all of it.",
    a: "Meera Kapoor",
    r: "NRI investor"
  }];
  return /* @__PURE__ */ jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6", children: "— Voices" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl mb-16 max-w-3xl", children: "Quiet praise from quiet people." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: t.map((x, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8 h-full", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-6xl text-gold leading-none", children: '"' }),
      /* @__PURE__ */ jsx("p", { className: "-mt-6 text-foreground/85 leading-relaxed italic", children: x.q }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-gold/15", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: x.a }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/50 mt-1", children: x.r })
      ] })
    ] }) }, i)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl text-center relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-gold blur-3xl opacity-50" }),
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] text-gold uppercase mb-6 relative", children: "— A standing invitation" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-8xl leading-[0.95] relative", children: [
        "Begin a ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "private" }),
        /* @__PURE__ */ jsx("br", {}),
        "conversation."
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-12 inline-flex items-center gap-3 rounded-full bg-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.3em] hover:bg-gold-soft transition-all relative group", children: [
        "Reach the concierge",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 18, className: "transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
      ] })
    ] })
  ] }) });
}
export {
  Index as component
};
