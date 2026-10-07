import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { EquitNavChrome } from "@/components/EquitNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Equitable Life — nywf64.com",
  description:
    "Equitable Life advertisements from the 1964 and 1965 Official Guides and a 1964 national advertisement — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life advertising page.
 * Body from legacy equit03.html (split tiles stitched into full ads).
 * Layout: AdvertisingPage (/unisph04 collage API).
 */
export default function Equit03Page() {
  return (
    <AdvertisingPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit03-title"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equit02"
      overviewHref="/equitoverview"
      nextHref="/equit04"
      collages={[
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit03/ad-1964-guide.jpg",
              width: 600,
              height: 994,
              alt: "Equitable Life advertisement from the 1964 Official Guide",
            },
          ],
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
          columns: 1,
          tiles: [
            {
              src: "/images/equit03/ad-1964-national.jpg",
              width: 900,
              height: 1162,
              alt: "Equitable Life national advertisement 1964",
            },
          ],
          sources: ["Source: National Advertisement 1964"],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit03/ad-1965-guide.jpg",
              width: 600,
              height: 994,
              alt: "Equitable Life advertisement from the 1965 Official Guide",
            },
          ],
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
