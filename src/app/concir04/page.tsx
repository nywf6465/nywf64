import type { Metadata } from "next";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Continental Circus — nywf64.com",
  description:
    "Continental Circus photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus photograph album — “photographs” standard.
 * Body from legacy concir04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Concir04Page() {
  return (
    <PhotographsPage
      heroLabel="Continental Circus"
      titleId="concir04-title"
      hero={{
        src: "/images/conciroverview/hero-banner.jpg",
        alt: "Continental Circus at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConcirNavChrome />}
      previousHref="/concir03"
      overviewHref="/conciroverview"
      nextHref="/concir05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/concir04/5422Large.jpg",
                width: 400,
                height: 278,
                alt: "Artist's rendering of the Continental Circus",
              },
              title: "Artist's rendering of the Continental Circus",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/concir04/5522.jpg",
                width: 400,
                height: 267,
                alt: "Continental Circus",
              },
              title: "Continental Circus",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/concir04/concir05.jpg",
                width: 400,
                height: 277,
                alt: "Continental Circus",
              },
              title: "Continental Circus",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/concir04/amf16.jpg",
                width: 475,
                height: 188,
                alt: "Night monorail riders pass striped tent of Continental Circus",
              },
              title:
                "Night monorail riders pass striped tent of Continental Circus as air-conditioned, automatically controlled train approaches its station in the heart of the Lake Amusement Area",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacinio,{" "}
                  <em>New York Sunday News</em>, Date unknown
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
