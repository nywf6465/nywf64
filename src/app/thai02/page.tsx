import type { Metadata } from "next";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Thailand — nywf64.com",
  description:
    "Thailand pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand Information Manual page — “manual” standard.
 * Body from legacy thai02.html. Layout: InformationManualPage (/bell02).
 */
export default function Thai02Page() {
  return (
    <InformationManualPage
      heroLabel="Thailand"
      titleId="thai02-title"
      hero={{
        src: "/images/thaioverview/hero-banner.jpg",
        alt: "Thailand pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ThaiNavChrome />}
      previousHref="/thai01"
      overviewHref="/thaioverview"
      nextHref="/thai03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Kingdom of Thailand"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Col. M. L. Chuan Chuen Kambhu",
            "Director General",
            "Department of Economic Relations",
            "Ministryof Economic Affairs",
            "Bangkok, Thailand",
            "and",
            "His Excellency Sukich Nimmanheminda",
            "Ambassador of Thailand",
            "2490 Trace Place, N. W.",
            "Washington, D. C. 20008",
            "202 667-1446",
            "and",
            "Mr. Sanga Sukhabut",
            "Commercial Counselor",
            "Office of Commercial Counselor",
            "Royal Thai Embassy",
            "20 East 82 Street",
            "New York 28, New York",
            "UN 1-2918",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Dr. George Bennett"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 13, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 29; Lot 2", "International Area"],
        },
        {
          label: "AREA",
          lines: ["12,845 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Binich Sampatisiri",
            "Chief of the Traditional Arts Division",
            "Department of Fine Arts",
            "Government of Thailand",
            "Bangkok, Thailand",
            "and",
            "Mr. Carl R. Lovitt",
            "Sverdrup and Parcel",
            "P. O. Box 1006",
            "Bangkok, Thailand",
            "and",
            "Mr. Charles M. Metcalf",
            "Resident Manager",
            "Sverdrup and Parcel",
            "111 Eighty Avenue",
            "New York 11, New York",
            "CH 3-7308",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Auserehl & Son Contracting Corporation"],
        },
      ]}
      primaryFigure={{
        src: "/images/thai02/thai06.jpg",
        width: 600,
        height: 417,
        alt: "Thailand Pavilion artist's rendering",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Thailand Pavilion......a glittering gold colour architectural
              splendor showing the typical tiered and spired roof of a Thai
              &quot;Mondop&quot; known in English language as shrine. Under its
              roof there are exhibits of the traditional Thai arts and culture.
              Behind the main Mondop, samples of numerous Thai products and
              handicrafts are on display in the one wing, while a gift shop and a
              restaurant serving exotic Thai food are located in the other wing.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/thai02/thai07.jpg",
        width: 600,
        height: 349,
        alt: "Kingdom of Thailand",
        title: "Kingdom of Thailand",
        source:
          "Source: NY World's Fair Publication For Those Who Produced the New York World's Fair 1964-1965",
        bordered: true,
      }}
    />
  );
}
