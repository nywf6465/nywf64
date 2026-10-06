import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Welcome to the Festival of Gas — Festival of Gas — nywf64.com",
  description:
    "Welcome to the Festival of Gas brochure pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — Welcome to the Festival of Gas brochure collages.
 * Body from legacy fesgas11.html (1×3, 3×4, and two 1×4 brochure-page collages; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Fesgas11Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas11-title"
      title="Brochure: Welcome to the Festival of Gas"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas10"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas12"
      collages={[
        {
          columns: 1,
          tiles: [
            {
              src: "/images/fesgas11/fg28.01.jpg",
              width: 350,
              height: 274,
              alt: "Welcome to the Festival of Gas brochure panel 1",
            },
            {
              src: "/images/fesgas11/fg28.02.jpg",
              width: 350,
              height: 274,
              alt: "Welcome to the Festival of Gas brochure panel 2",
            },
            {
              src: "/images/fesgas11/fg28.03.jpg",
              width: 350,
              height: 274,
              alt: "Welcome to the Festival of Gas brochure panel 3",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas11/fg29.01.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 4",
            },
            {
              src: "/images/fesgas11/fg29.02.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 5",
            },
            {
              src: "/images/fesgas11/fg29.03.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 6",
            },
            {
              src: "/images/fesgas11/fg29.04.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 7",
            },
            {
              src: "/images/fesgas11/fg29.05.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 8",
            },
            {
              src: "/images/fesgas11/fg29.06.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 9",
            },
            {
              src: "/images/fesgas11/fg29.07.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 10",
            },
            {
              src: "/images/fesgas11/fg29.08.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 11",
            },
            {
              src: "/images/fesgas11/fg29.09.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 12",
            },
            {
              src: "/images/fesgas11/fg29.10.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 13",
            },
            {
              src: "/images/fesgas11/fg29.11.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 14",
            },
            {
              src: "/images/fesgas11/fg29.12.jpg",
              width: 300,
              height: 173,
              alt: "Welcome to the Festival of Gas brochure panel 15",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/fesgas11/fg30.01.jpg",
              width: 350,
              height: 209,
              alt: "Welcome to the Festival of Gas brochure panel 16",
            },
            {
              src: "/images/fesgas11/fg30.02.jpg",
              width: 350,
              height: 210,
              alt: "Welcome to the Festival of Gas brochure panel 17",
            },
            {
              src: "/images/fesgas11/fg30.03.jpg",
              width: 350,
              height: 209,
              alt: "Welcome to the Festival of Gas brochure panel 18",
            },
            {
              src: "/images/fesgas11/fg30.04.jpg",
              width: 350,
              height: 209,
              alt: "Welcome to the Festival of Gas brochure panel 19",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/fesgas11/fg31.01.jpg",
              width: 350,
              height: 209,
              alt: "Welcome to the Festival of Gas brochure panel 20",
            },
            {
              src: "/images/fesgas11/fg31.02.jpg",
              width: 350,
              height: 210,
              alt: "Welcome to the Festival of Gas brochure panel 21",
            },
            {
              src: "/images/fesgas11/fg31.03.jpg",
              width: 350,
              height: 209,
              alt: "Welcome to the Festival of Gas brochure panel 22",
            },
            {
              src: "/images/fesgas11/fg31.04.jpg",
              width: 350,
              height: 209,
              alt: "Welcome to the Festival of Gas brochure panel 23",
            },
          ],
          sources: [
            <>
              SOURCE: Brochure: <em>Welcome to the Festival of Gas </em>
              (1965)
            </>,
          ],
        },
      ]}
    />
  );
}
