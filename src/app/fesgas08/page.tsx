import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Wonderful World Magazine — Festival of Gas — nywf64.com",
  description:
    "Wonderful World Magazine pages from the Festival of Gas pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — Wonderful World Magazine image collages.
 * Body from legacy fesgas08.html (three 3×4 magazine-page collages; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Fesgas08Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas08-title"
      title="Wonderful World Magazine"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas07"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas09"
      collages={[
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas08/fg10.01.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 1",
            },
            {
              src: "/images/fesgas08/fg10.02.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 2",
            },
            {
              src: "/images/fesgas08/fg10.03.jpg",
              width: 300,
              height: 348,
              alt: "Wonderful World Magazine panel 3",
            },
            {
              src: "/images/fesgas08/fg10.04.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 4",
            },
            {
              src: "/images/fesgas08/fg10.05.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 5",
            },
            {
              src: "/images/fesgas08/fg10.06.jpg",
              width: 300,
              height: 348,
              alt: "Wonderful World Magazine panel 6",
            },
            {
              src: "/images/fesgas08/fg10.07.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 7",
            },
            {
              src: "/images/fesgas08/fg10.08.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 8",
            },
            {
              src: "/images/fesgas08/fg10.09.jpg",
              width: 300,
              height: 348,
              alt: "Wonderful World Magazine panel 9",
            },
            {
              src: "/images/fesgas08/fg10.10.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 10",
            },
            {
              src: "/images/fesgas08/fg10.11.jpg",
              width: 301,
              height: 348,
              alt: "Wonderful World Magazine panel 11",
            },
            {
              src: "/images/fesgas08/fg10.12.jpg",
              width: 300,
              height: 348,
              alt: "Wonderful World Magazine panel 12",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas08/fg09.01.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 13",
            },
            {
              src: "/images/fesgas08/fg09.02.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 14",
            },
            {
              src: "/images/fesgas08/fg09.03.jpg",
              width: 300,
              height: 318,
              alt: "Wonderful World Magazine panel 15",
            },
            {
              src: "/images/fesgas08/fg09.04.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 16",
            },
            {
              src: "/images/fesgas08/fg09.05.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 17",
            },
            {
              src: "/images/fesgas08/fg09.06.jpg",
              width: 300,
              height: 318,
              alt: "Wonderful World Magazine panel 18",
            },
            {
              src: "/images/fesgas08/fg09.07.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 19",
            },
            {
              src: "/images/fesgas08/fg09.08.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 20",
            },
            {
              src: "/images/fesgas08/fg09.09.jpg",
              width: 300,
              height: 318,
              alt: "Wonderful World Magazine panel 21",
            },
            {
              src: "/images/fesgas08/fg09.10.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 22",
            },
            {
              src: "/images/fesgas08/fg09.11.jpg",
              width: 301,
              height: 318,
              alt: "Wonderful World Magazine panel 23",
            },
            {
              src: "/images/fesgas08/fg09.12.jpg",
              width: 300,
              height: 318,
              alt: "Wonderful World Magazine panel 24",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas08/fg11.01.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 25",
            },
            {
              src: "/images/fesgas08/fg11.02.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 26",
            },
            {
              src: "/images/fesgas08/fg11.03.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 27",
            },
            {
              src: "/images/fesgas08/fg11.04.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 28",
            },
            {
              src: "/images/fesgas08/fg11.05.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 29",
            },
            {
              src: "/images/fesgas08/fg11.06.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 30",
            },
            {
              src: "/images/fesgas08/fg11.07.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 31",
            },
            {
              src: "/images/fesgas08/fg11.08.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 32",
            },
            {
              src: "/images/fesgas08/fg11.09.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 33",
            },
            {
              src: "/images/fesgas08/fg11.10.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 34",
            },
            {
              src: "/images/fesgas08/fg11.11.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 35",
            },
            {
              src: "/images/fesgas08/fg11.12.jpg",
              width: 300,
              height: 311,
              alt: "Wonderful World Magazine panel 36",
            },
          ],
        },
      ]}
    />
  );
}
