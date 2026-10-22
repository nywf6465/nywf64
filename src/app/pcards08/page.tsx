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
 * Exhibitor Postcards gallery continued (legacy pcards09.html → /pcards08).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 9. PREVIOUS → /pcards07; NEXT → /pcards09.
 */
export default function Pcards08Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards08-title"
      title="Exhibitor Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards07"
      overviewHref="/pcardsoverview"
      nextHref="/pcards09"
      entries={[
        {
          front: {
            src: "/images/pcards08/80841-B.jpg",
            width: 600,
            height: 463,
            alt: "Wisconsin Pavilon exhibitor postcard No. 80841-B",
          },
          reverse: {
            src: "/images/pcards08/80841-Breverse.jpg",
            width: 300,
            height: 156,
            alt: "Reverse — Wisconsin Pavilon exhibitor postcard",
          },
          meta: [
            "Wisconsin Pavilon",
            exhibitorSet,
            "No. 80841-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/None(30).jpg",
            width: 600,
            height: 482,
            alt: "Pavilion of Hong Kong exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards08/None(30)reverse.jpg",
            width: 300,
            height: 166,
            alt: "Reverse — Pavilion of Hong Kong exhibitor postcard",
          },
          meta: [
            "Pavilion of Hong Kong",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by jpm, New York City",
          ],
        },
        {
          front: {
            src: "/images/pcards08/Pilglass.jpg",
            width: 700,
            height: 268,
            alt: "Pilgrim Glass Corporation exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards08/Pilglassreverse.jpg",
            width: 700,
            height: 269,
            alt: "Reverse — Pilgrim Glass Corporation exhibitor postcard",
          },
          meta: [
            "Pilgrim Glass Corporation",
            "West Virginia Pavilion",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80864-B.jpg",
            width: 282,
            height: 450,
            alt: "Illinois \"Land of Lincoln\" Pavilion (1 of 6) exhibitor postcard No. 80864-B",
          },
          reverse: {
            src: "/images/pcards08/80864-Breverse.jpg",
            width: 300,
            height: 123,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion (1 of 6) exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion (1 of 6)",
            "A. Lincoln on the Prairie",
            exhibitorSet,
            "No. 80864-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80865-B.jpg",
            width: 450,
            height: 281,
            alt: "Illinois \"Land of Lincoln\" Pavilion (2 of 6) exhibitor postcard No. 80865-B",
          },
          reverse: {
            src: "/images/pcards08/80865-Breverse.jpg",
            width: 300,
            height: 133,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion (2 of 6) exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion (2 of 6)",
            "Hill-McNamar (McNeill) Store, Replica",
            exhibitorSet,
            "No. 80865-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80866-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois \"Land of Lincoln\" Pavilion (3 of 6) exhibitor postcard No. 80866-B",
          },
          reverse: {
            src: "/images/pcards08/80866-Breverse.jpg",
            width: 300,
            height: 132,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion (3 of 6) exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion (3 of 6)",
            "Entrance Courtyard",
            exhibitorSet,
            "No. 80866-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80867-B.jpg",
            width: 450,
            height: 281,
            alt: "Illinois \"Land of Lincoln\" Pavilion (4 of 6) exhibitor postcard No. 80867-B",
          },
          reverse: {
            src: "/images/pcards08/80867-Breverse.jpg",
            width: 300,
            height: 131,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion (4 of 6) exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion (4 of 6)",
            "Lincoln on Man's Duty for Mankind",
            exhibitorSet,
            "No. 80867-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80868-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois \"Land of Lincoln\" Pavilion (5 of 6) exhibitor postcard No. 80868-B",
          },
          reverse: {
            src: "/images/pcards08/80868-Breverse.jpg",
            width: 300,
            height: 140,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion (5 of 6) exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion (5 of 6)",
            "House of the \"House Divided\"",
            exhibitorSet,
            "No. 80868-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80869-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois \"Land of Lincoln\" Pavilion (6 of 6) exhibitor postcard No. 80869-B",
          },
          reverse: {
            src: "/images/pcards08/80869-Breverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion (6 of 6) exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion (6 of 6)",
            "Gutzon Borglum's \"The Prairie Pres.\"",
            exhibitorSet,
            "No. 80869-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/90618-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois \"Land of Lincoln\" Pavilion exhibitor postcard No. 90618-B",
          },
          reverse: {
            src: "/images/pcards08/90618-Breverse.jpg",
            width: 300,
            height: 125,
            alt: "Reverse — Illinois \"Land of Lincoln\" Pavilion exhibitor postcard",
          },
          meta: [
            "Illinois \"Land of Lincoln\" Pavilion",
            exhibitor,
            "No. 90618-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/80874-B.jpg",
            width: 450,
            height: 283,
            alt: "Collegiate Cap and Gown Company exhibitor postcard No. 80874-B",
          },
          reverse: {
            src: "/images/pcards08/80874-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Collegiate Cap and Gown Company exhibitor postcard",
          },
          meta: [
            "Collegiate Cap and Gown Company",
            "Hall of Education",
            exhibitor,
            "No. 80874-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Dexter Co.lor Illinois",
          ],
        },
        {
          front: {
            src: "/images/pcards08/83971-B.jpg",
            width: 450,
            height: 280,
            alt: "State of Oklahoma exhibitor postcard No. 83971-B",
          },
          reverse: {
            src: "/images/pcards08/83971-Breverse.jpg",
            width: 300,
            height: 99,
            alt: "Reverse — State of Oklahoma exhibitor postcard",
          },
          meta: [
            "State of Oklahoma",
            exhibitor,
            "No. 83971-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Oklahoma World's Fair Commission, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards08/83982-B.jpg",
            width: 450,
            height: 281,
            alt: "Chunky Square exhibitor postcard No. 83982-B",
          },
          reverse: {
            src: "/images/pcards08/83982-Breverse.jpg",
            width: 300,
            height: 142,
            alt: "Reverse — Chunky Square exhibitor postcard",
          },
          meta: [
            "Chunky Square",
            exhibitor,
            "No. 83982-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chunky Chocolate",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85504-B.jpg",
            width: 450,
            height: 273,
            alt: "New York State Pavilion exhibitor postcard No. 85504-B",
          },
          reverse: {
            src: "/images/pcards08/85504-Breverse.jpg",
            width: 300,
            height: 114,
            alt: "Reverse — New York State Pavilion exhibitor postcard",
          },
          meta: [
            "New York State Pavilion",
            exhibitor,
            "No. 85504-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85534-B.jpg",
            width: 450,
            height: 288,
            alt: "Jordan Pavilion exhibitor postcard No. 85534-B",
          },
          reverse: {
            src: "/images/pcards08/85534-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — Jordan Pavilion exhibitor postcard",
          },
          meta: [
            "Jordan Pavilion",
            exhibitor,
            "No. 85534-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Victor H. Bisharat A.I.A. Architect",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85543-B.jpg",
            width: 450,
            height: 283,
            alt: "Indonesia Pavilion exhibitor postcard No. 85543-B",
          },
          reverse: {
            src: "/images/pcards08/85543-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Indonesia Pavilion exhibitor postcard",
          },
          meta: [
            "Indonesia Pavilion",
            exhibitor,
            "No. 85543-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Indonesia Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85052-B.jpg",
            width: 281,
            height: 450,
            alt: "Vatican (1 of 12) exhibitor postcard No. 85052-B",
          },
          reverse: {
            src: "/images/pcards08/85052-Breverse.jpg",
            width: 300,
            height: 55,
            alt: "Reverse — Vatican (1 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (1 of 12)",
            "Pieta",
            exhibitorSet,
            "No. 85052-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85053-B.jpg",
            width: 284,
            height: 450,
            alt: "Vatican (2 of 12) exhibitor postcard No. 85053-B",
          },
          reverse: {
            src: "/images/pcards08/85053-Breverse.jpg",
            width: 300,
            height: 53,
            alt: "Reverse — Vatican (2 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (2 of 12)",
            "The Madonna",
            exhibitorSet,
            "No. 85053-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85054-B.jpg",
            width: 282,
            height: 450,
            alt: "Vatican (3 of 12) exhibitor postcard No. 85054-B",
          },
          reverse: {
            src: "/images/pcards08/85054-Breverse.jpg",
            width: 300,
            height: 54,
            alt: "Reverse — Vatican (3 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (3 of 12)",
            "The Face of the Saviour",
            exhibitorSet,
            "No. 85054-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85055-B.jpg",
            width: 284,
            height: 450,
            alt: "Vatican (4 of 12) exhibitor postcard No. 85055-B",
          },
          reverse: {
            src: "/images/pcards08/85055-Breverse.jpg",
            width: 300,
            height: 56,
            alt: "Reverse — Vatican (4 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (4 of 12)",
            "The Swiss Guard",
            exhibitorSet,
            "No. 85055-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85056-B.jpg",
            width: 450,
            height: 282,
            alt: "Vatican (5 of 12) exhibitor postcard No. 85056-B",
          },
          reverse: {
            src: "/images/pcards08/85056-Breverse.jpg",
            width: 300,
            height: 53,
            alt: "Reverse — Vatican (5 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (5 of 12)",
            "Doctors of the Church",
            exhibitorSet,
            "No. 85056-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85057-B.jpg",
            width: 282,
            height: 450,
            alt: "Vatican (6 of 12) exhibitor postcard No. 85057-B",
          },
          reverse: {
            src: "/images/pcards08/85057-Breverse.jpg",
            width: 300,
            height: 45,
            alt: "Reverse — Vatican (6 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (6 of 12)",
            "Medallion of Pope John XXIII",
            exhibitorSet,
            "No. 85057-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85058-B.jpg",
            width: 282,
            height: 450,
            alt: "Vatican (7 of 12) exhibitor postcard No. 85058-B",
          },
          reverse: {
            src: "/images/pcards08/85058-Breverse.jpg",
            width: 300,
            height: 47,
            alt: "Reverse — Vatican (7 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (7 of 12)",
            "Medallion of Pope Paul VI",
            exhibitorSet,
            "No. 85058-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85059-B.jpg",
            width: 281,
            height: 450,
            alt: "Vatican (8 of 12) exhibitor postcard No. 85059-B",
          },
          reverse: {
            src: "/images/pcards08/85059-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Vatican (8 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (8 of 12)",
            "Statue of The Good Shephard",
            exhibitorSet,
            "No. 85059-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85060-B.jpg",
            width: 283,
            height: 450,
            alt: "Vatican (9 of 12) exhibitor postcard No. 85060-B",
          },
          reverse: {
            src: "/images/pcards08/85060-Breverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse — Vatican (9 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (9 of 12)",
            "Replica of Tomb of St. Peter",
            exhibitorSet,
            "No. 85060-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85061-B.jpg",
            width: 279,
            height: 450,
            alt: "Vatican (10 of 12) exhibitor postcard No. 85061-B",
          },
          reverse: {
            src: "/images/pcards08/85061-Breverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse — Vatican (10 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (10 of 12)",
            "Sistine Chapel",
            exhibitorSet,
            "No. 85061-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/85062-B.jpg",
            width: 450,
            height: 281,
            alt: "Vatican (11 of 12) exhibitor postcard No. 85062-B",
          },
          reverse: {
            src: "/images/pcards08/85062-Breverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse — Vatican (11 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican (11 of 12)",
            "Chapel of The Good Shepard",
            exhibitorSet,
            "No. 85062-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/88972-B.jpg",
            width: 450,
            height: 283,
            alt: "Vatican Pavilion (12 of 12) exhibitor postcard No. 88972-B",
          },
          reverse: {
            src: "/images/pcards08/88972-Breverse.jpg",
            width: 300,
            height: 49,
            alt: "Reverse — Vatican Pavilion (12 of 12) exhibitor postcard",
          },
          meta: [
            "Vatican Pavilion (12 of 12)",
            exhibitorSet,
            "No. 88972-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86476-B.jpg",
            width: 450,
            height: 285,
            alt: "Auto Thrill Show exhibitor postcard No. 86476-B",
          },
          reverse: {
            src: "/images/pcards08/86476-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Auto Thrill Show exhibitor postcard",
          },
          meta: [
            "Auto Thrill Show",
            exhibitor,
            "No. 86476-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Craigmoor, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86859-B(2).jpg",
            width: 450,
            height: 282,
            alt: "Thailand Pavilion exhibitor postcard No. 86859-B",
          },
          reverse: {
            src: "/images/pcards08/86859-B(2)reverse.jpg",
            width: 300,
            height: 110,
            alt: "Reverse — Thailand Pavilion exhibitor postcard",
          },
          meta: [
            "Thailand Pavilion",
            exhibitor,
            "No. 86859-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Thailand Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards08/87309-B.jpg",
            width: 450,
            height: 280,
            alt: "The Swiss Skyride exhibitor postcard No. 87309-B",
          },
          reverse: {
            src: "/images/pcards08/87309-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Reverse — The Swiss Skyride exhibitor postcard",
          },
          meta: [
            "The Swiss Skyride",
            exhibitor,
            "No. 87309-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press - West Nyack, N.Y.",
            "Source: Postcard Published by Lancar 700 Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards08/87316-B.jpg",
            width: 450,
            height: 283,
            alt: "U.S. Royal Giant Tire exhibitor postcard No. 87316-B",
          },
          reverse: {
            src: "/images/pcards08/87316-Breverse.jpg",
            width: 300,
            height: 98,
            alt: "Reverse — U.S. Royal Giant Tire exhibitor postcard",
          },
          meta: [
            "U.S. Royal Giant Tire",
            exhibitor,
            "No. 87316-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press - West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86405-B.jpg",
            width: 450,
            height: 288,
            alt: "Republic of China (1 of 11) exhibitor postcard No. 86405-B",
          },
          reverse: {
            src: "/images/pcards08/86405-Breverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse — Republic of China (1 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (1 of 11)",
            "Balcony",
            exhibitorSet,
            "No. 86405-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New Yo",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86484-B.jpg",
            width: 450,
            height: 288,
            alt: "Republic of China (2 of 11) exhibitor postcard No. 86484-B",
          },
          reverse: {
            src: "/images/pcards08/86484-Breverse.jpg",
            width: 300,
            height: 117,
            alt: "Reverse — Republic of China (2 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (2 of 11)",
            "Second Floor Exhibit",
            exhibitorSet,
            "No. 86484-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86486-B.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China (3 of 11) exhibitor postcard No. 86486-B",
          },
          reverse: {
            src: "/images/pcards08/86486-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Republic of China (3 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (3 of 11)",
            "The Pavilion",
            exhibitorSet,
            "No. 86486-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86487-B.jpg",
            width: 450,
            height: 282,
            alt: "Republic of China (4 of 11) exhibitor postcard No. 86487-B",
          },
          reverse: {
            src: "/images/pcards08/86487-Breverse.jpg",
            width: 300,
            height: 71,
            alt: "Reverse — Republic of China (4 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (4 of 11)",
            "Ceremonial Arch",
            exhibitorSet,
            "No. 86487-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86488-B.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China (5 of 11) exhibitor postcard No. 86488-B",
          },
          reverse: {
            src: "/images/pcards08/86488-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Republic of China (5 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (5 of 11)",
            "Chinese Architecture",
            exhibitorSet,
            "No. 86488-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/86489-B.jpg",
            width: 450,
            height: 293,
            alt: "Republic of China (6 of 11) exhibitor postcard No. 86489-B",
          },
          reverse: {
            src: "/images/pcards08/86489-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Republic of China (6 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (6 of 11)",
            "Front View Framed by Arch",
            exhibitorSet,
            "No. 86489-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/87332-B.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China (7 of 11) exhibitor postcard No. 87332-B",
          },
          reverse: {
            src: "/images/pcards08/87332-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Republic of China (7 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (7 of 11)",
            "Unisphere from Pavilion",
            exhibitorSet,
            "No. 87332-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/87333-B.jpg",
            width: 450,
            height: 281,
            alt: "Republic of China (8 of 11) exhibitor postcard No. 87333-B",
          },
          reverse: {
            src: "/images/pcards08/87333-Breverse.jpg",
            width: 300,
            height: 72,
            alt: "Reverse — Republic of China (8 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (8 of 11)",
            "Chinese Pavilion Faces Unisphere",
            exhibitorSet,
            "No. 87333-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/87334-B.jpg",
            width: 286,
            height: 450,
            alt: "Republic of China (9 of 11) exhibitor postcard No. 87334-B",
          },
          reverse: {
            src: "/images/pcards08/87334-Breverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse — Republic of China (9 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (9 of 11)",
            "Reflection of Pavilion",
            exhibitorSet,
            "No. 87334-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/87335-B.jpg",
            width: 450,
            height: 283,
            alt: "Republic of China (10 of 11) exhibitor postcard No. 87335-B",
          },
          reverse: {
            src: "/images/pcards08/87335-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Republic of China (10 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (10 of 11)",
            "The Pavilion at Night",
            exhibitorSet,
            "No. 87335-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards08/88255-B.jpg",
            width: 450,
            height: 287,
            alt: "Republic of China (11 of 11) exhibitor postcard No. 88255-B",
          },
          reverse: {
            src: "/images/pcards08/88255-Breverse.jpg",
            width: 300,
            height: 134,
            alt: "Reverse — Republic of China (11 of 11) exhibitor postcard",
          },
          meta: [
            "Republic of China (11 of 11)",
            "Carved Wood Screen",
            exhibitorSet,
            "No. 88255-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Chinese News Service, New York",
          ],
        }
      ]}
    />
  );
}
