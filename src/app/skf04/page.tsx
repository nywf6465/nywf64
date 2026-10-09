import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { SkfNavChrome } from "@/components/SkfNavChrome";

export const metadata: Metadata = {
  title: "Advertising — SKF — nywf64.com",
  description:
    "SKF pavilion advertisement from the Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF advertising page — “advertising” standard.
 * Body from legacy skf04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Skf04Page() {
  return (
    <AdvertisingPage
      heroLabel="SKF"
      titleId="skf04-title"
      hero={{
        src: "/images/skfoverview/hero-banner.jpg",
        alt: "SKF pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SkfNavChrome />}
      previousHref="/skf03"
      overviewHref="/skfoverview"
      nextHref="/skf05"
      columns={2}
      sources={[
        "Source: Advertisement 1964 & 1965 Official Guide, 1964-1965 New York World's Fair",
      ]}
      tiles={[
        {
          src: "/images/skf04/skf34.1.jpg",
          width: 300,
          height: 331,
          alt: "SKF advertisement panel 1",
        },
        {
          src: "/images/skf04/skf34.2.jpg",
          width: 300,
          height: 331,
          alt: "SKF advertisement panel 2",
        },
        {
          src: "/images/skf04/skf34.3.jpg",
          width: 300,
          height: 330,
          alt: "SKF advertisement panel 3",
        },
        {
          src: "/images/skf04/skf34.4.jpg",
          width: 300,
          height: 330,
          alt: "SKF advertisement panel 4",
        },
        {
          src: "/images/skf04/skf34.5.jpg",
          width: 300,
          height: 330,
          alt: "SKF advertisement panel 5",
        },
        {
          src: "/images/skf04/skf34.6.jpg",
          width: 300,
          height: 330,
          alt: "SKF advertisement panel 6",
        },
      ]}
    />
  );
}
