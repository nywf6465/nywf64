import type { Metadata } from "next";
import { HalsciNavChrome } from "@/components/HalsciNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Hall of Science — nywf64.com",
  description:
    "Hall of Science photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Science photograph album — “photographs” standard.
 * Body from legacy halsci03.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 * Legacy caption wording (“the Atomic energy commission”, lowercase “the”)
 * preserved.
 */
export default function Halsci03Page() {
  return (
    <PhotographsPage
      heroLabel="Hall of Science"
      titleId="halsci03-title"
      hero={{
        src: "/images/halscioverview/hero-banner.jpg",
        alt: "Hall of Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalsciNavChrome />}
      previousHref="/halsci02"
      overviewHref="/halscioverview"
      nextHref="/halsci04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/halsci03/S-186BLarge.jpg",
                width: 400,
                height: 417,
                alt: "Artist's rendering of the Hall of Science",
              },
              title: "Artist's rendering of the Hall of Science",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/halsci03/633-36.jpg",
                width: 267,
                height: 400,
                alt: "Great Hall of the Hall of Science",
              },
              title: "Great Hall of the Hall of Science",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/halsci03/halsci11.jpg",
                width: 272,
                height: 400,
                alt: 'A scene from "Rendezvous in Space"',
              },
              title: 'A scene from "Rendezvous in Space"',
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci12.jpg",
                width: 400,
                height: 279,
                alt: 'A scene from "Rendezvous in Space"',
              },
              title: 'A scene from "Rendezvous in Space"',
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci13.jpg",
                width: 400,
                height: 268,
                alt: 'A scene from "Rendezvous in Space"',
              },
              title: 'A scene from "Rendezvous in Space"',
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci14.jpg",
                width: 400,
                height: 261,
                alt: 'A scene from "Rendezvous in Space"',
              },
              title: 'A scene from "Rendezvous in Space"',
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/halsci03/halsci05.jpg",
                width: 400,
                height: 276,
                alt: "Hall of Science",
              },
              title: "Hall of Science",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci06.jpg",
                width: 400,
                height: 274,
                alt: "Hall of Science",
              },
              title: "Hall of Science",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci07.jpg",
                width: 400,
                height: 263,
                alt: "Reflecting pool and fountains surround the Hall of Science",
              },
              title:
                "Reflecting pool and fountains surround the Hall of Science",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci08.jpg",
                width: 263,
                height: 400,
                alt: "Crowds wait in line for entrance to the Great Hall",
              },
              title: "Crowds wait in line for entrance to the Great Hall",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci16.jpg",
                width: 263,
                height: 400,
                alt: "Entrance Portal",
              },
              title: "Entrance Portal",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/halsci03/halsci09.jpg",
                width: 272,
                height: 400,
                alt: "Entrance Portal",
              },
              title: "Entrance Portal",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/halsci03/halsci10.jpg",
                width: 400,
                height: 278,
                alt: "Detail of the exterior of the Great Hall",
              },
              title: "Detail of the exterior of the Great Hall",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/halsci03/halsci01.jpg",
                width: 342,
                height: 400,
                alt: "Looking like a giant cement carpet standing on its edge, the Hall of Science",
              },
              title: (
                <>
                  Looking like a giant cement carpet standing on its edge, the
                  Hall of Science in the Transportation Area attracts its many
                  visitors into a creviced entrance. the Atomic energy
                  commission is top exhibitor inside building.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, September 12, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/halsci03/halsci02.jpg",
                width: 318,
                height: 230,
                alt: "An upside down yellow space taxi approaches a permanently orbiting space lab",
              },
              title: (
                <>
                  An upside down yellow space taxi approaches a permanently
                  orbiting space lab in this simulated rendezvous in outer space
                  of full-sized manned orbital vehicles. Staged by
                  Martin-Marietta above Hall&apos;s cathedral-like main floor.
                  It&apos;s a thriller.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, September 12, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/halsci03/halsci15.jpg",
                width: 318,
                height: 399,
                alt: "At Atomsville, lads learn that 30 years of non-stop pedaling equals the energy in one pound of uranium",
              },
              title: (
                <>
                  At Atomsville, lads learn that 30 years of non-stop pedaling
                  equals the energy in one pound of uranium.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by William Klein and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, June 20, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
