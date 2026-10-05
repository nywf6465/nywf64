import type { Metadata } from "next";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Chrysler — nywf64.com",
  description:
    "Chrysler pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy chrysler01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /chryslermap (Transportation Area).
 * Legacy wording (attractin, wihich) preserved.
 */
export default function Chrysler01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Chrysler"
      titleId="chrysler01-title"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysleroverview"
      nextHref="/chrysler02"
      guide1964={{
        cover: {
          src: "/images/chrysler01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chrysler01/logo1964.gif",
          width: 144,
          height: 49,
          alt: "",
        },
        name: "CHRYSLER",
        copy: (
          <>
            A 100-foot engine with a 50-foot dragon for a crankshaft, a ride on a
            production line and a zoo of metallic monsters are part of this
            imaginative exhibit, one of the largest at the Fair, assembled on
            five islands linked by bridges and set in a six-acre artificial lake.
            Four of the islands demonstrate specific aspects of Chrysler&apos;s
            work: engineering, production, styling and operations. The fifth is a
            large theater in which puppets present a continuous show. Other
            features are a giant rocket poised on the lake, symbolizing the
            company&apos;s space and missile work, and more than a thousand
            umbrella-shaded chairs for visitors, which are set around the
            perimeters of the islands.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "ENGINEERING ISLAND.",
            body: (
              <>
                Prime attractin is the vast engine, a structure with a huge
                revolving fan in front and an air filter on top, 55 feet up.
                Visitors walking through its innards see a writhing dragon with
                snapping jaws, which drives pistons weighing nearly a ton apiece.
                A turbine engine developed by Chrysler is on display, and a
                montage shows the sources of energy that may drive engines of the
                future.
              </>
            ),
          },
          {
            label: "PRODUCTION ISLAND.",
            body: (
              <>
                Seated in 12 car bodies, visitors travel along an assembly line
                which winds through and around an open-sided structure. Mechanical
                workmen line the ride, and both visitors and car bodies receive an
                &quot;O.K.&quot; in a quality-control center.
                <br />
                <br />¶ A metallic menagerie, in wihich creatures made of car
                parts squeak and squeal with the sounds of metal on metal, is also
                on the island. A 12-foot mantis flashes light from its
                car-reflector antenna; a 12-foot crawler is made of roof panels
                and hoods. The zookeeper stands two stories tall.
              </>
            ),
          },
          {
            label: "DESIGN ISLAND.",
            body: (
              <>
                A giant car, 80 feet long from bumper to bumper, with wheels more
                than 20 feet high, dominates the island. Underneath the car, which
                sits seven feet above the ground, is an exhibit area in which
                visual displays stress the company&apos;s automotive styling.
              </>
            ),
          },
          {
            label: "OPERATIONS ISLAND.",
            body: (
              <>
                Eight-foot-high animated characters show the world-wide operations
                of Chrysler other than automotive manufacturing.
              </>
            ),
          },
          {
            label: "PUPPET SHOW.",
            body: (
              <>
                A 24-minute musical comedy, with puppets designed by Bil Baird, is
                presented continuously on the fifth island in a theater which is
                constructed in the shape of the company&apos;s Pentastar symbol.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/chrysler01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chrysler01/logo1965.gif",
          width: 144,
          height: 45,
          alt: "",
        },
        name: "CHRYSLER",
        nameFace: "arial",
        summary: (
          <>
            The exhibit was designed especially for children, with a puppet show,
            a giant car, and other exhibits set on islands in a large man-made
            lake.
          </>
        ),
        copy: (
          <>
            Various aspects of the automotive world come to life in whimsical
            animated models. Chairs around the lake encourage visitors to relax
            and enjoy the Fair.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "PUPPET SHOW.",
            body: (
              <>
                This 20-minute exercise in musical whimsey was designed by
                puppeteer Bil Baird. It is continuously performed on a novel
                revolving stage.
              </>
            ),
          },
          {
            label: "WALK-IN ENGINE.",
            body: (
              <>
                Dominating the display is a giant &quot;one-million
                horsepower&quot; engine through which visitors walk. Its
                crankshaft is a fearsome dragon with snapping jaws. The real world
                is represented by a turbine engine and a montage of power plants
                of the future.
              </>
            ),
          },
          {
            label: "AIRBORNE RIDE.",
            body: (
              <>
                Seated in car bodies, visitors travel through the air along a
                simulated assembly line. Mechanical men wielding huge instruments
                &quot;check&quot; each auto for imperfections. Nearby is a
                metallic &quot;zoo&quot; where creatures made of auto parts
                cavort.
              </>
            ),
          },
          {
            label: "AN ANTIC AUTO.",
            body: (
              <>
                Guests walk through a capriciously designed mammoth car to examine
                its antic accessories and giant components.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/chrysler01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/chrysler01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/chryslermap",
      }}
    />
  );
}
