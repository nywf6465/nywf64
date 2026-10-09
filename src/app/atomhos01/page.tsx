import type { Metadata } from "next";
import { AtomhosNavChrome } from "@/components/AtomhosNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Atomedic Hospital — nywf64.com",
  description:
    "Atomedic Hospital entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Atomedic Hospital guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy atomhos01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; hospital entry
 * sits under the Souvenir Map column.
 */
export default function Atomhos01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Atomedic Hospital"
      titleId="atomhos01-title"
      hero={{
        src: "/images/atomhosoverview/hero-banner.jpg",
        alt: "Atomedic Hospital at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AtomhosNavChrome />}
      nextHref="/atomhos02"
      guide1964={{
        cover: {
          src: "/images/atomhos01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/atomhos01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/atomhos01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/atomhos01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/atomhosmap",
        subjectNoun: "feature",
        entry: {
          logo: {
            src: "/images/atomhos01/atomedic-logo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "ATOMEDIC HOSPITAL",
          copy: (
            <>
              The Atomedic Hospital is the functioning emergency hospital of the
              Fair. It is staffed by 20 professional nurses.
            </>
          ),
        },
      }}
    />
  );
}
