import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Wisconsin — nywf64.com",
  description:
    "Wisconsin pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin Information Manual page.
 * Body from legacy wisconsin02.html. Layout: InformationManualPage (/bell02).
 */
export default function Wisconsin02Page() {
  return (
    <InformationManualPage
      heroLabel="Wisconsin"
      titleId="wisconsin02-title"
      hero={{
        src: "/images/wisconsinoverview/hero-banner.jpg",
        alt: "Wisconsin pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WisconsinNavChrome />}
      previousHref="/wisconsin01"
      overviewHref="/wisconsinoverview"
      nextHref="/wisconsin03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Wisconsin, State of"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Lt. Gov. Jack B. Olson, Chairman",
            "Wisconsin World's Fair Commission",
            "Executive Chambers",
            "Madison, Wisconsin",
            "606 AL 6-4411",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Michael Pender"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["December 5, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 40; Lot 1", "State Area"],
        },
        {
          label: "AREA",
          lines: ["59,336 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "John W. Steinmann",
            "Monticello, Wisconsin",
            "608 WI 8-4313",
            "and",
            "Edgar Tafel Associates",
            "14 East 11th Street",
            "New York 3, New York",
            "OR 3-1688",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thatcher Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/wisconsin02/wi21.jpg",
        width: 600,
        height: 329,
        alt: "Wisconsin Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Wisconsin Pavilion features an outdoor theme and displays the
              state&apos;s assets from fishing to beer and from logging to
              cheese.
            </>
          ),
        },
        {
          body: (
            <>
              The Wisconsin Rotunda is a glass tepee-shaped building significant
              of the state&apos;s Indian lore background. The rotunda is 48 feet
              in diameter and 46 feet high topped by a spire lettered
              &quot;Wisconsin&quot; which soars 80 feet above the grounds. This
              uniquely designed building features evergreens and waterfalls which
              make the rotunda a place of beauty. It also features the official
              state exhibit and displays by the state department on Wisconsin&apos;s
              recreational, agricultural and industrial opportunities.
            </>
          ),
        },
        {
          body: (
            <>
              The Exhibit Pavilion, a rectangular building behind the rotunda,
              features displays of outstanding manufactured products shown in
              every manner and form blended together in individual themes with
              Wisconsin&apos;s vast recreational, agricultrual and industrial
              facilities.
            </>
          ),
        },
        {
          body: (
            <>
              A 17-ton Cheddar Cheese, said to be the world&apos;s largest cheese,
              is displayed to exemplify Wisconsin&apos;s role as the cheese
              manufacturing center of the nation.
            </>
          ),
        },
        {
          body: (
            <>
              A restaurant, decorated in a &quot;Gay 90&apos;s&quot; motif,
              features steaks, flame grilled to your individual taste. Included
              in the low-priced serve-yourself dinner is a salad, baked potato
              and garlic toasted roll.
            </>
          ),
        },
        {
          body: (
            <>
              Wisconsin&apos;s brewing industry is brought to the consumer in the
              form of the old-fashioned beer garden with the typical sawdust
              floor, chilled steins and banjo music. Bratwurst and Thueringer is
              on the menu with Milwaukee potato salad. Terraces furnish a place
              for outdoor dining near a reflecting pool where fly casting,
              retriever-dogs, Indian archery and log-rolling offer visitors a
              sample of Wisconsin&apos;s Fun. A trout stream stocked with trout
              awaits fishermen.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/wisconsin02/wi22.jpg",
        width: 600,
        height: 347,
        alt: "State of Wisconsin",
        bordered: true,
        title: "State of Wisconsin",
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
