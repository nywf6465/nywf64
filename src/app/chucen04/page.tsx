import type { Metadata } from "next";
import { ChucenNavChrome } from "@/components/ChucenNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Churchill Center — nywf64.com",
  description:
    "Churchill Center pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Churchill Center photograph album — “photographs” standard.
 * Body from legacy chucen04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Chucen04Page() {
  return (
    <PhotographsPage
      heroLabel="Churchill Center"
      titleId="chucen04-title"
      hero={{
        src: "/images/chucenoverview/hero-banner.jpg",
        alt: "Churchill Center at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucenNavChrome />}
      previousHref="/chucen03"
      overviewHref="/chucenoverview"
      nextHref="/chucenoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/chucen04/633-89.jpg",
                width: 400,
                height: 267,
                alt: "The Churchill Center",
              },
              title: "The Churchill Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/chucen04/633-90.jpg",
                width: 267,
                height: 400,
                alt: "Statue of Sir Winston Churchill outside of the Churchill Center",
              },
              title:
                "Statue of Sir Winston Churchill outside of the Churchill Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/chucen04/79170Large.jpg",
                width: 400,
                height: 266,
                alt: "Sir Winston Churchill - A Tribute",
              },
              title: "Sir Winston Churchill - A Tribute",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/chucen04/79174Large.jpg",
                width: 400,
                height: 259,
                alt: "Wall display of Churchill Cartoons",
              },
              title: "Wall display of Churchill Cartoons",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/chucen04/79175Large.jpg",
                width: 400,
                height: 262,
                alt: "Nobel Prize received by Churchill",
              },
              title: "Nobel Prize received by Churchill",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/chucen04/79176Large.jpg",
                width: 400,
                height: 262,
                alt: "Order of the Garter - England's highest award",
              },
              title: "Order of the Garter - England's highest award",
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
                src: "/images/chucen04/chucen05.jpg",
                width: 400,
                height: 276,
                alt: "The Churchill Center",
              },
              title: "The Churchill Center",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/chucen04/chucen08.jpg",
                width: 400,
                height: 385,
                alt: "The Churchill Center",
              },
              title: "The Churchill Center",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/chucen04/chucen06.jpg",
                width: 400,
                height: 268,
                alt: "The Churchill Center",
              },
              title: "The Churchill Center",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/chucen04/chucen04.jpg",
                width: 269,
                height: 400,
                alt: "Statue of Sir Winston Churchill outside of the Churchill Center",
              },
              title:
                "Statue of Sir Winston Churchill outside of the Churchill Center",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/chucen04/chucen07.jpg",
                width: 400,
                height: 298,
                alt: "The Churchill Center - Night view",
              },
              title: "The Churchill Center - Night view",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/chucen04/chucen09.jpg",
                width: 400,
                height: 398,
                alt: "The Churchill Center - Exhibit",
              },
              title: "The Churchill Center - Exhibit",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}
