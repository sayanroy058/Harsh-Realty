import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { p as properties } from "./router-BSGwyunL.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "@tanstack/react-query";
import "lenis";
const filters = ["All", "New Launch", "Ongoing", "Completed"];
const imgs = [interior, tower, heroCity];
function Projects() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => {
    if (filter === "All") return properties;
    const map = {
      "New Launch": "new-launch",
      "Ongoing": "ongoing",
      "Completed": "completed"
    };
    return properties.filter((p) => p.status === map[filter]);
  }, [filter]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Portfolio", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "considered" }),
      " portfolio."
    ] }), children: "Each project below is one we represent personally. Use the filters to traverse by stage, or open any residence for a fuller dossier." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-12 sticky top-24 z-30 glass-strong rounded-full p-2 w-fit", children: filters.map((f) => /* @__PURE__ */ jsxs("button", { onClick: () => setFilter(f), className: `relative rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase transition-colors ${filter === f ? "text-ink" : "text-foreground/70 hover:text-gold"}`, children: [
        filter === f && /* @__PURE__ */ jsx(motion.span, { layoutId: "filter-bg", className: "absolute inset-0 rounded-full bg-gold", transition: {
          type: "spring",
          bounce: 0.2
        } }),
        /* @__PURE__ */ jsx("span", { className: "relative", children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -10
      }, transition: {
        duration: 0.5
      }, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p, i) => /* @__PURE__ */ jsx(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "group block", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: [
        /* @__PURE__ */ jsx("img", { src: imgs[i % 3], alt: p.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 rounded-full bg-ink/60 backdrop-blur border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold", children: p.status === "new-launch" ? "New Launch" : p.status }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-gold/0 border border-gold/40 text-gold transition-all group-hover:bg-gold group-hover:text-ink group-hover:rotate-45", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }) }),
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
      ] }) }, p.slug)) }, filter) })
    ] }) })
  ] });
}
export {
  Projects as component
};
