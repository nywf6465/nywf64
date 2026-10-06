import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola Information Manual page — “manual” standard.
 * Body from legacy coke02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (to her the calls, Rio de Janerio) preserved.
 */
export default function Coke02Page() {
  return (
    <InformationManualPage
      heroLabel="Coca-Cola"
      titleId="coke02-title"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke01"
      overviewHref="/cokeoverview"
      nextHref="/coke03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Coca-Cola Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Harold Sharp, Vice President",
            "The Coca-Cola Company",
            "P.O. Box 1734",
            "Atlanta 1, Georgia",
            <>404 TR&nbsp;5-3411</>,
            "and",
            "Mr. Wayne McConnell, Manager",
            "National Sales",
            "405 Lexington Avenue",
            "New York 17, New York",
            <>MU2-5761</>,
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 21, 1961"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 17; Lot 2", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["46,314 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Welton, Becket & Assocs.",
            "300 Park Avenue",
            "New York 22, New York",
            "PL1-1540",
          ],
        },
        {
          label: "EXHIBIT DESIGNER",
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
      ]}
      primaryFigure={{
        src: "/images/coke02/coke12.jpg",
        width: 600,
        height: 467,
        alt: "Coca-Cola pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Theme of the Coca-Cola Exhibit is &quot;World of
              Refreshment&quot;.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The two story building will be elliptical in form, with a center
              court. White sculptural arch forms support a gold screen at the
              street facade framing the main entrance. Visitors will enter the
              building via a wide ramp into a breathtaking forecourt framed by a
              series of ten arches which will repeat the exterior of the building
              arches, but on a larger scale. Soft blues and greens will contrast
              with the white arches and gold screen. The entire exhibition will
              be surrounded by a moat-like pool.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The exhibit will feature a free global holiday, taking visitors on
              a simulated trip around the world. They will not only view six
              exotic scenes, but also smell, hear, taste and touch the places
              visited. The visitor first will be taken to Hong Kong, where he
              will hear the sound of people mingling with the sound of
              windbells, the clatter of rickshaws on cobblestone streets. From
              there the visitor will be taken to view the Taj Mahal in
              moonlight. Then off to a Bavarian ski lodge and the smell and feel
              of a blazing fireplace, and then a tropical forest in Cambodia to
              her the calls of birds and chatter of monkeys. The fifth scene
              will place the visitor on an ocean liner off Rio de Janerio where
              he will feel the motion of the ship and taste the salt spray. And
              finally, he will visit New Orleans for the Mardi Gras.
            </>
          ),
        },
        {
          body: (
            <>
              The three-sided Tower of Music, as large as a 12-story building,
              will rise 120 feet. The tower will be the musical voice of the
              Fair, and will strike the time of day. Its tones will be heard
              throughout the Fair. The Tower of Music will house a 610-bell
              electronic carillon. It will be the largest carillon in the world.
              At various heights in the tower will be banks of speakers which
              will cover the full range and frequency, thereby creating a true
              outdoor hi-fi effect. The console will be completely enclosed in
              glass, permitting visitors to view the musician as he performs.
              Recitals of a wide variety of musical programs with full
              orchestration will be given several times each day by famous
              carillonneurs from all over the world.
            </>
          ),
        },
        {
          body: (
            <>
              Another aspect of the Coca-Cola pavilion is a communication center
              installed by the American Radio Relay League, the national
              non-profit membership association of 100,000 amateur radio
              operators which will celebrate its 50th anniversary during the
              opening of the Fair. Amateur operators, upon presentation of
              credentials, will be allowed to broadcast from the studio to other
              amateurs throughout the world. Educational information regarding
              the scientific hobby will be available. Visitors to the pavilion
              will be able to watch and listen in on these foreign
              communications.
            </>
          ),
        },
        {
          body: (
            <>
              A USO World&apos;s Fair referral and information lounge to
              accommodate military personnel and their dependents will occupy
              1,110 square feet of space in the exhibit. Plans call for a direct
              tie-line between the USO Times Square Club and the USO World&apos;s
              Fair Club. It is estimated that one million American and Allied
              Service personnel and their families will use the facilities during
              the 1964-1965 seasons.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/coke02/coke54.jpg",
        width: 600,
        height: 360,
        alt: "The Coca-Cola Company",
        bordered: true,
        title: "The Coca-Cola Company",
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
