import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Auto Thrill Show — nywf64.com",
  description:
    "Auto Thrill Show photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show photograph album — “photographs” standard.
 * Body from legacy autthr04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Autthr04Page() {
  return (
    <PhotographsPage
      heroLabel="Auto Thrill Show"
      titleId="autthr04-title"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthr03"
      overviewHref="/autthr01"
      nextHref="/autthr05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/autthr04/artist-rendering.jpg",
                width: 400,
                height: 278,
                alt: "Artist's rendering of the Auto Thrill Show",
              },
              title: "Artist's rendering of the Auto Thrill Show",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/autthr04/fairgoer-photo.jpg",
                width: 400,
                height: 286,
                alt: "Auto Thrill Show fairgoer photograph",
              },
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/autthr04/publication-photo.jpg",
                width: 475,
                height: 265,
                alt: "Climax of the Hell Drivers show — ramp-to-ramp flight",
              },
              title:
                "Climax of the Hell Drivers show is this risky 70-foot ramp-to-ramp flight of a standard pickup truck as a convertible darts under it. Injuries to drivers are on the rise each year.",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, July 11, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
