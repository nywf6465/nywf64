import type { Metadata } from "next";
import { ArlhatNavChrome } from "@/components/ArlhatNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Arlington Hat — nywf64.com",
  description:
    "Arlington Hat entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Arlington Hat guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy arlhat01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Map column has four Locate It links (Industrial, International, Federal/State,
 * Transportation) to /arlhatindmap, /arlhatintmap, /arlhatstamap, /arlhattramap.
 */
export default function Arlhat01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Arlington Hat"
      titleId="arlhat01-title"
      hero={{
        src: "/images/arlhatoverview/hero-banner.jpg",
        alt: "Arlington Hat at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ArlhatNavChrome />}
      nextHref="/arlhat02"
      guide1964={{
        cover: {
          src: "/images/arlhat01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/arlhat01/logo-1964.gif",
          width: 144,
          height: 84,
          alt: "",
        },
        name: "ARLINGTON HAT",
        copy: (
          <>
            A number of unusual hats - the Fair&apos;s largest, smallest,
            funniest, oldest and most unusual, gathered by the Junior Chamber of
            Commerce of Connecticut - are displayed in this pavilion sponsored by
            the Fair&apos;s official hatter, the Arlington Hat Company. Fourteen
            similar Arlington &quot;Hat-a-rama&quot; concessions located
            throughout the grounds sell a variety of souvenir hats priced from
            $1.00 to $5.00. They also carry the official World&apos;s Fair
            balloons.
          </>
        ),
        admission: ["Admission: free.", "Hours: 10 a.m. to 10 p.m"],
      }}
      guide1965={{
        cover: {
          src: "/images/arlhat01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/arlhat01/logo-1965.gif",
          width: 144,
          height: 84,
          alt: "",
        },
        name: "ARLINGTON HAT",
        summary: (
          <>
            Unusual hats -- large, small, funny, old and odd -- are displayed by
            the Fair&apos;s official hatter.
          </>
        ),
        copy: (
          <>
            The hats, gathered by the Junior Chamber of Commerce of Connecticut,
            are shown in a museum. Arlington also operates six concession stands
            around the Fair where souvenir hats and T-shirts are sold.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/arlhat01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        locates: [
          {
            areaMap: {
              src: "/images/arlhat01/industrial-map.gif",
              width: 60,
              height: 54,
              alt: "Industrial area map",
            },
            locateHref: "/arlhatindmap",
          },
          {
            areaMap: {
              src: "/images/arlhat01/international-map.gif",
              width: 60,
              height: 54,
              alt: "International area map",
            },
            locateHref: "/arlhatintmap",
          },
          {
            areaMap: {
              src: "/images/arlhat01/federal-state-map.gif",
              width: 60,
              height: 54,
              alt: "Federal and State area map",
            },
            locateHref: "/arlhatstamap",
          },
          {
            areaMap: {
              src: "/images/arlhat01/transportation-map.gif",
              width: 60,
              height: 54,
              alt: "Transportation area map",
            },
            locateHref: "/arlhattramap",
          },
        ],
      }}
    />
  );
}
