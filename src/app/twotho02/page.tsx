import type { Metadata } from "next";
import { TwothoNavChrome } from "@/components/TwothoNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Two Thousand Tribes — nywf64.com",
  description:
    "Pavilion of 2000 Tribes entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Two Thousand Tribes Information Manual page — “manual” standard.
 * Body from legacy twotho02.html. Layout: InformationManualPage (/bell02).
 */
export default function Twotho02Page() {
  return (
    <InformationManualPage
      heroLabel="Two Thousand Tribes"
      titleId="twotho02-title"
      hero={{
        src: "/images/twothooverview/hero-banner.jpg",
        alt: "Two Thousand Tribes pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<TwothoNavChrome />}
      previousHref="/twotho01"
      overviewHref="/twothooverview"
      nextHref="/twotho03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Pavilion of 2000 Tribes"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. D. W. Bendigo",
            "147-25 Northern Blvd., Apt. 2P",
            "Flushing, New York",
            "TU 6-6548",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Bruce Nicholson"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 2, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "CHARGE FOR MURAL",
          lines: ["50c"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Bock 28; Lot 11", "International Area"],
        },
        {
          label: "AREA",
          lines: ["6,454 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. William E. Kohn",
            "300 North Main Street",
            "Spring Valley, New York",
            "914 EL 1-4000",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["E. W. Howell Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/twotho02/twotho02.jpg",
        width: 600,
        height: 326,
        alt: "Pavilion of 2000 Tribes line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The 2,000 Tribes Pavilion, sponsored by the Wycliffe Bible
              Translators, Inc., will house an auditorium and a museum, and will
              have no formal roof. Strips of dark wood, placed diagonally, will
              give the exterior the impression of being a hut.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibit will contain an heroic mural by H. Douglas
              Risenborough, depicting the conversion of a tribal chieftain from a
              headhunter to an influential Christian citizen. Many tribal
              artifacts will be on display. Recorded sounds of primitive languages
              will be heard by visitors, and the story of primitive cultures,
              arts and crafts will be shown through a large black and white photo
              exhibit by Cornell Capa.
            </>
          ),
        },
        {
          body: (
            <>
              The Pavilion&apos;s name is derived from the fact that there are
              approximately 2,000 language groups which do not have a written
              language, nor do they speak the official language of their
              countries. The exhibit will show how the missionary work of
              Wycliffe and its affiliates, the Summer Institute of Linguistics
              and the Jungle Aviation and Radio Service, is carried out in some
              of the remote areas of the world, such as in the Amazon, Africa,
              Australian and New Guinea jungles, the Philippines, Centralamerica
              and even the United States and Canada
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/twotho02/twotho03.jpg",
        width: 600,
        height: 355,
        alt: "Pavilion of 2000 Tribes",
        bordered: true,
        title: "Pavilion of 2000 Tribes",
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
