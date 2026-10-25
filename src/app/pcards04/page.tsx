import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Official Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Official Post Cards of the 1964/1965 New York World’s Fair — Dexter Press and Manhattan Post Card Publishing Co. cards from the nywf64.com collection.",
};

/**
 * Official Postcards gallery continued (legacy pcards05.html → /pcards04).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 5. PREVIOUS → /pcards03; NEXT → /pcards05.
 */
export default function Pcards04Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards04-title"
      title="Official Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards03"
      overviewHref="/pcardsoverview"
      nextHref="/pcards05"
      entries={[
        {
          front: {
            src: "/images/pcards04/86864-B.jpg",
            width: 450,
            height: 282,
            alt: "United States Pavilion official postcard No. 86864-B",
          },
          reverse: {
            src: "/images/pcards04/86864-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — United States Pavilion official postcard",
          },
          meta: [
            "United States Pavilion",
            "Official Postcard",
            "No. 86864-B",
            "Dexter No. WF-56",
            "Manhattan No. W-59",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/86865-B(1).jpg",
            width: 280,
            height: 450,
            alt: "Unisphere, Night (Vertical) official postcard No. 86865-B",
          },
          reverse: {
            src: "/images/pcards04/86865-B(1)reverse.jpg",
            width: 300,
            height: 118,
            alt: "Reverse — Unisphere, Night (Vertical) official postcard",
          },
          meta: [
            "Unisphere, Night (Vertical)",
            "Official Postcard",
            "No. 86865-B",
            "Dexter No. WF-57",
            "Manhattan No. W-60",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/86865-B(2).jpg",
            width: 450,
            height: 282,
            alt: "Unisphere, Night (Horizontal) official postcard No. 86865-B",
          },
          reverse: {
            src: "/images/pcards04/86865-B(2)reverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse — Unisphere, Night (Horizontal) official postcard",
          },
          meta: [
            "Unisphere, Night (Horizontal)",
            "Official Postcard",
            "No. 86865-B",
            "Dexter No. WF-58",
            "Manhattan No. W-61",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/86865-B(2)B.jpg",
            width: 450,
            height: 281,
            alt: "Unisphere, Night (Horizontal) official postcard No. 86865-B",
          },
          reverse: {
            src: "/images/pcards04/86865-B(2)reverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse — Unisphere, Night (Horizontal) official postcard",
          },
          meta: [
            "Unisphere, Night (Horizontal)",
            "Official Postcard",
            "No. 86865-B",
            "Dexter No. WF-58",
            "Manhattan No. W-61",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/DT-87181-B.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China Pavilion official postcard No. 87181-B",
          },
          reverse: {
            src: "/images/pcards04/DT-87181-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Republic of China Pavilion official postcard",
          },
          meta: [
            "Republic of China Pavilion",
            "Official Postcard",
            "No. 87181-B",
            "Dexter No. WF-62",
            "Manhattan No. W-65",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87182-B.jpg",
            width: 450,
            height: 285,
            alt: "Pool of Reflections official postcard No. 87182-B",
          },
          reverse: {
            src: "/images/pcards04/87182-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Pool of Reflections official postcard",
          },
          meta: [
            "Pool of Reflections",
            "Official Postcard",
            "No. 87182-B",
            "Dexter No. WF-63",
            "Manhattan No. W-66",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87183-B.jpg",
            width: 450,
            height: 284,
            alt: "Unipshere w/NYS Pavilion official postcard No. 87183-B",
          },
          reverse: {
            src: "/images/pcards04/87183-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Unipshere w/NYS Pavilion official postcard",
          },
          meta: [
            "Unipshere w/NYS Pavilion",
            "Official Postcard",
            "No. 87183-B",
            "Dexter No. WF-64",
            "Manhattan No. W-67",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87184-B.jpg",
            width: 450,
            height: 283,
            alt: "General Electric Progressland official postcard No. 87184-B",
          },
          reverse: {
            src: "/images/pcards04/87184-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — General Electric Progressland official postcard",
          },
          meta: [
            "General Electric Progressland",
            "Official Postcard",
            "No. 87184-B",
            "Dexter No. WF-65",
            "Manhattan No. W-68",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87185-B.jpg",
            width: 450,
            height: 283,
            alt: "Court of Presidents of USA official postcard No. 87185-B",
          },
          reverse: {
            src: "/images/pcards04/87185-Breverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse — Court of Presidents of USA official postcard",
          },
          meta: [
            "Court of Presidents of USA",
            "Official Postcard",
            "No. 87185-B",
            "Dexter No. WF-66",
            "Manhattan No. W-69",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87186-B.jpg",
            width: 279,
            height: 450,
            alt: "Unisphere w/Court of Peace official postcard No. 87186-B",
          },
          reverse: {
            src: "/images/pcards04/87186-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Unisphere w/Court of Peace official postcard",
          },
          meta: [
            "Unisphere w/Court of Peace",
            "Official Postcard",
            "No. 87186-B",
            "Dexter No. WF-67",
            "Manhattan No. W-70",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87187-B.jpg",
            width: 282,
            height: 450,
            alt: "Unisphere w/\"Escorters\" official postcard No. 87187-B",
          },
          reverse: {
            src: "/images/pcards04/87187-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Unisphere w/\"Escorters\" official postcard",
          },
          meta: [
            "Unisphere w/\"Escorters\"",
            "Official Postcard",
            "No. 87187-B",
            "Dexter No. WF-68",
            "Manhattan No. W-71",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87188-B.jpg",
            width: 450,
            height: 282,
            alt: "Glide-A-Ride Trains official postcard No. 87188-B",
          },
          reverse: {
            src: "/images/pcards04/87188-Breverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse — Glide-A-Ride Trains official postcard",
          },
          meta: [
            "Glide-A-Ride Trains",
            "Official Postcard",
            "No. 87188-B",
            "Dexter No. WF-69",
            "Manhattan No. W-72",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87189-B.jpg",
            width: 450,
            height: 284,
            alt: "U.S. Rubber Giant Tire official postcard No. 87189-B",
          },
          reverse: {
            src: "/images/pcards04/87189-Breverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — U.S. Rubber Giant Tire official postcard",
          },
          meta: [
            "U.S. Rubber Giant Tire",
            "Official Postcard",
            "No. 87189-B",
            "Dexter No. WF-70",
            "Manhattan No. W-73",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87414-B.jpg",
            width: 450,
            height: 280,
            alt: "The Solar Fountain official postcard No. 87414-B",
          },
          reverse: {
            src: "/images/pcards04/87414-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — The Solar Fountain official postcard",
          },
          meta: [
            "The Solar Fountain",
            "Official Postcard",
            "No. 87414-B",
            "Dexter No. WF-71",
            "Manhattan No. W-80",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87415-b.jpg",
            width: 450,
            height: 282,
            alt: "N.Y.S. Pavilion official postcard No. 87415-B",
          },
          reverse: {
            src: "/images/pcards04/87415-breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — N.Y.S. Pavilion official postcard",
          },
          meta: [
            "N.Y.S. Pavilion",
            "Official Postcard",
            "No. 87415-B",
            "Dexter No. WF-72",
            "Manhattan No. W-74",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/DT-87416-B.jpg",
            width: 284,
            height: 450,
            alt: "Astral Fountain - (day) official postcard No. 87416-B",
          },
          reverse: {
            src: "/images/pcards04/DT-87416-Breverse.jpg",
            width: 300,
            height: 111,
            alt: "Reverse — Astral Fountain - (day) official postcard",
          },
          meta: [
            "Astral Fountain - (day)",
            "Official Postcard",
            "No. 87416-B",
            "Dexter No. WF-73",
            "Manhattan No. W-75",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87416-B.jpg",
            width: 450,
            height: 280,
            alt: "General Motors Futurama II official postcard No. 87417-B",
          },
          reverse: {
            src: "/images/pcards04/87416-Breverse.jpg",
            width: 300,
            height: 100,
            alt: "Reverse — General Motors Futurama II official postcard",
          },
          meta: [
            "General Motors Futurama II",
            "Official Postcard",
            "No. 87417-B",
            "Dexter No. WF-74",
            "Manhattan No. W-81",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87416-Bvariation.jpg",
            width: 450,
            height: 282,
            alt: "General Motors Futurama II official postcard No. 87417-B (Variation)",
          },
          reverse: {
            src: "/images/pcards04/87416-Breverse.jpg",
            width: 300,
            height: 100,
            alt: "Reverse — General Motors Futurama II official postcard",
          },
          meta: [
            "General Motors Futurama II",
            "Official Postcard",
            "No. 87417-B (Variation)",
            "Dexter No. WF-74",
            "Manhattan No. W-81",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87417-B.jpg",
            width: 280,
            height: 450,
            alt: "Port of New York Authority - Heliport & Exhibit official postcard No. 87418-B",
          },
          reverse: {
            src: "/images/pcards04/87417-Breverse.jpg",
            width: 300,
            height: 108,
            alt: "Reverse — Port of New York Authority - Heliport & Exhibit official postcard",
          },
          meta: [
            "Port of New York Authority - Heliport & Exhibit",
            "Official Postcard",
            "No. 87418-B",
            "Dexter No. WF-75",
            "Manhattan No. W-82",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87500-B.jpg",
            width: 450,
            height: 284,
            alt: "Unisphere from Prom. Court. of Nat's. official postcard No. 87500-B",
          },
          reverse: {
            src: "/images/pcards04/87500-Breverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Unisphere from Prom. Court. of Nat's. official postcard",
          },
          meta: [
            "Unisphere from Prom. Court. of Nat's.",
            "Official Postcard",
            "No. 87500-B",
            "Dexter No. WF-59",
            "Manhattan No. W-62",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87501-B.jpg",
            width: 283,
            height: 450,
            alt: "Unisphere show Fount. (cont's beneath) official postcard No. 87501-B",
          },
          reverse: {
            src: "/images/pcards04/87501-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Unisphere show Fount. (cont's beneath) official postcard",
          },
          meta: [
            "Unisphere show Fount. (cont's beneath)",
            "Official Postcard",
            "No. 87501-B",
            "Dexter No. WF-60",
            "Manhattan No. W-63",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87502-B.jpg",
            width: 450,
            height: 283,
            alt: "Unisphere & the Court of Nat's. from N.Y.S. Tower official postcard No. 87502-B",
          },
          reverse: {
            src: "/images/pcards04/87502-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — Unisphere & the Court of Nat's. from N.Y.S. Tower official postcard",
          },
          meta: [
            "Unisphere & the Court of Nat's. from N.Y.S. Tower",
            "Official Postcard",
            "No. 87502-B",
            "Dexter No. WF-61",
            "Manhattan No. W-64",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87419-B.jpg",
            width: 450,
            height: 286,
            alt: "The Monorail official postcard No. 87419-B",
          },
          reverse: {
            src: "/images/pcards04/87419-Breverse.jpg",
            width: 300,
            height: 103,
            alt: "Reverse — The Monorail official postcard",
          },
          meta: [
            "The Monorail",
            "Official Postcard",
            "No. 87419-B",
            "Dexter No. WF-76",
            "Manhattan No. W-76",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87420-B.jpg",
            width: 450,
            height: 280,
            alt: "The Vatican Pavilion official postcard No. 87420-B",
          },
          reverse: {
            src: "/images/pcards04/87420-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — The Vatican Pavilion official postcard",
          },
          meta: [
            "The Vatican Pavilion",
            "Official Postcard",
            "No. 87420-B",
            "Dexter No. WF-77",
            "Manhattan No. W-77",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87421-B.jpg",
            width: 450,
            height: 282,
            alt: "The Ford Rotunda official postcard No. 87421-B",
          },
          reverse: {
            src: "/images/pcards04/87421-Breverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — The Ford Rotunda official postcard",
          },
          meta: [
            "The Ford Rotunda",
            "Official Postcard",
            "No. 87421-B",
            "Dexter No. WF-78",
            "Manhattan No. W-83",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards04/87422-B.jpg",
            width: 450,
            height: 284,
            alt: "Tower of Light official postcard No. 87422-B",
          },
          reverse: {
            src: "/images/pcards04/87422-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Tower of Light official postcard",
          },
          meta: [
            "Tower of Light",
            "Official Postcard",
            "No. 87422-B",
            "Dexter No. WF-79",
            "Manhattan No. W-85",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
