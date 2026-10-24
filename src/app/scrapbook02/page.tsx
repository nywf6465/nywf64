import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";

export const metadata: Metadata = {
  title: "1964 Scrapbook — Page Two — World’s Fair Scrapbook — nywf64.com",
  description:
    "1964 Scrapbook Page Two from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page Two (legacy scrapbook03.html → /scrapbook02).
 * Shared ScrapbookHero (1905×826). Nav Page 3.
 * PREVIOUS → /scrapbook01; NEXT hidden until the next issue page ships.
 */
export default function Scrapbook02Page() {
  return (
    <ScrapbookIssuePage
      title="1964 Scrapbook - Page Two"
      titleId="scrapbook02-title"
      titleMarkSrc="/images/scrapbook02/scrapbook-title.jpg"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbook01"
      overviewHref="/scrapbookoverview"
      hideNext
      features={[
        {
          label: "Flavor of the Orient",
          blocks: [
            { type: "date", text: newsDate("August 16, 1964") },
            {
              type: "credit",
              text: "NEWS COLORPHOTOS BY DAN JACINO AND ARTHUR SASSE",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/indones01.jpg",
                width: 460,
                height: 257,
                alt: "Indonesian pavilion Umbrella Dance",
                captionLead: "Lovely girls and their escorts",
                caption:
                  "perform popular Umbrella Dance on stage centered in elegant theatre-restaurant of the Indonesian pavilion. Exquisite grace characterizes the dancers.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  FLAVOR
                  <br />
                  OF THE ORIENT
                </>
              ),
            },
            {
              type: "lead",
              text: "MUCH OF THE fun of an international fair is to be found in its variety of exotic food and native entertainment, and the Flushing Meadow exposition is outstanding in this respect. Today the scrapbook's camera focuses on Indonesia, Japan and Malaysia, where uncommon offerings are a source of keen delight to many a diner.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/japan01.jpg",
                width: 440,
                height: 250,
                alt: "House of Japan Awa Dance",
                captionLead: "A hit at House of Japan show",
                caption:
                  "is the Awa Dance, a folk number featuring dancers who drum and drummers who dance.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/malays06.jpg",
                width: 300,
                height: 539,
                alt: "Malaysia restaurant hostesses",
                captionLead: "Hostesses",
                caption:
                  "Nancy Tan and Shirley Chang sample satay at Malaysia restaurant, whose unique dishes are tempting.",
              },
            },
          ],
        },
        {
          label: "Sun-Day at the Fair",
          blocks: [
            { type: "date", text: newsDate("September 6, 1964") },
            {
              type: "credit",
              text: "NEWS COLORPHOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook02/scrapbook03.01.jpg",
                  width: 400,
                  height: 271,
                  alt: "Industrial Area from a lofty perch",
                },
                {
                  src: "/images/scrapbook02/scrapbook03.02.jpg",
                  width: 400,
                  height: 271,
                  alt: "Industrial Area from a lofty perch",
                },
                {
                  src: "/images/scrapbook02/scrapbook03.03.jpg",
                  width: 400,
                  height: 271,
                  alt: "Industrial Area from a lofty perch",
                },
                {
                  src: "/images/scrapbook02/scrapbook03.04.jpg",
                  width: 400,
                  height: 271,
                  alt: "Industrial Area from a lofty perch",
                },
              ],
            },
            { type: "storyTitle", text: "SUN-DAY AT THE FAIR" },
            {
              type: "lead",
              text: "'TWAS A NICE BRIGHT DAY at the Fair, so our sun-worshipping lensmen found a lofty perch and started shooting film. Here's what they came up with in the Industrial Area (from top left): Bettter Living Center, Pepsi-Cola's Walt Disney fantasy, Eastman Kodak's world's largest outdoor photo colorpirnts and, edging into the International Area, American-Israel's wood-paneled pavilion and a Swiss Sky Ride Terminus. And don't forget the Brass Rail \"marshmallows.\"",
            },
          ],
        },
        {
          label: "Night and Day",
          blocks: [
            { type: "date", text: newsDate("July 12, 1964") },
            {
              type: "credit",
              text: "NEWS COLORPHOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/vat02.jpg",
                width: 460,
                height: 272,
                alt: "Vatican pavilion at night",
                captionLead: "Reflections from the wet pavement",
                caption:
                  'add to the brilliant glow of the Vatican pavilion at night. In addition to the famed "Pieta," visitors may view other priceless religious treasures.',
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  NIGHT
                  <br />
                  AND DAY
                </>
              ),
            },
            {
              type: "lead",
              text: 'TODAY\'S scrapbook page is one of contrasts: night and day pictures (obviously); tradition and experimentation; the setting for an historic church displaying centuries-old statuary and a building where visitors may witness a "moon flight." The differences are striking, but the Vatican and the Transportation and Travel pavilions have one thing in common: color. Michelangelo\'s "Pieta" is the super-attraction at the former, while jet and space travel, U.S. Navy at work and undersea drama all vie for attention at T&T.',
            },
            { type: "credit", text: "NEWS COLORPHOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/tratra04.jpg",
                width: 460,
                height: 315,
                alt: "Transportation and Travel Moon Dome",
                captionLead: "Everything about T & T",
                caption:
                  'suggests color and motion. Plastic covering on the "Moon Dome" at left forms a relief map of the lunar surface.',
              },
            },
          ],
        },
        {
          label: "The Golden Touch",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            { type: "credit", text: "NEWS COLORPHOTO BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/scrapbook04.01.jpg",
                width: 400,
                height: 273,
                alt: "National Cash Register pavilion at night",
                captionLead: "NCR Stands",
                caption:
                  "for National Cash Register. After dark its pavilion - color matched by the Lunar Fountain out in front - would have gladdened the heart of old King Midas.",
              },
            },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook02/scrapbook04.02.jpg",
                  width: 400,
                  height: 273,
                  alt: "National Cash Register pavilion",
                },
                {
                  src: "/images/scrapbook02/scrapbook04.03.jpg",
                  width: 400,
                  height: 273,
                  alt: "National Cash Register pavilion",
                },
                {
                  src: "/images/scrapbook02/scrapbook04.04.jpg",
                  width: 400,
                  height: 273,
                  alt: "National Cash Register pavilion",
                },
              ],
            },
            {
              type: "storyTitle",
              text: (
                <>
                  THE
                  <br />
                  GOLDEN
                  <br />
                  TOUCH
                </>
              ),
            },
            {
              type: "lead",
              text: 'INASMUCH as the total cost of the Fair and its fringe benefits comes to an estimated billion dollars, gold is a significant color at Flushing Meadow. The National Cash Regsiter Co. is a natural for gold, but actually its exhibit centers about "Man and His Records," which dramatizes the science of recording, analyzing and storing information. Austria\'s modernistic mountain lodge, suspended above ground from three A-shaped supports, is complemented by a lofty abstract sculpture made of stainless steel. In foreground is a light pole.',
            },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/austria01.jpg",
                width: 360,
                height: 264,
                alt: "Austria pavilion",
                captionLead: "Austria's gold",
                caption:
                  "is much more modest: it is in the tone of the wood used for the A superstructures and the building trim.",
              },
            },
          ],
        },
        {
          label: "Havens for the Spirit",
          blocks: [
            { type: "date", text: newsDate("October 4, 1964") },
            {
              type: "credit",
              text: "NEWS COLORPHOTOS BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/garmed01.jpg",
                width: 475,
                height: 205,
                alt: "Garden of Meditation",
                captionLead: "This family relaxes",
                caption:
                  "amid the restful surroundings of the Garden of Meditation. Fair set aside two acres and transformed it into a quiet refuge from the usual hurly-burly.",
              },
            },
            { type: "storyTitle", text: "HAVENS FOR THE SPIRIT" },
            {
              type: "lead",
              text: "WHETHER THE FAIRGOER desires to see his own faith's exhibit, understand another denomination's viewpoint, seek a spiritual anchor or just find a comfortable place in which to meditate, the big exposition can oblige. Three such havens are the Billy Graham and Christian Science pavilions and the Garden of Meditation. Attendance at the pavilions has been most gratifying.",
            },
            { type: "credit", text: "NEWS COLORFOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/bilgra01.jpg",
                width: 300,
                height: 438,
                alt: "Billy Graham pavilion",
                captionLead: "Its tower",
                caption:
                  "is a beacon inviting visitors to the Billy Graham pavilion. Inside, a Todd-AO film and a variety of exhibits present the religious message of the evangelist.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/chrsci01.jpg",
                width: 300,
                height: 227,
                alt: "Christian Science pavilion",
                captionLead: "Designed",
                caption:
                  "by Edward Durell Stone, the Christian Science pavilion is shaped as a seven-point star. Modern techniques are used in a graphic explanation of Christian Science's concepts.",
              },
            },
          ],
        },
        {
          label: "Shining Examples",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            { type: "credit", text: "NEWS COLORPHOTOS BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/philip45.jpg",
                width: 475,
                height: 257,
                alt: "Philippines pavilion",
                captionLead: "Bathed in golden light,",
                caption:
                  "Philippines' pavilion is shaped like a sakalot, the wide-brimmed sun hat worn throughout the Islands. The exhibit also has models of Bataan and Corregidor.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  SHINING
                  <br />
                  EXAMPLES
                </>
              ),
            },
            {
              type: "lead",
              text: "STANDOUTS as uniquely designed pavilions are Johnson's Wax in the Industrial Area and the moat-surrounded Republic of the Philippines in the International. Both invite the eye to come in and see their attractions.",
            },
            {
              type: "lead",
              text: "Johnson's 500-seat theatre offers a fine documentary movie on brotherhood, free shoeshines, a children's area and a home care information center. Filipino folklore, history and life are highlighted by programs of traditional dances. An aquarium and sea shell display are in Islands' exhibit.",
            },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook02/johwax59.jpg",
                width: 400,
                height: 425,
                alt: "Johnson's Wax pavilion",
                captionLead: "Seemingly floating",
                caption:
                  "above the ground, Johnson's golden disk is supported by its six surrounding columns.",
              },
            },
          ],
        },
      ]}
    />
  );
}
