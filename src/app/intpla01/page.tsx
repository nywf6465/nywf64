import type { Metadata } from "next";
import { IntplaNavChrome } from "@/components/IntplaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — International Plaza — nywf64.com",
  description:
    "International Plaza entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Plaza guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy intpla01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy wording and typos preserved (e.g. cafe's, Flora Brasileira / Brasilera, deserts).
 */
export default function Intpla01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="International Plaza"
      titleId="intpla01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/intplaoverview/hero-banner.jpg",
        alt: "International Plaza at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IntplaNavChrome />}
      previousHref="/intplaoverview"
      nextHref="/intpla02"
      guide1964={{
        cover: {
          src: "/images/intpla01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/intpla01/intplalogo64.gif",
          width: 144,
          height: 92,
          alt: "",
        },
        name: (
          <>
            INTERNATIONAL
            <br />
            PLAZA
          </>
        ),
        copy: (
          <>
            A multitude of small exhibits along promenades make the Plaza an
            international fair with a fair. Among the sponsors are the United
            Nations, and governments and trade groups from all over the world.
            Their displays include U.N. postage stamps, works of art and food
            specialties, raw materials and manufactured goods, travel and
            industrial information. Artisans demonstrate traditional crafts, and
            entertainers present their countries&apos; music. Some of the exhibits
            have small cafe&apos;s or snack bars which serve special national
            dishes. Visitors may eat at tables under colored umbrellas.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "UNITED NATIONS EXHIBIT.",
            body: (
              <>
                An information center is staffed by official U.N. guides.
                Reservations may be made for guided tours to the U.N.
                Publications and stamps are sold.
              </>
            ),
          },
          {
            label: "ART AND TREASURE.",
            body: (
              <>
                A Brazilian company&apos;s exhibit of gems features the
                &quot;Flora Brasileira,&quot; a jewel-studded gold flower worth
                $100,000. A Mexican artisans&apos; association displays a circular
                stone calendar used by the Aztec Indians centuries ago.
                India&apos;s exhibit includes a collection of antique jewelry that
                belonged to Mogul emperors. Burma has contributed a display of
                pearls and rubies.
              </>
            ),
          },
          {
            label: "WARES FOR SALE.",
            body: (
              <>
                Among the national products on sale are rugs from Turkey,
                silverware from Norway and straw hats from Taiwan. The work of
                artisans and manufacturers from Thailand to Italy is on display;
                West Germany alone is represented by over 300 manufacturers.
              </>
            ),
          },
          {
            label: "PICTORIAL DISPLAYS.",
            body: (
              <>
                An art center exhibits and sells contemporary oil paintings from
                around the world; artists do portraits of visitors in oils or
                charcoal. There are many photographic exhibits, and Monaco shows
                a film of its latest annual Grand Prix auto races. The winning
                car is on display.
              </>
            ),
          },
          {
            label: "FOODS.",
            body: (
              <>
                Belgian waffles, beer from the Philippines and cookies from
                Norway are but a few of the food specialties displayed, sold or
                served by various exhibitors. Ecuador&apos;s bananas are presented
                in exotic desserts and squeezed into juice. Luxembourg features
                wines, cheeses, pastries and onion soup. The Mediterranean Center
                offers delicacies from North Africa.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/intpla01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/intpla01/intplalogo.gif",
          width: 144,
          height: 92,
          alt: "",
        },
        name: "INTERNATIONAL PLAZA",
        summary: (
          <>
            A host of small exhibits, food stands and shops lends a festive air
            to this bazaar of many lands.
          </>
        ),
        copy: (
          <>
            Displays include art works, food specialties, and raw materials and
            manufactured goods from all over the world. Artisans demonstrate
            traditional crafts, and performers present native music and dances.
            Small cafes and snack bars serve national dishes.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "ART AND TREASURE.",
            body: (
              <>
                A Brazilian exhibit of gems features the &quot;Flora
                Brasilera,&quot; a bejeweled gold flower worth $100,000. On
                display elsewhere are an ancient Aztec calendar made of stone, a
                collection of jewelry that once belonged to India&apos;s Mogul
                Emperors, and replicas of the Tower of London and of Britain&apos;s
                Crown Jewels.
              </>
            ),
          },
          {
            label: "GLOBAL MARKET.",
            body: (
              <>
                Turkish rugs, Norwegian silverware, and straw hats from Taiwan
                are among the varied handicrafts for sale.
              </>
            ),
          },
          {
            label: "ARTISTS AT WORK.",
            body: (
              <>
                Visitors may have their portraits done in oils or charcoal, or
                buy contemporary paintings from many lands.
              </>
            ),
          },
          {
            label: "FOODS.",
            body: (
              <>
                Among the dishes offered are the delicacies of North Africa, the
                wines, cheeses and pastries of Luxembourg, Philippine beer,
                Belgian waffles and exotic banana deserts from Ecuador.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/intpla01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/intpla01/locate-it.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/intplamap",
      }}
    />
  );
}
