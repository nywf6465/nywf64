import type { Metadata } from "next";
import { FinartNavChrome } from "@/components/FinartNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Fine Arts Pavilion — nywf64.com",
  description:
    "Fine Arts Pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fine Arts Pavilion photograph album.
 * Body from legacy finart02.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03). Last topic — NEXT returns to overview.
 */
export default function Finart02Page() {
  return (
    <PhotographsPage
      heroLabel="Fine Arts Pavilion"
      titleId="finart02-title"
      hero={{
        src: "/images/finartoverview/hero-banner.jpg",
        alt: "Fine Arts Pavilion at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<FinartNavChrome />}
      previousHref="/finart01"
      overviewHref="/finartoverview"
      nextHref="/finartoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/finart02/argent_barfub01.jpg",
                width: 450,
                height: 361,
                alt: "Exterior view of the Fine Arts Pavilion",
              },
              title: "Exterior view of the Fine Arts Pavilion",
              source:
                "SOURCE: NY World's Fair Corporation publicity photo presented courtesy Craig Bavaro Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/finart02/argent_barfub04.jpg",
                width: 400,
                height: 245,
                alt: "Fine Arts Pavilion",
              },
              title: "Fine Arts Pavilion",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/finart02/argent_barfub03.jpg",
                width: 400,
                height: 267,
                alt: "Red-draped Fine Arts Pavilion behind the Korea Pavilion",
              },
              title: (
                <>
                  Red-draped Fine Arts Pavilion - behind and to the right of the
                  Korea Pavilion
                </>
              ),
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}
