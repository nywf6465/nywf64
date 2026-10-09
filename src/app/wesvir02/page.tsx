import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — West Virginia — nywf64.com",
  description:
    "West Virginia pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia Information Manual page.
 * Body from legacy wesvir02.html. Layout: InformationManualPage (/bell02).
 */
export default function Wesvir02Page() {
  return (
    <InformationManualPage
      heroLabel="West Virginia"
      titleId="wesvir02-title"
      hero={{
        src: "/images/wesviroverview/hero-banner.jpg",
        alt: "West Virginia pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WesvirNavChrome />}
      previousHref="/wesvir01"
      overviewHref="/wesviroverview"
      nextHref="/wesvir03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["West Virginia, State of"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. E. L. Montgomery",
            "Director, West Virginia Pavilion",
            "State Capitol",
            "Charleston 5, West Virginia",
            "304 DI 3-4411",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 3, 1962"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Arthur Venneri Co.", "West Field, New Jersey"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 35B; Lot 1", "State Area"],
        },
        {
          label: "AREA",
          lines: ["34,409 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Frederick P. Wiedersum Assoc.",
            "10 Columbus Circle",
            "New York 19, New York",
            "JU 2-1540",
            "and",
            "Irving Bowman",
            "Davidson Building",
            "Charleston, West Virginia",
            "304 DI 4-2468",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mr. Dave Ellies",
            "799 West Goodale Blvd.",
            "Columbus 12, Ohio",
            "614 221-4481",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/wesvir02/wesvir30.jpg",
        width: 600,
        height: 249,
        alt: "West Virginia Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The West Virginia Pavilion will feature a model community of the
              future-an industrial park complex with provisions for business
              opportunity, gracious living and recreation side by side. Fair
              visitors will be introduced to West Virginia as a land of
              relaxation-an inviting oasis in which to live, work and play on a
              year round basis.
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion is a modified L-shaped design, with a pergola-like
              extension providing an additional wing of landscaped garden area.
              Sculptured pre-cast panels and artistically-treated glass provide
              an unusual pattern of exterior wall treatment. The outer structure
              also features majestic full color views of West Virginia&apos;s
              leading scenic resorts. Five translucent domes rise above the roof
              to give further definition to the structure. A free form reflective
              pool envelopes three sides of the building. The pool is bridged by
              a gently inclined ramp which affords access to the pavilion.
              Adjacent to the main entrance, a towering sculptural symbol rises
              to a height of 50 feet and represents the aspirations of the people
              of West Virginia, through the development of industry, education
              and natural resources.
            </>
          ),
        },
        {
          body: (
            <>
              The major areas of the pavilion include:
            </>
          ),
        },
        {
          label: "An Information Rotunda",
          body: (
            <>
              Themes depicting the State in all its major aspects, including the
              history, culture, government and educational institutions.
            </>
          ),
        },
        {
          label: "An Industrial Park",
          body: (
            <>
              Dramatic exhibits sponsored by West Virginia&apos;s leading
              industrial firms.
            </>
          ),
        },
        {
          label: "West Virginia's Vacationland",
          body: (
            <>
              The unspoiled natural preserve, with winter, spring, summer and
              fall activities for the entire family.
            </>
          ),
        },
        {
          label: "Coal Mine",
          body: (
            <>
              The visitor is taken on a trip through a West Virginia coal mine.
            </>
          ),
        },
        {
          label: "A Gift Shop",
          body: (
            <>
              A full line of souvenirs, fashioned by West Virginia&apos;s
              craftsmen, including stemware shown by Mrs. John F. Kennedy during
              her televised tour of the White House.
            </>
          ),
        },
        {
          label: "An Astronomy Exhibit",
          body: (
            <>
              (A Radio Astronomy Sky) Special effects interpret the meaning of
              the radio-telescope, explain its ability to &quot;see&quot;, relate
              its impact upon the world of science today, and explore the
              significance of this magic &quot;window of the universe&quot;. The
              exhibit incorporates a planetarium dome, dioramas, animation,
              motion pictures, sound, displays and other audio-visual techniques.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/wesvir02/wesvir29.jpg",
        width: 600,
        height: 346,
        alt: "West Virginia",
        bordered: true,
        title: "West Virginia",
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
