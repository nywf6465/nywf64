import type { Metadata } from "next";
import { ChucenNavChrome } from "@/components/ChucenNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Churchill Center — nywf64.com",
  description:
    "Churchill Center pavilion entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Churchill Center Information Manual page — “manual” standard.
 * Body from legacy chucen02.html. Layout: InformationManualPage (/bell02).
 */
export default function Chucen02Page() {
  return (
    <InformationManualPage
      heroLabel="Churchill Center"
      titleId="chucen02-title"
      hero={{
        src: "/images/chucenoverview/hero-banner.jpg",
        alt: "Churchill Center at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucenNavChrome />}
      previousHref="/chucen01"
      overviewHref="/chucenoverview"
      nextHref="/chucen03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: [
            "People-to-People Presents",
            '"A Tribute to Winston Churchill"',
          ],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "John R. Reiss, General Manager",
            "People-to-People New York World's",
            "Fair Exhibits",
            "c/o Administration Building",
            "World's Fair, New York  11380",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Martin Stone"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 11, 1965"],
        },
        {
          label: "ADMISSION",
          lines: ["Adults $1.00", "Children .50"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 16, Lot 8", "Avenue of Commerce", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["80,506 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Eggers and Higgins",
            "100 East 42nd Street",
            "New York, New York  10017",
            "OX 7-3780",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Kreisler-Borg Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/chucen02/line-drawing.jpg",
        width: 600,
        height: 284,
        alt: "Churchill Center pavilion line drawing",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The louver-sided, geodesic domed World&apos;s Fair Pavilion will
              house the People to People &quot;A Tribute to Winston
              Churchill&quot; during the 1965 season. This exhibit will include a
              chronological pictorial story of the life of Winston Churchill,
              selected paintings by Sir Winston, an exact reproduction of the
              study in the Churchill home at Chartwell, England, and awards and
              memorabilia of Sir Winston&apos;s illustrious career.
            </>
          ),
        },
        {
          body: (
            <>
              The admission charges will be used to defray the building costs of
              the Churchill School of International Affairs to be built in Kansas
              City, Missouri.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/chucen02/produced-photo.jpg",
        width: 600,
        height: 341,
        alt: "People to People Churchill Center",
        bordered: true,
        title: "People to People Churchill Center",
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
