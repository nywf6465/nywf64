import type { Metadata } from "next";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Illinois — nywf64.com",
  description:
    "Illinois Pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab = (
  <>SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.</>
);
const blackhawk = (
  <>
    SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air
    Lines
  </>
);
const wolfe = (
  <>
    SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films
  </>
);
const disneyFilm = (
  <>SOURCE: Screen Shot - Film Disney Goes to the World&apos;s Fair</>
);
const nywf64 = (
  <>SOURCE: © Copyright nywf64.com Collection</>
);

/**
 * Illinois photograph album — PhotographsPage standard.
 * Body from legacy illinois04.html (Scrap Book banner omitted).
 */
export default function Illinois04Page() {
  return (
    <PhotographsPage
      heroLabel="Illinois Pavilion"
      titleId="illinois04-title"
      title="Photograph Album"
      hero={{
        src: "/images/illinoisoverview/hero-banner.jpg",
        alt: "Illinois Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IllinoisNavChrome />}
      previousHref="/illinois03"
      overviewHref="/illinoisoverview"
      nextHref="/illinois05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/illinois04/photolab-5631.jpg",
                width: 267,
                height: 400,
                alt: "Lincoln at the Illinois Pavilion",
              },
              title: "Lincoln - Illinois Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/illinois04/photolab-5506.jpg",
                width: 400,
                height: 268,
                alt: "Illinois Pavilion",
              },
              title: "Illinois Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/illinois04/mainliner-555-21.jpg",
                width: 400,
                height: 270,
                alt: "Illinois Pavilion",
              },
              title: "Illinois Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/illinois04/mainliner-555-22.jpg",
                width: 269,
                height: 400,
                alt: "Lincoln on Horseback at the Illinois Pavilion",
              },
              title: "Lincoln on Horseback - Illinois Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/illinois04/mainliner-633-28.jpg",
                width: 400,
                height: 267,
                alt: "Illinois Pavilion",
              },
              title: "Illinois Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/illinois04/mainliner-633-29.jpg",
                width: 267,
                height: 400,
                alt: "Bust of Lincoln at the Illinois Pavilion",
              },
              title: "Bust of Lincoln - Illinois Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/illinois04/ill60.jpg",
                width: 400,
                height: 225,
                alt: "Abraham Lincoln at Illinois Pavilion",
              },
              title: "Abraham Lincoln at Illinois Pavilion",
              source: disneyFilm,
            },
            {
              image: {
                src: "/images/illinois04/ill61.jpg",
                width: 400,
                height: 198,
                alt: "Abraham Lincoln at Illinois Pavilion",
              },
              title: "Abraham Lincoln at Illinois Pavilion",
              source: disneyFilm,
            },
            {
              image: {
                src: "/images/illinois04/wolfe-79090Large.jpg",
                width: 263,
                height: 400,
                alt: "Anamatronic Lincoln in Illinois Pavilion",
              },
              title: "Anamatronic Lincoln in Illinois Pavilion",
              source: wolfe,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/illinois04/ill56.jpg",
                width: 400,
                height: 267,
                alt: "Replica of Lincoln's Log Cabin at Illinois Pavilion",
              },
              title: "Replica of Lincoln's Log Cabin at Illinois Pavilion",
              source: nywf64,
            },
          ],
        },
      ]}
    />
  );
}
