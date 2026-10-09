import type { Metadata } from "next";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Transportation & Travel — nywf64.com",
  description:
    "Transportation & Travel Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Transportation & Travel guidebook page — “guidebook” standard.
 * Body from legacy trantrav01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Trantrav01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Transportation & Travel"
      titleId="trantrav01-title"
      hero={{
        src: "/images/trantravoverview/hero-banner.jpg",
        alt: "Transportation & Travel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TrantravNavChrome />}
      previousHref="/trantravoverview"
      nextHref="/trantrav02"
      guide1964={{
        cover: {
          src: "/images/trantrav01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/trantrav01/tratralogo64.gif",
          width: 144,
          height: 68,
          alt: "",
        },
        name: (
          <>
            TRANSPORTATION AND
            <br />
            TRAVEL
          </>
        ),
        copy: (
          <>
            This big, two-story pavilion contains a seemingly endless variety
            of displays. The exhibitors include airlines and steamship lines,
            railroads and trucking companies, travel agencies and tourist
            resorts, and the United States Army, Navy and Air Force. Their
            exhibits include a Hall of Fame for pioneers of the transportation
            industry and a live drama, &quot;Sea Hunt.&quot; Other displays show
            custom-made automobiles, transportation equipment and startlingly
            realistic films of flight, communications systems, maps and models of
            all kinds and a collection of gold art works from the ancient Indian
            cultures of South America. The pavilion has at one end an enormous
            96-foot high Moon Dome whose plastic covering forms an accurate
            relief map of the moon; a science film is shown inside it. There are
            also hobby and souvenir shops, a cafeteria-style restaurant and a
            snack bar.
          </>
        ),
        admission:
          "Admission: free to the pavilion; 75 cents to the Sea Hunt, Moon Dome and Indian gold exhibit; 75 cents to custom-car exhibit; 25 cents for children under 12.",
        highlights: [
          {
            label: "JET FLIGHT.",
            body: (
              <>
                In one of several theaters United Air Lines shows a seven-minute
                film that demonstrates wonders of jet flight at 600 miles per
                hour.
              </>
            ),
          },
          {
            label: "THE NAVY AT WORK.",
            body: (
              <>
                A film entitled &quot;Around the World with the Navy&quot; shows
                an atomic submarine cruising under Arctic ice, jets operating
                from an aircraft carrier and aerial acrobatics performed by the
                Navy&apos;s &quot;Blue Angels&quot; precision flying team.
              </>
            ),
          },
          {
            label: "UNDER THE SEA.",
            body: (
              <>
                In a huge tank, skin divers put on an underwater drama. Lloyd
                Bridges, star of the TV show &quot;Sea Hunt,&quot; narrates the
                show on tape, and from time to time appears in person.
              </>
            ),
          },
          {
            label: "WORLD OF ANCIENT GOLD.",
            body: (
              <>
                The largest collection of gold artifacts and ceremonial pieces
                of pre-Colombian Indians ever assembled includes 400 pieces and
                is valued at over three million dollars.
              </>
            ),
          },
          {
            label: "FROM SPACE TO THE ATOM.",
            body: (
              <>
                Inside the Moon Dome, a color motion picture made by Cinerama is
                projected on a concave screen that encircles the audience. The
                18-minute film takes the view from the infinite reaches of outer
                space into the nucleus of the atom.
              </>
            ),
          },
          {
            label: "CUSTOM CARS.",
            body: (
              <>
                Among the 10 specially built vehicles is one that cost $250,000.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                The second-floor cafeteria offers full meals or sandwiches.
                Light refreshments are served at a snack bar on the first floor.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/trantrav01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/trantrav01/tratralogo.gif",
          width: 144,
          height: 68,
          alt: "",
        },
        name: (
          <>
            TRANSPORTATION AND
            <br />
            TRAVEL
          </>
        ),
        nameFace: "arial",
        summary: (
          <>
            All modes of travel, from underwater to lunar, are explored in
            exhibits by various industries and agencies.
          </>
        ),
        copy: (
          <>
            Symbol of this two-story pavilion is an enormous Moon Dome, inside
            which an unusual science film is shown. Elsewhere there is a large
            bazaar with merchandise from all over the world, exhibits of
            communications systems and a show about Martians visiting earth.
          </>
        ),
        admission:
          "Admission: free. Underwater show: adults, 50 cents; children, 25 cents. Moon Dome and Martian shows: adults, 75 cents; children, 25 cents.",
        highlights: [
          {
            label: "SEA AND AIR.",
            labelFace: "arial",
            body: (
              <>
                United Airlines shows a short film on the wonder of jet travel at
                600 mph. Another movie, &quot;Around the World with the
                Navy,&quot; shows an atomic sub cruising under the Arctic ice,
                jets operating from a carrier, and aerial acrobatics by the
                Navy&apos;s &quot;Blue Angels&quot; precision flying team. In a
                huge tank, skin divers perform an underwater drama, &quot;Sea
                Hunt.&quot;
              </>
            ),
          },
          {
            label: "FLYING SAUCERS.",
            labelFace: "arial",
            body: (
              <>
                A show combining live actors with film tells of a visit by
                Martians to earth.
              </>
            ),
          },
          {
            label: "BEYOND THE MOON.",
            labelFace: "arial",
            body: (
              <>
                A Cinerama production, shown inside the Moon Dome on a
                360-degree screen, explores man&apos;s environment from the
                nucleus of the atom to outer space.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            labelFace: "arial",
            body: (
              <>
                In addition to the large Galaxy Cafeteria, there are a steak
                house, a roof-garden bar, a self-service restaurant and an
                outdoor, table-service cafe&apos;.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/trantrav01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/trantrav01/trasmlmap.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/trantravmap",
      }}
    />
  );
}
