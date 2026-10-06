import type { Metadata } from "next";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Dynamic Maturity — nywf64.com",
  description:
    "Dynamic Maturity Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity Information Manual page — “manual” standard.
 * Body from legacy dynmat02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (adjoing, fouding, organization, wll, aproximately, Temeless)
 * preserved.
 */
export default function Dynmat02Page() {
  return (
    <InformationManualPage
      heroLabel="Dynamic Maturity"
      titleId="dynmat02-title"
      hero={{
        src: "/images/dynmatoverview/hero-banner.jpg",
        alt: "Dynamic Maturity at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<DynmatNavChrome />}
      previousHref="/dynmat01"
      overviewHref="/dynmatoverview"
      nextHref="/dynmat03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Dynamic Maturity Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. William C. Fitch, Executive Director",
            "American Association of Retired Persons",
            "and National Retired Teachers Assoc.",
            "du Pont Building; Suite 419",
            "Washington 6, D. C.",
            "202 DE 2-7836",
            "__ and",
            "Mr. Ralph D. L. Price",
            "Coordinator-Conferences & Exhibits",
            "NRTA-AARP",
            "420 Lexington Avenue (Suite 2746)",
            "New York 17, New York",
            "MU 9-6787",
          ],
        },
        {
          label: "EXHIBIT MANAGER",
          lines: [
            "Mr. Arnold Kagan",
            "Fair Pavilions, Incorporated",
            "30 Rockefeller Plaza",
            "New York 20, New York",
            "CO 5-7262",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["April 4, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 17; Lot 6 Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["18,378 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Ira Kessler & Associates",
            "25 West 43rd Street",
            "New York 36, New York",
            "WI  7-0787",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mr. Donald Crawford",
            "Exhibit Crafts",
            "18-35 38th Street",
            "Long Island City, New York",
            "RA 1-4400",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Hegeman-Harris"],
        },
      ]}
      primaryFigure={{
        src: "/images/dynmat02/dynmat01.jpg",
        width: 600,
        height: 246,
        alt: "Dynamic Maturity Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Dynamic Maturity Pavilion, hexagonal in shape, will be
              sponsored by the American Association of Retired Persons and the
              National Retired Teachers Association. The theme of the exhibit
              will be to spotlight the philosophy of the two groups: the
              rejection of isolation, self-pity, and inaction; and the
              encouragement of independence, dignity and purpose. The exhibit
              will demonstrate how older persons are a vital part of the American
              scene.
            </>
          ),
        },
        {
          label: "AREA 1",
          body: (
            <>
              As visitors enter the Pavilion they will be greeted by a large
              display, 8 feet high and 12 feet long, where four large brilliant
              color scenes, representing each of the four seasons will be
              illuminated. Visitors moving along will see a series of exhibits
              on the &quot;Keys to Happy Retirement Living&quot;: The adjoing
              exhibits, &quot;Keynotes&quot; will give brief background
              information on the fouding of AARP and NRTA. The succeeding
              &quot;Keystones&quot; exhibits will spell out the goals and beliefs
              of the two organization. Following will be a &quot;Magic
              Mirror&quot; exhibit with an answer board.
            </>
          ),
        },
        {
          label: "AREA 2",
          body: (
            <>
              In this area the theme of independence is restated and the
              humorous works of the artist, Kurt Ard are exhibited. Visitors then
              move to the outdoor &quot;Hospitality Garden&quot; where a
              beautifully landscaped area is enclosed to provide an opportunity
              for visitors to relax. At the small &quot;Hospitality
              Pavilion&quot; in the garden, a polaroid picture of the visitor
              will be given him as a souvenir of his visit.
            </>
          ),
        },
        {
          label: "AREA 3",
          body: (
            <>
              Returning to the main exhibit building the visitor will see an
              exhibit on the relationship of the goals of the organizations and
              the development of the spirit of independence. Adjoing is a lounge
              and conference area where cordial attendants wll be available for
              information and consultations.
            </>
          ),
        },
        {
          label: "AREA 4",
          body: (
            <>
              Elevated approximately 12 inches above the floor and centered in
              the room, will be a flat disc, aproximately 12 feet in diameter
              known as the Camera Obscura. Looking into the disc, the viewer will
              see the panorama of the Fair outside the building.
            </>
          ),
        },
        {
          label: "AREA 5",
          body: (
            <>
              Visitors will see further exhibits that point out the importance of
              AARP and NRTA to the retired person and the practical answers to
              the achievement of happy retirement living. Each exhibit will be
              both visual and audio.
            </>
          ),
        },
        {
          body: (
            <>
              Two themes prevail throughout the exhibit &quot;Age is
              Temeless&quot; and &quot;The Aging Are an Active Part of the
              Changing Scene&quot;.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/dynmat02/dynmat02.jpg",
        width: 600,
        height: 368,
        alt: "Dynamic Maturity Pavilion",
        bordered: true,
        title: "Dynamic Maturity Pavilion",
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
