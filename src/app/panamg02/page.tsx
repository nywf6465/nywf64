import type { Metadata } from "next";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Pan American Highway Gardens — nywf64.com",
  description:
    "Pan American Highway Gardens entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pan American Highway Gardens Information Manual page — “manual” standard.
 * Body from legacy panamg02.html (no photograph; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 * Legacy typos (“Eventualy”, “vechicles”) are preserved.
 */
export default function Panamg02Page() {
  return (
    <InformationManualPage
      heroLabel="Pan American Highway Gardens"
      titleId="panamg02-title"
      hero={{
        src: "/images/panamgoverview/hero-banner.jpg",
        alt: "Pan American Highway Gardens at the 1964/1965 New York World’s Fair",
        width: 2164,
        height: 727,
      }}
      nav={<PanamgNavChrome />}
      previousHref="/panamg01"
      overviewHref="/panamgoverview"
      nextHref="/panamg03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Pan American Highway Gardens"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Dr. Bertram Tallamy",
            "1616 H Street, N. W.",
            "Washington D. C.",
            "202 347-7738",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 19; Lot 8", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["160,000 sq. ft."],
        },
        {
          label: "LANDSCAPE DESIGNER",
          lines: [
            "Clarke and Rapuano",
            "830 Third Avenue",
            "New York 22, New York",
            "PL 4-1030",
          ],
        },
        {
          label: "PHOTOMURALS",
          lines: ["Mr. Hal Bibby", "Eastman Kodak Company"],
        },
      ]}
      features={[
        {
          body: (
            <>
              The Pan American Highway Gardens celebrate the completion of this
              road in 1963 running from the border of Mexico down to Panama. The
              additional 600 miles south of Panama to connect with South American
              highway systems are in the process of being built at this time.
              Eventualy one may leave Alaska on the Alcan Highway and travel by
              auto all the way to the tip of South America.
            </>
          ),
        },
        {
          body: (
            <>
              The section which runs north from Panama to the American border is
              the Inter-American Highway. It unites the Pan American Highway
              system that comprises the principal highway system of all of the
              countries of North and South America. It is 3,700 miles long and
              will extend from the Texas-Mexico border to Las Animas, Colombia.
              The 3,100 mile section from the United States to the Panama Canal
              was opened in the spring of 1963 by an officially sponsored
              intergovernmental cavalcade of vechicles which visited the New York
              World&apos;s Fair Site. This section of the road transverses Mexico,
              Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica and Panama.
              The route follows the top of the Pacific Mountain Ranges and as a
              result the scenery is spectacular. It is tropical but still the
              climate is generally good because of the altitude. The Pan American
              Highway Gardens will feature plantings of trees, shrubbery and
              flowers from that section, particularly around the settings of each
              of the twelve photomurals. It is also planned that there will be
              small kiosks from which souvenirs of these areas will be sold.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
    />
  );
}
