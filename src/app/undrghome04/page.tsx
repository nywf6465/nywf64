import type { Metadata } from "next";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Underground World Home — nywf64.com",
  description:
    "Underground World Home photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home photograph album — “photographs” standard.
 * Body from legacy undrghome04.html (Photograph Scrap Book banner omitted).
 */
export default function Undrghome04Page() {
  return (
    <PhotographsPage
      heroLabel="Underground World Home"
      titleId="undrghome04-title"
      title="Photograph Album"
      hero={{
        src: "/images/undrghomeoverview/hero-banner.jpg",
        alt: "Underground World Home at the 1964/1965 New York World’s Fair",
        width: 2073,
        height: 758,
      }}
      nav={<UndrghomeNavChrome />}
      previousHref="/undrghome03"
      overviewHref="/undrghomeoverview"
      nextHref="/undrghome05"
      sections={[
        {
          heading: "Photographs",
          photos: [
            {
              image: {
                src: "/images/undrghome04/uwh26.jpg",
                width: 400,
                height: 237,
                alt: "Entrance to the Underground Home",
              },
              title: "Entrance to the Underground Home",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/undrghome04/uwh27.jpg",
                width: 400,
                height: 280,
                alt: "Entrance to the Underground Home",
              },
              title: "Entrance to the Underground Home",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/undrghome04/uwh28.jpg",
                width: 475,
                height: 254,
                alt: "Underground Home interior and patio",
              },
              title: (
                <>
                  <strong>INVITING&nbsp;INTERIORS </strong>NO&nbsp;MATTER&nbsp;WHERE&nbsp;you
                  go at the Fair, the welcome mat is out, and most exhibitors try
                  hard to make it attractive. Once inside a pavilion, you more
                  often than not find its displays and wares equally inviting.
                  The Underground Home ... is a revelation of the luxurious
                  possibiliites of what most people view as emergency existance.
                  <br />
                  <br />
                  <strong>What more </strong>could you ask for in this patio of
                  the Underground Home - real sunlight? Too hot! This year even
                  the blooms on the ceiling are real. Home can be built for
                  anyone. Plans are available.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters, Richard Lewis and
                  Patrick Carroll, <em>New York Sunday News</em>, May 30, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
