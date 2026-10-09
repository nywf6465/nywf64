import type { Metadata } from "next";
import { FordNavChrome } from "@/components/FordNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Ford — nywf64.com",
  description:
    "Ford entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy ford01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Ford01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Ford Pavilion"
      titleId="ford01-title"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/fordoverview"
      nextHref="/fordmanual"
      guide1964={{
        cover: {
          src: "/images/ford01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ford01/ford-logo-1964.gif",
          width: 144,
          height: 83,
          alt: "",
        },
        name: "FORD",
        copy: (
          <>
            The Ford Rotunda, several city blocks long, contains a variety of
            exhibits, a number of which were designed by Walt Disney: fragile
            scale models of historic settings; huge figures of animated
            dinosaurs; displays of the latest wonders of science; and a paradise
            for automobile enthusiasts, featuring Ford-built cars of all kinds -
            antique, new, experimental, foreign-made. The building itself is one
            of the chief sights: a glass rotunda with 64 towering pylons at one
            end and a large exhibition hall at the other. Enough steel went into
            its construction to erect a skyscraper 125 feet square and 22 stores
            high. The emphasis everywhere is on cars. Part of the tour of the
            rotunda is made in automatically operated Ford-built convertibles
            riding on a special roadway.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "INTERNATIONAL GARDENS.",
            body: (
              <>
                Tiny, hand-built scale models reproduce Colonial America, Merrie
                England, Aztec Mexico and medieval Europe - in all, 11 different
                lands of past and present. Settings include flowing streams,
                chiming clocks, spinning windmills and original music in the
                tradition of each land.
              </>
            ),
          },
          {
            label: "THE MAGIC SKYWAY.",
            body: (
              <>
                Seated in convertibles, fairgoers are first taken for a ride
                through plastic tunnels around the outside of the rotunda for a
                sweeping view of the grounds, then on to the exhibit building and
                the fantasyland within.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The dawn of life on earth</em> is seen first with huge
                dinosaurs engaging in combat while primitive creatures soar
                overhead. Life-sized cavemen appear, in a triumph of electronic
                animation.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>In the Space Age, </em> the fairgoer finds himself gliding on
                a superskyway over a City of Tomorrow with towering metal spires
                and the glittering glass of &quot;bubble-dome&quot; buildings.
              </>
            ),
          },
          {
            label: "FIELDS OF SCIENCE.",
            body: (
              <>
                A separate &quot;Hall of Science&quot; highlights some of the
                prime research projects engaging scientists at Ford and Philco (a
                Ford subsidiary). Included here are demonstrations of laser
                light; the sound of stars as picked up by radio telescope; and
                displays of the new vinyls, crystals and metals to be used in
                Fords.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/ford01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ford01/ford-logo-1965.gif",
          width: 144,
          height: 80,
          alt: "",
        },
        name: "FORD",
        summary: (
          <>
            Animated displays and scale models depict man&apos;s progress from
            prehistoric times to the Space Age. Viewers ride past some of the
            exhibits in new Ford cars.
          </>
        ),
        copy: (
          <>
            Walt Disney designed many of the displays, which include delicate
            models of historic settings; huge animated dinosaurs and cavemen;
            and a gallery of Ford cars, past, present and future. The pavilion
            contains a glass &quot;Wonder Rotunda,&quot; surrounded by 64
            towering pylons, with an exhibit hall several blocks long.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "INTERNATIONAL GARDENS.",
            body: (
              <>
                Scenes from 11 nations -- past and present -- are reproduced in
                tiny scale models. Among them: Colonial America, Merrie England,
                Aztec Mexico and medieval Europe.
              </>
            ),
          },
          {
            label: "MAGIC SKYWAY.",
            body: (
              <>
                Seated in late-model Fords, visitors are carried along a track on
                the rotunda&apos;s exterior for a sweeping view of the Fair, then
                on to the spectacular scenes in the main exhibit hall.
                <br />
                <br />
                The dawn of life on earth shows huge dinosaurs battling while
                primeval birds soar above. Life-sized cavemen appear in a
                spectacular display of electronic animation.
                <br />
                <br />
                In the Space Age the viewer glides on a superskyway over a City
                of Tomorrow complete with suggestions of soaring spires and
                bubble-dome buildings.
              </>
            ),
          },
          {
            label: "FIELDS OF SCIENCE.",
            body: (
              <>
                A separate exhibit illustrates some of the advanced research
                projects now engaging scientists at Ford and its subsidiary,
                Philco. Included are demonstrations of laser light, the sound of
                stars as picked up by radio telescope, and displays of new auto
                materials.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/ford01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/ford01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/fordmap",
      }}
    />
  );
}
