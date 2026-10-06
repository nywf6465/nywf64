import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Brochure: How to See the Fair — Festival of Gas — nywf64.com",
  description:
    "How to See the Fair brochure pages from the Festival of Gas pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — How to See the Fair brochure collages.
 * Body from legacy fesgas12.html (three 3×3 brochure-page collages; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Fesgas12Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas12-title"
      title="Brochure: How to See the Fair"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas11"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas13"
      collages={[
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas12/fg32.01.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 1",
            },
            {
              src: "/images/fesgas12/fg32.02.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 2",
            },
            {
              src: "/images/fesgas12/fg32.03.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 3",
            },
            {
              src: "/images/fesgas12/fg32.04.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 4",
            },
            {
              src: "/images/fesgas12/fg32.05.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 5",
            },
            {
              src: "/images/fesgas12/fg32.06.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 6",
            },
            {
              src: "/images/fesgas12/fg32.07.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 7",
            },
            {
              src: "/images/fesgas12/fg32.08.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 8",
            },
            {
              src: "/images/fesgas12/fg32.09.jpg",
              width: 300,
              height: 128,
              alt: "How to See the Fair brochure panel 9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas12/fg33.01.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 10",
            },
            {
              src: "/images/fesgas12/fg33.02.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 11",
            },
            {
              src: "/images/fesgas12/fg33.03.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 12",
            },
            {
              src: "/images/fesgas12/fg33.04.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 13",
            },
            {
              src: "/images/fesgas12/fg33.05.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 14",
            },
            {
              src: "/images/fesgas12/fg33.06.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 15",
            },
            {
              src: "/images/fesgas12/fg33.07.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 16",
            },
            {
              src: "/images/fesgas12/fg33.08.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 17",
            },
            {
              src: "/images/fesgas12/fg33.09.jpg",
              width: 300,
              height: 364,
              alt: "How to See the Fair brochure panel 18",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas12/fg34.01.jpg",
              width: 300,
              height: 313,
              alt: "How to See the Fair brochure panel 19",
            },
            {
              src: "/images/fesgas12/fg34.02.jpg",
              width: 301,
              height: 313,
              alt: "How to See the Fair brochure panel 20",
            },
            {
              src: "/images/fesgas12/fg34.03.jpg",
              width: 300,
              height: 313,
              alt: "How to See the Fair brochure panel 21",
            },
            {
              src: "/images/fesgas12/fg34.04.jpg",
              width: 300,
              height: 313,
              alt: "How to See the Fair brochure panel 22",
            },
            {
              src: "/images/fesgas12/fg34.05.jpg",
              width: 301,
              height: 313,
              alt: "How to See the Fair brochure panel 23",
            },
            {
              src: "/images/fesgas12/fg34.06.jpg",
              width: 300,
              height: 313,
              alt: "How to See the Fair brochure panel 24",
            },
            {
              src: "/images/fesgas12/fg34.07.jpg",
              width: 300,
              height: 313,
              alt: "How to See the Fair brochure panel 25",
            },
            {
              src: "/images/fesgas12/fg34.08.jpg",
              width: 301,
              height: 313,
              alt: "How to See the Fair brochure panel 26",
            },
            {
              src: "/images/fesgas12/fg34.09.jpg",
              width: 300,
              height: 313,
              alt: "How to See the Fair brochure panel 27",
            },
          ],
          sources: [
            <>
              SOURCE: Brochure: <em>How to See the Fair</em>
            </>,
          ],
        },
      ]}
    />
  );
}
