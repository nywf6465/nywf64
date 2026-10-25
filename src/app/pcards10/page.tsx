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
 * Exhibitor Postcards gallery continued (legacy pcards11.html → /pcards10).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 11. PREVIOUS → /pcards09; NEXT → /pcards11.
 */
export default function Pcards10Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards10-title"
      title="Exhibitor Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards09"
      overviewHref="/pcardsoverview"
      nextHref="/pcards11"
      entries={[
        {
          front: {
            src: "/images/pcards10/96323-B.jpg",
            width: 450,
            height: 284,
            alt: "Wonderful World of Scouting (1 of 6) exhibitor postcard No. 96323-B",
          },
          reverse: {
            src: "/images/pcards10/96323-Breverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Wonderful World of Scouting (1 of 6) exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting (1 of 6)",
            "Scouts at Unisphere",
            exhibitorSet,
            "No. 96323-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/96324-B.jpg",
            width: 450,
            height: 280,
            alt: "Wonderful World of Scouting (2 of 6) exhibitor postcard No. 96324-B",
          },
          reverse: {
            src: "/images/pcards10/96324-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — Wonderful World of Scouting (2 of 6) exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting (2 of 6)",
            "Scouts at Scout Exhibit",
            exhibitorSet,
            "No. 96324-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/96325-B.jpg",
            width: 450,
            height: 281,
            alt: "Wonderful World of Scouting (3 of 6) exhibitor postcard No. 96325-B",
          },
          reverse: {
            src: "/images/pcards10/96325-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Wonderful World of Scouting (3 of 6) exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting (3 of 6)",
            "Indians in Scout Exhibit",
            exhibitorSet,
            "No. 96325-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/96326-B.jpg",
            width: 450,
            height: 282,
            alt: "Wonderful World of Scouting (4 of 6) exhibitor postcard No. 96326-B",
          },
          reverse: {
            src: "/images/pcards10/96326-Breverse.jpg",
            width: 300,
            height: 103,
            alt: "Reverse — Wonderful World of Scouting (4 of 6) exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting (4 of 6)",
            "Scout Exhibit w/Unisphere",
            exhibitorSet,
            "No. 96326-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/96327-B.jpg",
            width: 450,
            height: 283,
            alt: "Wonderful World of Scouting (5 of 6) exhibitor postcard No. 96327-B",
          },
          reverse: {
            src: "/images/pcards10/96327-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Wonderful World of Scouting (5 of 6) exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting (5 of 6)",
            "Scouts at Continental Insurance",
            exhibitorSet,
            "No. 96327-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/96328-B.jpg",
            width: 450,
            height: 283,
            alt: "Wonderful World of Scouting (6 of 6) exhibitor postcard No. 96328-B",
          },
          reverse: {
            src: "/images/pcards10/96328-Breverse.jpg",
            width: 300,
            height: 102,
            alt: "Reverse — Wonderful World of Scouting (6 of 6) exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting (6 of 6)",
            "Scouts at U.S. Pavilion",
            exhibitorSet,
            "No. 96328-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/96384-B.jpg",
            width: 450,
            height: 283,
            alt: "Kodak Pavilion exhibitor postcard No. 96384-B",
          },
          reverse: {
            src: "/images/pcards10/96384-Breverse.jpg",
            width: 300,
            height: 59,
            alt: "Reverse — Kodak Pavilion exhibitor postcard",
          },
          meta: [
            "Kodak Pavilion",
            exhibitor,
            "No. 96384-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98035-B.jpg",
            width: 450,
            height: 282,
            alt: "Sinclair Dinoland (1 of 5) exhibitor postcard No. 98035-B",
          },
          reverse: {
            src: "/images/pcards10/98035-Breverse.jpg",
            width: 300,
            height: 52,
            alt: "Reverse — Sinclair Dinoland (1 of 5) exhibitor postcard",
          },
          meta: [
            "Sinclair Dinoland (1 of 5)",
            "Aerial View",
            exhibitorSet,
            "No. 98035-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98036-B.jpg",
            width: 450,
            height: 284,
            alt: "Sinclair Dinoland (2 of 5) exhibitor postcard No. 98036-B",
          },
          reverse: {
            src: "/images/pcards10/98036-Breverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse — Sinclair Dinoland (2 of 5) exhibitor postcard",
          },
          meta: [
            "Sinclair Dinoland (2 of 5)",
            "Brontosaurus",
            exhibitorSet,
            "No. 98036-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98037-B.jpg",
            width: 450,
            height: 281,
            alt: "Sinclair Dinoland (3 of 5) exhibitor postcard No. 98037-B",
          },
          reverse: {
            src: "/images/pcards10/98037-Breverse.jpg",
            width: 300,
            height: 60,
            alt: "Reverse — Sinclair Dinoland (3 of 5) exhibitor postcard",
          },
          meta: [
            "Sinclair Dinoland (3 of 5)",
            "Corthosaurus",
            exhibitorSet,
            "No. 98037-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98038-B.jpg",
            width: 282,
            height: 450,
            alt: "Sinclair Dinoland (4 of 5) exhibitor postcard No. 98038-B",
          },
          reverse: {
            src: "/images/pcards10/98038-Breverse.jpg",
            width: 300,
            height: 64,
            alt: "Reverse — Sinclair Dinoland (4 of 5) exhibitor postcard",
          },
          meta: [
            "Sinclair Dinoland (4 of 5)",
            "Trachodon",
            exhibitorSet,
            "No. 98038-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards10/DT-88533-B.jpg",
            width: 282,
            height: 450,
            alt: "Sinclair Dinoland (5 of 5) exhibitor postcard No. DT-88533-B",
          },
          reverse: {
            src: "/images/pcards10/DT-88533-Breverse.jpg",
            width: 300,
            height: 71,
            alt: "Reverse — Sinclair Dinoland (5 of 5) exhibitor postcard",
          },
          meta: [
            "Sinclair Dinoland (5 of 5)",
            "Tyrannosaurus Rex",
            exhibitorSet,
            "No. DT-88533-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98092-B.jpg",
            width: 450,
            height: 279,
            alt: "Dynamic Maturity Pavilion exhibitor postcard No. 98092-B",
          },
          reverse: {
            src: "/images/pcards10/98092-Breverse.jpg",
            width: 300,
            height: 69,
            alt: "Reverse — Dynamic Maturity Pavilion exhibitor postcard",
          },
          meta: [
            "Dynamic Maturity Pavilion",
            exhibitor,
            "No. 98092-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Dynamic Maturity Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards10/97091-B.jpg",
            width: 280,
            height: 450,
            alt: "Belgian Village (1 of 8) exhibitor postcard No. 97091-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (1 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (1 of 8)",
            "Night View of Village with Tower",
            exhibitorSet,
            "No. 97091-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98700-B.jpg",
            width: 280,
            height: 450,
            alt: "Belgian Village (2 of 8) exhibitor postcard No. 98700-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (2 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (2 of 8)",
            "Entrance to Pavilion through Vatican Arch",
            exhibitorSet,
            "No. 98700-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98701-B.jpg",
            width: 450,
            height: 282,
            alt: "Belgian Village (3 of 8) exhibitor postcard No. 98701-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (3 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (3 of 8)",
            "Scene in Village with Tower",
            exhibitorSet,
            "No. 98701-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98702-B.jpg",
            width: 279,
            height: 450,
            alt: "Belgian Village (4 of 8) exhibitor postcard No. 98702-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (4 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (4 of 8)",
            "Through Arch in Village",
            exhibitorSet,
            "No. 98702-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98703-B.jpg",
            width: 450,
            height: 281,
            alt: "Belgian Village (5 of 8) exhibitor postcard No. 98703-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (5 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (5 of 8)",
            "Outside Village near Vatican",
            exhibitorSet,
            "No. 98703-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98705-B.jpg",
            width: 450,
            height: 282,
            alt: "Belgian Village (6 of 8) exhibitor postcard No. 98705-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (6 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (6 of 8)",
            "Night View in the Village",
            exhibitorSet,
            "No. 98705-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98706-B.jpg",
            width: 450,
            height: 280,
            alt: "Belgian Village (7 of 8) exhibitor postcard No. 98706-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (7 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (7 of 8)",
            "Day View in Village Main Square",
            exhibitorSet,
            "No. 98706-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/98707-B.jpg",
            width: 450,
            height: 282,
            alt: "Belgian Village (8 of 8) exhibitor postcard No. 98707-B",
          },
          reverse: {
            src: "/images/pcards10/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Belgian Village (8 of 8) exhibitor postcard",
          },
          meta: [
            "Belgian Village (8 of 8)",
            "Night View of Carousel",
            exhibitorSet,
            "No. 98707-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Island Refreshment Corporation",
          ],
        },
        {
          front: {
            src: "/images/pcards10/S-57120.jpg",
            width: 450,
            height: 285,
            alt: "Belgian Village exhibitor postcard No. S-57120",
          },
          reverse: {
            src: "/images/pcards10/S-57120reverse.jpg",
            width: 300,
            height: 114,
            alt: "Reverse — Belgian Village exhibitor postcard",
          },
          meta: [
            "Belgian Village",
            "Ballantine Rathskeller",
            exhibitor,
            "No. S-57120",
          ],
          sources: [
            "Source: Postcard Made by Shelton Color Process, Hackensack, N.J.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards10/None(38).jpg",
            width: 450,
            height: 283,
            alt: "Mormon Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards10/None(38)reverse.jpg",
            width: 300,
            height: 151,
            alt: "Reverse — Mormon Pavilion exhibitor postcard",
          },
          meta: [
            "Mormon Pavilion",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Deseret Book Company",
          ],
        }
      ]}
    />
  );
}
