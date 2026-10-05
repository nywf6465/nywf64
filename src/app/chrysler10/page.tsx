import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";

export const metadata: Metadata = {
  title: "Dodge News Magazine — Chrysler — nywf64.com",
  description:
    "Dodge News Magazine coverage of Chrysler at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler — Dodge News Magazine.
 * Body from legacy chrysler10.html (image collage of magazine pages).
 * Layout: AdvertisingPage with navy title override.
 */
export default function Chrysler10Page() {
  return (
    <AdvertisingPage
      heroLabel="Chrysler"
      titleId="chrysler10-title"
      title="Dodge News Magazine"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler09"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler11"
      collages={[
        {
          columns: 3,
          tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
            const pad = n < 10 ? `0${n}` : `${n}`;
            return {
              src: `/images/chrysler10/chry04.${pad}.jpg`,
              width: n % 3 === 0 ? 300 : 301,
              height: n <= 3 || (n >= 7 && n <= 9) ? 296 : 295,
              alt: `Dodge News Magazine page ${n}`,
            };
          }),
          sources: [
            "SOURCE: Dodge News Magazine, Vo. 29, No. 5, May, 1964",
          ],
        },
        {
          columns: 3,
          tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
            const pad = n < 10 ? `0${n}` : `${n}`;
            return {
              src: `/images/chrysler10/chry05.${pad}.jpg`,
              width: n % 3 === 0 ? 300 : 301,
              height: n <= 3 || (n >= 7 && n <= 9) ? 296 : 295,
              alt: `Dodge News Magazine page ${n + 12}`,
            };
          }),
        },
      ]}
    />
  );
}
