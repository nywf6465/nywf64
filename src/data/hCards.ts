import type { FountainsCard } from "@/data/fountainsCards";

/**
 * H-page link cards — fountains-model layout.
 * H-specific rows: Hall of Education, …
 */
export type HCard = FountainsCard;

const HALL_OF_EDUCATION: HCard = {
  id: "haledu",
  href: "/haleduoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hall of Education",
  // TEXT (to the right of ICON) — exact from haledu-h-card-text-source.jpg
  body: "The changing goals, methods and tools of education in America are the concern of the exhibitors in this pavilion.",
  pavilionSrc: "/images/haledu/hall-of-education-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hall of Education",
};

const HALL_OF_FREE_ENTERPRISE: HCard = {
  id: "halfre",
  href: "/halfreoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hall of Free Enterprise",
  // TEXT (to the right of ICON) — exact from halfre-h-card-text-source.jpg
  body: "The benefits of free competition are explained in a pavilion sponsored by the American Economic Foundation.",
  pavilionSrc: "/images/halfre/hall-of-free-enterprise-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hall of Free Enterprise",
};

const HALL_OF_SCIENCE: HCard = {
  id: "halsci",
  href: "/halscioverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hall of Science",
  // TEXT (to the right of ICON) — exact from halsci-h-card-text-source.jpg
  body: "Eleven exhibitors display scientific advances ranging from disease control to travel in space.",
  pavilionSrc: "/images/halsci/hall-of-science-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hall of Science",
};

const HAWAII: HCard = {
  id: "hawaii",
  href: "/hawaiioverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hawaii",
  // TEXT (to the right of ICON) — exact from hawaii-h-card-text-source.jpg
  body: "The island state comes to life in song and dance, movies, outrigger canoe rides, bright flowers and exotic foods.",
  pavilionSrc: "/images/hawaii/hawaii-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hawaii",
};

const HEARTLAND: HCard = {
  id: "heartland",
  href: "/heartlandoverview",
  // DESCRIPTION (italic under ICON) — exact card description (not icon name alone)
  title: "Heartland States U.S.A. / Midwestern States",
  // TEXT (to the right of ICON) — exact from heartland-h-card-text-source.jpg
  body: "The Heartland States U.S.A. Pavilion would showcase the exhibits of the states of North and South Dakota, Nebraska and Kansas. It was never built.",
  pavilionSrc: "/images/heartland/heartland-icon.png",
  pavilionWidth: 763,
  pavilionHeight: 330,
  pavilionAlt: "Heartland States U.S.A. / Midwestern States",
};

const HERTZ: HCard = {
  id: "hertz",
  href: "/hertzoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hertz Travel Center",
  // TEXT (to the right of ICON) — exact from hertz-h-card-text-source.jpg
  body: "Multilingual attendants offer travel information and local maps.",
  pavilionSrc: "/images/hertz/hertz-travel-center-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hertz Travel Center",
};

const HOLLYWOOD: HCard = {
  id: "hollywood",
  href: "/hollywoodoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hollywood",
  // TEXT (to the right of ICON) — exact from hollywood-h-card-text-source.jpg
  body: "Behind a facsimile of Grauman's Chinese Theater, movie sets, props and costumes bring to life filmland's present and past.",
  pavilionSrc: "/images/hollywood/hollywood-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hollywood",
};


const HONKON: HCard = {
  id: "honkon",
  href: "/honkonoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Hong Kong",
  // TEXT (to the right of ICON) — exact from honkon-h-card-text-source.jpg
  body: "The bustling East-meets-West air of the British crown colony is recreated in restaurants and shops.",
  pavilionSrc: "/images/honkon/hong-kong-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Hong Kong",
};


const HOUGT: HCard = {
  id: "hougt",
  href: "/hougtoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "House of Good Taste",
  // TEXT (to the right of ICON) — exact from hougt-card-text-source.jpg
  body: "Three fully furnished houses -- traditional, contemporary and modern -- display the latest in comfortable living.",
  pavilionSrc: "/images/hougt/house-of-good-taste-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "House of Good Taste",
};

export const H_CARDS: HCard[] = [
  HALL_OF_EDUCATION,
  HALL_OF_FREE_ENTERPRISE,
  HALL_OF_SCIENCE,
  HAWAII,
  HEARTLAND,
  HERTZ,
  HOLLYWOOD,
  HONKON,
  HOUGT,
];
