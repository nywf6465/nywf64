import type { Metadata } from "next";
import { UspoNavChrome } from "@/components/UspoNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — U.S. Post Office — nywf64.com",
  description:
    "U.S. Post Office photograph album — commercial, fairgoer, and press photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Post Office photograph album — “photographs” standard.
 * Body from legacy uspo03.html (Photograph Scrap Book banner omitted;
 * legacy page title was “Gallery of Photographs”; navy bar uses Photograph Album).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Uspo03Page() {
  return (
    <PhotographsPage
      heroLabel="U.S. Post Office"
      titleId="uspo03-title"
      hero={{
        src: "/images/uspooverview/hero-banner.jpg",
        alt: "U.S. Post Office at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UspoNavChrome />}
      previousHref="/uspo02"
      overviewHref="/uspooverview"
      nextHref="/uspo04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/uspo03/5418Large.jpg",
                width: 400,
                height: 276,
                alt: "Artist's rendering of the U.S. Post Office - World's Fair",
              },
              title: "Artist's rendering of the U.S. Post Office - World's Fair",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
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
                src: "/images/uspo03/uspo03.jpg",
                width: 400,
                height: 269,
                alt: "The U.S. Post Office at the Fair",
              },
              title: "The U.S. Post Office at the Fair",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/uspo03/uspo06.jpg",
                width: 400,
                height: 205,
                alt: "The U.S. Post Office at the Fair",
              },
              title: "The U.S. Post Office at the Fair",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/uspo03/uspo07.jpg",
                width: 400,
                height: 241,
                alt: "The U.S. Post Office at the Fair",
              },
              title: "The U.S. Post Office at the Fair",
              source: <>SOURCE: © Copyright Mike Kraus Collection</>,
            },
            {
              image: {
                src: "/images/uspo03/uspo02.jpg",
                width: 400,
                height: 267,
                alt: "The U.S. Post Office building c. Summer of 2000",
              },
              title: "The U.S. Post Office building c. Summer of 2000",
              source: <>SOURCE: © Copyright Bruce Mentone Collection</>,
            },
          ],
        },
        {
          heading: "Press Photographs",
          photos: [
            {
              image: {
                src: "/images/uspo03/uspo01.jpg",
                width: 300,
                height: 228,
                alt: "The Fair Gets Everything It Needs to Send a Letter",
              },
              title: (
                <>
                  The Fair Gets Everything It Needs to Send a Letter The new
                  United States Post Office building that was dedicated yesterday
                  at the Fair in Flushing Meadow. When mailing to World&apos;s
                  Fair, include the ZIP code number, 11380.
                </>
              ),
              source: (
                <>
                  SOURCE: <em>New York Times</em>, Date unknown - courtesy Bruce
                  Mentone Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
