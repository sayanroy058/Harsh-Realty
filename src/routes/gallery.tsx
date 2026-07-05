import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import aerialHero from "@/assets/Gallery/aurus-aerial-hero.jpg";
import bedroomBlue from "@/assets/Gallery/aurus-bedroom-blue.jpg";
import bedroomMaster from "@/assets/Gallery/aurus-bedroom-master.jpg";
import bedroomNeutral from "@/assets/Gallery/aurus-bedroom-neutral.jpg";
import bedroomTwin from "@/assets/Gallery/aurus-bedroom-twin.jpg";
import cityAtNight from "@/assets/Gallery/aurus-city-at-night.jpg";
import duplexLiving from "@/assets/Gallery/aurus-duplex-living.jpg";
import gym from "@/assets/Gallery/aurus-gym.jpg";
import livingDining from "@/assets/Gallery/aurus-living-dining.jpg";
import livingRoom from "@/assets/Gallery/aurus-living-room.jpg";
import livingRoomEvening from "@/assets/Gallery/aurus-living-room-evening.jpg";
import lobby from "@/assets/Gallery/aurus-lobby.jpg";
import loungeCorridor from "@/assets/Gallery/aurus-lounge-corridor.jpg";
import pool from "@/assets/Gallery/aurus-pool.jpg";
import poolsideGarden from "@/assets/Gallery/aurus-poolside-garden.jpg";
import skyBalcony from "@/assets/Gallery/aurus-sky-balcony.jpg";
import skyLivingRoom from "@/assets/Gallery/aurus-sky-living-room.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — HarshArti Realty" },
      {
        name: "description",
        content: "Explore the exteriors, interiors and amenities of PS Aurus.",
      },
    ],
  }),
  component: Gallery,
});

type Category =
  | "All"
  | "Exteriors"
  | "Interiors"
  | "Aerial"
  | "Bedroom"
  | "Living Room"
  | "Amenities";
type GalleryItem = {
  src: string;
  alt: string;
  categories: Exclude<Category, "All">[];
  shape: "wide" | "tall" | "square";
};

const categories: { value: Category; label: string }[] = [
  { value: "All", label: "All" },
  { value: "Exteriors", label: "Exteriors" },
  { value: "Interiors", label: "Interiors" },
  { value: "Aerial", label: "Aerial" },
  { value: "Bedroom", label: "Bed Room" },
  { value: "Living Room", label: "Living Room" },
  { value: "Amenities", label: "Amenities" },
];

const media: GalleryItem[] = [
  {
    src: aerialHero,
    alt: "PS Aurus aerial exterior at dusk",
    categories: ["Exteriors", "Aerial"],
    shape: "tall",
  },
  {
    src: livingDining,
    alt: "PS Aurus living and dining space",
    categories: ["Interiors", "Living Room"],
    shape: "wide",
  },
  {
    src: duplexLiving,
    alt: "PS Aurus duplex living room",
    categories: ["Interiors", "Living Room"],
    shape: "wide",
  },
  {
    src: livingRoom,
    alt: "PS Aurus double-height living room",
    categories: ["Interiors", "Living Room"],
    shape: "wide",
  },
  {
    src: bedroomTwin,
    alt: "PS Aurus twin bedroom",
    categories: ["Interiors", "Bedroom"],
    shape: "wide",
  },
  {
    src: bedroomBlue,
    alt: "PS Aurus blue bedroom",
    categories: ["Interiors", "Bedroom"],
    shape: "wide",
  },
  {
    src: livingRoomEvening,
    alt: "PS Aurus evening living room",
    categories: ["Interiors", "Living Room"],
    shape: "wide",
  },
  {
    src: bedroomMaster,
    alt: "PS Aurus master bedroom",
    categories: ["Interiors", "Bedroom"],
    shape: "wide",
  },
  {
    src: bedroomNeutral,
    alt: "PS Aurus neutral bedroom",
    categories: ["Interiors", "Bedroom"],
    shape: "wide",
  },
  {
    src: gym,
    alt: "PS Aurus gymnasium",
    categories: ["Interiors", "Amenities"],
    shape: "wide",
  },
  {
    src: loungeCorridor,
    alt: "PS Aurus lounge corridor",
    categories: ["Interiors", "Amenities"],
    shape: "wide",
  },
  {
    src: skyLivingRoom,
    alt: "PS Aurus sky living room",
    categories: ["Interiors", "Living Room"],
    shape: "wide",
  },
  {
    src: lobby,
    alt: "PS Aurus entrance lobby",
    categories: ["Interiors", "Amenities"],
    shape: "wide",
  },
  {
    src: pool,
    alt: "PS Aurus swimming pool",
    categories: ["Exteriors", "Amenities"],
    shape: "wide",
  },
  {
    src: poolsideGarden,
    alt: "PS Aurus poolside garden",
    categories: ["Exteriors", "Amenities"],
    shape: "wide",
  },
  {
    src: skyBalcony,
    alt: "PS Aurus private sky balcony",
    categories: ["Exteriors", "Amenities"],
    shape: "square",
  },
  {
    src: cityAtNight,
    alt: "Kolkata city view from PS Aurus",
    categories: ["Exteriors", "Aerial"],
    shape: "wide",
  },
];

function Gallery() {
  const [category, setCategory] = useState<Category>("All");
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const list =
    category === "All"
      ? media
      : media.filter((item) => item.categories.includes(category));

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The <span className="italic text-gradient-gold">light</span> of our
            addresses.
          </>
        }
      >
        A curated collection of PS Aurus exteriors, interiors, private rooms and
        lifestyle amenities.
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item.value}
                onClick={() => setCategory(item.value)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                  category === item.value
                    ? "border-gold bg-gold text-ink"
                    : "border-gold/30 text-foreground/70 hover:border-gold/60 hover:text-gold"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
            {list.map((item, index) => (
              <Reveal key={item.src} delay={(index % 6) * 0.05}>
                <button
                  onClick={() => setOpen(item)}
                  className="group block w-full break-inside-avoid overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      item.shape === "tall"
                        ? "aspect-[3/4]"
                        : item.shape === "square"
                          ? "aspect-square"
                          : "aspect-[4/3]"
                    }`}
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-ink/95 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={open.src}
              alt={open.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setOpen(null)}
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-gold text-ink"
              aria-label="Close image"
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
