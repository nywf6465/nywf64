import type { Metadata } from "next";
import { HertzNavChrome } from "@/components/HertzNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Hertz — nywf64.com",
  description:
    "Hertz Travel Center entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hertz guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy hertz01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Legacy wording (“commmunication”, “reporested”, “reservtions”) preserved.
 * Locate It → /hertzmap (Transportation Area).
 */
export default function Hertz01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hertz"
      titleId="hertz01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/hertzoverview/hero-banner.jpg",
        alt: "Hertz Travel Center at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<HertzNavChrome />}
      previousHref="/hertzoverview"
      nextHref="/hertz02"
      guide1964={{
        cover: {
          src: "/images/hertz01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/hertz01/herlogo64.gif",
          width: 144,
          height: 82,
          alt: "",
        },
        name: "HERTZ",
        copy: (
          <>
            The Hertz Travel Center, at the base of the Heliport, is staffed by
            multilingual attendants who offer travel information, maps of the
            New York City area, and direct telephone commmunication to the
            airlines reporested at the Fair. The center can also arrange auto
            reservtions around the world.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/hertz01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/hertz01/herlogo.gif",
          width: 144,
          height: 86,
          alt: "",
        },
        name: "HERTZ TRAVEL CENTER",
        nameFace: "arial",
        summary: (
          <>
            Multilingual attendants offer travel information and local maps.
          </>
        ),
        copy: (
          <>
            The center also provides direct phone service to airlines
            represented at the Fair and arranges auto reservations any place in
            the world.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/hertz01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/hertz01/transport-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/hertzmap",
      }}
    />
  );
}
