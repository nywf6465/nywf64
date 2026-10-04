import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Unisphere — nywf64.com",
  description:
    "Unisphere advertisements from the 1964 & 1965 Official Guide and United States Steel — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere advertising page — “advertising” standard.
 * Body from legacy unisph04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Unisph04Page() {
  return (
    <AdvertisingPage
      heroLabel="Unisphere"
      titleId="unisph04-title"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph03"
      overviewHref="/unisphoverview"
      nextHref="/unisph05"
      featureDivider
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/unisph04/unisph251.1.jpg",
              width: 300,
              height: 331,
              alt: "Unisphere advertisement panel 1",
            },
            {
              src: "/images/unisph04/unisph251.2.jpg",
              width: 300,
              height: 331,
              alt: "Unisphere advertisement panel 2",
            },
            {
              src: "/images/unisph04/unisph251.3.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 3",
            },
            {
              src: "/images/unisph04/unisph251.4.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 4",
            },
            {
              src: "/images/unisph04/unisph251.5.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 5",
            },
            {
              src: "/images/unisph04/unisph251.6.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 6",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/unisph04/unisph252.1.jpg",
              width: 300,
              height: 331,
              alt: "Unisphere advertisement panel 7",
            },
            {
              src: "/images/unisph04/unisph252.2.jpg",
              width: 300,
              height: 331,
              alt: "Unisphere advertisement panel 8",
            },
            {
              src: "/images/unisph04/unisph252.3.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 9",
            },
            {
              src: "/images/unisph04/unisph252.4.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 10",
            },
            {
              src: "/images/unisph04/unisph252.5.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 11",
            },
            {
              src: "/images/unisph04/unisph252.6.jpg",
              width: 300,
              height: 330,
              alt: "Unisphere advertisement panel 12",
            },
          ],
          sources: [
            <>
              Source: Advertisement 1964 & 1965{" "}
              <em>
                Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
      feature={{
        image: {
          src: "/images/unisph04/unisph01.jpg",
          width: 470,
          height: 515,
          alt: '"Miracle in the Meadow"',
        },
        source: "Source: United States Steel Advertisement",
        body: (
          <>
            <p>
              There&apos;s a 12-story miracle in Flushing Meadow Park called
              Unisphere. It&apos;s the largest replica of the world ever built.
              And the symbol of the 1964-1965 New York World&apos;s Fair.
            </p>
            <p>
              Before Unisphere was completed, it confronted U.S. Steel with
              unbelievable engineering and construction problems. Since it&apos;s
              an open sculpture, with virtually every part exposed, Unisphere had
              to be built to withstand the rain and ice. And the salt-laden gales
              that sweep across Long Island.
            </p>
            <p>
              But all these problems were solved. Without sacrificing beauty for
              strength, or strength for beauty. And defying predictions that
              Unisphere was &quot;impossible,&quot; it was completed a full five
              months ahead of schedule. And when the last section of the
              stainless-steel globe was put into place, all the pieces fit
              perfectly. They had to. There wasn&apos;t a replacement part on
              earth, because nothing like Unisphere had ever been attempted
              before.
            </p>
            <p>
              Unisphere towers 140 feet over a reflecting pool. Has 500 separate
              parts. Weighs 900 thousand pounds. And has a diameter of 120 feet.
            </p>
            <p>
              It will remain as a permanent reminder of man&apos;s aspirations
              for peace through understanding, and a symbol of his achievements
              in an expanding universe. Unisphere is truly the miracle in the
              meadow.
            </p>
          </>
        ),
      }}
    />
  );
}
