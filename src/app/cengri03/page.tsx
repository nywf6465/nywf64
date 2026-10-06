import type { Metadata } from "next";
import { CengriNavChrome } from "@/components/CengriNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Century Grill — nywf64.com",
  description:
    "Century Grill photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Century Grill photograph album — “photographs” standard.
 * Body from legacy cengri03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Cengri03Page() {
  return (
    <PhotographsPage
      heroLabel="Century Grill"
      titleId="cengri03-title"
      hero={{
        src: "/images/cengrioverview/hero-banner.jpg",
        alt: "Century Grill at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CengriNavChrome />}
      previousHref="/cengri02"
      overviewHref="/cengrioverview"
      nextHref="/cengri04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/cengri03/aerial-transportation.jpg",
                width: 450,
                height: 393,
                alt: "Aerial view of the Transportation Area showing Century Grill",
              },
              title: (
                <>
                  Aerial view of the Transportation Area of the Fair during the
                  1964 season shows the sloping roof of the Century Grill (bottom
                  of photo, beneath circular fountain and Ford Pavilion).
                </>
              ),
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Corporation publicity photo
                  presented courtesy Craig Bavaro Collection
                </>
              ),
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/cengri03/steak-town-1965.jpg",
                width: 500,
                height: 329,
                alt: "Century Grill building in 1965 as Steak Town USA",
              },
              title: (
                <>
                  Century Grill building in 1965. Now &quot;Steak Town
                  USA,&quot; the restaurant featured $1.29 steak plates and fried
                  chicken dinners.
                </>
              ),
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/cengri03/steak-town-sign.jpg",
                width: 400,
                height: 353,
                alt: "Steak Town USA",
              },
              title: <>&quot;Steak Town USA&quot;</>,
              source: <>SOURCE: © Copyright Berksboy Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
