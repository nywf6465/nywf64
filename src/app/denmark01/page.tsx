import type { Metadata } from "next";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Denmark — nywf64.com",
  description:
    "Denmark pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy denmark01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /denmarkmap (International Area).
 */
export default function Denmark01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Denmark"
      titleId="denmark01-title"
      hero={{
        src: "/images/denmarkoverview/hero-banner.jpg",
        alt: "Denmark at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<DenmarkNavChrome />}
      previousHref="/denmarkoverview"
      nextHref="/denmark02"
      guide1964={{
        cover: {
          src: "/images/denmark01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/denmark01/denmarlogo64.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "DENMARK",
        copy: (
          <>
            Children can romp in a supervised playground modeled after the one
            in Copenhagen&apos;s famous Tivoli Gardens, while their parents
            explore other attractions. Carrying out the privately sponsored
            pavilion&apos;s theme, &quot;Meet the Danes,&quot; the building is
            filled with exhibits and shops; there are two restaurants in the
            area plus a children&apos;s cafe&apos;.
          </>
        ),
        admission: [
          "Admission: free to the pavilion, 50 cents to playground.",
          "Restaurants remain open to midnight.",
        ],
        highlights: [
          {
            label: "TIVOLI IN MINIATURE.",
            body: (
              <>
                In a 160-foot-long area, children can sail paper boats made for
                them by kindergarten nurses in attendance, whisk down a
                dipsy-doodle slide, explore a maze, play in a giant sandbox and
                climb about a Forbidden House where they can peek through a huge
                keyhole, stamp on the floors, or take a turn at a ship&apos;s
                helm. The playground was created by experts who designed the
                original in Copenhagen.
                <br />¶ A children&apos;s cafe&apos; adjoining the playground
                has seats shaped like birds and features Danish treats in
                child-sized portions. When the youngsters finish eating or
                playing, they can wash up in two restrooms built specially for
                children.
              </>
            ),
          },
          {
            label: "EXHIBIT PROMENADE.",
            body: (
              <>
                Fine Danish products - toys, dinnerware, glassware, cutlery,
                furniture - are for sale. A &quot;hall of fame&quot; pictures
                some famous Danes of history, including storyteller Hans
                Christian Andersen and Niels Bohr, father of atomic energy.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                Pastries, made on the premises by bakers brought over from
                Denmark, and other Danish foods are served in two dining areas.
                The Kattegat Inn serves Danish coffee and pastry, as well as
                specialties of various Danish provinces, and fish flown in from
                the Baltic and North Sea fishing beds. The Restaurant Denmark
                caters to gourmets with a &quot;Grand Cold Table.&quot;
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/denmark01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/denmark01/denmarlogo.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "DENMARK",
        summary: (
          <>
            Children can romp in a novel playground while parents sample fine
            Danish products in shops, restaurants and sidewalk cafe.
          </>
        ),
        copy: (
          <>
            In a handsome building of natural wood and glass are exhibits, a
            shopping promenade and a choice of places to eat.
          </>
        ),
        admission:
          "Admission: free. Attended playground: 50 cents per child for the first two hours, 25 cents an hour thereafter.",
        highlights: [
          {
            label: "TIVOLI FOR TOTS.",
            body: (
              <>
                In a park modeled after one in Copenhagen&apos;s Tivoli Gardens,
                children can whisk down a dipsy-doodle slide, explore a maze and
                climb in a Forbidden House. Trained attendants supervise.
              </>
            ),
          },
          {
            label: "EXHIBIT PROMENADE.",
            body: (
              <>
                Toys, dinnerware, silver, jewelry, place mats, greeting cards
                and cigars are for sale. A specialty shop features Danish hams
                and cheeses.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                Pastries made on the premises and other Danish specialties are
                served in the Kattegat Inn. The Restaurant Denmark offers diners
                a &quot;Grand Cold Table.&quot;
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/denmark01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/denmark01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/denmarkmap",
      }}
    />
  );
}
