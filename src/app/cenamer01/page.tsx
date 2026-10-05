import type { Metadata } from "next";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Central America — nywf64.com",
  description:
    "Central America entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy cenamer01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /cenamermap (International Area).
 */
export default function Cenamer01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Central America"
      titleId="cenamer01-title"
      hero={{
        src: "/images/cenameriverview/hero-banner.jpg",
        alt: "Central America at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CenamerNavChrome />}
      previousHref="/cenameriverview"
      nextHref="/cenamer02"
      guide1964={{
        cover: {
          src: "/images/cenamer01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/cenamer01/logo1964.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: "CENTRALAMERICA- PANAMA",
        copy: (
          <>
            Travel, culture and commerce are the main themes of this pavilion, an
            open-sided building with bright awnings, representing Panama and the
            five Central American Common Market countries which call themselves
            Centralamerica: Costa Rica, El Salvador, Guatemala, Honduras and
            Nicaragua. Most of the exhibition area is devoted to displays of both
            ancient and modern art, while tourist attractions are seen in a
            motion picture. Hostesses supply the fairgoer with tourist and
            industrial information relating to the region. A refreshment counter
            provides coffee, and visitors may sit at outdoor tables as they watch
            entertainers.
          </>
        ),
        highlights: [
          {
            label: "ARTS AND CRAFTS.",
            body: (
              <>
                Gold and ceramic objects fashioned by Indians before the days of
                Cortez share the displays with contemporary works. A curio shop
                sells wooden figurines, silver jewelry, smallarcheological relics
                and recordings of Central American music.
              </>
            ),
          },
          {
            label: "RESORTS AND RUINS.",
            body: (
              <>
                A color film shows Central America&apos;s beach resorts, jungle
                and mountain regions, Mayan ruins and Spanish colonial towns.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/cenamer01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/cenamer01/logo1965.gif",
          width: 144,
          height: 78,
          alt: "",
        },
        name: "CENTRAL AMERICA",
        nameFace: "arial",
        summary: (
          <>
            An open-sided building with bright awnings presents the culture and
            commerce of five countries linked in a common market.
          </>
        ),
        copy: (
          <>
            Costa Rica, El Salvador, Guatemala, Honduras and Nicaragua display
            ancient and modern art, and a motion picture on tourist attractions
            shows beach resorts, Maya ruins and Spanish colonial towns. Hostesses
            supply information. A refreshment counter serves coffee, and visitors
            may eat at outdoor tables as they watch entertainers.
          </>
        ),
        highlights: [
          {
            label: "ARTS AND CRAFTS.",
            labelFace: "arial",
            body: (
              <>
                Gold and ceramic objects made by Indians before the days of
                Cortez share billing with contemporary works. Gift shops sell
                wooden figurines, silver jewelry, small archeological relics and
                recordings of native music.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/cenamer01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/cenamer01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/cenamermap",
      }}
    />
  );
}
