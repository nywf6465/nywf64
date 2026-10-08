import type { Metadata } from "next";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair photograph gallery — “photographs” standard.
 * Body from legacy sinclair05.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sinclair05Page() {
  return (
    <PhotographsPage
      heroLabel="Sinclair"
      titleId="sinclair05-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/sinclairoverview/hero-banner.jpg",
        alt: "Sinclair Dinoland at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SinclairNavChrome />}
      previousHref="/sinclair04"
      overviewHref="/sinclairoverview"
      nextHref="/sinclair06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sinclair05/S-183CLarge.jpg",
                width: 400,
                height: 379,
                alt: "Artist's rendering of Sinclair Dinoland",
              },
              title: "Artist's rendering of Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sinclair05/sincla01.jpg",
                width: 481,
                height: 239,
                alt: "Conceptual Artwork",
              },
              title: "Conceptual Artwork",
              source: "SOURCE: NY\u00a0World's Fair Corporation presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla117.jpg",
                width: 600,
                height: 477,
                alt: "Aerial View of Sinclair's Dinoland",
              },
              title: "Aerial View of Sinclair's Dinoland",
              source: "SOURCE: NY\u00a0World's Fair Publicity Photo presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/sinclair05/5614.jpg",
                width: 267,
                height: 400,
                alt: "T-Rex at the Sinclair Dinoland",
              },
              title: "T-Rex at the Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sinclair05/S307A.jpg",
                width: 400,
                height: 396,
                alt: "Giant T-Rex inside the Sinclair Dinoland",
              },
              title: "Giant T-Rex inside the Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sinclair05/5532.jpg",
                width: 400,
                height: 264,
                alt: "Sinclair Dinoland",
              },
              title: "Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sinclair05/555-15.jpg",
                width: 400,
                height: 272,
                alt: "Sinclair Dinoland",
              },
              title: "Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sinclair05/555-16.jpg",
                width: 271,
                height: 400,
                alt: "Sinclair Dinoland",
              },
              title: "Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sinclair05/633-15.jpg",
                width: 400,
                height: 267,
                alt: "Brontosaurus hatchlings at Sinclair Dinoland",
              },
              title: "Brontosaurus hatchlings at Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sinclair05/633-16.jpg",
                width: 267,
                height: 400,
                alt: "Sinclair Dinoland",
              },
              title: "Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sinclair05/79158Large.jpg",
                width: 400,
                height: 263,
                alt: "Ornitholestes at Sinclair Dinoland",
              },
              title: "Ornitholestes at Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/sinclair05/79159Large.jpg",
                width: 259,
                height: 400,
                alt: "Tyrannosaurus at Sinclair Dinoland",
              },
              title: "Tyrannosaurus at Sinclair Dinoland",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/sinclair05/sincla43.jpg",
                width: 400,
                height: 275,
                alt: "Brontosaurus of Sinclair Dinoland peers down on motorists along the Grand Central Parkway",
              },
              title: "Brontosaurus of Sinclair Dinoland peers down on motorists along the Grand Central Parkway",
              source: "SOURCE: Commercial Transparency by \u00a9 ROLOC\u00a0Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla142.jpg",
                width: 400,
                height: 248,
                alt: "Mold-A-Rama Machines Create Waxy-Plastic Dinos!",
              },
              title: "Mold-A-Rama Machines Create Waxy-Plastic Dinos!",
              source: "SOURCE: The\u00a0Sincliar Refining Company A via www.create-space.art website",
            },
            {
              image: {
                src: "/images/sinclair05/sincla143.jpg",
                width: 400,
                height: 168,
                alt: "Mold-A-Rama Machines Create a\u00a0Brontosaurus",
              },
              title: "Mold-A-Rama Machines Create a\u00a0Brontosaurus",
              source: "SOURCE: The\u00a0Sincliar Refining Company A via www.create-space.art website",
            },
            {
              image: {
                src: "/images/sinclair05/sincla144.jpg",
                width: 400,
                height: 181,
                alt: "Brontosaurus Ready for Play (or Collecting!)",
              },
              title: "Brontosaurus Ready for Play (or Collecting!)",
              source: "SOURCE: The\u00a0Sincliar Refining Company A via www.create-space.art website",
            },
            {
              image: {
                src: "/images/sinclair05/5470Large.jpg",
                width: 400,
                height: 288,
                alt: "Artist's rendering of a World's Fair Sinclair Service Station",
              },
              title: "Artist's rendering of a World's Fair Sinclair Service Station",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/sinclair05/sincla139.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Entrance",
              },
              title: "Sinclair Dinoland - Entrance",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla140.jpg",
                width: 400,
                height: 309,
                alt: "Sinclair Dinoland - Entrance",
              },
              title: "Sinclair Dinoland - Entrance",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/sinclair05/sincla130.jpg",
                width: 400,
                height: 267,
                alt: "Sinclair Dinoland",
              },
              title: "Sinclair Dinoland",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla132.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Baby Brontosaurus Hatchlings",
              },
              title: "Sinclair Dinoland - Baby Brontosaurus Hatchlings",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla99.jpg",
                width: 305,
                height: 389,
                alt: "Interesting view of Tyrannosaurus and Triceratops",
              },
              title: "Interesting view of Tyrannosaurus and Triceratops",
              source: "SOURCE: \u00a9 Copyright John Pender Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla129.jpg",
                width: 267,
                height: 400,
                alt: "Sinclair Dinoland - Tyrannosaurus",
              },
              title: "Sinclair Dinoland - Tyrannosaurus",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla134.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Tyrannosaurus",
              },
              title: "Sinclair Dinoland - Tyrannosaurus",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla131.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Triceratops",
              },
              title: "Sinclair Dinoland - Triceratops",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla127.jpg",
                width: 400,
                height: 267,
                alt: "Sinclair Dinoland - Corythosaurus",
              },
              title: "Sinclair Dinoland - Corythosaurus",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla135.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Corythosaurus",
              },
              title: "Sinclair Dinoland - Corythosaurus",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla128.jpg",
                width: 400,
                height: 266,
                alt: "Sinclair Dinoland - Stegosaurus",
              },
              title: "Sinclair Dinoland - Stegosaurus",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla136.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Stegosaurus",
              },
              title: "Sinclair Dinoland - Stegosaurus",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla133.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Trachodon",
              },
              title: "Sinclair Dinoland - Trachodon",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla137.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Ornitholestes",
              },
              title: "Sinclair Dinoland - Ornitholestes",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla138.jpg",
                width: 400,
                height: 353,
                alt: "Sinclair Dinoland - Struthiomimus",
              },
              title: "Sinclair Dinoland - Struthiomimus",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/sinclair05/sincla141.jpg",
                width: 400,
                height: 314,
                alt: "Sinclair Dinoland - Brontosaurus Eggs",
              },
              title: "Sinclair Dinoland - Brontosaurus Eggs",
              source: "SOURCE: Online auction",
            },
          ],
        }
      ]}
    />
  );
}
