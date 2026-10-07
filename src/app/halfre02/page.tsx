import type { Metadata } from "next";
import { HalfreNavChrome } from "@/components/HalfreNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Hall of Free Enterprise — nywf64.com",
  description:
    "Hall of Free Enterprise pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Free Enterprise Information Manual page — “manual” standard.
 * Body from legacy halfre02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“Paviilion”, “New york”, “adminstrated”) preserved.
 */
export default function Halfre02Page() {
  return (
    <InformationManualPage
      heroLabel="Hall of Free Enterprise"
      titleId="halfre02-title"
      hero={{
        src: "/images/halfreoverview/hero-banner.jpg",
        alt: "Hall of Free Enterprise at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalfreNavChrome />}
      previousHref="/halfre01"
      overviewHref="/halfreoverview"
      nextHref="/halfre03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Hall of Free Enterprise"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Richard Rimanoczy, President",
            "American Economic Foundation",
            "51 East 42nd Street",
            "New York 17, New York",
            "MU 7-5330",
          ],
        },
        {
          label: "EXHIBIT MANAGER",
          lines: [
            "Mr. Howard A. Harkavy",
            "Harkavy Associates, Inc.",
            "29 Rolling Way",
            "New Rochelle, New York",
            "914 NE 6-6611",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Gates Davison"],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Selvage and Lee, Incorporated",
            "500 Fifth Avenue",
            "New York, New York  10036",
            "OX 5-6200",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 5, 1963 with", "International City, Inc."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 33; Lot 30",
            "International Plaza",
            "International Area",
          ],
        },
        {
          label: "AREA",
          lines: ["5,000 sq. ft. in the", "International Plaza"],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Ira Kessler",
            "Ira Kessler Associates",
            "25 West 43rd Street",
            "New york 36, New York",
            "WI 7-0787",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "The Displayers, Inc.",
            "635 West 54th Street",
            "New York 19, New York",
            "PL 7-6500",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Hegeman-Harris Co., Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/halfre02/halfre02.jpg",
        width: 600,
        height: 231,
        alt: "Hall of Free Enterprise",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Hall of Free Enterprise, sponsored by The American Economic
              Foundation, will consist of a single-story steel and concrete
              building. Fronting the building and resting upon a raised platform
              will be 10 Doric columns, the &quot;Ten Pillars of Economic
              Wisdom.&quot; The facade connecting the pillars will be inscribed,
              &quot;The Greatest Good for the Greatest Number&quot;, and will
              support an arch, bearing a gas-burning torch, &quot;To Tell the
              Truth to all the World.&quot;
            </>
          ),
        },
        {
          body: <>The Paviilion will include:</>,
        },
        {
          label: '"Mr. Both Comes to Town"',
          body: (
            <>
              When entering the Hall the visitors will be seated in an
              &quot;audience in the round&quot;, so called because the entire
              wall area is a circular stage with settings of different buildings
              in a small town. A play takes place in or around these buildings.
              The seats swivel, permitting the audience to follow the
              progression. The leading character, a wire sculpture figure, is
              &quot;Mr. Both&quot;, so called because he is both the conflicting
              personalities that are in every person: the worker who wants more
              and more pay, and the customer who wants to buy more for less and
              less. The audience, which identifies itself with the unemployed
              workers in the town, actually become part of the cast. Mr. Both
              explains a series of economic truths and the factors of
              production.
            </>
          ),
        },
        {
          label: "The Tree of Economic Life",
          body: (
            <>
              represents a detailed account of the story of production. It grows
              in &quot;soil&quot; composed of all the natural resources which
              make possible man&apos;s life on earth. The tree revolves, and
              there will be narration by live female &quot;gardeners&quot;.
            </>
          ),
        },
        {
          label: "The Push-Button Question and Answer Board",
          body: (
            <>
              lists and mechanically answers, with printed slips 120 questions
              concerning economics. The questions are changed from time to time
              depending upon the customers&apos; demand for specific answers.
            </>
          ),
        },
        {
          label: "The Flow of Corporate Funds Chart",
          body: (
            <>
              will be a large 3-dimensional animated wall panel designed by Dr.
              Arthur Dahlberg, Director of the Visual Economic Laboratory at
              Columbia University. Dr. Dahlberg&apos;s revolutionary flow
              charts, which first appeared in his book, <em>Money in Motion</em>
              , have opened a new approach to the popular understanding of
              money. The Panel under discussion combines several of his previous
              charts plus a new factor-the final costs of total corporate
              production in terms of outside purchases, payroll and benefits,
              depreciation, taxes, rent, interest and profit.
            </>
          ),
        },
        {
          label: "Enterprise Economic Workshop",
          body: (
            <>
              This graduate level course adminstrated by Adelphi University in
              the Hall of Free enterprise will grant credits toward a
              master&apos;s degree. Information may be obtained by contacting
              Adelphi University, Garden City, New York.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/halfre02/halfre01.jpg",
        width: 600,
        height: 364,
        alt: "Hall of Free Enterprise",
        bordered: true,
        title: "Hall of Free Enterprise",
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
