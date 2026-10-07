import type { Metadata } from "next";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — India — nywf64.com",
  description:
    "India pavilion photograph gallery — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * India photograph gallery — “photographs” standard.
 * Body from legacy india05.html (Photograph Scrap Book / Adobe chrome omitted).
 * Layout: PhotographsPage (/aertow03). Title matches legacy “Gallery of Photographs”.
 * Legacy wording (“Photo Lab, inc.”, “Exibits”) preserved.
 */
export default function India05Page() {
  return (
    <PhotographsPage
      heroLabel="India"
      titleId="india05-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/indiaoverview/hero-banner.jpg",
        alt: "India pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IndiaNavChrome />}
      previousHref="/india04"
      overviewHref="/indiaoverview"
      nextHref="/indiaoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/india05/5515.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of India",
              },
              title: "Pavilion of India",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/india05/5621.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of India",
              },
              title: "Pavilion of India",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/india05/555-52.jpg",
                width: 267,
                height: 400,
                alt: "Striking Pavilion of India",
              },
              title: "Striking Pavilion of India",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/india05/633-38.jpg",
                width: 267,
                height: 400,
                alt: "Striking Pavilion of India",
              },
              title: "Striking Pavilion of India",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/india05/india05.jpg",
                width: 400,
                height: 274,
                alt: "India Pavilion Entrance Hall",
              },
              title: "India Pavilion Entrance Hall",
              source: (
                <>
                  SOURCE: Commercial Transparency by © ROLOC Color Films
                  presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/india05/india06.jpg",
                width: 400,
                height: 274,
                alt: "India Pavilion Exhibit Room",
              },
              title: "India Pavilion Exhibit Room",
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
                src: "/images/india05/india07.jpg",
                width: 400,
                height: 253,
                alt: "Pavilion of India",
              },
              title: "Pavilion of India",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/india05/india08.jpg",
                width: 400,
                height: 390,
                alt: "Pavilion of India",
              },
              title: "Pavilion of India",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/india05/india09.jpg",
                width: 400,
                height: 401,
                alt: "Pavilion of India Exibits",
              },
              title: "Pavilion of India Exibits",
              source: <>SOURCE: Online auction</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/india05/india01.jpg",
                width: 460,
                height: 233,
                alt: "India pavilion Progress in Democracy",
              },
              title: (
                <>
                  The theme of India&apos;s pavilion is Progress in Democracy,
                  and the country&apos;s old cultures and new industries - from
                  3,000 B.C. to the 20th Century - are on exhibit. Indian
                  delicacies are served in the restaurant.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, September 19, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
