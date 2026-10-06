import type { Metadata } from "next";
import { ConparNavChrome } from "@/components/ConparNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import styles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Continental Park — nywf64.com",
  description:
    "Continental Park entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Park Information Manual page — “manual” standard.
 * Body from legacy conpar02.html (no photograph; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 * Legacy wording (Continental Parks plans) preserved.
 */
export default function Conpar02Page() {
  return (
    <InformationManualPage
      heroLabel="Continental Park"
      titleId="conpar02-title"
      hero={{
        src: "/images/conparoverview/hero-banner.jpg",
        alt: "Continental Park at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConparNavChrome />}
      previousHref="/conpar01"
      overviewHref="/conparoverview"
      nextHref="/conparoverview"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Continental Park"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Harry S. Dube, President",
            "Continental Park, Incorporated",
            "10 Rockefeller Plaza",
            "New York 20, New York",
            <>CO&nbsp;5-7035</>,
            "and",
            "Mr. William W. Perry,",
            "Operations Manager",
            "Continental Park, Incorporated",
            "New York World's Fair",
            "World's Fair, New York 11380",
            <>AR&nbsp;1-3100</>,
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 6, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 58; Lot 1", "Meadow Lake Promenade", "Lake Area"],
        },
        {
          label: "AREA",
          lines: ["86,521 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Samuel S. Arlen, A.I.A.",
            "211 East 43rd Street",
            "New York 17, New York",
            <>MO&nbsp;1-2885</>,
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Continental Circus, Inc."],
        },
        {
          label: "ADMISSION",
          lines: [
            "Rides 35c - 3 for $1",
            "Carts 50c",
            "Pet Show 25c",
            "Gorillas 25c",
          ],
        },
      ]}
      features={[
        {
          body: (
            <>
              Continental Park will operate a menagerie of tame animals in a
              fabric tent.
            </>
          ),
        },
        {
          body: (
            <>
              Two caged gorillas known as{" "}
              <span className={styles.u}>M&apos;Toto</span> and{" "}
              <span className={styles.u}>Gargantua II</span> will be on
              exhibition.
            </>
          ),
        },
        {
          body: (
            <>
              Five amusement rides will be in operation and will include rides
              known as the Scrambler, the Octopus and the Meteor. The ride known
              as the Go-Go Cart may also be installed.
            </>
          ),
        },
        {
          body: (
            <>
              Continental Parks plans to have a{" "}
              <span className={styles.u}>picnic area</span> consisting of tables,
              chairs, and facilities for the sale and service of food and
              beverages.
            </>
          ),
        },
        {
          body: (
            <>Continental Park is scheduled to open on or before May 8th [, 1965].</>
          ),
        },
      ]}
      featuresSource="SOURCE: 1965 World's Fair Information Manual"
    />
  );
}
