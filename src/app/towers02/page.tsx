import type { Metadata } from "next";
import { TowersNavChrome } from "@/components/TowersNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Entrance Towers — nywf64.com",
  description:
    "Entrance Towers entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Towers Information Manual page.
 * Body from legacy towers02.html (preserves “significat”).
 * Layout: InformationManualPage (/bell02).
 */
export default function Towers02Page() {
  return (
    <InformationManualPage
      heroLabel="Entrance Towers"
      titleId="towers02-title"
      hero={{
        src: "/images/towersoverview/hero-banner.jpg",
        alt: "Entrance Towers at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<TowersNavChrome />}
      previousHref="/towers01"
      overviewHref="/towersoverview"
      nextHref="/towers03"
      factsLeft={[
        {
          label: "OFFICIAL FAIR CONTACT",
          lines: [
            "Gen. William Whipple",
            "Chief Engineer",
            "New York World's Fair 1964-1965 Corporation",
            "Flushing Meadow Park",
            "Flushing 52, New York",
            "WF 4-2311",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Harris Structural Steel", "Company, Incorporated"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATIONS",
          lines: [
            "IRT Plaza Entrance, 80 ft. high.",
            "111th Street Entrance, 2 towers, 60 ft. high.",
            "Lake Area Entrance, 2 towers 60 ft. high.",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mr. Robert Cothran",
            "Cothran - Campbell",
            "7708 Edgewood Avenue",
            "Pittsburgh 18, Pa.",
            "412 BR 1-1161",
          ],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Richardson, Gordon & Assocs.",
            "2 Gateway Center",
            "Pittsburgh 22, Pa.",
            "412 281-8470",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/towers02/fount27.jpg",
        width: 600,
        height: 921,
        alt: "Entrance Towers",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Entrance Towers, five in all, are intended primarily to be
              classic world&apos;s fair structures; brilliant and new in
              appearance, impressive in size and structure and essentially
              non-utilitarian, pure decoration. They are intended, by their
              height, to be landmarks to locate the entrances, and more
              important, by their appearance to serve the visitor as a striking
              introduction to the Fair. Each tower is intended to be the primary
              decoration of its own plaza.
            </>
          ),
        },
        {
          body: (
            <>
              The design selected consists essentially of a space frame
              structure; A continuous stack of octahedrons formed by the edges
              of 60 degree - 120 degree rhombus-shaped panels, these panels being
              all identical, and the sole element of the tower. Each panel will
              be framed individually and covered on both sides by a
              &quot;rigidized&quot; sheet metal surface. The
              &quot;rigidized&quot; metal offers the benefit of a very glossy
              World&apos;s Fair white porcelain enamel surface, while its
              irregularity breaks up reflected light so that the effect is that
              of an even, sparkling specular surface.
            </>
          ),
        },
        {
          body: (
            <>
              A significat part of the visual appeal of the tower lies in the
              startling difference in the appearance of its various sides.
              Certain views are somewhat more spectacular than others; and
              consideration has been given to the orientation of the tower on its
              base to the actual entrances and major traffic areas..
            </>
          ),
        },
        {
          body: (
            <>
              The beauty of the tower is mainly a matter of secondary reflections
              of light from one panel to another, making the tower for all its
              crisp geometry, look translucent and weightless.
            </>
          ),
        },
      ]}
    />
  );
}
