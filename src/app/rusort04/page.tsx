import type { Metadata } from "next";
import { RusortNavChrome } from "@/components/RusortNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title:
    "Gallery of Photographs — Russian Orthodox Greek-Catholic Church of America — nywf64.com",
  description:
    "Russian Orthodox Greek-Catholic Church of America gallery of photographs — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Russian Orthodox photograph gallery — “photographs” standard.
 * Body from legacy rusort04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Rusort04Page() {
  return (
    <PhotographsPage
      heroLabel="Russian Orthodox Greek-Catholic Church of America"
      titleId="rusort04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/rusortoverview/hero-banner.jpg",
        alt: "Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<RusortNavChrome />}
      previousHref="/rusort03"
      overviewHref="/rusortoverview"
      nextHref="/rusortoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/rusort04/rusort04.jpg",
                width: 400,
                height: 293,
                alt: "A Service is Held at the Russian Orthodox Greek-Catholic Church",
              },
              title:
                "A Service is Held at the Russian Orthodox Greek-Catholic Church",
              source: "SOURCE: Getty Images",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/rusort04/rusort03.jpg",
                width: 400,
                height: 399,
                alt: "Russian Orthodox Greek-Catholic Church (left)",
              },
              title: "Russian Orthodox Greek-Catholic Church (left)",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
