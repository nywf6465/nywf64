import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Billy Graham — nywf64.com",
  description:
    "Billy Graham Pavilion advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham advertising page — “advertising” standard.
 * Body from legacy bilgra04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Bilgra04Page() {
  return (
    <AdvertisingPage
      heroLabel="Billy Graham"
      titleId="bilgra04-title"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra03"
      overviewHref="/bilgraoverview"
      nextHref="/bilgra05"
      columns={2}
      tiles={[
        {
          src: "/images/bilgra04/bilgra61.1.jpg",
          width: 300,
          height: 251,
          alt: "Billy Graham Pavilion advertisement panel 1",
        },
        {
          src: "/images/bilgra04/bilgra61.2.jpg",
          width: 300,
          height: 251,
          alt: "Billy Graham Pavilion advertisement panel 2",
        },
        {
          src: "/images/bilgra04/bilgra61.3.jpg",
          width: 300,
          height: 250,
          alt: "Billy Graham Pavilion advertisement panel 3",
        },
        {
          src: "/images/bilgra04/bilgra61.4.jpg",
          width: 300,
          height: 250,
          alt: "Billy Graham Pavilion advertisement panel 4",
        },
      ]}
      sources={[
        <>
          Source: Advertisement{" "}
          <em>
            1964 Official Guide, 1964-1965 New York World&apos;s Fair
          </em>
        </>,
      ]}
    />
  );
}
