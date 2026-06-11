import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
function PageHero({ eyebrow, title, accent, children, image }) {
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-40 pb-24 px-6 overflow-hidden", children: [
    image && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "absolute inset-0 h-full w-full object-cover opacity-30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-gold" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-xs tracking-[0.4em] uppercase mb-6",
          style: { color: accent ?? "var(--gold)" },
          children: [
            "— ",
            eyebrow
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.15 },
          className: "font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl",
          children: title
        }
      ),
      children && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 0.5 },
          className: "mt-10 max-w-2xl text-foreground/70",
          children
        }
      )
    ] })
  ] });
}
export {
  PageHero as P
};
