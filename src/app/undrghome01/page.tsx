import type { Metadata } from "next";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Underground World Home — nywf64.com",
  description:
    "Underground World Home entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy undrghome01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Undrghome01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Underground World Home"
      titleId="undrghome01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/undrghomeoverview/hero-banner.jpg",
        alt: "Underground World Home at the 1964/1965 New York World’s Fair",
        width: 2073,
        height: 758,
      }}
      nav={<UndrghomeNavChrome />}
      previousHref="/undrghomeoverview"
      nextHref="/undrghome02"
      guide1964={{
        cover: {
          src: "/images/undrghome01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/undrghome01/undgrologo64.gif",
          width: 144,
          height: 88,
          alt: "",
        },
        name: (
          <>
            UNDERGROUND
            <br />
            WORLD HOME
          </>
        ),
        copy: (
          <>
            Something really different in housing is displayed here: a
            three-bedroom house, completely below ground level. It is presented
            as the forerunner of dwellings that the builder says have marked
            advantages for today&apos;s living. Guides explain why underground
            homes can provide more control over air, climate and noise than
            conventional houses - as well as protection from such hazards as
            fire and radiation fallout. The house occupies most of the area
            inside a concrete shell, the top of which is two and a half feet
            underground; a wide staircase brings visitors down to the fornt
            door. Windows in the house face scenic murals placed on the walls
            of the shell.
          </>
        ),
        admission: "Admission: $1.00.",
      }}
      guide1965={{
        cover: {
          src: "/images/undrghome01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/undrghome01/undgrologo.gif",
          width: 144,
          height: 94,
          alt: "",
        },
        name: "UNDERGROUND HOME",
        nameFace: "arial",
        summary: (
          <>
            The advantages of underground living are realistically displayed in
            an ultramodern 10-room house built below the earth&apos;s surface.
          </>
        ),
        copy: (
          <>
            The house and its patio are contained within a specially designed
            reinforced concrete shell. Among the desirable features stressed by
            the exhibitor are complete privacy, acoustical and climate control,
            and safety from hazards. A snack bar sells &quot;crab burgers&quot;
            and other light refreshments.
          </>
        ),
        admission:
          "Admission: $1.00; students, 50 cents; children under 12 with adults, free..",
      }}
      map={{
        cover: {
          src: "/images/undrghome01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/undrghome01/trasmlmap.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/undrghomemap",
      }}
    />
  );
}
