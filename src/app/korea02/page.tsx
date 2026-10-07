import type { Metadata } from "next";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Korea, Republic of — nywf64.com",
  description:
    "Korea, Republic of pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Korea Information Manual page — “manual” standard.
 * Body from legacy korea02.html. Layout: InformationManualPage (/bell02).
 */
export default function Korea02Page() {
  return (
    <InformationManualPage
      heroLabel="Korea, Republic of"
      titleId="korea02-title"
      hero={{
        src: "/images/koreaoverview/hero-banner.jpg",
        alt: "Korea, Republic of pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<KoreaNavChrome />}
      previousHref="/korea01"
      overviewHref="/koreaoverview"
      nextHref="/korea03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Republic of Korea"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Dong Jo Kim",
            "Korean Trade Promotion Corporation",
            "P. O. Box 1621 International",
            "Seoul, Korea",
            "and",
            "Mr. Hojoon Park",
            "Korean Trade Promotion Center",
            "10 West 56 Street",
            "New York 19, New York",
            "JU 2-6432",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Douglas Beaton"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 28, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 28; Lot 16", "International Area"],
        },
        {
          label: "AREA",
          lines: ["23,754 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Kim Chung Up",
            "Korean Trade Promotion Corporation",
            "P. O. Box 1621 International",
            "Seoul, Korea",
            "and",
            "Walter Dorwin Teague Associates",
            "415 Madison Avenue",
            "New York 17, New York",
            "MU 8-0100",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["W. J. Barney Corporation"],
        },
      ]}
      primaryFigure={{
        src: "/images/korea02/korea02.jpg",
        width: 600,
        height: 231,
        alt: "Republic of Korea pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Republic of Korea Pavilion consists of the main exhibit, a
              traditional tea house and a shrine-pagoda. The main building
              houses products of modern Korea, and there is an unusual
              harp-shaped auditorium for performing Korean artists. A ramp leads
              from the exhibit to the tea house where gracious Korean girls
              serve delicacies and tea, characteristic of their native country.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/korea02/korea03.jpg",
        width: 600,
        height: 357,
        alt: "Republic of Korea",
        bordered: true,
        title: "Republic of Korea",
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
