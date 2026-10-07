import type { Metadata } from "next";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Hawaii — nywf64.com",
  description:
    "Hawaii pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii Information Manual page — “manual” standard.
 * Body from legacy hawaii02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“surroudning”, “srrounding”, “ot fashion”, “tapa,hand”,
 * “Alohatheatre”, “Five Volcanos”) preserved.
 */
export default function Hawaii02Page() {
  return (
    <InformationManualPage
      heroLabel="Hawaii"
      titleId="hawaii02-title"
      hero={{
        src: "/images/hawaiioverview/hero-banner.jpg",
        alt: "Hawaii at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HawaiiNavChrome />}
      previousHref="/hawaii01"
      overviewHref="/hawaiioverview"
      nextHref="/hawaii03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Hawaii, State of"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. James K. Kealoha, Exec. Director",
            "Hawaii World's Fair Commission",
            "World's Fair, New York  11380",
            "AR 1-1212-13-14",
          ],
        },
        {
          label: "EXHIBIT MANAGER",
          lines: [
            "Mr. Herbert Honig",
            "Hawaii Pavilion",
            "World's Fair, New York  11380",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Michael Pender"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 29, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 55; Lot 2",
            "Meadow Lake Promenade",
            "Lake Area",
          ],
        },
        {
          label: "AREA",
          lines: ["121,696 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Reino Aarnio",
            "244 Madison Avenue",
            "New York, New York 10016",
          ],
        },
        {
          label: "MUSEUM",
          lines: [
            "The Bishop Museum",
            "Dr. Roland Force, Director",
            "Honolulu, Hawaii",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Gilbane Building Company"],
        },
        {
          label: "ADMISSION",
          lines: ["25c"],
        },
        {
          label: "THEATRE",
          lines: ["General  $1.00"],
        },
        {
          label: "CANOE RIDE",
          lines: ["Adults  $1.00", "Children  .50"],
        },
      ]}
      primaryFigure={{
        src: "/images/hawaii02/hawaii06.jpg",
        width: 600,
        height: 266,
        alt: "Hawaii pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Hawaiian Exhibit, with a 100 feet of water frontage, has been
              designed to display the utmost of the beauties of this Pacific
              Paradise. The surroudning area is landscaped with flowers and
              plants native to the islands. The theme of the exhibit is
              &quot;Aloha.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              At the northwest corner of the site is the Akua or Tiki Tower
              which is 80 feet high and has a traditional Hawaiian design facing
              in two directions. Above the base and srrounding the tower is a
              ring of 6 flaming torches. From the base is a ring of ceremonial
              Kahili standards which are illuminated at night.
            </>
          ),
        },
        {
          body: (
            <>
              The columns of the{" "}
              <span style={{ textDecoration: "underline" }}>
                Aloha Theme Pavilion
              </span>{" "}
              rise from a reflecting pool crossed by a bridge. The entrance has
              a <span style={{ textDecoration: "underline" }}>waterfall</span>{" "}
              and a Ku figure from Polynesian mythology. This building contains
              exhibits tracing the{" "}
              <span style={{ textDecoration: "underline" }}>history</span> of
              Hawaii from the arrival of the Polynesian people a thousand years
              ago through to 1893. The historical development of Hawaiian
              agriculture is also traced and the influx of Chinese, Japanese,
              Filipinos, Portuguese and Americans to the island is portrayed.
              The present-day sociological harmony of Hawaii is shown throughout
              as a part of the overall &quot;Spirit of Aloha&quot; which governs
              the exhibit. Hawaiians of various national and ethnic derivations
              are depicted in government, industry, agriculture, education, and
              all other walks of life. Other exhibits include the story of
              government and statehood, Hawaii&apos;s role as a bastion of U.S.
              defense in the Pacific, the cultural life of Hawaii and the
              current development of new &quot;think industries&quot; in the
              state. This story is re-enacted and narrated by Receptionist-Guides
              in Hawaiian 19th Century gowns.
            </>
          ),
        },
        {
          body: (
            <>
              The{" "}
              <span style={{ textDecoration: "underline" }}>
                Tourism and Industrial
              </span>{" "}
              exhibits are approached by means of an elevated walkway. Color
              slides showing tourism and travel as well as the Hawaii Visitors
              Bureau Information booth are in this area. Various Hawaiian
              industries and businesses contribute to communicate the healthy
              growth of business and industry in Hawaii and the opportunities
              for future industrial and commercial development.
            </>
          ),
        },
        {
          body: (
            <>
              The{" "}
              <span style={{ textDecoration: "underline" }}>Restaurant</span> of
              the Five Volcanos, the Lava Pit Bar and the Sandwich Isle Bar
              serve Hawaiian specialties in an authentic style and setting. In
              addition, the famous{" "}
              <span style={{ textDecoration: "underline" }}>Luau</span> feast of
              Hawaii, is featured daily at 6:30 p.m. The Luau includes the
              dinner of imported fruits and foods and all the rum punch one can
              drink, together with the re-enactment of ancient Hawaiian rituals
              and Polynesian entertainment.
            </>
          ),
        },
        {
          body: (
            <>
              The Hawaiian Exhibit has a series of 5{" "}
              <span style={{ textDecoration: "underline" }}>shops</span>{" "}
              accessible from the main roadway and also from within the exhibit
              area. Hawaiian merchandise, such as arts and crafts, fabrics and
              fashions, foods and flowers and a decorator shop are features in
              this area. A giant live{" "}
              <span style={{ textDecoration: "underline" }}>orchid tree</span>{" "}
              reaches the ceiling in the Orchids of Hawaii International Gift
              Shop.
            </>
          ),
        },
        {
          body: (
            <>
              An ancient{" "}
              <span style={{ textDecoration: "underline" }}>
                Hawaiian Village
              </span>
              , similar to the popular Ulu Mau Village in Honolulu is
              constructed directly behind the Hawaiian shops and fronting on
              Meadow Lake. Lei, tapa,hand quilt, feather and wood crafts are
              demonstrated in this village as is the making of poi. There is a
              staff of 8 women in the village and five canoe operators.
            </>
          ),
        },
        {
          body: (
            <>
              One-hour performances of Hawaiian music and dance take place in
              the{" "}
              <span style={{ textDecoration: "underline" }}>Alohatheatre</span>{" "}
              adjacent to the Ulu Mau Village and the industrial exhibits. The
              stage also lends itself ot fashion shows and other special events.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/hawaii02/hawaii05.jpg",
        width: 600,
        height: 357,
        alt: "State of Hawaii",
        bordered: true,
        title: "State of Hawaii",
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
