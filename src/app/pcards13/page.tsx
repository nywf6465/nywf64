import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Advertising Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Advertising Post Cards of the 1964/1965 New York World’s Fair from the nywf64.com collection.",
};

const advertising = (
  <span style={{ color: "#2e8b57" }}>Advertising Postcard</span>
);

/**
 * Advertising Postcards gallery (legacy pcards14.html → /pcards13).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 14. PREVIOUS → /pcards12; NEXT → /pcards14.
 */
export default function Pcards13Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards13-title"
      title="Advertising Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards12"
      overviewHref="/pcardsoverview"
      nextHref="/pcards14"
      entries={[
        {
          front: {
            src: "/images/pcards13/None(17).jpg",
            width: 450,
            height: 284,
            alt: "National Airlines advertising postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards13/None(17)reverse.jpg",
            width: 300,
            height: 136,
            alt: "Reverse — National Airlines advertising postcard",
          },
          meta: [
            "National Airlines",
            "Florida Pavilion",
            advertising,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Mort Kaye Studios",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/65624-B(2).jpg",
            width: 450,
            height: 284,
            alt: "Owens-Corning Fiberglas advertising postcard No. 65624-B",
          },
          reverse: {
            src: "/images/pcards13/65624-B(2)reverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — Owens-Corning Fiberglas advertising postcard",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "Hall of Education",
            advertising,
            "No. 65624-B",
            <img
              key="fiberglas-logo"
              src="/images/pcards13/03.jpg"
              width={150}
              height={55}
              alt="Owens-Corning Fiberglas"
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/72586-B(2).jpg",
            width: 450,
            height: 282,
            alt: "Owens-Corning Fiberglas advertising postcard No. 72586-B",
          },
          reverse: {
            src: "/images/pcards13/72586-B(2)reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Owens-Corning Fiberglas advertising postcard",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "Bell System Pavilion",
            advertising,
            "No. 72586-B",
            <img
              key="fiberglas-logo"
              src="/images/pcards13/03.jpg"
              width={150}
              height={55}
              alt="Owens-Corning Fiberglas"
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/83979-B.jpg",
            width: 450,
            height: 280,
            alt: "Owens-Corning Fiberglas advertising postcard No. 83979-B",
          },
          reverse: {
            src: "/images/pcards13/83979-Breverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — Owens-Corning Fiberglas advertising postcard",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "House of Good Taste",
            advertising,
            "No. 83979-B",
            <img
              key="fiberglas-logo"
              src="/images/pcards13/03.jpg"
              width={150}
              height={55}
              alt="Owens-Corning Fiberglas"
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/85084-B.jpg",
            width: 450,
            height: 284,
            alt: "Owens-Corning Fiberglas advertising postcard No. 85084-B",
          },
          reverse: {
            src: "/images/pcards13/85084-Breverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — Owens-Corning Fiberglas advertising postcard",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "World's Fair Marina",
            advertising,
            "No. 85084-B",
            <img
              key="fiberglas-logo"
              src="/images/pcards13/03.jpg"
              width={150}
              height={55}
              alt="Owens-Corning Fiberglas"
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/85085-B.jpg",
            width: 450,
            height: 287,
            alt: "Owens-Corning Fiberglas advertising postcard No. 85085-B",
          },
          reverse: {
            src: "/images/pcards13/85085-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Owens-Corning Fiberglas advertising postcard",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "New York State Exhibit",
            advertising,
            "No. 85085-B",
            <img
              key="fiberglas-logo"
              src="/images/pcards13/03.jpg"
              width={150}
              height={55}
              alt="Owens-Corning Fiberglas"
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/85086-B.jpg",
            width: 450,
            height: 283,
            alt: "Owens-Corning Fiberglas advertising postcard No. 85086-B",
          },
          reverse: {
            src: "/images/pcards13/85086-Breverse.jpg",
            width: 300,
            height: 120,
            alt: "Reverse — Owens-Corning Fiberglas advertising postcard",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "United States Pavilion",
            advertising,
            "No. 85086-B",
            <img
              key="fiberglas-logo"
              src="/images/pcards13/03.jpg"
              width={150}
              height={55}
              alt="Owens-Corning Fiberglas"
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/P54026.jpg",
            width: 450,
            height: 279,
            alt: "Allied Van Lines advertising postcard No. P54026",
          },
          reverse: {
            src: "/images/pcards13/P54026reverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Allied Van Lines advertising postcard",
          },
          meta: [
            "Allied Van Lines",
            "Transportation and Travel Pavilion",
            advertising,
            "No. P54026",
          ],
          sources: [
            "Source: Postcard Made by Colour Picture (Plastichrome)",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/None(20).jpg",
            width: 475,
            height: 271,
            alt: "\"To The Fair!\" advertising postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards13/None(20)reverse.jpg",
            width: 275,
            height: 80,
            alt: "Reverse — \"To The Fair!\" advertising postcard",
          },
          meta: [
            "\"To The Fair!\"",
            "Film Reservation Card",
            advertising,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/80480-B(3).jpg",
            width: 282,
            height: 450,
            alt: "Wurlitzer advertising postcard No. 80480-B",
          },
          reverse: {
            src: "/images/pcards13/80480-B(3)reverse.jpg",
            width: 300,
            height: 212,
            alt: "Reverse — Wurlitzer advertising postcard",
          },
          meta: [
            "Wurlitzer",
            "House of Good Taste",
            advertising,
            "No. 80480-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards13/80492-B.jpg",
            width: 700,
            height: 265,
            alt: "JFD LPV Antenna advertising postcard No. 80492-B",
          },
          reverse: {
            src: "/images/pcards13/80492-Breverse.jpg",
            width: 700,
            height: 271,
            alt: "Reverse — JFD LPV Antenna advertising postcard",
          },
          meta: [
            "JFD LPV Antenna",
            "House of Good Taste",
            advertising,
            "No. 80492-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        }
      ]}
    />
  );
}
