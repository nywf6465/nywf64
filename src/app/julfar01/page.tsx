import type { Metadata } from "next";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Julimar Farm — nywf64.com",
  description:
    "Julimar Farm entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Julimar Farm guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy julfar01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Julfar01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Julimar Farm"
      titleId="julfar01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/julfaroverview/hero-banner.jpg",
        alt: "Julimar Farm at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JulfarNavChrome />}
      previousHref="/julfaroverview"
      nextHref="/julfar02"
      guide1964={{
        cover: {
          src: "/images/julfar01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/julfar01/julfarlogo64.gif",
          width: 137,
          height: 73,
          alt: "",
        },
        name: "JULIMAR FARM",
        copy: (
          <>
            A number of gardens - Polynesian, Renaissance, herb, English, and so
            on - comprise the main exhibit of this pavilion, which is sponsored
            by a new corporation that sells &quot;packaged gardens,&quot; i.e.,
            garden designs custom-fitted to the client&apos;s requirements. The
            tiny pavilion, which is in the style of a contemporary Southern
            plantation, was designed by noted architect Edward Durell Stone, and
            the exhibit gardens are by his son, Edward Jr. The company&apos;s
            line of gourmet foods - Hawaiian coffee, Swedish pancake flour,
            exotic jams and jellies - is on sale in the pavilion.
          </>
        ),
        admission: "Admission: 60 cents; children 25 cents.",
      }}
      guide1965={{
        cover: {
          src: "/images/julfar01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/julfar01/julfarlogo.gif",
          width: 144,
          height: 73,
          alt: "",
        },
        name: "JULIMAR FARM",
        nameFace: "arial",
        summary: (
          <>
            Gardens from many lands are featured at this pavilion.
          </>
        ),
        copy: (
          <>
            Among the different types of custom-designed gardens displayed about
            the building are Polynesian, Renaissance and English, plus a special
            herb garden for the blind. The open pavilion, surrounded by a
            veranda, was designed by the architect Edward Durell Stone. The
            gardens are by his son, Edward Jr. Admission is charged.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/julfar01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/julfar01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/julfarmap",
      }}
    />
  );
}
