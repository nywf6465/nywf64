import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Westinghouse — nywf64.com",
  description:
    "Westinghouse pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse advertising page.
 * Body from legacy weshou04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Weshou04Page() {
  return (
    <AdvertisingPage
      heroLabel="Westinghouse"
      titleId="weshou04-title"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou03"
      overviewHref="/weshouoverview"
      nextHref="/weshou05"
      columns={2}
      tiles={[
        {
          src: "/images/weshou04/weshou47.1.jpg",
          width: 300,
          height: 330,
          alt: "Westinghouse advertisement panel 1",
        },
        {
          src: "/images/weshou04/weshou47.2.jpg",
          width: 300,
          height: 330,
          alt: "Westinghouse advertisement panel 2",
        },
        {
          src: "/images/weshou04/weshou47.3.jpg",
          width: 300,
          height: 330,
          alt: "Westinghouse advertisement panel 3",
        },
        {
          src: "/images/weshou04/weshou47.4.jpg",
          width: 300,
          height: 330,
          alt: "Westinghouse advertisement panel 4",
        },
        {
          src: "/images/weshou04/weshou47.5.jpg",
          width: 300,
          height: 330,
          alt: "Westinghouse advertisement panel 5",
        },
        {
          src: "/images/weshou04/weshou47.6.jpg",
          width: 300,
          height: 330,
          alt: "Westinghouse advertisement panel 6",
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
