import { type FountainsCard } from "@/data/fountainsCards";

/**
 * A-page link cards — fountains-model layout (19 total).
 * Cards 1–19: Administration Building … Avis Pan American Highway Rides.
 * Page ends on Avis Pan American Highway Rides (no trailing fountain duplicates).
 */
const ADMINISTRATION_BUILDING: FountainsCard = {
  id: "administration-building",
  href: "/adminbldg01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Administration Building",
  // TEXT (to the right of ICON) — exact from a-card-01-administration-building-text-user-exact.jpg
  body: "The Administration Building was built to house the administrative offices of the New York World’s Fair 1964/1965 Corporation.",
  pavilionSrc: "/images/adminbldg/administration-building-icon.png",
  pavilionWidth: 766,
  pavilionHeight: 329,
  pavilionAlt: "Administration Building",
};

const AERIAL_TOWER_RIDE: FountainsCard = {
  id: "aerial-tower-ride",
  href: "/aertow01",
  // DESCRIPTION (italic under ICON) — exact, keep &
  title: "Aerial Tower Ride & Waffle Restaurant",
  // TEXT (to the right of ICON) — exact from a-page-card1-text-user-exact.jpg
  body: "An outdoor snack bar sells special waffles, and gondolas give rides to the top of a tower.",
  pavilionSrc: "/images/aertow/aerial-tower-ride-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 329,
  pavilionAlt: "Aerial Tower…",
};

const AFRICA: FountainsCard = {
  id: "africa",
  href: "/africa01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Africa",
  // TEXT (to the right of ICON) — exact from a-page-card2-text-user-exact.jpg
  body: "A hut-village on stilts, representing 26 African nations, offers wild animals, tribal dancers and a tree-house restaurant.",
  pavilionSrc: "/images/africa/africa-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 329,
  pavilionAlt: "Africa",
};

const ALASKA: FountainsCard = {
  id: "alaska",
  href: "/alaska01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Alaska",
  // TEXT (to the right of ICON) — exact from a-page-card3-text-user-exact.jpg
  body: "Under a white, igloo-shaped dome, the 49th state presents its wildlife, industry and Indian crafts.",
  pavilionSrc: "/images/alaska/alaska-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 329,
  pavilionAlt: "Alaska",
};

const ALL_STATE: FountainsCard = {
  id: "all-state",
  href: "/allsta01",
  // DESCRIPTION (italic under ICON) — exact; keep hyphen, &, apostrophe
  title: "All-State Properties & Macy's",
  // TEXT (to the right of ICON) — exact from a-page-card4-text-user-exact.jpg
  body: "Two ingenious houses, low-cost and compact, are displayed exactly as they will be constructed, ready for immediate occupancy.",
  pavilionSrc: "/images/allsta/all-state-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 329,
  pavilionAlt: "All-State…",
};

const AMERICAN_EXPRESS: FountainsCard = {
  id: "american-express",
  href: "/amex01",
  // DESCRIPTION (italic under ICON) — exact
  title: "American Express",
  // TEXT (to the right of ICON) — exact from a-page-card5-text-user-exact.jpg
  body: 'Featured are banking and travel services, an international "money tree," and art exhibit and a huge scale model of the Fair.',
  pavilionSrc: "/images/amex/american-express-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "American Express",
};

const AMERICAN_INDIAN_EXPOSITION: FountainsCard = {
  id: "american-indian-exposition",
  href: "/amind01",
  // DESCRIPTION (italic under ICON) — exact
  title: "American Indian Exposition",
  // TEXT (to the right of ICON) — exact from a-page-card6-text-user-exact.jpg
  body: "This authentic American Indian Exposition depicts the historical significance of Indian life and its contribution to the heritage of America. It was never built.",
  pavilionSrc: "/images/amind/american-indian-exposition-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "American Indian Exposition ",
};

const AMERICAN_ISRAEL: FountainsCard = {
  id: "american-israel",
  href: "/amerisr01",
  // DESCRIPTION (italic under ICON) — exact; keep hyphen
  title: "American-Israel",
  // TEXT (to the right of ICON) — exact from a-page-card7-text-user-exact.jpg
  body: "In this spiral-shaped building, the visitor walks through the sights and sounds of 4,000 years of Jewish history.",
  pavilionSrc: "/images/religions/american-israel-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "American-Israel ",
};

const AMPHICAR_RIDE: FountainsCard = {
  id: "amphicar-ride",
  href: "/amprid01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Amphicar Ride",
  // TEXT (to the right of ICON) — exact from a-card-08-amphicar-ride-text-user-exact.jpg
  body: "Amphibious autos take three passengers at a time over land and into the lake and back.",
  pavilionSrc: "/images/amprid/amphicar-ride-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Amphicar Ride",
};

const AMPHITHEATER: FountainsCard = {
  id: "amphitheater",
  href: "/ampthe01",
  // DESCRIPTION (italic under ICON) — exact US spelling + trailing space
  title: "Amphitheater ",
  // TEXT (to the right of ICON) — exact from a-card-10-amphitheater-text-user-exact.jpg
  // Body uses Amphitheatre (guidebook spelling); do not “correct” either form.
  body: "The Amphitheatre, site of Billy Rose's famous Aquacade at the 1939 World's Fair, has been completely refurbished.",
  pavilionSrc: "/images/ampthe/amphitheater-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Amphitheater ",
};

const ARCH_OF_THE_AMERICAS: FountainsCard = {
  id: "arch-of-the-americas",
  href: "/archamer01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Arch of the Americas",
  // TEXT (to the right of ICON) — exact from a-card-11-arch-of-the-americas-text-user-exact.jpg
  body: "The Arch of the Americas was an exhibit that was to be sponsored by the Organization of American States. It was never constructed.",
  pavilionSrc: "/images/archamer/arch-of-the-americas-icon.png",
  pavilionWidth: 765,
  pavilionHeight: 329,
  pavilionAlt: "Arch of the Americas",
};

const ARGENTINA: FountainsCard = {
  id: "argentina",
  href: "/argent01",
  // DESCRIPTION (italic under ICON) — exact + trailing space
  title: "Argentina ",
  // TEXT (to the right of ICON) — exact from a-card-12-argentina-text-user-exact.jpg
  body: "Ground was broken, the pavilion constructed but never occupied by Argentina.",
  pavilionSrc: "/images/argent/argentina-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Argentina ",
};

const ARLINGTON_HAT: FountainsCard = {
  id: "arlington-hat",
  href: "/arlhat01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Arlington Hat",
  // TEXT (to the right of ICON) — exact from a-card-13-arlington-hat-text-user-exact.jpg
  // Keep `--` as in the image text; do not “correct” to em dashes.
  body: "Unusual hats -- large, small, funny, old and odd -- are displayed by the Fair's official hatter.",
  pavilionSrc: "/images/arlhat/arlington-hat-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Arlington Hat",
};

const ASTRAL_FOUNTAIN: FountainsCard = {
  id: "astral-fountain",
  href: "/astfount01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Astral Fountain",
  // TEXT (to the right of ICON) — exact from a-card-14-astral-fountain-text-user-exact.jpg
  body: "The Astral Fountain is a 60-foot in diameter fretwork of stars rotating around a 70-foot high column of water.",
  pavilionSrc: "/images/fountains/astral-fountain-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Astral Fountain",
};

const ATOMEDIC_HOSPITAL: FountainsCard = {
  id: "atomedic-hospital",
  href: "/atomhos01",
  // DESCRIPTION (italic under ICON) — exact + trailing space
  title: "Atomedic Hospital ",
  // TEXT (to the right of ICON) — exact from a-card-15-atomedic-hospital-text-user-exact.jpg
  body: "The Atomedic Hospital is the functioning emergency hospital of the Fair. It is staffed by 20 professional nurses.",
  pavilionSrc: "/images/atomhos/atomedic-hospital-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Atom doc Hospital",
};

const AUSTRIA: FountainsCard = {
  id: "austria",
  href: "/austria01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Austria",
  // TEXT (to the right of ICON) — exact from a-card-16-austria-text-user-exact.jpg
  body: "Art and industry, culture and tourism are featured in this striking pavilion that echoes the lines of an Alpine lodge.",
  pavilionSrc: "/images/austria/austria-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Austria",
};

const AUTO_THRILL_SHOW: FountainsCard = {
  id: "auto-thrill-show",
  href: "/autthr01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Auto Thrill Show",
  // TEXT (to the right of ICON) — exact from autthr-a-card17-text-user-exact.jpg
  body: '"Hell Drivers" risk life, limb and vehicles as they crash, roll and leap their cars in a high-speed show.',
  pavilionSrc: "/images/autthr/auto-thrill-show-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Auto Thrill Show",
};

const AVIS_ANTIQUE_CAR_RIDE: FountainsCard = {
  id: "avis-antique-car-ride",
  href: "/avis01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Avis Antique Car Ride",
  // TEXT (to the right of ICON) — exact from avis-a-card18-text-user-exact.jpg
  body: "Models of antique open-topped autos take visitors on a four-minute ride down an old-fashioned country lane.",
  pavilionSrc: "/images/avis/avis-antique-car-ride-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Avis Antique Car Ride",
};

const AVIS_PAN_AMERICAN_HIGHWAY_RIDES: FountainsCard = {
  id: "avis-pan-american-highway-rides",
  href: "/panamg01",
  // DESCRIPTION (italic under ICON) — exact
  title: "Avis Pan American Highway Rides",
  // TEXT (to the right of ICON) — exact from panamg-a-card19-text-user-exact.jpg
  body: 'Visitors drive miniature cars along a "transcontinental" road.',
  pavilionSrc: "/images/panamg/avis-pan-american-highway-rides-icon.png",
  pavilionWidth: 765,
  pavilionHeight: 329,
  pavilionAlt: "Avis Pan American Highway Rides",
};

export const A_CARDS: FountainsCard[] = [
  ADMINISTRATION_BUILDING,
  AERIAL_TOWER_RIDE,
  AFRICA,
  ALASKA,
  ALL_STATE,
  AMERICAN_EXPRESS,
  AMERICAN_INDIAN_EXPOSITION,
  AMERICAN_ISRAEL,
  AMPHICAR_RIDE,
  AMPHITHEATER,
  ARCH_OF_THE_AMERICAS,
  ARGENTINA,
  ARLINGTON_HAT,
  ASTRAL_FOUNTAIN,
  ATOMEDIC_HOSPITAL,
  AUSTRIA,
  AUTO_THRILL_SHOW,
  AVIS_ANTIQUE_CAR_RIDE,
  AVIS_PAN_AMERICAN_HIGHWAY_RIDES,
];
