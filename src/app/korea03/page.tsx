import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Korea, Republic of — nywf64.com",
  description:
    "Korea, Republic of pavilion advertisements from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Korea advertising page — “advertising” standard.
 * Body from legacy korea03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Korea03Page() {
  return (
    <AdvertisingPage
      heroLabel="Korea, Republic of"
      titleId="korea03-title"
      hero={{
        src: "/images/koreaoverview/hero-banner.jpg",
        alt: "Korea, Republic of pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<KoreaNavChrome />}
      previousHref="/korea02"
      overviewHref="/koreaoverview"
      nextHref="/korea04"
      columns={2}
      tiles={[
        {
          src: "/images/korea03/korea04.1.jpg",
          width: 300,
          height: 250,
          alt: "Republic of Korea advertisement panel 1",
        },
        {
          src: "/images/korea03/korea04.2.jpg",
          width: 300,
          height: 250,
          alt: "Republic of Korea advertisement panel 2",
        },
        {
          src: "/images/korea03/korea04.3.jpg",
          width: 300,
          height: 250,
          alt: "Republic of Korea advertisement panel 3",
        },
        {
          src: "/images/korea03/korea04.4.jpg",
          width: 300,
          height: 250,
          alt: "Republic of Korea advertisement panel 4",
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
