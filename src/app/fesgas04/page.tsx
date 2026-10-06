import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Festival of Gas — nywf64.com",
  description:
    "Festival of Gas advertisements from the 1964 and 1965 Official Guides and national advertising — 1964/1965 New York World’s Fair on nywf64.com.",
};

function collageTiles(
  prefix: string,
  count: number,
  dims: { width: number; height: number }[],
) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const dim = dims[i] ?? dims[dims.length - 1];
    return {
      src: `/images/fesgas04/${prefix}.${n}.jpg`,
      width: dim.width,
      height: dim.height,
      alt: `Festival of Gas advertisement panel ${prefix}.${n}`,
    };
  });
}

const FG01_DIMS = [
  { width: 300, height: 262 },
  { width: 300, height: 262 },
  { width: 300, height: 262 },
  { width: 300, height: 261 },
  { width: 300, height: 261 },
  { width: 300, height: 261 },
  { width: 300, height: 261 },
  { width: 300, height: 261 },
  { width: 300, height: 261 },
];

const FG02_DIMS = [
  { width: 301, height: 234 },
  { width: 300, height: 234 },
  { width: 300, height: 234 },
  { width: 301, height: 235 },
  { width: 300, height: 235 },
  { width: 300, height: 235 },
  { width: 301, height: 234 },
  { width: 300, height: 234 },
  { width: 300, height: 234 },
];

const FG03_DIMS = [
  { width: 301, height: 276 },
  { width: 301, height: 276 },
  { width: 300, height: 276 },
  { width: 301, height: 276 },
  { width: 301, height: 276 },
  { width: 300, height: 276 },
  { width: 301, height: 276 },
  { width: 301, height: 276 },
  { width: 300, height: 276 },
  { width: 301, height: 276 },
  { width: 301, height: 276 },
  { width: 300, height: 276 },
];

const FG04_DIMS = FG03_DIMS;

/**
 * Festival of Gas advertising page.
 * Body from legacy fesgas04.html (split tiles). Layout: AdvertisingPage.
 * Order: fg01, fg03, fg04, fg02. columns=3.
 */
export default function Fesgas04Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas04-title"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas03"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas05"
      columns={3}
      collages={[
        {
          columns: 3,
          tiles: collageTiles("fg01", 9, FG01_DIMS),
          sources: [
            <>
              Source: Advertisement{" "}
              <em>
                1964 Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
        {
          columns: 3,
          tiles: collageTiles("fg03", 12, FG03_DIMS),
          sources: ["Source: National Advertising"],
        },
        {
          columns: 3,
          tiles: collageTiles("fg04", 12, FG04_DIMS),
          sources: ["Source: National Advertising"],
        },
        {
          columns: 3,
          tiles: collageTiles("fg02", 9, FG02_DIMS),
          sources: [
            <>
              Source: Advertisement{" "}
              <em>
                1965 Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
    />
  );
}
