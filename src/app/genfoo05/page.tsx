import type { Metadata } from "next";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — General Foods Arches — nywf64.com",
  description:
    "General Foods Arches photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches photograph album — “photographs” standard.
 * Body from legacy genfoo05.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 */
export default function Genfoo05Page() {
  return (
    <PhotographsPage
      heroLabel="General Foods Arches"
      titleId="genfoo05-title"
      hero={{
        src: "/images/genfoooverview/hero-banner.jpg",
        alt: "General Foods Arches at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GenfooNavChrome />}
      previousHref="/genfoo04"
      overviewHref="/genfoooverview"
      nextHref="/genfoo06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/genfoo05/gf02.jpg",
                width: 400,
                height: 469,
                alt: "General Foods Arch No. 4",
              },
              title: "General Foods Arch No. 4",
              source:
                "SOURCE: NY World's Fair Publicity Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/genfoo05/555-46.jpg",
                width: 257,
                height: 400,
                alt: "General Foods Arch No. 6",
              },
              title: "General Foods Arch No. 6",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/genfoo05/633-04.jpg",
                width: 267,
                height: 400,
                alt: "General Foods Arch Closeup",
              },
              title: "General Foods Arch Closeup",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/genfoo05/S301D.jpg",
                width: 400,
                height: 400,
                alt: "General Foods Arch No. 10",
              },
              title: "General Foods Arch No. 10",
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
                src: "/images/genfoo05/gf03.jpg",
                width: 400,
                height: 265,
                alt: "General Foods Arch No. 6",
              },
              title: "General Foods Arch No. 6",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/genfoo05/gf27.jpg",
                width: 400,
                height: 457,
                alt: "Models of numbered General Foods arches",
              },
              title: (
                <>
                  Each numbered arch (models shown here) has illuminated
                  information and photo panel carrying news and public service
                  messages and pictures of Fair activities. Ideal guideposts
                  too!
                </>
              ),
              source: (
                <>
                  SOURCE: <em>New York Sunday Coloroto Magazine</em>, April 12,
                  1964
                </>
              ),
            },
            {
              image: {
                src: "/images/genfoo05/gf04.jpg",
                width: 235,
                height: 311,
                alt: "Model of the General Foods Corporation Information Arches",
              },
              title: (
                <>
                  Model of the General Foods Corporation Information Arches,
                  which will be installed at eleven strategic locations on the
                  Fairgrounds. Activated from a central message center, the
                  arches&apos; electronic news panel will keep visitors in touch
                  with special events of the Fair and with news of the outside
                  world.
                </>
              ),
              source: "SOURCE: FAIR NEWS, Vol. 3, No. 2, February 22, 1964",
            },
          ],
        },
      ]}
    />
  );
}
