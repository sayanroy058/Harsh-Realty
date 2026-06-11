import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { notFound, Link } from "@tanstack/react-router";
import { R as Route, p as properties } from "./router-BSGwyunL.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { motion } from "framer-motion";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { Check, Download } from "lucide-react";
import "@tanstack/react-query";
import "react";
import "lenis";
function ProjectDetail() {
  const {
    slug
  } = Route.useParams();
  const p = properties.find((x) => x.slug === slug);
  if (!p) throw notFound();
  const gallery = [interior, tower, heroCity, interior, tower];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[80vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(motion.img, { initial: {
        scale: 1.15
      }, animate: {
        scale: 1
      }, transition: {
        duration: 2,
        ease: [0.2, 0.8, 0.2, 1]
      }, src: tower, alt: p.name, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-ink/40 to-ink/30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20", children: [
        /* @__PURE__ */ jsx(Link, { to: "/projects", className: "text-xs tracking-[0.3em] uppercase text-gold mb-6 hover:underline", children: "← All projects" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-gold mb-4", children: p.location }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1
        }, className: "font-display text-6xl md:text-8xl leading-[0.95]", children: p.name }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-12 text-sm", children: [["Configuration", p.bhk], ["Area", p.area], ["Starting", p.price], ["Status", p.status]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-foreground/40", children: k }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-lg text-gold capitalize", children: v })
        ] }, k)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-gold mb-4", children: "— Overview" }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-5xl leading-tight", children: [
          "A residence designed for ",
          /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "long evenings" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-foreground/70 leading-relaxed", children: [
          p.name,
          " is a ",
          p.bhk,
          " residence in ",
          p.location,
          ", conceived for buyers who prize ceiling height, cross-ventilation and a neighbourhood that ages gracefully. Floor plates have been designed around natural light, with deep balconies and double-glazed joinery."
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[600px]", children: gallery.map((g, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, className: i === 0 ? "row-span-2 col-span-2" : "", children: /* @__PURE__ */ jsxs("div", { className: "relative h-full overflow-hidden rounded-2xl group", children: [
      /* @__PURE__ */ jsx("img", { src: g, alt: "", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" })
    ] }) }, i)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl mb-12", children: "Amenities" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: ["Sky lounge", "Infinity pool", "Library", "Concierge", "Spa & sauna", "Co-working", "EV charging", "Children's atelier"].map((a) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-xl p-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Check, { size: 16, className: "text-gold" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: a })
      ] }) }, a)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-gold mb-4", children: "— Brochure" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl", children: [
          "Take ",
          p.name,
          " home with you."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-foreground/65", children: "Download the full dossier — floor plans, specifications and pricing." }),
        /* @__PURE__ */ jsxs("button", { className: "mt-8 inline-flex items-center gap-3 rounded-full bg-gold text-ink px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all", children: [
          /* @__PURE__ */ jsx(Download, { size: 16 }),
          " Download Brochure"
        ] })
      ] }),
      /* @__PURE__ */ jsx(EnquiryForm, { name: p.name })
    ] }) })
  ] });
}
function EnquiryForm({
  name
}) {
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
  }, className: "grid gap-3", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-xs tracking-[0.3em] uppercase text-gold", children: [
      "Enquire about ",
      name
    ] }),
    /* @__PURE__ */ jsx("input", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors", placeholder: "Your name" }),
    /* @__PURE__ */ jsx("input", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors", placeholder: "Email or phone" }),
    /* @__PURE__ */ jsx("textarea", { rows: 3, className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none", placeholder: "Tell us about your home" }),
    /* @__PURE__ */ jsx("button", { className: "mt-2 rounded-full bg-gold text-ink py-3 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all", children: "Request callback" })
  ] });
}
export {
  EnquiryForm,
  ProjectDetail as component
};
