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
import merlinSummit from "@/assets/Properties/merlin-summit.jpg";
import emamiBusinessBay from "@/assets/Properties/emami-business-bay.jpg";
import keventerOne from "@/assets/Properties/keventer-one.jpg";
import merlinWorldTradeCentre from "@/assets/Properties/merlin-world-trade-centre.jpg";
import psHarbourOne from "@/assets/Properties/ps-harbour-one.jpg";
import sanctuary from "@/assets/Properties/sanctuary.jpg";
import ambujaUtpalaa from "@/assets/Properties/ambuja-utpalaa.png";
import edenDevprayag from "@/assets/Properties/eden-devprayag.jpg";
import merlinIvy from "@/assets/Properties/merlin-ivy.jpg";
import srijanTownsquare from "@/assets/Properties/srijan-townsquare.jpg";
import jeevika from "@/assets/Properties/jeevika.png";
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
  "ambuja-utpalaa": ambujaUtpalaa,
  "ambuja-udyatt": placeholder,
  "eden-devprayag": edenDevprayag,
  "merlin-ivy": merlinIvy,
  "srijan-townsquare": srijanTownsquare,
  jeevika,
  "emami-aamod": placeholder,
  "purti-tatsam": placeholder,
  "soham-pravya": placeholder,
  "dtc-still-waters": placeholder,
  "siddha-sky": placeholder,
  "srijan-natura": placeholder,
  sanctuary,
  "ps-harbour-one": psHarbourOne,
  "merlin-summit": merlinSummit,
  "emami-business-bay": emamiBusinessBay,
  "keventer-one": keventerOne,
  "merlin-world-trade-centre": merlinWorldTradeCentre,
};

export const getPropertyImage = (slug: string): string =>
  propertyImages[slug] ?? placeholder;
