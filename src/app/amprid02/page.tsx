import type { Metadata } from "next";
import { AmpridNavChrome } from "@/components/AmpridNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Amphicar Ride — nywf64.com",
  description:
    "Amphicar Ride / Lake Cruise entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphicar Ride Information Manual page — “manual” standard.
 * Body from legacy amprid02.html (Lake Cruise / Maroda Enterprises, Inc.,
 * including the Amphicar Ride). Layout: InformationManualPage (/bell02).
 * Legacy has no line drawing; source caption follows FEATURES.
 */
export default function Amprid02Page() {
  return (
    <InformationManualPage
      heroLabel="Amphicar Ride"
      titleId="amprid02-title"
      hero={{
        src: "/images/ampridoverview/hero-banner.jpg",
        alt: "Amphicar Ride at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmpridNavChrome />}
      previousHref="/amprid01"
      overviewHref="/amprid01"
      nextHref="/amprid03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Lake Cruise (Maroda Enterprises, Inc.)"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Robert Ward",
            "P.O. Box 4111",
            "Fort Lauderdale, Florida",
            "305 566-2558",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 20, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Meadow Lake", "Lake Area"],
        },
        {
          label: "AREA",
          lines: ["5,000 sq. ft. on either side", "of the Amphitheatre"],
        },
        {
          label: "CHARGES",
          lines: [
            "Lake Cruise",
            "Adults $1.00",
            "Children 6 to 16 50¢",
            "Children under six not using seat Free",
            "Amphicar Ride",
            "75¢ per ride",
            "Amusement Rides",
            "35¢ each or 3 rides for $1.00",
          ],
        },
      ]}
      featuresSource="SOURCE: 1965 World's Fair Information Manual"
      features={[
        {
          body: (
            <>
              Plexiglass-canopied boats take visitors on a 20 minute ride around
              Meadow Lake. Each boat is 30 ft. long and carries 20 passengers. A
              guide points out places of interest.
            </>
          ),
        },
        {
          body: (
            <>
              In addition to the boat cruise, Maroda features an Amphicar ride.
              Three passengers at a time ride in a West German built sports
              convertible. Fairgoers ride down a ramp into Meadow Lake for a
              short cruise and then back on land again.
            </>
          ),
        },
        {
          body: (
            <>
              Three amusement rides, the Flying Coaster, the Paratrooper and the
              Looper Plane, are other attractions.
            </>
          ),
        },
      ]}
    />
  );
}
