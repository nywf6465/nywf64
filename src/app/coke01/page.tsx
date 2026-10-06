import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy coke01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy wording (Rio de Janerio) preserved.
 */
export default function Coke01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Coca-Cola"
      titleId="coke01-title"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/cokeoverview"
      nextHref="/coke02"
      guide1964={{
        cover: {
          src: "/images/coke01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/coke01/cokelogo64.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "COCA-COLA",
        copy: (
          <>
            The visitor to this exhibit samples five of the most spectacular
            places in the world, from an Alpine peak to a tropical forest -
            complete with sights, sounds, climate and aromas. The scenes are
            created in an elliptical building two-stories high enclosing a large
            court. In the center of the court is The Coca-Cola Tower, a
            three-sided 120-foot spire containing the world&apos;s largest
            electronic carillon, with 610 bells. It strikes the hours at the Fair
            and is played in concerts by famous carillonneurs. Among the other
            attractions are a special amateur radio center and a USO lounge and
            information center for servicemen.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: '"WORLD OF REFRESHMENT."',
            body: (
              <>
                During a 15-minute stroll, visitors pass through the following
                re-creations of exotic places:
                <br />
                ¶ A bustling Hong Kong street, filled with colorful shops, ends
                at the shore of Fragrant Harbor with its view of Kowloon on the
                mainland of China in the distance.
                <br />
                ¶ A serene Indian garden , where fountains softly play, has the
                beautiful Taj Mahal in the background.
                <br />
                ¶ A Bavarian ski lodge is located in a mountain setting; through
                the windows can be seen the Bavarian Alps.
                <br />
                ¶ A Cambodian forest echoes to the chatter of monkeys and
                contains the 12th Century temple at Angkor Wat.
                <br />
                ¶ Rio de Janerio, glittering at night, is viewed from a cruise
                ship anchored in the harbor. The interior of the ship is
                reproduced with careful authenticity. Salt spray is in the air.
              </>
            ),
          },
          {
            label: "HAM RADIO.",
            body: (
              <>
                Members of the American Radio Relay League operate a superb
                three-position sending and receiving station that is capable of
                reaching all the way around the globe. The station is available
                for licensed operators to use.
              </>
            ),
          },
          {
            label: "SERVICEMEN'S CANTEEN.",
            body: (
              <>
                A lounge of the United Service Organizations is linked by phone
                to the USO&apos;s Times Square Center. Attendants help
                servicemen obtain tickets to attractions in the New York area; in
                addition, they supply travel information.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/coke01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/coke01/cokelogo.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "COCA-COLA",
        summary: (
          <>
            Visitors stroll through re-creations of an Oriental street, an
            Alpine peak, a tropical forest -- complete with sights and sounds.
          </>
        ),
        copy: (
          <>
            In the center of a courtyard stands a 120-foot spire containing the
            world&apos;s largest carillon, with 610 bells that are
            electronically amplified. It strikes the hours at the Fair and is
            played in daily concerts by famous carillonneurs.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: '"GLOBAL HOLIDAY."',
            body: (
              <>
                During a 15- to 20-minute indoor walk, fairgoers visit such
                faraway places as a bustling Hong Kong street, a serene Indian
                garden, a Bavarian ski lodge, a Cambodian forest and the harbor
                of Rio de Janeiro.
              </>
            ),
          },
          {
            label: "HAM RADIO.",
            body: (
              <>
                Members of the American Radio Relay League operate a sending and
                receiving station capable of reaching around the globe.
              </>
            ),
          },
          {
            label: "SERVICEMEN'S CENTER.",
            body: (
              <>
                A lounge of the United Service Organizations (USO) supplies
                travel information and helps servicemen obtain tickets to New
                York theaters, sports events and other local attractions.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/coke01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/coke01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/cokemap",
      }}
    />
  );
}
