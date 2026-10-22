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

/**
 * Exhibitor Postcards gallery (legacy pcards08.html → /pcards07).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 8. PREVIOUS → /pcards06; NEXT → /pcards08.
 */
export default function Pcards07Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards07-title"
      title="Exhibitor Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards06"
      overviewHref="/pcardsoverview"
      nextHref="/pcards08"
      entries={[
        {
          front: {
            src: "/images/pcards07/None(1).jpg",
            width: 450,
            height: 281,
            alt: "Eastern Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(1)reverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse — Eastern Pavilion exhibitor postcard",
          },
          meta: [
            "Eastern Pavilion",
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
            src: "/images/pcards07/None(26).jpg",
            width: 450,
            height: 285,
            alt: "Sermons from Science exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(26)reverse.jpg",
            width: 300,
            height: 181,
            alt: "Reverse — Sermons from Science exhibitor postcard",
          },
          meta: [
            "Sermons from Science",
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
            src: "/images/pcards07/None(3).jpg",
            width: 450,
            height: 283,
            alt: "Wisconsin Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(3)reverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — Wisconsin Pavilion exhibitor postcard",
          },
          meta: [
            "Wisconsin Pavilion",
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
            src: "/images/pcards07/None(37).jpg",
            width: 450,
            height: 322,
            alt: "Pavilion of Republic of China exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(37)reverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — Pavilion of Republic of China exhibitor postcard",
          },
          meta: [
            "Pavilion of Republic of China",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Magical Productions Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(2).jpg",
            width: 450,
            height: 264,
            alt: "General Cigar \"Hall of Magic\" exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(2)reverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — General Cigar \"Hall of Magic\" exhibitor postcard",
          },
          meta: [
            "General Cigar \"Hall of Magic\"",
            exhibitor,
            "No. N/A",
            "A five-fold card with views of Pavilion and Magic Tricks.",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Department of Economic Relations, Bangkok, Thailand",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(4).jpg",
            width: 450,
            height: 298,
            alt: "Thailand Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(4)reverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse — Thailand Pavilion exhibitor postcard",
          },
          meta: [
            "Thailand Pavilion",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Corona Color Studios, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(23).jpg",
            width: 450,
            height: 283,
            alt: "Protestant and Orthodox Center exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(23)reverse.jpg",
            width: 300,
            height: 272,
            alt: "Reverse — Protestant and Orthodox Center exhibitor postcard",
          },
          meta: [
            "Protestant and Orthodox Center",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Swedenborg Foundation, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(6).jpg",
            width: 450,
            height: 280,
            alt: "Protestant and Orthodox Center exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(6)reverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Protestant and Orthodox Center exhibitor postcard",
          },
          meta: [
            "Protestant and Orthodox Center",
            "Swedenborg Foundation, Inc.",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Tyler Mountain Memory Gardens, Inc., Charleston, W. Va.",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(25).jpg",
            width: 450,
            height: 280,
            alt: "Protestant and Orthodox Center exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(25)reverse.jpg",
            width: 300,
            height: 196,
            alt: "Reverse — Protestant and Orthodox Center exhibitor postcard",
          },
          meta: [
            "Protestant and Orthodox Center",
            "\"Last Supper\" Sculpture",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(7).jpg",
            width: 450,
            height: 281,
            alt: "World of Food exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(7)reverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — World of Food exhibitor postcard",
          },
          meta: [
            "World of Food",
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
            src: "/images/pcards07/None(5).jpg",
            width: 450,
            height: 281,
            alt: "Montana exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(5)reverse.jpg",
            width: 300,
            height: 77,
            alt: "Reverse — Montana exhibitor postcard",
          },
          meta: [
            "Montana",
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
            src: "/images/pcards07/None(8).jpg",
            width: 600,
            height: 373,
            alt: "Wonderful World of Scouting exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(8)reverse.jpg",
            width: 300,
            height: 137,
            alt: "Reverse — Wonderful World of Scouting exhibitor postcard",
          },
          meta: [
            "Wonderful World of Scouting",
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
            src: "/images/pcards07/None(27).jpg",
            width: 450,
            height: 285,
            alt: "Hollywood U.S.A. exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(27)reverse.jpg",
            width: 300,
            height: 381,
            alt: "Reverse — Hollywood U.S.A. exhibitor postcard",
          },
          meta: [
            "Hollywood U.S.A.",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(9).jpg",
            width: 450,
            height: 283,
            alt: "Billy Graham Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(9)reverse.jpg",
            width: 300,
            height: 130,
            alt: "Reverse — Billy Graham Pavilion exhibitor postcard",
          },
          meta: [
            "Billy Graham Pavilion",
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
            src: "/images/pcards07/None(10).jpg",
            width: 450,
            height: 282,
            alt: "Better Living Building exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(10)Breverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Better Living Building exhibitor postcard",
          },
          meta: [
            "Better Living Building",
            "Hilton Cafe International",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Japan Trade Center, New York",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(11).jpg",
            width: 700,
            height: 268,
            alt: "House of Good Taste exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(11)reverse.jpg",
            width: 200,
            height: 294,
            alt: "Reverse — House of Good Taste exhibitor postcard",
          },
          meta: [
            "House of Good Taste",
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
            src: "/images/pcards07/None(21).jpg",
            width: 700,
            height: 297,
            alt: "The Cities Service World's Fair Band of America exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(21)reverseB.jpg",
            width: 450,
            height: 273,
            alt: "Reverse — The Cities Service World's Fair Band of America exhibitor postcard",
          },
          meta: [
            "The Cities Service World's Fair Band of America",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(13).jpg",
            width: 600,
            height: 289,
            alt: "Singer Bowl exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(13reverse.jpg",
            width: 300,
            height: 43,
            alt: "Reverse — Singer Bowl exhibitor postcard",
          },
          meta: [
            "Singer Bowl",
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
            src: "/images/pcards07/None(12).jpg",
            width: 500,
            height: 328,
            alt: "Parker Pen Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(12)reverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — Parker Pen Pavilion exhibitor postcard",
          },
          meta: [
            "Parker Pen Pavilion",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(14).jpg",
            width: 600,
            height: 300,
            alt: "IBM Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(14reverse.jpg",
            width: 300,
            height: 25,
            alt: "Reverse — IBM Pavilion exhibitor postcard",
          },
          meta: [
            "IBM Pavilion",
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
            src: "/images/pcards07/None(16).jpg",
            width: 300,
            height: 597,
            alt: "IBM Pavilion exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(14reverse.jpg",
            width: 300,
            height: 25,
            alt: "Reverse — IBM Pavilion exhibitor postcard",
          },
          meta: [
            "IBM Pavilion",
            exhibitor,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Colourpicture Publishers, Inc. (Plastichrome)",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/P60064.jpg",
            width: 450,
            height: 326,
            alt: "India Pavilion exhibitor postcard No. P60064",
          },
          reverse: {
            src: "/images/pcards07/P60064reverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — India Pavilion exhibitor postcard",
          },
          meta: [
            "India Pavilion",
            "Decorated Mud Wall",
            exhibitor,
            "No. P60064",
          ],
          sources: [
            "Source: Postcard Made by Colourpicture Publishers, Inc. (Plastichrome)",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/P60065.jpg",
            width: 450,
            height: 280,
            alt: "India Pavilion exhibitor postcard No. P60065",
          },
          reverse: {
            src: "/images/pcards07/P60065reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — India Pavilion exhibitor postcard",
          },
          meta: [
            "India Pavilion",
            "The Entrance Hall",
            exhibitor,
            "No. P60065",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Christian Science Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards07/1435-C.jpg",
            width: 450,
            height: 285,
            alt: "Christian Science Pavilion exhibitor postcard No. 1435-C",
          },
          reverse: {
            src: "/images/pcards07/1435-Creverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Christian Science Pavilion exhibitor postcard",
          },
          meta: [
            "Christian Science Pavilion",
            exhibitor,
            "No. 1435-C",
          ],
          sources: [
            "Source: Postcard Made by Colorcraft Studios, N.Y., N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/19396.jpg",
            width: 284,
            height: 450,
            alt: "Russian Orthodox Church exhibitor postcard No. 19396",
          },
          reverse: {
            src: "/images/pcards07/19396reverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Russian Orthodox Church exhibitor postcard",
          },
          meta: [
            "Russian Orthodox Church",
            exhibitor,
            "No. 19396",
          ],
          sources: [
            "Source: Postcard Made by Colorcraft Studios, N.Y., N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/65574.jpg",
            width: 450,
            height: 283,
            alt: "National Cash Register exhibitor postcard No. 65574",
          },
          reverse: {
            src: "/images/pcards07/65574reverse.jpg",
            width: 300,
            height: 95,
            alt: "Reverse — National Cash Register exhibitor postcard",
          },
          meta: [
            "National Cash Register",
            exhibitor,
            "No. 65574",
          ],
          sources: [
            "Source: Postcard Made by Mort Kaye Studios.",
            "Source: Postcard Published by Florida W.F. Authority Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards07/65129.jpg",
            width: 450,
            height: 285,
            alt: "Florida Pavilion exhibitor postcard No. 65129",
          },
          reverse: {
            src: "/images/pcards07/65129reverse.jpg",
            width: 300,
            height: 195,
            alt: "Reverse — Florida Pavilion exhibitor postcard",
          },
          meta: [
            "Florida Pavilion",
            exhibitor,
            "No. 65129",
          ],
          sources: [
            "Source: Postcard Made by Mort Kaye Studios.",
            "Source: Postcard Published by Florida W.F. Authority Incorporated",
          ],
        },
        {
          front: {
            src: "/images/pcards07/66384.jpg",
            width: 450,
            height: 283,
            alt: "Florida Pavilion exhibitor postcard No. 66384",
          },
          reverse: {
            src: "/images/pcards07/66384reverse.jpg",
            width: 300,
            height: 168,
            alt: "Reverse — Florida Pavilion exhibitor postcard",
          },
          meta: [
            "Florida Pavilion",
            exhibitor,
            "No. 66384",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/73111-B.jpg",
            width: 450,
            height: 284,
            alt: "Sinclair Dinoland exhibitor postcard No. 73111-B",
          },
          reverse: {
            src: "/images/pcards07/73111-Breverse.jpg",
            width: 300,
            height: 55,
            alt: "Reverse — Sinclair Dinoland exhibitor postcard",
          },
          meta: [
            "Sinclair Dinoland",
            exhibitor,
            "No. 73111-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/74995-B2.jpg",
            width: 450,
            height: 281,
            alt: "Johnson Wax Golden Rondelle exhibitor postcard No. 74995-B",
          },
          reverse: {
            src: "/images/pcards07/74995-B2reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Johnson Wax Golden Rondelle exhibitor postcard",
          },
          meta: [
            "Johnson Wax Golden Rondelle",
            exhibitor,
            "No. 74995-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Alaska Crafts & Culture Corp.",
          ],
        },
        {
          front: {
            src: "/images/pcards07/78166-B.jpg",
            width: 450,
            height: 281,
            alt: "Alaskan Village exhibitor postcard No. 78166-B",
          },
          reverse: {
            src: "/images/pcards07/78166-Breverse.jpg",
            width: 300,
            height: 308,
            alt: "Reverse — Alaskan Village exhibitor postcard",
          },
          meta: [
            "Alaskan Village",
            exhibitor,
            "No. 78166-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by 1492 Enterprises, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards07/79941-B.jpg",
            width: 450,
            height: 284,
            alt: "Santa Maria exhibitor postcard No. 79941-B",
          },
          reverse: {
            src: "/images/pcards07/79941-Breverse.jpg",
            width: 300,
            height: 103,
            alt: "Reverse — Santa Maria exhibitor postcard",
          },
          meta: [
            "Santa Maria",
            exhibitor,
            "No. 79941-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Christian Science Pavilion",
          ],
        },
        {
          front: {
            src: "/images/pcards07/80475-B.jpg",
            width: 450,
            height: 282,
            alt: "Christian Science Pavilion exhibitor postcard No. 80475-B",
          },
          reverse: {
            src: "/images/pcards07/80475-Breverse.jpg",
            width: 300,
            height: 62,
            alt: "Reverse — Christian Science Pavilion exhibitor postcard",
          },
          meta: [
            "Christian Science Pavilion",
            exhibitor,
            "No. 80475-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards07/80486-B.jpg",
            width: 450,
            height: 280,
            alt: "Equitable Demograph Pavilion exhibitor postcard No. 80486-B",
          },
          reverse: {
            src: "/images/pcards07/80486-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse — Equitable Demograph Pavilion exhibitor postcard",
          },
          meta: [
            "Equitable Demograph Pavilion",
            exhibitor,
            "No. 80486-B",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Audio Visual Designs",
          ],
        },
        {
          front: {
            src: "/images/pcards07/None(31).jpg",
            width: 450,
            height: 282,
            alt: "Better Living Building exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards07/None(31)reverse.jpg",
            width: 300,
            height: 133,
            alt: "Reverse — Better Living Building exhibitor postcard",
          },
          meta: [
            "Better Living Building",
            "The General (Locomotive)",
            exhibitor,
            "No. N/A",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
