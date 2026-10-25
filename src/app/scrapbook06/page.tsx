import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";

export const metadata: Metadata = {
  title: "1965 Scrapbook — Page Six — World’s Fair Scrapbook — nywf64.com",
  description:
    "1965 Scrapbook Page Six from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page Six (legacy scrapbook07.html → /scrapbook06).
 * Shared ScrapbookHero (1905×826). Nav Page 7.
 * PREVIOUS → /scrapbook05; NEXT → /scrapbook07.
 */
export default function Scrapbook06Page() {
  return (
    <ScrapbookIssuePage
      title="1965 Scrapbook - Page Six"
      titleId="scrapbook06-title"
      titleMarkSrc="/images/scrapbook06/scrapbook-title.jpg"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbook05"
      overviewHref="/scrapbookoverview"
      nextHref="/scrapbook07"
      features={[
        {
          label: "Cooking with Gas",
          blocks: [
            { type: "date", text: newsDate("July 4, 1965") },
            {
              type: "credit",
              text: "NEWS COLORPHOTOS BY WILLIAM KLEIN AND PATRICK CARROLL",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/fg49.jpg",
                width: 460,
                height: 289,
                alt: "Festival of Gas by day",
                captionLead: "By day,",
                caption:
                  "the Festival of Gas appears to be set in a lake of floating flower beds. Behind the picture windows in foreground is Festival '65 - The American Restaurant, a gourmet's delight specializing in uniquely American dishes from the colonies to today's best regional fare.",
              },
            },
            { type: "storyTitle", text: "COOKING WITH GAS" },
            {
              type: "lead",
              text: "YOU JUST can't miss the spectacularly different look of the Festival of Gas pavilion. It houses a host of attractions keyed, naturally, to the uses of gas - past, present and future. Among these are the new big top carousel with three-dimensional exhibits; garden of gas appliances; gaslight patio; house of energy. Back are the restaurant, theatre of food, and gas energy center.",
            },
            { type: "credit", text: "NEWS COLORPHOTO BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/fg51.jpg",
                width: 400,
                height: 441,
                alt: "Festival of Gas at night",
                captionLead: "Its umbrella-like",
                caption:
                  "roof white-lighted from underneath and its surrounding waters reflecting same, the Festival of Gas pavilion's even more sensational at night. Main display area is under roof.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/fg50.jpg",
                width: 300,
                height: 276,
                alt: "Gaslight patio barbecue",
                captionLead: "Barbecue fans",
                caption:
                  "savor Grace Zia Chu's Chinese spareribs cooking over ceramic coals on gas grill in the gaslight patio. Good-by charcoal!",
              },
            },
          ],
        },
        {
          label: "A Successful Transplant",
          blocks: [
            { type: "date", text: newsDate("August 22, 1965") },
            {
              type: "credit",
              text: "NEWS COLORPHOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/scrapbook08.jpg",
                width: 800,
                height: 558,
                alt: "Belgian Village and highways",
              },
            },
            { type: "storyTitle", text: "A SUCCESSFUL TRANSPLANT" },
            {
              type: "lead",
              text: "THE STRIKING THING about today's Scrapbook foto is the contrast between the Old-World Belgian Village and the web of up-to-the-minute superhighways bordering the fairgrounds. The village appears to have been picked up in Belgium and set down here intact - which is close to the truth. Inside is a glittering array of shops, artisans at work, exhibits, amusements and food-and-drink spots - including several large restaurants. And there's even one outside the walls (foreground).",
            },
          ],
        },
        {
          label: "A Place in the Sun",
          blocks: [
            { type: "date", text: newsDate("July 18, 1965") },
            { type: "credit", text: "NEWS COLORPHOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/florid01.jpg",
                width: 460,
                height: 275,
                alt: "Florida Everglades flamingos",
                captionLead: "A flock of pretty pink,",
                caption:
                  "though raucous-voiced, flamingos lends authenticity to Florida's palm-shaded Everglades exhibit. A few alligators are also included in the exhibit, but - obviously - they are kept in a separate pen, well away from the birds.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  A PLACE
                  <br />
                  IN
                  <br />
                  THE SUN
                </>
              ),
            },
            {
              type: "lead",
              text: 'FLORIDA, the Sunshine State, always its own best booster, has expanded its activities at the Fair this year. This has not only promoted the state\'s own virtues, but has also helped perk up the whole Lake Amusement Area. Sparking the upswing is the new free Florida Citrus Water Ski Show. Also on the house are the porpoise show (especially great for kids), "Pieces of Eight" (treasure ship booty); Everglades exhibit (with alligators and flamingos), art show and information from cities and counties for vacationists and prospective residents. In line with this there\'s a model retirement house. And, of course, you can buy lots of orange juice!',
            },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/flowatski01.jpg",
                width: 400,
                height: 283,
                alt: "Florida water ski show",
                captionLead: "New, exciting and free,",
                caption:
                  "the state's water ski show in the Amphitheatre is a prime attraction. This pyramid, or Roman stand, is one of 21 acts by professional skiers and boatmen. Starting at 1 P.M., there are six performances daily, including two at night..",
              },
            },
          ],
        },
        {
          label: "Transplanting the Orient",
          blocks: [
            { type: "date", text: newsDate("June 27, 1965") },
            { type: "credit", text: "NEWS COLORPHOTOS BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/japan145.jpg",
                width: 460,
                height: 273,
                alt: "House of Japan garden",
                captionLead: "Diners at teriyaki",
                caption:
                  "(barbecue) under awning look out on Nipponses garden and tea house. Inside House of Japan is replica of the nation's famed Niko shrine.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  TRANSPLANTING
                  <br />
                  THE ORIENT
                </>
              ),
            },
            {
              type: "lead",
              text: "LOOK AT TODAY'S Scrapbook entries, and you could be pardoned for thinking we had put our cameramen on the Orient Express with orders to bring the countries back alive! But all they did was to hop the subway to the Fair, and in no time at all their mission to Hong Kong, Japan and Thailand was accomplished. China, India, Korea, Malaysia and Philippines are out there too.",
            },
            {
              type: "credit",
              text: "NEWS COLORFOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/coke56.jpg",
                width: 300,
                height: 251,
                alt: "Coca-Cola Global Holiday Hong Kong street",
                captionLead: "A street",
                caption:
                  'in Hong Kong, re-created in such detail as to include the voices and smells a visitor might encounter, is one stop on Coca-Cola\'s "Global Holiday."',
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/thai03.jpg",
                width: 300,
                height: 269,
                alt: "Thailand pavilion costumes",
                captionLead: "Though they",
                caption:
                  "date back to the 1800s, authentic costumes like these at the Thailand pavilion are still worn in dances for tourists in Thailand today.",
              },
            },
          ],
        },
        {
          label: "Inviting Interiors",
          blocks: [
            { type: "date", text: newsDate("May 30, 1965") },
            {
              type: "credit",
              text: "NEWS COLORPHOTOS BY EDMUND PETERS, RICHARD LEWIS AND PATRICK CARROLL",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/uwh28.jpg",
                width: 475,
                height: 254,
                alt: "Underground Home patio",
                captionLead: "What more",
                caption:
                  "could you ask for in this patio of the Underground Home - real sunlight? Too hot! This year even the blooms on the ceiling are real. Home can be built for anyone. Plans are available.",
              },
            },
            { type: "storyTitle", text: "INVITING INTERIORS" },
            {
              type: "lead",
              text: "NO MATTER WHERE you go at the Fair, the welcome mat is out, and most exhibitors try hard to make it attractive. Once inside a pavilion, you more often than not find its displays and wares equally inviting. The Republic of China, for one, not only has the usual progress and culture bit, but a brand new restaurant and a new top-floor lounge affording sweeping Fair views. The Underground Home, for another, is a revelation of the luxurious possibilities of what most people view as emergency existence.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook06/china43.jpg",
                width: 460,
                height: 451,
                alt: "China pavilion carved wood screen",
                captionLead: "Two",
                caption:
                  'young ladies from Taiwan marvel at huge carved wood screen that guests see upon entering the China pavilion. Titled "100 Birds Pay Tribute to Queen Phoenix," it symbolizes visitors from all parts of the world coming here to see the Fair.',
              },
            },
          ],
        },
      ]}
    />
  );
}
