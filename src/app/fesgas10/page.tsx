import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Brochure: See the Festival of Gas First at the New York World's Fair — Festival of Gas — nywf64.com",
  description:
    "See the Festival of Gas First brochure pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — See the Festival of Gas First brochure collages.
 * Body from legacy fesgas10.html (1×3 + two 3×3 brochure-page collages; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Fesgas10Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas10-title"
      title="Brochure: See the Festival of Gas First at the New York World&apos;s Fair"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas09"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas11"
      collages={[
        {
          columns: 1,
          tiles: [
            {
              src: "/images/fesgas10/fg25.01.jpg",
              width: 250,
              height: 278,
              alt: "See the Festival of Gas First brochure panel 1",
            },
            {
              src: "/images/fesgas10/fg25.02.jpg",
              width: 250,
              height: 277,
              alt: "See the Festival of Gas First brochure panel 2",
            },
            {
              src: "/images/fesgas10/fg25.03.jpg",
              width: 250,
              height: 277,
              alt: "See the Festival of Gas First brochure panel 3",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas10/fg26.01.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 4",
            },
            {
              src: "/images/fesgas10/fg26.02.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 5",
            },
            {
              src: "/images/fesgas10/fg26.03.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 6",
            },
            {
              src: "/images/fesgas10/fg26.04.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 7",
            },
            {
              src: "/images/fesgas10/fg26.05.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 8",
            },
            {
              src: "/images/fesgas10/fg26.06.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 9",
            },
            {
              src: "/images/fesgas10/fg26.07.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 10",
            },
            {
              src: "/images/fesgas10/fg26.08.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 11",
            },
            {
              src: "/images/fesgas10/fg26.09.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 12",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas10/fg27.01.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 13",
            },
            {
              src: "/images/fesgas10/fg27.02.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 14",
            },
            {
              src: "/images/fesgas10/fg27.03.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 15",
            },
            {
              src: "/images/fesgas10/fg27.04.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 16",
            },
            {
              src: "/images/fesgas10/fg27.05.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 17",
            },
            {
              src: "/images/fesgas10/fg27.06.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 18",
            },
            {
              src: "/images/fesgas10/fg27.07.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 19",
            },
            {
              src: "/images/fesgas10/fg27.08.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 20",
            },
            {
              src: "/images/fesgas10/fg27.09.jpg",
              width: 300,
              height: 244,
              alt: "See the Festival of Gas First brochure panel 21",
            },
          ],
          sources: [
            <>
              Source: Brochure:{" "}
              <em>
                See the Festival of Gas First at the New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
    />
  );
}
