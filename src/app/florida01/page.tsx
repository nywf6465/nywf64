import type { Metadata } from "next";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Florida — nywf64.com",
  description:
    "Florida Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida guidebook page.
 * Body from legacy florida01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Locate It → /floridamap. Preserve typos: carrousel, Porpoise Pool ad Stadium.
 */
export default function Florida01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Florida"
      titleId="florida01-title"
      hero={{
        src: "/images/floridaoverview/hero-banner.jpg",
        alt: "Florida Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FloridaNavChrome />}
      previousHref="/floridaoverview"
      nextHref="/florida02"
      guide1964={{
        cover: {
          src: "/images/florida01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/florida01/floridlogo64.gif",
          width: 144,
          height: 101,
          alt: "",
        },
        name: "FLORIDA",
        copy: (
          <>
            A 110-foot tower topped by a giant plastic orange rises over the
            palm trees and carrousel-shaped structures of &quot;Fabulous
            Florida.&quot; The other buildings in the tropical setting at Meadow
            Lake include a large State Exhibit Hall decorated in an appropriate
            motif (the state seal, maps, etc.); a Porpoise Pool ad Stadium,
            seating 1,600 and covered by a suspended sun-and-rain-roof made of
            plastic; a homesite area on the shore, including model houses,
            reached by a &quot;Bridge to the Keys&quot; boardwalk. Shops and
            refreshment stands are located about the area.
          </>
        ),
        admission: [
          "Admission: free except for Porpoise Show.",
          "Porpoise Show: adults, $2.00; children, $1.00.  Show takes 30 minutes: 10 performances daily starting at 10 a.m.",
        ],
        highlights: [
          {
            label: "SAMPLING THE SUNSHINE STATE.",
            body: (
              <>
                In the State Exhibit Hall are displays of priceless objects of
                art on loan from public and private Florida collections, and
                exhibits relating to Florida communities, industry, agriculture,
                sports and education. A series of scale models tells the story
                of the U.S. space program.
              </>
            ),
          },
          {
            label: "PORPOISES AND BANDS.",
            body: (
              <>
                A troupe of the &quot;second-smartest mammals&quot; in the world
                plays basketball and &quot;sings,&quot; dances and clowns in the
                daytime shows at the Porpoise Pool and Stadium. A nearby tank
                contains several frolicking seals.
              </>
            ),
          },
          {
            label: "FLOATING BUILDINGS.",
            body: (
              <>
                Looking like ultra-modern houseboats, two buildings rest on
                pilings in Meadow Lake. In one, the Florida Development
                Commission, an official agency, gives out information and
                answers questions about the state. The other has a display put
                on by the Minute Maid Company.
              </>
            ),
          },
          {
            label: "HOMESITE AREA.",
            body: (
              <>
                A full-sized furnished house and swimming pool and several scale
                model homes set in a garden show the latest in Florida living.
              </>
            ),
          },
          {
            label: "FLAMINGO ISLE.",
            body: (
              <>
                Beautiful flamingos strut in an enclosed pool, providing a
                natural display of brilliant colors.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/florida01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/florida01/floridlogo.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "FLORIDA",
        nameFace: "arial",
        summary: (
          <>
            A giant orange on a tower tops displays of sunshine living, space
            tests at Cape Kennedy and a free, live-porpoise show.
          </>
        ),
        copy: (
          <>
            The State Exhibit Hall contains exhibits of fine art and shows the
            life, sports and produce of Florida. Elsewhere are a full-sized
            Florida home and models of other houses.
          </>
        ),
        highlights: [
          {
            label: "PORPOISE SHOW.",
            labelFace: "arial",
            body: (
              <>
                Porpoises and seals perform in a stadium. The porpoises
                &quot;sing&quot; and play ball; the seals juggle and catch
                rings.
              </>
            ),
          },
          {
            label: "SNACKS AND PICNICS.",
            labelFace: "arial",
            body: (
              <>
                Visitors may buy light refreshments and take them to a nearby
                picnic area outside the pavilion.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/florida01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/florida01/amusmlmap.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/floridamap",
      }}
    />
  );
}
