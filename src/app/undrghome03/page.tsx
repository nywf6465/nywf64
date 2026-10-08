import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Underground World Home — nywf64.com",
  description:
    "Underground World Home advertisement from the 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home advertising page — stacked ad panels.
 * Body from legacy undrghome03.html. Layout: AdvertisingPage.
 */
export default function Undrghome03Page() {
  return (
    <AdvertisingPage
      heroLabel="Underground World Home"
      titleId="undrghome03-title"
      hero={{
        src: "/images/undrghomeoverview/hero-banner.jpg",
        alt: "Underground World Home at the 1964/1965 New York World’s Fair",
        width: 2073,
        height: 758,
      }}
      nav={<UndrghomeNavChrome />}
      previousHref="/undrghome02"
      overviewHref="/undrghomeoverview"
      nextHref="/undrghome04"
      columns={1}
      tiles={[
        {
          src: "/images/undrghome03/uwh25.1.jpg",
          width: 300,
          height: 311,
          alt: "Underground World Home advertisement panel 1",
        },
        {
          src: "/images/undrghome03/uwh25.2.jpg",
          width: 300,
          height: 312,
          alt: "Underground World Home advertisement panel 2",
        },
        {
          src: "/images/undrghome03/uwh25.3.jpg",
          width: 300,
          height: 311,
          alt: "Underground World Home advertisement panel 3",
        },
      ]}
      sources={[
        <>
          Source: Advertisement{" "}
          <em>
            1965 Official Guide, 1964-1965 New York World&apos;s Fair
          </em>
        </>,
      ]}
    />
  );
}
