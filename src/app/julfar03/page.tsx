import type { Metadata } from "next";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Julimar Farm — nywf64.com",
  description:
    "Julimar Farm gallery of photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Julimar Farm gallery — “photographs” standard.
 * Body from legacy julfar03.html. Layout: PhotographsPage.
 */
export default function Julfar03Page() {
  return (
    <PhotographsPage
      heroLabel="Julimar Farm"
      titleId="julfar03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/julfaroverview/hero-banner.jpg",
        alt: "Julimar Farm at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JulfarNavChrome />}
      previousHref="/julfar02"
      overviewHref="/julfaroverview"
      nextHref="/julfar04"
      sections={[
        {
          heading: "Photographs",
          photos: [
            {
              image: {
                src: "/images/julfar03/julfar05.jpg",
                width: 400,
                height: 268,
                alt: "Julimar Farm Pavilion",
              },
              title: (
                <>
                  <strong>The Julimar Farm Pavilion </strong>can be seen at the
                  bottom of this photo
                </>
              ),
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/julfar03/julfar04.jpg",
                width: 600,
                height: 490,
                alt: "Julimar Farm Pavilion",
              },
              source: (
                <>
                  SOURCE: <em>New York News Sunday Coloroto Magazine</em>, April
                  12, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/julfar03/betliv02.jpg",
                width: 475,
                height: 379,
                alt: "Julimar Farm Pavilion aerial",
              },
              title: (
                <>
                  <strong>The Julimar Farm Pavilion </strong>is seen in this
                  aerial nestled between the giant Better Living Building
                  (hexagonal structure center) and the Pepsi-Cola Pavilion (to
                  right). The gardens can be seen surrounding the low square
                  building designed by Edward Durell Stone.
                </>
              ),
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
          ],
        },
      ]}
    />
  );
}
