import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Tower of Light — nywf64.com",
  description:
    "Tower of Light photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light photograph album — “photographs” standard.
 * Body from legacy twrlit05.html (Photograph Scrap Book banner omitted).
 */
export default function Twrlit05Page() {
  return (
    <PhotographsPage
      heroLabel="Tower of Light"
      titleId="twrlit05-title"
      title="Photograph Album"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit04"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/twrlit05/tol89.jpg",
                width: 323,
                height: 400,
                alt: "Artist's rendering of the Tower of Light NY\u00a0World's Fair Publicity Photo.",
              },
              title: "Artist's rendering of the Tower of Light NY\u00a0World's Fair Publicity Photo.",
              source: "SOURCE: NY World's Fair Publicity Photo.",
            },
            {
              image: {
                src: "/images/twrlit05/5413Large.jpg",
                width: 285,
                height: 400,
                alt: "Artist's rendering of the Tower of Light SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
              },
              title: "Artist's rendering of the Tower of Light SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/twrlit05/555-32.jpg",
                width: 400,
                height: 270,
                alt: "Tower of Light SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
              },
              title: "Tower of Light SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/twrlit05/S302A.jpg",
                width: 400,
                height: 400,
                alt: "Tower of Light - Night SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
              },
              title: "Tower of Light - Night SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/twrlit05/633-84.jpg",
                width: 400,
                height: 267,
                alt: "Tower of Light SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
              },
              title: "Tower of Light SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/twrlit05/79139Large.jpg",
                width: 400,
                height: 259,
                alt: "Tower of Light - Night View SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
              },
              title: "Tower of Light - Night View SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/twrlit05/tol55.jpg",
                width: 400,
                height: 273,
                alt: "Tower of Light SOURCE: Commercial Transparency by \u00a9 ROLOC\u00a0Color Films presented courtesy Bradd Schiffman Collection",
              },
              title: "Tower of Light SOURCE: Commercial Transparency by \u00a9 ROLOC\u00a0Color Films presented courtesy Bradd Schiffman Collection",
              source: "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol54.jpg",
                width: 400,
                height: 404,
                alt: "Tower of Light SOURCE: Commercial Transparency by \u00a9 Pana-Vue\u00a0presented courtesy Bill Cotter Collection",
              },
              title: "Tower of Light SOURCE: Commercial Transparency by \u00a9 Pana-Vue\u00a0presented courtesy Bill Cotter Collection",
              source: "SOURCE: Commercial Transparency by \u00a9 Pana-Vue presented courtesy Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol34.jpg",
                width: 400,
                height: 267,
                alt: "Night view of the Tower of Light SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bill Cotter Collection",
              },
              title: "Night view of the Tower of Light SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bill Cotter Collection",
              source: "SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol35.jpg",
                width: 400,
                height: 286,
                alt: "A scene from \"The Brightest Show on Earth\" / \"Holiday with Light\" SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
              },
              title: "A scene from \"The Brightest Show on Earth\" / \"Holiday with Light\" SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
              source: "SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol36.jpg",
                width: 400,
                height: 274,
                alt: "A scene from \"The Brightest Show on Earth\" / \"Holiday with Light\" SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
              },
              title: "A scene from \"The Brightest Show on Earth\" / \"Holiday with Light\" SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
              source: "SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol33.jpg",
                width: 400,
                height: 266,
                alt: "A scene from \"The Brightest Show on Earth\" / \"Holiday with Light\" SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
              },
              title: "A scene from \"The Brightest Show on Earth\" / \"Holiday with Light\" SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
              source: "SOURCE: Commercial Transparency from United Air Lines Presents Promotional Slide Show presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol21.jpg",
                width: 400,
                height: 318,
                alt: "Aerial View of the Tower of Light NY\u00a0World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
              },
              title: "Aerial View of the Tower of Light NY\u00a0World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
              source: "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.01.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.02.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.03.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.04.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.05.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.06.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.07.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.08.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl97.09.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.01.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.02.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.03.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.04.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.05.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.06.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.07.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.08.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl98.09.jpg",
                width: 200,
                height: 157,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.01.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.02.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.03.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.04.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.05.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.06.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.07.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.08.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl99.09.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.01.jpg",
                width: 158,
                height: 234,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.02.jpg",
                width: 157,
                height: 234,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.03.jpg",
                width: 157,
                height: 234,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.04.jpg",
                width: 158,
                height: 233,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.05.jpg",
                width: 157,
                height: 233,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.06.jpg",
                width: 157,
                height: 233,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.07.jpg",
                width: 158,
                height: 233,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.08.jpg",
                width: 157,
                height: 233,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl100.09.jpg",
                width: 157,
                height: 233,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.01.jpg",
                width: 158,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.02.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.03.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.04.jpg",
                width: 158,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.05.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.06.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.07.jpg",
                width: 158,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.08.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl102.09.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.01.jpg",
                width: 158,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.02.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.03.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.04.jpg",
                width: 158,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.05.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.06.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.07.jpg",
                width: 158,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.08.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tl101.09.jpg",
                width: 157,
                height: 200,
                alt: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              },
              title: "Electric Power &\u00a0Light Archival Photograph - nywf64.com Collection",
              source: "SOURCE: Electric Power & Light Archival Photograph - nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/twrlit05/tol60.jpg",
                width: 400,
                height: 276,
                alt: "Tower of Light Online auction",
              },
              title: "Tower of Light Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol56.jpg",
                width: 400,
                height: 270,
                alt: "Tower of Light \u00a9 Copyright nywf64.com Collection",
              },
              title: "Tower of Light \u00a9 Copyright nywf64.com Collection",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol62.jpg",
                width: 400,
                height: 399,
                alt: "Tower of Light Online auction",
              },
              title: "Tower of Light Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol61.jpg",
                width: 264,
                height: 400,
                alt: "Tower of Light Online auction",
              },
              title: "Tower of Light Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol57.jpg",
                width: 400,
                height: 267,
                alt: "Tower of Light - Night View \u00a9 Copyright nywf64.com Collection",
              },
              title: "Tower of Light - Night View \u00a9 Copyright nywf64.com Collection",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol64.jpg",
                width: 400,
                height: 292,
                alt: "Tower of Light - Night View Online auction",
              },
              title: "Tower of Light - Night View Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol59.jpg",
                width: 325,
                height: 400,
                alt: "Tower of Light Entrance - Night View \u00a9 Copyright Berksboy Collection",
              },
              title: "Tower of Light Entrance - Night View \u00a9 Copyright Berksboy Collection",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol58.jpg",
                width: 251,
                height: 400,
                alt: "Tower of Light Entrance - Night View \u00a9 Copyright Berksboy Collection",
              },
              title: "Tower of Light Entrance - Night View \u00a9 Copyright Berksboy Collection",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/twrlit05/tol63.jpg",
                width: 263,
                height: 400,
                alt: "Tower of Light Entrance - Night View Online auction",
              },
              title: "Tower of Light Entrance - Night View Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol90.jpg",
                width: 400,
                height: 400,
                alt: "Tower of Light - Night View Online auction",
              },
              title: "Tower of Light - Night View Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol91.jpg",
                width: 400,
                height: 391,
                alt: "Tower of Light - Night View Online auction",
              },
              title: "Tower of Light - Night View Online auction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/twrlit05/tol53.jpg",
                width: 400,
                height: 270,
                alt: "Distant view of the Tower of Light - Note the visible shaft of light coming from the Xenon Searchlights at the center of the Tower \u00a9 Copyright Bill Cotter Collection",
              },
              title: "Distant view of the Tower of Light - Note the visible shaft of light coming from the Xenon Searchlights at the center of the Tower \u00a9 Copyright Bill Cotter Collection",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
          ],
        },
      ]}
    />
  );
}
