import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion photograph album — Bill Cotter Global Holiday photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const cotterSource = "SOURCE: © Copyright Bill Cotter Collection";

/**
 * Coca-Cola photograph album II — “photographs” standard.
 * Body from legacy coke05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage with contributor intro (/aertow03 standard).
 * Legacy wording (Ankor Wat) preserved.
 */
export default function Coke05Page() {
  return (
    <PhotographsPage
      heroLabel="Coca-Cola"
      titleId="coke05-title"
      title="Photograph Album"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke04"
      overviewHref="/cokeoverview"
      nextHref="/coke06"
      intro={
        <p>
          <strong style={{ color: "#4682b4" }}>Bill Cotter</strong>, World&apos;s
          Fair enthusiast, has been collecting images of the 1964/1965 New York
          World&apos;s Fair for many years. He shares with us here some views of
          the{" "}
          <strong style={{ color: "#4682b4" }}>Coca-Cola Pavilion</strong>. If
          you would like to see more photos from Bill&apos;s fabulous collection
          of World&apos;s Fair images, visit his website at{" "}
          <a
            href="http://www.worldsfairphotos.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WorldsFairPhotos.com
          </a>
          .
        </p>
      }
      sections={[
        {
          heading: "Bill Cotter Collection",
          photos: [
            {
              image: {
                src: "/images/coke05/coke43.jpg",
                width: 400,
                height: 265,
                alt: "The Coca-Cola Pavilion",
              },
              title: "The Coca-Cola Pavilion",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/coke05/coke44.jpg",
                width: 400,
                height: 257,
                alt: 'Hotel Hong Kong "Global Holiday" Interior',
              },
              title: 'Hotel Hong Kong "Global Holiday" Interior',
              source: cotterSource,
            },
            {
              image: {
                src: "/images/coke05/coke46.jpg",
                width: 253,
                height: 400,
                alt: 'Cambodia\'s Ankor Wat Temple Entrance in Coca-Cola\'s "Global Holiday"',
              },
              title:
                'Cambodia\'s Ankor Wat Temple Entrance in Coca-Cola\'s "Global Holiday"',
              source: cotterSource,
            },
            {
              image: {
                src: "/images/coke05/coke47.jpg",
                width: 400,
                height: 269,
                alt: '"Global Holiday" Ankor Wat Temple',
              },
              title: '"Global Holiday" Ankor Wat Temple',
              source: cotterSource,
            },
            {
              image: {
                src: "/images/coke05/coke45.jpg",
                width: 400,
                height: 255,
                alt: '"Global Holiday" Hong Kong Marketplace Scene',
              },
              title: '"Global Holiday" Hong Kong Marketplace Scene',
              source: cotterSource,
            },
            {
              image: {
                src: "/images/coke05/coke48.jpg",
                width: 400,
                height: 259,
                alt: 'Rio Harbor - Deck of the Cruise Ship in "Global Holiday"',
              },
              title: 'Rio Harbor - Deck of the Cruise Ship in "Global Holiday"',
              source: cotterSource,
            },
          ],
        },
      ]}
    />
  );
}
