import { jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
function Counter({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1e3));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxs(motion.span, { ref, className: "font-display text-5xl md:text-6xl text-gradient-gold", children: [
    val.toLocaleString(),
    suffix
  ] });
}
export {
  Counter as C
};
