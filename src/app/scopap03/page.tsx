import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Scott Paper — nywf64.com",
  description:
    "Scott Paper pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper advertising page — “advertising” standard.
 * Body from legacy scopap03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Scopap03Page() {
  return (
    <AdvertisingPage
      heroLabel="Scott Paper"
      titleId="scopap03-title"
      hero={{
        src: "/images/scopapoverview/hero-banner.jpg",
        alt: "Scott Paper at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ScopapNavChrome />}
      previousHref="/scopap02"
      overviewHref="/scopapoverview"
      nextHref="/scopap04"
      columns={2}
      tiles={[
        {
          src: "/images/scopap03/scott34.01.jpg",
          width: 300,
          height: 327,
          alt: "Scott Paper advertisement panel 1",
        },
        {
          src: "/images/scopap03/scott34.02.jpg",
          width: 300,
          height: 327,
          alt: "Scott Paper advertisement panel 2",
        },
        {
          src: "/images/scopap03/scott34.03.jpg",
          width: 300,
          height: 326,
          alt: "Scott Paper advertisement panel 3",
        },
        {
          src: "/images/scopap03/scott34.04.jpg",
          width: 300,
          height: 326,
          alt: "Scott Paper advertisement panel 4",
        },
        {
          src: "/images/scopap03/scott34.05.jpg",
          width: 300,
          height: 326,
          alt: "Scott Paper advertisement panel 5",
        },
        {
          src: "/images/scopap03/scott34.06.jpg",
          width: 300,
          height: 326,
          alt: "Scott Paper advertisement panel 6",
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
