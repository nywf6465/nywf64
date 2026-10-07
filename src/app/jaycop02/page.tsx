import type { Metadata } from "next";
import { JaycopNavChrome } from "@/components/JaycopNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Jaycopter Ride — nywf64.com",
  description:
    "Jaycopter Ride entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jaycopter Ride Information Manual — “manual” standard.
 * Body from legacy jaycop02.html. Layout: InformationManualPage (/bell02).
 * Legacy “Lake Amusement Area Area” wording preserved.
 */
export default function Jaycop02Page() {
  return (
    <InformationManualPage
      heroLabel="Jaycopter Ride"
      titleId="jaycop02-title"
      hero={{
        src: "/images/jaycopoverview/hero-banner.jpg",
        alt: "Jaycopter Ride at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JaycopNavChrome />}
      previousHref="/jaycop01"
      overviewHref="/jaycopoverview"
      nextHref="/jaycop03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Jaycopter Ride"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Jack Dubasz and",
            "Mr. Gene E. Ryan",
            "Empire State Building",
            "350 Fifth Avenue, (Suite 1535)",
            "New York 1, New York",
            "CH\u00a04-6800",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 6, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 57; Lot 13", "Lake Amusement Area Area"],
        },
        {
          label: "AREA",
          lines: ["18,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: ["\u00a0"],
        },
      ]}
      primaryFigure={{
        src: "/images/jaycop02/jaycop08.jpg",
        width: 300,
        height: 559,
        alt: "Jaycopter Ride",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Jaycopter is an aerodynamic captive helicopter which simulates
              the action, controls and flight patterns of a conventional
              helicopter. It is designed to carry 16 adults in comfort and safety
              while maintaining the thrill of flying in a helicopter.
            </>
          ),
        },
        {
          body: (
            <>
              All doors are equipped with electric safety locks in addition to
              manual door locks. These electric locks prevent take-off until the
              doors are tightly closed. Once in flight, the doors cannot be
              opened. The Jaycopter is attached to a 77 foot boom mounted on a 25
              foot metal tower, with the cabin end extending 50 feet from the
              fulcrum. The ride will rise 100 feet. In the event of an electrical
              power failure, a hydraulic safety device will lower the copter
              gently to the mounting base.
            </>
          ),
        },
      ]}
    />
  );
}
