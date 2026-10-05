import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Chrysler — nywf64.com",
  description:
    "Chrysler pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler advertising page — “advertising” standard.
 * Body from legacy chrysler04.html. Layout: AdvertisingPage (/amex04 / unisph04).
 */
export default function Chrysler04Page() {
  return (
    <AdvertisingPage
      heroLabel="Chrysler"
      titleId="chrysler04-title"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler03"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler05"
      collages={[
        {
          columns: 3,
          tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
            src: `/images/chrysler04/chry82.0${n}.jpg`,
            width: n === 2 || n === 5 || n === 8 ? 301 : 300,
            height: 233,
            alt: `Chrysler 1964 advertisement panel ${n}`,
          })),
          sources: [
            <>
              Source: Advertisement{" "}
              <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>,
          ],
        },
        {
          columns: 3,
          tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
            src: `/images/chrysler04/chry81.0${n}.jpg`,
            width: 300,
            height: n <= 3 ? 234 : 233,
            alt: `Chrysler 1965 advertisement panel ${n}`,
          })),
          sources: [
            <>
              Source: Advertisement{" "}
              <em>1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>,
          ],
        },
      ]}
    />
  );
}
