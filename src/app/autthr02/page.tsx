import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Auto Thrill Show — nywf64.com",
  description:
    "Auto Thrill Show entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show Information Manual page — “manual” standard.
 * Body from legacy autthr02.html. Layout: InformationManualPage (/bell02).
 * Legacy casing (“New york”) is preserved.
 */
export default function Autthr02Page() {
  return (
    <InformationManualPage
      heroLabel="Auto Thrill Show"
      titleId="autthr02-title"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthr01"
      overviewHref="/autthr01"
      nextHref="/autthr03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Auto Thrill Show"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. A. Alan Gottlieb and",
            "Mr. William L. Lippert",
            "Transportation Productions, Inc.",
            "54 South Second Street",
            "Brooklyn 11, New York",
            "EV 8-4700",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Bill Doll and Company",
            "Michael Todd Building",
            "1700 Broadway",
            "New York 19, New York",
            "JU 6-8894",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 29, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 51; Lot 5", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["181,001 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Housman and Rosenberg",
            "235 East 42nd Street",
            "New york 17, New york",
            "MU 7-2480",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thatcher Construction Co., Inc."],
        },
        {
          label: "PERFORMANCES",
          lines: ["Daily 4", "Weekends and Holidays 8"],
        },
        {
          label: "ADMISSION",
          lines: ["General Admission $ 1.00", "Reserved Section $ 1.50"],
        },
      ]}
      primaryFigure={{
        src: "/images/autthr02/manual-photo.jpg",
        width: 600,
        height: 241,
        alt: "Auto Thrill Show",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Thirty world champion Hell Drivers will perform dare-devil, stunt
              and precision automobile driving at the Auto Thrill show. The 6,000
              seat stadium, the only stadium ever specifically designed for
              thrill driving will include a unique, banked, figure-eight auto
              track layout, permitting and insuring performances unmatched in
              the history of this spectacular sport.
            </>
          ),
        },
        {
          body: (
            <>
              Among the classic, high-speed thrill maneuvers of the Hell Drivers
              are the bone-crushing &quot;t-bone&quot; crash, fender to fender
              criss-crossing, four car bumper tag, barrel rolls, and broad jump.
              The gravity defying climax of the show is the dangerous
              ramp-to-ramp &quot;flight&quot; of a standard Dodge automobile,
              which hurtles more than 70 feet through the air. One of the Hell
              Drivers, a specialist in crashes and spins, is featured in the
              thrilling leap of an old automobile onto the top of a second car,
              known as the dive bomber crash. Another daredevil faces as many as
              four Dodge cars speeding toward him simultaneously, coming within
              mere inches of running him down.
            </>
          ),
        },
      ]}
    />
  );
}
