import type { FountainsCard } from "@/data/fountainsCards";

/**
 * C-page link cards — fountains-model layout.
 * C-specific rows: Caribbean, …
 */
export type CCard = FountainsCard;

const CARIBBEAN: CCard = {
  id: "caribbean",
  href: "/caribboverview",
  // DESCRIPTION (italic under ICON) — exact
  title: "Caribbean",
  // TEXT (to the right of ICON) — exact from caribb-c-card-text-user-exact.jpg
  body: "A steel band plays in a terrace cafe; shops sell souvenirs.",
  pavilionSrc: "/images/caribb/caribbean-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Caribbean",
};

const CARNIVAL: CCard = {
  id: "carnival",
  href: "/carnivoverview",
  // DESCRIPTION (italic under ICON) — exact
  title: "Carnival",
  // TEXT (to the right of ICON) — exact from carniv-c-card-text-user-exact.jpg
  body: "Fairground rides for all ages are combined with an aquarium and with restaurants that offer entertainment.",
  pavilionSrc: "/images/carniv/carnival-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Carnival",
};

const CAROUSEL_PARK: CCard = {
  id: "carousel-park",
  href: "/carparoverview",
  // DESCRIPTION (italic under ICON) — exact
  title: "Carousel Park",
  // TEXT (to the right of ICON) — exact from carpar-c-card-text-user-exact.jpg
  body: "Visitors can ride an oldtime merry-go-round and relax at snack bars and picnic tables.",
  pavilionSrc: "/images/carpar/carousel-park-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Carousel Park",
};

const CENTRAL_AMERICA: CCard = {
  id: "central-america",
  href: "/cenameriverview",
  // DESCRIPTION (italic under ICON) — exact
  title: "Central America",
  // TEXT (to the right of ICON) — exact from cenamer-c-card-text-user-exact.jpg
  body: "An open-sided building with bright awnings presents the culture and commerce of five countries linked in a common market.",
  pavilionSrc: "/images/cenamer/central-america-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Central America",
};

const CENTURY_GRILL: CCard = {
  id: "century-grill",
  href: "/cengrioverview",
  // DESCRIPTION (italic under ICON) — exact
  title: "Century Grill",
  // TEXT (to the right of ICON) — exact from cengri-c-card-text-user-exact.jpg
  body: "This restaurant serves hamburgers prepared with savory sauces, along with side dishes from every nation represented at the Fair.",
  pavilionSrc: "/images/cengri/century-grill-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Century Grill",
};

const REPUBLIC_OF_CHINA: CCard = {
  id: "republic-of-china",
  href: "/chinaoverview",
  // DESCRIPTION (italic under ICON) — exact
  title: "Republic of China",
  // TEXT (to the right of ICON) — exact from china-c-card-text-user-exact.jpg
  body: "Ancient bronzes, porcelain and ivory carvings are among the rare art objects shown in the replica of an emperor's palace.",
  pavilionSrc: "/images/china/republic-of-china-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Republic of China",
};

/** Same fields as Religions page Christian Science row (`ReligionsLinks.tsx`). */
const CHRISTIAN_SCIENCE: CCard = {
  id: "christian-science",
  href: "/chrscioverview",
  // DESCRIPTION (italic under ICON) — exact from Religions
  title: "Christian Science",
  // TEXT (to the right of ICON) — exact from Religions
  body: "Graphic exhibits explain the religion's teachings; there is also a reading room and park.",
  pavilionSrc: "/images/religions/christian-science-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Christian Science",
};

/** Same ICON/TEXT/href as Top Ten Chrysler row; DESCRIPTION shortened to “Chrysler”. */
const CHRYSLER: CCard = {
  id: "chrysler",
  href: "/chrysleroverview",
  // DESCRIPTION (italic under ICON)
  title: "Chrysler",
  // TEXT (to the right of ICON) — exact from Top Ten
  body: "This exhibit was designed especially for children, with a puppet show, a giant car, and other exhibits set on islands in a large man-made lake.",
  pavilionSrc: "/images/top-ten/chrysler-pavilion.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Chrysler",
};

const CHUN_KING_INN: CCard = {
  id: "chun-king-inn",
  href: "/chukininnoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Chun King Inn",
  // TEXT (to the right of ICON) — exact from chukininn-c-card-text-user-exact.jpg
  body: "A pagoda-style restaurant with a lake-dotted garden offers comfortable, inexpensive dining.",
  pavilionSrc: "/images/chukininn/chun-king-inn-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Chun King Inn",
};

const CHUNKY_CANDY: CCard = {
  id: "chunky-candy",
  href: "/chucanoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Chunky Candy",
  // TEXT (to the right of ICON) — exact from chucanoverview/06-c-card-text.jpg
  body: "Children can watch candy being made in a glass-walled factory, and play in a sculpture garden.",
  pavilionSrc: "/images/chucan/chunky-candy-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Chunky Candy",
};

const CHURCHILL_CENTER: CCard = {
  id: "churchill-center",
  href: "/chucenoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Churchill Center",
  // TEXT (to the right of ICON) — exact from chucenoverview/06-c-card-text.jpg
  body: "The life and times of Sir Winston Churchill are re-created in photographs, models, paintings and personal effects.",
  pavilionSrc: "/images/chucen/churchill-center-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Churchill Center",
};

const CITIES_SERVICE_BAND: CCard = {
  id: "cities-service-worlds-fair-band-of-america",
  href: "/citservoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Cities Service World's Fair Band of America",
  // TEXT (to the right of ICON) — exact from citservoverview/06-c-card-text.jpg
  body: "Paul Lavalle directs the Cities Service World's Fair Band of America. Six concerts a day throughout the Fairgrounds on a custom-built moveable bandstand.",
  pavilionSrc:
    "/images/citserv/cities-service-worlds-fair-band-of-america-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Cities Service World's Fair Band of America",
};

const CLAIROL: CCard = {
  id: "clairol",
  href: "/clairoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Clairol",
  // TEXT (to the right of ICON) — exact from clairoverview/06-c-card-text.jpg
  body: "Ladies can see themselves in various hair colors, view a film on beauty and talk with experts.",
  pavilionSrc: "/images/clair/clairol-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Clairol",
};

const COCA_COLA: CCard = {
  id: "coca-cola",
  href: "/cokeoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Coca-Cola",
  // TEXT (to the right of ICON) — exact from cokeoverview/06-c-card-text.jpg
  body: "Visitors stroll through re-creations of an Oriental street, an Alpine peak, a tropical forest -- complete with sights and sounds.",
  pavilionSrc: "/images/coke/coca-cola-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Coca-Cola",
};

const CONTINENTAL_CIRCUS: CCard = {
  id: "continental-circus",
  href: "/conciroverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Continental Circus",
  // TEXT (to the right of ICON) — exact from conciroverview/06-c-card-text.jpg
  body: "A European-style one-ring circus has been assembled beneath a white and yellow plastic structure that seats 5,000.",
  pavilionSrc: "/images/concir/continental-circus-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Continental Circus",
};

const CONTINENTAL_INSURANCE: CCard = {
  id: "continental-insurance",
  href: "/coninsoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Continental Insurance",
  // TEXT (to the right of ICON) — exact from coninsoverview/06-c-card-text.jpg
  body: "The American Revolution comes alive in a short musical cartoon, in dioramas and paintings, and in displays of arms and artifacts.",
  pavilionSrc: "/images/conins/continental-insurance-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Continental Insurance",
};

const CONTINENTAL_PARK: CCard = {
  id: "continental-park",
  href: "/conparoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Continental Park",
  // TEXT (to the right of ICON) — exact from conparoverview/06-c-card-text.jpg
  body: "The area includes a children's zoo, a gorilla compound and picnic facilities.",
  pavilionSrc: "/images/conpar/continental-park-icon.png",
  pavilionWidth: 764,
  pavilionHeight: 330,
  pavilionAlt: "Continental Park",
};

export const C_CARDS: CCard[] = [
  CARIBBEAN,
  CARNIVAL,
  CAROUSEL_PARK,
  CENTRAL_AMERICA,
  CENTURY_GRILL,
  REPUBLIC_OF_CHINA,
  CHRISTIAN_SCIENCE,
  CHRYSLER,
  CHUN_KING_INN,
  CHUNKY_CANDY,
  CHURCHILL_CENTER,
  CITIES_SERVICE_BAND,
  CLAIROL,
  COCA_COLA,
  CONTINENTAL_CIRCUS,
  CONTINENTAL_INSURANCE,
  CONTINENTAL_PARK,
];
