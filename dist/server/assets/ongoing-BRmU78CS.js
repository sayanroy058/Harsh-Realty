import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { p as properties } from "./router-BSGwyunL.js";
import { motion } from "framer-motion";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import "@tanstack/react-query";
import "react";
import "lucide-react";
import "lenis";
function Ongoing() {
  const list = properties.filter((p) => p.status === "ongoing");
  const imgs = [tower, heroCity, interior];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Active developments", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Under ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "construction" }),
      "."
    ] }), children: "Live progress on every site we currently represent. Drone walkthroughs, milestone tracking and structural updates — refreshed monthly." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl space-y-6", children: list.map((p, i) => {
      const progress = 35 + i * 12 % 55;
      return /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsx(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "group block glass rounded-3xl overflow-hidden hover:border-gold/40 transition-all", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-0", children: [
        /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/3] md:aspect-auto overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: imgs[i % 3], alt: p.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-gold mb-2", children: p.location }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl group-hover:text-gold transition-colors", children: p.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground/60 mt-2", children: [
                p.bhk,
                " · ",
                p.area
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-gold", children: p.price })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground/55", children: "Construction progress" }),
              /* @__PURE__ */ jsxs("span", { className: "text-gold font-display", children: [
                progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-px bg-gold/15 relative overflow-hidden rounded-full", children: /* @__PURE__ */ jsx(motion.div, { initial: {
              width: 0
            }, whileInView: {
              width: `${progress}%`
            }, viewport: {
              once: true
            }, transition: {
              duration: 1.5,
              ease: "easeOut"
            }, className: "absolute inset-y-0 left-0 bg-gradient-to-r from-gold/60 to-gold", style: {
              height: 2
            } }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-4 gap-2 text-xs", children: ["Excavation", "Structure", "Finishing", "Handover"].map((m, j) => /* @__PURE__ */ jsx("div", { className: `text-center py-2 rounded-md border ${j * 25 < progress ? "border-gold/40 text-gold" : "border-foreground/10 text-foreground/30"}`, children: m }, m)) })
          ] })
        ] })
      ] }) }) }, p.slug);
    }) }) })
  ] });
}
export {
  Ongoing as component
};
