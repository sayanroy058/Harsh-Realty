import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { p as properties } from "./router-BSGwyunL.js";
import { i as interior } from "./interior-1-ei_wPa-c.js";
import { t as tower } from "./tower-night-DNSisEtq.js";
import { h as heroCity } from "./hero-city-ehAJQSZM.js";
import { useState } from "react";
import "framer-motion";
import "@tanstack/react-query";
import "lucide-react";
import "lenis";
function Completed() {
  const list = properties.filter((p) => p.status === "completed");
  const imgs = [interior, tower, heroCity];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Delivered", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Stories that have ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "moved in." })
    ] }), children: "A selection of completed homes. Each one is now occupied — many by clients who have returned for a second or third address." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsx(BeforeAfter, { before: tower, after: interior }) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [...list, ...properties.slice(0, 4)].map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsx(Link, { to: "/projects/$slug", params: {
      slug: p.slug
    }, className: "group block", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsx("img", { src: imgs[i % 3], alt: p.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 inset-x-0 p-6", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.3em] uppercase text-gold", children: [
          "Delivered · ",
          2020 + i % 5
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mt-2 group-hover:text-gold transition-colors", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/55 mt-1", children: p.location })
      ] })
    ] }) }) }, `${p.slug}-${i}`)) }) })
  ] });
}
function BeforeAfter({
  before,
  after
}) {
  const [pos, setPos] = useState(50);
  return /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/9] rounded-3xl overflow-hidden select-none", children: [
    /* @__PURE__ */ jsx("img", { src: before, alt: "Before", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", style: {
      clipPath: `inset(0 ${100 - pos}% 0 0)`
    }, children: /* @__PURE__ */ jsx("img", { src: after, alt: "After", className: "absolute inset-0 h-full w-full object-cover" }) }),
    /* @__PURE__ */ jsx("input", { type: "range", min: 0, max: 100, value: pos, onChange: (e) => setPos(Number(e.target.value)), className: "absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 bottom-0 w-px bg-gold pointer-events-none", style: {
      left: `${pos}%`
    }, children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-gold text-ink font-display", children: "↔" }) }),
    /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 text-xs tracking-[0.3em] uppercase text-foreground/80 bg-ink/60 backdrop-blur px-3 py-1 rounded-full", children: "Before" }),
    /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 text-xs tracking-[0.3em] uppercase text-foreground/80 bg-ink/60 backdrop-blur px-3 py-1 rounded-full", children: "After" })
  ] });
}
export {
  Completed as component
};
