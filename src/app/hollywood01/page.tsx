import type { Metadata } from "next";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Hollywood — nywf64.com",
  description:
    "Hollywood U.S.A. pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Hollywood01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hollywood"
      titleId="hollywood01-title"
      hero={{
        src: "/images/hollywoodoverview/hero-banner.jpg",
        alt: "Hollywood at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HollywoodNavChrome />}
      previousHref="/hollywoodoverview"
      nextHref="/hollywood02"
      guide1964={{
        cover: {
          src: "/images/hollywood01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/hollywood01/calogo64.gif",
          width: 144,
          height: 143,
          alt: "",
        },
        name: "HOLLYWOOD",
        copy: (
          <>
            Behind a facsimile facade of Grauman&apos;s Chinese Theater, complete
            with hand and footprints of celebrities in the pavement, Hollywood
            displays mementos of its past and spotlights some of the glittering
            figures of the present. Sets from recent motion pictures are
            displayed, and there is a film museum of props and costumes from
            vintage classics. From time to time visiting stars and top recording
            artists sign autographs. The pavilion also offers visitors shops, a
            bar and a large restaurant.
          </>
        ),
        admission: "Admission: adults, $1.25; children, 50 cents.",
        highlights: [
          {
            label: "ON LOCATION.",
            body: (
              <>
                The visitor can take a walk through exact replicas of the throne
                rooms from <i>Cleopatra</i> and <i>The King and I</i>, visit the
                street from <i>West Side Story</i> or see the main set from
                TV&apos;s <i>Gunsmoke</i>. Music from the film scores is played
                in the background.
              </>
            ),
          },
          {
            label: "MUSEUM PIECES.",
            body: (
              <>
                The motion picture museum is a showcase for filmland costumes,
                jewelry and props (including a small train used in{" "}
                <i>The Greatest Show on Earth</i>). A special section
                highlights the career of the late Cecil B. DeMille.
              </>
            ),
          },
          {
            label: "FOOD AND DRINK.",
            body: (
              <>
                There is a large bar and a self-service restaurant.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/hollywood01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/hollywood01/calogo.gif",
          width: 144,
          height: 143,
          alt: "",
        },
        name: "HOLLYWOOD U.S.A.",
        summary: (
          <>
            Behind a facsimile of Grauman&apos;s Chinese Theater, movie sets,
            props and costumes bring to life filmland&apos;s present and past.
          </>
        ),
        copy: (
          <>
            Actual backgrounds used in well-known movies line a central mall,
            and film, TV and recording stars appear. There are also shops, three
            restaurants, a bar, and a discotheque for dancing.
          </>
        ),
        highlights: [
          {
            label: "ON LOCATION.",
            body: (
              <>
                Visitors can be photographed in exact replicas of sets from{" "}
                <i>Cleopatra</i> and <i>South Pacific</i>, walk through a street
                scene from <i>West Side Story</i> and watch a duel on the
                &quot;Gunsmoke&quot; set.
              </>
            ),
          },
          {
            label: "MUSEUM PIECES.",
            body: (
              <>
                A showcase of movie memorabilia contains lavish costumes,
                jewelry and props, famous film monsters, and a special section on
                the career of Cecil B. DeMille.
              </>
            ),
          },
        ],
        admission: "Admission: adults, $1.00; children, 50 cents.",
      }}
      map={{
        cover: {
          src: "/images/hollywood01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/hollywood01/federal-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/hollywoodmap",
      }}
    />
  );
}
