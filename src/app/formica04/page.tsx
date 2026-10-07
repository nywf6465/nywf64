import type { Metadata } from "next";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Formica — nywf64.com",
  description:
    "Formica World's Fair House photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Formica photograph album — “photographs” standard.
 * Body from legacy formica04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Formica04Page() {
  return (
    <PhotographsPage
      heroLabel="Formica"
      titleId="formica04-title"
      hero={{
        src: "/images/formicaoverview/hero-banner.jpg",
        alt: "Formica at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FormicaNavChrome />}
      previousHref="/formica03"
      overviewHref="/formicaoverview"
      nextHref="/formica05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/formica04/5467Large.jpg",
                width: 400,
                height: 290,
                alt: "Architectural model of the Formica World's Fair House",
              },
              title: "Architectural model of the Formica World's Fair House",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/formica04/formica75.jpg",
                width: 400,
                height: 390,
                alt: "Formica World's Fair House",
              },
              title: "Formica World's Fair House",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
