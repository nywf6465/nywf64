import type { Metadata } from "next";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Continental Circus — nywf64.com",
  description:
    "Continental Circus pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus Information Manual page — “manual” standard.
 * Body from legacy concir02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (cowns, Mueum, phtographs, inc.) preserved.
 */
export default function Concir02Page() {
  return (
    <InformationManualPage
      heroLabel="Continental Circus"
      titleId="concir02-title"
      hero={{
        src: "/images/conciroverview/hero-banner.jpg",
        alt: "Continental Circus at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConcirNavChrome />}
      previousHref="/concir01"
      overviewHref="/conciroverview"
      nextHref="/concir03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Continental Circus and the Circus Museum"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Mr. Harry S. Dube, Treasurer",
            "Continental Circus, Incorporated",
            "10 Rockefeller Plaza",
            "New York 20, New York",
            <>CO&nbsp;5-7035</>,
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Kane"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 6, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Adults and Children", "$1.00, $2.00 and $3.00"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 58 Lot 1", "Lake Amusement Area"],
        },
        {
          label: "AREA",
          lines: ["86,521 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Samuel S. Arlen, A.I.A.",
            "211 East 43rd Street",
            "New York 17, New York",
            "MO 1-2885",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Continental Circus, inc."],
        },
        {
          label: "PERFORMANCE TIMES",
          lines: [
            "Weekdays . . . . . 2 shows daily",
            "Week ends . . . . . 4 shows daily",
            "Holidays . . . . . . . 4 shows daily",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/concir02/concir03.jpg",
        width: 600,
        height: 339,
        alt: "Continental Circus pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Continental Circus is presenting a Continental-type One-Ring
              Circus in a circular and colorful vinyl-plastic building. The white
              and yellow colored roof is suspended from huge steel towers
              eliminating all tent poles thus assuring spectators unobstructed
              views. The steel grandstand seats over 5,000 and is fitted with
              comfortable theatre seats, many of which are upholstered. The
              seating arrangement is unusual and is being used for the first
              time. The circular arena is divided into four concentric circles
              and the seats are colored gold, red, white and blue. Each color is
              keyed to the color of patrons&apos; tickets, thus helping them to
              find their seat locations quickly and without confusion.
            </>
          ),
        },
        {
          label: "Circus",
          body: (
            <>
              The performance is a fast moving production featuring acts and
              performers from all parts of the world. It is replete with
              principal performers, aerialists in sheer dare-deviltry and
              rib-tickling cowns in their own funny, foolish fashion. To all
              this is added that element which always spells circus...animals.
              There are elephants, horses, chimpanzees and performing dogs. The
              circus band in sartorial splendor blares forth &quot;Music to See
              By&quot;...fanfares, drum rolls, marches, gallops, polkas and
              popular tunes.
            </>
          ),
        },
        {
          body: (
            <>
              As an added feature, the Circus Parade is staged daily and twice
              on Saturdays, Sundays and Holidays, starting at the Circus building
              in the Amusement Area and continuing its route through other Fair
              Areas.
            </>
          ),
        },
        {
          label: "Museum",
          body: (
            <>
              In a separate structure, adjacent to the main building, the Circus
              Mueum displays priceless Circusiana treasures such as carved and
              gilded parade and band wagons, dioramas of circuses and street
              parades in miniature, costumes worn by prominent performers,
              colorful posters, lithographs and phtographs. These are all loaned
              by the Internationally known Circus Museum of the John and Mabel
              Ringling Museum of Art in Sarasota, Florida.
            </>
          ),
        },
      ]}
    />
  );
}
