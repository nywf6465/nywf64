import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — West Virginia — nywf64.com",
  description:
    "West Virginia pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy wesvir01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Wesvir01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="West Virginia"
      titleId="wesvir01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/wesviroverview/hero-banner.jpg",
        alt: "West Virginia pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WesvirNavChrome />}
      previousHref="/wesviroverview"
      nextHref="/wesvir02"
      guide1964={{
        cover: {
          src: "/images/wesvir01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wesvir01/wvlogo64.gif",
          width: 144,
          height: 88,
          alt: "",
        },
        name: "WEST VIRGINIA",
        copy: (
          <>
            Glassblowers at work, a coal mine visitors can enter and a movie of
            the nation&apos;s newest radio telescope are among the spectacles in
            the West Virginia pavilion. Visitors enter past an aviary of birds
            from the state. There are industrial displays and, for tourists,
            panoramas of the state&apos;s scenery and year-round attractions. A
            restaurant is on the premises, as is a gift shop offering such state
            souvenirs as a coal miner&apos;s cap. Every visitor to the pavilion
            is given a free ticket; at the end of the Fair, a lucky ticket-holder
            wins 10 acres of West Virginia mountaintop plus a brand-new vacation
            lodge.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "FRAGILE MEMENTOS.",
            body: (
              <>
                Half a dozen glassblowers perform continuously, blowing such
                curiosities as horses, fish, ducks. The pieces may be bought for
                $1.50 up.
              </>
            ),
          },
          {
            label: "BOTTOM OF THE PIT.",
            body: (
              <>
                After entering a simulated coal mine, with slate to walk upon,
                coal along the walls and veins to enter, visitors come out at the
                &quot;tipple,&quot; where coal is sorted and graded. Dioramas en
                route trace the history of mining from the days of donkey carts
                to modern machines.
              </>
            ),
          },
          {
            label: "HIGH IN THE SKY.",
            body: (
              <>
                A 6-minute color movie shows the new $850,000 radio telescope at
                Green Bank, West Virginia, and describes how it probes the
                secrets of the universe.
              </>
            ),
          },
          {
            label: "WEST VIRGINIA RESTAURANT.",
            body: (
              <>
                A pool of water and the sounds of the forest reproduced in stereo
                create a mountain setting; fried chicken and ham are featured.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/wesvir01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wesvir01/wvlogo.gif",
          width: 144,
          height: 88,
          alt: "",
        },
        name: "WEST VIRGINIA",
        nameFace: "arial",
        summary: (
          <>
            Highlights include a trip through a coal mine, an exhibition of
            glassblowing and a chance to win a mountaintop vacation home.
          </>
        ),
        copy: (
          <>
            There are also industrial displays, panoramas of the state&apos;s
            tourist attractions and a working model of the Echo II satellite.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "FRAGILE MEMENTOS.",
            body: (
              <>
                Glassblowers create bowls and vases, horses and fish. The items
                are for sale.
              </>
            ),
          },
          {
            label: "BOTTOM OF THE PIT.",
            body: (
              <>
                Visitors walk through a simulated coal mine where dioramas trace
                the history of mining from the days of donkey cars to today&apos;s
                modern machines.
              </>
            ),
          },
          {
            label: "HIGH IN THE SKY.",
            body: (
              <>
                A six-minute color film shows the new $850,000 radio telescope at
                Green Bank and describes how it probes the secrets of the
                universe.
              </>
            ),
          },
          {
            label: "TOP OF THE MOUNTAIN.",
            body: (
              <>
                Every visitor is given a free ticket; at the end of the Fair the
                lucky ticket-holder wins five acres of West Virginia mountaintop
                and a new vacation lodge. Also to be given away: a two-year-old
                thoroughbred colt, broken in and ready for racing.
              </>
            ),
          },
          {
            label: "GOOD FOOD.",
            body: (
              <>
                A cafeteria features West Virginia specialties such as ham,
                steaks and fried chicken.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/wesvir01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/wesvir01/federal-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/wesvirmap",
      }}
    />
  );
}
