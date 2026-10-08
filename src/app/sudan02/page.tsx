import type { Metadata } from "next";
import { SudanNavChrome } from "@/components/SudanNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Sudan — nywf64.com",
  description:
    "Sudan Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sudan Information Manual page — “manual” standard.
 * Body from legacy sudan02.html. Layout: InformationManualPage (/bell02).
 */
export default function Sudan02Page() {
  return (
    <InformationManualPage
      heroLabel="Sudan"
      titleId="sudan02-title"
      hero={{
        src: "/images/sudanoverview/hero-banner.jpg",
        alt: "Sudan pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SudanNavChrome />}
      previousHref="/sudan01"
      overviewHref="/sudanoverview"
      nextHref="/sudan03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Republic of Sudan"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Mohamed Zaki Elhag",
            "Director of Exhibitions and Fairs",
            "Ministry of Information and Labor",
            "Khartoum, Sudan",
            "and",
            "Mr. Salah Ahmed Mohamed Salih",
            "Second Secretary",
            "Embassy of the Republic of Sudan",
            "3421 Massachusetts Ave., N. E.",
            "Washington 8, D. C.",
            "202 FE 6-8565",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 13, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 31; Lot 2", "International Area"],
        },
        {
          label: "AREA",
          lines: ["13,923 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Mohamed Zaki Elhag",
            "Director of Exhibitons and Fairs",
            "Ministry of Information and Labor",
            "Khartoum, Sudan",
            "and",
            "Noel and Miller",
            "2 West 45 Street",
            "New York 36, N. Y.",
            "MU 7-4847",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Auserehl & Son"],
        },
      ]}
      primaryFigure={{
        src: "/images/sudan02/sudan03.jpg",
        width: 600,
        height: 643,
        alt: "Republic of Sudan pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Republic of Sudan Exhibit will consist of one large structure
              and five individual booths. It is designed to be both entertaining
              and educational.
            </>
          ),
        },
        {
          body: (
            <>
              Approximately one-third of the total area will be occupied by the
              main two-story structure, which will be Islamic in design.
              Reinforced concrete and wooden screening will be the basic
              constitutents of the exterior walls. The wooden screens between the
              concrete columns will be backed by glass panels. Another feature of
              the architecture will be a large native mosaic, to be situated on
              the front of the building.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>The first floor</span> of the main
              building will be divided into several sections. Cinema programs and
              native entertainment will be viewed by visitors enjoying
              refreshments in an enclosed area on this level. In addition to this,
              publicity and information booths will be located here, as well as a
              native products&apos; specialty shop.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>The upper floor</span> will be the
              site of the Sudanese handicraft displays. This part of the pavilion
              will also contain a photographic view of the country.
            </>
          ),
        },
        {
          body: (
            <>
              Five separate booths will be built on the remaining grounds of the
              exhibit. Constructed from bamboo materials, these will be modeled
              on the natives&apos; huts, and will house craftsmen performing their
              occupations.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/sudan02/sudan02.jpg",
        width: 600,
        height: 379,
        alt: "Republic of the Sudan",
        bordered: true,
        title: "Republic of the Sudan",
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
