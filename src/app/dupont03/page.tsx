import type { Metadata } from "next";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — DuPont — nywf64.com",
  description:
    "DuPont pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont photograph album I — “photographs” standard.
 * Body from legacy dupont03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Dupont03Page() {
  return (
    <PhotographsPage
      heroLabel="DuPont"
      titleId="dupont03-title"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont02"
      overviewHref="/dupontoverview"
      nextHref="/dupont04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/dupont03/5453Large.jpg",
                width: 400,
                height: 280,
                alt: "Architectural Model of the DuPont Pavilion",
              },
              title: "Architectural Model of the DuPont Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/dupont03/555-33.jpg",
                width: 400,
                height: 274,
                alt: "Big circular DuPont Pavilion",
              },
              title: "Big circular DuPont Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/dupont03/633-75.jpg",
                width: 400,
                height: 267,
                alt: "DuPont Pavilion holds two theaters",
              },
              title: "DuPont Pavilion holds two theaters",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/dupont03/dupont54.jpg",
                width: 400,
                height: 233,
                alt: "DuPont Pavilion",
              },
              title: "DuPont Pavilion",
              source:
                "SOURCE: NY World's Fair Publication, For Those Who Produced the New York World's Fair 1964-1965",
            },
            {
              image: {
                src: "/images/dupont03/S306D.jpg",
                width: 400,
                height: 395,
                alt: "DuPont Pavilion - Night",
              },
              title: "DuPont Pavilion - Night",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/dupont03/79141Large.jpg",
                width: 400,
                height: 268,
                alt: "Chemical magic performed at the DuPont Pavilion",
              },
              title: "Chemical magic performed at the DuPont Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/dupont03/dupont69.jpg",
                width: 400,
                height: 401,
                alt: "Big sign announces DuPont Pavilion",
              },
              title: "Big sign announces DuPont Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont55.jpg",
                width: 267,
                height: 400,
                alt: "Big sign announces DuPont Pavilion",
              },
              title: "Big sign announces DuPont Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont68.jpg",
                width: 400,
                height: 393,
                alt: "DuPont Pavilion",
              },
              title: "DuPont Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/dupont03/dupont61.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont57.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont60.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont62.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont58.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont59.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont56.jpg",
                width: 400,
                height: 267,
                alt: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              },
              title: 'A scene from DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont64.jpg",
                width: 400,
                height: 267,
                alt: 'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              },
              title:
                'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont65.jpg",
                width: 400,
                height: 267,
                alt: 'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              },
              title:
                'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont63.jpg",
                width: 400,
                height: 267,
                alt: 'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              },
              title:
                'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/dupont03/dupont66.jpg",
                width: 400,
                height: 267,
                alt: 'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              },
              title:
                'Chemical magic at DuPont\'s "Wonderful World of Chemistry"',
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/dupont03/dupont29.jpg",
                width: 400,
                height: 418,
                alt: 'It takes 203 actors, actresses, singers, dancers, hosts, hostesses, musicians, technicians, projectionists, stage hands, crew members and administrative staff to stage 48 shows daily at DuPont\'s "Wonderful World of Chemistry." Here are all 203 of \'em!',
              },
              title: (
                <>
                  It takes 203 actors, actresses, singers, dancers, hosts,
                  hostesses, musicians, technicians, projectionists, stage hands,
                  crew members and administrative staff to stage 48 shows daily
                  at DuPont&apos;s &quot;Wonderful World of Chemistry.&quot; Here
                  are all 203 of &apos;em!
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Bill Eddy,{" "}
                  <em>New York Sunday News</em>, June 13, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
