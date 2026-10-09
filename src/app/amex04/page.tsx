import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { AmexNavChrome } from "@/components/AmexNavChrome";

export const metadata: Metadata = {
  title: "Advertising — American Express — nywf64.com",
  description:
    "American Express pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express advertising page — “advertising” standard.
 * Body from legacy amex04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Amex04Page() {
  return (
    <AdvertisingPage
      heroLabel="American Express"
      titleId="amex04-title"
      hero={{
        src: "/images/amexoverview/hero-banner.jpg",
        alt: "American Express at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<AmexNavChrome />}
      previousHref="/amex03"
      overviewHref="/amex01"
      nextHref="/amex05"
      columns={2}
      tiles={[
        {
          src: "/images/amex04/amex36.1.jpg",
          width: 300,
          height: 331,
          alt: "American Express advertisement panel 1",
        },
        {
          src: "/images/amex04/amex36.2.jpg",
          width: 300,
          height: 331,
          alt: "American Express advertisement panel 2",
        },
        {
          src: "/images/amex04/amex36.3.jpg",
          width: 300,
          height: 330,
          alt: "American Express advertisement panel 3",
        },
        {
          src: "/images/amex04/amex36.4.jpg",
          width: 300,
          height: 330,
          alt: "American Express advertisement panel 4",
        },
        {
          src: "/images/amex04/amex36.5.jpg",
          width: 300,
          height: 330,
          alt: "American Express advertisement panel 5",
        },
        {
          src: "/images/amex04/amex36.6.jpg",
          width: 300,
          height: 330,
          alt: "American Express advertisement panel 6",
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
