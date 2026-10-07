import type { Metadata } from "next";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album II — Indonesia — nywf64.com",
  description:
    "Indonesia Pavilion photograph album II — Bill Cotter and Mike Kraus collection photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy indones07.html (scrapbook banners and donor intro boxes omitted). */
export default function Indones07Page() {
  const cotterSource = "SOURCE: © Copyright Bill Cotter Collection";
  const krausSource = "SOURCE: © Copyright Mike Kraus Collection";

  return (
    <PhotographsPage
      heroLabel="Indonesia"
      titleId="indones07-title"
      title="Photograph Album II"
      hero={{
        src: "/images/indonesoverview/hero-banner.jpg",
        alt: "Indonesia at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IndonesNavChrome />}
      previousHref="/indones06"
      overviewHref="/indonesoverview"
      nextHref="/indones08"
      sections={[
        {
          heading: "Bill Cotter Collection",
          photos: [
            {
              image: {
                src: "/images/indones07/indones22.jpg",
                width: 400,
                height: 384,
                alt: "The Indonesia Pavilion",
              },
              title: "The Indonesia Pavilion",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/indones07/indones23.jpg",
                width: 400,
                height: 268,
                alt: "The Indonesia Pavilion",
              },
              title: "The Indonesia Pavilion",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/indones07/indones21.jpg",
                width: 400,
                height: 406,
                alt: "Interior view of the Indonesia Pavilion",
              },
              title: "Interior view of the Indonesia Pavilion",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/indones07/indones20.jpg",
                width: 400,
                height: 399,
                alt: "Batik worker in Indonesian Pavilion",
              },
              title: "Batik worker in Indonesian Pavilion",
              source: cotterSource,
            },
          ],
        },
        {
          heading: "Mike Kraus Collection",
          photos: [
            {
              image: {
                src: "/images/indones07/indones09.jpg",
                width: 400,
                height: 270,
                alt: "Indonesia Pavilion entrance through the Tjandi Benthar gate",
              },
              title:
                'Indonesia Pavilion entrance through the "Tjandi Benthar" gate.',
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones10.jpg",
                width: 400,
                height: 271,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones16.jpg",
                width: 400,
                height: 266,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones17.jpg",
                width: 400,
                height: 270,
                alt: "Indonesia Pavilion",
              },
              title: "Indonesia Pavilion",
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones11.jpg",
                width: 400,
                height: 276,
                alt: "Close-up view of the Meru pagoda-like structure",
              },
              title: 'Close-up view of the "Meru" pagoda-like structure.',
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones12.jpg",
                width: 400,
                height: 273,
                alt: "Balinese statue at the Pavilion's entrance",
              },
              title: "Balinese statue at the Pavilion's entrance",
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones13.jpg",
                width: 400,
                height: 416,
                alt: "Close-up of the carvings on the Tjandi Benthar gate",
              },
              title:
                'Close-up of the carvings on the "Tjandi Benthar" gate.',
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones14.jpg",
                width: 400,
                height: 278,
                alt: "Close-up of the carvings on the Tjandi Benthar gate",
              },
              title:
                'Close-up of the carvings on the "Tjandi Benthar" gate.',
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones15.jpg",
                width: 400,
                height: 268,
                alt: "Stone carving at Indonesia Pavilion",
              },
              title: "Stone carving at Indonesia Pavilion.",
              source: krausSource,
            },
            {
              image: {
                src: "/images/indones07/indones18.jpg",
                width: 260,
                height: 400,
                alt: "Cast of Balinese Dancers",
              },
              title: "Cast of Balinese Dancers",
              source: krausSource,
            },
          ],
        },
      ]}
    />
  );
}
