import type { FountainsCard } from "@/data/fountainsCards";

/**
 * M-page link cards — fountains-model layout.
 * M-specific rows: Main Mall, Malaysia, … Morocco.
 */
export type MCard = FountainsCard;

const MAINMALL: MCard = {
  id: "mainmall",
  href: "/mainmalloverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Main Mall",
  // TEXT (to the right of ICON) — exact from mainmall-m-card-text-source.jpg
  body: "The Fair's Main Mall ran from Unisphere along the Fountain of the Fairs to the Pool of Industry.",
  pavilionSrc: "/images/mainmall/mainmall-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Main Mall",
};

const MALAYSIA: MCard = {
  id: "malaysia",
  href: "/malaysiaoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Malaysia",
  // TEXT (to the right of ICON) — exact from malaysia-m-card-text-source.jpg
  body: "A new country uses handicraft demonstrations and conducted tours to acquaint visitors with its people, government, industry and arts.",
  pavilionSrc: "/images/malaysia/malaysia-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Malaysia",
};

const MARYLAND: MCard = {
  id: "maryland",
  href: "/marylandoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Maryland",
  // TEXT (to the right of ICON) — exact from maryland-m-card-text-source.jpg
  body: 'On a fisherman\'s wharf a stand serves seafood; in the pavilion a film recreates the birth of "The Star-spangled Banner."',
  pavilionSrc: "/images/maryland/maryland-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Maryland",
};

const MASON: MCard = {
  id: "mason",
  href: "/masonoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Masonic Center",
  // TEXT (to the right of ICON) — exact from mason-m-card-text-source.jpg
  body: "Documents and other memorabilia illustrate the history of the Masonic brotherhood.",
  pavilionSrc: "/images/mason/mason-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Masonic Center",
};

const MASPIZ: MCard = {
  id: "maspiz",
  href: "/maspizoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Mastro Pizza",
  // TEXT (to the right of ICON) — exact from maspiz-m-card-text-source.jpg
  body: "At this counter restaurant, pizza, beer and soda are sold.",
  pavilionSrc: "/images/maspiz/maspiz-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Mastro Pizza",
};

const MEDPHO: MCard = {
  id: "medpho",
  href: "/medphooverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Medo Photo Supply",
  // TEXT (to the right of ICON) — exact from medpho-m-card-text-source.jpg
  body: "A circular one-story structure houses a complete camera shop.",
  pavilionSrc: "/images/medpho/medpho-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 330,
  pavilionAlt: "Medo Photo Supply",
};

const MEXICO: MCard = {
  id: "mexico",
  href: "/mexicooverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Mexico",
  // TEXT (to the right of ICON) — exact from mexico-m-card-text-source.jpg
  body: "Highlights include modern and pre-Columbian art, aerial acrobats, concerts, fashion shows, and a pleasant restaurant and bar.",
  pavilionSrc: "/images/mexico/mexico-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Mexico",
};

const MIDWEST: MCard = {
  id: "midwest",
  href: "/midwestoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Midwestern States",
  // TEXT (to the right of ICON) — exact from midwest-m-card-text-source.jpg
  // Guidebook quirk: "Montant" (not Montana); double-space before "It"
  body: "The Midwestern States Exhibit would showcase the states of North and South Dakota, Nebraska, Kansas, Colorado, Iowa, Minnesota, Missouri, Montant and Wyoming.\u00A0 It was never built.",
  pavilionSrc: "/images/midwest/midwest-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Midwestern States",
};

const MINNESOTA: MCard = {
  id: "minnesota",
  href: "/minnesotaoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Minnesota",
  // TEXT (to the right of ICON) — exact from minnesota-m-card-text-source.jpg
  body: "Highlight of this pavilion is the Kensington Runestone, believed to be a relic of Viking exploration in Minnesota in the year 1362.",
  pavilionSrc: "/images/minnesota/minnesota-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Minnesota",
};

const MISSOURI: MCard = {
  id: "missouri",
  href: "/missourioverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Missouri",
  // TEXT (to the right of ICON) — exact from missouri-m-card-text-source.jpg
  // Straight quotes preserved from source
  body: 'The chief displays are an exact replica of Lindbergh\'s plane, "The Spirit of St. Louis," and the Mercury space capsule, "Friendship 7."',
  pavilionSrc: "/images/missouri/missouri-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Missouri",
};

const AMF: MCard = {
  id: "amf",
  href: "/amfoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Monorail",
  // TEXT (to the right of ICON) — exact from amf-m-card-text-source.jpg
  body: "Futuristic two-car trains circle the Lake Area 40 feet up, providing spectacular views.",
  pavilionSrc: "/images/amf/amf-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Monorail",
};

const MONTANA: MCard = {
  id: "montana",
  href: "/montanaoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Montana",
  // TEXT (to the right of ICON) — exact from montana-m-card-text-source.jpg
  body: "Seven gaily painted railroad cars contain a Western museum, a store and other exhibits from the Big Sky country.",
  pavilionSrc: "/images/montana/montana-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Montana",
};

const MORCHU: MCard = {
  id: "morchu",
  href: "/morchuoverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Mormon Church",
  // TEXT (to the right of ICON) — exact from mormon-m-card-text-source.jpg
  body: "A film, dioramas and art works depict the Church's efforts to help man achieve happiness through harmony with God's law.",
  pavilionSrc: "/images/mormon-church/mormon-church-icon.png",
  pavilionWidth: 762,
  pavilionHeight: 330,
  pavilionAlt: "Mormon Church",
};

const MOROCO: MCard = {
  id: "moroco",
  href: "/morocooverview",
  // DESCRIPTION (italic under ICON) — exact icon name
  title: "Morocco",
  // TEXT (to the right of ICON) — exact from moroco-m-card-text-source.jpg
  body: "A bazaar and restaurant under Moorish arches reproduce the sights and sounds of North Africa.",
  pavilionSrc: "/images/moroco/moroco-icon.png",
  pavilionWidth: 761,
  pavilionHeight: 331,
  pavilionAlt: "Morocco",
};

export const M_CARDS: MCard[] = [
  MAINMALL,
  MALAYSIA,
  MARYLAND,
  MASON,
  MASPIZ,
  MEDPHO,
  MEXICO,
  MIDWEST,
  MINNESOTA,
  MISSOURI,
  AMF,
  MONTANA,
  MORCHU,
  MOROCO,
];
