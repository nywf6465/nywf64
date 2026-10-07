import type { Metadata } from "next";
import { EntbuiNavChrome } from "@/components/EntbuiNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Entrance Building — nywf64.com",
  description:
    "Entrance Building entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Building Information Manual page.
 * Body from legacy entbui02.html (no photograph; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 */
export default function Entbui02Page() {
  return (
    <InformationManualPage
      heroLabel="Entrance Building"
      titleId="entbui02-title"
      hero={{
        src: "/images/entbuioverview/hero-banner.jpg",
        alt: "Entrance Building at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<EntbuiNavChrome />}
      previousHref="/entbui01"
      overviewHref="/entbuioverview"
      nextHref="/entbui03"
      factsLeft={[
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "General William Whipple",
            "Chief Engineer",
            "New York World's Fair 1964-1965 Corporation",
            "Flushing Meadow Park",
            "Flushing 52, New York",
            "WF 4-2311",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "South end of pedestrian overpass from Willets Point Subway station",
          ],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Andrews and Clark",
            "302 East 63rd Street",
            "New York 21, New York",
            "TE 8-2600",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Rubin Construction Corp."],
        },
      ]}
      features={[
        {
          body: (
            <>
              The Entrance Building, under the elevated pedestrian overpass,
              will house many of the various service facilities at the Fair.
            </>
          ),
        },
        {
          body: (
            <>
              Located in the 38,500 square foot building will be the World&apos;s
              Fair Customs House, Express Agencies, Maintenance and Security
              Offices and Telephone Company Offices. The southerly end will
              contain large public comfort stations.
            </>
          ),
        },
        {
          body: (
            <>
              Snack type restaurants, one on each side, will be located on the
              upper deck.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
    />
  );
}
