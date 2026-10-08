import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — West Virginia — nywf64.com",
  description:
    "West Virginia Pavilion groundbreaking pamphlet pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

function pamphletTiles(prefix: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const n = i + 1;
    return {
      src: `/images/wesvir04/wesvir${prefix}.${n}.jpg`,
      width: 300,
      height: 300,
      alt: `West Virginia Groundbreaking pamphlet panel ${prefix}.${n}`,
    };
  });
}

/**
 * West Virginia groundbreaking pamphlet — image collages from legacy wesvir04.html.
 * Each bordered spread is a 3×2 tile grid (900px legacy tables).
 * Layout: AdvertisingPage with custom title (no PDF on legacy).
 */
export default function Wesvir04Page() {
  return (
    <AdvertisingPage
      heroLabel="West Virginia"
      titleId="wesvir04-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/wesviroverview/hero-banner.jpg",
        alt: "West Virginia pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WesvirNavChrome />}
      previousHref="/wesvir03"
      overviewHref="/wesviroverview"
      nextHref="/wesvir05"
      columns={3}
      collages={[
        { columns: 3, tiles: pamphletTiles(31) },
        { columns: 3, tiles: pamphletTiles(32) },
        { columns: 3, tiles: pamphletTiles(33) },
        { columns: 3, tiles: pamphletTiles(34) },
        { columns: 3, tiles: pamphletTiles(35) },
        { columns: 3, tiles: pamphletTiles(36) },
        { columns: 3, tiles: pamphletTiles(37) },
        { columns: 3, tiles: pamphletTiles(38) },
      ]}
    />
  );
}
