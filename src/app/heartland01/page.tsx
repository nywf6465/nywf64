import type { Metadata } from "next";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States U.S.A. / Midwestern States souvenir-map entries — never built — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Heartland States guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy heartland01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964 & 1965: not included in the Official Guide Books; Heartland and
 * Midwestern States entries sit under the Souvenir Map column.
 * Locate It → /heartlandmap (Federal & State Area).
 */
export default function Heartland01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Heartland States U.S.A."
      titleId="heartland01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/heartlandoverview/hero-banner.jpg",
        alt: "Heartland States U.S.A. at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<HeartlandNavChrome />}
      previousHref="/heartlandoverview"
      nextHref="/heartland02"
      guide1964={{
        cover: {
          src: "/images/heartland01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this exhibit was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/heartland01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this exhibit was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/heartland01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/heartland01/federal-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/heartlandmap",
        entries: [
          {
            logo: {
              src: "/images/heartland01/4.jpg",
              width: 144,
              height: 94,
              alt: "",
            },
            name: "HEARTLAND STATES U.S.A",
            copy: (
              <>
                The Heartland States U.S.A. Pavilion would showcase the exhibits
                of the states of North and South Dakota, Nebraska and Kansas.
              </>
            ),
          },
          {
            logo: {
              src: "/images/heartland01/5.jpg",
              width: 144,
              height: 59,
              alt: "",
            },
            name: "MIDWESTERN STATES",
            copy: (
              <>
                The Midwestern States Exhibit would showcase the exhibits of the
                states of North and South Dakota, Nebraska, Kansas, Colorado,
                Iowa, Minnesota, Missouri, Montana and Wyoming.
              </>
            ),
            note: "The Heartland States U.S.A / Midwestern States Exhibit was never built. It would have occupied the site eventually allocated to the Pavilion of Oklahoma and the vacant lot adjacent to it.",
          },
        ],
      }}
    />
  );
}
