import type { Metadata } from "next";
import { AmindNavChrome } from "@/components/AmindNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — American Indian Exposition — nywf64.com",
  description:
    "American Indian Exposition entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Indian Exposition Information Manual page — “manual” standard.
 * Body from legacy amind02.html. Layout: InformationManualPage (/bell02).
 */
export default function Amind02Page() {
  return (
    <InformationManualPage
      heroLabel="American Indian Exposition"
      titleId="amind02-title"
      hero={{
        src: "/images/amindoverview/hero-banner.jpg",
        alt: "American Indian Exposition at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmindNavChrome />}
      previousHref="/amind01"
      overviewHref="/amind01"
      nextHref="/amind01"
      factsLeft={[
        {
          label: "EXHIBIT SPONSOR",
          lines: [
            "Chief Charles White Eagle, Chairman",
            "National American Youth Committee",
            "of Arrow, Incorporated",
            "1166 19th Street, N.W.",
            "Washington 6, D.C.",
            "202 FE8-4055",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 24, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "AREA",
          lines: ["24,000 sq. ft."],
        },
      ]}
      primaryFigure={{
        src: "/images/amind02/line-drawing.jpg",
        width: 440,
        height: 321,
        alt: "Artist's rendering of the American Indian Exposition",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Indian Pavilion is an integrated display of the history, lore,
              crafts and tribal rights of the American Indian. This authentic
              American Indian Exposition depicts the historical significance of
              Indian life and its contribution to the heritage of America.
            </>
          ),
        },
        {
          body: (
            <>
              Located in the Lake Amusement Area, it includes five structures and
              a Ceremonial Circle where Indian dances and activities are
              demonstrated.
            </>
          ),
        },
        {
          body: (
            <>
              Exhibits for the Indian Exposition change constantly to embrace many
              periods. Indian art is represented by works of early times loaned
              for the exhibit by the Bureau of Indian Affairs and other United
              States sources. Additional artwork, bows and arrows, beaded saddles
              and displays of early handicrafts, originally in the possession of
              Spain and other foreign governments, and not seen in the United
              States for at least two centuries, have been loaned for the exhibit.
            </>
          ),
        },
        {
          body: (
            <>
              One of the Northwest Indian delicacies to be served in the Pavilion
              is salmon, smoked on the grounds by various Indian tribes. Among
              the exciting events shown for the first time off the Reservation are
              a live snake dance, the hot coals dance and other rites.
            </>
          ),
        },
        {
          body: (
            <>
              This is the first time that the American Indians have had an
              organized exhibit at a World&apos;s Fair. The National American
              Indian Youth Committee of Arrow, Incorporated, is a non-profit
              organization working on behalf of American Indians in the fields of
              health, education, housing, arts and crafts, the development of
              resources, and seeks scholarship funds for the education of Indian
              tribes. Arrow, Incorporated was organized in 1949 by Will Rogers,
              Jr.
            </>
          ),
        },
      ]}
      note={
        <>
          <strong>Webmaster&apos;s note... </strong>
          The American Indian Exposition Pavilion is another World&apos;s Fair
          mystery. Like <i>The World of Food</i> Pavilion, its footprint often
          appears on maps of the Fair right up to opening day. The pavilion,
          however, was never built and the lot remained empty throughout the run
          of the Fair.
        </>
      }
    />
  );
}
