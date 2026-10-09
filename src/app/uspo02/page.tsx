import type { Metadata } from "next";
import { UspoNavChrome } from "@/components/UspoNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — U.S. Post Office — nywf64.com",
  description:
    "U.S. Post Office entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Post Office Information Manual page — “manual” standard.
 * Body from legacy uspo02.html. Layout: InformationManualPage (/bell02).
 */
export default function Uspo02Page() {
  return (
    <InformationManualPage
      heroLabel="U.S. Post Office"
      titleId="uspo02-title"
      hero={{
        src: "/images/uspooverview/hero-banner.jpg",
        alt: "U.S. Post Office at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UspoNavChrome />}
      previousHref="/uspo01"
      overviewHref="/uspooverview"
      nextHref="/uspo03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["U. S. Post Office"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Frank Viola, Chief Engineer",
            "N. Y. Regional Post Office Dept.",
            "Main Post Office",
            "New York 1, N. Y.",
            "PE 6-7700",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 16, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 14; Lot 6",
            "North of Block 4, on the perimeter of the Industrial Area",
          ],
        },
        {
          label: "AREA",
          lines: ["45,287 Sq. Ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Louis Barberis",
            "7 Middle Lane",
            "Westbury, L.I., N.Y.",
            "516 ED 4-0136",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller"],
        },
      ]}
      primaryFigure={{
        src: "/images/uspo02/uspo04.jpg",
        width: 600,
        height: 270,
        alt: "U.S. Post Office line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The World&apos;s Fair Post Office, designed both for exhibit and
              operational purposes, will serve the postal needs of exhibitors as
              well as visitors from all parts of the world. The latest
              mechanized equipment currently in post offices around the country
              will be installed to handle a mail volume equal to that of a city
              the size of Passaic, New Jersey, or Kansas City, Kansas.
            </>
          ),
        },
        {
          body: (
            <>
              It will have inside and outside lobbies with ample counter space in
              each for visitors to write messages. Clerks, fluent in foreign
              languages, will be stationed at separate windows for the benefit of
              visitors from other lands. Vending machines will be set up in the
              outer lobby to dispense stamps and other postal supplies for those
              not requiring window service.
            </>
          ),
        },
        {
          body: (
            <>
              The most unusual feature, will be a glass enclosed spectator&apos;s
              gallery from which visitors can view the entire processing of
              incoming and outgoing mail. The gallery will consist of a 110 foot
              ramp, rising gradually to a height of nine feet, running across the
              width of the station for 85 feet and then down on the other side to
              the floor level. As groups of visitors file through the building,
              tape recordings will describe the functions of the equipment below.
              The machines on the workroom floor include a large volume letter
              sorter, four small single position letter sorters, a high speed face
              canceller, up-to-date mail separating equipment to feed the
              machines and a tray transport system to move the mail efficiently
              around the workroom.
            </>
          ),
        },
        {
          body: (
            <>
              The office will remain open during regular business hours at the
              Fair, and lock box service will be available on an around-the-clock
              basis. In addition, there will be 29 locations where mail can be
              deposited and stamps and other supplies purchased from the latest
              model vending machines.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/uspo02/uspo05.jpg",
        width: 600,
        height: 349,
        alt: "United States Post Office",
        bordered: true,
        title: "United States Post Office",
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
