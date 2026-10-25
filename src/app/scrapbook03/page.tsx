import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";

export const metadata: Metadata = {
  title: "1964 Scrapbook — Page Three — World’s Fair Scrapbook — nywf64.com",
  description:
    "1964 Scrapbook Page Three from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page Three (legacy scrapbook04.html → /scrapbook03).
 * Shared ScrapbookHero (1905×826). Nav Page 4.
 * PREVIOUS → /scrapbook02; NEXT → /scrapbook04.
 */
export default function Scrapbook03Page() {
  return (
    <ScrapbookIssuePage
      title="1964 Scrapbook - Page Three"
      titleId="scrapbook03-title"
      titleMarkSrc="/images/scrapbook03/scrapbook-title.jpg"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbook02"
      overviewHref="/scrapbookoverview"
      nextHref="/scrapbook04"
      features={[
        {
          label: "The Big Splash",
          blocks: [
            { type: "date", text: newsDate("Date unknown (1964)") },
            { type: "credit", text: "NEWS COLORPHOTO BY DAN JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/oregon7.jpg",
                width: 460,
                height: 341,
                alt: "Oregon timber carnival birling",
                captionLead: "Jim Ogle keeps",
                caption:
                  "a precarious balance as Don Jacobs is off to a dip in Flushing Creek. The Oregon timber carnival performers wear shoes with special spikes and loggers' oak soles.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  THE
                  <br />
                  BIG SPLASH
                </>
              ),
            },
            {
              type: "lead",
              text: 'WATER HAS always fascinated man, as participant or spectator, and the Fair has not overlooked the possibilities this offers. On this page three shows are represented: Oregon\'s timber carnival, Florida\'s porpoise performers, and the log flume ride. Each has delighted many a Fair visitor, especially the small fry. The birling (log-rolling) shown here is but one act of an otherwise "dry" show in which champions and near champions chop and saw logs, climb 110-foot poles and throw double-bladed axes.',
            },
            {
              type: "credit",
              text: "NEWS COLORPHOTOS BY EDMUND PETERS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/logflu04.jpg",
                width: 300,
                height: 355,
                alt: "Log flume ride",
                captionLead: "The log flume ride,",
                caption:
                  "a cross between the shoot-the-chutes and a roller coaster, splashes to its damply thrilling climax.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/florida22.jpg",
                width: 300,
                height: 321,
                alt: "Florida pavilion porpoise show",
                captionLead: "Basketball",
                caption:
                  'is only one of many talents porpoises, the "secnd-smartest mammals," display in their show at Flordia\'s pavilion.',
              },
            },
          ],
        },
        {
          label: "Nations on Parade",
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
                  src: "/images/scrapbook03/scrapbook01.01.jpg",
                  width: 400,
                  height: 376,
                  alt: "Court of Nations foreign flags",
                },
                {
                  src: "/images/scrapbook03/scrapbook01.02.jpg",
                  width: 400,
                  height: 376,
                  alt: "Court of Nations foreign flags",
                },
                {
                  src: "/images/scrapbook03/scrapbook01.03.jpg",
                  width: 400,
                  height: 376,
                  alt: "Court of Nations foreign flags",
                },
                {
                  src: "/images/scrapbook03/scrapbook01.04.jpg",
                  width: 400,
                  height: 376,
                  alt: "Court of Nations foreign flags",
                },
              ],
            },
            { type: "storyTitle", text: "NATIONS ON PARADE" },
            {
              type: "lead",
              text: 'THE STANDS OF FOREIGN FLAGS gracing the court of Nations is the big attention-getter here. Each country exhibiting at the Fair is represented. Beyond is a sizable wedge of the International Area with its intriguing sights and sounds. In the center is the circular African pavilion and its needle-roofed rondevals; at right is Pakistan and behind it, a Brass Rail "marshmallow" snack bar. Seven distinctive pavilions in the background (reading clockwise from the right) are Sudan (only half of it shows); Morocco, Greece, Philippines, Lebanon, the United Arab Republic (Egypt) and Jordan.',
            },
          ],
        },
        {
          label: "Looking High and Low",
          blocks: [
            { type: "date", text: newsDate("August 30, 1964") },
            {
              type: "credit",
              text: "NEWS COLORPHOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/sweden01.jpg",
                width: 475,
                height: 335,
                alt: "Sweden pavilion",
                captionLead: "Within this royal",
                caption:
                  "blue pavilion are an outstanding restaurant, a Stockholm department store branch and industrial and commercial exhibits.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  LOOKING
                  <br />
                  HIGH
                  <br />
                  AND
                  <br />
                  LOW
                </>
              ),
            },
            {
              type: "lead",
              text: "THE SMART fairgoer keeps his eyes open and in orbit, for the sights to see are everywhere and limitless. The camera's eye is busy, too, as today's entries attest. The coolly attractive functional lines of Sweden's pavilion contrast sharply with the traditional pagoda-like palace housing the Republic of China's exhibits. This diversity of styling helps make the International Area the fascinating scene it is. But inside these eye-catchers, and other foreign pavilions, is much for U.S. visitors to see, learn - and to buy, for most have shops.",
            },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/china44.jpg",
                width: 460,
                height: 319,
                alt: "Republic of China pavilion",
                captionLead: "Old bronze, jade,",
                caption:
                  "porcelain and silk treasures vie with today's economic progress on Taiwan in telling China's story. Above: the Swiss Sky Ride.",
              },
            },
          ],
        },
        {
          label: "Alpine Vistas",
          blocks: [
            { type: "date", text: newsDate("October 18, 1964") },
            { type: "credit", text: "NEWS COLORPHOTOS BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/scrapbook02.01.jpg",
                width: 400,
                height: 305,
                alt: "Swiss Sky Ride view",
                captionLead: "You're riding high",
                caption:
                  "and what do you see? N.Y. State's pavilion and tower and GM off yonder, sure, but for real kicks, peek down into such swingin' spots as Africa's back yard.",
              },
            },
            {
              type: "grid",
              photos: [
                {
                  src: "/images/scrapbook03/scrapbook02.02.jpg",
                  width: 400,
                  height: 305,
                  alt: "Swiss Sky Ride view",
                },
                {
                  src: "/images/scrapbook03/scrapbook02.03.jpg",
                  width: 400,
                  height: 305,
                  alt: "Swiss Sky Ride view",
                },
                {
                  src: "/images/scrapbook03/scrapbook02.04.jpg",
                  width: 400,
                  height: 305,
                  alt: "Swiss Sky Ride view",
                },
              ],
            },
            { type: "storyTitle", text: "ALPINE VISTAS" },
            {
              type: "lead",
              text: "AS WE CLOSE the Scrapbook for the 1964 season, let's take a last look at the Fair - and from what better place than the thrilling Swiss Sky Ride? It's high enough (112 feet) to take in most of the sights, low enough to note details and slow enough to appreciate the view. Fotos were taken at dusk when night lights add interest to the still visible panoramas. If you've missed it this year, the Ride will be back again next April.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/indones32.jpg",
                width: 300,
                height: 189,
                alt: "Indonesia tower from Swiss Sky Ride",
                captionLead: "From the other side,",
                caption:
                  "see Indonesia's flower-topped tower close by and Hong Kong, etc., farther off.",
              },
            },
          ],
        },
        {
          label: "Far East Splendor",
          blocks: [
            { type: "date", text: newsDate("June 21, 1964") },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/honkon05.jpg",
                width: 460,
                height: 299,
                alt: "Hong Kong pavilion and junks",
                captionLead: "Gay and ornate",
                caption:
                  "are Hong Kong's pavilion and gateway at left. At right, adjoing three Chinese junks front Crown Colony Club. Stern of middle one is entrance.",
              },
            },
            { type: "storyTitle", text: "FAR EAST SPLENDOR" },
            {
              type: "lead",
              text: "AMONG THE MANY wonders of the Fair's International Area, those emanating from the Far East seem to have a special fascination, particularly for Westerners. Today our scrapbook brings you colorfotos snapped at three pavilions of the Orient: Hong Kong, Republic of Korea and Thailand.",
            },
            {
              type: "credit",
              text: "NEWS COLORFOTO BY DANIEL JACINO AND ARTHUR SASSE",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/thai02.jpg",
                width: 400,
                height: 430,
                alt: "Thailand Mondop of Saraburi",
                captionLead: "An exact replica",
                caption:
                  "of the gilded Mondop of Saraburi, Buddhist shrine, is Thailand's offering.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/korea01.jpg",
                width: 300,
                height: 270,
                alt: "Korea House waitresses",
                captionLead: "Wearing",
                caption:
                  "traditional costumes, waitresses Ronny Lee (l.) and Chung Ja Kim await guests at Korea House, refreshments adjunct to pavilion.",
              },
            },
          ],
        },
        {
          label: "Everybody Wants a Look",
          blocks: [
            { type: "date", text: newsDate("September 20, 1964") },
            { type: "credit", text: "NEWS COLORPHOTOS BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/gm94.jpg",
                width: 450,
                height: 216,
                alt: "General Motors Futurama pavilion",
                captionLead: 'With "hood" at one end',
                caption:
                  "and \"tail fin\" at the other, GM's shape suggests a car. And a popular one, as attested by crowd awaiting alongside pavilion to ride the Futurama inside.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  EVERYBODY
                  <br />
                  WANTS
                  <br />
                  A
                  <br />
                  LOOK
                </>
              ),
            },
            {
              type: "lead",
              text: "WHEN WORD gets about that something's a hit attraction - whether it be in a Broadway theatre, ball park, music hall or a Fair pavilion - everybody wants to see it at the same time. The Scrapbook camera's eye had no trouble finding two Fair examples: General Motor's Futurama and International Business Machines' Information Machine. GM's updated version of the 1939-40 Fair's top attraction is a good bet to repeat. The IBM exhibt, on the other hand, is entirely new: it popularizes today's all-essential computers.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook03/ibm37.jpg",
                width: 460,
                height: 425,
                alt: "IBM People Wall",
                captionLead: "Rows of thrilled fairgoers",
                caption:
                  "ride the People Wall that carries them way up into IBM's uique Information Machine for a lively show.",
              },
            },
          ],
        },
      ]}
    />
  );
}
