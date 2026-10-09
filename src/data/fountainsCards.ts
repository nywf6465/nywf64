/**
 * Fountains link-card rows — exact guidebook wording from FountainsLinks.
 * Shared by `/pavilions/fountains` and `/A` (A duplicates cards 1–8 beneath the 11).
 */
export type FountainsCard = {
  id: string;
  href: string;
  title: string;
  body: string;
  bodyItalic?: boolean;
  pavilionSrc: string;
  pavilionWidth: number;
  pavilionHeight: number;
  pavilionAlt: string;
};

export const FOUNTAINS_CARDS: FountainsCard[] = [
  {
    id: "astral-fountain",
    href: "/astfount01",
    title: "Astral Fountain",
    body: "The Astral Fountain is a 60-foot in diameter fretwork of stars rotating around a 70-foot high column of water.",
    pavilionSrc: "/images/fountains/astral-fountain-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Astral Fountain",
  },
  {
    id: "fountain-of-progress-north",
    href: "/nprogfount01",
    title: "Fountain of Progress North",
    body: "The Fountain of Progress North is a pool with a spiral layout of water jets featuring a changing water cycle pattern.",
    pavilionSrc: "/images/fountains/fountain-of-progress-north-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Fountain of Progress North",
  },
  {
    id: "fountain-of-progress-south",
    href: "/sprogfount01",
    title: "Fountain of Progress South",
    body: "The Fountain of Progress South displays a five-point star layout of water jets with a sunken basin in the center and a series of water streams in the outer area.",
    pavilionSrc: "/images/fountains/fountain-of-progress-south-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Fountain of Progress South",
  },
  {
    id: "fountain-of-the-continents",
    href: "/foucon01",
    title: "Fountain of the Continents ",
    body: "The Fountain of the Continents rings Unisphere in its reflecting pool. The rising and falling of the water streams are meant to suggest the rotation of the globe.",
    pavilionSrc: "/images/fountains/fountain-of-the-continents-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Fountain of the Continents ",
  },
  {
    id: "fountains-of-the-fairs",
    href: "/Foucault01",
    title: "Fountains of the Fairs",
    body: "The Fountains of the Fairs in the East and West Pools are arching jets of water directed inward toward the center of the pools.",
    pavilionSrc: "/images/fountains/fountains-of-the-fairs-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Fountains of the Fairs",
  },
  {
    id: "fountain-of-the-planets",
    href: "/foupla01",
    title: "Fountain of the Planets",
    body: "The Fountain of the Planets, largest in the world, shoots 10,000 tons of water as high as 150 feet into the air in ever-changing patterns.",
    pavilionSrc: "/images/fountains/fountain-of-the-planets-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Fountain of the Planets",
  },
  {
    id: "lunar-fountain",
    href: "/lunfount01",
    title: "Lunar Fountain",
    body: "Parabolic jet streams of water, reaching heights of 30 feet, radiate from 16 nozzles on the top of an elliptical dome.",
    pavilionSrc: "/images/fountains/lunar-fountain-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Lunar Fountain",
  },
  {
    id: "solar-fountain",
    href: "/solfount01",
    title: "Solar Fountain",
    body: "A central dome supports a 30-foot high column of water while a starburst circles around the dome. Wobbling jets of water surrounding the dome simulate the sun's gases.",
    pavilionSrc: "/images/fountains/solar-fountain-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Solar Fountain",
  },
  {
    id: "pool-of-industry",
    href: "/poolin01",
    title: "Pool of Industry ",
    body: "A gigantic symphony of fireworks, water, color and music occurs every evening.",
    pavilionSrc: "/images/fountains/pool-of-industry-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Pool of Industry ",
  },
  {
    id: "pool-of-reflections",
    href: "/pooref01",
    title: "Pool of Reflections",
    body: "The Pool of Reflections is a series of five water ponds at stepped heights with water flowing from higher to lower levels forming a long cascading type pool.",
    pavilionSrc: "/images/fountains/pool-of-reflections-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Pool of Reflections",
  },
  {
    id: "lighting-and-effects",
    href: "/lighting01",
    title: "Lighting and Effects",
    body: "The Fair's spectacular lighting and effects made the Fair a wonderland of color at night",
    bodyItalic: true,
    pavilionSrc: "/images/fountains/lighting-and-effects-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Lighting & Effects",
  },
];
