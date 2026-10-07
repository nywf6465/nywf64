import type { Metadata } from "next";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Indonesia — nywf64.com",
  description:
    "Pavilion of Indonesia entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy indones02.html. Typos preserved: Counsul, New york, Djkarta. */
export default function Indones02Page() {
  return (
    <InformationManualPage
      heroLabel="Indonesia"
      titleId="indones02-title"
      hero={{
        src: "/images/indonesoverview/hero-banner.jpg",
        alt: "Indonesia at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IndonesNavChrome />}
      previousHref="/indones01"
      overviewHref="/indonesoverview"
      nextHref="/indones03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Pavilion of Indonesia"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "His Royal Highness",
            "Sultan Hamengku Buwono IX",
            "Djalan Diponegoro 25",
            "Djakarta, Indonesia",
            "and",
            "Mr. Sutomo Josowidigdo, Counsul",
            "The Indonesia New York World's Fair Participation Committee",
            "Consulate General of Indonesia",
            "5 East 68 Street",
            "New York 21, New York",
            "TR 9-0600",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 6, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CHARGES",
          lines: ["Floor show.....$2.00", "Film..................1.00"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 30; Lot 2", "International Area"],
        },
        {
          label: "AREA",
          lines: ["40,000 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. R. M. Soedarsono",
            "Djkarta, Indonesia",
            "and",
            "Mr. Max O. Urbahn",
            "635 Madison Avenue",
            "New York 22, New york",
            "PL 2-9700",
            "and",
            "Mr. Abel Sorensen",
            "266 West End Avenue",
            "New York 23, New York",
            "TR 3-0977",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Mr. Eugene Von Wening", "Turner Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/indones02/indones26.jpg",
        width: 600,
        height: 356,
        alt: "Indonesian Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Indonesian Pavilion, a joint effort of the Indonesian government
              and Indonesian private enterprise, will emphasize four main themes:
              political, cultural, trade and tourism.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/indones02/indones25.jpg",
        width: 600,
        height: 409,
        alt: "Indonesian Pavilion",
        bordered: true,
        title: "Indonesian Pavilion",
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
