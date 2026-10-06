import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Formica — nywf64.com",
  description:
    "Formica World's Fair House advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Formica advertising page — “advertising” standard.
 * Body from legacy formica03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Formica03Page() {
  return (
    <AdvertisingPage
      heroLabel="Formica"
      titleId="formica03-title"
      hero={{
        src: "/images/formicaoverview/hero-banner.jpg",
        alt: "Formica at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FormicaNavChrome />}
      previousHref="/formica02"
      overviewHref="/formicaoverview"
      nextHref="/formica04"
      featureDivider
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/formica03/formica72.01.jpg",
              width: 300,
              height: 326,
              alt: "Formica advertisement panel 1",
            },
            {
              src: "/images/formica03/formica72.02.jpg",
              width: 300,
              height: 326,
              alt: "Formica advertisement panel 2",
            },
            {
              src: "/images/formica03/formica72.03.jpg",
              width: 300,
              height: 326,
              alt: "Formica advertisement panel 3",
            },
            {
              src: "/images/formica03/formica72.04.jpg",
              width: 300,
              height: 326,
              alt: "Formica advertisement panel 4",
            },
            {
              src: "/images/formica03/formica72.05.jpg",
              width: 300,
              height: 326,
              alt: "Formica advertisement panel 5",
            },
            {
              src: "/images/formica03/formica72.06.jpg",
              width: 300,
              height: 326,
              alt: "Formica advertisement panel 6",
            },
          ],
          sources: [
            <>
              Source: Advertisement{" "}
              <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>,
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/formica03/formica73.01.jpg",
              width: 301,
              height: 322,
              alt: "Formica advertisement panel 7",
            },
            {
              src: "/images/formica03/formica73.02.jpg",
              width: 300,
              height: 322,
              alt: "Formica advertisement panel 8",
            },
            {
              src: "/images/formica03/formica73.03.jpg",
              width: 301,
              height: 321,
              alt: "Formica advertisement panel 9",
            },
            {
              src: "/images/formica03/formica73.04.jpg",
              width: 300,
              height: 321,
              alt: "Formica advertisement panel 10",
            },
            {
              src: "/images/formica03/formica73.05.jpg",
              width: 301,
              height: 321,
              alt: "Formica advertisement panel 11",
            },
            {
              src: "/images/formica03/formica73.06.jpg",
              width: 300,
              height: 321,
              alt: "Formica advertisement panel 12",
            },
          ],
          sources: [
            <>
              Source: Advertisement{" "}
              <em>1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>,
          ],
        },
      ]}
    />
  );
}
