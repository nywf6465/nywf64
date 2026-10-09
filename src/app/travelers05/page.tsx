import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance Pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance photograph album.
 * Body from legacy travelers05.html (Photograph Scrap Book banner omitted).
 */
export default function Travelers05Page() {
  return (
    <PhotographsPage
      heroLabel="Travelers Insurance"
      titleId="travelers05-title"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers04"
      overviewHref="/travelersoverview"
      nextHref="/travelers06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/travelers05/S-184DLarge.jpg",
                width: 400,
                height: 379,
                alt: "Artist's rendering of the Travelers Insurance Pavilion",
              },
              title: "Artist's rendering of the Travelers Insurance Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab,
                  Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/travelers05/633-78.jpg",
                width: 400,
                height: 259,
                alt: "Travelers Pavilion",
              },
              title: "Travelers Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/travelers05/79152Large.jpg",
                width: 400,
                height: 263,
                alt: "Travelers Insurance Companies Pavilion",
              },
              title: "Travelers Insurance Companies Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide
                  Films
                </>
              ),
            },
            {
              image: {
                src: "/images/travelers05/5486.jpg",
                width: 400,
                height: 267,
                alt: "Travelers Insurance Pavilion at dusk",
              },
              title: "Travelers Insurance Pavilion at dusk",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab,
                  Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/travelers05/trvlrs14.jpg",
                width: 500,
                height: 391,
                alt: "Travelers Insurance Companies Pavilion",
              },
              title: "Travelers Insurance Companies Pavilion",
              source: (
                <>
                  SOURCE: Travelers Insuracne Companies Archival Photograph -
                  nywf64.com Collection
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
                src: "/images/travelers05/trvlrs108.jpg",
                width: 400,
                height: 282,
                alt: "Designer works on the Atilla the Hun diorama set piece",
              },
              title: "Designer works on the Atilla the Hun diorama set piece",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/travelers05/trvlrs02.jpg",
                width: 500,
                height: 324,
                alt: "Travelers Insurance Companies Pavilion from the Pool of Industry",
              },
              title:
                "Travelers Insurance Companies Pavilion from the Pool of Industry",
              source: (
                <>SOURCE: © Copyright Bradd Schiffman Collection</>
              ),
            },
            {
              image: {
                src: "/images/travelers05/trvlrs110.jpg",
                width: 400,
                height: 399,
                alt: "Travelers Pavilion",
              },
              title: "Travelers Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/travelers05/trvlrs111.jpg",
                width: 400,
                height: 390,
                alt: "Travelers Pavilion",
              },
              title: "Travelers Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/travelers05/trvlrs109.jpg",
                width: 400,
                height: 402,
                alt: "Fountain effect at the base of the Travelers Pavilion",
              },
              title: "Fountain effect at the base of the Travelers Pavilion",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/travelers05/trvlrs112.jpg",
                width: 400,
                height: 391,
                alt: "Night View of the Travelers Pavilion Entrance",
              },
              title: "Night View of the Travelers Pavilion Entrance",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/travelers05/trvlrs03.jpg",
                width: 439,
                height: 302,
                alt: "Mural inside the Travelers Insurance Companies Pavilion",
              },
              title: "Mural inside the Travelers Insurance Companies Pavilion",
              source: (
                <>SOURCE: © Copyright Bradd Schiffman Collection</>
              ),
            },
          ],
        },
      ]}
    />
  );
}
