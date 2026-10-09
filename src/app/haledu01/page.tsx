import type { Metadata } from "next";
import Link from "next/link";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Hall of Education — nywf64.com",
  description:
    "Hall of Education pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy haledu01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1965: status note (building became Demonstration Center). Locate It → /haledumap.
 */
export default function Haledu01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hall of Education"
      titleId="haledu01-title"
      hero={{
        src: "/images/haleduoverview/hero-banner.jpg",
        alt: "Hall of Education at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HaleduNavChrome />}
      previousHref="/haleduoverview"
      nextHref="/haledu02"
      guide1964={{
        cover: {
          src: "/images/haledu01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/haledu01/logo1964.gif",
          width: 144,
          height: 67,
          alt: "",
        },
        name: "HALL OF EDUCATION",
        copy: (
          <>
            The changing goals, methods and tools of education in America are
            the concern of the exhibitors in this pavilion - for the most part
            businesses associated with education. Visitors may see a school of
            tomorrow, hear prominent Americans discuss problems of the day,
            listen to classroom exercises and watch modern teaching machines at
            work. The large building also has a playground area, an audio-visual
            demonstration center and a public restaurant.
          </>
        ),
        admission: "Admission: free; small charge to the playground.",
        highlights: [
          {
            label: "SCHOOL OF TOMORROW.",
            body: (
              <>
                A scale model shows a school in the year 2000, as visualized by
                leading educators and architects. Accompanying the model are
                illustrations and explanations of the role education will play
                in the lives of Americans in future years.
              </>
            ),
          },
          {
            label: "DIALOGUES IN DEPTH.",
            body: (
              <>
                In a ground-floor auditorium seating 200, prominent figures in
                many different fields are interviewed regularly on current
                issues by leading scholars and a guest moderator. The
                interviews, open to the public, are put on tape for future use
                in schools and libraries.
              </>
            ),
          },
          {
            label: "FUTURE TEACHING.",
            body: (
              <>
                Actual school and college classes, using the latest audio-visual
                teaching techniques and equipment, are held in the auditorium
                each day. The newest electronic teaching machines are displayed
                in a nearby area.
              </>
            ),
          },
          {
            label: "VOCATIONAL EDUCATION.",
            body: (
              <>
                The importance of vocational training in America&apos;s future
                is stressed by an exhibit of machine tools and samples of
                machine work accomplished by vocational students all over the
                U.S.
              </>
            ),
          },
          {
            label: "ADVENTURE PLAYGROUND.",
            body: (
              <>
                Children are invited to play on a number of futuristic climbing
                structures in the playground.
              </>
            ),
          },
          {
            label: "A PLACE TO EAT.",
            body: (
              <>On the ground floor of the pavilion is a large cafeteria.</>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/haledu01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Hall of Education was open for the 1964 Season. In 1965 this
            building was the <Link href="/democr01">Demonstration Center</Link>
            .
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/haledu01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/haledu01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/haledumap",
      }}
    />
  );
}
