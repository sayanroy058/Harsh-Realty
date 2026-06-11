export type Property = {
  slug: string;
  name: string;
  location: string;
  bhk: string;
  area: string;
  price: string;
  status: "ongoing" | "completed" | "new-launch";
  tag?: string;
  blurb?: string;
};

export const properties: Property[] = [
  { slug: "npr-visaaya", name: "NPR Visaaya", location: "Kankurgachi", bhk: "4BHK · 5BHK", area: "3,100 – 4,100 sq ft", price: "₹ 4.5 Cr", status: "new-launch", tag: "Featured" },
  { slug: "primarc-aadvika", name: "Primarc Aadvika", location: "Howrah", bhk: "3 – 5 BHK", area: "1,539 – 3,345 sq ft", price: "₹ 2.70 – 6.10 Cr", status: "new-launch", tag: "Featured" },
  { slug: "mirania-evara", name: "Mirania Evara", location: "EM Bypass", bhk: "3 – 4 BHK", area: "1,458 – 2,543 sq ft", price: "₹ 1.95 Cr", status: "ongoing" },
  { slug: "merlin-niyasa", name: "Merlin Niyasa", location: "EM Bypass", bhk: "3 – 4.5 BHK", area: "1,996 – 2,453 sq ft", price: "₹ 3.48 Cr", status: "ongoing" },
  { slug: "nidhara", name: "Nidhara", location: "New Alipore", bhk: "3 – 5 BHK", area: "1,914 – 3,645 sq ft", price: "₹ 2.57 Cr", status: "ongoing" },
  { slug: "ps-aurus", name: "PS Aurus", location: "EM Bypass", bhk: "3 – 5 BHK", area: "2,371 – 3,972 sq ft", price: "₹ 3.80 Cr", status: "ongoing" },
  { slug: "ps-sansara", name: "PS Sansara", location: "Howrah", bhk: "3 – 4 BHK", area: "2,515 – 3,364 sq ft", price: "₹ 3.30 Cr", status: "ongoing" },
  { slug: "ps-quintessa", name: "PS Quintessa", location: "Kankurgachi", bhk: "3 – 4 BHK", area: "1,366 – 3,966 sq ft", price: "₹ 3.76 Cr", status: "ongoing" },
  { slug: "merlin-f-residencies", name: "Merlin F Residencies", location: "Rajarhat", bhk: "3 BHK", area: "1,189 – 1,431 sq ft", price: "₹ 1.48 Cr", status: "completed" },
  { slug: "ps-navyom", name: "PS Navyom", location: "New Town", bhk: "3 BHK", area: "1,200 – 1,700 sq ft", price: "₹ 1.60 Cr", status: "completed" },
];

export const flagships = [
  {
    slug: "vinayak-21-acres",
    name: "Vinayak 21 Acres",
    tagline: "A township woven into the land",
    accent: "oklch(0.78 0.16 140)",
  },
  {
    slug: "godrej-blue",
    name: "Godrej Blue",
    tagline: "A residence borrowed from the water",
    accent: "oklch(0.7 0.18 235)",
  },
  {
    slug: "hoabl-the-sarayu",
    name: "HOABL The Sarayu",
    tagline: "A pilgrimage you can invest in",
    accent: "oklch(0.82 0.13 70)",
  },
] as const;

export const locations = [
  { name: "Central Kolkata", count: 1 },
  { name: "EM Bypass", count: 4 },
  { name: "Howrah", count: 2 },
  { name: "Kankurgachi", count: 3 },
  { name: "New Alipore", count: 4 },
  { name: "New Town", count: 6 },
  { name: "Rajarhat", count: 4 },
];