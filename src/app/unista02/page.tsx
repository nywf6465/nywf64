import type { Metadata } from "next";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — United States Pavilion — nywf64.com",
  description:
    "United States Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States Pavilion Information Manual page — “manual” standard.
 * Body from legacy unista02.html. Layout: InformationManualPage (/bell02).
 */
export default function Unista02Page() {
  return (
    <InformationManualPage
      heroLabel="United States Pavilion"
      titleId="unista02-title"
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      previousHref="/unista01"
      overviewHref="/unistaoverview"
      nextHref="/unista03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["United States Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Norman K. Winston",
            "United States Commissioner for the   Federal Pavilion",
            "United States Commission - New York World's Fair - Rm. 5896",
            "Department of Commerce",
            "Washington 25, D.C.",
            "202 DU 2-3956",
          ],
        },
        {
          label: "NEW YORK OFFICE",
          lines: [
            "Mr. Norman K. Winston, Commissioner",
            "and",
            "Mr. James J. Lyons,",
            "and Liaison officer with Fair",
            "60 West 49th Street",
            "New York 20, New York",
            "LT 1-6610",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 28, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 36; Lot 1", "State Area"],
        },
        {
          label: "AREA",
          lines: ["196,349 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Donald Wilcox",
            "Charles Luchman Assocs.",
            "9220 Sunset Blvd.",
            "Los Angeles 69, California",
            "213 CR 4-7755",
            "and",
            "Chas Luckman Assocs.",
            "680 Fifth Avenue",
            "New York 19, New York",
            "JU 6-1970",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Del E. Webb Corporation"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/unista02/us65.jpg",
        width: 600,
        height: 523,
        alt: "United States Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Ground was broken for the Federal Pavilion on Friday, December 14,
              1962, by our late, great President John F. Kennedy. On July 27,
              1962 when our late President Kennedy signed the bill appropriating
              $17,000,000 for the Pavilion, he stated &quot;that the theme
              &apos;Challenge to Greatness&apos;, will enable us to present to
              the world not a boastful picture of our unparalleled progress, but a
              picture of democracy - its opportunities, its problems, its
              inspirations and its freedoms.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              Covering more than a city block, this glitttering facade of
              multi-colored glass offers a vivd and varied view of America&apos;s
              &quot;Challenge to Greatness.&quot; Included are two films, one of
              them a dramatization of the nation&apos;s immigrant origins, the
              other a color spectacular that whisks the visitor through
              America&apos;s past to a future landing on the moon. There is also
              a modern, computer-run research library. Engraved over the
              pavilion&apos;s entrance, lines from a poem by Archibald MacLeish
              provide a keynote to the exhibit: &quot;America is never
              accomplished.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              Highlighting the Federal Paivlion&apos;s entire second floor is a
              voyage through American history, (not a dull history lesson) that
              is presented in a nine-minute cinerama-style production,
              &quot;American Journey&quot; on a series of 132 movie screens that
              slide, rise, form tunnels and explosive sounds, utilitzing some 30
              projectors, to form an exhibit yet unparalleled in film history.
              Visitors will make the &quot;voyage&quot; in 12 moving grandstands,
              each seating 56 persons. Since the circuit is continuous, a new
              group of 55 will begin the trip every 80 seconds; thus it is
              estimated that some 40,000 persons a day will be able to go through
              the pavilion.
            </>
          ),
        },
        {
          body: (
            <>
              The Federal Pavilion also features two large halls,
              &quot;Peace&quot;&nbsp;and &quot;Freedom&quot;, both of which are
              filled with illustrations depicting the American pursuit of peace
              and liberty.
            </>
          ),
        },
        {
          body: (
            <>
              &quot;
              <span className={manualStyles.u}>Challenge of Freedom</span>
              &quot; presents the effects of progress on American life.
              Automation, for example, symbolizes both production advances and the
              problems of unemployment. The displays also include
              three-dimensional examples of miracles of modern science, including
              an oscilloscope that picks up sounds made by stars and the sounds
              made by snails eating lettuce, demonstrating that the paths of pure
              science may lead anywhere.
            </>
          ),
        },
        {
          body: (
            <>
              &quot;
              <span className={manualStyles.u}>
                Challenge of a Peaceful World
              </span>
              &quot; depicts America&apos;s role in international affairs and
              looks ahead to uncharted space. Here, among other things, world
              news pours in over teletype and wirephoto machines; Peace Corpsmen
              talk about their experiences; a seismograph and a nuclear-detection
              satellite illustrate new techinques of arms control; and an
              operating model of the Mariner spaceship that made the Venus probe
              in 1962 is on display. In addition, an exhibit of children&apos;s
              art from all nations portrays the worldwide hope for peace.
            </>
          ),
        },
        {
          body: (
            <>
              Before leaving the building, visitors are offered the folowing
              services in the specially created &quot;Challenge of Information&quot;
              Library:
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Reference lists</span> on every
              subject covered in the pavilion are prepared for any one of five
              educational levels; elementary, high school, adult, college or
              graduate research. In additon, librarians use computers to provide
              listings of current periodical literature on almost any subject.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Copies of short essays</span>{" "}
              (about 700 words) are avilable on each of the 76 basic concepts of
              the U.S. Pavilion program.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>An adult reading area</span> is
              bult around the collection of books selected for the new White House
              library.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>A Children&apos;s room</span> with
              more than 2,000 domestic and 500 foreign books, also features movies
              and storytelling hours.
            </>
          ),
        },
        {
          body: (
            <>
              The Federal Pavilion was designed specifically with the intention
              of not only presenting the world the magnitude of our nation&apos;s
              progress, but to give the Americans themselves a greater insight as
              to their own ability for progress through a unifed effort toward the
              common cause of peace for all mankind. The entire exhibit is free.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/unista02/us66.jpg",
        width: 600,
        height: 339,
        alt: "United States Pavilion",
        bordered: true,
        title: "United States Pavilion",
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
