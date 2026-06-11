import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { v as vinayak, g as godrej, s as sarayu } from "./router-BSGwyunL.js";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
const cats = ["All", "Interiors", "Exteriors", "Drone"];
const media = [{
  src: interior,
  cat: "Interiors",
  h: "tall"
}, {
  src: tower,
  cat: "Exteriors",
  h: "wide"
}, {
  src: heroCity,
  cat: "Drone",
  h: "tall"
}, {
  src: vinayak,
  cat: "Drone",
  h: "wide"
}, {
  src: godrej,
  cat: "Exteriors",
  h: "tall"
}, {
  src: sarayu,
  cat: "Drone",
  h: "wide"
}, {
  src: interior,
  cat: "Interiors",
  h: "wide"
}, {
  src: tower,
  cat: "Exteriors",
  h: "tall"
}];
function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const list = cat === "All" ? media : media.filter((m) => m.cat === cat);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Gallery", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "light" }),
      " of our addresses."
    ] }), children: "Slow photography of finished interiors, dawn exteriors and drone studies — collected from across our portfolio." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-10", children: cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: `rounded-full border px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all ${cat === c ? "border-gold bg-gold text-ink" : "border-gold/30 text-foreground/70 hover:text-gold hover:border-gold/60"}`, children: c }, c)) }),
      /* @__PURE__ */ jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4", children: list.map((m, i) => /* @__PURE__ */ jsx(Reveal, { delay: i % 6 * 0.05, children: /* @__PURE__ */ jsx("button", { onClick: () => setOpen(m.src), className: "group block w-full overflow-hidden rounded-2xl break-inside-avoid", children: /* @__PURE__ */ jsx("img", { src: m.src, alt: "", loading: "lazy", className: `w-full transition-all duration-700 group-hover:scale-105 ${m.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover` }) }) }, `${m.src}-${i}`)) })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, onClick: () => setOpen(null), className: "fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl grid place-items-center p-6", children: [
      /* @__PURE__ */ jsx(motion.img, { initial: {
        scale: 0.95
      }, animate: {
        scale: 1
      }, exit: {
        scale: 0.95
      }, src: open, alt: "", className: "max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setOpen(null), className: "absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-gold text-ink", children: /* @__PURE__ */ jsx(X, {}) })
    ] }) })
  ] });
}
export {
  Gallery as component
};
