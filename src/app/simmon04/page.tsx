import type { Metadata } from "next";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest pavilion photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons photograph gallery — “photographs” standard.
 * Body from legacy simmon04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Simmon04Page() {
  return (
    <PhotographsPage
      heroLabel="Simmons"
      titleId="simmon04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/simmonoverview/hero-banner.jpg",
        alt: "Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SimmonNavChrome />}
      previousHref="/simmon03"
      overviewHref="/simmonoverview"
      nextHref="/simmon05"
      sections={[
        {
          photos: [
            {
              image: {
                src: "/images/simmon04/5469Large.jpg",
                width: 400,
                height: 277,
                alt: "Artist's rendering of the Simmons Pavilion",
              },
              title: "Artist's rendering of the Simmons Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/simmon04/simmons36.jpg",
                width: 400,
                height: 265,
                alt: "Simmons Pavilion",
              },
              title: "Simmons Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/simmon04/simmons18.jpg",
                width: 464,
                height: 437,
                alt: "View from the Pavilion of American Interiors",
              },
              title:
                "View from the Pavilion of American Interiors shows the enclosed stairway leading down from the Rest Alcoves on the second and thrid floors",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/simmon04/simmons19.jpg",
                width: 464,
                height: 436,
                alt: "Land of Enchantment interior",
              },
              title:
                'Pixies or Saucy Elves? There\'s a lot going on in this interior scene in the "Land of Enchantment" by famed designers Silvestri.',
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/simmon04/simmons33.jpg",
                width: 200,
                height: 182,
                alt: "VIP suite bed",
              },
              title:
                "Simmons offers this bed in the VIP suite, adjacent to 46 res-alcoves for catnappers.",
              source: (
                <>
                  SOURCE: <em>New York Sunday News</em>, April 12, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/simmon04/simmons15.jpg",
                width: 464,
                height: 293,
                alt: "Early concept for the Simmons Pavilion",
              },
              title:
                "Artist's rendering of an early concept for the Simmons Pavilion by A. Epstein & Sons, Inc., Architects",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair <em>Progress Report No. 4,</em>{" "}
                  January 17, 1962 - nywf64.com Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/simmon04/simmons20.jpg",
                width: 337,
                height: 464,
                alt: "Circular stairway to Rest Alcoves",
              },
              title: "Circular stairway leads up to Rest Alcoves",
              source: "SOURCE: Photograph courtesy Simmons Company",
            },
            {
              image: {
                src: "/images/simmon04/simmons21.jpg",
                width: 464,
                height: 376,
                alt: "Interior of Simmons Pavilion",
              },
              title:
                'Interior of Simmons Pavilion - map at right is captioned "House of Simmons"',
              source: "SOURCE: Photograph courtesy Simmons Company",
            },
          ],
        },
      ]}
    />
  );
}
