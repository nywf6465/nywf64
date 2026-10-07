import type { Metadata } from "next";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — IBM Pavilion — nywf64.com",
  description:
    "IBM Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy ibm01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Ibm01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="IBM Pavilion"
      titleId="ibm01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibmoverview"
      nextHref="/ibm02"
      guide1964={{
        cover: {
          src: "/images/ibm01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ibm01/ibmlogo64.gif",
          width: 144,
          height: 99,
          alt: "",
        },
        name: (
          <>
            INTERNATIONAL
            <br />
            BUSINESS
            <br />
            MACHINES
          </>
        ),
        copy: (
          <>
            The world of the computer and the methods both man and machine use to
            solve problems are on display in a startling white egg-shaped theater,
            90 feet high and covered with the letters IBM, repeated nearly 1,000
            times. The structure towers above 45 rust-colored metal trees;
            located in this artificial grove are exhibit courts, a maze of
            walkways suspended above a reflecting pool, and a pentagon of little
            theaters where mechanical puppets perform. The exhibit was one of the
            last projects on which the late architect Eero Saarinen worked. The
            wonders inside the ovoid building were wrought by the noted designer
            Charles Eames.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "SONGS FROM THE TREES.",
            body: (
              <>
                Perched on ramps in the metal trees, musicians entertain the
                crowds on the elevated walkways.
              </>
            ),
          },
          {
            label: "THE PEOPLE WALL.",
            body: (
              <>
                A steep grandstand entered from ramp level below the theater is one
                of the features of the exhibit. After the audience of some 500 is
                seated, the &quot;People Wall&quot; is drawn swiftly and smoothly
                up into the theater, while a narrator appears, suspended before the
                audience on a small circular platform.
              </>
            ),
          },
          {
            label: "THE INFORMATION MACHINE.",
            body: (
              <>
                Inside the theater, a 12-minute show full of visible and audible
                surprises (special lighting effects, stereophonic sound, 14 slide
                and movie projectors throwing images on screens and surfaces of
                various shapes and sizes) describes the similarity of methods that
                are used by the human mind and computers to solve problems.
                Headsets provide simultaneous translations of the English narration
                into five languages: French, German, Italian, Japanese and Spanish.
              </>
            ),
          },
          {
            label: "THEATER PENTAGON.",
            body: (
              <>
                On the little stages under the trees, mechanical figures act out
                playlets four minutes long about such topics as speed, computer
                logic and information handling systems; in one play, Sherlock Holmes
                uses computer logic to solve{" "}
                <em>The Case of the Elusive Train</em>.
              </>
            ),
          },
          {
            label: "THE PROBABILITY MACHINE.",
            body: (
              <>
                In a demonstration of the law of averages, held every 17 minutes,
                thousand of small plastic balls are dropped one by one through a
                maze of more than 450 pins. Below the pins are 21 pockets. At the
                end of every experiment, each pocket contains approximately the
                same number of balls it held the last time.
              </>
            ),
          },
          {
            label: "COMPUTERS AT WORK.",
            body: (
              <>
                Two of the most recent applications of computers are demonstrated:
                <br />
                <br />
                <em>For translation</em> an exhibit shows how technical data that
                are written in Russian can be quickly and accurately worded in
                English.
                <br />
                <br />
                <em>For character recognition</em>, a computer system is displayed
                that is programmed to recognize handwritten numerals and associate
                facts with them. The machine accepts a card with any date since
                September 18, 1851, written on it and promptly returns another card
                containing a historically significant news story in capsule form,
                taken from the <em>New York Times</em> of that date.
              </>
            ),
          },
          {
            label: "SCHOLAR'S WALK.",
            body: (
              <>
                This is a quiet area where the lore of computers and scientific
                information about them are displayed on reading stands.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/ibm01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ibm01/ibmlogo.gif",
          width: 144,
          height: 99,
          alt: "",
        },
        name: (
          <>
            INTERNATIONAL BUSINESS
            <br />
            MACHINES
          </>
        ),
        nameFace: "arial",
        summary: (
          <>
            A moving 500-seat &quot;People Wall&quot; lifts visitors into an
            egg-shaped theater for a captivating multi-screen show.
          </>
        ),
        copy: (
          <>
            Beneath the theater, fairgoers stroll through a grove of rust-brown
            steel trees. There they may watch puppet shows and see experimental
            computers, including one which translates Russian technical data into
            simple English, and another that can recall headline events of any day
            during the last 100 years. Architect of the pavilion was the late Eero
            Saarinen; the display area was designed and the film was produced by
            Charles and Ray Eames.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE PEOPLE WALL.",
            labelFace: "arial",
            body: (
              <>
                Visitors sit in a steep grandstand which is drawn up into the
                theater. An amusing 12-minute show, projected on 15 screens, shows
                how computers and the human mind solve problems in much the same
                way.
              </>
            ),
          },
          {
            label: "PUPPETS IN THE PARK.",
            labelFace: "arial",
            body: (
              <>
                In miniature Punch-and-Judy theaters mechanical figures act out
                lively playlets involving speed, logic and information-handling.
                Sherlock Holmes is featured in one, solving &quot;The Case of the
                Elusive Train.&quot;
              </>
            ),
          },
          {
            label: "SCHOLAR'S WALK.",
            labelFace: "arial",
            body: (
              <>
                Other animated exhibits demonstrate information retrieval and the
                probability theory, and there is a quiet area where the lore of
                computers, the history of mathematical machines and other scientific
                exhibits are on display.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/ibm01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/ibm01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/ibmmap",
      }}
    />
  );
}
