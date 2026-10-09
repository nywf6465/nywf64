import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { WfpavNavChrome } from "@/components/WfpavNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — World's Fair Pavilion — nywf64.com",
  description:
    "World's Fair Pavilion photograph album from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Pavilion photograph album.
 * Body from legacy wfpav04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Wfpav04Page() {
  return (
    <PhotographsPage
      heroLabel="World's Fair Pavilion"
      titleId="wfpav04-title"
      hero={{
        src: "/images/wfpavoverview/hero-banner.jpg",
        alt: "World's Fair Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfpavNavChrome />}
      previousHref="/wfpav03"
      overviewHref="/wfpavoverview"
      nextHref="/wfpavoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/wfpav04/633-89.jpg",
                width: 400,
                height: 267,
                alt: "The World's Fair Pavilion",
              },
              title: "The World's Fair Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
