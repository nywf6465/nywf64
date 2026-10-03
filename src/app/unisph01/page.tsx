import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Unisphere — nywf64.com",
  description:
    "Unisphere entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy unisph01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Unisph01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Unisphere"
      titleId="unisph01-title"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1914,
        height: 822,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisphoverview"
      nextHref="/unisph02"
      guide1964={{
        cover: {
          src: "/images/unisph01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/unisph01/unisphere-logo-1964.gif",
          width: 144,
          height: 146,
          alt: "",
        },
        name: "UNISPHERE",
        copy: (
          <>
            Symbol of the New York World&apos;s Fair 1964/1965 is this
            12-story-high stainless steel model of the earth designed, built and
            presented to the Fair by United States Steel. Dedicated to
            &quot;Peace through Understanding,&quot; the Unisphere will remain
            on its site when the Fair is over, as a permanent gift to the City
            of New York for the improved Flushing Meadow Park that will be
            created on the fairgrounds. It is located at the Fountain of the
            Continents, near the center of the Fair. Seen from the edge of the
            pool, it shows the world as it appears from 6,000 miles in space.
          </>
        ),
        highlights: [
          {
            label: "THE STATISTICS.",
            body: (
              <>
                The Unisphere is the largest representation of the earth man has
                ever made. It is 140 feet high and 120 feet in diameter and -
                with its tri-pod-like base - weighs 900,000 pounds. The sphere
                is formed of an open grid of meridians and parallels. Laid on
                them are curved sheets of stainless steel representing the land
                masses; the capitals of major nations are marked by lights.
              </>
            ),
          },
          {
            label: "THE DESIGN.",
            body: (
              <>
                Unprecedented problems had to be solved in constructing the huge
                model. Because the continents are not evenly distributed on
                earth, the Unipshere, which stands on three slender prongs, is
                an unbalanced ball. Furthermore, the metal land-mass areas act
                as sails in the wind, building up enormous and unequal pressures
                against the curved surfaces. The structure required the solution
                of mathematical problems so complex that without high-speed
                computers planning the Unisphere would have taken 10 years.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/unisph01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/unisph01/unisphere-logo-1965.gif",
          width: 144,
          height: 134,
          alt: "",
        },
        name: "UNISPHERE",
        summary: (
          <>
            Symbol of the Fair, this 12-story high stainless-steel model of the
            earth was built and presented by United States Steel.
          </>
        ),
        copy: (
          <>
            Dedicated to &quot;Peace through Understanding,&quot; the Unisphere
            will remain on its site when the Fair is over, as a gift to the city
            for the improved Flushing Meadow Park to be created on the
            fairgrounds.
          </>
        ),
        highlights: [
          {
            label: "THE STATISTICS.",
            body: (
              <>
                The Unisphere is the largest representation of the earth ever
                made: 140 feet high, 120 feet in diameter. The capitals of the
                major nations are marked by lights.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/unisph01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/unisph01/federal-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/unisphmap",
      }}
    />
  );
}
