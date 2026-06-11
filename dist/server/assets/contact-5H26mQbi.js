import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-ByicarNM.js";
import { R as Reveal } from "./Reveal-D8XVvjTe.js";
import { Phone, Mail, MessageCircle, Calendar, MapPin } from "lucide-react";
import "framer-motion";
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Concierge", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "private" }),
      " line."
    ] }), children: "Tell us the city, the budget and the kind of evening you want from your home. We'll write back, never call uninvited." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "glass-strong rounded-3xl p-8 md:p-12 grid gap-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-gold mb-2", children: "— Smart enquiry" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx("input", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold", placeholder: "Full name" }),
          /* @__PURE__ */ jsx("input", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold", placeholder: "Phone" })
        ] }),
        /* @__PURE__ */ jsx("input", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold", placeholder: "Email" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("select", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold", children: [
            /* @__PURE__ */ jsx("option", { children: "Looking to buy" }),
            /* @__PURE__ */ jsx("option", { children: "Looking to sell" }),
            /* @__PURE__ */ jsx("option", { children: "Investment advisory" }),
            /* @__PURE__ */ jsx("option", { children: "NRI services" })
          ] }),
          /* @__PURE__ */ jsxs("select", { className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold", children: [
            /* @__PURE__ */ jsx("option", { children: "Budget · ₹1–3 Cr" }),
            /* @__PURE__ */ jsx("option", { children: "₹3–5 Cr" }),
            /* @__PURE__ */ jsx("option", { children: "₹5–10 Cr" }),
            /* @__PURE__ */ jsx("option", { children: "₹10 Cr+" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("textarea", { rows: 5, className: "bg-ink/40 border border-gold/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none", placeholder: "Tell us about the home you want" }),
        /* @__PURE__ */ jsx("button", { className: "mt-2 rounded-full bg-gold text-ink py-4 text-sm uppercase tracking-[0.3em] hover:bg-gold-soft transition-all", children: "Send to concierge" })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, className: "lg:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [{
        i: Phone,
        t: "Call",
        d: "+91 98 0000 0000",
        s: "Mon–Sat · 10am – 8pm IST"
      }, {
        i: Mail,
        t: "Write",
        d: "concierge@harshartirealty.in",
        s: "Replies within 4 hours"
      }, {
        i: MessageCircle,
        t: "WhatsApp",
        d: "Tap to chat",
        s: "Quickest channel"
      }, {
        i: Calendar,
        t: "Appointment",
        d: "Book a private viewing",
        s: "On-site or virtual"
      }, {
        i: MapPin,
        t: "Office",
        d: "Kolkata, West Bengal",
        s: "Visits by appointment"
      }].map(({
        i: Icon,
        t,
        d,
        s
      }) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 flex items-start gap-5 hover:border-gold/40 transition-all", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold shrink-0", children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-foreground/40", children: t }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-lg mt-1", children: d }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-foreground/50 mt-1", children: s })
        ] })
      ] }, t)) }) })
    ] }) })
  ] });
}
export {
  Contact as component
};
