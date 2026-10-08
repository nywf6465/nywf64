import type { Metadata } from "next";
import { SanmarNavChrome } from "@/components/SanmarNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Santa Maria — nywf64.com",
  description:
    "Santa Maria pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Santa Maria guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy sanmar01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Sanmar01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Santa Maria"
      titleId="sanmar01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/sanmaroverview/hero-banner.jpg",
        alt: "Santa Maria at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SanmarNavChrome />}
      previousHref="/sanmaroverview"
      nextHref="/sanmar02"
      guide1964={{
        cover: {
          src: "/images/sanmar01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sanmar01/logo-1964.gif",
          width: 144,
          height: 85,
          alt: "",
        },
        name: (
          <>
            &quot;SANTA MARIA&quot;
          </>
        ),
        copy: (
          <>
            A full-sized replica of the flagship of Christopher Columbus&apos;
            discovery fleet is moored at the end of a 15th Century-style floating
            Spanish wharf. Termed by the exhibitors &quot;Space Ship -
            1492,&quot; this <i>Santa Maria</i> is the product of a distinguished
            intercontinental collaboration that insured authenticity. Her
            architect was Jose Maria Martinez-Hidalgo, curator of the Maritime
            Museum of Barcelona, Spain; his consultant was Colonel Howard I.
            Chapelle, chief of the Naval and Transportation Section of the
            Smithsonian Institution in Washington.
          </>
        ),
        admission:
          "Admission: adults, $1.00; children 6 to 12, 50 cents; children under 6 free.",
        highlights: [
          {
            label: "LIFE OF THE EXPLORER.",
            body: (
              <>
                In settings along the wharf, 12 dioramas trace the life of
                Columbus from his youth to his return to Barcelona after
                discovering the New World. The dioramas were designed by the
                scenic department of the Barcelona Opera House.
              </>
            ),
          },
          {
            label: "CASTLE AT THE PIER.",
            body: (
              <>
                The entrance to the 180-foot-long pier is a simulated castle
                gangway, reached by a drawbridge. Within are Old World shops; the
                sounds of crowds and chanteys mingle with the smells of the
                exotic spices Columbus sought in his travels.
              </>
            ),
          },
          {
            label: "THE SHIP.",
            body: (
              <>
                Ninety feet long, weighing 110 tons, the vessel was constructed
                in Barcelona after years of research in museums and naval
                archives, and brought to the United States on the deck of a
                freighter. Her sails and flags were woven on 15th Century looms,
                the iron and armament wrought on 15th Century forges. The crew is
                represented by 18 life-sized sculptured figures. Columbus in his
                cabin talks with Captain Pinzon of the <i>Pinta</i>. Some
                crewmen crowd around the stove; others watch in the crow&apos;s-nest,
                or hoist sail.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/sanmar01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sanmar01/logo-1965.gif",
          width: 144,
          height: 85,
          alt: "",
        },
        name: (
          <>
            &quot;SANTA MARIA&quot;
          </>
        ),
        summary: (
          <>
            A full-sized replica of Columbus&apos; flagship is moored at the end
            of a 15th Century Spanish wharf.
          </>
        ),
        copy: (
          <>
            The 110-ton ship was built in Spain. Her authenticity is the result
            of patient research by museum curators in Barcelona and Washington,
            D.C. Life-sized figures represent Columbus and his crew.
          </>
        ),
        admission:
          "Admission: adults, $1.00; children 6 to 12, 50 cents; children under 6, free.",
        highlights: [
          {
            label: "CASTLE PIER.",
            body: (
              <>
                The 180-foot floating pier is entered over a drawbridge through a
                castle gateway. Twelve dioramas trace Columbus&apos; life from
                his youth to his return after discovering the New World.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/sanmar01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sanmar01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/sanmarmap",
      }}
    />
  );
}
