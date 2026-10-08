import type { Metadata } from "next";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — U.S. Rubber — nywf64.com",
  description:
    "U.S. Rubber photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber photograph album — “photographs” standard.
 * Body from legacy usrub05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Usrub05Page() {
  return (
    <PhotographsPage
      heroLabel="U.S. Rubber"
      titleId="usrub05-title"
      title="Photograph Album"
      hero={{
        src: "/images/usruboverview/hero-banner.jpg",
        alt: "U.S. Rubber at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UsrubNavChrome />}
      previousHref="/usrub04"
      overviewHref="/usruboverview"
      nextHref="/usrub06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/usrub05/5535.jpg",
                width: 270,
                height: 400,
                alt: "U.S. Rubber Exhibit",
              },
              title: "U.S. Rubber Exhibit",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/usrub05/S301C.jpg",
                width: 400,
                height: 400,
                alt: "U.S. Rubber's Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber's Giant Tire Ferris Wheel",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/usrub05/555-10.jpg",
                width: 273,
                height: 400,
                alt: "U.S. Rubber Exhibit as seen from the towers of the New York State Pavilion",
              },
              title:
                "U.S. Rubber Exhibit as seen from the towers of the New York State Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/usrub05/555-11.jpg",
                width: 272,
                height: 400,
                alt: "U.S. Rubber's Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber's Giant Tire Ferris Wheel",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/usrub05/633-13.jpg",
                width: 268,
                height: 400,
                alt: "U.S. Rubber's Giant 80-foot high Ferris Wheel",
              },
              title: "U.S. Rubber's Giant 80-foot high Ferris Wheel",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/usrub05/usrub30.jpg",
                width: 272,
                height: 400,
                alt: "U.S. Rubber Tire Ferris Wheel",
              },
              title: "U.S. Rubber Tire Ferris Wheel",
              source: (
                <>
                  SOURCE: Commercial Transparency by © ROLOC Color Films
                  presented courtesy Bradd Schiffman Collection
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
                src: "/images/usrub05/usrub32.jpg",
                width: 264,
                height: 400,
                alt: "U.S. Rubber Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber Giant Tire Ferris Wheel",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/usrub05/usrub33.jpg",
                width: 400,
                height: 282,
                alt: "U.S. Rubber Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber Giant Tire Ferris Wheel",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/usrub05/usrub31.jpg",
                width: 400,
                height: 267,
                alt: "U.S. Rubber Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber Giant Tire Ferris Wheel",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
            {
              image: {
                src: "/images/usrub05/usrub02.jpg",
                width: 460,
                height: 305,
                alt: "U.S. Rubber Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber Giant Tire Ferris Wheel",
              source: <>SOURCE: © Copyright Craig Konowal Collection</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/usrub05/usrub26.jpg",
                width: 304,
                height: 450,
                alt: "U.S. Rubber giant tire Ferris wheel",
              },
              title: (
                <>
                  <strong>No fair would be a fair</strong> without a ferris wheel,
                  and this is New York&apos;s version, disguised as a huge rubber
                  tire by U.S. Rubber Co. Made of polyester resin and glass fiber,
                  it lifts riders - four to each bright-red gondola - 80 feet in
                  the air.
                </>
              ),
              source: (
                <>
                  SOURCE: <em>Saturday Evening Post</em>, Issue No. 20, May 23,
                  1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
