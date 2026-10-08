import type { Metadata } from "next";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Sierra Leone — nywf64.com",
  description:
    "Sierra Leone pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sierra Leone Information Manual page — “manual” standard.
 * Body from legacy sierra02.html. Layout: InformationManualPage (/bell02).
 */
export default function Sierra02Page() {
  return (
    <InformationManualPage
      heroLabel="Sierra Leone"
      titleId="sierra02-title"
      hero={{
        src: "/images/sierraoverview/hero-banner.jpg",
        alt: "Sierra Leone pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SierraNavChrome />}
      previousHref="/sierra01"
      overviewHref="/sierraoverview"
      nextHref="/sierra03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Sierra Leone Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "The Honorable Claudius A. Gibrilla",
            "Consul General",
            "Consulate General of Sierra Leone",
            "30 East 42 Street",
            "New York 17, New York",
            "YU 6-8716",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Dr. George Bennett"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 15, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 32; Lot 12", "International Area"],
        },
        {
          label: "AREA",
          lines: ["11,496 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Jarrett-Yasky",
            "Freetown, Sierra Leone",
            "and",
            "Mr. Costas Machiouzarides",
            "36 West 84 Street",
            "New York 24, New York",
            "TR 7-1062",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["East Coast Industrial Building Corp."],
        },
      ]}
      primaryFigure={{
        src: "/images/sierra02/sierra04.jpg",
        width: 600,
        height: 359,
        alt: "Sierra Leone Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Sierra Leone Pavilion consists of an organic grouping of three
              conical shapes, reminiscent of the country&apos;s mountain peaks and
              roof shapes, and carries out the three-pyramid motif of the
              country&apos;s coat of arms.
            </>
          ),
        },
        {
          body: (
            <>
              Walls of colorful three-dimensional murals provide an appropriate
              background for exhibits reflecting the country&apos;s history and
              culture, and its socially and economically promising future.
            </>
          ),
        },
        {
          body: (
            <>
              The foreground cone partly covers an outdoor-indoor display plaza.
              The central cone houses an elevated stage for performances of
              native dances.
            </>
          ),
        },
      ]}
    />
  );
}
