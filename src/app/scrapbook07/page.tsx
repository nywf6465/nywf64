import type { Metadata } from "next";
import { ScrapbookIssuePage } from "@/components/ScrapbookIssuePage";
import { ScrapbookNavChrome } from "@/components/ScrapbookNavChrome";

export const metadata: Metadata = {
  title: "1965 Scrapbook — Page Seven — World’s Fair Scrapbook — nywf64.com",
  description:
    "1965 Scrapbook Page Seven from the New York Sunday News World’s Fair Scrapbook series — nywf64.com.",
};

const newsDate = (date: string) => (
  <>
    <em>New York Sunday News</em>, {date}
  </>
);

/**
 * World’s Fair Scrapbook Page Seven (legacy scrapbook08.html → /scrapbook07).
 * Shared ScrapbookHero (1905×826). Nav Page 8.
 * PREVIOUS → /scrapbook06; NEXT hidden until the next issue page ships.
 */
export default function Scrapbook07Page() {
  return (
    <ScrapbookIssuePage
      title="1965 Scrapbook - Page Seven"
      titleId="scrapbook07-title"
      titleMarkSrc="/images/scrapbook07/scrapbook-title.jpg"
      nav={<ScrapbookNavChrome />}
      previousHref="/scrapbook06"
      overviewHref="/scrapbookoverview"
      hideNext
      features={[
        {
          label: "It's the Spirit That Counts",
          blocks: [
            { type: "date", text: newsDate("August 8, 1965") },
            { type: "credit", text: "NEWS COLORPHOTO BY DAN JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/mason01.jpg",
                width: 360,
                height: 355,
                alt: "Masonic Center entrance",
                captionLead: "Visitors pass",
                caption:
                  'under an arch and cross bridge to enter Masonic Center, operated by the Free & Accepted Masons, only fraternity exhibiting at the Fair. It outines the story of Masonry; its theme: "Brotherhood, the Foundation of World Peace."',
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  IT&apos;S THE SPIRIT
                  <br />
                  THAT
                  <br />
                  COUNTS
                </>
              ),
            },
            {
              type: "lead",
              text: "ONE ASPECT of the Fair a lot of visitors may not be aware of is the number of exhibits staffed by informed and devoted volunteers. They're to be found chiefly in the pavilions of fraternal, religious and service organizations, and their spirt is most refreshing. Not only are they well trained, helpful and courteous, but many are most enthusiastic and eager to share their fervor. Three outstanding pavilions with such aids are Christian Science, Masonic and Mormon. Others using volunteers include Protestant & Orthodox Center, Vatican, Russian Orthodox-Greek Catholic, Billy Graham, Boy Scouts, Dynamic Maturity and UNICEF at Pepsi-Cola.",
            },
            { type: "credit", text: "NEWS COLORPHOTOS BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/mormon01.jpg",
                width: 300,
                height: 716,
                alt: "Mormon pavilion",
                captionLead: "Among the Fair's",
                caption:
                  "most impressive sights is the Mormon pavilion with its towering facade topped by the Angel Moroni. It's copied from famed Temple in Salt Lake City, where the Church of Jesus Christ of Latter Day Saints maintains headquarters.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/chrsci08.jpg",
                width: 300,
                height: 535,
                alt: "Christian Science pavilion",
                captionLead: "Christian Science",
                caption:
                  "pavilion sparkles with a 28-foot stained glass centerpiece. Exhibit has Fair's largest adult volunteer staff.",
              },
            },
          ],
        },
        {
          label: "Neighbors Three",
          blocks: [
            { type: "date", text: newsDate("May 16, 1965") },
            { type: "credit", text: "NEWS COLORPHOTO BY DAN JACINO" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/uar05.jpg",
                width: 460,
                height: 331,
                alt: "United Arab Republic pavilion",
                captionLead: "UAR's arched gateway",
                caption:
                  "invites one to see what Egypts doing today as well as to view its ancient glories. A tourist area and patio restaurant are new this year.",
              },
            },
            {
              type: "storyTitle",
              text: (
                <>
                  NEIGHBORS
                  <br />
                  THREE
                </>
              ),
            },
            {
              type: "lead",
              text: "AT THE FAIR and at home the nations of Jordan, Lebanon and Egypt (the United Arab Republic) are neighbors. Here, two are side by side and the third's around the corner; in Asia and Africa, they're at or close by the eastern end of the Mediterranean Sea. Despite these physical proximities, fairgoers who view their pavilions may quite possibly find as many or more differences as liknesses in their ways. Which is what makes the world go round and the International Area so fascinating.",
            },
            { type: "credit", text: "NEWS COLORPHOTOS BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/lebano10.jpg",
                width: 300,
                height: 407,
                alt: "Lebanon pavilion",
                captionLead: "The handsome",
                caption:
                  "pavilion that Lebanon built is a modern version of traditional Lebanese design.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/jordan42.jpg",
                width: 300,
                height: 344,
                alt: "Jordan pavilion interior",
                captionLead: "Tourists admire",
                caption:
                  "myriad colors of Jordan pavilion's interior. typical Jordanian meals are served downstairs.",
              },
            },
          ],
        },
        {
          label: "To Each His Own",
          blocks: [
            { type: "date", text: newsDate("August 15, 1965") },
            { type: "credit", text: "NEWS COLORPHOTOS BY EDMUND PETERS" },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/pakist01.jpg",
                width: 460,
                height: 256,
                alt: "Pakistan pavilion",
                captionLead: "Pakistan achieves",
                caption:
                  "traditional Islamic grace with modern masonry. Inside, a bazaar and restaurant; you also view its history, present progress and promising future.",
              },
            },
            { type: "storyTitle", text: "TO EACH HIS OWN" },
            {
              type: "lead",
              text: "FAIR ARCHITECTURE has always been fair game for Fair critics. Some like it uniform, such as the ersatz classical of the 1893 Chicago Fair; others, like our present Fair's Robert Moses, prefer diversity. So we have diversity! The International Area, where each pavilion reflects its characteristic architectural styling, best presents the case for diversity. three fine examples are Pakistan, Switzerland, Venezuela.",
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/swiss05.jpg",
                width: 300,
                height: 224,
                alt: "Switzerland pavilion",
                captionLead: "Inviting",
                caption:
                  "in its familiar Alpine appearance, Switzerland houses a $2-million watch collection, a time center, Le Chalet (Swiss restaurant), exhibit hall and shop. Note Swiss Sky Ride in distance.",
              },
            },
            {
              type: "photo",
              photo: {
                src: "/images/scrapbook07/veneze01.jpg",
                width: 400,
                height: 381,
                alt: "Venezuela pavilion",
                captionLead: "Designed",
                caption:
                  "by two prize-winning native architects, the Venezuelan pavilion is built of redwood. In front, giant bust of Simon Bolivar; inside, a 21-ft. working model of Angel Falls, world's highest.",
              },
            },
          ],
        },
      ]}
    />
  );
}
