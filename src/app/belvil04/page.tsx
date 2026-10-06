import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Belgian Village — nywf64.com",
  description:
    "Belgian Village photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab = "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.";
const photoLabInc =
  "SOURCE: Commercial Transparency by © Copyright Photo Lab, inc.";
const blackhawk =
  "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines";
const wolfe =
  "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films";
const nywf = "SOURCE: © Copyright nywf64.com Collection";
const kraus = "SOURCE: © Copyright Mike Kraus Collection";
const auction = "SOURCE: Online auction";

/**
 * Belgian Village photograph album — “photographs” standard.
 * Body from legacy belvil04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Legacy wording (Begium, gilittering, Photo Lab, inc.) is preserved.
 */
export default function Belvil04Page() {
  return (
    <PhotographsPage
      heroLabel="Belgian Village"
      titleId="belvil04-title"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil03"
      overviewHref="/belvil01"
      nextHref="/belvil05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/belvil04/photolab-5622.jpg",
                width: 267,
                height: 400,
                alt: "Belgian Village - Night",
              },
              title: "Belgian Village - Night",
              source: photoLab,
            },
            {
              image: {
                src: "/images/belvil04/photolab-5623.jpg",
                width: 400,
                height: 267,
                alt: "Belgian Village - Cafe",
              },
              title: "Belgian Village - Cafe",
              source: photoLab,
            },
            {
              image: {
                src: "/images/belvil04/photolab-5625.jpg",
                width: 400,
                height: 267,
                alt: "Belgian Village - Famous Gilles Dancers",
              },
              title: "Belgian Village - Famous Gilles Dancers",
              source: photoLab,
            },
            {
              image: {
                src: "/images/belvil04/photolab-5624.jpg",
                width: 267,
                height: 400,
                alt: "Belgian Village - Street Scene",
              },
              title: "Belgian Village - Street Scene",
              source: photoLabInc,
            },
            {
              image: {
                src: "/images/belvil04/mainliner-633-60.jpg",
                width: 400,
                height: 267,
                alt: "Belgian Village - Flemish town of year 1700",
              },
              title: "Belgian Village - Flemish town of year 1700",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/belvil04/wolfe-79162.jpg",
                width: 400,
                height: 262,
                alt: "Belgian Village - Costumed Entertainers",
              },
              title: "Belgian Village - Costumed Entertainers",
              source: wolfe,
            },
            {
              image: {
                src: "/images/belvil04/wolfe-79160.jpg",
                width: 263,
                height: 400,
                alt: "Belgian Village across tranquil lake",
              },
              title: "Belgian Village across tranquil lake",
              source: wolfe,
            },
            {
              image: {
                src: "/images/belvil04/wolfe-79163.jpg",
                width: 400,
                height: 263,
                alt: "Belgian Village - Cafe Belgique",
              },
              title: "Belgian Village - Cafe Belgique",
              source: wolfe,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/belvil04/belvil43.jpg",
                width: 400,
                height: 267,
                alt: "Belgian Village as seen from NY State Observation Towers",
              },
              title:
                "Belgian Village as seen from NY State Observation Towers",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil44.jpg",
                width: 400,
                height: 267,
                alt: "Belgian Village as seen from Long Island Expressway",
              },
              title: "Belgian Village as seen from Long Island Expressway",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil41.jpg",
                width: 400,
                height: 267,
                alt: "Entrance to the Belgian Village",
              },
              title: "Entrance to the Belgian Village",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil42.jpg",
                width: 400,
                height: 273,
                alt: "Inside the Entrance to the Belgian Village",
              },
              title: "Inside the Entrance to the Belgian Village",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil45.jpg",
                width: 400,
                height: 267,
                alt: "Approaching the Entrance to the Belgian Village",
              },
              title: "Approaching the Entrance to the Belgian Village",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil46.jpg",
                width: 400,
                height: 268,
                alt: "Belgian Village - Interior Courtyard",
              },
              title: "Belgian Village - Interior Courtyard",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil47.jpg",
                width: 275,
                height: 400,
                alt: "Belgian Village - Street Scene",
              },
              title: "Belgian Village - Street Scene",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil48.jpg",
                width: 400,
                height: 275,
                alt: "Belgian Village - Street Scene",
              },
              title: "Belgian Village - Street Scene",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil49.jpg",
                width: 400,
                height: 274,
                alt: "Belgian Village - Famous Gilles Dancers",
              },
              title: "Belgian Village - Famous Gilles Dancers",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil52.jpg",
                width: 400,
                height: 256,
                alt: "Belgian Village - Sidewalk Cafe",
              },
              title: "Belgian Village - Sidewalk Cafe",
              source: kraus,
            },
            {
              image: {
                src: "/images/belvil04/belvil58.jpg",
                width: 400,
                height: 390,
                alt: "Belgian Village - Interior Courtyard & Tower",
              },
              title: "Belgian Village - Interior Courtyard & Tower",
              source: auction,
            },
            {
              image: {
                src: "/images/belvil04/belvil53.jpg",
                width: 271,
                height: 400,
                alt: "Belgian Village - Village Church",
              },
              title: "Belgian Village - Village Church",
              source: kraus,
            },
            {
              image: {
                src: "/images/belvil04/belvil56.jpg",
                width: 400,
                height: 269,
                alt: "Belgian Village - Creperie",
              },
              title: "Belgian Village - Creperie",
              source: kraus,
            },
            {
              image: {
                src: "/images/belvil04/belvil59.jpg",
                width: 400,
                height: 392,
                alt: "Belgian Village - Cafe Scene",
              },
              title: "Belgian Village - Cafe Scene",
              source: auction,
            },
            {
              image: {
                src: "/images/belvil04/belvil55.jpg",
                width: 400,
                height: 280,
                alt: "Belgian Village - Creperie",
              },
              title: "Belgian Village - Creperie",
              source: kraus,
            },
            {
              image: {
                src: "/images/belvil04/belvil54.jpg",
                width: 400,
                height: 266,
                alt: "Belgian Village - Creperie",
              },
              title: "Belgian Village - Creperie",
              source: kraus,
            },
            {
              image: {
                src: "/images/belvil04/belvil50.jpg",
                width: 400,
                height: 272,
                alt: "Belgian Village - Bel-Gem Waffle Restaurant",
              },
              title: "Belgian Village - Bel-Gem Waffle Restaurant",
              source: nywf,
            },
            {
              image: {
                src: "/images/belvil04/belvil51.jpg",
                width: 400,
                height: 267,
                alt: "Belgian Village - Enjoying a delicious Bel-Gem Waffle",
              },
              title: "Belgian Village - Enjoying a delicious Bel-Gem Waffle",
              source: nywf,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/belvil04/belvil01.jpg",
                width: 475,
                height: 328,
                alt: "A successful transplant of the Belgian Village beside superhighways",
              },
              title:
                "A SUCCESSFUL TRANSPLANT THE STRIKING THING about today's Scrapbook foto is the contrast between the Old-World Begium Village and the web of up-to-the-minute superhighways bordering the fairgrounds. The village appears to have been picked up in Belgium and set down here intact - which is close to the truth. Inside is a gilittering array of shops, artisans at work, exhibits, amusements and food-and-drink spots - including several large restaurants. And there's even one outside the walls (foreground).",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, August 22, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/belvil04/belvil02.jpg",
                width: 475,
                height: 247,
                alt: "Unhurried scene in Belgian Village's Grande Place",
              },
              title:
                "Unhurried scene in Belgian Village's Grande Place presents replica of city hall of Damme, Cafe De Belgique in front of it and chimes tower at left. After dark, it's a gay spot.",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, September 27, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/belvil04/belvil03.jpg",
                width: 340,
                height: 359,
                alt: "Old houses and cobbled streets in the Belgian Village",
              },
              title:
                'WITH "OLD" HOUSES and narrow, cobbled streets, canals and bridges, alfresco stands and musicians, Belgian Village makes the visitor feel he\'s really in the old country. It\'s Rathskeller is the Fair\'s largest restaurant.',
              source: (
                <>
                  SOURCE: News Colorfoto by Richard Lewis,{" "}
                  <em>New York Sunday News</em>, June 6, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
