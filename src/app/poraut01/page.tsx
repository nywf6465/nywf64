import type { Metadata } from "next";
import { PorautNavChrome } from "@/components/PorautNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Port Authority Heliport — nywf64.com",
  description:
    "Port Authority Heliport entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Port Authority Heliport guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy poraut01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 * Title appends “Entries” per legacy navy bar.
 */
export default function Poraut01Page() {
  const pavilionName = (
    <>
      PORT AUTHORITY
      <br />
      HELIPORT
    </>
  );

  return (
    <GuidebookSouvenirPage
      heroLabel="Port Authority Heliport"
      titleId="poraut01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/porautoverview/hero-banner.jpg",
        alt: "Port Authority Heliport at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<PorautNavChrome />}
      previousHref="/porautoverview"
      nextHref="/poraut02"
      guide1964={{
        cover: {
          src: "/images/poraut01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/poraut01/poraut-logo-1964.gif",
          width: 144,
          height: 134,
          alt: "",
        },
        name: pavilionName,
        copy: (
          <>
            Rising 120 feet on four mammoth tapered columns, the Port of New York
            Authority building is the aerial gateway to the Fair. It includes a
            heliport, restaurant and bar open the year round. Set below the
            heliport, a separate structure has a film and exhibits that tell the
            story of transportation in the New York - New Jersey Port District.
            Helicopters make sightseeing flights.
          </>
        ),
        admission: [
          "Admission: free.",
          "Restaurant hours 8 a.m. to 2 a.m.",
        ],
        highlights: [
          {
            label: "THE GREATEST PORT.",
            body: (
              <>
                A 12-minuted color movie, presented on a screen 195 feet in
                circumference, shows the mighty transit projects that enable
                millions of people to move through the New York area daily.
                Around the outside of the theater is a scale model of The World
                Trade Center for lower Manhattan. There is also an operating
                model of the recently acquired subway running under the Hudson
                River between New York and New Jersey.
              </>
            ),
          },
          {
            label: "AERIAL GATEWAY.",
            body: (
              <>
                The heliport provides a landing pad, 150 by 200 feet, for
                sightseeing flights.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                Located directly under the heliport platform, the Top of the Fair
                Restaurant provides a magnificent view of the Manhattan skyline
                and the Fair through special glareproof windows. On the floor
                below is a cocktail lounge featuring an international selection of
                mixed drinks.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/poraut01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/poraut01/poraut-logo-1965.gif",
          width: 144,
          height: 139,
          alt: "",
        },
        name: pavilionName,
        summary: (
          <>
            Rising 120 feet on four mammoth tapered columns, this structure is
            the aerial gateway to the Fair.
          </>
        ),
        copy: (
          <>
            Below a rooftop landing pad from which helicopters make scheduled
            flights are a restaurant, a private dining club and a cocktail lounge.
            A separate structure underneath has a film and exhibits on the Port of
            New York Authority&apos;s work.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "GREATEST PORT.",
            body: (
              <>
                A 13-minute color film, presented on a huge circular screen, shows
                the mighty transportation projects that enable millions of people
                to move through the New York area daily. On view are scale models
                of the Trans-Hudson railway tubes and World Trade Center planned
                for lower Manhattan.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                The Top of the Fair Restaurant and cocktail lounge, operated this
                year by Restaurant Associates, offers American cuisine and
                magnificent views of the Fair and New York&apos;s skyline through
                glare-proof windows.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/poraut01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/poraut01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/porautmap",
      }}
    />
  );
}
