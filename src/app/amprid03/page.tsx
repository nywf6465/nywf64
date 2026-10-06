import type { Metadata } from "next";
import { AmpridNavChrome } from "@/components/AmpridNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Amphicar Ride — nywf64.com",
  description:
    "Amphicar Ride photograph album — publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphicar Ride photograph album — “photographs” standard.
 * Body from legacy amprid03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Second card is the legacy 2×2 Official Guide spread composed into one image.
 */
export default function Amprid03Page() {
  return (
    <PhotographsPage
      heroLabel="Amphicar Ride"
      titleId="amprid03-title"
      hero={{
        src: "/images/ampridoverview/hero-banner.jpg",
        alt: "Amphicar Ride at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmpridNavChrome />}
      previousHref="/amprid02"
      overviewHref="/amprid01"
      nextHref="/amprid01"
      sections={[
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/amprid03/amphicar-ashore.jpg",
                width: 332,
                height: 196,
                alt: "Amphicar driving ashore at Meadow Lake",
              },
              title: (
                <>
                  After a five-minute swim in Meadow Lake, a novel Amphicar
                  drives ashore to its &quot;dock&quot; between Hawaii and the
                  Amphitheater. In background is Restaurant of the Five Volcanos.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, July 11, 1965.
                </>
              ),
            },
            {
              image: {
                src: "/images/amprid03/guide-spread.jpg",
                width: 600,
                height: 400,
                alt: "Amphicar Ride photographs from the 1965 Official Guide",
              },
              title: "1965 Official Guide",
              source: (
                <>
                  SOURCE: <em>1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
