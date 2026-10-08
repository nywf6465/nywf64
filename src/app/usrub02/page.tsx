import type { Metadata } from "next";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — U.S. Rubber — nywf64.com",
  description:
    "U.S. Rubber entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber Information Manual page — “manual” standard.
 * Body from legacy usrub02.html. Layout: InformationManualPage (/bell02).
 */
export default function Usrub02Page() {
  return (
    <InformationManualPage
      heroLabel="U.S. Rubber"
      titleId="usrub02-title"
      hero={{
        src: "/images/usruboverview/hero-banner.jpg",
        alt: "U.S. Rubber at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UsrubNavChrome />}
      previousHref="/usrub01"
      overviewHref="/usruboverview"
      nextHref="/usrub03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["United States Rubber Company"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. W. c. Johanson",
            "United States Rubber Company",
            "1230 Avenue of the Americas",
            "New York 20, New York",
            "CI 7-5000",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: [
            "Mr. Thomas Kearney",
            "Port of New York Authority",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["April 30, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["25c"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 47; Lot 5", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["15,000 Sq. Ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Shreve, Lamb & Harmn Associates",
            "11 East 44 Street",
            "New York 17, New York",
            "MU 2-8344",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thatcher Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/usrub02/usrub29.jpg",
        width: 600,
        height: 423,
        alt: "United States Rubber Company giant tire exhibit",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          label: "FEATURES",
          body: (
            <>
              The United States Rubber Company exhibit is an 80 foot high giant
              tire, in which people can actually ride. The ride affords a high
              clear view of the Fair grounds for sightseers and camera enthusiasts
              and has a total seating capacity for 96 passengers, four in each of
              the 24 barrel shaped gondolas.
              <br />
              <br />
              The giant tire designed by Shreve, Lamb, &amp; Harmon Associates is
              fabricated of U. S. Rubber&apos;s Vibrin polyester resin reinforced
              with glass fiber. The coating of colored polyester resin gives the
              appearance of rubber, whitewalls and the red circle of security,
              United States rubber&apos;s premium tire designation. The plastic
              laminate weighs 17,500 pounds. It was molded in sections and built
              onto a steel framework encasing the moving mechanism. The gondolas
              moved around the circumference of the giant tire in the tread
              section.
              <br />
              <br />
              The tire is designed for construction on a heavy foundation so it can
              be operated without unsighly stabilizing guy wires and will be able
              to withstand hurricane-force winds.
              <br />
              <br />
              The company is using many of its products in the giant tire. The
              gondolas are made of Expanded Royalite, a molded ABS thermoplastic.
              Seats are cushioned with Koylon foam rubber and covered with
              Naugahyde vinyl upholstery. The floor in each gondola is covered
              with Royal vinyl carpeting.
              <br />
              <br />
              At the entrance, where passengers assemble for the ride, a series of
              display cases exhibit U. S. Rubber&apos;s diversified tire line.
              <br />
              <br />
              The U. S. Royal sign in the tire has illuminated letters four and a
              half feet high. The structure is floodlighted at night and is
              visible from every part of the Fair grounds.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/usrub02/usrub28.jpg",
        width: 600,
        height: 383,
        alt: "United States Rubber Company",
        bordered: true,
        title: "United States Rubber Company",
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
