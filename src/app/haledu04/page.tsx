import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Hall of Education — nywf64.com",
  description:
    "Hall of Education pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education advertising page — “advertising” standard.
 * Body from legacy haledu04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Haledu04Page() {
  return (
    <AdvertisingPage
      heroLabel="Hall of Education"
      titleId="haledu04-title"
      hero={{
        src: "/images/haleduoverview/hero-banner.jpg",
        alt: "Hall of Education at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HaleduNavChrome />}
      previousHref="/haledu03"
      overviewHref="/haleduoverview"
      nextHref="/haledu05"
      columns={3}
      tiles={[
        {
          src: "/images/haledu04/democr04.1.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 1",
        },
        {
          src: "/images/haledu04/democr04.2.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 2",
        },
        {
          src: "/images/haledu04/democr04.3.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 3",
        },
        {
          src: "/images/haledu04/democr04.4.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 4",
        },
        {
          src: "/images/haledu04/democr04.5.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 5",
        },
        {
          src: "/images/haledu04/democr04.6.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 6",
        },
        {
          src: "/images/haledu04/democr04.7.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 7",
        },
        {
          src: "/images/haledu04/democr04.8.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 8",
        },
        {
          src: "/images/haledu04/democr04.9.jpg",
          width: 300,
          height: 246,
          alt: "Hall of Education advertisement panel 9",
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
