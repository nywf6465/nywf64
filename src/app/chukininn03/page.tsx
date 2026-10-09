import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ChukininnNavChrome } from "@/components/ChukininnNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Chukin Inn — nywf64.com",
  description:
    "Chun King Inn advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chukin Inn advertising page — “advertising” standard.
 * Body from legacy chukininn03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Chukininn03Page() {
  return (
    <AdvertisingPage
      heroLabel="Chukin Inn"
      titleId="chukininn03-title"
      hero={{
        src: "/images/chukininnoverview/hero-banner.jpg",
        alt: "Chukin Inn at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<ChukininnNavChrome />}
      previousHref="/chukininn02"
      overviewHref="/chukininnoverview"
      nextHref="/chukininn04"
      columns={2}
      tiles={[1, 2, 3, 4, 5, 6].map((n) => ({
        src: `/images/chukininn03/chukininn03.${n}.jpg`,
        width: 300,
        height: n <= 2 ? 331 : 330,
        alt: `Chun King Inn 1964 advertisement panel ${n}`,
      }))}
      sources={[
        <>
          Source: Advertisement 1964 Official Guide, 1964-1965 New York
          World&apos;s Fair
        </>,
      ]}
    />
  );
}
