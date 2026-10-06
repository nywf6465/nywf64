import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Demonstration Center — nywf64.com",
  description:
    "Demonstration Center advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center advertising page — “advertising” standard.
 * Body from legacy democr03.html (3×3 ad collage). Layout: AdvertisingPage.
 */
export default function Democr03Page() {
  return (
    <AdvertisingPage
      heroLabel="Demonstration Center"
      titleId="democr03-title"
      hero={{
        src: "/images/democroverview/hero-banner.jpg",
        alt: "Demonstration Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<DemocrNavChrome />}
      previousHref="/democr02"
      overviewHref="/democroverview"
      nextHref="/democr04"
      columns={3}
      tiles={[
        {
          src: "/images/democr/democr04.1.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 1",
        },
        {
          src: "/images/democr/democr04.2.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 2",
        },
        {
          src: "/images/democr/democr04.3.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 3",
        },
        {
          src: "/images/democr/democr04.4.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 4",
        },
        {
          src: "/images/democr/democr04.5.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 5",
        },
        {
          src: "/images/democr/democr04.6.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 6",
        },
        {
          src: "/images/democr/democr04.7.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 7",
        },
        {
          src: "/images/democr/democr04.8.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 8",
        },
        {
          src: "/images/democr/democr04.9.jpg",
          width: 300,
          height: 246,
          alt: "Demonstration Center advertisement panel 9",
        },
      ]}
      sources={[
        <>
          Source: Advertisement{" "}
          <em>
            1964 & 1965 Official Guide, 1964-1965 New York World&apos;s Fair
          </em>
        </>,
      ]}
    />
  );
}
