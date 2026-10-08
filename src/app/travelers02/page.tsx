import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance exhibit entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance Information Manual page.
 * Body from legacy travelers02.html. Layout: InformationManualPage.
 */
export default function Travelers02Page() {
  return (
    <InformationManualPage
      heroLabel="Travelers Insurance"
      titleId="travelers02-title"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers01"
      overviewHref="/travelersoverview"
      nextHref="/travelers03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Travelers Insurance Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Herbert Kramer",
            "The Travelers Insurance Company",
            "700 Main Street",
            "Hartford, Connecticut",
            "203 JA 5-0121",
            "and",
            "Mr. Thomas F. Maher, Manager",
            "The Travelers Insurance Company",
            "80 John Street",
            "New York, New York",
            "DI 4-7000",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Ray Cudahy",
            "Young & Rubicam, Inc.",
            "285 Madison Ave.",
            "New York, New York",
            "MU 9-5000",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["June 9, 1961"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 9; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["49,487 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Kahn & Jacobs",
            "2 Park Avenue",
            "New York 16, New York",
            "OR 9-3932",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Donald Deskey Assoc., Inc.",
            "575 Madison Avenue",
            "New York 22, New York",
            "PL 9-5100",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller"],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/travelers02/trvlrs57.jpg",
        width: 600,
        height: 368,
        alt: "Travelers Insurance exhibit",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              &quot;The Triumph of Man&quot; - depicting man&apos;s increasing
              ability to protect himself, conceive ideas, and triumph over the
              perils that have threatened his survival since the beginning of
              time is the theme of the Travelers Insurance Companies&apos;
              exhibit.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The complete two-story structure, 63 feet tall and 120 feet in
              diameter is formed by two giant, abstract umbrella forms, one
              resting on the points of the other. The upper umbrella form is red,
              in keeping with the companies&apos; umbrella symbol of over-all
              insurance protection. Hundreds of jets of water, rising to a
              height of fifteen feet, form a curtain underneath and around the
              base of the pavilion, so that the entire structure appears to be
              floating on a fountain of water.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              An escalator takes visitors to the second floor where the major
              part of the exhibit begins. The &quot;Triumph of Man&quot; exhibit
              spans man&apos;s history, starting with prehistoric times and
              leading into his future. Visitors witness dramatic events, selected
              to show how man used his growing intelligence and ability to act in
              concert with his fellows to overcome threats to his existence, to
              control his environment and to strengthen his security. Employing
              ingenious techniques and devices to recreate the sights and sounds
              of a million years of human progress, the exhibit brings visitors
              into each civilization so completely that they feel themselves to
              be part of the scene. The tour takes 18 minutes.
            </>
          ),
        },
        {
          body: (
            <>
              From the second floor, an escalator takes visitors down to
              &quot;Your Town USA&quot; where they may see how insurance fits
              into everyday life. An insurance center, under a huge red umbrella,
              offers explanations of the major forms of insurance available today
              to everyone through The Travelers.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/travelers02/trvlrs106.jpg",
        width: 600,
        height: 356,
        alt: "Travelers Insurance exhibit",
        bordered: true,
        title: "Travelers Insurance Exhibit",
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
