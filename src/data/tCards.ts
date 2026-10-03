import type { FountainsCard } from "@/data/fountainsCards";

/**
 * T-page link cards — fountains-model layout.
 * Combined daily-deploy set.
 */
export type TCard = FountainsCard;

export const T_CARDS: TCard[] = [
  {
    id: "texas-pavilions",
    href: "/texasoverview",
    title: "Texas Pavilions & Music Hall",
    body: '"Friendship at the Fair" is the theme of an exuberant multiple exhibit which has been produced for the state by Dallas showman Angus G. Wynne Jr., in association with Compass Fair, Inc.',
    pavilionSrc: "/images/texas/texas-pavilions-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Texas Pavilions & Music Hall"
  },
  {
    id: "thailand",
    href: "/thaioverview",
    title: "Thailand",
    body: "Inspired by a Buddhist shrine, this ornate pavilion houses the ancient treasures and modern products of an exotic land.",
    pavilionSrc: "/images/thai/thailand-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Thailand"
  },
  {
    id: "thrill-rides",
    href: "/thrridoverview",
    title: "Thrill Rides",
    body: "Three different rides provide the traditional fun of a fair.",
    pavilionSrc: "/images/thrrid/thrill-rides-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Thrill Rides"
  },
  {
    id: "tiparillo-band-pavilion",
    href: "/tipbandoverview",
    title: "Tiparillo Band Pavilion",
    body: "Free concerts and dancing are offered at a bandshell and large outdoor dance floor.",
    pavilionSrc: "/images/tipband/tiparillo-band-pavilion-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Tiparillo Band Pavilion"
  },
  {
    id: "tower-of-light",
    href: "/twrlitoverview",
    title: "Tower of Light",
    body: "A musical show depicts the benefits of electricity. Pointing skyward from the pavilion is the world's most powerful searchlight.",
    pavilionSrc: "/images/twrlit/tower-of-light-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Tower of Light"
  },
  {
    id: "transportation-and-travel",
    href: "/trantravoverview",
    title: "Transportation & Travel",
    body: "All modes of travel, from underwater to lunar, are explored in exhibits by various industries and agencies.",
    pavilionSrc: "/images/trantrav/transportation-and-travel-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Transportation & Travel"
  },
  {
    id: "travelers-insurance",
    href: "/travelersoverview",
    title: "Travelers Insurance",
    body: "Visitors walk past dioramas that dramatize the story of life on earth, from the first cell to man's leap into space.",
    pavilionSrc: "/images/travelers/travelers-insurance-icon.jpg",
    pavilionWidth: 761,
    pavilionHeight: 331,
    pavilionAlt: "Travelers Insurance"
  },
  {
    id: "two-thousand-tribes",
    href: "/twothooverview",
    title: "Two Thousand Tribes",
    body: "The ancient artifacts and modern progress of tribal groups around the world are shown in a large stylized aboriginal hut.",
    pavilionSrc: "/images/religions/two-thousand-tribes-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Two Thousand Tribes"
  }
];
