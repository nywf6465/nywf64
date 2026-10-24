import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";
import styles from "@/styles/scrapbookIssuePage.module.css";

export const metadata: Metadata = {
  title: "1965 Scrapbook — Page Four — World’s Fair Scrapbook — nywf64.com",
  description:
    "1965 Scrapbook Page Four from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page Four (legacy scrapbook05.html → /scrapbook04).
 * Shared ScrapbookHero (1905×826). Nav Page 5.
 * PREVIOUS → /scrapbook03; NEXT → /scrapbook05.
 */
export default function Scrapbook04Page() {
  return (
    <ScrapbookIssuePage
      title="1965 Scrapbook - Page Four"
      titleId="scrapbook04-title"
      titleMarkSrc="/images/scrapbook04/scrapbook-title.jpg"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbook03"
      overviewHref="/scrapbookoverview"
      nextHref="/scrapbook05"
      footerNote={
        <>
          <p>
            <strong>Wembasters note ...</strong> Many thanks to Gary Holmes who,
            many years ago, provided us with a number of clippings that he had
            saved from copies of the <em>New York Sunday News</em> when he was a
            kid, fascinated with the Fair. We recently purchased a scrapbook
            online that contained many additional clippings. We hope this
            featured presentation provides fond memories and an enjoyable look
            back at the Fair for you.
          </p>
          <p className={styles.footerSign}>Bill Young</p>
          <p className={styles.footerSign}>November 16, 2018</p>
        </>
      }
      features={[
        {
          label: "Bourbon Street, Minnesota, Belgian Village",
          blocks: [
            { type: "date", text: newsDate("June 5, 1965") },
            { type: "credit", text: "NEWS COLORFOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/boustr01.jpg",
                width: 400,
                height: 273,
                alt: "Bourbon Street bandstand",
                captionLead: "Bourbon Street's",
                caption:
                  "passing paraders stop, sit and listen to Ted diGeorgia and his men dishing out dixie from the bandstand. The Creole-flavored food, drink and music center also boasts an antique fair displaying fine armor.",
              },
            },
            { type: "credit", text: "NEWS COLORPHOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/minnesota01.jpg",
                width: 250,
                height: 368,
                alt: "Minnesota Viking and ship",
                captionLead: "Minnesota's Viking",
                caption:
                  "and ship cue strollers to Kensington Rune Stone inside. Found in the state, its runes place Norsemen there in 1362.",
              },
            },
            { type: "credit", text: "NEWS COLORPHOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/belvil03.jpg",
                width: 340,
                height: 359,
                alt: "Belgian Village",
                captionLead: 'With "old" houses',
                caption:
                  "and narrow, cobbled streets, canals and bridges, alfresco stands and musicians, Belgian Village makes the visitor feel he's really in the old country. It's Rathskeller is the Fair's largest restaurant.",
              },
            },
          ],
        },
        {
          label: "Chrysler and DuPont",
          blocks: [
            { type: "date", text: newsDate("June 13, 1965") },
            {
              type: "credit",
              text: "NEWS COLORPHOTOS BY WILLIAM KLEIN AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/chry22.jpg",
                width: 180,
                height: 192,
                alt: "Chrysler Show-Go-Round puppets",
                captionLead: "Puppets",
                caption:
                  'Carby Carburetor and Grease Monkeys introduce unique "Show-Go-Round" at Chrysler.',
              },
            },
            { type: "credit", text: "NEWS COLORPHOTO BY BILL EDDY" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/dupont29.jpg",
                width: 400,
                height: 418,
                alt: "DuPont Wonderful World of Chemistry cast",
                captionLead: "It takes 203",
                caption:
                  'actors, actresses, singers, dancers, hosts, hastesses, musicians, technicians, projectionists, stage hands, crew members and administrative staff to stage 48 shows daily at DuPont\'s "Wonderful World of Chemistry." Here are all 203 of em!',
              },
            },
          ],
        },
        {
          label: "Denmark Tivoli and Chunky Continuum",
          blocks: [
            { type: "date", text: newsDate("May 9, 1965") },
            { type: "credit", text: "NEWS COLORFOTO BY RICHARD LEWIS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/denmar01.jpg",
                width: 450,
                height: 344,
                alt: "Denmark Tivoli Gardens playground",
                captionLead: "Named for Copenhagen's",
                caption:
                  "famous park, Tivoli Gardens, the playground at Denmark's pavilion includes such imaginative juvenile delights as these giant playing cards. Hours 10-6.",
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/chucan01.jpg",
                width: 210,
                height: 196,
                alt: "Chunky Continuum sculpture",
                captionLead: "Kids can",
                caption:
                  "hardly wait to see the figures spring to life in the sculptured Continum outside the Chunky factory.",
              },
            },
          ],
        },
        {
          label: "General Motors Futurama",
          blocks: [
            { type: "date", text: newsDate("April 25, 1965") },
            { type: "credit", text: "NEWS COLORFOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/gm95.jpg",
                width: 297,
                height: 419,
                alt: "General Motors Futurama",
                captionLead: "Millions will",
                caption:
                  "again flock to GM to ride the Futurama, 1964's No. 1 attraction.",
              },
            },
          ],
        },
        {
          label: "Hall of Science and International Plaza",
          blocks: [
            { type: "date", text: newsDate("September 12, 1965") },
            { type: "credit", text: "NEWS COLORFOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/halsci01.jpg",
                width: 342,
                height: 400,
                alt: "Hall of Science entrance",
                captionLead: "Looking like",
                caption:
                  "a giant cemet carpet standing on its edge, the Hall of Science in the Transportation Area attracts its many visitors into a creviced entrance. The Atomic Energy Commission is top exhibitor inside building.",
              },
            },
            {
              type: "credit",
              text: "NEWS COLORFOTO BY EDMUND PETERS AND RICHARD LEWIS",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/halsci02.jpg",
                width: 318,
                height: 230,
                alt: "Hall of Science space rendezvous exhibit",
                captionLead: "An upside down",
                caption:
                  "yellow space taxi approaches a permanently orbiting space lab in this simulated rendezvous in outer space of full-sized manned orbital vehicles. Staged by Martin-Marietta above Hall's cathedral-like main floor. It's a thriller.",
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY DANIEL JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/intpla01.jpg",
                width: 320,
                height: 463,
                alt: "International Plaza tower",
                captionLead: "English-styled",
                caption:
                  '"stone" Tower in International Plaza has replicas of world-famous diamonds, British Crown Jewels and an art exhibit.',
              },
            },
          ],
        },
        {
          label: "Morocco, Spain, India",
          blocks: [
            { type: "date", text: newsDate("September 19, 1965") },
            { type: "credit", text: "NEWS COLORFOTO BY WILLIAM KLEIN" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/morocco01.jpg",
                width: 460,
                height: 217,
                alt: "Moroccan pavilion",
                captionLead: "Under the Moroccan",
                caption:
                  "pavilion's Moorish arches, a bazaar and restaurants reproduce the sights and sounds of North Africa. The restaurants feature native foods, and skilled artisans fashion rugs in the shops.",
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY WILLIAM KLEIN" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/spain01.jpg",
                width: 460,
                height: 246,
                alt: "Spain pavilion",
                captionLead: "Inside Spain's",
                caption:
                  "modern pavilion, the atmosphere is that of old Iberia, an appropriate setting for great art (Picasso, Dali) fine dining (four restaurants), entertainment (flamenco dancing, guitar recitals).",
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/india01.jpg",
                width: 460,
                height: 233,
                alt: "India pavilion",
                captionLead: "The theme",
                caption:
                  "of India's pavilion is Progress in Democracy, and the country's old cultures and new industries - from 3,000 B.C. to the 20th Century - are on exhibit. Indian delicacies are served in the restaurant.",
              },
            },
          ],
        },
        {
          label: "New England and Maryland",
          blocks: [
            { type: "date", text: newsDate("October 24, 1965") },
            { type: "credit", text: "NEWS COLORFOTO BY WILLIAM KLEIN" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/neweng01.jpg",
                width: 460,
                height: 192,
                alt: "New England pavilion",
                captionLead: "Hexagonal",
                caption:
                  'buildings at New England house separated information centers, as well as regional displays of all facets of Yankeeland life. Visitors seemed especially to like the country store, tribute to JFK, village green, "Walk on the Moon" exhibit and the Millstone, which operated a gourmet restaurant and three other places to eat.',
              },
            },
            { type: "credit", text: "NEWS COLORFOTO BY WILLIAM KLEIN" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook04/maryland01.jpg",
                width: 460,
                height: 203,
                alt: "Maryland pavilion",
                captionLead: "Old Glory",
                caption:
                  '(replica 15-star flag that inspired "Star Spangled Banner") flew before inviting Maryland pavilion (l.) with its fine restaurant and Chesapeak Bay Wharf snack bar.',
              },
            },
          ],
        },
      ]}
    />
  );
}
