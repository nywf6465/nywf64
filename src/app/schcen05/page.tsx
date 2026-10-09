import type { Metadata } from "next";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Schaefer — nywf64.com",
  description:
    "Schaefer Center photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center photograph album — “photographs” standard.
 * Body from legacy schcen05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Schcen05Page() {
  return (
    <PhotographsPage
      heroLabel="Schaefer"
      titleId="schcen05-title"
      hero={{
        src: "/images/schcenoverview/hero-banner.jpg",
        alt: "Schaefer Center at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SchcenNavChrome />}
      previousHref="/schcen04"
      overviewHref="/schcenoverview"
      nextHref="/schcen06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/schcen05/5465Large.jpg",
                width: 400,
                height: 277,
                alt: "Architectural model of the Schaefer Center",
              },
              title: "Architectural model of the Schaefer Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/schcen05/schcen28.jpg",
                width: 400,
                height: 319,
                alt: "Aerial View of the Schaefer Pavilion",
              },
              title: "Aerial View of the Schaefer Pavilion",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/schcen05/5472.jpg",
                width: 400,
                height: 267,
                alt: "Schaefer Center",
              },
              title: "Schaefer Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/schcen05/schcen02.jpg",
                width: 400,
                height: 317,
                alt: "Schaefer Pavilion",
              },
              title: "Schaefer Pavilion",
              source:
                "SOURCE: NY World's Fair Publicity Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/schcen05/79052Large.jpg",
                width: 400,
                height: 261,
                alt: "Gnomes pour and pump grains into the cooking kettle - a diorama at the Schaefer Center",
              },
              title:
                "Gnomes pour and pump grains into the cooking kettle - a diorama at the Schaefer Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/schcen05/79053Large.jpg",
                width: 400,
                height: 263,
                alt: "Gnomes service the Malt crusher - a diorama at the Schaefer Center",
              },
              title:
                "Gnomes service the Malt crusher - a diorama at the Schaefer Center",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/schcen05/schcen01.jpg",
                width: 400,
                height: 274,
                alt: "Dining in Schaefer Center Rotunda Restaurant",
              },
              title: "Dining in Schaefer Center Rotunda Restaurant",
              source:
                "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/schcen05/schcen33.jpg",
                width: 400,
                height: 267,
                alt: "Schaefer Center",
              },
              title: "Schaefer Center",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/schcen05/schcen34.jpg",
                width: 400,
                height: 452,
                alt: "Schaefer Center as seen from the Pepsi Pavilion",
              },
              title: "Schaefer Center as seen from the Pepsi Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/schcen05/schcen31.jpg",
                width: 335,
                height: 414,
                alt: "Schaefer Center — transparent Plexiglass walls of the Restaurant of Tomorrow",
              },
              title:
                'Schaefer Center - Transparent walls of sculptured Plexiglass produce an enchanting atmosphere for the "Restaurant of Tomorrow." Because Plexiglass is easy to form, it was possible to incorporate it in the wall\'s hundreds of domes that give beautiful reflections inside and outside the building. This bubble effect symbolizes the effervescense of beer.',
              source: (
                <>
                  SOURCE: Brochure, <em>Plexiglass at the Fair</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
