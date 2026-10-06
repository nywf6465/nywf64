import type { Metadata } from "next";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Greyhound — nywf64.com",
  description:
    "Greyhound pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy greyhound01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Single Locate It → /greyhoundmap (Transportation Area).
 */
export default function Greyhound01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Greyhound"
      titleId="greyhound01-title"
      hero={{
        src: "/images/greyhoundoverview/hero-banner.jpg",
        alt: "Greyhound at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreyhoundNavChrome />}
      previousHref="/greyhoundoverview"
      nextHref="/greyhound02"
      guide1964={{
        cover: {
          src: "/images/greyhound01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/greyhound01/grehoulogo64.gif",
          width: 144,
          height: 78,
          alt: "",
        },
        name: "GREYHOUND",
        copy: (
          <>
            A transcontinental bus ride on film and regional American meals are
            the main attraction of this pavilion. It is also home base for the
            Fair&apos;s transportation fleet of over 300 Greyhound vehicles.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "COAST-TO-COAST ON A BUS.",
            body: (
              <>
                Audiences in the Circle Theater stand on a slowly revolving
                turntable to view the history of the wheel in slide projections;
                a short but vivid film picturing America as it might appear
                through the window of a cross-country bus; and a map which glows
                in the dark, tracing Greyhound routes through the U.S. and
                Canada.
              </>
            ),
          },
          {
            label: "REGIONAL COOKING.",
            body: (
              <>
                Main Street, U.S.A., has three dining rooms: The Nantucket Room,
                the Federal Room and the Western Room. All three serve regional
                dishes: seafood, Southern cooking and beef. The pavilion also
                has a cafeteria.
              </>
            ),
          },
          {
            label: "SIDESHOWS.",
            body: (
              <>
                In a small theater Lady Greyhound, the company&apos;s live
                canine symbol, models dog clothes, and there are color films of
                various regions of the United States.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/greyhound01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/greyhound01/grehoulogo.gif",
          width: 144,
          height: 83,
          alt: "",
        },
        name: "GREYHOUND",
        summary: (
          <>
            Among the highlights are travel exhibits, regional cooking and a
            canine fashion show.
          </>
        ),
        copy: (
          <>
            This pavilion is home base for the fleet of &quot;Glide-a-Ride&quot;
            trains and buses used for public transportation at the Fair. There
            are also displays of attractions around the United States featured
            in Greyhound highway tours.
          </>
        ),
        highlights: [
          {
            label: "REGIONAL COOKING.",
            body: (
              <>
                Main Street, U.S.A., has three dining rooms -- the Nantucket,
                Federal and Western Rooms -- where seafood, Southern dishes and
                beef are served. In a special cafeteria, diners quick-cook their
                own selections by push-button microwave.
              </>
            ),
          },
          {
            label: "FASHION SHOW.",
            body: (
              <>
                Four times a day Lady Greyhound, the company&apos;s live canine
                symbol, models the latest in dog fashions.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/greyhound01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/greyhound01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/greyhoundmap",
      }}
    />
  );
}
