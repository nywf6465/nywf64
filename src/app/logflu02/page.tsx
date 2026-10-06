import type { Metadata } from "next";
import { LogfluNavChrome } from "@/components/LogfluNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Flume Ride — nywf64.com",
  description:
    "Log Flume Ride entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Flume Ride Information Manual page.
 * Body from legacy logflu02.html. Layout: InformationManualPage (/bell02).
 * Preserve typo: detree.
 */
export default function Logflu02Page() {
  return (
    <InformationManualPage
      heroLabel="Flume Ride"
      titleId="logflu02-title"
      hero={{
        src: "/images/logfluoverview/hero-banner.jpg",
        alt: "Flume Ride at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<LogfluNavChrome />}
      previousHref="/logflu01"
      overviewHref="/logfluoverview"
      nextHref="/logflu03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Log Flume Ride"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Albert L. Clepper, Exhibit Mgr.",
            "Log Flume Ride",
            "New York World's Fair",
            "World's Fair, New York  11380",
            "AR 1-2131",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 27, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 57; Lot 14", "Lake Mall", "Lake Area"],
        },
        {
          label: "AREA",
          lines: ["100,487 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: ["Mr. Randall Duell", "P.O. Box 191", "Arlington, Texas"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Tishman Realty and Construction Co."],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. I. Irving Davidson",
            "1612 K Street, N.W.",
            "Washington, D.C.",
            "202 DI 7-3400",
          ],
        },
        {
          label: "ADMISSION",
          lines: ["Adult 75c", "Child (2-12) 50c"],
        },
      ]}
      primaryFigure={{
        src: "/images/logflu02/logflu01.jpg",
        width: 600,
        height: 368,
        alt: "Log Flume Ride line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Log Ride is an entirely new concept in rides. Riders, in boat
              shaped like hollow logs, are whisked through a flume by the force
              of rushing waters. They travel 11 feet per second through the
              winding flume and finish with a splash, as the logs scoot down a
              45 detree slide into a lakelet of swirling rapids.
            </>
          ),
        },
        {
          body: <>There is also an Orange Julius Stand and two snack bars.</>,
        },
      ]}
    />
  );
}
