import type { Metadata } from "next";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — General Electric — nywf64.com",
  description:
    "General Electric Progressland entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric Information Manual page — “manual” standard.
 * Body from legacy genele02.html. Layout: InformationManualPage (/bell02).
 * Preserve legacy typos (progresss, descening).
 */
export default function Genele02Page() {
  return (
    <InformationManualPage
      heroLabel="General Electric Pavilion"
      titleId="genele02-title"
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele01"
      overviewHref="/geneleoverview"
      nextHref="/genele03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: [
            "General Electric \"Progressland\""
          ],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Steven C. Van Voorhis, Manager",
"World's Fair Operations",
"General Electric Company",
"570 Lexington Avenue",
"New York 22, New York",
"PL 1-1311, Ext. 2217"
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: [
            "Miss Phyllis Adams"
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: [
            "September 8, 1961"
          ],
        },
        {
          label: "ADMISSION",
          lines: [
            "Free"
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 11; Lot 9",
"Industrial Area"
          ],
        },
        {
          label: "AREA",
          lines: [
            "57,930 sq. ft."
          ],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Welton Becket Associates",
"300 Park Avenue",
"New York 22, New York",
"PL 1-1540"
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "WED Enterprises, Inc.",
"477 Madison Avenue",
"New York 22, New York",
"PL 9-3880"
          ],
        },
        {
          label: "CONTRACTOR",
          lines: [
            "Turner Construction Co."
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/genele02/ge135.jpg",
        width: 600,
        height: 324,
        alt: "General Electric Progressland — World's Fair Information Manual",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The theme of the General Electric &quot;Progressland&quot; Pavilion is the ways in which electricity, put to use for human betterment, is changing our world and our lives.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              Rising 80 feet, the three story pavilion is topped by a 200-foot diameter dome, identified in architectural terms as a &quot;curvilinear lamella&quot; design. The exterior of the dome is crowned with more than 1,000 lights providing a special night-time effect in which the entire roof will seem to turn. The lights are programmed in a sweeping, rotary motion, producing an impressive display of changing colors.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              Visitors enter the white and blue structure on a moving ramp which takes them directly to the second floor&apos;s &quot;Carousel of Progress&quot;. The second floor contains a six section auditorium, designed to accommodate several audiences at one time each watching shows on different stages. Seating 1,500 persons, the entire six section auditorium moves as a single unit around the stationary stages, remaining before each stage three to four minutes. As the auditorium moves, the whole second floor area -- viewed from outside - appears to rotate. The presentation dramatizes, through electronically-controlled animated figures, the contribution of electricity to the progresss of better living in America, from the Gay Nineties to the Fair years.
            </>
          ),
        },
        {
          body: (
            <>
              A &quot;time tube&quot; equipped with a moving ramp takes visitors from the &quot;Carousel of Progress&quot; to the third floor, where they pass through a &quot;Corridor of Mirrors&quot; illustrating advanced work in General Electric laboratories.
            </>
          ),
        },
        {
          body: (
            <>
              Visitors then enter the huge observation area directly beneath the dome. The Skydome Spectacular is the epic story of man&apos;s efforts to control and use the new energy sources of nature for the benefit of all. The visitors pass onto the dome terrace, as lightning flashes overhead on the largest projection screen in the world. Under the spell of Walt Disney&apos;s artistry, the visitors see first the long struggle of man through the centuries: learning to make fire serve them, using fire to make steam, using steam to generate electricity, gaining power of the atom. At the climax of the show, the visitors see thermonuclear fusion, the basic process by which the sun and stars achieve their tremendous energy. During this first public demonstration of thermonuclear fusion, the audience gathers along a spiral down-ramp descening an 80-foot well at the center of Progressland. Visitors witness a three-minute countdown which is accompanied by both explanatory narration and visual displays. They see a sudden brilliant burst of light and crash of discharging high voltage that echoes and re-echoes through the centerwell. Graphic evidence of the fusion reaction is shown on large oscilloscope screens, and electric digital-counters record the actual number of neutrons released during each experiment.
            </>
          ),
        },
        {
          body: (
            <>
              Passing through the arch to the ground floor, the visitors see a city spread before them -- Medallion City. Intriguing homes, stores, a town hall, civic and industrial buildings, and even a newsreel theatre invites inspection. The newsreel theatre presents a program, not more than eight minutes in length, featuring up to six stories. The Appliance Store displays major appliances, housewares, and home entertainment products. The GE all-electric home and Hotpoint all-electric home are represented.
            </>
          ),
        },
        {
          body: (
            <>
              The private VIP Lounge is entered by a private elevator located in the tower at the rear of the pavilion. The VIP Lounge, located on the third floor, accommodates 40 persons. There is a small meeting room, seating 20 persons, equipped with 2 by 2 slide projector, a 16mm film projector, and other audio-visual aids. Special closed-circuit television permits views of exhibits elsewhere in the pavilion. Visitors to the VIP Lounge can be assigned portable pocket size FM receivers - with their own individual code signal so they can be paged elsewhere in the building. The VIP Lounge provides coffee and cakes at all times.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/genele02/ge136.jpg",
        width: 600,
        height: 365,
        alt: "General Electric Progressland pavilion",
        bordered: true,
        title: "General Electric Progressland",
        source: (
          <>
            Source: NY World&apos;s Fair Publication 
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
