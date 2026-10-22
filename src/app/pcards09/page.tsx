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
 * Exhibitor Postcards gallery continued (legacy pcards10.html → /pcards09).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 10. PREVIOUS → /pcards08; NEXT → /pcards10.
 */
export default function Pcards09Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards09-title"
      title="Exhibitor Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards08"
      overviewHref="/pcardsoverview"
      nextHref="/pcards10"
      entries={[
        {
          front: {
            src: "/images/pcards09/87339-B.jpg",
            width: 450,
            height: 282,
            alt: "Swedish Pavilion exhibitor postcard No. 87339-B",
          },
          reverse: {
            src: "/images/pcards09/87339-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Swedish Pavilion exhibitor postcard",
          },
          meta: [
            "Swedish Pavilion",
            exhibitor,
            "No. 87339-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press - West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/87422-B(2).jpg",
            width: 450,
            height: 281,
            alt: "Tower of Light exhibitor postcard No. 87422-B",
          },
          reverse: {
            src: "/images/pcards09/87422-B(2)reverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse — Tower of Light exhibitor postcard",
          },
          meta: [
            "Tower of Light",
            exhibitor,
            "No. 87422-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88289-B.jpg",
            width: 450,
            height: 279,
            alt: "Continental Insurance Companies Pavilion exhibitor postcard No. 88289-B",
          },
          reverse: {
            src: "/images/pcards09/88289-Breverse.jpg",
            width: 300,
            height: 109,
            alt: "Reverse — Continental Insurance Companies Pavilion exhibitor postcard",
          },
          meta: [
            "Continental Insurance Companies Pavilion",
            exhibitor,
            "No. 88289-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/87861-B.jpg",
            width: 450,
            height: 280,
            alt: "Austrian Pavilion exhibitor postcard No. 87861-B",
          },
          reverse: {
            src: "/images/pcards09/87861-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Austrian Pavilion exhibitor postcard",
          },
          meta: [
            "Austrian Pavilion",
            exhibitor,
            "No. 87861-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Austrian Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards09/87876-B.jpg",
            width: 450,
            height: 282,
            alt: "Simmons exhibitor postcard No. 87876-B",
          },
          reverse: {
            src: "/images/pcards09/87876-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Reverse — Simmons exhibitor postcard",
          },
          meta: [
            "Simmons",
            exhibitor,
            "No. 87876-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Simmons Company",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88256-B.jpg",
            width: 450,
            height: 279,
            alt: "New Jersey Tercentenary Pavilion exhibitor postcard No. 88256-B",
          },
          belowFront: {
            src: "/images/pcards09/88256-Breverse(2).jpg",
            width: 300,
            height: 63,
            alt: "Reverse B — New Jersey Tercentenary Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/pcards09/88256-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — New Jersey Tercentenary Pavilion exhibitor postcard",
          },
          meta: [
            "New Jersey Tercentenary Pavilion",
            exhibitor,
            "No. 88256-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by State of New Jersey Tercentenary Commission",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88269-B.jpg",
            width: 450,
            height: 282,
            alt: "Billy Graham Pavilion (1 of 10) exhibitor postcard No. 88269-B",
          },
          reverse: {
            src: "/images/pcards09/88269-Breverse.jpg",
            width: 300,
            height: 95,
            alt: "Reverse — Billy Graham Pavilion (1 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (1 of 10)",
            "In a Galilean Carpenter Shop",
            exhibitorSet,
            "No. 88269-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88270-B.jpg",
            width: 450,
            height: 281,
            alt: "Billy Graham Pavilion (2 of 10) exhibitor postcard No. 88270-B",
          },
          reverse: {
            src: "/images/pcards09/88270-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Billy Graham Pavilion (2 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (2 of 10)",
            "The Pavilion at Night",
            exhibitorSet,
            "No. 88270-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88271-B.jpg",
            width: 450,
            height: 288,
            alt: "Billy Graham Pavilion (3 of 10) exhibitor postcard No. 88271-B",
          },
          reverse: {
            src: "/images/pcards09/88271-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Billy Graham Pavilion (3 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (3 of 10)",
            "Filming of \"Man in the 5th Dimension\"",
            exhibitorSet,
            "No. 88271-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88272-B.jpg",
            width: 450,
            height: 284,
            alt: "Billy Graham Pavilion (4 of 10) exhibitor postcard No. 88272-B",
          },
          reverse: {
            src: "/images/pcards09/88272-Breverse.jpg",
            width: 300,
            height: 129,
            alt: "Reverse — Billy Graham Pavilion (4 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (4 of 10)",
            "Jerusalem, the Holy City",
            exhibitorSet,
            "No. 88272-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88273-B.jpg",
            width: 450,
            height: 285,
            alt: "Billy Graham Pavilion (5 of 10) exhibitor postcard No. 88273-B",
          },
          reverse: {
            src: "/images/pcards09/88273-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Billy Graham Pavilion (5 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (5 of 10)",
            "Billy Graham Pavilion",
            exhibitorSet,
            "No. 88273-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88274-B.jpg",
            width: 284,
            height: 450,
            alt: "Billy Graham Pavilion (5 of 10) exhibitor postcard No. 88274-B",
          },
          reverse: {
            src: "/images/pcards09/88274-Breverse.jpg",
            width: 300,
            height: 131,
            alt: "Reverse — Billy Graham Pavilion (5 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (5 of 10)",
            "Tower and Fountains",
            exhibitorSet,
            "No. 88274-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88275-B.jpg",
            width: 450,
            height: 285,
            alt: "Billy Graham Pavilion (7 of 10 exhibitor postcard No. 88275-B",
          },
          reverse: {
            src: "/images/pcards09/88275-Breverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse — Billy Graham Pavilion (7 of 10 exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (7 of 10",
            "Inside the Pavilion Theatre",
            exhibitorSet,
            "No. 88275-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88276-B.jpg",
            width: 450,
            height: 284,
            alt: "Billy Graham Pavilion (8 of 10) exhibitor postcard No. 88276-B",
          },
          reverse: {
            src: "/images/pcards09/88276-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Billy Graham Pavilion (8 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (8 of 10)",
            "The Created Universe",
            exhibitorSet,
            "No. 88276-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88277-B.jpg",
            width: 450,
            height: 283,
            alt: "Billy Graham Pavilion (9 of 10) exhibitor postcard No. 88277-B",
          },
          reverse: {
            src: "/images/pcards09/88277-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Billy Graham Pavilion (9 of 10) exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (9 of 10)",
            "Along the Avenue of the Americas",
            exhibitorSet,
            "No. 88277-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88278-B.jpg",
            width: 279,
            height: 450,
            alt: "Billy Graham Pavilion (10 of 10 exhibitor postcard No. 88278-B",
          },
          reverse: {
            src: "/images/pcards09/88278-Breverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — Billy Graham Pavilion (10 of 10 exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion (10 of 10",
            "In the Pavilion Courtyard",
            exhibitorSet,
            "No. 88278-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88287-B.jpg",
            width: 283,
            height: 450,
            alt: "American Express Money Tree exhibitor postcard No. 88287-B",
          },
          reverse: {
            src: "/images/pcards09/88287-Breverse.jpg",
            width: 300,
            height: 128,
            alt: "Reverse — American Express Money Tree exhibitor postcard",
          },
          meta: [
            "American Express Money Tree",
            exhibitor,
            "No. 88287-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American Express Company",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88288-B.jpg",
            width: 450,
            height: 284,
            alt: "American Express Pavilion exhibitor postcard No. 88288-B",
          },
          reverse: {
            src: "/images/pcards09/88288-Breverse.jpg",
            width: 300,
            height: 118,
            alt: "Reverse — American Express Pavilion exhibitor postcard",
          },
          meta: [
            "American Express Pavilion",
            exhibitor,
            "No. 88288-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American Express Company",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88260-B.jpg",
            width: 450,
            height: 285,
            alt: "Protestant and Orthodox Center exhibitor postcard No. 88260-B",
          },
          reverse: {
            src: "/images/pcards09/88260-Breverse.jpg",
            width: 300,
            height: 131,
            alt: "Reverse — Protestant and Orthodox Center exhibitor postcard",
          },
          meta: [
            "Protestant and Orthodox Center",
            "United Presbyterian Church",
            exhibitor,
            "No. 88260-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88319-B.jpg",
            width: 280,
            height: 450,
            alt: "Eastman Kodak exhibitor postcard No. 88319-B",
          },
          belowFront: {
            src: "/images/pcards09/88319-Breverse2.jpg",
            width: 300,
            height: 305,
            alt: "Reverse B — Eastman Kodak exhibitor postcard",
          },
          reverse: {
            src: "/images/pcards09/88319-Breverse.jpg",
            width: 300,
            height: 81,
            alt: "Reverse — Eastman Kodak exhibitor postcard",
          },
          meta: [
            "Eastman Kodak",
            exhibitor,
            "No. 88319-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor, Rochester, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88325-B.jpg",
            width: 450,
            height: 281,
            alt: "Montana exhibitor postcard No. 88325-B",
          },
          reverse: {
            src: "/images/pcards09/88325-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Montana exhibitor postcard",
          },
          meta: [
            "Montana",
            exhibitor,
            "No. 88325-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Montana Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88347-B.jpg",
            width: 450,
            height: 283,
            alt: "TIK-TOK Seiko Watch Exhibit exhibitor postcard No. 88347-B",
          },
          reverse: {
            src: "/images/pcards09/88347-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — TIK-TOK Seiko Watch Exhibit exhibitor postcard",
          },
          meta: [
            "TIK-TOK Seiko Watch Exhibit",
            exhibitor,
            "No. 88347-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Tokyu America, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88462-B.jpg",
            width: 450,
            height: 283,
            alt: "Texas Pavilion (1 of 4) exhibitor postcard No. 88462-B",
          },
          reverse: {
            src: "/images/pcards09/88462-Breverse.jpg",
            width: 300,
            height: 48,
            alt: "Reverse — Texas Pavilion (1 of 4) exhibitor postcard",
          },
          meta: [
            "Texas Pavilion (1 of 4)",
            "The Frontier Palace",
            exhibitorSet,
            "No. 88462-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Interstate Hosts Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88463-B.jpg",
            width: 450,
            height: 284,
            alt: "Texas Pavilion (2 of 4) exhibitor postcard No. 88463-B",
          },
          reverse: {
            src: "/images/pcards09/88463-Breverse.jpg",
            width: 300,
            height: 44,
            alt: "Reverse — Texas Pavilion (2 of 4) exhibitor postcard",
          },
          meta: [
            "Texas Pavilion (2 of 4)",
            "The Music Hall",
            exhibitorSet,
            "No. 88463-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Interstate Hosts Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88464-B.jpg",
            width: 450,
            height: 283,
            alt: "Texas Pavilion (3 of 4) exhibitor postcard No. 88464-B",
          },
          reverse: {
            src: "/images/pcards09/88464-Breverse.jpg",
            width: 300,
            height: 57,
            alt: "Reverse — Texas Pavilion (3 of 4) exhibitor postcard",
          },
          meta: [
            "Texas Pavilion (3 of 4)",
            "The Gateway to Mexico",
            exhibitorSet,
            "No. 88464-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Interstate Hosts Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88465-B.jpg",
            width: 450,
            height: 281,
            alt: "Texas Pavilion (4 of 4) exhibitor postcard No. 88465-B",
          },
          reverse: {
            src: "/images/pcards09/88465-Breverse.jpg",
            width: 300,
            height: 48,
            alt: "Reverse — Texas Pavilion (4 of 4) exhibitor postcard",
          },
          meta: [
            "Texas Pavilion (4 of 4)",
            "Interstate Host Gift Shop",
            exhibitorSet,
            "No. 88465-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Interstate Hosts Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88511-B.jpg",
            width: 450,
            height: 280,
            alt: "Philippines Pavilion exhibitor postcard No. 88511-B",
          },
          reverse: {
            src: "/images/pcards09/88511-Breverse.jpg",
            width: 300,
            height: 127,
            alt: "Reverse — Philippines Pavilion exhibitor postcard",
          },
          meta: [
            "Philippines Pavilion",
            exhibitor,
            "No. 88511-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Philippine Participation, New York World's Fair",
          ],
        },
        {
          front: {
            src: "/images/pcards09/88661-B.jpg",
            width: 450,
            height: 281,
            alt: "Berlin Pavilion exhibitor postcard No. 88661-B",
          },
          reverse: {
            src: "/images/pcards09/88661-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Berlin Pavilion exhibitor postcard",
          },
          meta: [
            "Berlin Pavilion",
            exhibitor,
            "No. 88661-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Berlin Marketing Council",
          ],
        },
        {
          front: {
            src: "/images/pcards09/89811-B.jpg",
            width: 450,
            height: 285,
            alt: "Minnesota Pavilion exhibitor postcard No. 89811-B",
          },
          reverse: {
            src: "/images/pcards09/89811-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Minnesota Pavilion exhibitor postcard",
          },
          meta: [
            "Minnesota Pavilion",
            exhibitor,
            "No. 89811-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Minnesota Concessions",
          ],
        },
        {
          front: {
            src: "/images/pcards09/89814-B.jpg",
            width: 280,
            height: 450,
            alt: "Continental Insurance Pavilion exhibitor postcard No. 89814-B",
          },
          reverse: {
            src: "/images/pcards09/89814-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Continental Insurance Pavilion exhibitor postcard",
          },
          meta: [
            "Continental Insurance Pavilion",
            exhibitor,
            "No. 89814-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Continental Insurance",
          ],
        },
        {
          front: {
            src: "/images/pcards09/89825-B.jpg",
            width: 450,
            height: 282,
            alt: "Swedish Pavilion exhibitor postcard No. 89825-B",
          },
          reverse: {
            src: "/images/pcards09/89825-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Swedish Pavilion exhibitor postcard",
          },
          meta: [
            "Swedish Pavilion",
            "ASEA Powerama Exhibit",
            exhibitor,
            "No. 89825-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/89861-B.jpg",
            width: 450,
            height: 286,
            alt: "Wycliffe Bible Translators / 2000 Tribes exhibitor postcard No. 89861-B",
          },
          reverse: {
            src: "/images/pcards09/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Wycliffe Bible Translators / 2000 Tribes exhibitor postcard",
          },
          meta: [
            "Wycliffe Bible Translators / 2000 Tribes",
            "Pavilion",
            exhibitor,
            "No. 89861-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Pavilion of 2000 Tribes",
            "Source: Online Auction",
          ],
        },
        {
          front: {
            src: "/images/pcards09/72972.jpg",
            width: 450,
            height: 290,
            alt: "Wycliffe Bible Translators / 2000 Tribes exhibitor postcard No. 72972",
          },
          reverse: {
            src: "/images/pcards09/72972reverse.jpg",
            width: 300,
            height: 142,
            alt: "Reverse — Wycliffe Bible Translators / 2000 Tribes exhibitor postcard",
          },
          meta: [
            "Wycliffe Bible Translators / 2000 Tribes",
            "\"From Savage to Citizen\" - Conversion",
            exhibitor,
            "No. 72972",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Dan Bush Associates",
          ],
        },
        {
          front: {
            src: "/images/pcards09/74058.jpg",
            width: 450,
            height: 287,
            alt: "Wycliffe Bible Translators / 2000 Tribes exhibitor postcard No. 74058",
          },
          reverse: {
            src: "/images/pcards09/74058reverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse — Wycliffe Bible Translators / 2000 Tribes exhibitor postcard",
          },
          meta: [
            "Wycliffe Bible Translators / 2000 Tribes",
            "\"From Savage to Citizen\" - Massacre",
            exhibitor,
            "No. 74058",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards09/89883-B.jpg",
            width: 450,
            height: 282,
            alt: "International Plaza exhibitor postcard No. 89883-B",
          },
          reverse: {
            src: "/images/pcards09/89883-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — International Plaza exhibitor postcard",
          },
          meta: [
            "International Plaza",
            "Hummel Pavilion",
            exhibitor,
            "No. 89883-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Hummel Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards09/91903-B.jpg",
            width: 475,
            height: 323,
            alt: "Lowenbrau Gardens exhibitor postcard No. 91903-B",
          },
          reverse: {
            src: "/images/pcards09/91903-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Lowenbrau Gardens exhibitor postcard",
          },
          meta: [
            "Lowenbrau Gardens",
            "Horse and German Girls",
            exhibitor,
            "No. 91903-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Hans Holterbosch Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards09/91904-B.jpg",
            width: 323,
            height: 475,
            alt: "Lowenbrau Gardens exhibitor postcard No. 91904-B",
          },
          reverse: {
            src: "/images/pcards09/91904-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Reverse — Lowenbrau Gardens exhibitor postcard",
          },
          meta: [
            "Lowenbrau Gardens",
            "Bavarian Hostesses",
            exhibitor,
            "No. 91904-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Hans Holterbosch Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards09/91905-B.jpg",
            width: 475,
            height: 323,
            alt: "Lowenbrau Gardens exhibitor postcard No. 91905-B",
          },
          reverse: {
            src: "/images/pcards09/91905-Breverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Lowenbrau Gardens exhibitor postcard",
          },
          meta: [
            "Lowenbrau Gardens",
            "Lowenbrau Pavilion",
            exhibitor,
            "No. 91905-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Hans Holterbosch Incorporated",
          ],
        }
      ]}
    />
  );
}
