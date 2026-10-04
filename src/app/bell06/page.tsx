import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Bell System — nywf64.com",
  description:
    "Bell System Pavilion photograph album — fairgoer and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const auction = "SOURCE: Online auction";
const kraus = "SOURCE: © Copyright Mike Kraus Collection";

/**
 * Bell System photograph album II — “photographs” standard.
 * Body from legacy bell06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Legacy wording (Plexiblass) is preserved.
 */
export default function Bell06Page() {
  return (
    <PhotographsPage
      heroLabel="Bell System Pavilion"
      titleId="bell06-title"
      title="Photograph Album"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell05"
      overviewHref="/belloverview"
      nextHref="/bellgroundbreaking"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/bell06/bell99.jpg",
                width: 400,
                height: 276,
                alt: "Bell System Pavilion",
              },
              title: "Bell System Pavilion",
              source: auction,
            },
            {
              image: {
                src: "/images/bell06/bell102.jpg",
                width: 400,
                height: 401,
                alt: "Bell System Pavilion",
              },
              title: "Bell System Pavilion",
              source: auction,
            },
            {
              image: {
                src: "/images/bell06/bell101.jpg",
                width: 400,
                height: 275,
                alt: "Bell System Pavilion",
              },
              title: "Bell System Pavilion",
              source: auction,
            },
            {
              image: {
                src: "/images/bell06/bell11.jpg",
                width: 400,
                height: 300,
                alt: "Entrance to the Ride of Communication Loading Platform",
              },
              title: "Entrance to the Ride of Communication Loading Platform",
              source: "SOURCE: © Copyright Phil Ras Collection",
            },
            {
              image: {
                src: "/images/bell06/bell66.jpg",
                width: 400,
                height: 259,
                alt: "Side view of the Bell System Pavilion and Communication Ride loading platform",
              },
              title:
                "Side view of the Bell System Pavilion and Communication Ride loading platform",
              source: "SOURCE: © Copyright Gary Holmes Collection",
            },
            {
              image: {
                src: "/images/bell06/bell100.jpg",
                width: 400,
                height: 273,
                alt: "Side view of the Bell System Pavilion",
              },
              title: "Side view of the Bell System Pavilion",
              source: auction,
            },
            {
              image: {
                src: "/images/bell06/bell103.jpg",
                width: 400,
                height: 385,
                alt: "Side view of the Bell System Pavilion",
              },
              title: "Side view of the Bell System Pavilion",
              source: auction,
            },
            {
              image: {
                src: "/images/bell06/bell21.jpg",
                width: 400,
                height: 249,
                alt: "Fountains of the Planets spray in the Pool of Industry",
              },
              title:
                "Fountains of the Planets spray in the Pool of Industry in front of the Bell System Pavilion",
              source: "SOURCE: © Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/bell06/bell96.jpg",
                width: 400,
                height: 268,
                alt: "Serpentine Telephone Booths",
              },
              title: "Serpentine Telephone Booths",
              source: kraus,
            },
            {
              image: {
                src: "/images/bell06/bell97.jpg",
                width: 400,
                height: 327,
                alt: "Family Telephone Booth",
              },
              title: "Family Telephone Booth",
              source: kraus,
            },
            {
              image: {
                src: "/images/bell06/bell98.jpg",
                width: 400,
                height: 301,
                alt: "Family Telephone Booth",
              },
              title: "Family Telephone Booth",
              source: auction,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/bell06/bell71.jpg",
                width: 600,
                height: 506,
                alt: "BELL TELEPHONE BOOTHS",
              },
              title: (
                <>
                  BELL TELEPHONE BOOTHS - Luminous canopies of white translucent
                  Plexiglass light more than 100 outdoor telephone stations at
                  the Fair. There are also family-size telephone booths with
                  special microphones and speakers to permit group calls. These
                  paraboloid booths, which can accommodate up to six persons,
                  are glazed across the front with transparent green Plexiblass
                </>
              ),
              source: (
                <>
                  SOURCE: Brochure <em>Plexiglass at the Fair</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
