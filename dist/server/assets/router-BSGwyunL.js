import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import Lenis from "lenis";
const appCss = "/assets/styles-B9tkP8QK.css";
const logo = "/assets/logo-BDbZ_HIQ.jpg";
function Logo({ compact = false }) {
  return /* @__PURE__ */ jsx(Link, { to: "/", className: "group flex items-center gap-3", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-xl bg-white/95 px-2 py-1 shadow-md ring-1 ring-black/10", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: logo,
      alt: "Harshaarti Realty",
      className: `${compact ? "h-8" : "h-10"} w-auto max-w-[180px] object-contain`
    }
  ) }) });
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/ongoing", label: "Ongoing" },
  { to: "/completed", label: "Completed" },
  { to: "/gallery", label: "Gallery" },
  { to: "/locations", label: "Locations" },
  { to: "/blog", label: "Insights" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${scrolled ? "glass-strong" : "bg-[oklch(0.12_0.02_250/0.45)] backdrop-blur-md border border-white/10"}`,
            children: [
              /* @__PURE__ */ jsx(Logo, {}),
              /* @__PURE__ */ jsx("nav", { className: "hidden xl:flex items-center gap-7 text-sm", children: links.map((l) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.to,
                  className: "text-foreground/95 hover:text-gold transition-colors relative",
                  activeProps: { className: "text-gold" },
                  activeOptions: { exact: l.to === "/" },
                  children: l.label
                },
                l.to
              )) }),
              /* @__PURE__ */ jsx("div", { className: "hidden xl:flex items-center gap-3", children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-ink transition-all duration-300",
                  children: "Enquire"
                }
              ) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen((v) => !v),
                  className: "xl:hidden rounded-full p-2 text-gold",
                  "aria-label": "Toggle menu",
                  children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsx("div", { className: "xl:hidden mt-3 glass-strong rounded-3xl p-6 animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "text-foreground/80 hover:text-gold text-base",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-full border border-gold/40 px-5 py-2 text-center text-xs uppercase tracking-[0.2em] text-gold",
              children: "Enquire"
            }
          )
        ] }) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 border-t border-gold/15 bg-[oklch(0.1_0.02_250)]", children: [
    /* @__PURE__ */ jsx("div", { className: "hairline absolute inset-x-0 top-0" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-foreground/65", children: "Harshaarti Realty curates rare residential addresses across Kolkata and India's most coveted growth corridors — a private practice for buyers, sellers and investors of distinction." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex gap-3", children: [Instagram, Facebook, Linkedin].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-all",
            children: /* @__PURE__ */ jsx(Icon, { size: 16 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-5", children: "Navigate" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm text-foreground/70", children: [
          ["About", "/about"],
          ["Projects", "/projects"],
          ["Ongoing", "/ongoing"],
          ["Completed", "/completed"],
          ["Gallery", "/gallery"],
          ["Insights", "/blog"],
          ["Careers", "/careers"]
        ].map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: h, className: "hover:text-gold transition-colors", children: l }) }, h)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-5", children: "Reach" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-foreground/70", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-0.5 text-gold shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Kolkata, West Bengal, India" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { size: 16, className: "mt-0.5 text-gold shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "+91 98 0000 0000" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-0.5 text-gold shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "concierge@harshartirealty.in" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gold/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/40", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Harsh Arti Realty Pvt. Ltd. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "RERA Compliant · Crafted with intent" })
    ] }) })
  ] });
}
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;
    const tick = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Harshaarti Realty — Rare Addresses, Curated" },
      { name: "description", content: "Harshaarti Realty curates rare residential addresses across Kolkata and India's most coveted growth corridors." },
      { name: "author", content: "Harsh Arti Realty Pvt. Ltd." },
      { property: "og:title", content: "Harshaarti Realty — Rare Addresses, Curated" },
      { property: "og:description", content: "Harshaarti Realty curates rare residential addresses across Kolkata and India's most coveted growth corridors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Harshaarti Realty — Rare Addresses, Curated" },
      { name: "twitter:description", content: "Harshaarti Realty curates rare residential addresses across Kolkata and India's most coveted growth corridors." }
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const vinayak = "/assets/vinayak-hero-DPDNC_le.jpg";
const $$splitComponentImporter$d = () => import("./vinayak-21-acres-CR3L_MIF.js");
const Route$d = createFileRoute("/vinayak-21-acres")({
  head: () => ({
    meta: [{
      title: "Vinayak 21 Acres — A township woven into the land"
    }, {
      name: "description",
      content: "21 acres of green-belt township living. Plots, masterplan and lifestyle."
    }, {
      property: "og:title",
      content: "Vinayak 21 Acres"
    }, {
      property: "og:description",
      content: "A flagship township by Harshaarti Realty — nature, openness, slow luxury."
    }, {
      property: "og:image",
      content: vinayak
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./projects-CMfLnIBe.js");
const Route$c = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Harshaarti Realty"
    }, {
      name: "description",
      content: "Explore curated residential projects across Kolkata's premium corridors."
    }, {
      property: "og:title",
      content: "Projects — Harshaarti Realty"
    }, {
      property: "og:description",
      content: "Apartments, villas and townships across Kolkata."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./ongoing-BRmU78CS.js");
const Route$b = createFileRoute("/ongoing")({
  head: () => ({
    meta: [{
      title: "Ongoing Projects — Harshaarti Realty"
    }, {
      name: "description",
      content: "Active developments under construction across Kolkata, with live progress tracking."
    }, {
      property: "og:title",
      content: "Ongoing Projects — Harshaarti Realty"
    }, {
      property: "og:description",
      content: "Live construction progress and completion forecasts."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./locations-C2WdSuM4.js");
const Route$a = createFileRoute("/locations")({
  head: () => ({
    meta: [{
      title: "Locations — Harshaarti Realty"
    }, {
      name: "description",
      content: "Explore Kolkata's premium corridors — connectivity, infrastructure and investment outlook."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const sarayu = "/assets/sarayu-hero-CI11uwM-.jpg";
const $$splitComponentImporter$9 = () => import("./hoabl-the-sarayu-R2yrxZ8i.js");
const Route$9 = createFileRoute("/hoabl-the-sarayu")({
  head: () => ({
    meta: [{
      title: "HOABL The Sarayu — Ayodhya · A pilgrimage you can invest in"
    }, {
      name: "description",
      content: "Heritage land plots on the banks of the Sarayu, Ayodhya. A spiritual and investment journey."
    }, {
      property: "og:title",
      content: "HOABL The Sarayu — Ayodhya"
    }, {
      property: "og:description",
      content: "Premium investment in Ayodhya's growth corridor."
    }, {
      property: "og:image",
      content: sarayu
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const godrej = "/assets/godrej-hero-CH4_sv-U.jpg";
const $$splitComponentImporter$8 = () => import("./godrej-blue-DtCXR7IQ.js");
const Route$8 = createFileRoute("/godrej-blue")({
  head: () => ({
    meta: [{
      title: "Godrej Blue — A residence borrowed from the water"
    }, {
      name: "description",
      content: "Waterfront luxury residences. Glass architecture, liquid interiors, premium living."
    }, {
      property: "og:title",
      content: "Godrej Blue"
    }, {
      property: "og:description",
      content: "A flagship waterfront experience by Harshaarti Realty."
    }, {
      property: "og:image",
      content: godrej
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./gallery-ASdAh3MS.js");
const Route$7 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Harshaarti Realty"
    }, {
      name: "description",
      content: "Cinematic photography from our residences, towers and drone walkthroughs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-5H26mQbi.js");
const Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Harshaarti Realty"
    }, {
      name: "description",
      content: "Reach our concierge. Private appointments, callbacks and WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./completed-BbgrWkSi.js");
const Route$5 = createFileRoute("/completed")({
  head: () => ({
    meta: [{
      title: "Completed Projects — Harshaarti Realty"
    }, {
      name: "description",
      content: "Delivered residences and the families now living in them — success stories from across Kolkata."
    }, {
      property: "og:title",
      content: "Completed Projects — Harshaarti Realty"
    }, {
      property: "og:description",
      content: "Before-and-after, testimonials and finished addresses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./careers-QlBsSStF.js");
const Route$4 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Harshaarti Realty"
    }, {
      name: "description",
      content: "Join a private real-estate practice in Kolkata. Open roles and culture."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-BUrBnkWh.js");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Insights — Harshaarti Realty"
    }, {
      name: "description",
      content: "Market insights, real-estate trends and editorial dispatches from our research desk."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-NxMgsHP2.js");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Harshaarti Realty"
    }, {
      name: "description",
      content: "A private real-estate practice founded in Kolkata, curating premium residences with stewardship and discretion."
    }, {
      property: "og:title",
      content: "About Harshaarti Realty"
    }, {
      property: "og:description",
      content: "Our story, vision and the people behind the practice."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-B7N7vf8t.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Harshaarti Realty — Rare Addresses, Curated"
    }, {
      name: "description",
      content: "A private real-estate practice curating premium apartments, villas and townships across Kolkata and India."
    }, {
      property: "og:title",
      content: "Harshaarti Realty"
    }, {
      property: "og:description",
      content: "Rare addresses, curated for connoisseurs of space, light and location."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const properties = [
  { slug: "npr-visaaya", name: "NPR Visaaya", location: "Kankurgachi", bhk: "4BHK · 5BHK", area: "3,100 – 4,100 sq ft", price: "₹ 4.5 Cr", status: "new-launch", tag: "Featured" },
  { slug: "primarc-aadvika", name: "Primarc Aadvika", location: "Howrah", bhk: "3 – 5 BHK", area: "1,539 – 3,345 sq ft", price: "₹ 2.70 – 6.10 Cr", status: "new-launch", tag: "Featured" },
  { slug: "mirania-evara", name: "Mirania Evara", location: "EM Bypass", bhk: "3 – 4 BHK", area: "1,458 – 2,543 sq ft", price: "₹ 1.95 Cr", status: "ongoing" },
  { slug: "merlin-niyasa", name: "Merlin Niyasa", location: "EM Bypass", bhk: "3 – 4.5 BHK", area: "1,996 – 2,453 sq ft", price: "₹ 3.48 Cr", status: "ongoing" },
  { slug: "nidhara", name: "Nidhara", location: "New Alipore", bhk: "3 – 5 BHK", area: "1,914 – 3,645 sq ft", price: "₹ 2.57 Cr", status: "ongoing" },
  { slug: "ps-aurus", name: "PS Aurus", location: "EM Bypass", bhk: "3 – 5 BHK", area: "2,371 – 3,972 sq ft", price: "₹ 3.80 Cr", status: "ongoing" },
  { slug: "ps-sansara", name: "PS Sansara", location: "Howrah", bhk: "3 – 4 BHK", area: "2,515 – 3,364 sq ft", price: "₹ 3.30 Cr", status: "ongoing" },
  { slug: "ps-quintessa", name: "PS Quintessa", location: "Kankurgachi", bhk: "3 – 4 BHK", area: "1,366 – 3,966 sq ft", price: "₹ 3.76 Cr", status: "ongoing" },
  { slug: "merlin-f-residencies", name: "Merlin F Residencies", location: "Rajarhat", bhk: "3 BHK", area: "1,189 – 1,431 sq ft", price: "₹ 1.48 Cr", status: "completed" },
  { slug: "ps-navyom", name: "PS Navyom", location: "New Town", bhk: "3 BHK", area: "1,200 – 1,700 sq ft", price: "₹ 1.60 Cr", status: "completed" }
];
const flagships = [
  {
    slug: "vinayak-21-acres",
    name: "Vinayak 21 Acres",
    tagline: "A township woven into the land",
    accent: "oklch(0.78 0.16 140)"
  },
  {
    slug: "godrej-blue",
    name: "Godrej Blue",
    tagline: "A residence borrowed from the water",
    accent: "oklch(0.7 0.18 235)"
  },
  {
    slug: "hoabl-the-sarayu",
    name: "HOABL The Sarayu",
    tagline: "A pilgrimage you can invest in",
    accent: "oklch(0.82 0.13 70)"
  }
];
const locations = [
  { name: "Central Kolkata", count: 1 },
  { name: "EM Bypass", count: 4 },
  { name: "Howrah", count: 2 },
  { name: "Kankurgachi", count: 3 },
  { name: "New Alipore", count: 4 },
  { name: "New Town", count: 6 },
  { name: "Rajarhat", count: 4 }
];
const $$splitComponentImporter = () => import("./projects._slug-OURNW41I.js");
const Route = createFileRoute("/projects/$slug")({
  head: ({
    params
  }) => {
    const p = properties.find((x) => x.slug === params.slug);
    return {
      meta: [{
        title: `${p?.name ?? "Project"} — Harshaarti Realty`
      }, {
        name: "description",
        content: `${p?.name} at ${p?.location}. ${p?.bhk}, ${p?.area}.`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
const Vinayak21AcresRoute = Route$d.update({
  id: "/vinayak-21-acres",
  path: "/vinayak-21-acres",
  getParentRoute: () => Route$e
});
const ProjectsRoute = Route$c.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$e
});
const OngoingRoute = Route$b.update({
  id: "/ongoing",
  path: "/ongoing",
  getParentRoute: () => Route$e
});
const LocationsRoute = Route$a.update({
  id: "/locations",
  path: "/locations",
  getParentRoute: () => Route$e
});
const HoablTheSarayuRoute = Route$9.update({
  id: "/hoabl-the-sarayu",
  path: "/hoabl-the-sarayu",
  getParentRoute: () => Route$e
});
const GodrejBlueRoute = Route$8.update({
  id: "/godrej-blue",
  path: "/godrej-blue",
  getParentRoute: () => Route$e
});
const GalleryRoute = Route$7.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const CompletedRoute = Route$5.update({
  id: "/completed",
  path: "/completed",
  getParentRoute: () => Route$e
});
const CareersRoute = Route$4.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$e
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$e
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const ProjectsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProjectsRoute
});
const ProjectsRouteChildren = {
  ProjectsSlugRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  CareersRoute,
  CompletedRoute,
  ContactRoute,
  GalleryRoute,
  GodrejBlueRoute,
  HoablTheSarayuRoute,
  LocationsRoute,
  OngoingRoute,
  ProjectsRoute: ProjectsRouteWithChildren,
  Vinayak21AcresRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  EnquiryForm as E,
  Route as R,
  flagships as f,
  godrej as g,
  locations as l,
  properties as p,
  router as r,
  sarayu as s,
  vinayak as v
};
