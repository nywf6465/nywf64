import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { UnNavChrome } from "@/components/UnNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — United Nations — nywf64.com",
  description:
    "United Nations Exhibit entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Nations Information Manual page — “manual” standard.
 * Body from legacy un02.html. Layout: InformationManualPage (/bell02).
 */
export default function Un02Page() {
  return (
    <InformationManualPage
      heroLabel="United Nations"
      titleId="un02-title"
      hero={{
        src: "/images/unoverview/hero-banner.jpg",
        alt: "United Nations exhibit at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnNavChrome />}
      previousHref="/un01"
      overviewHref="/unoverview"
      nextHref="/un03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["United Nations Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. H. G. Barratt-Brown",
            "Room 953",
            "United Nations, New York",
            "PL 4-1234",
            "Ext. 2550",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Dr. George Bennett"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 32; Lot 12",
            "Avenue of United Nations South",
            "and Avenue of Africa",
            "International Area",
          ],
        },
        {
          label: "AREA",
          lines: ["11,496 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Costas Machiouzarides",
            "36 West 84 Street",
            "New York 24, New York",
            "TR 7-1062",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["East Coast Industrial Building Corp."],
        },
      ]}
      primaryFigure={{
        src: "/images/un02/sierra04.jpg",
        width: 600,
        height: 359,
        alt: "United Nations Exhibit",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The United Nations exhibit will feature display material of the UN
              Secretariat and the UN Postal Administration will display
              commemorative stamps and also sell stamps. UN guides will staff an
              information counter where &quot;Guided Tour&quot; tickets will be
              sold to prospective visitors to UN Headquarters on an advanced
              reservation basis.
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion is sponsored by the International Exhibit on the
              United Nations, Inc., a New York membership corporation dedicated
              to furthering an understanding of the aims and accomplishments of
              the U.N.
            </>
          ),
        },
        {
          body: (
            <>
              B.N.S. International Sales Corporation will operate a restaurant in
              the Pavilion. Dishes prepared from recipes of the UN Cook Book will
              be featured.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibit is expected to open to Fair visitors in the latter part
              of May.
            </>
          ),
        },
      ]}
    />
  );
}
