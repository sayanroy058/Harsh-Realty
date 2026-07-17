import nprVisaaya from "@/assets/Properties/NPR_Visaya.avif";
import primarcAadvika from "@/assets/Properties/Primiarc Aadvika.webp";
import miraniaEvara from "@/assets/Properties/Mirania_Evara.jpg";
import merlinNiyasa from "@/assets/Properties/Merlin Niyasa.webp";
import nidhara from "@/assets/Properties/Nidhara.jpg";
import psAurus from "@/assets/Properties/PS Aurus.jpg";
import psSansara from "@/assets/Properties/PS Sansara.jpg";
import psQuintessa from "@/assets/Properties/PS Quintessa.avif";
import merlinFResidency from "@/assets/Properties/Merlin F Residencies.jpg";
import psNavyom from "@/assets/Properties/PS Navyom.jpg";
import placeholder from "@/assets/Properties/placeholder.svg";

export const propertyImages: Record<string, string> = {
  "npr-visaaya": nprVisaaya,
  "primarc-aadvika": primarcAadvika,
  "mirania-evara": miraniaEvara,
  "merlin-niyasa": merlinNiyasa,
  nidhara,
  "ps-aurus": psAurus,
  "ps-sansara": psSansara,
  "ps-quintessa": psQuintessa,
  "merlin-f-residencies": merlinFResidency,
  "ps-navyom": psNavyom,
  "ambuja-utpalaa": placeholder,
  "ambuja-udyatt": placeholder,
  "eden-devprayag": placeholder,
  "merlin-ivy": placeholder,
  "srijan-townsquare": placeholder,
  jeevika: placeholder,
  "emami-aamod": placeholder,
  "purti-tatsam": placeholder,
  "soham-pravya": placeholder,
  "dtc-still-waters": placeholder,
  "siddha-sky": placeholder,
  "srijan-natura": placeholder,
  sanctuary: placeholder,
  "ps-harbour-one": placeholder,
  "merlin-summit": placeholder,
  "emami-business-bay": placeholder,
  "keventer-one": placeholder,
  "merlin-world-trade-centre": placeholder,
};

export const getPropertyImage = (slug: string): string =>
  propertyImages[slug] ?? placeholder;
