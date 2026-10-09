import type { Metadata } from "next";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Dynamic Maturity — nywf64.com",
  description:
    "Dynamic Maturity pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy dynmat01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /dynmatmap (Industrial Area).
 */
export default function Dynmat01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Dynamic Maturity"
      titleId="dynmat01-title"
      hero={{
        src: "/images/dynmatoverview/hero-banner.jpg",
        alt: "Dynamic Maturity at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<DynmatNavChrome />}
      previousHref="/dynmatoverview"
      nextHref="/dynmat02"
      guide1964={{
        cover: {
          src: "/images/dynmat01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/dynmat01/dynmatlogo64.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: "DYNAMIC MATURITY",
        copy: (
          <>
            This pavilion, sponsored by The American Association of Retired
            Persons and the National Retired Teachers Association, is a grouping
            of galleries, gardens and exhibits devoted in large part to the
            secrets of successful and useful retirement.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "PAINTINGS AND PICTURES.",
            body: (
              <>
                The pavilion offers several special visual attractions. Panoramic
                views of the fairgrounds are seen in a darkened room by means of
                the ancient camera obscura process - a rotating mirror and a lens
                pick up and project scenes from outdoors. Six paintings on the
                pleasures of leisure by the meticulous Danish artist Kurt Ard are
                on display in a gallery. A large sundial at the pavilion entrance
                is surrounded by benches and flowers, providing a pleasant
                atmosphere for relaxation and contemplation.
              </>
            ),
          },
          {
            label: "ORGANIZATIONS AT WORK.",
            body: (
              <>
                In six exhibits the NRTA (an organization of retired teachers) and
                AARP (whose rolls are open to any person over 55) describe
                programs for members that include low-cost medical insurance and
                drugs, educational and cultural opportunities and tours around
                the world. Members of the two organizations who register with the
                pavilion may win free trips.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/dynmat01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/dynmat01/dynmatlogo.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: "DYNAMIC MATURITY",
        summary: (
          <>
            Older visitors are offered hospitality, a patio to relax in and help
            in planning their Fair tour.
          </>
        ),
        copy: (
          <>
            In &quot;Patio 55,&quot; open to anyone 55 or older, refreshments are
            served without charge between 2 and 5 p.m., and there are special
            events and talks on aging and retirement. The pavilion&apos;s
            sponsors, the American association of Retired Persons and the
            National Retired Teachers Association, illustrate health, travel and
            cultural programs of special benefit to older people.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/dynmat01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/dynmat01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/dynmatmap",
      }}
    />
  );
}
