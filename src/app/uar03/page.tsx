import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { UarNavChrome } from "@/components/UarNavChrome";

export const metadata: Metadata = {
  title: "Advertising — United Arab Republic — nywf64.com",
  description:
    "United Arab Republic pavilion advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Arab Republic advertising page — “advertising” standard.
 * Body from legacy uar03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Uar03Page() {
  return (
    <AdvertisingPage
      heroLabel="United Arab Republic"
      titleId="uar03-title"
      hero={{
        src: "/images/uaroverview/hero-banner.jpg",
        alt: "United Arab Republic pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UarNavChrome />}
      previousHref="/uar02"
      overviewHref="/uaroverview"
      nextHref="/uar04"
      columns={2}
      tiles={[
        {
          src: "/images/uar03/uar02.1.jpg",
          width: 300,
          height: 331,
          alt: "United Arab Republic advertisement panel 1",
        },
        {
          src: "/images/uar03/uar02.2.jpg",
          width: 300,
          height: 331,
          alt: "United Arab Republic advertisement panel 2",
        },
        {
          src: "/images/uar03/uar02.3.jpg",
          width: 300,
          height: 330,
          alt: "United Arab Republic advertisement panel 3",
        },
        {
          src: "/images/uar03/uar02.4.jpg",
          width: 300,
          height: 330,
          alt: "United Arab Republic advertisement panel 4",
        },
        {
          src: "/images/uar03/uar02.5.jpg",
          width: 300,
          height: 330,
          alt: "United Arab Republic advertisement panel 5",
        },
        {
          src: "/images/uar03/uar02.6.jpg",
          width: 300,
          height: 330,
          alt: "United Arab Republic advertisement panel 6",
        },
      ]}
      sources={[
        <>
          Source: Advertisement{" "}
          <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
        </>,
      ]}
    />
  );
}
