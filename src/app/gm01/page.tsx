import type { Metadata } from "next";
import { GmNavChrome } from "@/components/GmNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — General Motors — nywf64.com",
  description:
    "General Motors Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy gm01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Single Locate It → /gmmap (Transportation trasmlmap.gif).
 */
export default function Gm01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="General Motors Pavilion"
      titleId="gm01-title"
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gmoverview"
      nextHref="/gm02"
      guide1964={{
        cover: {
          src: "/images/gm01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/gm01/genmotlogo64.gif",
          width: 144,
          height: 90,
          alt: "",
        },
        name: "GENERAL MOTORS",
        copy: (
          <>
            A detailed knowledgeable look at the technological developments
            awaiting mankind is provided by this exhibitor, who performed the
            same service at the New York World&apos;s Fair of 1939. The
            predictions are all solidly based on fact; they picture, among other
            things, a visit to the moon, a year-round commercial harbor in the
            Antarctic, a vacation resort located underwater and some surprising
            aspects of the city of the future. The GM pavilion, one of the most
            eye-catching at the Fair, is keynoted by an enormous slanting canopy
            110 feet high, balanced, by some architectural legerdemain, over the
            entrance to the exhibit area. In addition to the Futurama, displays
            show the range of research conducted by GM as well as the variety of
            products made by the company (automobiles through home appliances).
            There are three experimental cars and five dream kitchens.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE NEW FUTURAMA.",
            body: (
              <>
                In this updated version of GM&apos;s classic ride into the
                future, visitors sit in individual plastic contour seats
                equipped with speakers that supply a narration. The seats move
                along a track that alternately dips and climbs though the two
                floors of the exhibition hall.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>A trip to the moon</em> starts the ride taking the visitor
                past a scale model whose craters and canyons are dotted with
                manned &quot;lunar-crawlers&quot; and commuter space ships.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Life under the ice</em> is depicted in a display that shows
                an all-weather port cut deep into the Antarctic ice shelf. Under
                the ice cap is a weather station, where technicians prepare
                forecasts embracing whole continents.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>In an underwater scene</em>, drills tap the ocean floor for
                oil, minerals are hauled away by submarine train, and vacationers
                relax in a suboceanic resort and, equipped with oxygen, ride
                about outside on &quot;aqua-scooters.&quot;
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Visiting the jungle</em>, spectators see a machine that fells
                towering trees with searing laser light. A road builder, scaled
                to appear five stories high and longer than three football
                fields, follows the timber-cutter. It levels and grades, leaving
                a divided, multilane superhighway in its path. The road serves a
                city that processes the products (lumber, chemicals and farm
                commodities) drawn from the tamed jungle.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>In the desert</em>, crops thrive in soil irrigated with
                subterranean or desalted sea water. Machines operated by remote
                control plant and harvest the crops.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The city of the future</em> is shown complete with midtown
                airports, high-speed bus-trains, superskyscrapers, moving
                sidewalks and underground conveyor belts for freight. Around the
                city is part of an intercontinental highway.
              </>
            ),
          },
          {
            label: "THE AVENUE OF PROGRESS.",
            body: (
              <>
                GM&apos;s scientific pursuits, as depicted in this exhibit, range
                from space age research to product engineering. A cosmic space
                chamber, applications of solar energy and turbine engines are
                displayed, as are new uses of metals, plastics and fabrics. There
                are also examples of the latest techniques in automotive design.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/gm01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/gm01/genmotlogo.gif",
          width: 144,
          height: 90,
          alt: "",
        },
        name: "GENERAL MOTORS",
        summary:
          "In the Futurama, fairgoers are taken on visits to the moon, to a year-round commercial harbor in the Antarctic, to an underwater resort and to a city of tomorrow.",
        copy: (
          <>
            The eye-catching pavilion is dominated by an enormous slanting
            canopy. Exhibits show the range of GM&apos;s research activities and
            a vast variety of its products, including three experimental cars.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE NEW FUTURAMA.",
            labelFace: "arial",
            body: (
              <>
                GM&apos;s classic ride, which it pioneered at the 1939/1940 Fair,
                is presented in an updated version. Sitting in contour seats
                equipped with speakers, visitors move past animated scenes.
                <br />
                <br />
                In a trip to the moon, visitors see a weird landscape of craters
                and spaceships.
                <br />
                <br />
                Life under the ice is depicted by an all-weather port cut deep
                into the Antarctic ice shelf.
                <br />
                <br />
                An underwater scene shows the ocean floor being tapped for oil
                and vacationers relaxing at a resort beneath the surface.
                <br />
                <br />
                Visiting the jungle, spectators see trees felled by searing laser
                beams. A monster road-building machine follows, leaving in its
                path an elevated superhighway.
                <br />
                <br />
                In the desert, crops thrive in soil irrigated by desalted sea
                water. Machines operated by remote control plant and harvest the
                crops.
                <br />
                <br />
                Tomorrow&apos;s city is shown with midtown airports, high-speed
                bus-trains, superskyscrapers, moving sidewalks and underground
                freight conveyor belts.
              </>
            ),
          },
          {
            label: "AVENUE OF PROGRESS.",
            labelFace: "arial",
            body: (
              <>
                Among the displays are a cosmic spark chamber, fuel-cell
                developments and a turbine engine, as well as innovations in
                metals, plastics and fabrics, and new techniques in the designing
                of cars.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/gm01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/gm01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/gmmap",
      }}
    />
  );
}
