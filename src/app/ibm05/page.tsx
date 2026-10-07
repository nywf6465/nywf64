import type { Metadata } from "next";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — IBM Pavilion — nywf64.com",
  description:
    "IBM Pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM photograph album — body from legacy ibm05.html (scrapbook banner omitted).
 * Publication Photographs section omitted per pavilion scope.
 * Legacy typos (Illustriate, illuninated, websiite) preserved.
 */
export default function Ibm05Page() {
  return (
    <PhotographsPage
      heroLabel="IBM Pavilion"
      titleId="ibm05-title"
      title="Photograph Album"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm04"
      overviewHref="/ibmoverview"
      nextHref="/ibm06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/ibm05/5459Large.jpg",
                width: 400,
                height: 279,
                alt: "Architectural model of the IBM Pavilion",
              },
              title: "Architectural model of the IBM Pavilion",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/ibm05/ibm104.jpg",
                width: 400,
                height: 385,
                alt: "IBM Executives Examine a Model of the Pavilion",
              },
              title: "IBM Executives Examine a Model of the Pavilion",
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm113.jpg",
                width: 400,
                height: 229,
                alt: "Construction of the IBM Pavilion",
              },
              title: "Construction of the IBM Pavilion",
              source: "SOURCE: YouTube Video Screen Shot",
            },
            {
              image: {
                src: "/images/ibm05/ibm112.jpg",
                width: 400,
                height: 233,
                alt: "Construction of the IBM Pavilion",
              },
              title: "Construction of the IBM Pavilion",
              source: "SOURCE: YouTube Video Screen Shot",
            },
            {
              image: {
                src: "/images/ibm05/5485.jpg",
                width: 400,
                height: 267,
                alt: "IBM Pavilion - Night",
              },
              title: "IBM Pavilion - Night",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/ibm05/555-24.jpg",
                width: 400,
                height: 274,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/ibm05/633-77.jpg",
                width: 267,
                height: 400,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/ibm05/ibm108.jpg",
                width: 400,
                height: 278,
                alt: "Inside the Information Machine atop the IBM Pavilion",
              },
              title: <>
                Inside the <em>Information Machine</em> atop the IBM Pavilion
              </>,
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm111.jpg",
                width: 400,
                height: 312,
                alt: "IBM Hostess Explains the Probability Machine",
              },
              title: "IBM Hostess Explains the Probability Machine",
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm109.jpg",
                width: 400,
                height: 293,
                alt: "Dice Cages Illustriate Probability",
              },
              title: "Dice Cages Illustriate Probability",
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm110.jpg",
                width: 259,
                height: 400,
                alt: "Little Theater Puppet Shows Help Explain Logic",
              },
              title: "Little Theater Puppet Shows Help Explain Logic",
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm105.jpg",
                width: 400,
                height: 284,
                alt: "IBM Hostess Explains how Automatic Character Recognition Works",
              },
              title: "IBM Hostess Explains how Automatic Character Recognition Works",
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm106.jpg",
                width: 400,
                height: 287,
                alt: "Digital Displays Shows Results of Automatic Character Recognition",
              },
              title: "Digital Displays Shows Results of Automatic Character Recognition",
              source: "SOURCE: www.ibm.com websiite",
            },
            {
              image: {
                src: "/images/ibm05/ibm107.jpg",
                width: 266,
                height: 400,
                alt: "Fairgoers type on IBM's New Selectric Typewriters",
              },
              title: <>
                Fairgoers type on IBM&apos;s New <em>Selectric</em> Typewriters
              </>,
              source: "SOURCE: www.ibm.com websiite",
            }
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/ibm05/ibm32.jpg",
                width: 400,
                height: 270,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ibm05/ibm38.jpg",
                width: 400,
                height: 267,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ibm05/ibm124.jpg",
                width: 400,
                height: 272,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm94.jpg",
                width: 400,
                height: 270,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/ibm05/ibm103.jpg",
                width: 400,
                height: 280,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm99.jpg",
                width: 400,
                height: 400,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm101.jpg",
                width: 265,
                height: 400,
                alt: "Probability Machine",
              },
              title: "Probability Machine",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm98.jpg",
                width: 400,
                height: 499,
                alt: "Puppet Theaters Entrance",
              },
              title: "Puppet Theaters Entrance",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm102.jpg",
                width: 400,
                height: 275,
                alt: "Puppet Theater",
              },
              title: "Puppet Theater",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm100.jpg",
                width: 270,
                height: 400,
                alt: "The People Wall - IBM Pavilion",
              },
              title: "The People Wall - IBM Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm97.jpg",
                width: 400,
                height: 268,
                alt: "The People Wall - IBM Pavilion",
              },
              title: "The People Wall - IBM Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm95.jpg",
                width: 400,
                height: 266,
                alt: "IBM Pavilion",
              },
              title: "IBM Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ibm05/ibm96.jpg",
                width: 400,
                height: 306,
                alt: "IBM Pavilion - two views of the Information Machine illuninated at night",
              },
              title: "IBM Pavilion - two views of the Information Machine illuninated at night",
              source: "SOURCE: © Copyright Berksboy Collection",
            }
          ],
        }      ]}
    />
  );
}
