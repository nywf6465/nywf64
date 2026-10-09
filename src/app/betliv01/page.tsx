import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Better Living Center — nywf64.com",
  description:
    "Better Living Center entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy betliv01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Betliv01Page() {
  const pavilionName = (
    <>
      BETTER LIVING
      <br />
      CENTER
    </>
  );

  return (
    <GuidebookSouvenirPage
      heroLabel="Better Living Center"
      titleId="betliv01-title"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      nextHref="/betliv02"
      guide1964={{
        cover: {
          src: "/images/betliv01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/betliv01/betliv-logo-1964.gif",
          width: 144,
          height: 107,
          alt: "",
        },
        name: pavilionName,
        copy: (
          <>
            This pavilion, third largest at the Fair, is a giant showplace for
            the products, services and ideas that enrich America&apos;s standard
            of living. Some 250 exhibitors carry out the theme with displays
            that fall into six major categories: food, fashion, home, leisure,
            health and security. There are food exhibits, up-to-date fashion
            shows, displays of home furnishings, art shows, concerts, and a
            model railroad layout called the largest in the world. A play school
            - the Children&apos;s World - offers a two-hour creative instruction
            course for small children; there is a modest fee. Visitors may
            ascend to the roof on glass-enclosed escalators and then descend
            through the exhibits via ramps. Or they may ride to the roof aboard
            elevators enclosed in a glass tower, which offers a spectacular view
            of the Fair.
          </>
        ),
        admission:
          "Admission: free to pavilion; 50 cents to model railroad; $2.00 to Children's World.",
        highlights: [
          {
            label: "THE LEISURE LIFE.",
            body: (
              <>
                Audio-visual presentations and live programs are offered dealing
                with such subjects as recreation, sports and travel.
              </>
            ),
          },
          {
            label: "A TRUCKLOAD OF FOOD.",
            body: (
              <>
                A glass-walled trailer truck, containing the 90-day food supply
                for an average American family, is a feature of a large and
                varied food exhibit. Elsie the Cow, representing the Borden
                Company, stars every 15 minutes in a fanciful show with animated
                figures. Hershey offers a history of chocolate.
              </>
            ),
          },
          {
            label: "CRYSTAL PALACE OF FASHION.",
            body: (
              <>
                Amid decorations inspired by London&apos;s Crystal Palace of
                1851, four fashion shows a day are presented in an amphitheater.
                Kiosk booths exhibit the latest in fashion, from cosmetics to
                accessories.
              </>
            ),
          },
          {
            label: "HOUSE WITH THE MOST.",
            body: (
              <>
                This exhibit is mainly devoted to the home: what to build it
                with, how to furnish it. At the center of the floor is a
                full-sized seven-room dream house fitted out with the last word
                in modern materials, furnishings and design ideas. The Gallery of
                Kitchens presents the latest in equipment and appliances for the
                kitchens of today and tomorrow. The Promenade of Interiors is a
                comprehensive exhibition of interior decorating, lively with a
                variety of new fabric, furniture and lighting ideas.
              </>
            ),
          },
          {
            label: "THE CREATIVE LIFE.",
            body: (
              <>
                The Better Living Art Gallery presents &quot;Four Centuries of
                American Masterpieces,&quot; selected by a group of curators from
                leading museums. The Beech Nut Theater, on the second level,
                features plays, concerts, fashion shows, movie premieres and
                lectures. An FM radio station broadcasts programs from a studio
                adjacent to the theater.
              </>
            ),
          },
          {
            label: "LADIES' HAVEN.",
            body: (
              <>
                In the Official Hospitality Center for the Women&apos;s
                Organizations of the World, located in this pavilion, visiting
                members of all women&apos;s clubs are made welcome.
              </>
            ),
          },
          {
            label: "MODEL RAILROAD.",
            body: (
              <>
                The rolling stock includes 400 locomotives and 600 cars. Paris,
                Vienna and other cities around the world are along the
                right-of-way, as well as representations of Mars and a City of
                the Future. There is a 30-minute commentary.
              </>
            ),
          },
          {
            label: "SERVICE CENTER.",
            body: (
              <>
                For minor repairs, a number of services - shoe repair, laundry,
                dry cleaning, drug store, hairdresser, barber, automat - are
                available to pavilion visitors.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                The Hilton International Food Bazaar and Marco Polo Club have
                food prepared in five separate kitchens by chefs from Hilton
                hotels around the world. These and the Hospitality Center share a
                dining terrace that gives a view of the nightly (9 p.m.)
                fireworks and fountain display.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/betliv01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/betliv01/betliv-logo-1965.gif",
          width: 144,
          height: 107,
          alt: "",
        },
        name: pavilionName,
        nameFace: "arial",
        summary: (
          <>
            Foods, fashions, furnishings, three restaurants and a play-school
            are among the varied offerings of some 175 exhibitors.
          </>
        ),
        copy: (
          <>
            Visitors ride in elevators up the glass-enclosed Life-Saver tower
            for a spectacular view of the Fair, or take escalators to the top
            floor and descend along ramps past the displays. Children 4 to 10
            may attend a special play-school for a two-hour period of lessons
            and games. There is also an extensive model-railroad exhibit.
            Products designed for better living are given away in a
            &quot;Million-Dollar Sweepstakes.&quot;
          </>
        ),
        admission:
          "Admission: free to pavilion; 50 cents to model railroad; $1.00 per child for two hours in play-school.",
        highlights: [
          {
            label: "FOOD FLOOR.",
            body: (
              <>
                Among the displays, Elsie the Cow stars every 15 minutes in a
                fanciful animation, and a history of chocolate is shown.
              </>
            ),
          },
          {
            label: "PALACE OF FASHION.",
            body: (
              <>
                In a setting inspired by an earlier world&apos;s fair,
                London&apos;s Crystal Palace of 1851, five fashion shows are held
                every day, and the latest in clothes, accessories and cosmetics
                are on view.
              </>
            ),
          },
          {
            label: "DREAM HOUSE.",
            body: (
              <>
                A full-sized, seven-room house features modern furnishings and
                design ideas. There are also some predictions about the future of
                the kitchen.
              </>
            ),
          },
          {
            label: "CREATIVE LIFE.",
            body: (
              <>
                A 500-seat theater offers plays, concerts, movie premieres and
                fashion shows.
              </>
            ),
          },
          {
            label: "LADIES' HAVEN.",
            body: (
              <>
                Visiting members of all women&apos;s clubs are welcome in an
                Official Hospitality Center. There is also a beauty salon.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                The rooftop Cafe&apos; International and Penthouse Restaurant
                serve meals prepared by chefs from many lands. There is another
                restaurant on the ground floor.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/betliv01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/betliv01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/betlivmap",
      }}
    />
  );
}
