import type { Metadata } from "next";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 General Electric \u2014 nywf64.com",
  description:
    "General Electric Progressland photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric Photograph Album — photographs standard.
 * Body from legacy genele06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Genele06Page() {
  return (
    <PhotographsPage
      heroLabel="General Electric Pavilion"
      titleId="genele06-title"
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele05"
      overviewHref="/geneleoverview"
      nextHref="/genele07"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/genele06/ge147.jpg",
                width: 400,
                height: 285,
                alt: "General Electric Pavilion from across the Pool of Industry",
              },
              title: "General Electric Pavilion from across the Pool of Industry",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/genele06/ge149.jpg",
                width: 400,
                height: 401,
                alt: "General Electric Pavilion from the Better Living Building",
              },
              title: "General Electric Pavilion from the Better Living Building",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/genele06/ge40.jpg",
                width: 350,
                height: 236,
                alt: "General Electric Pavilion from the Avenue of Progress",
              },
              title: "General Electric Pavilion from the Avenue of Progress",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/genele06/ge41.jpg",
                width: 350,
                height: 237,
                alt: "\"General Electric Welcomes\" - guards take a break from exhausting crowds",
              },
              title: (<>
                &quot;General Electric Welcomes&quot; - guards take a break from exhausting crowds
              </>),
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/genele06/ge146.jpg",
                width: 400,
                height: 400,
                alt: "Entrance Ramp to Carousel of Progress",
              },
              title: "Entrance Ramp to Carousel of Progress",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/genele06/ge42.jpg",
                width: 350,
                height: 237,
                alt: "Landscaped earthen berms hid the exit archway built into the lower level of the Pavilion",
              },
              title: "Landscaped earthen berms hid the exit archway built into the lower level of the Pavilion",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/genele06/ge43.jpg",
                width: 350,
                height: 237,
                alt: "View from the top of the ramp to the Carousel of Progress attraction",
              },
              title: "View from the top of the ramp to the Carousel of Progress attraction",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/genele06/ge35.jpg",
                width: 350,
                height: 332,
                alt: "Oh those lines! Lines! Lines! (Top) Crowds wait in open-air lines to enter the GE exhibit. Waits of 2 hours or more were",
              },
              title: (<>
                Oh those lines! Lines! Lines! (Top) Crowds wait in open-air lines to enter the GE exhibit. Waits of 2 hours or more were not uncommon. (Bottom) For the 1965 Season, GE leased the entire vacant lot behind their pavilion to create a covered waiting area for visitors. Disney historian Paul Anderson notes that the installation was promptly dubbed &quot;Progresslane.&quot;
              </>),
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection and Online action (center photo)",
            },
            {
              image: {
                src: "/images/genele06/ge44.jpg",
                width: 350,
                height: 237,
                alt: "Oh those lines! Lines! Lines! (Top) Crowds wait in open-air lines to enter the GE exhibit. Waits of 2 hours or more were",
              },
              title: (<>
                Oh those lines! Lines! Lines! (Top) Crowds wait in open-air lines to enter the GE exhibit. Waits of 2 hours or more were not uncommon. (Bottom) For the 1965 Season, GE leased the entire vacant lot behind their pavilion to create a covered waiting area for visitors. Disney historian Paul Anderson notes that the installation was promptly dubbed &quot;Progresslane.&quot;
              </>),
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection and Online action (center photo)",
            },
            {
              image: {
                src: "/images/genele06/ge148.jpg",
                width: 400,
                height: 297,
                alt: "Oh those lines! Lines! Lines! (Top) Crowds wait in open-air lines to enter the GE exhibit. Waits of 2 hours or more were",
              },
              title: (<>
                Oh those lines! Lines! Lines! (Top) Crowds wait in open-air lines to enter the GE exhibit. Waits of 2 hours or more were not uncommon. (Bottom) For the 1965 Season, GE leased the entire vacant lot behind their pavilion to create a covered waiting area for visitors. Disney historian Paul Anderson notes that the installation was promptly dubbed &quot;Progresslane.&quot;
              </>),
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection and Online action (center photo)",
            },
            {
              image: {
                src: "/images/genele06/ge137.jpg",
                width: 400,
                height: 267,
                alt: "G.E. Pavilion",
              },
              title: "G.E. Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genele06/ge138.jpg",
                width: 400,
                height: 267,
                alt: "G.E. Pavilion",
              },
              title: "G.E. Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genele06/ge139.jpg",
                width: 400,
                height: 267,
                alt: "G.E. Pavilion",
              },
              title: "G.E. Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genele06/ge126.jpg",
                width: 400,
                height: 263,
                alt: "Blue/Green sequence of lighting",
              },
              title: "Blue/Green sequence of lighting",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/genele06/ge140.jpg",
                width: 400,
                height: 267,
                alt: "Swirling lights atop the General Electric Pavilion",
              },
              title: "Swirling lights atop the General Electric Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genele06/ge159.jpg",
                width: 400,
                height: 259,
                alt: "General Electric Pavilion as seen from the Tower of Light",
              },
              title: "General Electric Pavilion as seen from the Tower of Light",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/genele06/ge165.jpg",
                width: 400,
                height: 400,
                alt: "Swirling lights atop the General Electric Pavilion",
              },
              title: "Swirling lights atop the General Electric Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/genele06/ge141.jpg",
                width: 400,
                height: 401,
                alt: "Mother makes a Rumpus Room - Scene from G.E.'s Carousel of Progress",
              },
              title: (<>
                Mother makes a Rumpus Room - Scene from G.E.&apos;s Carousel of Progress
              </>),
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genele06/ge142.jpg",
                width: 400,
                height: 267,
                alt: "Kitchen of the 1940s - Scene from G.E.'s Carousel of Progress",
              },
              title: (<>
                Kitchen of the 1940s - Scene from G.E.&apos;s Carousel of Progress
              </>),
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genele06/ge143.jpg",
                width: 400,
                height: 267,
                alt: "1960s Living - Scene from G.E.'s Carousel of Progress",
              },
              title: (<>
                1960s Living - Scene from G.E.&apos;s Carousel of Progress
              </>),
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/genele06/ge04.jpg",
                width: 460,
                height: 283,
                alt: "DAZZLING AT NIGHT AS THE LAST TRACES of daylight dim out in the west, colorland at the Fair comes to brilliant life. You",
              },
              title: (<>
                DAZZLING AT NIGHT AS THE LAST TRACES of daylight dim out in the west, colorland at the Fair comes to brilliant life. You&apos;re standing with our color camera atop the Better Living Center in the Industrial Area and you take in four of the area&apos;s top attractions (l. to r.): Johnson&apos;s Wax, Tower of Light, General Electric and IBM. In addition to displays of products, each one has a free show that is highly popular with fairgoers. The 7-Up and Coca-Cola towers are centered in the background.
              </>),
              source: "SOURCE: News Colorfoto by Edmund Peters, New York Sunday News, August 9, 1964",
            },
          ],
        },
      ]}
    />
  );
}
