import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";

export const metadata: Metadata = {
  title: "1964 Scrapbook — Page One — World’s Fair Scrapbook — nywf64.com",
  description:
    "1964 Scrapbook Page One from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page One (legacy scrapbook02.html → /scrapbook01).
 * Shared ScrapbookHero (1905×826). Nav Page 2.
 * PREVIOUS → /scrapbookoverview; NEXT → /scrapbook02.
 */
export default function Scrapbook01Page() {
  return (
    <ScrapbookIssuePage
      title="1964 Scrapbook - Page One"
      titleId="scrapbook01-title"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbookoverview"
      overviewHref="/scrapbookoverview"
      nextHref="/scrapbook02"
      features={[
        {
          label: "Sparkling Oases",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            { type: "credit", text: "NEWS COLORPHOTOS BY DAN JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/sevup02.jpg",
                width: 400,
                height: 519,
                alt: "7-Up International Sandwich Gardens",
                captionLead: "Beneath the 7-Up",
                caption:
                  "clock tower and airy shells, hungry fairgoers can appease their appetites with a variety of sandwiches typical of 16 different countries - and the 7-Up is free. There's entertainment too.",
              },
            },
            { type: "storyTitle", text: "SPARKLING OASES" },
            {
              type: "lead",
              text: "THREE GIANTS of the soft-drink industry are bubbling over at the Fair with unique offerings. Take a Global Holiday and listen to the world's largest electronic carillon at Coca-Cola; sail around a Disney-created Small World at Pepsi-Cola, and treat your taste buds to the 7-Up International Sandwich Gardens menu.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/pepsi02.jpg",
                width: 300,
                height: 666,
                alt: "Pepsi-Cola Tower of the Four Winds",
                captionLead: "Walt Disney's",
                caption:
                  "magic is everywhere apparent at Pepsi-Cola: from the Tower of the Four Winds here to the charming UNICEF-inspired doll world inside.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/coke01.jpg",
                width: 400,
                height: 301,
                alt: "Coca-Cola pavilion bell tower",
                captionLead: "Visitors waiting",
                caption:
                  "to embark on Coca-Cola's atmospheric Global Holiday within may enjoy a carillon concert emanating from the bell tower. Pavilionn also houses a USO lounge and ham radio facilities.",
              },
            },
          ],
        },
        {
          label: "Center of Attraction",
          blocks: [
            { type: "date", text: newsDate("June 14, 1964") },
            { type: "credit", text: "NEWS COLORPHOTO BY EDMUND PETERS" },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook01/scrapbook07.01.jpg",
                  width: 400,
                  height: 266,
                  alt: "Court of States toward the Unisphere",
                },
                {
                  src: "/images/scrapbook01/scrapbook07.02.jpg",
                  width: 400,
                  height: 266,
                  alt: "Court of States toward the Unisphere",
                },
                {
                  src: "/images/scrapbook01/scrapbook07.03.jpg",
                  width: 400,
                  height: 266,
                  alt: "Court of States toward the Unisphere",
                },
                {
                  src: "/images/scrapbook01/scrapbook07.04.jpg",
                  width: 400,
                  height: 266,
                  alt: "Court of States toward the Unisphere",
                },
              ],
            },
            { type: "storyTitle", text: "CENTER OF ATTRACTION" },
            {
              type: "lead",
              text: "FOR TODAY'S SCRAPBOOK entry you're atop the United States pavilion looking along the state flag-lined Court of States toward the Unisphere, symbol of the Fair. Bordering the court at extreme left is the entrance to Thailand's pavilion; next is the Mexico pavilion with flat dome and paneled walls Over on the right the New England complex lines the court. Beyone it are the masts and peaked roofs of New Jersey and New York's Theaterama and Tent of Tomorrow.",
            },
          ],
        },
        {
          label: "Tribute to Transportation",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            { type: "credit", text: "NEWS COLORPHOTO BY EDMUND PETERS" },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook01/scrapbook05.01.jpg",
                  width: 400,
                  height: 268,
                  alt: "Transportation Area from the Avenue of Automation",
                },
                {
                  src: "/images/scrapbook01/scrapbook05.02.jpg",
                  width: 400,
                  height: 268,
                  alt: "Transportation Area from the Avenue of Automation",
                },
                {
                  src: "/images/scrapbook01/scrapbook05.03.jpg",
                  width: 400,
                  height: 268,
                  alt: "Transportation Area from the Avenue of Automation",
                },
                {
                  src: "/images/scrapbook01/scrapbook05.04.jpg",
                  width: 400,
                  height: 268,
                  alt: "Transportation Area from the Avenue of Automation",
                },
              ],
            },
            { type: "storyTitle", text: "TRIBUTE TO TRANSPORTATION" },
            {
              type: "lead",
              text: 'FROM THE WHEEL TO THE ROCKET, the story of locomotion can be traced in the Fair\'s Transporation Area. But the major emphasis is on the automobile - past, present and future - which is no surprise, inasmuch as the area\'s (and Fair\'s) three largest tenants are Chrysler, Ford and General Motors. Here, from the Avenue of Automation, we see Chrysler\'s engineering island, one of five that are set in a man-made lake. Beyond is the "crown roast" atop Ford\'s exhibit.',
            },
          ],
        },
        {
          label: "Monorail",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            { type: "credit", text: "NEWS COLORPHOTOS BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/amf18.jpg",
                width: 400,
                height: 432,
                alt: "Monorail trains on single rails",
                captionLead: "Two of the underslug trains",
                caption:
                  "zip along their single rails hung from giant pylons. At left are dark panel on General Foods Arch displaying news and photos of the Fair and tail end of a down-to-earth Greyhound Glide-a-ride tractor train.",
              },
            },
            { type: "storyTitle", text: "MONORAIL" },
            {
              type: "lead",
              text: "WHAT'S A FAIR without rides? Pretty bad, you say, especially if you're a kid or a kid at heart. But this Fair is okay; there are plenty and one of the best is the Monorail. It affords riders a panoramic view of the Lake Amusement Area around which it loops. Built by American Machine & Foundry (AMF), Monorail has seven two-car trains operating on parallel loops slung 40 feet above the ground from single rails. Three trains travel in one direction and four in the other.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/amf17.jpg",
                width: 300,
                height: 342,
                alt: "Monorail train hostess",
                captionLead: "Train hostess",
                caption:
                  "at mike describes the sights for viewers aboard Monorail. Each train can carry 80 passengers.",
              },
            },
            { type: "credit", text: "NEWS COLORPHOTO BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/amf16.jpg",
                width: 475,
                height: 188,
                alt: "Night Monorail near Continental Circus",
                captionLead: "Night Monorail riders",
                caption:
                  "pass striped tent of Continental Circus as air-conditioned, automatically controlled train approaches its station in heart of the Lake Amusement Area.",
              },
            },
          ],
        },
        {
          label: "That Old-World Feeling",
          blocks: [
            { type: "date", text: newsDate("September 27, 1964") },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/belvil02.jpg",
                width: 475,
                height: 247,
                alt: "Belgian Village Grande Place",
                captionLead: "Unhurried scene",
                caption:
                  "in Belgian Village's Grande Place presents replica of city hall of Damme, Cafe de Belgique in front of it and chimes tower at left. After dark, it's a gay spot.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  THAT
                  <br />
                  OLD-WORLD
                  <br />
                  FEELING
                </>
              ),
            },
            {
              type: "lead",
              text: "A COUPLE OF SPOTS bound to cheer the heart and brace the lagging spirits of the fairgoer - especially one familiar with the old world of Western Europe - are today's Scrapbook entries. Picturesque Belgian village, which stood idle so long awaiting completion, is open and fast catching on with visitors. At the Lowenbrau Gardens, replica of an 18th Century Bavarian hamlet radiating gemutlichkeit, brewery horses vie with imported beer and German cooking as attractions.",
            },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/lowgar01.jpg",
                width: 475,
                height: 241,
                alt: "Lowenbrau Gardens wagon guide George Zech",
                captionLead: "Wagon guide",
                caption:
                  "George Zech (left) and his gaily caparisoned crew lend an authentic air to the festive Lowenbrau Gardens in the Transportation Area. It's like Munich in New York.",
              },
            },
          ],
        },
        {
          label: "Fountain Fantasy",
          blocks: [
            { type: "date", text: newsDate("July 5, 1964") },
            { type: "credit", text: "NEWS COLORPHOTO BY EDMUND PETERS" },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook01/scrapbook06.01.jpg",
                  width: 400,
                  height: 266,
                  alt: "Unisphere and Fountain of the Continents",
                },
                {
                  src: "/images/scrapbook01/scrapbook06.02.jpg",
                  width: 400,
                  height: 266,
                  alt: "Unisphere and Fountain of the Continents",
                },
                {
                  src: "/images/scrapbook01/scrapbook06.03.jpg",
                  width: 400,
                  height: 266,
                  alt: "Unisphere and Fountain of the Continents",
                },
                {
                  src: "/images/scrapbook01/scrapbook06.04.jpg",
                  width: 400,
                  height: 266,
                  alt: "Unisphere and Fountain of the Continents",
                },
              ],
            },
            { type: "storyTitle", text: "FOUNTAIN FANTASY" },
            {
              type: "lead",
              text: "THREE WEEKS AGO our scrapbook cameraman shot the Fair's Unisphere from the United States pavilion; today we view the global birdcage from the opposite side and catch the massive pavilion at the end of the Court of States. Setting off the Unisphere and ringed by a reflecting pool are the plumed jets of the Fountain of the Continents. They are colorfully lighted at night. At left: New England exhibit. Across top of globe: Singer Bowl. In distance: Shea Stadium.",
            },
          ],
        },
        {
          label: "Music of the Sphere",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook01/citserv06.jpg",
                width: 500,
                height: 238,
                alt: "Cities Service World's Fair Band of America",
              },
            },
            { type: "storyTitle", text: "MUSIC OF THE SPHERE" },
            {
              type: "lead",
              text: "With the Fair's Unisphere as a symbol, maestro Paul Lavalle stands ready to lead his 50-piece band of rolling players - the Cities Service World's Fair Band of America - in concert. Musically versatile group travels about grounds in its unique bandwagon participating in official Fair functions and giving at least six concerts a day.",
            },
          ],
        },
      ]}
    />
  );
}
