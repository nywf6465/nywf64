import type { Metadata } from "next";
import { AmptheNavChrome } from "@/components/AmptheNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Amphitheatre — nywf64.com",
  description:
    "Amphitheatre photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphitheatre photograph album — “photographs” standard.
 * Body from legacy ampthe03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Ampthe03Page() {
  return (
    <PhotographsPage
      heroLabel="Amphitheatre"
      titleId="ampthe03-title"
      hero={{
        src: "/images/amptheoverview/hero-banner.jpg",
        alt: "Amphitheatre at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmptheNavChrome />}
      previousHref="/ampthe02"
      overviewHref="/amptheoverview"
      nextHref="/ampthe04"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/ampthe03/puffed-wheat.jpg",
                width: 400,
                height: 280,
                alt: "Quaker Oats Giant Puffed Wheat Box outside the Amphitheatre",
              },
              title: (
                <>
                  Quaker Oats Giant <i>Puffed Wheat</i> Box - an attraction
                  located ouside of the Amphitheatre was this giant box of{" "}
                  <i>Puffed Wheat</i>. Quaker used an advertising slogan saying
                  the cereal was &quot;shot from guns.&quot; Several times during
                  the day, a stunt man would actually be shot from a giant cannon
                  located near the box.
                </>
              ),
              source: (
                <>
                  SOURCE: © Copyright Mike Kraus Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/ampthe03/stuntman.jpg",
                width: 400,
                height: 331,
                alt: "Stuntman falling after being shot from the gun",
              },
              title: (
                <>
                  Stuntman falling after being shot from the gun! - In this
                  highlited photo, the stuntman can actually be seen falling from
                  the sky!
                </>
              ),
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
