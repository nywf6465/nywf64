import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";

export const metadata: Metadata = {
  title: "The Puppetry Journal — Chrysler — nywf64.com",
  description:
    "The Puppetry Journal coverage of Chrysler’s Show-Go-Round — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler — The Puppetry Journal.
 * Body from legacy chrysler12.html (image collage of journal pages).
 * Layout: AdvertisingPage with navy title override.
 * Last Chrysler topic: NEXT returns to /chrysleroverview.
 */
export default function Chrysler12Page() {
  return (
    <AdvertisingPage
      heroLabel="Chrysler"
      titleId="chrysler12-title"
      title="The Puppetry Journal"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler11"
      overviewHref="/chrysleroverview"
      nextHref="/chrysleroverview"
      collages={[
        {
          columns: 2,
          tiles: [1, 2, 3, 4].map((n) => ({
            src: `/images/chrysler12/chry02.0${n}.jpg`,
            width: 300,
            height: 330,
            alt: `The Puppetry Journal page ${n}`,
          })),
          sources: [
            "Source: The Puppetry Journal, Volume XVI, No. 1, July-August, 1964",
          ],
        },
        {
          columns: 2,
          tiles: [1, 2, 3, 4].map((n) => ({
            src: `/images/chrysler12/chry03.0${n}.jpg`,
            width: 300,
            height: 272,
            alt: `The Puppetry Journal page ${n + 4}`,
          })),
        },
      ]}
    />
  );
}
