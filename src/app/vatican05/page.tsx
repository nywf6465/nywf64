import type { Metadata } from "next";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album II — Vatican — nywf64.com",
  description:
    "Vatican Pavilion photograph album II — publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const guideBookSource = (
  <>
    SOURCE: Official Guide Book, Vatican Pavilion New York World&apos;s Fair
  </>
);

/**
 * Vatican photograph album II — “photographs” standard.
 * Body from legacy vatican05.html (Photograph Scrap Book banner omitted).
 */
export default function Vatican05Page() {
  return (
    <PhotographsPage
      heroLabel="Vatican Pavilion"
      titleId="vatican05-title"
      title="Photograph Album II"
      hero={{
        src: "/images/vaticanoverview/hero-banner.jpg",
        alt: "Vatican Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<VaticanNavChrome />}
      previousHref="/vatican04"
      overviewHref="/vaticanoverview"
      nextHref="/vatican06"
      sections={[
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/vatican05/vat02.jpg",
                width: 400,
                height: 237,
                alt: "Reflections from the wet pavement at the Vatican pavilion at night",
              },
              title: (
                <>
                  <strong>Reflections from the wet pavement</strong> add to the
                  brilliant glow of the Vatican pavilion at night. In addition
                  to the famed &quot;Pieta,&quot; visitors may view other
                  priceless religious treasures.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, July 12, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/vatican05/vat03.jpg",
                width: 400,
                height: 236,
                alt: "Pope Paul blessing crowds from the Vatican pavilion balcony",
              },
              title: (
                <>
                  <strong>Arms upraised,</strong> Pope Paul blessed crowds
                  beneath the balcony of the Vatican pavilion at the
                  World&apos;s Fair. He ended his prayer by simply saying,
                  &quot;Good-by.&quot;
                </>
              ),
              source: (
                <>
                  SOURCE: <em>New York Sunday News</em>, October 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/vatican05/vat11.jpg",
                width: 400,
                height: 339,
                alt: "The Vatican Pavilion in early morning light",
              },
              title: (
                <>
                  <strong>The Vatican Pavilion in early morning light.</strong>{" "}
                  Opening day of the 1965 Season.
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat12.jpg",
                width: 400,
                height: 218,
                alt: "The Vatican Pavilion at night from the roof of the New York State Pavilion",
              },
              title: (
                <>
                  <strong>
                    The Vatican Pavilion at night from the roof of the New York
                    State Pavilion
                  </strong>
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat22.jpg",
                width: 400,
                height: 289,
                alt: "Crowds throng to the Vatican Pavilion",
              },
              title: (
                <>
                  <strong>Crowds throng to the Vatican Pavilion</strong>
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat16.jpg",
                width: 336,
                height: 400,
                alt: "The Vatican Pavilion's Chapel of the Good Shepherd",
              },
              title: (
                <>
                  <strong>
                    The Vatican Pavilion&apos;s <em>Chapel of the Good Shepherd</em>
                  </strong>
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat32.jpg",
                width: 127,
                height: 400,
                alt: "Statue of The Good Shepherd in the Chapel",
              },
              title: (
                <>
                  <strong>
                    Statue of <em>The Good Shepherd </em>which adorned the alter
                    area of the Chapel
                  </strong>
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat20.jpg",
                width: 315,
                height: 244,
                alt: "The tiara of Pope Paul VI",
              },
              title: (
                <>
                  <strong>
                    The tiara of Pope Paul VI as displayed during the 1965
                    Season of the Fair
                  </strong>
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat21.jpg",
                width: 372,
                height: 480,
                alt: "Replica of the Tomb of St. Peter",
              },
              title: (
                <>
                  <strong>
                    The replica of the Tomb of St. Peter, central exhibit in
                    the Crypt area of the Pavilion
                  </strong>
                </>
              ),
              source: guideBookSource,
            },
            {
              image: {
                src: "/images/vatican05/vat23.jpg",
                width: 314,
                height: 252,
                alt: "Pope Paul VI addresses throngs from the Vatican Pavilion balcony",
              },
              title: (
                <>
                  <strong>
                    His Holiness Pope Paul VI addresses the throngs from the
                    balcony of the Vatican Pavilion
                  </strong>
                </>
              ),
              source: (
                <>
                  SOURCE: (All Above){" "}
                  <em>
                    Official Guide Book, Vatican Pavilion New York World&apos;s
                    Fair
                  </em>{" "}
                  and the book{" "}
                  <em>
                    Vattican Pavilion New York World&apos;s Fair 1964-1965 A
                    Chronical
                  </em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
