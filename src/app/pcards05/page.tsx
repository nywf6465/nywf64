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
 * Official Postcards gallery continued (legacy pcards06.html → /pcards05).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 6. PREVIOUS → /pcards04; NEXT → /pcards06.
 */
export default function Pcards05Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards05-title"
      title="Official Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards04"
      overviewHref="/pcardsoverview"
      nextHref="/pcards06"
      entries={[
        {
          front: {
            src: "/images/pcards05/87423-B.jpg",
            width: 450,
            height: 285,
            alt: "Large Letter Card official postcard No. 87423-B",
          },
          reverse: {
            src: "/images/pcards05/87423-Breverse.jpg",
            width: 300,
            height: 59,
            alt: "Reverse — Large Letter Card official postcard",
          },
          meta: [
            "Large Letter Card",
            "Official Postcard",
            "No. 87423-B",
            "Dexter No. WF-64",
            "Manhattan No. W-94",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/87424-B.jpg",
            width: 450,
            height: 282,
            alt: "General Scene of the Fair - From N.Y.S. Towers official postcard No. 87424-B",
          },
          reverse: {
            src: "/images/pcards05/87424-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — General Scene of the Fair - From N.Y.S. Towers official postcard",
          },
          meta: [
            "General Scene of the Fair - From N.Y.S. Towers",
            "Official Postcard",
            "No. 87424-B",
            "Dexter No. WF-81",
            "Manhattan No. W-78",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/87425-B.jpg",
            width: 450,
            height: 279,
            alt: "Unisphere in Fountain of the Continents - From N.Y.S. Towers official postcard No. 87425-B",
          },
          reverse: {
            src: "/images/pcards05/87425-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Unisphere in Fountain of the Continents - From N.Y.S. Towers official postcard",
          },
          meta: [
            "Unisphere in Fountain of the Continents - From N.Y.S. Towers",
            "Official Postcard",
            "No. 87425-B",
            "Dexter No. WF-82",
            "Manhattan No. W-79",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/87426-B.jpg",
            width: 279,
            height: 450,
            alt: "Unisphere w/Flags official postcard No. 87426-B",
          },
          reverse: {
            src: "/images/pcards05/87426-Breverse.jpg",
            width: 300,
            height: 109,
            alt: "Reverse — Unisphere w/Flags official postcard",
          },
          meta: [
            "Unisphere w/Flags",
            "Official Postcard",
            "No. 87426-B",
            "Dexter No. WF-83",
            "Manhattan No. W-84",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88470-B.jpg",
            width: 450,
            height: 280,
            alt: "3 Picture layout - Unisphere - Chrysler - Coca Cola official postcard No. 88470-B",
          },
          reverse: {
            src: "/images/pcards05/88470-Breverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — 3 Picture layout - Unisphere - Chrysler - Coca Cola official postcard",
          },
          meta: [
            "3 Picture layout - Unisphere - Chrysler - Coca Cola",
            "Official Postcard",
            "No. 88470-B",
            "Dexter No. WF-84",
            "Manhattan No. W-86",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/DT-88471-B.jpg",
            width: 450,
            height: 281,
            alt: "4 Picture layout - Schaefer Center - Unisphere - G.E. Pavilion - Tower of Light official postcard No. 88471-B",
          },
          reverse: {
            src: "/images/pcards05/DT-88471-Breverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse — 4 Picture layout - Schaefer Center - Unisphere - G.E. Pavilion - Tower of Light official postcard",
          },
          meta: [
            "4 Picture layout - Schaefer Center - Unisphere - G.E. Pavilion - Tower of Light",
            "Official Postcard",
            "No. 88471-B",
            "Dexter No. WF-85",
            "Manhattan No. W-87",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/DT-88472-B.jpg",
            width: 450,
            height: 284,
            alt: "5 Picture layout - Glide-A-Ride - Solar Fountain - Monorail - N.Y.S. - Unisphere official postcard No. 88472-B",
          },
          reverse: {
            src: "/images/pcards05/DT-88472-Breverse.jpg",
            width: 300,
            height: 67,
            alt: "Reverse — 5 Picture layout - Glide-A-Ride - Solar Fountain - Monorail - N.Y.S. - Unisphere official postcard",
          },
          meta: [
            "5 Picture layout - Glide-A-Ride - Solar Fountain - Monorail - N.Y.S. - Unisphere",
            "Official Postcard",
            "No. 88472-B",
            "Dexter No. WF-86",
            "Manhattan No. W-88",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88473-B.jpg",
            width: 450,
            height: 279,
            alt: "5 Picture layout - Port Authority Heliport - Pool - Astral Fountain - Tower of Light - Unisphere official postcard No. 88473-B",
          },
          reverse: {
            src: "/images/pcards05/88473-Breverse.jpg",
            width: 300,
            height: 77,
            alt: "Reverse — 5 Picture layout - Port Authority Heliport - Pool - Astral Fountain - Tower of Light - Unisphere official postcard",
          },
          meta: [
            "5 Picture layout - Port Authority Heliport - Pool - Astral Fountain - Tower of Light - Unisphere",
            "Official Postcard",
            "No. 88473-B",
            "Dexter No. WF-87",
            "Manhattan No. W-89",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/DT-88474-B.jpg",
            width: 450,
            height: 281,
            alt: "3 Picture layout - Fountain of Planets - Unishpere - Schaefer Center official postcard No. 88474-B",
          },
          reverse: {
            src: "/images/pcards05/DT-88474-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — 3 Picture layout - Fountain of Planets - Unishpere - Schaefer Center official postcard",
          },
          meta: [
            "3 Picture layout - Fountain of Planets - Unishpere - Schaefer Center",
            "Official Postcard",
            "No. 88474-B",
            "Dexter No. WF-88",
            "Manhattan No. W-90",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88475-B.jpg",
            width: 450,
            height: 284,
            alt: "3 Picture layout - Monorail - Solar Fountain - General Motors official postcard No. 88475-B",
          },
          reverse: {
            src: "/images/pcards05/88475-Breverse.jpg",
            width: 300,
            height: 79,
            alt: "Reverse — 3 Picture layout - Monorail - Solar Fountain - General Motors official postcard",
          },
          meta: [
            "3 Picture layout - Monorail - Solar Fountain - General Motors",
            "Official Postcard",
            "No. 88475-B",
            "Dexter No. WF-89",
            "Manhattan No. W-91",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/DT-88476-B.jpg",
            width: 450,
            height: 282,
            alt: "3 Picture layout - Unisphere - Fountain of Planets - Shea Stadium official postcard No. 88476-B",
          },
          reverse: {
            src: "/images/pcards05/DT-88476-Breverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse — 3 Picture layout - Unisphere - Fountain of Planets - Shea Stadium official postcard",
          },
          meta: [
            "3 Picture layout - Unisphere - Fountain of Planets - Shea Stadium",
            "Official Postcard",
            "No. 88476-B",
            "Dexter No. WF-90",
            "Manhattan No. W-92",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88477-B.jpg",
            width: 450,
            height: 282,
            alt: "4 Picture layout - Unisphere - Port Authority - General Motors - Shea Stadium official postcard No. 88477-B",
          },
          reverse: {
            src: "/images/pcards05/88477-Breverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — 4 Picture layout - Unisphere - Port Authority - General Motors - Shea Stadium official postcard",
          },
          meta: [
            "4 Picture layout - Unisphere - Port Authority - General Motors - Shea Stadium",
            "Official Postcard",
            "No. 88477-B",
            "Dexter No. WF-91",
            "Manhattan No. W-93",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88520-B.jpg",
            width: 284,
            height: 450,
            alt: "Freedom of the Human Spirit official postcard No. 88520-B",
          },
          reverse: {
            src: "/images/pcards05/88520-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Reverse — Freedom of the Human Spirit official postcard",
          },
          meta: [
            "Freedom of the Human Spirit",
            "Official Postcard",
            "No. 88520-B",
            "Dexter No. WF-92",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88524-B.jpg",
            width: 281,
            height: 450,
            alt: "The Rocketthrower official postcard No. 88524-B",
          },
          reverse: {
            src: "/images/pcards05/88524-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — The Rocketthrower official postcard",
          },
          meta: [
            "The Rocketthrower",
            "Official Postcard",
            "No. 88524-B",
            "Dexter No. WF-94",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88525-B.jpg",
            width: 450,
            height: 280,
            alt: "Unisphere at Night official postcard No. 88525-B",
          },
          reverse: {
            src: "/images/pcards05/88525-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Unisphere at Night official postcard",
          },
          meta: [
            "Unisphere at Night",
            "Official Postcard",
            "No. 88525-B",
            "Dexter No. WF-95",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88526-B.jpg",
            width: 279,
            height: 450,
            alt: "N.Y.S. Towers official postcard No. 88526-B",
          },
          reverse: {
            src: "/images/pcards05/88526-Breverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — N.Y.S. Towers official postcard",
          },
          meta: [
            "N.Y.S. Towers",
            "Official Postcard",
            "No. 88526-B",
            "Dexter No. WF-96",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88527-B.jpg",
            width: 450,
            height: 284,
            alt: "Unisphere and Pool of Reflections official postcard No. 88527-B",
          },
          reverse: {
            src: "/images/pcards05/88527-Breverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse — Unisphere and Pool of Reflections official postcard",
          },
          meta: [
            "Unisphere and Pool of Reflections",
            "Official Postcard",
            "No. 88527-B",
            "Dexter No. WF-93",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88528-B.jpg",
            width: 280,
            height: 450,
            alt: "Westinghouse Time Capsule official postcard No. 88528-B",
          },
          reverse: {
            src: "/images/pcards05/88528-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Westinghouse Time Capsule official postcard",
          },
          meta: [
            "Westinghouse Time Capsule",
            "Official Postcard",
            "No. 88528-B",
            "Dexter No. WF-97",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/DT-88529-B.jpg",
            width: 450,
            height: 282,
            alt: "Chrysler Autofare official postcard No. 88529-B",
          },
          reverse: {
            src: "/images/pcards05/DT-88529-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Chrysler Autofare official postcard",
          },
          meta: [
            "Chrysler Autofare",
            "Official Postcard",
            "No. 88529-B",
            "Dexter No. WF-98",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88530-B.jpg",
            width: 450,
            height: 280,
            alt: "General Mototors Futurama at Night official postcard No. 88530-B",
          },
          reverse: {
            src: "/images/pcards05/88530-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — General Mototors Futurama at Night official postcard",
          },
          meta: [
            "General Mototors Futurama at Night",
            "Official Postcard",
            "No. 88530-B",
            "Dexter No. WF-99",
            "Manhattan No. W-98",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88531-B.jpg",
            width: 450,
            height: 284,
            alt: "Port of New York Authority Heliport official postcard No. 88531-B",
          },
          reverse: {
            src: "/images/pcards05/88531-Breverse.jpg",
            width: 300,
            height: 110,
            alt: "Reverse — Port of New York Authority Heliport official postcard",
          },
          meta: [
            "Port of New York Authority Heliport",
            "Official Postcard",
            "No. 88531-B",
            "Dexter No. WF-100",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88533-B.jpg",
            width: 281,
            height: 450,
            alt: "Sinclair Tyrannosaur official postcard No. 88533-B",
          },
          reverse: {
            src: "/images/pcards05/88533-Breverse.jpg",
            width: 300,
            height: 77,
            alt: "Reverse — Sinclair Tyrannosaur official postcard",
          },
          meta: [
            "Sinclair Tyrannosaur",
            "Official Postcard",
            "No. 88533-B",
            "Dexter No. WF-101",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/88534-B.jpg",
            width: 450,
            height: 282,
            alt: "Ford Rotunda official postcard No. 88534-B",
          },
          reverse: {
            src: "/images/pcards05/88534-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — Ford Rotunda official postcard",
          },
          meta: [
            "Ford Rotunda",
            "Official Postcard",
            "No. 88534-B",
            "Dexter No. WF-102",
            "Manhattan No. W-100",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/89295-B.jpg",
            width: 450,
            height: 283,
            alt: "Palette Card official postcard No. 89295-B",
          },
          reverse: {
            src: "/images/pcards05/89295-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Palette Card official postcard",
          },
          meta: [
            "Palette Card",
            "Official Postcard",
            "No. 89295-B",
            "Dexter No. WF-103",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards05/89958-B.jpg",
            width: 450,
            height: 283,
            alt: "Shea Stadium official postcard No. 89958-B",
          },
          reverse: {
            src: "/images/pcards05/89958-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Shea Stadium official postcard",
          },
          meta: [
            "Shea Stadium",
            "Official Postcard",
            "No. 89958-B",
            "Dexter No. WF-104",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
