import type { Metadata } from "next";
import Link from "next/link";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Continental Circus — nywf64.com",
  description:
    "Continental Circus pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy concir01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy wording (an hour an 20, range form) preserved.
 * 1965: season note — became Continental Park (linked).
 */
export default function Concir01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Continental Circus"
      titleId="concir01-title"
      hero={{
        src: "/images/conciroverview/hero-banner.jpg",
        alt: "Continental Circus at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConcirNavChrome />}
      previousHref="/conciroverview"
      nextHref="/concir02"
      guide1964={{
        cover: {
          src: "/images/concir01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/concir01/conparlogo64.gif",
          width: 144,
          height: 98,
          alt: "",
        },
        name: "CONTINENTAL CIRCUS",
        copy: (
          <>
            A European-style one-ring circus has been assembled beneath a white
            and yellow plastic structure that seats 5,000 and has poles that do
            not obstruct the view. The complete performance lasts an hour an 20
            minutes. A circus museum with historical exhibits provides an added
            attraction at no extra charge.
          </>
        ),
        admission:
          "Admission: $1.00. Four performances daily Mondays through Wednesdays; six performances daily Thursdays through Sundays and on holidays.",
        highlights: [
          {
            label: "MAIN SHOW.",
            body: (
              <>
                Star acts recruited from all over the world range form acrobats
                to chimpanzees who play musical instruments. The American
                performers on this international roster include the Flying
                Alexanders, daredevil trapeze artists who feature hair-raising
                aerial somersaults. Members of the English Hanneford family
                perform agile equestrian feats. There are also all sorts of
                animal acts, including elephants and a gorilla that does bicycle
                tricks.
              </>
            ),
          },
          {
            label: "CIRCUS MUSEUM.",
            body: (
              <>
                A candy-striped pavilion has exhibits from the famous Ringling
                Circus Museum in Sarasota, Florida. The displays reconstruct the
                history of the circus, from the chariot contests in ancient
                Rome&apos;s Circus Maximus to the present, with particular
                emphasis on the flamboyant Barnum and Bailey period at the turn
                of the century.
              </>
            ),
          },
          {
            label: "CIRCUS PARADE.",
            body: (
              <>
                A parade marches from the circus building through the fairgrounds
                twice a day.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/concir01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Continental Circus was open for the 1964 Season. In 1965 it
            became the{" "}
            <Link href="/conpar01">Continental Park</Link>.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/concir01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/concir01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/concirmap",
      }}
    />
  );
}
