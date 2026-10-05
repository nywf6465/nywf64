import type { Metadata } from "next";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Chunky Candy — nywf64.com",
  description:
    "Chunky Candy photograph album — fairgoer and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chunky Candy photograph album — “photographs” standard.
 * Body from legacy chucan04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Chucan04Page() {
  return (
    <PhotographsPage
      heroLabel="Chunky Candy"
      titleId="chucan04-title"
      title="Photograph Album"
      hero={{
        src: "/images/chucanoverview/hero-banner.jpg",
        alt: "Chunky Candy at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucanNavChrome />}
      previousHref="/chucan03"
      overviewHref="/chucanoverview"
      nextHref="/chucan05"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/chucan04/fairgoer.jpg",
                width: 239,
                height: 354,
                alt: "Chunky Candy as seen from the Better Living Center",
              },
              title: "Chunky Candy as seen from the Better Living Center",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/chucan04/publication.jpg",
                width: 210,
                height: 196,
                alt: "Kids at the sculptured Continuum outside the Chunky factory",
              },
              title:
                "Kids can hardly wait to see the figures spring to life in the sculptured Continuum outside the Chunky factory.",
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, May 9, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
