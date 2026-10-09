import type { Metadata } from "next";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — United States — nywf64.com",
  description:
    "United States Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy unista01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Unista01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="United States Pavilion"
      titleId="unista01-title"
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      nextHref="/unista02"
      guide1964={{
        cover: {
          src: "/images/unista01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/unista01/usa-logo-1964.gif",
          width: 144,
          height: 70,
          alt: "",
        },
        name: "UNITED STATES",
        copy: (
          <>
            Within a glittering facade of multi-colored glass, this huge
            building, 330 feet long, offers a vivid and varied view of
            America&apos;s &quot;Challenge to Greatness&quot; - a theme endorsed
            by the late John F. Kennedy. Included are two films - one of them a
            dramatization of the nation&apos;s immigrant origins, the other a
            color spectacular that whisks the visitor through America&apos;s past
            to a future landing on the moon. There is also a modern,
            computer-run research library. Engraved in the pavilion&apos;s foyer,
            lines from a poem by Archibald MacLeish provide a keynote to the
            exhibit: &quot;America is never accomplished.&quot;
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "VOYAGE TO AMERICA.",
            body: (
              <>
                Beyond the entrance foyer is the first of the building&apos;s two
                theaters. It has continuous showings of a 10-minute film,
                dramatizing the nation&apos;s continual renewal as refugees reach
                the shores to begin life afresh.
              </>
            ),
          },
          {
            label: "PEACE AND FREEDOM.",
            body: (
              <>
                Two large halls are filled with illustrations of the American
                pursuit of peace and liberty.
                <br />
                <br />
                <strong>
                  <em>&para;</em>
                </strong>
                <em>&quot;The Challenge to Freedom&quot;</em> presents the
                effects of progress on American life. For example, a piece of
                highway machinery that replaces 30 men symbolizes both production
                advances and the problems of unemployment. The displays also
                include three-dimensional examples of miracles of modern science
                - including an oscilloscope that picks up sounds made by stars
                and by snails eating lettuce, demonstrating that the paths of
                pure science may lead anywhere.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>&quot;Challenge of a Peaceful World&quot; </em>
                depicts America&apos;s role in international affairs and looks
                ahead to uncharted space. Here, among other things, world news
                pours in over teletype machines; Peace Corpsmen talk about their
                experiences; a seismograph and a nuclear-detection satellite
                illustrate new techniques of arms control; and an operating model
                of the Mariner spaceship that made the Venus probe in 1962 is on
                display. In addition, an exhibit of children&apos;s art portrays
                the worldwide hope for peace.
              </>
            ),
          },
          {
            label: "THE PAST AS PROLOGUE.",
            body: (
              <>
                The entire second floor of the pavilion is the setting for an
                extraordinary film, prepared with new motion picture techniques,
                which whips the whole American past into a prologue for the
                future. The production brings history back to life: lightning
                flashes as Franklin flies his kite, the waters churn as Fulton
                launches his steamboat, and the cannon roar as Civil War breaks
                out. The viewer is swept into the future as a rocket soars past
                the swirling Milky Way, to the moon and then beyond. Shown
                continuously, the film employs a host of revolutionary techniques
                - sliding screens, rising screens, screens that form a tunnel,
                and explosive sound effects. Visitors see the movie as they ride
                on moving grandstands.
              </>
            ),
          },
          {
            label: "PAVILION POSTSCRIPT.",
            body: (
              <>
                Before leaving the building, visitors are offered the following
                services in the specially created &quot;Challenge of
                Information&quot;&nbsp;Library.
                <br />
                <br />
                <strong>
                  <em>&para;</em>
                </strong>
                <em> Reference lists</em> on every subject covered in the
                pavilion are prepared for any one of five educational levels -
                elementary, high school, adult, college or graduate research. In
                addition, librarians use computers to provide listings of current
                periodical literature on almost any subject.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Copies of short essays </em>
                (about 700 words) are available on each of the 76 basic concepts
                of the U.S. Pavilion program.
                <br />
                <br />
                <strong>
                  <em>&para;</em>
                </strong>
                <em> An adult reading area</em> is built around the collection of
                books selected for the new White House library.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>A children&apos;s room,</em> with more than 2,000 domestic
                and 500 foreign books, also features movies and storytelling
                hours.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/unista01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/unista01/usa-logo-1965.gif",
          width: 144,
          height: 74,
          alt: "",
        },
        name: "UNITED STATES",
        summary: (
          <>
            The nation&apos;s past and its progress toward President
            Johnson&apos;s &quot;Great Society&quot; are outlined in many
            dramatic exhibits and a spectacular 15-minute film-ride.
          </>
        ),
        copy: (
          <>
            Behind the pavilion&apos;s colorful facade, monumental staircases
            and an escalator lead up to a huge inner court. An introductory film
            dramatizes the nation&apos;s immigrant origins. A large exhibit hall
            leads to a spectacular, multiscreen film-ride that transports the
            visitor through America&apos;s past to its future in the Space Age.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "VOYAGE TO AMERICA.",
            body: (
              <>
                The opening film is a tribute to the millions of immigrants who
                have made priceless contributions to the culture and capabilities
                of the U.S.
              </>
            ),
          },
          {
            label: "THE GREAT SOCIETY.",
            body: (
              <>
                Exhibits illustrate the challenges that face the U.S. in such
                fields as science, the arts, and world peace.
              </>
            ),
          },
          {
            label: "AMERICAN JOURNEY.",
            body: (
              <>
                Visitors travel on a moving grandstand through 472 years of
                American history as an extraordinary 15-minute film production
                unfolds. Novel multiscreen techniques and startling sound effects
                bring the past to life: lightning flashes as Franklin flies his
                kite; the waters churn as Fulton launches his steamboat; old-time
                movies recall the Roaring Twenties. In the finale the viewer is
                swept into the future on an imaginary rocket flight into space.
              </>
            ),
          },
          {
            label: "HALL OF PRESIDENTS.",
            body: (
              <>
                A separate new exhibit area is filled with the memorabilia of
                eminent U.S. chief executives: Washington, John Adams, Jefferson,
                Jackson, Polk, Lincoln, Cleveland, Wilson, the Roosevelts,
                Truman, Eisenhower and Kennedy.
              </>
            ),
          },
          {
            label: "LIBRARY/USA.",
            body: (
              <>
                Members of the American Library Association answer visitor&apos;s
                questions and provide reference lists on every subject covered in
                the pavilion. A Univac computer produces 700-word essays in four
                seconds on any of the concepts exhibited. An adult reading room
                is built around some of the late President Kennedy&apos;s
                favorite books and the collection selected for the new White
                House library. A children&apos;s area with more than 2,500 books
                also features movies and storytelling hours.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/unista01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/unista01/federal-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/unistamap",
      }}
    />
  );
}
