import type { Metadata } from "next";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Greyhound — nywf64.com",
  description:
    "Greyhound Corporation Exhibit entry from the World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound Information Manual page — “manual” standard.
 * Body from legacy greyhound02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“Grehyound Post Houses”) preserved.
 */
export default function Greyhound02Page() {
  return (
    <InformationManualPage
      heroLabel="Greyhound"
      titleId="greyhound02-title"
      hero={{
        src: "/images/greyhoundoverview/hero-banner.jpg",
        alt: "Greyhound at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreyhoundNavChrome />}
      previousHref="/greyhound01"
      overviewHref="/greyhoundoverview"
      nextHref="/greyhound03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Greyhound Corporation Exhibit", "Grehyound Post Houses"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "EXHIBIT",
            "Mr. J.E. Hawthorne",
            "Vice-President-Marketing",
            "The Greyhound Corporation",
            "140 South Dearborn Street",
            "Chicago 3, Illinois",
            "312 FI6-7560",
            "",
            "RESTAURANT",
            "Mr. W.E. Lassiter, President",
            "Greyhound Post Houses, Inc.",
            "7300 West Madison Street",
            "Forest Park, Illinois",
            "312 FO6-5700",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 23, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 50; Lot 24", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["84,643 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Kahn and Jacobs",
            "2 Park Avenue",
            "New York 17, New York",
            "OR9-3932",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "The Displayers, Inc.",
            "635 West 54th Street",
            "New York 19, New York",
            "PL7-6500",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/greyhound02/greyhound04.jpg",
        width: 600,
        height: 285,
        alt: "Greyhound Corporation Exhibit",
        source: "SOURCE: World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              On entering the Greyhound Exhibit Pavilion Fairgoers will be
              guided along a series of attractive panels forming a corridor 30
              feet long. The panels will describe the 50 year history of
              Greyhound.
            </>
          ),
        },
        {
          body: (
            <>
              After passing through the corridor, the Fairgoer will be guided
              into a theater -- a triangular area bound on two sides by 12 foot
              walls, and appropriately railed in.
            </>
          ),
        },
        {
          body: (
            <>
              After about a minute, a voice will instruct the audience to keep
              their eyes on the wall afore them. As the narration continues, the
              audience will be given a brief description of the history of land
              transportation -- both orally and through use of an exciting
              series of colorful transparencies and projections.
            </>
          ),
        },
        {
          body: (
            <>
              The audience, standing on a 38-foot-diameter turntable, will turn
              slowly to view a color sound film that pans closer and closer to a
              Greyhound Bus traveling through the countryside.
            </>
          ),
        },
        {
          body: (
            <>
              As the camera reaches the bus itself, the area beyond the walls
              suddenly will fill with a stereo sound effect and full-dimension
              color sound motion picture.
            </>
          ),
        },
        {
          body: (
            <>
              The audience will virtually experience being in the bus itself.
              For two minutes, the audience will share with the bus passengers
              the intimacy and pleasure of bus travel, and get a first-hand look
              at the countryside.
            </>
          ),
        },
        {
          body: (
            <>
              At the end of this life-like experience, the bus will pull into a
              modern Greyhound bus terminal.
            </>
          ),
        },
        {
          body: (
            <>
              For the next minute and a half, the audience--now revolved slowly
              to face a large, lighted map of the United States -- will learn of
              Greyhound&apos;s 100,000 miles of nationwide routes and hear of
              some of the top scenic attractions of the United States and
              Canada.
            </>
          ),
        },
        {
          body: (
            <>
              At the left of the exhibit pavilion, a &quot;Lady Greyhound
              Leisure Travel Center&quot; will be provided, aimed at the growing
              leisure travel market. In this relaxing area, visitors can take it
              easy while watching a short color sound film, an actual Greyhound
              tour. The leisure travel center will utilize bus seats set among
              planters and dividers. In the middle of this travel center will be
              a special events stage on which will be presented such interesting
              events as appearances by Lady Greyhound, fashion shows by
              Greyhound&apos;s living symbol, and &quot;State of the Week&quot;
              presentations.
            </>
          ),
        },
        {
          body: (
            <>
              After viewing the Greyhound exhibit, Fairgoers may enjoy a
              leisurely meal in the adjacent, attractively decorated Greyhound
              Post House Restaurant.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/greyhound02/greyhound59.jpg",
        width: 600,
        height: 382,
        alt: "Greyhound Corporation",
        bordered: true,
        title: "Greyhound Corporation",
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
