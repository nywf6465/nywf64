import type { Metadata } from "next";
import { TipbandNavChrome } from "@/components/TipbandNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Tiparillo Band Pavilion — nywf64.com",
  description:
    "Tiparillo Band Pavilion photograph gallery — fairgoer and commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tiparillo Band Pavilion photograph gallery — photographs standard.
 * Body from legacy tipband02.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03). Section order matches legacy (Fairgoer first).
 */
export default function Tipband02Page() {
  return (
    <PhotographsPage
      heroLabel="Tiparillo Band Pavilion"
      titleId="tipband02-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/tipbandoverview/hero-banner.jpg",
        alt: "Tiparillo Band Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TipbandNavChrome />}
      previousHref="/tipband01"
      overviewHref="/tipbandoverview"
      nextHref="/tipband03"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/tipband02/tipband02.jpg",
                width: 400,
                height: 271,
                alt: "Tiparillo Band Pavilion",
              },
              title: "Tiparillo Band Pavilion",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/tipband02/tipband01.jpg",
                width: 480,
                height: 315,
                alt: "Tiparillo Band Pavilion - Night",
              },
              title: "Tiparillo Band Pavilion - Night",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/tipband02/tipband03.jpg",
                width: 400,
                height: 283,
                alt: "Tiparillo Band Pavilion - Night",
              },
              title: "Tiparillo Band Pavilion - Night",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/tipband02/tipband04.jpg",
                width: 400,
                height: 299,
                alt: "Tiparillo Band Pavilion",
              },
              title: "Tiparillo Band Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/tipband02/gencig07.jpg",
                width: 600,
                height: 471,
                alt: "Tiparillo Band Pavilion presents entertainment for 1965",
              },
              title: (
                <>
                  TIPARILLO BAND PAVILION PRESENTS ENTERTAINMENT FOR 1965 Scenes
                  like this again will be a familiar and popular feature of the
                  New York World&apos;s Fair as top visiting bands, choral groups,
                  dance ensembles and other concert attractions from all over the
                  U.S. and abroad perform at the Tiparillo Band Pavilion. The
                  Mahanoy City, Pa. Area High School Band (above) played the
                  Tiparillo Band Pavilion last September.
                </>
              ),
              source:
                "SOURCE: Publicity Photograph, Arthur Cantor, Inc. - nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}
