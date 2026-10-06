import type { Metadata } from "next";
import { FirnatNavChrome } from "@/components/FirnatNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — First National City Bank — nywf64.com",
  description:
    "First National City Bank photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * First National City Bank photograph album.
 * Body from legacy firnat03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Firnat03Page() {
  return (
    <PhotographsPage
      heroLabel="First National City Bank"
      titleId="firnat03-title"
      hero={{
        src: "/images/firnatoverview/hero-banner.jpg",
        alt: "First National City Bank at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FirnatNavChrome />}
      previousHref="/firnat02"
      overviewHref="/firnatoverview"
      nextHref="/firnat04"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/firnat03/firnat04.jpg",
                width: 400,
                height: 241,
                alt: "First National City Bank Exhibit Building",
              },
              title: "First National City Bank Exhibit Building",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/firnat03/firnat05.jpg",
                width: 400,
                height: 179,
                alt: "First National City Bank Operations Building",
              },
              title: "First National City Bank Operations Building",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/firnat03/firnat12.jpg",
                width: 400,
                height: 514,
                alt: "First National City Bank Exhibit Building",
              },
              title: "First National City Bank Exhibit Building",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
