import type { Metadata } from "next";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — IBM Pavilion — nywf64.com",
  description:
    "IBM Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM Information Manual page — body from legacy ibm02.html.
 * Layout: InformationManualPage (/bell02 standard). Legacy typos preserved.
 */
export default function Ibm02Page() {
  return (
    <InformationManualPage
      heroLabel="IBM Pavilion"
      titleId="ibm02-title"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm01"
      overviewHref="/ibmoverview"
      nextHref="/ibm03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["IBM Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Edward A. Kelleher, Manager",
            "World's Fair Department",
            "International Business Machines Corp.",
            "590 Madison Avenue",
            "New York 22 N.Y.",
            "PL 3-1900",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 28, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 9, Lot 9", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["54,038 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Eero Saarinen & Assocs.",
            "20 Davis Street",
            "Hamden, Conn.",
            "203 SP 7-07251",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Gilbane Building Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/ibm02/ibm44.jpg",
        width: 600,
        height: 266,
        alt: "IBM Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The IBM pavilion will tell the story of modern information handling
              devices in an interesting, informative and educational manner. The
              pavilion will have the effect of a covered garden, with all exhibits
              in the open beneath a grove of 45 man-made steel trees. They will
              support a roof of translucent, colored plastic. The pavilion is
              divided into six parts.
            </>
          ),
        },
        {
          label: 'The "Information Machine"',
          body: (
            <>
              A 90 foot ovoid theatre will be the main attraction. It will consist
              of nine screens used in various combinations to show how computer
              systems have evolved from the simplest propositions to those
              including a multitude of factors. Visitors will view the show by
              seating themselves in a grandstand or a &quot;people wall&quot;, which
              will then be raised 53 feet by hydraulic machinery to the interior of
              the egg-shaped theatre. Narration will be in English but headsets
              will be provided so that foreign visitors will be able to hear
              simultaneous translations in German, Spanish, Italian and Japanese.
            </>
          ),
        },
        {
          label: "Pentagon Theatres",
          body: (
            <>
              Supporting the main theatre will be a group of little theatres where
              mechanical, puppet-like devices will be sued to explain such subjects
              as speed, miniaturization, computer logic and information handling
              systems. The object will be to give a simple explanation of how data
              processing systems work.
            </>
          ),
        },
        {
          label: "Computer Court",
          body: (
            <>
              A large-scale IBM data processing system will be used to demonstrate
              capability of solving such problems as traffic control, information
              retrieval and language translation.
            </>
          ),
        },
        {
          label: "Probability Court",
          body: (
            <>
              A collection of devices and graphics will be located throughout the
              pavilion. The object will be to demonstrate concepts such as
              probability theory and its relation to the physical world.
            </>
          ),
        },
        {
          label: "Scholar's Walk",
          body: (
            <>
              A collection of graphics assembled during research for the pavilion
              which illustrates the history and development of computer technology.
              The object will be to provide information on how modern systems
              evolved.
            </>
          ),
        },
        {
          label: "Administration Building",
          body: (
            <>
              Along the rear wall of the pavilion will be the administration
              building, which will house personnel, supplies, maintenance equipment
              and offices.
            </>
          ),
        },
        {
          body: <>There will be a VIP lounge.</>,
        },
      ]}
      secondaryFigure={{
        src: "/images/ibm02/ibm45.jpg",
        width: 600,
        height: 351,
        alt: "IBM Pavilion",
        bordered: true,
        title: "IBM Pavilion",
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
