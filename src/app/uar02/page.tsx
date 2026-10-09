import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { UarNavChrome } from "@/components/UarNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — United Arab Republic — nywf64.com",
  description:
    "United Arab Republic Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Arab Republic Information Manual page — “manual” standard.
 * Body from legacy uar02.html. Layout: InformationManualPage (/bell02).
 */
export default function Uar02Page() {
  return (
    <InformationManualPage
      heroLabel="United Arab Republic"
      titleId="uar02-title"
      hero={{
        src: "/images/uaroverview/hero-banner.jpg",
        alt: "United Arab Republic pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UarNavChrome />}
      previousHref="/uar01"
      overviewHref="/uaroverview"
      nextHref="/uar03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["United Arab Republic"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Ismail Nazif",
            "General Director",
            "General Organization for International Exhibits and Fairs",
            "Exhibitions Ground - Gezira",
            "Cairo, United Arab Republic",
            "and",
            "Mr. Mohammed Aly Nazif",
            "Counselor, Economoic Affairs",
            "Permanent Mission of the United Arab Republic to the U. N.",
            "900 Park Avenue",
            "New York 21, New York",
            "TR 9-6300",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 24, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Bock 31, Lot 1", "International Area"],
        },
        {
          label: "AREA",
          lines: ["20,000 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Ismail Nazif",
            "General Director",
            "General Organization for International Exhibits and Fairs",
            "Exhibitions Ground - Gezira",
            "Cairo, United Arab Republic",
            "and",
            "Mr. Thomas V. DiCarlo",
            "22 East 40 Street",
            "New York 16, New York",
            "TF 7-0522",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Frankwill Construction Company"],
        },
      ]}
      features={[
        {
          body: (
            <>
              The UAR Pavilion will consist of two single level structures built
              primarily of concrete. Panels of colored cut glass, a typical
              architectural feature of the ancient mosques of Egypt, are being
              fabricated in Egypt and will be a decorative feature of the
              exterior.
            </>
          ),
        },
        {
          body: (
            <>
              The entrance mall will be depicted by three large concrete arches
              from which are suspended three ornamental lanterns of old Cairo.
            </>
          ),
        },
        {
          body: (
            <>
              The smaller of the two structures will be cicular in plan having a
              domed roof and wall panels of small wood members joined together to
              create Arabic designs characteristic of the old city of Cairo. The
              circular structure will house a museum in which great treasures from
              the Valley of the Kings will be exhibited.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/uar02/uar01.jpg",
        width: 600,
        height: 364,
        alt: "United Arab Republic",
        bordered: true,
        title: "United Arab Republic",
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
