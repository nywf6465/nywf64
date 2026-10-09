import type { Metadata } from "next";
import { ArlhatNavChrome } from "@/components/ArlhatNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Arlington Hat — nywf64.com",
  description:
    "Arlington Hat Company entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Arlington Hat Information Manual page — “manual” standard.
 * Body from legacy arlhat02.html. Layout: InformationManualPage (/bell02).
 * Legacy has no line drawing; source caption follows FEATURES.
 */
export default function Arlhat02Page() {
  return (
    <InformationManualPage
      heroLabel="Arlington Hat"
      titleId="arlhat02-title"
      hero={{
        src: "/images/arlhatoverview/hero-banner.jpg",
        alt: "Arlington Hat at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ArlhatNavChrome />}
      previousHref="/arlhat01"
      overviewHref="/arlhat01"
      nextHref="/arlhat03"
      factsLeft={[
        {
          label: "LICENSEE",
          lines: ["Arlington Hat Company"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. N. Strongin",
            "Arlington Hat Company",
            "900 Broadway",
            "New York 3, New York",
            "GR 7-8520",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Milton Kayle"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 20, 1963"],
        },
      ]}
      factsRight={[]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      features={[
        {
          body: (
            <>
              Arlington Hat Company will manufacture balloons bearing the
              Unisphere and reproductions of leading exhibits or scenes of the
              Fair.
            </>
          ),
        },
        {
          body: (
            <>
              These items will be sold by the Brass Rail at its souvenir stands
              on the Fair Site and at retail outlets throughout the world.
            </>
          ),
        },
        {
          body: (
            <>
              Arlington Hat company also has a concession for the sale of
              novelty hats.
            </>
          ),
        },
      ]}
    />
  );
}
