import type { FountainsCard } from "@/data/fountainsCards";

/**
 * F-page link cards — fountains-model layout.
 * F-specific rows: Festival of Gas, …
 */
export type FCard = FountainsCard;

const FESTIVAL_OF_GAS: FCard = {
  id: "festival-of-gas",
  href: "/fesgas01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Festival of Gas",
  // TEXT (to the right of ICON) — exact from fesgasoverview/06-f-card-text.jpg
  body: "The U.S. gas industry presents cooking demonstrations, a movie, and displays of industrial and domestic equipment.",
  pavilionSrc: "/images/fesgas/festival-of-gas-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Festival of Gas",
};

const FIESTA: FCard = {
  id: "fiesta",
  href: "/fiesta01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fiesta",
  // TEXT (to the right of ICON) — exact from fiesta-f-card-text-source.jpg
  body: 'Africa, Asia, Europe, as well as the Americas, are represented in a "village" of kiosks which display and sell a variety of folk art. Admission is charged; proceeds go to a center for world understanding.',
  pavilionSrc: "/images/fiesta/fiesta-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Fiesta",
};

const FINE_ARTS_PAVILION: FCard = {
  id: "fine-arts-pavilion",
  href: "/finart01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fine Arts Pavilion",
  // TEXT (to the right of ICON) — exact from finart-f-card-text-source.jpg
  body: "Sponsored by the Long Island Arts Center, this pavilion displays the work of 250 American artists.",
  pavilionSrc: "/images/finart/fine-arts-pavilion-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Fine Arts Pavilion",
};

const FIRST_NATIONAL_CITY_BANK: FCard = {
  id: "first-national-city-bank",
  href: "/firnat01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "First National City Bank",
  // TEXT (to the right of ICON) — exact from firnat-f-card-text-source.jpg
  body: "The Fair's bank has a multilingual staff and specializes in foreign currency transactions.",
  pavilionSrc: "/images/firnat/first-national-city-bank-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "First National City Bank",
};

const FLORIDA: FCard = {
  id: "florida",
  href: "/floridaguidebook",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Florida",
  // TEXT (to the right of ICON) — exact from florida-f-card-text-source.jpg
  body: "A giant orange on a tower tops displays of sunshine living, space tests at Cape Kennedy and a free, live-porpoise show.",
  pavilionSrc: "/images/florida/florida-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Florida",
};

const FLORIDA_CITRUS_WATER_SKI_SHOW: FCard = {
  id: "florida-citrus-water-ski-show",
  href: "/flowatski01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Florida Citrus Water Ski Show",
  // TEXT (to the right of ICON) — exact from flowatski-f-card-text-source.jpg
  body: "Experts put on an exciting display of aquatic skills.",
  pavilionSrc: "/images/flowatski/florida-citrus-water-ski-show-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Florida Citrus Water Ski Show",
};

const FLUME_RIDE: FCard = {
  id: "flume-ride",
  href: "/logflu01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Flume Ride",
  // TEXT (to the right of ICON) — exact from logflu-f-card-text-source.jpg
  body: "A trip on a water-borne roller coaster ends with a big splash into swirling rapids.",
  pavilionSrc: "/images/logflu/flume-ride-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Flume Ride",
};

const FORD: FCard = {
  id: "ford",
  href: "/ford01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Ford",
  // TEXT (to the right of ICON) — exact from ford-f-card-text-source.jpg
  body: "Animated displays and scale models depict man's progress from prehistoric times to the Space Age. Viewers ride past some of the exhibits in new Ford cars.",
  pavilionSrc: "/images/ford/ford-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Ford",
};

const FORMICA: FCard = {
  id: "formica",
  href: "/formica01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Formica",
  // TEXT (to the right of ICON) — exact from formica-f-card-text-source.jpg
  body: "Visitors can tour a model home which emphasizes the use of plastics -- and win its equivalent in a $100,000 contest.",
  pavilionSrc: "/images/formica/formica-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Formica",
};

const FOUNTAIN_OF_PROGRESS_NORTH: FCard = {
  id: "nprogfount",
  href: "/nprogfount01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fountain of Progress North",
  // TEXT (to the right of ICON) — exact from founorn-f-card-text-source.jpg
  body: "The Fountain of Progress North is a pool with a spiral layout of water jets featuring a changing water cycle pattern.",
  pavilionSrc: "/images/fountain-of-progress-north/fountain-of-progress-north-icon.png",
  pavilionWidth: 765,
  pavilionHeight: 329,
  pavilionAlt: "Fountain of Progress North",
};

const FOUNTAIN_OF_PROGRESS_SOUTH: FCard = {
  id: "sprogfount",
  href: "/sprogfount01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fountain of Progress South",
  // TEXT (to the right of ICON) — exact from sprogfount-f-card-text-source.jpg
  body: "The Fountain of Progress South displays a five-point star layout of water jets with a sunken basin in the center and a series of water streams in the outer area.",
  pavilionSrc: "/images/fountain-of-progress-south/fountain-of-progress-south-icon.png",
  pavilionWidth: 766,
  pavilionHeight: 329,
  pavilionAlt: "Fountain of Progress South",
};

const FOUNTAIN_OF_THE_CONTINENTS: FCard = {
  id: "foucon",
  href: "/foucon01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fountain of the Continents",
  // TEXT (to the right of ICON) — exact from foucon-f-card-text-source.jpg
  body: "The Fountain of the Continents rings Unisphere in its reflecting pool. The rising and falling of the water streams are meant to suggest the rotation of the globe.",
  pavilionSrc: "/images/fountain-of-the-continents/fountain-of-the-continents-icon.png",
  pavilionWidth: 766,
  pavilionHeight: 329,
  pavilionAlt: "Fountain of the Continents",
};

const FOUNTAINS_OF_THE_FAIRS: FCard = {
  id: "foufair",
  href: "/Foucault01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fountains of the Fairs",
  // TEXT (to the right of ICON) — revised plural from foufair-f-card-text-source.jpg
  body: "The Fountains of the Fairs in the East and West Pools are arching jets of water directed inward toward the center of the pools.",
  pavilionSrc: "/images/fountains-of-the-fairs/fountains-of-the-fairs-icon.png",
  pavilionWidth: 765,
  pavilionHeight: 329,
  pavilionAlt: "Fountains of the Fairs",
};

const FOUNTAIN_OF_THE_PLANETS: FCard = {
  id: "foupla",
  href: "/foupla01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Fountain of the Planets",
  // TEXT (to the right of ICON) — exact from fouplan-f-card-text-source.jpg
  body: "The Fountain of the Planets, largest in the world, shoots 10,000 tons of water as high as 150 feet into the air in ever-changing patterns.",
  pavilionSrc: "/images/fountain-of-the-planets/fountain-of-the-planets-icon.png",
  pavilionWidth: 766,
  pavilionHeight: 329,
  pavilionAlt: "Fountain of the Planets",
};

const FRANCE: FCard = {
  id: "france",
  href: "/france01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "France",
  // TEXT (to the right of ICON) — exact from france-f-card-text-source.jpg
  body: "Ground was broken but the Pavilion of France was never constructed.",
  pavilionSrc: "/images/france/france-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "France",
};

const FUNLAND: FCard = {
  id: "funlan",
  href: "/funlan01",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Funland",
  // TEXT (to the right of ICON) — exact from funlan-f-card-text-source.jpg
  body: "Three exciting rides are offered for children and grownups.",
  pavilionSrc: "/images/funlan/funland-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Funland",
};

export const F_CARDS: FCard[] = [
  FESTIVAL_OF_GAS,
  FIESTA,
  FINE_ARTS_PAVILION,
  FIRST_NATIONAL_CITY_BANK,
  FLORIDA,
  FLORIDA_CITRUS_WATER_SKI_SHOW,
  FLUME_RIDE,
  FORD,
  FORMICA,
  FOUNTAIN_OF_PROGRESS_NORTH,
  FOUNTAIN_OF_PROGRESS_SOUTH,
  FOUNTAIN_OF_THE_CONTINENTS,
  FOUNTAINS_OF_THE_FAIRS,
  FOUNTAIN_OF_THE_PLANETS,
  FRANCE,
  FUNLAND,
];


