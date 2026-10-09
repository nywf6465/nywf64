import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";

export const metadata: Metadata = {
  title: "Advertising — India — nywf64.com",
  description:
    "India pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * India advertising page — “advertising” standard.
 * Body from legacy india04.html. Layout: AdvertisingPage (/amex04).
 */
export default function India04Page() {
  return (
    <AdvertisingPage
      heroLabel="India"
      titleId="india04-title"
      hero={{
        src: "/images/indiaoverview/hero-banner.jpg",
        alt: "India pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IndiaNavChrome />}
      previousHref="/india03"
      overviewHref="/indiaoverview"
      nextHref="/india05"
      columns={2}
      tiles={[
        {
          src: "/images/india04/india04.01.jpg",
          width: 300,
          height: 331,
          alt: "India advertisement panel 1",
        },
        {
          src: "/images/india04/india04.02.jpg",
          width: 300,
          height: 331,
          alt: "India advertisement panel 2",
        },
        {
          src: "/images/india04/india04.03.jpg",
          width: 300,
          height: 332,
          alt: "India advertisement panel 3",
        },
        {
          src: "/images/india04/india04.04.jpg",
          width: 300,
          height: 332,
          alt: "India advertisement panel 4",
        },
        {
          src: "/images/india04/india04.05.jpg",
          width: 300,
          height: 331,
          alt: "India advertisement panel 5",
        },
        {
          src: "/images/india04/india04.06.jpg",
          width: 300,
          height: 331,
          alt: "India advertisement panel 6",
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
