import type { Metadata } from "next";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Boy Scouts of America — nywf64.com",
  description:
    "Boy Scouts of America entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America Information Manual page — “manual” standard.
 * Body from legacy boysco02.html. Layout: InformationManualPage (/bell02).
 */
export default function Boysco02Page() {
  return (
    <InformationManualPage
      heroLabel="Boy Scouts of America"
      titleId="boysco02-title"
      hero={{
        src: "/images/boyscooverview/hero-banner.jpg",
        alt: "Boy Scouts of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BoyscoNavChrome />}
      previousHref="/boysco01"
      overviewHref="/boyscooverview"
      nextHref="/boysco03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Wonderful World of Scouting"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Theodore P. Accas",
            "Director of Special Events, Public Relations and Activities",
            "and",
            "Mr. William L. Scollay",
            "Director, World's Fair Service Corps",
            "Greater New York Councils",
            "Boy Scouts of America",
            "25 West 43rd Street",
            "New York, New York 10036",
            "WI 7-8400",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. W. H. Ottley"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 13, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 7; Lot 5, plus adjacent",
            "area, underneath Van Wyck",
            "Expressway Extension,",
            "Industrial Area",
          ],
        },
        {
          label: "AREA",
          lines: ["26,851 sq. ft."],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mr. Richard C. Guthridge",
            "Vollmer Associates",
            "2 West 45th Street",
            "New York, New York",
            "YU 6-0420",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller Co."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/boysco02/line-drawing.jpg",
        width: 600,
        height: 355,
        alt: "Boy Scouts of America line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              &quot;The Wonderful World of Scouting&quot; is an exhibit and
              demonstration area as well as headquarters for the Boy Scouts
              Service Corps at the Fair. Here Boy Scouts are on duty to answer
              questions of visitors, conduct periodic ceremonies, and give
              demonstrations of Scouting activities. In addition to the static
              exhibits of Scouting purposes and programs, there are &quot;live
              expo&quot; areas displaying the activities and skills of the Boy
              Scouts. The public is permitted to try its hand at certain Scouting
              skills such as knot tying, etc. Scouting groups with special
              talents are invited to stage demonstrations in a small arena which
              is part of the facilities.
            </>
          ),
        },
        {
          body: (
            <>
              In addition, the Fair Corporation provides for the Boy Scouts a
              small office building located under the Van Wyck Expressway
              extension.
            </>
          ),
        },
        {
          body: (
            <>
              The Boy Scout Service Corps includes 130 Scouts and leaders, who
              are rotated on a staggered schedule. Explorers and Scouts 14 years
              of age and older were recruited for the Corps in groups of ten with
              an adult leader (minimum 21 years of age). Such groups of ten may
              come from a chartered Explorer Unit or Troop, or may consist of a
              combination of boys from several units where such grouping is made
              by the district Activities Committee and executive staff. In all
              cases, the leadership must be approved by the National Council.
              Each participating Scout, Explorer or leader pays $25 for a
              week&apos;s membership in the Service Corps. For further
              information, individual Scouts are referred to Chief Scout
              Executive&apos;s Bulletin No. 2, 1963 Series, dated May 16, 1963,
              issued by the National Council, Boy Scouts of America.
            </>
          ),
        },
        {
          body: (
            <>
              Boy Scout Day at the Fair for Region Two of the Boy Scouts of
              America begins Saturday, June 13, 1964. In connection with the 1964
              Boy Scout Jamboree at Valley Forge, Pennsylvania, the World&apos;s
              Fair has also designed the period July 13-16, and July 23-26 as
              &quot;Jamboree Boy Scout Week.&quot;
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/boysco02/produced-photo.jpg",
        width: 600,
        height: 336,
        alt: "Boy Scouts of America",
        bordered: true,
        title: "Boy Scouts of America",
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
