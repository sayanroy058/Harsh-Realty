import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { v as vinayak } from "./router-BSGwyunL.js";
import "framer-motion";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "lenis";
const posts = [{
  t: "Why EM Bypass is Kolkata's quietest blue chip",
  c: "Market",
  d: "Dec 2025",
  read: "8 min",
  img: tower,
  featured: true
}, {
  t: "Reading a floor plan like an architect",
  c: "Guides",
  d: "Nov 2025",
  read: "6 min",
  img: interior
}, {
  t: "Ayodhya's long arc as an investable city",
  c: "Outlook",
  d: "Nov 2025",
  read: "10 min",
  img: heroCity
}, {
  t: "Townships vs towers: a buyer's mental model",
  c: "Guides",
  d: "Oct 2025",
  read: "5 min",
  img: vinayak
}, {
  t: "The discreet rise of NRI demand in New Town",
  c: "Market",
  d: "Oct 2025",
  read: "7 min",
  img: tower
}, {
  t: "What RERA actually protects (and what it does not)",
  c: "Legal",
  d: "Sep 2025",
  read: "9 min",
  img: interior
}];
function Blog() {
  const [hero, ...rest] = posts;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "The journal", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Field ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "notes" }),
      "."
    ] }), children: "Long-form dispatches from our research desk. Market intelligence, architectural literacy and quiet observations on the cities we love." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "group block relative aspect-[16/9] rounded-3xl overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: hero.img, alt: "", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 inset-x-0 p-8 md:p-12", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.3em] uppercase text-gold", children: [
          "Featured · ",
          hero.c
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-6xl mt-3 max-w-3xl group-hover:text-gold transition-colors", children: hero.t }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-foreground/60", children: [
          hero.d,
          " · ",
          hero.read
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: rest.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxs("a", { href: "#", className: "group block", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[5/4] overflow-hidden rounded-2xl mb-5", children: /* @__PURE__ */ jsx("img", { src: p.img, alt: "", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase text-gold", children: p.c }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mt-2 group-hover:text-gold transition-colors", children: p.t }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-xs text-foreground/50", children: [
        p.d,
        " · ",
        p.read
      ] })
    ] }) }, p.t)) }) })
  ] });
}
export {
  Blog as component
};
