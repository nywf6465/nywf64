import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { GencigNavChrome } from "@/components/GencigNavChrome";

export const metadata: Metadata = {
  title: "Advertising — General Cigar — nywf64.com",
  description:
    "General Cigar Hall of Magic advertisements from the Official Guide and The New York Times Magazine — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar advertising page — “advertising” standard.
 * Body from legacy gencig04.html. Layout: AdvertisingPage (/amex04)
 * with Official Guide collage panels + featured NYT Magazine ad.
 */
export default function Gencig04Page() {
  return (
    <AdvertisingPage
      heroLabel="General Cigar"
      titleId="gencig04-title"
      hero={{
        src: "/images/gencigoverview/hero-banner.jpg",
        alt: "General Cigar at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GencigNavChrome />}
      previousHref="/gencig03"
      overviewHref="/gencigoverview"
      nextHref="/gencig05"
      columns={2}
      tiles={[
        {
          src: "/images/gencig04/gencig38.01.jpg",
          width: 300,
          height: 339,
          alt: "General Cigar advertisement panel 1",
        },
        {
          src: "/images/gencig04/gencig38.02.jpg",
          width: 300,
          height: 339,
          alt: "General Cigar advertisement panel 2",
        },
        {
          src: "/images/gencig04/gencig38.03.jpg",
          width: 300,
          height: 339,
          alt: "General Cigar advertisement panel 3",
        },
        {
          src: "/images/gencig04/gencig38.04.jpg",
          width: 300,
          height: 339,
          alt: "General Cigar advertisement panel 4",
        },
        {
          src: "/images/gencig04/gencig38.05.jpg",
          width: 300,
          height: 339,
          alt: "General Cigar advertisement panel 5",
        },
        {
          src: "/images/gencig04/gencig38.06.jpg",
          width: 300,
          height: 339,
          alt: "General Cigar advertisement panel 6",
        },
      ]}
      sources={[
        <>
          Source: Advertisement{" "}
          <em>
            1964 & 1965 Official Guide, 1964-1965 New York World&apos;s Fair
          </em>
        </>,
      ]}
      featureDivider
      feature={{
        image: {
          src: "/images/gencig04/gencig09.jpg",
          width: 600,
          height: 221,
          alt: "magic! magic! magic! — General Cigar Hall of Magic advertisement",
        },
        body: (
          <>
            <p>
              <strong>
                National Advertising for the General Cigar Hall of Magic at the
                1964/1965 NY World&apos;s Fair
              </strong>
            </p>
            <p>
              <strong>magic! magic! magic!</strong>
            </p>
            <p>
              <strong>Come one! Come all! To the Hall of Magic!</strong>
            </p>
            <p>
              Created by Mark Wilson. There&apos;s fun, excitement, bafflement
              for all the family! See why everyone&apos;s saying &quot;Meet me
              under the smoke rings at the Fair!&quot; You won&apos;t want to
              miss the most magical fun at the Fair. And you can&apos;t miss it.
              Just look up in the sky for the giant smoke rings. They&apos;ll
              lead you to General Cigar&apos;s fantastic Hall of Magic. And
              that&apos;s where the excitement is. And all the fun and mystery. A
              new show every 15 minutes, performed by world famous magicians.
              Right before your very eyes -- a lovely lady suspended in midair, a
              woman sawed in half, a magician stepping from an empty cabinet,
              objects disappearing in thin air. Magic. Magic. Magic. Mystery and
              fun all around you. A treat for all the family at the General Cigar
              Hall of Magic.
            </p>
          </>
        ),
        source: (
          <>
            SOURCE: <em>The New York Times Magazine</em>, April 19, 1964
          </>
        ),
      }}
    />
  );
}
