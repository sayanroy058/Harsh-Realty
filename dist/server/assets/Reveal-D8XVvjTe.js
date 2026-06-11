import { jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } }
};
function Reveal({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      variants,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      transition: { delay },
      children
    }
  );
}
function FadeIn({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 1.2, delay },
      children
    }
  );
}
export {
  FadeIn as F,
  Reveal as R
};
