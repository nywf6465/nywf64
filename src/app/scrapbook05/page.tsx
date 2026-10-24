import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";

export const metadata: Metadata = {
  title: "1965 Scrapbook — Page Five — World’s Fair Scrapbook — nywf64.com",
  description:
    "1965 Scrapbook Page Five from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page Five (legacy scrapbook06.html → /scrapbook05).
 * Shared ScrapbookHero (1905×826). Nav Page 6.
 * PREVIOUS → /scrapbook04; NEXT hidden until the next issue page ships.
 */
export default function Scrapbook05Page() {
  return (
    <ScrapbookIssuePage
      title="1965 Scrapbook - Page Five"
      titleId="scrapbook05-title"
      titleMarkSrc="/images/scrapbook05/scrapbook-title.jpg"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbook04"
      overviewHref="/scrapbookoverview"
      hideNext
      features={[
        {
          label: "Like Science? Fare Enough",
          blocks: [
            { type: "date", text: newsDate("June 20, 1965") },
            { type: "credit", text: "NEWS COLORPHOTOS BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/ussppk62.jpg",
                width: 460,
                height: 513,
                alt: "X-15 at U.S. Space Park",
                captionLead: "Having been piloted",
                caption:
                  "at twice the speed of a bullet and half as high as an orbiting spaceship in more than 100 flights, the X-15 plane-rocket spacecraft at the U.S. Space Park still points to the future.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  LIKE
                  <br />
                  SCIENCE?
                  <br />
                  FARE
                  <br />
                  ENOUGH
                </>
              ),
            },
            {
              type: "lead",
              text: "TIME WAS, when science was only for bona fide scientists and the average schoolboy scarcely ever heard the word until junior high. Now, every first grader and his kid sister can tell you all about space in general and the Gemini project in particular, with laser beams and nuclear fusion added. The Fair reflects this tremendous popular interest in science with many exhibits in the varied fields.",
            },
            {
              type: "lead",
              text: 'Today the Scrapbooks is paging three of them: the rocket-spiked U.S. Space Park, the look-ahead Futurama at General Motors, and "Atomsville, USA," the U.S. Atomic Energy Commission\'s special exhibit for children 7 to 14 in the Hall of Science. About 30 pavilions feature gagets which will thrill science buffs.',
            },
            {
              type: "credit",
              text: "NEWS COLORPHOTO BY WILLIAM KLEIN AND PATRICK CARROLL",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/gm149.jpg",
                width: 450,
                height: 303,
                alt: "GM Futurama Hotel Atlantis",
                captionLead: "One possibility",
                caption:
                  "of our future, GM Futurama designers would have us believe, is undersea living. Here an aquasub (left) cruises among transparent bubbles that make up the resort Hotel Atlantis.",
              },
            },
            {
              type: "credit",
              text: "NEWS COLORFOTO BY WILLIAM KLEIN AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/halsci15.jpg",
                width: 318,
                height: 399,
                alt: "Atomsville USA exhibit",
                captionLead: "At Atomsville,",
                caption:
                  "lads learn that 30 years of non-stop pedaling equals the energy in one pound of uranium.",
              },
            },
          ],
        },
        {
          label: "Up Mexico Way",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1965)") },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook05/scrapbook09.01.jpg",
                  width: 401,
                  height: 368,
                  alt: "Mexico pavilion show",
                },
                {
                  src: "/images/scrapbook05/scrapbook09.02.jpg",
                  width: 400,
                  height: 368,
                  alt: "Mexico pavilion show",
                },
                {
                  src: "/images/scrapbook05/scrapbook09.03.jpg",
                  width: 401,
                  height: 368,
                  alt: "Mexico pavilion show",
                },
                {
                  src: "/images/scrapbook05/scrapbook09.04.jpg",
                  width: 400,
                  height: 368,
                  alt: "Mexico pavilion show",
                },
                {
                  src: "/images/scrapbook05/scrapbook09.05.jpg",
                  width: 401,
                  height: 368,
                  alt: "Mexico pavilion show",
                },
                {
                  src: "/images/scrapbook05/scrapbook09.06.jpg",
                  width: 400,
                  height: 368,
                  alt: "Mexico pavilion show",
                },
              ],
            },
            { type: "storyTitle", text: "UP MEXICO WAY" },
            {
              type: "lead",
              text: "HIGH ON ANY list of top foreign pavilions architecturally and exhibit-wise, Mexico is this year emphasizing its art and cultures and putting on a free one-hour show at the lagoon out front. Inside is a just-installed giant stone head from the pre-Columbian Olmec culture. Colonial and contemporary art and the nation's handcrafts are also represented. If you linger south of the border a while, you might try the pavilion's new Acapulco Bar and Fonda Santa Anita restaurant.",
            },
            {
              type: "lead",
              text: (
                <>
                  <strong>(above) Topping</strong> show are the thrilling Flying
                  Eagles of Papantilo re-creating a dizzying rain god
                  invocation. They climb a 114-ft. pole from which, suspended by
                  ropes, four swoop earthward in widening circles. As they
                  descend, the fifth, their chief, dances, drums and plays flute
                  on 20-in. platform atop pole.
                </>
              ),
            },
            {
              type: "lead",
              text: (
                <>
                  <strong>(inset) Down</strong> to earth again, and it&apos;s
                  the Ballet Mexicano de Carlos Aguilera performing authentic
                  folk dances to the accompaniment of mariachis. Show, on at 11,
                  2, 5, 7 daily, also has a rope twirler and other musicians.
                </>
              ),
            },
          ],
        },
        {
          label: "Fun on Wheels",
          blocks: [
            { type: "date", text: newsDate("July 11, 1965") },
            { type: "credit", text: "NEWS COLORPHOTOS BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/autthr01.jpg",
                width: 475,
                height: 265,
                alt: "Hell Drivers ramp-to-ramp jump",
                captionLead: "Climax of the Hell Drivers show",
                caption:
                  "is this risky 70-foot ramp-to-ramp flight of a standard pickup truck as a convertible darts under it. Injuries to drivers are on the rise this year.",
              },
            },
            { type: "storyTitle", text: "FUN ON WHEELS" },
            {
              type: "lead",
              text: 'MANY FAIRGOERS who\'ve sampled the Chrysler, Ford and General Motors exhibits may hanker for some live auto action - and the Fair has it. Three such offerings are the Amphicar and the Avis Antique Rent-a-Car rides and Hell Drivers, an auto thrill show. Each is distinctive - Amphicar takes you for a "boat" ride in a waterproof floating car; you drive the little Antique cars around a track, and professional daredevils risk life and limb at Hell Drivers - and all three add up to lots of fun on wheels.',
            },
            { type: "credit", text: "NEWS COLORFOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/avis01.jpg",
                width: 300,
                height: 338,
                alt: "Avis Antique Autos",
                captionLead: "Anachronisms",
                caption:
                  "in our jet-space age, but great for laughs, are Avis' Antique Autos. Youth in the driver's seat is a real drag as cars pile up upon emerging from covered bridge.",
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/amprid01.jpg",
                width: 332,
                height: 196,
                alt: "Amphicar on Meadow Lake",
                captionLead: "After a five-minute",
                caption:
                  'swim in Meadow Lake, a novel Amphicar drives ashore to its "dock" between Hawaii and the Amphitheatre. In background is Restaurant of the Five Volcanos.',
              },
            },
          ],
        },
        {
          label: "Fair Has Flair for Flowers",
          blocks: [
            { type: "date", text: newsDate("June 5, 1965") },
            { type: "credit", text: "NEWS COLORPHOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/scrapbook10.jpg",
                width: 460,
                height: 360,
                alt: "Tulips and pansies near Vatican pavilion",
                captionLead: "Prim, pure white",
                caption:
                  "darwin tulips rise from a bed of two-toned lavender pansies across from the Vatican pavilion. The Fair's landscaping departement had planted 138,000 tulip bulbs and 325,000 pansies last fall for this year's vernal spectacular.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  FAIR
                  <br />
                  HAS FLAIR
                  <br />
                  FOR
                  <br />
                  FLOWERS
                </>
              ),
            },
            {
              type: "lead",
              text: "THOSE SPECIAL breeds of fairgoers - photography fans and flower lovers - have taken much delight in the Fair's fine floral displays. There are three plantings each Fair season: spring, summer and fall. The Scrapbook this week brings you samplings from this year's spring and summer blooms. You saw tulips and pansies in April and May. 90,000 geraniums, ageratum, senecio, begonias, lantana and petunias are now in bloom. This fall the popular chrysanthemums return.",
            },
            {
              type: "credit",
              text: "NEWS COLORFOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/scrapbook12.jpg",
                width: 300,
                height: 372,
                alt: "Lantana at Court of States",
                captionLead: "Set off by",
                caption:
                  "their smoky green foliage, bright and perky lantana border the Court of States near New York State's pavilion. In addition to the Fair's plantings, many of the exhibitors have put in flower displays of their own.",
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook05/scrapbook11.jpg",
                width: 400,
                height: 464,
                alt: "Geraniums at Court of Astronauts",
                captionLead: "Brilliant red geraniums",
                caption:
                  "with bordering beds of vinca minor, a green-leafed ground cover that develops blue blossoms, swirl around the Court of Astronauts opposite the Polynesia pavilion. The Fair also has over 5,300 trees.",
              },
            },
          ],
        },
      ]}
    />
  );
}
