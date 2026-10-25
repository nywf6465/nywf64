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
 * Official Postcards gallery continued (legacy pcards07.html → /pcards06).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 7. PREVIOUS → /pcards05; NEXT → /pcards07.
 */
export default function Pcards06Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards06-title"
      title="Official Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards05"
      overviewHref="/pcardsoverview"
      nextHref="/pcards07"
      entries={[
        {
          front: {
            src: "/images/pcards06/91861-B.jpg",
            width: 450,
            height: 281,
            alt: "Night General Electric official postcard No. 91861-B",
          },
          reverse: {
            src: "/images/pcards06/91861-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Night General Electric official postcard",
          },
          meta: [
            "Night General Electric",
            "Official Postcard",
            "No. 91861-B",
            "Dexter No. WF-112",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91863-B.jpg",
            width: 450,
            height: 279,
            alt: "Night Fountain of Planets (Gold) official postcard No. 91863-B",
          },
          reverse: {
            src: "/images/pcards06/91863-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Night Fountain of Planets (Gold) official postcard",
          },
          meta: [
            "Night Fountain of Planets (Gold)",
            "Official Postcard",
            "No. 91863-B",
            "Dexter No. WF-113",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91864-B.jpg",
            width: 450,
            height: 279,
            alt: "Night Fountain of Planets (Blue) official postcard No. 91864-B",
          },
          reverse: {
            src: "/images/pcards06/91864-Breverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Night Fountain of Planets (Blue) official postcard",
          },
          meta: [
            "Night Fountain of Planets (Blue)",
            "Official Postcard",
            "No. 91864-B",
            "Dexter No. WF-114",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91865-B.jpg",
            width: 450,
            height: 278,
            alt: "Night United States Pavilion official postcard No. 91865-B",
          },
          reverse: {
            src: "/images/pcards06/91865-Breverse.jpg",
            width: 300,
            height: 99,
            alt: "Reverse — Night United States Pavilion official postcard",
          },
          meta: [
            "Night United States Pavilion",
            "Official Postcard",
            "No. 91865-B",
            "Dexter No. WF-115",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91867-B.jpg",
            width: 282,
            height: 450,
            alt: "Night N.Y. State Pavilion (Vertical) official postcard No. 91867-B",
          },
          reverse: {
            src: "/images/pcards06/91867-Breverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — Night N.Y. State Pavilion (Vertical) official postcard",
          },
          meta: [
            "Night N.Y. State Pavilion (Vertical)",
            "Official Postcard",
            "No. 91867-B",
            "Dexter No. WF-116",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91869-B.jpg",
            width: 450,
            height: 280,
            alt: "Night Astral Fountain official postcard No. 91869-B",
          },
          reverse: {
            src: "/images/pcards06/91869-Breverse.jpg",
            width: 300,
            height: 117,
            alt: "Reverse — Night Astral Fountain official postcard",
          },
          meta: [
            "Night Astral Fountain",
            "Official Postcard",
            "No. 91869-B",
            "Dexter No. WF-117",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91868-B.jpg",
            width: 450,
            height: 280,
            alt: "Night Lunar Fountain official postcard No. 91868-B",
          },
          reverse: {
            src: "/images/pcards06/91868-Breverse.jpg",
            width: 300,
            height: 100,
            alt: "Reverse — Night Lunar Fountain official postcard",
          },
          meta: [
            "Night Lunar Fountain",
            "Official Postcard",
            "No. 91868-B",
            "Dexter No. WF-118",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91860-B.jpg",
            width: 450,
            height: 281,
            alt: "Night Solar Fountain official postcard No. 91860-B",
          },
          reverse: {
            src: "/images/pcards06/91860-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Night Solar Fountain official postcard",
          },
          meta: [
            "Night Solar Fountain",
            "Official Postcard",
            "No. 91860-B",
            "Dexter No. WF-119",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/91862-B.jpg",
            width: 450,
            height: 279,
            alt: "Night N.Y. State Pavilion official postcard No. 91862-B",
          },
          reverse: {
            src: "/images/pcards06/91862-Breverse.jpg",
            width: 300,
            height: 108,
            alt: "Reverse — Night N.Y. State Pavilion official postcard",
          },
          meta: [
            "Night N.Y. State Pavilion",
            "Official Postcard",
            "No. 91862-B",
            "Dexter No. WF-120",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92008-B.jpg",
            width: 282,
            height: 450,
            alt: "Atlas-Mercury Launch Vehicle - U.S. Space Park official postcard No. 92008-B",
          },
          reverse: {
            src: "/images/pcards06/92008-Breverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Atlas-Mercury Launch Vehicle - U.S. Space Park official postcard",
          },
          meta: [
            "Atlas-Mercury Launch Vehicle - U.S. Space Park",
            "Official Postcard",
            "No. 92008-B",
            "Dexter No. WF-105",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92009-B.jpg",
            width: 286,
            height: 450,
            alt: "Titan II - U.S. Space Park official postcard No. 92009-B",
          },
          reverse: {
            src: "/images/pcards06/92009-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Titan II - U.S. Space Park official postcard",
          },
          meta: [
            "Titan II - U.S. Space Park",
            "Official Postcard",
            "No. 92009-B",
            "Dexter No. WF-106",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92010-B.jpg",
            width: 280,
            height: 450,
            alt: "Thor-Delta - U.S. Space Park official postcard No. 92010-B",
          },
          reverse: {
            src: "/images/pcards06/92010-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Thor-Delta - U.S. Space Park official postcard",
          },
          meta: [
            "Thor-Delta - U.S. Space Park",
            "Official Postcard",
            "No. 92010-B",
            "Dexter No. WF-107",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92011-B.jpg",
            width: 280,
            height: 450,
            alt: "Saturn V Boat Tail - U.S. Space Park official postcard No. 92011-B",
          },
          reverse: {
            src: "/images/pcards06/92011-Breverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Saturn V Boat Tail - U.S. Space Park official postcard",
          },
          meta: [
            "Saturn V Boat Tail - U.S. Space Park",
            "Official Postcard",
            "No. 92011-B",
            "Dexter No. WF-108",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92012-B.jpg",
            width: 450,
            height: 280,
            alt: "Replica of X-15 Rocket Plane - U.S. Space Park official postcard No. 92012-B",
          },
          reverse: {
            src: "/images/pcards06/92012-Breverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Replica of X-15 Rocket Plane - U.S. Space Park official postcard",
          },
          meta: [
            "Replica of X-15 Rocket Plane - U.S. Space Park",
            "Official Postcard",
            "No. 92012-B",
            "Dexter No. WF-109",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92014-B.jpg",
            width: 450,
            height: 281,
            alt: "Night Fountains of the Fair official postcard No. 92014-B",
          },
          reverse: {
            src: "/images/pcards06/92014-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Night Fountains of the Fair official postcard",
          },
          meta: [
            "Night Fountains of the Fair",
            "Official Postcard",
            "No. 92014-B",
            "Dexter No. WF-111",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92318-B.jpg",
            width: 450,
            height: 282,
            alt: "Night Vatican Pavilion official postcard No. 92318-B",
          },
          reverse: {
            src: "/images/pcards06/92318-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — Night Vatican Pavilion official postcard",
          },
          meta: [
            "Night Vatican Pavilion",
            "Official Postcard",
            "No. 92318-B",
            "Dexter No. WF-123",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards06/92320-B.jpg",
            width: 450,
            height: 281,
            alt: "Night Unisphere from N.Y.S. Towers official postcard No. 92320-B",
          },
          reverse: {
            src: "/images/pcards06/92320-Breverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Night Unisphere from N.Y.S. Towers official postcard",
          },
          meta: [
            "Night Unisphere from N.Y.S. Towers",
            "Official Postcard",
            "No. 92320-B",
            "Dexter No. WF-125",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
