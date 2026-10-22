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
 * Official Postcards gallery (legacy pcards02.html → /pcards01).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 2 (pcardsoverview is Page 1). PREVIOUS → /pcardsoverview; NEXT → /pcards02.
 */
export default function Pcards01Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards01-title"
      title="Official Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcardsoverview"
      overviewHref="/pcardsoverview"
      nextHref="/pcards02"
      entries={[
        {
          front: {
            src: "/images/pcards01/61816-B.jpg",
            width: 450,
            height: 280,
            alt: "Unisphere official postcard No. 61816-B",
          },
          reverse: {
            src: "/images/pcards01/61816-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — Unisphere official postcard",
          },
          meta: [
            "Unisphere",
            "Official Postcard",
            "No. 61816-B",
            "Dexter No. WF-7",
            "Manhattan No. W-8",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/65617-B.jpg",
            width: 290,
            height: 450,
            alt: "Unisphere (red with title on white) official postcard No. 65617-B",
          },
          reverse: {
            src: "/images/pcards01/65617-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — Unisphere (red with title on white) official postcard",
          },
          meta: [
            "Unisphere (red with title on white)",
            "Official Postcard",
            "No. 65617-B",
            "Dexter No. WF-25",
            "Manhattan No. W-31",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/65618-B.jpg",
            width: 450,
            height: 283,
            alt: "Sudan Pavilion official postcard No. 65618-B",
          },
          reverse: {
            src: "/images/pcards01/65618-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Sudan Pavilion official postcard",
          },
          meta: [
            "Sudan Pavilion",
            "Official Postcard",
            "No. 65618-B",
            "Dexter No. N/A",
            "Manhattan No. W-9",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/65619-B.jpg",
            width: 450,
            height: 281,
            alt: "Shea Stadium official postcard No. 65619-B",
          },
          reverse: {
            src: "/images/pcards01/65619-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Shea Stadium official postcard",
          },
          meta: [
            "Shea Stadium",
            "Official Postcard",
            "No. 65619-B",
            "Dexter No. WF-6",
            "Manhattan No. W-10",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/65622-B.jpg",
            width: 450,
            height: 279,
            alt: "General Motors Futurama II Building official postcard No. 65622-B",
          },
          reverse: {
            src: "/images/pcards01/65622-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — General Motors Futurama II Building official postcard",
          },
          meta: [
            "General Motors Futurama II Building",
            "Official Postcard",
            "No. 65622-B",
            "Dexter No. WF-9",
            "Manhattan No. W-11",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/65624-B.jpg",
            width: 450,
            height: 281,
            alt: "Hall of Education official postcard No. 65624-B",
          },
          reverse: {
            src: "/images/pcards01/65624-Breverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse — Hall of Education official postcard",
          },
          meta: [
            "Hall of Education",
            "Official Postcard",
            "No. 65624-B",
            "Dexter No. WF-27",
            "Manhattan No. W-12",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/65630-B.jpg",
            width: 450,
            height: 283,
            alt: "Thailand Pavilion official postcard No. 65630-B",
          },
          reverse: {
            src: "/images/pcards01/65630-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Thailand Pavilion official postcard",
          },
          meta: [
            "Thailand Pavilion",
            "Official Postcard",
            "No. 65630-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/72585-B.jpg",
            width: 450,
            height: 280,
            alt: "Ford Motors official postcard No. 72585-B",
          },
          reverse: {
            src: "/images/pcards01/72585-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Ford Motors official postcard",
          },
          meta: [
            "Ford Motors",
            "Official Postcard",
            "No. 72585-B",
            "Dexter No. WF-10",
            "Manhattan No. W-14",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/72586-B.jpg",
            width: 450,
            height: 282,
            alt: "Bell System Pavilion official postcard No. 72586-B",
          },
          reverse: {
            src: "/images/pcards01/72586-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Bell System Pavilion official postcard",
          },
          meta: [
            "Bell System Pavilion",
            "Official Postcard",
            "No. 72586-B",
            "Dexter No. WF-40",
            "Manhattan No. W-15",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/72587-B.jpg",
            width: 450,
            height: 284,
            alt: "New York Port Authority (day) official postcard No. 72587-B",
          },
          reverse: {
            src: "/images/pcards01/72587-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — New York Port Authority (day) official postcard",
          },
          meta: [
            "New York Port Authority (day)",
            "Official Postcard",
            "No. 72587-B",
            "Dexter No. WF-12",
            "Manhattan No. W-16",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/72588-B.jpg",
            width: 450,
            height: 281,
            alt: "Pavilion of the Vatican official postcard No. 72588-B",
          },
          reverse: {
            src: "/images/pcards01/72588-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Pavilion of the Vatican official postcard",
          },
          meta: [
            "Pavilion of the Vatican",
            "Official Postcard",
            "No. 72588-B",
            "Dexter No. WF-5",
            "Manhattan No. W-17",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/72589-B.jpg",
            width: 280,
            height: 450,
            alt: "New York State Exhibit official postcard No. 72589-B",
          },
          reverse: {
            src: "/images/pcards01/72589-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — New York State Exhibit official postcard",
          },
          meta: [
            "New York State Exhibit",
            "Official Postcard",
            "No. 72589-B",
            "Dexter No. WF-28",
            "Manhattan No. W-18",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/72590-B.jpg",
            width: 450,
            height: 283,
            alt: "Plaza of the Astronauts official postcard No. 72590-B",
          },
          reverse: {
            src: "/images/pcards01/72590-Breverse.jpg",
            width: 300,
            height: 120,
            alt: "Reverse — Plaza of the Astronauts official postcard",
          },
          meta: [
            "Plaza of the Astronauts",
            "Official Postcard",
            "No. 72590-B",
            "Dexter No. WF-8",
            "Manhattan No. W-19",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/73187-B.jpg",
            width: 450,
            height: 282,
            alt: "Morocco Pavilion official postcard No. 73187-B",
          },
          reverse: {
            src: "/images/pcards01/73187-Breverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Morocco Pavilion official postcard",
          },
          meta: [
            "Morocco Pavilion",
            "Official Postcard",
            "No. 73187-B",
            "Dexter No. WF-23",
            "Manhattan No. W-37",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/74030-B.jpg",
            width: 450,
            height: 282,
            alt: "Continental Circus official postcard No. 74030-B",
          },
          reverse: {
            src: "/images/pcards01/74030-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Continental Circus official postcard",
          },
          meta: [
            "Continental Circus",
            "Official Postcard",
            "No. 74030-B",
            "Dexter No. WF-19",
            "Manhattan No. W-20",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/74143-B.jpg",
            width: 450,
            height: 281,
            alt: "Sinclair Dinoland official postcard No. 74143-B",
          },
          reverse: {
            src: "/images/pcards01/74143-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Sinclair Dinoland official postcard",
          },
          meta: [
            "Sinclair Dinoland",
            "Official Postcard",
            "No. 74143-B",
            "Dexter No. WF-44",
            "Manhattan No. W-21",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/74195-B.jpg",
            width: 450,
            height: 281,
            alt: "General Electric Progressland official postcard No. 74195-B",
          },
          reverse: {
            src: "/images/pcards01/74195-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — General Electric Progressland official postcard",
          },
          meta: [
            "General Electric Progressland",
            "Official Postcard",
            "No. 74195-B",
            "Dexter No. N/A",
            "Manhattan No. W-22",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/74993-B.jpg",
            width: 450,
            height: 282,
            alt: "Festival of Gas official postcard No. 74993-B",
          },
          reverse: {
            src: "/images/pcards01/74993-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Festival of Gas official postcard",
          },
          meta: [
            "Festival of Gas",
            "Official Postcard",
            "No. 74993-B",
            "Dexter No. WF-43",
            "Manhattan No. W-23",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/74995-B.jpg",
            width: 450,
            height: 282,
            alt: "Johnson's Wax official postcard No. 74995-B",
          },
          reverse: {
            src: "/images/pcards01/74995-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Johnson's Wax official postcard",
          },
          meta: [
            "Johnson's Wax",
            "Official Postcard",
            "No. 74995-B",
            "Dexter No. WF-39",
            "Manhattan No. W-24",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/75469-B.jpg",
            width: 450,
            height: 280,
            alt: "Aerial (Center of Fair) - Model official postcard No. 75469-B",
          },
          reverse: {
            src: "/images/pcards01/75469-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Aerial (Center of Fair) - Model official postcard",
          },
          meta: [
            "Aerial (Center of Fair) - Model",
            "Official Postcard",
            "No. 75469-B",
            "Dexter No. WF-33",
            "Manhattan No. W-25",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/75470-B.jpg",
            width: 450,
            height: 281,
            alt: "Aerial (Side view of Fair) - Model official postcard No. 75470-B",
          },
          reverse: {
            src: "/images/pcards01/75470-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Aerial (Side view of Fair) - Model official postcard",
          },
          meta: [
            "Aerial (Side view of Fair) - Model",
            "Official Postcard",
            "No. 75470-B",
            "Dexter No. WF-34",
            "Manhattan No. W-26",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/75494-B.jpg",
            width: 450,
            height: 281,
            alt: "World's Fair Marina official postcard No. 75494-B",
          },
          reverse: {
            src: "/images/pcards01/75494-Breverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse — World's Fair Marina official postcard",
          },
          meta: [
            "World's Fair Marina",
            "Official Postcard",
            "No. 75494-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/75707-B.jpg",
            width: 287,
            height: 450,
            alt: "Continental Insurance Co. Pavilion official postcard No. 75707-B",
          },
          reverse: {
            src: "/images/pcards01/75707-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Continental Insurance Co. Pavilion official postcard",
          },
          meta: [
            "Continental Insurance Co. Pavilion",
            "Official Postcard",
            "No. 75707-B",
            "Dexter No. WF-26",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/75761-B.jpg",
            width: 450,
            height: 284,
            alt: "Pavilion of American Interiors official postcard No. 75761-B",
          },
          reverse: {
            src: "/images/pcards01/75761-Breverse.jpg",
            width: 300,
            height: 111,
            alt: "Reverse — Pavilion of American Interiors official postcard",
          },
          meta: [
            "Pavilion of American Interiors",
            "Official Postcard",
            "No. 75761-B",
            "Dexter No. WF-41",
            "Manhattan No. W-27",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards01/76589-B.jpg",
            width: 450,
            height: 283,
            alt: "Kodak Pavilion official postcard No. 76589-B",
          },
          reverse: {
            src: "/images/pcards01/76589-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Kodak Pavilion official postcard",
          },
          meta: [
            "Kodak Pavilion",
            "Official Postcard",
            "No. 76589-B",
            "Dexter No. N/A",
            "Manhattan No. W-28",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
