import type { Metadata } from "next";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Vatican — nywf64.com",
  description:
    "Vatican Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Vatican Information Manual page — “manual” standard.
 * Body from legacy vatican02.html. Layout: InformationManualPage (/bell02).
 */
export default function Vatican02Page() {
  return (
    <InformationManualPage
      heroLabel="Vatican Pavilion"
      titleId="vatican02-title"
      hero={{
        src: "/images/vaticanoverview/hero-banner.jpg",
        alt: "Vatican Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<VaticanNavChrome />}
      previousHref="/vatican01"
      overviewHref="/vaticanoverview"
      nextHref="/vatican03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Vatican Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Clifford W. Golden",
            "Archdiocesan Building Commission",
            "451 Madison Avenue",
            "New York 22, New York",
            "PL 9-1400",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 19, 1962"],
        },
        {
          label: 'DESIGNER-"PIETA" EXHIBIT',
          lines: ["Jo Meilziner"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Stewart - Muller"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 34; Lot 1", "International Area"],
        },
        {
          label: "AREA",
          lines: ["52,778 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "York and Sawyer",
            "Kiff, Colean, Voss & Souder",
            "230 Park Avenue",
            "New York 17, New York",
            "MU 3-5700",
            "and",
            "Hurley and Hughes",
            "1860 Broadway",
            "New York 23, New York",
            "CI 5-3620",
            "and",
            "Luders and Associates",
            "18 Main Street",
            "Irvinton-on-the-Hudson, N. Y.",
            "914 LY 1-8770",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/vatican02/vat35.jpg",
        width: 600,
        height: 344,
        alt: "Vatican Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              His Holiness, Pope John XXIII spoke from the Vatican via
              transatlantic cable at 3:00 A.M. (EST), Wednesday, October 31,
              1962, to Mr. Moses and other Fair officials as well as dignitaries
              of the Roman Catholic Church here in the United States, and the
              construction workers at the site of the Vatican Pavilion. By doing
              so, he gave the signal to start pile driving operations for the
              Holy See exhibit at the New York World&apos;s Fair.
            </>
          ),
        },
        {
          body: (
            <>
              The Vatican Pavilion, surmounted by a lantern and a cross, will
              feature:
              <br />
              <br />
              The &quot;Pieta&quot; by Michelangelo;
              <br />
              A Gallery of Michelangelo&apos;s works as an artist;
              <br />
              A statue of &quot;The Good Shepherd&quot;, an early Christian
              sculpture from the Catacombs;
              <br />
              An exhibit of one-quarter life size color transparencies of the
              Sistine Chapel;
              <br />A collection of Vatican coins.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibit area and the &quot;Pieta&quot; will be approached
              through an entrance sitated on the south side of the oval-shaped
              pavilion. Here will be a courtyard flanked by a winged wall 103
              ft. in length and 60 ft. in height.
            </>
          ),
        },
        {
          body: (
            <>
              A chapel, adaptable for multi-purpose use with a capacity for 350
              people, will be located in the mezzanine, and will exhibit the
              statue of &quot;The Good Shepherd&quot;.
            </>
          ),
        },
        {
          body: (
            <>
              Also located on the mezzanine will be a large exhibit rotunda.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/vatican02/vat34.jpg",
        width: 600,
        height: 348,
        alt: "Vatican Pavilion",
        bordered: true,
        title: "Vatican Pavilion",
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
