import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Westinghouse — nywf64.com",
  description:
    "Westinghouse Time Capsule entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse Information Manual page.
 * Body from legacy weshou02.html. Layout: InformationManualPage (/bell02).
 */
export default function Weshou02Page() {
  return (
    <InformationManualPage
      heroLabel="Westinghouse"
      titleId="weshou02-title"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou01"
      overviewHref="/weshouoverview"
      nextHref="/weshou03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Westinghouse Time Capsule"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Paul S. Ridley",
            "Westinghouse Electric Corporation",
            "3 Gateway Center",
            "Pittsburgh, Pennsylvania",
            "412 391-2800",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. G. H. Furgurson, Manager",
            "New York Public Relations",
            "200 Park Avenue",
            "New York 17, New York",
            "692-5110",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 9, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 41; Lot 3 State Area"],
        },
        {
          label: "AREA",
          lines: ["27,664 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Eliot Noyes",
            "Main Street",
            "New Canaan, Connecticut",
            "203 966-9561",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Diesel Construction Company"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/weshou02/weshou33.jpg",
        width: 600,
        height: 477,
        alt: "Westinghouse Time Capsule",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Westinghouse Pavilion is built around the monument marking the
              site of the original Time Capsule buried for the 1939-40 New York
              World&apos;s Fair. The pavilion consists of three structural
              towers, rising 100 feet above the Fair Grounds.
            </>
          ),
        },
        {
          body: (
            <>
              Three cycloramic displays, each a sixty-foot semicircle formed by
              vertical panels, give the public a view of: a full scale model of
              the 1939 Time Capsule and its contents; a display of progress
              during the past quarter century; and a graphic 10,000 year calendar
              of significant events, reaching 5,000 years into the past and the
              future.
            </>
          ),
        },
        {
          body: (
            <>
              During the second season of the Fair, the display on progress will
              be replaced by an exhibit of the contents of the new Time Capsule.
              The new Time Capsule is suspended from three structural towers 50
              feet in the air directly above the monument. A pool around the
              monument reflects the image of the capsule.
            </>
          ),
        },
        {
          body: (
            <>
              The new capsule, made of a special alloy, will be deposited 50 feet
              below ground, adjacent to the original time capsule on October 16,
              1965. Documenting man&apos;s progress for the past 25 years, it
              will serve as a supplementary message to the peoples living in 6939
              A.D. The contents of the capsule will be chosen by a special
              committee of authorities in such fields as; medicine and health,
              space, science, atomic energy, communication, education,
              transportation, sports and recreation. Signatures collected at the
              Pavilion will be included in the 300 pound message.
            </>
          ),
        },
        {
          body: (
            <>
              1939 Time Capsule: The seven and a half foot long, torpedo shaped,
              1939 Time Capsule capable of lasting 5,000 years and buried 50 feet
              below the earth&apos;s surface, contains a cross-section of what
              was then the present day civilization, by the medium of micro-film
              and various objects of the 1939 era. Some of the things it contains
              are: a baseball, a lump of anthracite coal, a safety pin, a can
              opener, reproductions of works of outstanding modern artists, sheet
              music to the song hit of the day &quot;Flat Foot Floogee&quot;, a
              deck of cards, a pack of cigarettes, the novel &quot;Gone With the
              Wind&quot;, several comic books, and a fifteen minute newsreel of
              outstanding 1936-1938 events.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/weshou02/weshou46.jpg",
        width: 600,
        height: 529,
        alt: "Westinghouse Time Capsule",
        bordered: true,
        title: "Westinghouse Time Capsule",
        source: (
          <>
            Source: NY World&apos;s Fair Publication For Those Who Produced the
            New York World&apos;s Fair 1964-1965
          </>
        ),
      }}
    />
  );
}
