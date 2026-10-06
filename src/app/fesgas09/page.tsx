import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Article: Energy Vista — Festival of Gas — nywf64.com",
  description:
    "Energy Vista article pages from the Festival of Gas pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — Article: Energy Vista image collages.
 * Body from legacy fesgas09.html (four 3×4 article-page collages; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 * Source preserves legacy ENINEER typo.
 */
export default function Fesgas09Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas09-title"
      title="Article: Energy Vista"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas08"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas10"
      collages={[
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas09/fg05.01.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 1",
            },
            {
              src: "/images/fesgas09/fg05.02.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 2",
            },
            {
              src: "/images/fesgas09/fg05.03.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 3",
            },
            {
              src: "/images/fesgas09/fg05.04.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 4",
            },
            {
              src: "/images/fesgas09/fg05.05.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 5",
            },
            {
              src: "/images/fesgas09/fg05.06.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 6",
            },
            {
              src: "/images/fesgas09/fg05.07.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 7",
            },
            {
              src: "/images/fesgas09/fg05.08.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 8",
            },
            {
              src: "/images/fesgas09/fg05.09.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 9",
            },
            {
              src: "/images/fesgas09/fg05.10.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 10",
            },
            {
              src: "/images/fesgas09/fg05.11.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 11",
            },
            {
              src: "/images/fesgas09/fg05.12.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 12",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas09/fg06.01.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 13",
            },
            {
              src: "/images/fesgas09/fg06.02.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 14",
            },
            {
              src: "/images/fesgas09/fg06.03.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 15",
            },
            {
              src: "/images/fesgas09/fg06.04.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 16",
            },
            {
              src: "/images/fesgas09/fg06.05.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 17",
            },
            {
              src: "/images/fesgas09/fg06.06.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 18",
            },
            {
              src: "/images/fesgas09/fg06.07.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 19",
            },
            {
              src: "/images/fesgas09/fg06.08.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 20",
            },
            {
              src: "/images/fesgas09/fg06.09.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 21",
            },
            {
              src: "/images/fesgas09/fg06.10.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 22",
            },
            {
              src: "/images/fesgas09/fg06.11.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 23",
            },
            {
              src: "/images/fesgas09/fg06.12.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 24",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas09/fg07.01.jpg",
              width: 301,
              height: 274,
              alt: "Energy Vista panel 25",
            },
            {
              src: "/images/fesgas09/fg07.02.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 26",
            },
            {
              src: "/images/fesgas09/fg07.03.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 27",
            },
            {
              src: "/images/fesgas09/fg07.04.jpg",
              width: 301,
              height: 274,
              alt: "Energy Vista panel 28",
            },
            {
              src: "/images/fesgas09/fg07.05.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 29",
            },
            {
              src: "/images/fesgas09/fg07.06.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 30",
            },
            {
              src: "/images/fesgas09/fg07.07.jpg",
              width: 301,
              height: 274,
              alt: "Energy Vista panel 31",
            },
            {
              src: "/images/fesgas09/fg07.08.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 32",
            },
            {
              src: "/images/fesgas09/fg07.09.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 33",
            },
            {
              src: "/images/fesgas09/fg07.10.jpg",
              width: 301,
              height: 274,
              alt: "Energy Vista panel 34",
            },
            {
              src: "/images/fesgas09/fg07.11.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 35",
            },
            {
              src: "/images/fesgas09/fg07.12.jpg",
              width: 300,
              height: 274,
              alt: "Energy Vista panel 36",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas09/fg08.01.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 37",
            },
            {
              src: "/images/fesgas09/fg08.02.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 38",
            },
            {
              src: "/images/fesgas09/fg08.03.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 39",
            },
            {
              src: "/images/fesgas09/fg08.04.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 40",
            },
            {
              src: "/images/fesgas09/fg08.05.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 41",
            },
            {
              src: "/images/fesgas09/fg08.06.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 42",
            },
            {
              src: "/images/fesgas09/fg08.07.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 43",
            },
            {
              src: "/images/fesgas09/fg08.08.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 44",
            },
            {
              src: "/images/fesgas09/fg08.09.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 45",
            },
            {
              src: "/images/fesgas09/fg08.10.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 46",
            },
            {
              src: "/images/fesgas09/fg08.11.jpg",
              width: 301,
              height: 306,
              alt: "Energy Vista panel 47",
            },
            {
              src: "/images/fesgas09/fg08.12.jpg",
              width: 300,
              height: 306,
              alt: "Energy Vista panel 48",
            },
          ],
          sources: [
            <>
              Source: Brochure: <em>Energy Vista</em> - Reprinted from ACTUAL
              SPECIFYING ENINEER, Vol. 12, No. 2, 1964
            </>,
          ],
        },
      ]}
    />
  );
}
