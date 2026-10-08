import type { Metadata } from "next";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Switzerland — nywf64.com",
  description:
    "Switzerland Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland Information Manual page — “manual” standard.
 * Body from legacy switz02.html. Layout: InformationManualPage (/bell02).
 */
export default function Switz02Page() {
  return (
    <InformationManualPage
      heroLabel="Switzerland"
      titleId="switz02-title"
      hero={{
        src: "/images/switzoverview/hero-banner.jpg",
        alt: "Switzerland pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwitzNavChrome />}
      previousHref="/switz01"
      overviewHref="/switzoverview"
      nextHref="/switz03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Swiss Exhibits, Inc."],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Marcel R. Duriaux, President",
            "Swiss Exhibits, Incorporated",
            '"Les Pierrettes"',
            "Monts de Corsier sur Vevey",
            "Switzerland",
            "and",
            "Frederick Pagnani, Esquire",
            "Swiss Exhibits, Incorporated",
            "99 Wall Street",
            "New York 5, New York",
            "BO 9-4345",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 21, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Bock 33; Lot 27", "International Area"],
        },
        {
          label: "AREA",
          lines: ["15,000 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. John O'Brien, Jr.",
            "215 East 37th Street",
            "New York 16, New York",
            "TN 7-0997",
            "and",
            "Guex, Kirchoff & De Freundenriech",
            "Geneva, Switzerland",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["William L. Crow Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/switz02/swiss04.jpg",
        width: 600,
        height: 338,
        alt: "Swiss Pavilion artist's rendering",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Swiss Pavilion, sponsored by representatives of
              Switzerland&apos;s private industry, will include a Chalet
              Restaurant, a Watch Pavilion, and a Swiss Boutique. The latest
              models in watches, clocks and other jewels will be displayed in the
              Watch Pavilion, while masters of culinary art will prepare Swiss
              specialties - including cheese fondue and raciette - in the
              restaurant. In addition, renowned wines imported from regions of
              Valais and Vaud will be availalbe in America for the first time.
            </>
          ),
        },
        {
          body: (
            <>
              The Swiss Watch Industry will also prvide the official time of the
              New York World&apos;s Fair. Huge electronic clocks will appear at
              the Fair entrances and other selected sites. They will be centrally
              controlled by the latest scientific disovery - an Atomic Clock -
              located in the Swiss Pavilion.
            </>
          ),
        },
        {
          body: (
            <>
              Visitors will have an opportunity to enjoy chocolates, cheese and
              other products which have been identified universally with
              Switzerland. They will also find, in the Swiss Boutique, music
              boxes, cuckoo clocks, woodcarvings and other typical souvenirs from
              the land of William Tell and Heidi.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/switz02/swiss03.jpg",
        width: 600,
        height: 373,
        alt: "Swiss Pavilion",
        bordered: true,
        title: "Swiss Pavilion",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
