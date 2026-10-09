import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { HougtNavChrome } from "@/components/HougtNavChrome";

export const metadata: Metadata = {
  title: "Advertising — House of Good Taste — nywf64.com",
  description:
    "House of Good Taste pavilion advertisements — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougt04.html. Layout: AdvertisingPage (/amex04). */
export default function Hougt04Page() {
  return (
    <AdvertisingPage
      heroLabel="House of Good Taste"
      titleId="hougt04-title"
      hero={{
        src: "/images/hougtoverview/hero-banner.jpg",
        alt: "House of Good Taste at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HougtNavChrome />}
      previousHref="/hougt03"
      overviewHref="/hougtoverview"
      nextHref="/hougt05"
      collages={[
        {
          tiles: [
            {
              src: "/images/hougt04/hougt39.jpg",
              width: 600,
              height: 828,
              alt: "ALTEC Advertisement",
            },
          ],
          sources: [
            <>
              Source:{" "}
              <a href="http://www.adflip.com/%20" target="_blank" rel="noreferrer">
                http://www.adflip.com/
              </a>
              (used with permission)
            </>,
          ],
        },
        {
          tiles: [
            {
              src: "/images/hougt04/hougt40.jpg",
              width: 600,
              height: 774,
              alt: "Hammond Organ Advertisement",
            },
          ],
          sources: [
            <>
              Source: <em>Holiday Magazine</em>, July 1964
            </>,
          ],
        },
        {
          tiles: [
            {
              src: "/images/hougt04/hougt41.jpg",
              width: 600,
              height: 802,
              alt: "Portland Cement Advertisement",
            },
          ],
          sources: [
            <>
              Source: <em>Better Homes &amp; Gardens</em>, August, 1964
            </>,
          ],
        },
      ]}
    />
  );
}
