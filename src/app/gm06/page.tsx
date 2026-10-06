import type { Metadata } from "next";
import { GmNavChrome } from "@/components/GmNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — General Motors — nywf64.com",
  description:
    "General Motors Pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors Photograph Album — photographs standard.
 * Body from legacy gm06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Gm06Page() {
  return (
    <PhotographsPage
      heroLabel="General Motors Pavilion"
      titleId="gm06-title"
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm05"
      overviewHref="/gmoverview"
      nextHref="/gm07"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/gm06/gm131.jpg",
                width: 400,
                height: 269,
                alt: "General Motors Pavilion",
              },
              title: "General Motors Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm132.jpg",
                width: 400,
                height: 272,
                alt: "General Motors Pavilion",
              },
              title: "General Motors Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm215.jpg",
                width: 400,
                height: 401,
                alt: "Facade and Refelecting Pool & Fountains",
              },
              title: "Facade and Refelecting Pool & Fountains",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm218.jpg",
                width: 400,
                height: 400,
                alt: "Facade and Fountains at Night",
              },
              title: "Facade and Fountains at Night",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm147.jpg",
                width: 400,
                height: 260,
                alt: "Artwork in the Futurama Area",
              },
              title: "Artwork in the Futurama Area",
              source: "SOURCE: © Copyright Dean Lundstrom Collection",
            },
            {
              image: {
                src: "/images/gm06/gm146.jpg",
                width: 400,
                height: 252,
                alt: "The Futurama Ride Train",
              },
              title: "The Futurama Ride Train",
              source: "SOURCE: © Copyright Dean Lundstrom Collection",
            },
            {
              image: {
                src: "/images/gm06/gm155.jpg",
                width: 400,
                height: 265,
                alt: "General Motors Pavilion - Futurama Ride - Lunar Landscape",
              },
              title: "General Motors Pavilion - Futurama Ride - Lunar Landscape",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm157.jpg",
                width: 400,
                height: 288,
                alt: "General Motors Pavilion - Futurama Ride - Underseas Hotel",
              },
              title: "General Motors Pavilion - Futurama Ride - Underseas Hotel",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm138.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Futurama Ride - Jungle Road Builder",
              },
              title: "General Motors Pavilion - Futurama Ride - Jungle Road Builder",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm137.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Futurama Ride - Jungle Freight Terminal",
              },
              title: "General Motors Pavilion - Futurama Ride - Jungle Freight Terminal",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm139.jpg",
                width: 400,
                height: 268,
                alt: "General Motors Pavilion - Futurama Ride - Desert Farming",
              },
              title: "General Motors Pavilion - Futurama Ride - Desert Farming",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm158.jpg",
                width: 400,
                height: 287,
                alt: "General Motors Pavilion - Futurama Ride - Desert Farming",
              },
              title: "General Motors Pavilion - Futurama Ride - Desert Farming",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm214.jpg",
                width: 400,
                height: 358,
                alt: "General Motors Pavilion - Futurama Ride - Home of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - Home of the Future",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm133.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Futurama Ride - Home of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - Home of the Future",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm156.jpg",
                width: 400,
                height: 276,
                alt: "General Motors Pavilion - Futurama Ride - City of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - City of the Future",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm136.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Futurama Ride - City of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - City of the Future",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm135.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Futurama Ride - City of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - City of the Future",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm134.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Futurama Ride - City of the Future",
              },
              title: "General Motors Pavilion - Futurama Ride - City of the Future",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm152.jpg",
                width: 400,
                height: 400,
                alt: "General Motors Pavilion - GMX Experimental Car",
              },
              title: "General Motors Pavilion - GMX Experimental Car",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm141.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - GMX Experimental Car",
              },
              title: "General Motors Pavilion - GMX Experimental Car",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm142.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - GMX Experimental Car",
              },
              title: "General Motors Pavilion - GMX Experimental Car",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm143.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Firebird IV Experimental Car",
              },
              title: "General Motors Pavilion - Firebird IV Experimental Car",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm140.jpg",
                width: 400,
                height: 267,
                alt: "General Motors Pavilion - Firebird IV Experimental Car",
              },
              title: "General Motors Pavilion - Firebird IV Experimental Car",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/gm06/gm154.jpg",
                width: 400,
                height: 275,
                alt: "General Motors Pavilion - Firebird IV Experimental Car",
              },
              title: "General Motors Pavilion - Firebird IV Experimental Car",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/gm06/gm153.jpg",
                width: 400,
                height: 295,
                alt: "General Motors Pavilion Outdoor Product Plaza",
              },
              title: "General Motors Pavilion Outdoor Product Plaza",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/gm06/gm94.jpg",
                width: 450,
                height: 216,
                alt: "With \"hood\" at one end and \"tail fin\" at the other, GM's shape suggests a car. And a popular one, as attested by crowd waiting alongside pavilion to ride the Futurama inside.",
              },
              title: (<>
                With &quot;hood&quot; at one end and &quot;tail fin&quot; at the other, GM&apos;s shape suggests a car. And a popular one, as attested by crowd waiting alongside pavilion to ride the Futurama inside.
              </>),
              source: "SOURCE: News Colorfoto by Daniel Jacino, New York Sunday News , September 20, 1964",
            },
            {
              image: {
                src: "/images/gm06/gm95.jpg",
                width: 297,
                height: 419,
                alt: "Millions will again flock to GM to ride the Futurama, 1964's No. 1 attraction.",
              },
              title: (<>
                Millions will again flock to GM to ride the Futurama, 1964&apos;s No. 1 attraction.
              </>),
              source: "SOURCE: General Motors Colorfoto by Daniel Jacino, New York Sunday News , April 25, 1965",
            },
            {
              image: {
                src: "/images/gm06/gm149.jpg",
                width: 450,
                height: 303,
                alt: "One possibility of our future, GM Futurama designers would have us believe, is undersea living. Here an aquasub (left) cruises among transparent bubbles that make up the resort Hotel Atlantis.",
              },
              title: "One possibility of our future, GM Futurama designers would have us believe, is undersea living. Here an aquasub (left) cruises among transparent bubbles that make up the resort Hotel Atlantis.",
              source: "SOURCE: News Colorfoto by William Klein and Patrick Carroll, New York Sunday News , June 20, 1964",
            },
          ],
        },
      ]}
    />
  );
}
