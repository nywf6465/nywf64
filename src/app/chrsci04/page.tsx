import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Christian Science — nywf64.com",
  description:
    "Christian Science pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science advertising page — “advertising” standard.
 * Body from legacy chrsci04.html. Layout: AdvertisingPage (/amex04 / unisph04).
 */
export default function Chrsci04Page() {
  return (
    <AdvertisingPage
      heroLabel="Christian Science"
      titleId="chrsci04-title"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci03"
      overviewHref="/chrscioverview"
      nextHref="/chrsci05"
      collages={[
        {
          columns: 2,
          tiles: [1, 2, 3, 4, 5, 6].map((n) => ({
            src: `/images/chrsci04/chrsci04.${n}.jpg`,
            width: 300,
            height: n <= 2 ? 331 : 330,
            alt: `Christian Science 1964 advertisement panel ${n}`,
          })),
          sources: [
            <>
              Source: Advertisement 1964 Official Guide, 1964-1965 New York
              World&apos;s Fair
            </>,
          ],
        },
        {
          columns: 2,
          tiles: [1, 2, 3, 4, 5, 6].map((n) => ({
            src: `/images/chrsci04/chrsci05.${n}.jpg`,
            width: 300,
            height: 330,
            alt: `Christian Science 1965 advertisement panel ${n}`,
          })),
          sources: [
            <>
              Source: Advertisement 1965 Official Guide, 1964-1965 New York
              World&apos;s Fair
            </>,
          ],
        },
      ]}
    />
  );
}
