import type { Metadata } from "next";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Continental Insurance — nywf64.com",
  description:
    "Continental Insurance pavilion entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance Information Manual page — “manual” standard.
 * Body from legacy conins02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (mements, depiciting) preserved.
 */
export default function Conins02Page() {
  return (
    <InformationManualPage
      heroLabel="Continental Insurance"
      titleId="conins02-title"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins01"
      overviewHref="/coninsoverview"
      nextHref="/conins03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Continental Insurance Companies"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. David Gray, Vice-President",
            "Continental Insurance Companies",
            "80 Maiden Lane",
            "New York, New York 10038",
          ],
        },
        {
          label: "EXHIBIT MANAGER",
          lines: [
            "Mr. Norbert Mack",
            "Continental Insurance Companies",
            "New York World's Fair",
            "World's Fair, New York 11380",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["July 13, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 11, Lot 11 Avenue of Progress", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["12,699 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Gordon Powers",
            "15 West 44th Street",
            "New York, New York 10036",
            <>OX&nbsp;7-1347</>,
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["John W. Ryan Construction Co., Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/conins/cons30.jpg",
        width: 600,
        height: 538,
        alt: "Continental Insurance Companies pavilion",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Continental Insurance Pavilion features &quot;great mements in
              the American Revolution.&quot; The theme of the exhibit is
              immediately evident as the visitor is greeted by a life-sized,
              three-dimensional interpretation of the classic &quot;Spirit of
              &apos;76.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              Featured attraction is &quot;Cinema &apos;76,&quot; a 25 minute
              musical screen show . Unusual line art and photo-effects combine
              with original folk songs created by noted composer Ray Charles to
              tell the stories of seven heroes of the Revolution. The show was
              produced by Mazin-Wyckoff Company .
            </>
          ),
        },
        {
          body: (
            <>
              Dioramas depiciting notable events of the Revolution further carry
              out the patriotic theme. Dioramas were designed and fabricated by
              Atkins and Merrill, Inc . A gallery of original oils depicting many
              of the scenes recreated in the diorama exhibits is also on display.
            </>
          ),
        },
        {
          body: (
            <>
              A dramatic addition for the &apos;65 Fair season is an extensive
              display of weaponry and military gear actually used during the
              Revolutionary period. Artifacts on display are from the private
              collection of Warren Moore of New Jersey.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/conins/cons31.jpg",
        width: 600,
        height: 384,
        alt: "Continental Insurance Companies",
        bordered: true,
        title: "Continental Insurance Companies",
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
