import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Caribbean — nywf64.com",
  description:
    "Caribbean Pavilion advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Caribbean Pavilion advertising page — “advertising” standard.
 * Body from legacy caribb04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Caribb04Page() {
  return (
    <AdvertisingPage
      heroLabel="Caribbean"
      titleId="caribb04-title"
      hero={{
        src: "/images/caribboverview/hero-banner.jpg",
        alt: "Caribbean Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CaribbNavChrome />}
      previousHref="/caribb03"
      overviewHref="/caribboverview"
      nextHref="/caribb05"
      columns={1}
      tiles={[
        {
          src: "/images/caribb04/carrib03.1.jpg",
          width: 300,
          height: 311,
          alt: "Caribbean Pavilion advertisement panel 1",
        },
        {
          src: "/images/caribb04/carrib03.2.jpg",
          width: 300,
          height: 310,
          alt: "Caribbean Pavilion advertisement panel 2",
        },
        {
          src: "/images/caribb04/carrib03.3.jpg",
          width: 300,
          height: 310,
          alt: "Caribbean Pavilion advertisement panel 3",
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
