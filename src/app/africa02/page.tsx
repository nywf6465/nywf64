import type { Metadata } from "next";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Africa — nywf64.com",
  description:
    "Africa Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Africa Information Manual page — “manual” standard.
 * Body from legacy africa02.html. Layout: InformationManualPage (/bell02).
 */
export default function Africa02Page() {
  return (
    <InformationManualPage
      heroLabel="Africa"
      titleId="africa02-title"
      hero={{
        src: "/images/africaoverview/hero-banner.jpg",
        alt: "Africa pavilion at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AfricaNavChrome />}
      previousHref="/africa01"
      overviewHref="/africa01"
      nextHref="/africa03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Africa Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. DeWitt T. Yates, President",
            "The African Pavilion, Inc.",
            "470 Bender Building",
            "1120 Connecticut Ave., N. W.",
            "Washington 6, D. C.",
            "202 965-1377",
            "and",
            "Mr. Ray T. Graham, Producer",
            "Graham Associates, Inc.",
            "Shoreham Building",
            "Washington 5, D. C.",
            "202 347-2837",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Lionel Harris"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 8, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 32; Lot 9", "International Area"],
        },
        {
          label: "AREA",
          lines: ["56,014 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Kahn and Jacobs",
            "2 Park Avenue",
            "New York 17, New York",
            "OR 9-3932",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Crow Construction Company"],
        },
        {
          label: "ADMISSION",
          lines: ["Adults $1.00"],
        },
      ]}
      primaryFigure={{
        src: "/images/africa02/line-drawing.jpg",
        width: 600,
        height: 289,
        alt: "Africa Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The African Pavilion is designed to provide the nations of Africa
              with an &quot;unprecedented opportunity to present the dramatic and
              colorful pageant of their history, their culture and artistic
              heritage, and their social, economic and political achievements and
              aspirations.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion will include a film presentation of the history of
              Africa to the present; a Hall of Aspirations displaying the
              resources and economic development potential of Africa and the art
              and culture of its people, and a wild life exhibit where the birds
              and animals of Africa will be seen in their native habitat. Popular
              attractions will include baby elephants, a lion&apos;s den where
              visitors may be photographed with the lions, and a monkey island.
              Food and refreshments will be served in a multi-level Tree-House
              bar and restaurant, overlooking an outdoor stage where dancing,
              singing and African drumming will be presented.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/africa02/produced-photo.jpg",
        width: 600,
        height: 358,
        alt: "The African Pavilion",
        bordered: true,
        title: "The African Pavilion",
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
