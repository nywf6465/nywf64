import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Tempting New Recipes from the Theater of Food — Festival of Gas — nywf64.com",
  description:
    "Tempting New Recipes from the Theater of Food brochure pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — Tempting New Recipes brochure collages.
 * Body from legacy fesgas13.html (three 2×2 + one 2×6 brochure-page collages and feature photo; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 * fg38 tile order matches legacy HTML (…09, 11, 10, 12).
 */
export default function Fesgas13Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas13-title"
      title="Brochure: Tempting New Recipes from the Theater of Food"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas12"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas14"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/fesgas13/fg35.01.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 1",
            },
            {
              src: "/images/fesgas13/fg35.02.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 2",
            },
            {
              src: "/images/fesgas13/fg35.03.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 3",
            },
            {
              src: "/images/fesgas13/fg35.04.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 4",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/fesgas13/fg36.01.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 5",
            },
            {
              src: "/images/fesgas13/fg36.02.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 6",
            },
            {
              src: "/images/fesgas13/fg36.03.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 7",
            },
            {
              src: "/images/fesgas13/fg36.04.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 8",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/fesgas13/fg37.01.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 9",
            },
            {
              src: "/images/fesgas13/fg37.02.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 10",
            },
            {
              src: "/images/fesgas13/fg37.03.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 11",
            },
            {
              src: "/images/fesgas13/fg37.04.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 12",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/fesgas13/fg38.01.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 13",
            },
            {
              src: "/images/fesgas13/fg38.02.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 14",
            },
            {
              src: "/images/fesgas13/fg38.03.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 15",
            },
            {
              src: "/images/fesgas13/fg38.04.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 16",
            },
            {
              src: "/images/fesgas13/fg38.05.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 17",
            },
            {
              src: "/images/fesgas13/fg38.06.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 18",
            },
            {
              src: "/images/fesgas13/fg38.07.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 19",
            },
            {
              src: "/images/fesgas13/fg38.08.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 20",
            },
            {
              src: "/images/fesgas13/fg38.09.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 21",
            },
            {
              src: "/images/fesgas13/fg38.11.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 22",
            },
            {
              src: "/images/fesgas13/fg38.10.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 23",
            },
            {
              src: "/images/fesgas13/fg38.12.jpg",
              width: 225,
              height: 123,
              alt: "Tempting New Recipes brochure panel 24",
            },
          ],
          sources: [
            <>
              SOURCE: Brochure:{" "}
              <em>Tempting New Recipes from the Theater of Food</em>
            </>,
          ],
        },
      ]}
      featureDivider
      feature={{
        image: {
          src: "/images/fesgas13/fesgas48.jpg",
          width: 300,
          height: 201,
          alt: "Festival of Gas Theater of Food",
        },
      }}
    />
  );
}
