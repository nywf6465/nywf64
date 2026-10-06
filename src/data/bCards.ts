import type { FountainsCard } from "@/data/fountainsCards";

/**
 * B-page link cards — fountains-model layout.
 * B-specific rows: Bargreen Buffet … Better Living Center, …
 */
export type BCard = FountainsCard;

const BARGREEN_BUFFET: BCard = {
  id: "bargreen-buffet",
  href: "/barbuf01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Bargreen Buffet",
  // TEXT (to the right of ICON) — exact from barbuf-b-card1-text-user-exact.jpg
  body: "An outside terrace with tables and umbrellas flanks this bar, buffet and cafeteria.",
  pavilionSrc: "/images/barbuf/bargreen-buffet-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Bargreen Buffet",
};

const BELGIAN_VILLAGE: BCard = {
  id: "belgian-village",
  href: "/belvil01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Belgian Village",
  // TEXT (to the right of ICON) — exact from belvil-b-card2-text-user-exact.jpg
  body: "More than 100 buildings -- among them a church, a carousel and a rathskeller -- comprise a charming Flemish town of the year 1700.",
  pavilionSrc: "/images/belvil/belgian-village-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Belgian Village",
};

const BELL_SYSTEM: BCard = {
  id: "bell-system",
  href: "/bell01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Bell System",
  // TEXT (to the right of ICON) — exact from bell-b-card3-text-user-exact.jpg
  body: "The history of communications, from smoke signal to satellites, is shown in a 15-minute ride.",
  pavilionSrc: "/images/bell/bell-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Bell System",
};

const BERLIN: BCard = {
  id: "berlin",
  href: "/berlin01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Berlin",
  // TEXT (to the right of ICON) — exact from berlin-b-card4-text-user-exact.jpg
  body: "A film and color transparencies depict day-to-day life in this outpost of freedom.",
  pavilionSrc: "/images/berlin/berlin-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Berlin",
};

const BETTER_LIVING_CENTER: BCard = {
  id: "better-living-center",
  href: "/betliv01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Better Living Center",
  // TEXT (to the right of ICON) — exact from betliv-b-card5-text-user-exact.jpg
  body: "Foods, fashions, furnishings, three restaurants and a play-school are among the varied offerings of some 175 exhibitors.",
  pavilionSrc: "/images/betliv/better-living-center-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Better Living Center",
};

const BILLY_GRAHAM: BCard = {
  id: "billy-graham",
  href: "/bilgra01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Billy Graham",
  // TEXT (to the right of ICON) — exact from bilgra-b-card6-text-user-exact.jpg
  body: "The famed evangelist's message is presented in a color film, and personal counseling is offered.",
  pavilionSrc: "/images/religions/billy-graham-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Billy Graham",
};

const BOUNTY: BCard = {
  id: "bounty",
  href: "/bounty01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Bounty",
  // TEXT (to the right of ICON) — exact from bounty-b-card-text-user-exact.jpg
  body: 'The famous British armed merchant-man as re-created in meticulous detail for the 1962 movie, "Mutiny on the Bounty," is displayed at the Marina in Flushing Bay.',
  pavilionSrc: "/images/bounty/bounty-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Bounty",
};

const BOURBON_STREET: BCard = {
  id: "bourbon-street",
  href: "/boustr01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Bourbon Street",
  // TEXT (to the right of ICON) — exact from boustr-b-card-text-user-exact.jpg
  body: "A reconstruction of New Orleans' famous street of fun features well-known jazz musicians, Creole food and sidewalk shops.",
  pavilionSrc: "/images/boustr/bourbon-street-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Bourbon Street",
};

const BOY_SCOUTS_OF_AMERICA: BCard = {
  id: "boy-scouts-of-america",
  href: "/boysco01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Boy Scouts of America",
  // TEXT (to the right of ICON) — exact from boysco-b-card-text-user-exact.jpg
  body: "Scouts from around the U.S. display such skills as knot-tying, fire-making and lifesaving.",
  pavilionSrc: "/images/boysco/boy-scouts-of-america-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Boy Scouts of America",
};

const BRASS_RAIL_FOOD_SERVICES: BCard = {
  id: "brass-rail-food-services",
  href: "/brarai01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Brass Rail Food Services",
  // TEXT (to the right of ICON) — exact from brarai-b-card-text-user-exact.jpg
  body: "Twenty-five refreshment and souvenir stands operated by the Brass Rail Food Services organization are located throughout the Fairgrounds.",
  pavilionSrc: "/images/brarai/brass-rail-food-services-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Brass Rail Food Services",
};

const BRITISH_LION_PUB: BCard = {
  id: "british-lion-pub",
  href: "/brilion01",
  // DESCRIPTION (italic under ICON) — exact
  title: "British Lion Pub",
  // TEXT (to the right of ICON) — exact from brilion-b-card-text-user-exact.jpg
  body: "In a replica of a 17th Century Tudor inn, traditional British food and drink are served.",
  pavilionSrc: "/images/brilion/british-lion-pub-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "British Lion Pub",
};

export const B_CARDS: BCard[] = [
  BARGREEN_BUFFET,
  BELGIAN_VILLAGE,
  BELL_SYSTEM,
  BERLIN,
  BETTER_LIVING_CENTER,
  BILLY_GRAHAM,
  BOUNTY,
  BOURBON_STREET,
  BOY_SCOUTS_OF_AMERICA,
  BRASS_RAIL_FOOD_SERVICES,
  BRITISH_LION_PUB,
];



