import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { JOHWAX_HERO } from "@/data/johwaxHero";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Johnson Wax — nywf64.com",
  description:
    "Johnson Wax Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwaxoverview"
      nextHref="/johwax02"
      guide1964={{
        cover: {
          src: "/images/johwax01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/johwax01/johwaxlogo64.gif",
          width: 144,
          height: 86,
          alt: "",
        },
        name: "JOHNSON'S WAX",
        copy: (
          <>
            This pavilion, a great gold disk which seems to float 24 feet above
            the ground, is supported by its surrounding columns. It houses a
            500-seat theater in which a documentary movie dramatizes the theme
            of brotherhood. An exhibition area at ground level offers a climbing
            contraption for the entertainment of children, a home care
            information center and a shoeshine center that provides free shines.
            On the ground floor is a display which shows the wide range of
            materials man has used as floors, from marble to teakwood. Pavilion
            guides are foreign students.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: '"TO BE ALIVE."',
            body: (
              <>
                This sensitive 18-minute color movie, produced by Francis
                Thompson, whose documentaries have won many awards, uses three
                projectors, as many screens, and stereophonic sound to show the
                daily lives of people around the world. They grow up, fall in
                love, work, play and grow old, demonstrating that &quot;men
                everywhere share at the deepest level the same drives, dreams,
                foibles.&quot;
              </>
            ),
          },
          {
            label: "CHILD ENTERTAINMENT CENTER.",
            body: (
              <>
                Grownups can watch while children climb through a &quot;fun
                machine&quot; - a mazelike device full of mirrors that fracture
                images, squeeze-bulbs that emit strange noises and cranks that
                operate robots.
              </>
            ),
          },
          {
            label: "HOME CARE INFORMATION CENTER.",
            body: (
              <>
                Electronic computers answer such questions as &quot;Do the new
                car finishes need cleaning and waxing?&quot;
              </>
            ),
          },
          {
            label: "SHOESHINE CENTER.",
            body: (
              <>
                Ten polishing machines operating simultaneously can buff the
                shoes of 300 visitors an hour.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/johwax01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/johwax01/johwaxlogo.gif",
          width: 144,
          height: 86,
          alt: "",
        },
        name: "JOHNSON WAX",
        summary: (
          <>
            &quot;To Be Alive,&quot; an 18-minute film that has been one of the
            Fair&apos;s great hits, depicts the joys of living shared by all
            people.
          </>
        ),
        copy: (
          <>
            The 500-seat theater in which the film is shown is contained in a
            great gold disk suspended above a reflecting pool. Exhibits on the
            ground level include a children&apos;s &quot;Fun Machine,&quot; an
            international display of flooring materials and a shoeshine center
            where visitors can get a free mechanical shine.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: '"TO BE ALIVE."',
            body: (
              <>
                Acclaimed by critics and the public, this sensitive color film
                produced by Francis Thompson uses three screens to show the
                experiences and emotions common to people all over the world.
                Among the scenes are children at play in Africa and the United
                States, a joyful Italian wedding and the thrills of an auto ride
                along a twisting mountain road.
              </>
            ),
          },
          {
            label: "FUN MACHINE.",
            body: (
              <>
                Children can climb through a maze of distorting mirrors and turn
                cranks to operate weird mechanical devices.
              </>
            ),
          },
          {
            label: "INFORMATION CENTER.",
            body: (
              <>
                A computer answers questions on the proper care of floors and
                furniture, automobiles and shoes.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/johwax01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/johwax01/indsmlmap.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/johwaxmap",
      }}
    />
  );
}
