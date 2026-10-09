import type { Metadata } from "next";
import { TwothoNavChrome } from "@/components/TwothoNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Two Thousand Tribes — nywf64.com",
  description:
    "Two Thousand Tribes photograph album from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const blackhawk = (
  <>
    SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air
    Lines
  </>
);

/**
 * Two Thousand Tribes photograph album — “photographs” standard.
 * Body from legacy twotho04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Twotho04Page() {
  return (
    <PhotographsPage
      heroLabel="Two Thousand Tribes"
      titleId="twotho04-title"
      title="Photograph Album"
      hero={{
        src: "/images/twothooverview/hero-banner.jpg",
        alt: "Two Thousand Tribes pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<TwothoNavChrome />}
      previousHref="/twotho03"
      overviewHref="/twothooverview"
      nextHref="/twothooverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/twotho04/555-51.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Two Thousand Tribes",
              },
              title: "Pavilion of Two Thousand Tribes",
              source: blackhawk,
            },
          ],
        },
        {
          heading: "Photographs",
          photos: [
            {
              image: {
                src: "/images/twotho04/twotho05.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Two Thousand Tribes",
              },
              title: "Pavilion of Two Thousand Tribes",
              source: <>SOURCE: Online auction</>,
            },
            {
              image: {
                src: "/images/twotho04/twotho04.jpg",
                width: 267,
                height: 400,
                alt: "Totem poles outside the Two Thousand Tribes Pavilion",
              },
              title: "Totem poles outside the Two Thousand Tribes Pavilion",
              source: <>SOURCE: © Copyright nywf64.com Collection</>,
            },
          ],
        },
      ]}
    />
  );
}
