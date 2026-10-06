import type { Metadata } from "next";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Festival of Gas — nywf64.com",
  description:
    "Festival of Gas photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas photograph album — “photographs” standard.
 * Body from legacy fesgas05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03). HARD RULE — photo → caption → SOURCE.
 */
export default function Fesgas05Page() {
  return (
    <PhotographsPage
      heroLabel="Festival of Gas"
      titleId="fesgas05-title"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas04"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/fesgas05/5415Large.jpg",
                width: 400,
                height: 274,
                alt: "Architectural Model of the Festival of Gas Pavilion",
              },
              title: "Architectural Model of the Festival of Gas Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/5416Large.jpg",
                width: 400,
                height: 280,
                alt: "Artist's conception of the Festival '64 Restaurant in Festival of Gas",
              },
              title: (
                <>
                  Artist&apos;s conception of the Festival &apos;64 Restaurant
                  in Festival of Gas
                </>
              ),
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/5483.jpg",
                width: 400,
                height: 267,
                alt: "Festival of Gas Pavilion",
              },
              title: "Festival of Gas Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/S306C.jpg",
                width: 400,
                height: 400,
                alt: "Festival of Gas",
              },
              title: "Festival of Gas",
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
                src: "/images/fesgas05/fg52.jpg",
                width: 400,
                height: 413,
                alt: "Festival of Gas Pavilion",
              },
              title: "Festival of Gas Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fesgas05/fg57.jpg",
                width: 400,
                height: 391,
                alt: "Festival of Gas Pavilion",
              },
              title: "Festival of Gas Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fesgas05/fg54.jpg",
                width: 400,
                height: 398,
                alt: "Festival of Gas Pavilion",
              },
              title: "Festival of Gas Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fesgas05/fg53.jpg",
                width: 400,
                height: 383,
                alt: "Festival of Gas Pavilion exhibits",
              },
              title: "Festival of Gas Pavilion exhibits",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fesgas05/fesgas03.jpg",
                width: 400,
                height: 273,
                alt: "Gardens in the pond of the Festival of Gas Pavilion",
              },
              title: "Gardens in the pond of the Festival of Gas Pavilion",
              source: <>SOURCE: © Copyright George Campbell Collection</>,
            },
            {
              image: {
                src: "/images/fesgas05/fg55.jpg",
                width: 400,
                height: 279,
                alt: "Festival of Gas Pavilion exhibits",
              },
              title: "Festival of Gas Pavilion exhibits",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/fesgas05/fg56.jpg",
                width: 400,
                height: 306,
                alt: "Festival of Gas Pavilion exhibits",
              },
              title: "Festival of Gas Pavilion exhibits",
              source: <>SOURCE: Online auction</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/fesgas05/fg49.jpg",
                width: 460,
                height: 289,
                alt: "Festival of Gas set in a lake of floating flower beds",
              },
              title: (
                <>
                  By day, the Festival of Gas appears to be set in a lake of
                  floating flower beds. Behind the picture windows in foreground
                  is Festival &apos;65 - The American Restaurant, a gourmet&apos;s
                  delight specializing in uniquely American dishes from the
                  colonies to today&apos;s best regional fare.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto, <em>New York Sunday News</em>, July 4,
                  1965
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/fg50.jpg",
                width: 300,
                height: 276,
                alt: "Grace Zia Chu's Chinese spareribs on gas grill",
              },
              title: (
                <>
                  Barbecue fans savor Grace Zia Chu&apos;s Chinese spareribs
                  cooking over ceramic coals on gas grill in the gaslight patio.
                  Good-by, charcoal!
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by William Klein and Patrick Carroll,{" "}
                  <em>New York Sunday News</em>, July 4, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/fg51.jpg",
                width: 400,
                height: 441,
                alt: "Festival of Gas pavilion at night",
              },
              title: (
                <>
                  Its umbrella-like roof white-lighted from underneath and its
                  surrounding waters reflecting same, the Festival of Gas
                  pavilion&apos;s even more sensational at night. Main display
                  area is under roof.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, July 4, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/fg42.jpg",
                width: 600,
                height: 465,
                alt: "Close-up view of the $15,000 detailed model",
              },
              title: (
                <>
                  Close-up view of a section of the $15,000 detailed model
                  commissioned by the Gas Companies
                </>
              ),
              source: (
                <>
                  SOURCE: New York News SUNDAY Coloroto Magazine, April 12, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/fesgas05/fg48.jpg",
                width: 699,
                height: 400,
                alt: "Festival of Gas from Electrical Construction and Maintenance",
              },
              source: (
                <>
                  SOURCE: Magazine{" "}
                  <em>Electrical Construction and Maintenance</em>, July 1964 -
                  presented courtesy Wayne Bretl Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
