import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Exhibitor Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Exhibitor Post Cards of the 1964/1965 New York World’s Fair from the nywf64.com collection.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

/**
 * Exhibitor Postcards gallery continued (legacy pcards13.html → /pcards12).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 13. PREVIOUS → /pcards11; NEXT → /pcards13.
 */
export default function Pcards12Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards12-title"
      title="Exhibitor Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards11"
      overviewHref="/pcardsoverview"
      nextHref="/pcards13"
      entries={[
        {
          front: {
            src: "/images/pcards12/88292-B.jpg",
            width: 450,
            height: 282,
            alt: "American-Israel Pavilion (1 of 12) exhibitor postcard No. 88292-B",
          },
          reverse: {
            src: "/images/pcards12/88292-Breverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — American-Israel Pavilion (1 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (1 of 12)",
            "Rendering of Pavilion",
            exhibitorSet,
            "No. 88292-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88293-B.jpg",
            width: 450,
            height: 285,
            alt: "American-Israel Pavilion (2 of 12) exhibitor postcard No. 88293-B",
          },
          reverse: {
            src: "/images/pcards12/88293-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Reverse — American-Israel Pavilion (2 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (2 of 12)",
            "Together",
            exhibitorSet,
            "No. 88293-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88294-B.jpg",
            width: 450,
            height: 285,
            alt: "American-Israel Pavilion (3 of 12) exhibitor postcard No. 88294-B",
          },
          reverse: {
            src: "/images/pcards12/88294-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — American-Israel Pavilion (3 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (3 of 12)",
            "It Is No Legend",
            exhibitorSet,
            "No. 88294-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88295-B.jpg",
            width: 450,
            height: 289,
            alt: "American-Israel Pavilion (4 of 12) exhibitor postcard No. 88295-B",
          },
          reverse: {
            src: "/images/pcards12/88295-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — American-Israel Pavilion (4 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (4 of 12)",
            "A Hassidic Dance",
            exhibitorSet,
            "No. 88295-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88296-B.jpg",
            width: 450,
            height: 285,
            alt: "American-Israel Pavilion (5 of 12) exhibitor postcard No. 88296-B",
          },
          reverse: {
            src: "/images/pcards12/88296-Breverse.jpg",
            width: 300,
            height: 95,
            alt: "Reverse — American-Israel Pavilion (5 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (5 of 12)",
            "In George Washington's Time",
            exhibitorSet,
            "No. 88296-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88297-B.jpg",
            width: 450,
            height: 283,
            alt: "American-Israel Pavilion (6 of 12) exhibitor postcard No. 88297-B",
          },
          reverse: {
            src: "/images/pcards12/88297-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — American-Israel Pavilion (6 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (6 of 12)",
            "The Rug Weavers",
            exhibitorSet,
            "No. 88297-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88298-B.jpg",
            width: 450,
            height: 285,
            alt: "American-Israel Pavilion (7 of 12) exhibitor postcard No. 88298-B",
          },
          reverse: {
            src: "/images/pcards12/88298-Breverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — American-Israel Pavilion (7 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (7 of 12)",
            "The Craftsmen",
            exhibitorSet,
            "No. 88298-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88299-B.jpg",
            width: 450,
            height: 285,
            alt: "American-Israel Pavilion (8 of 12) exhibitor postcard No. 88299-B",
          },
          reverse: {
            src: "/images/pcards12/88299-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — American-Israel Pavilion (8 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (8 of 12)",
            "In Ancient Babylon",
            exhibitorSet,
            "No. 88299-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88300-B.jpg",
            width: 450,
            height: 285,
            alt: "American-Israel Pavilion (9 of 12) exhibitor postcard No. 88300-B",
          },
          reverse: {
            src: "/images/pcards12/88300-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — American-Israel Pavilion (9 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (9 of 12)",
            "Reciting the Law",
            exhibitorSet,
            "No. 88300-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88301-B.jpg",
            width: 284,
            height: 450,
            alt: "American-Israel Pavilion (10 of 12) exhibitor postcard No. 88301-B",
          },
          reverse: {
            src: "/images/pcards12/88301-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — American-Israel Pavilion (10 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (10 of 12)",
            "Nightfall in Jerusalem",
            exhibitorSet,
            "No. 88301-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88302-B.jpg",
            width: 450,
            height: 282,
            alt: "American-Israel Pavilion (11 of 12) exhibitor postcard No. 88302-B",
          },
          reverse: {
            src: "/images/pcards12/88302-Breverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — American-Israel Pavilion (11 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (11 of 12)",
            "A Biblical Family Scene",
            exhibitorSet,
            "No. 88302-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/88303-B.jpg",
            width: 284,
            height: 450,
            alt: "American-Israel Pavilion (12 of 12) exhibitor postcard No. 88303-B",
          },
          reverse: {
            src: "/images/pcards12/88303-Breverse.jpg",
            width: 300,
            height: 102,
            alt: "Reverse — American-Israel Pavilion (12 of 12) exhibitor postcard",
          },
          meta: [
            "American-Israel Pavilion (12 of 12)",
            "The Wall of Peace",
            exhibitorSet,
            "No. 88303-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American-Israel World's Fair Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1412-C.jpg",
            width: 283,
            height: 450,
            alt: "Mexico Pavilion (1 of 15) exhibitor postcard No. 1412-C",
          },
          reverse: {
            src: "/images/pcards12/1412-Creverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Mexico Pavilion (1 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (1 of 15)",
            "Ritual Dancers of the Flyers of Papantio",
            exhibitorSet,
            "No. 1412-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1413-C.jpg",
            width: 450,
            height: 281,
            alt: "Mexico Pavilion (2 of 15) exhibitor postcard No. 1413-C",
          },
          reverse: {
            src: "/images/pcards12/1413-Creverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Mexico Pavilion (2 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (2 of 15)",
            "Folk Dances",
            exhibitorSet,
            "No. 1413-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1415-C.jpg",
            width: 283,
            height: 450,
            alt: "Mexico Pavilion (3 of 15) exhibitor postcard No. 1415-C",
          },
          reverse: {
            src: "/images/pcards12/1415-Creverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Mexico Pavilion (3 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (3 of 15)",
            "Tree of Life with Pavilion Hostess",
            exhibitorSet,
            "No. 1415-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1416-C.jpg",
            width: 281,
            height: 450,
            alt: "Mexico Pavilion (4 of 15) exhibitor postcard No. 1416-C",
          },
          reverse: {
            src: "/images/pcards12/1416-Creverse.jpg",
            width: 300,
            height: 100,
            alt: "Reverse — Mexico Pavilion (4 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (4 of 15)",
            "The Basalt Sculpture",
            exhibitorSet,
            "No. 1416-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1417-C.jpg",
            width: 282,
            height: 450,
            alt: "Mexico Pavilion (5 of 15) exhibitor postcard No. 1417-C",
          },
          reverse: {
            src: "/images/pcards12/1417-Creverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — Mexico Pavilion (5 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (5 of 15)",
            "Terra Cotta Figures",
            exhibitorSet,
            "No. 1417-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1418-C.jpg",
            width: 450,
            height: 282,
            alt: "Mexico Pavilion (6 of 15) exhibitor postcard No. 1418-C",
          },
          reverse: {
            src: "/images/pcards12/1418-Creverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Mexico Pavilion (6 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (6 of 15)",
            "Yucatan Sculpture",
            exhibitorSet,
            "No. 1418-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/02.jpg",
            width: 450,
            height: 288,
            alt: "Mexico Pavilion (7 of 15) exhibitor postcard No. 1419-C",
          },
          reverse: {
            src: "/images/pcards12/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Mexico Pavilion (7 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (7 of 15)",
            "Stone Head Guacanaya",
            exhibitorSet,
            "No. 1419-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/02.jpg",
            width: 450,
            height: 288,
            alt: "Mexico Pavilion (8 of 15) exhibitor postcard No. 1420-C",
          },
          reverse: {
            src: "/images/pcards12/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Mexico Pavilion (8 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (8 of 15)",
            "Funeral Base in Terra Cotta",
            exhibitorSet,
            "No. 1420-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1421-C.jpg",
            width: 282,
            height: 450,
            alt: "Mexico Pavilion (9 of 15) exhibitor postcard No. 1421-C",
          },
          reverse: {
            src: "/images/pcards12/1421-Creverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — Mexico Pavilion (9 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (9 of 15)",
            "A God of Flowers Xochippli",
            exhibitorSet,
            "No. 1421-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1422-C.jpg",
            width: 280,
            height: 450,
            alt: "Mexico Pavilion (10 of 15) exhibitor postcard No. 1422-C",
          },
          reverse: {
            src: "/images/pcards12/1422-Creverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Mexico Pavilion (10 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (10 of 15)",
            "A Barroco Alter \"Relicario de San Jose\"",
            exhibitorSet,
            "No. 1422-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/02.jpg",
            width: 450,
            height: 288,
            alt: "Mexico Pavilion (11 of 15) exhibitor postcard No. 1423-C",
          },
          reverse: {
            src: "/images/pcards12/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Mexico Pavilion (11 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (11 of 15)",
            "Alter Mayor Barroco Made in Gold and Silver",
            exhibitorSet,
            "No. 1423-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1427-C.jpg",
            width: 284,
            height: 450,
            alt: "Mexico Pavilion (12 of 15) exhibitor postcard No. 1427-C",
          },
          reverse: {
            src: "/images/pcards12/1427-Creverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Mexico Pavilion (12 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (12 of 15)",
            "Oil Painted on Cloth - El Conde de Galvez",
            exhibitorSet,
            "No. 1427-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/02.jpg",
            width: 450,
            height: 288,
            alt: "Mexico Pavilion (13 of 15) exhibitor postcard No. 1428-C",
          },
          reverse: {
            src: "/images/pcards12/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Mexico Pavilion (13 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (13 of 15)",
            "The Slave by Jose Clemente Orozo",
            exhibitorSet,
            "No. 1428-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1430-C.jpg",
            width: 281,
            height: 450,
            alt: "Mexico Pavilion (14 of 15) exhibitor postcard No. 1430-C",
          },
          reverse: {
            src: "/images/pcards12/1430-Creverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — Mexico Pavilion (14 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (14 of 15)",
            "Oil Painted on Cloth - Mother Earth by Diego Rivers",
            exhibitorSet,
            "No. 1430-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards12/1431-C.jpg",
            width: 281,
            height: 450,
            alt: "Mexico Pavilion (15 of 15) exhibitor postcard No. 1431-C",
          },
          reverse: {
            src: "/images/pcards12/1431-Creverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Mexico Pavilion (15 of 15) exhibitor postcard",
          },
          meta: [
            "Mexico Pavilion (15 of 15)",
            "The Actual Image by David Alfare Siquoilis",
            exhibitorSet,
            "No. 1431-C",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        }
      ]}
    />
  );
}
