const galleryModules = import.meta.glob<string>(
  "../assets/property_images/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" },
);

const folderNameToSlug: Record<string, string> = {
  "Merlin Niyasa": "merlin-niyasa",
  "Mirania Evara": "mirania-evara",
  "NPR Visaaya": "npr-visaaya",
  "PS Aurus": "ps-aurus",
  "PS Sansara": "ps-sansara",
  "Primarc Aadvika": "primarc-aadvika",
  "SKDJ Nidhara": "nidhara",
};

const galleryBySlug: Record<string, string[]> = {};

for (const [path, url] of Object.entries(galleryModules)) {
  const match = path.match(/property_images\/([^/]+)\//);
  if (!match) continue;
  const folderName = match[1];
  const slug = folderNameToSlug[folderName];
  if (!slug) continue;
  (galleryBySlug[slug] ??= []).push(url);
}

for (const slug of Object.keys(galleryBySlug)) {
  galleryBySlug[slug].sort();
}

export const getPropertyGalleryImages = (slug: string): string[] =>
  galleryBySlug[slug] ?? [];

export const slugs = Object.keys(galleryBySlug);
