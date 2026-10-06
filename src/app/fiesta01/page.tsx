import type { Metadata } from "next";
import { FiestaNavChrome } from "@/components/FiestaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fiesta — nywf64.com",
  description:
    "Fiesta entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fiesta guidebook page.
 * Body from legacy fiesta01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964: not open that season (status note only). Locate It → /fiestamap.
 */
export default function Fiesta01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Fiesta"
      titleId="fiesta01-title"
      hero={{
        src: "/images/fiestaoverview/hero-banner.jpg",
        alt: "Fiesta at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FiestaNavChrome />}
      previousHref="/fiestaoverview"
      nextHref="/fiesta02"
      guide1964={{
        cover: {
          src: "/images/fiesta01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            Fiesta made its appearance in 1965. It was not open for the 1964
            Season.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/fiesta01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/fiesta01/fiestalogo.gif",
          width: 144,
          height: 129,
          alt: "",
        },
        name: <>FIESTA</>,
        nameFace: "arial",
        summary: <>People-to-People presents the world in microcosm.</>,
        copy: (
          <>
            Africa, Asia, Europe, as well as the Americas, are represented in a
            &quot;village&quot; of kiosks which display and sell a variety of
            folk art. Admission is charged; proceeds go to a center for world
            understanding.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/fiesta01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/fiesta01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/fiestamap",
      }}
    />
  );
}
