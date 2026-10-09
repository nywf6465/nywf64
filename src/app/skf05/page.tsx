import type { Metadata } from "next";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — SKF — nywf64.com",
  description:
    "SKF pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF photograph album — “photographs” standard.
 * Body from legacy skf05.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Skf05Page() {
  return (
    <PhotographsPage
      heroLabel="SKF"
      titleId="skf05-title"
      title="Photograph Album"
      hero={{
        src: "/images/skfoverview/hero-banner.jpg",
        alt: "SKF pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SkfNavChrome />}
      previousHref="/skf04"
      overviewHref="/skfoverview"
      nextHref="/skf06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/skf05/skf38.jpg",
                width: 400,
                height: 370,
                alt: "SKF Pavilion",
              },
              title: "SKF Pavilion",
              source: "SOURCE: NY World's Fair Publicity Photo",
            },
            {
              image: {
                src: "/images/skf05/photolab-5540.jpg",
                width: 273,
                height: 400,
                alt: "SKF Pavilion",
              },
              title: "SKF Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/skf05/photolab-S313B.jpg",
                width: 400,
                height: 412,
                alt: "SKF Pavilion on the Avenue of Automation",
              },
              title: "SKF Pavilion on the Avenue of Automation",
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
                src: "/images/skf05/skf36.jpg",
                width: 400,
                height: 394,
                alt: "SKF Pavilion",
              },
              title: "SKF Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/skf05/skf35.jpg",
                width: 400,
                height: 273,
                alt: "SKF Pavilion",
              },
              title: "SKF Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/skf05/skf37.jpg",
                width: 273,
                height: 400,
                alt: "SKF Pavilion",
              },
              title: "SKF Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
