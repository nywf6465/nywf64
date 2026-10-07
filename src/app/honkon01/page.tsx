import type { Metadata } from "next";
import { HonkonNavChrome } from "@/components/HonkonNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Hong Kong — nywf64.com",
  description:
    "Hong Kong pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hong Kong guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy honkon01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Honkon01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hong Kong"
      titleId="honkon01-title"
      hero={{
        src: "/images/honkonoverview/hero-banner.jpg",
        alt: "Hong Kong at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HonkonNavChrome />}
      previousHref="/honkonoverview"
      nextHref="/honkon02"
      guide1964={{
        cover: {
          src: "/images/honkon01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/honkon01/hong-kong-logo-1964.gif",
          width: 152,
          height: 93,
          alt: "",
        },
        name: "HONG KONG",
        copy: (
          <>
            The bustling commerce, scenic beauty and Oriental-European atmosphere
            of the famous British crown colony have been re-created in the Hong
            Kong pavilion and the adjoining Crown Colony Club, sponsored by the
            Hong Kong Trading Company, Inc. The pavilion - with upswept eaves,
            intense colors and intricate carvings - captures the spirit of Hong
            Kong architecture. It contains special Oriental exhibits and shops,
            and has a restaurant. The Crown Colony Club is a restaurant and night
            club. Set in a landscaped garden dominated by three Chinese junks,
            it may be entered either from the pavilion or through the stern of
            one of the trio of junks.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "MARKET STREET.",
            body: (
              <>
                The first floor of the Hong Kong building suggests a busy, modern
                street in the colony. On both sides sit little shops and stalls
                where jade and ivory pieces are carved to order, measurements are
                taken for custom clothing and a wide variety of other merchandise
                is sold.
              </>
            ),
          },
          {
            label: "THE CLUB ON DISPLAY.",
            body: (
              <>
                The entrance to the Crown Colony Club, flanked by tiny sampans and
                the huge junks with their multicolored sails, has the distinctive
                appearance of a Hong Kong dockside. On display in the club are
                antique furniture, richly colored rugs and a number of art
                objects.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                Light lunches may be purchased at an outdoor cafe&apos;, or entire
                meals in the two restaurants. In the restaurants, Chinese
                waitresses bring trays of dishes to the tables; diners choose
                from hundreds of entrees, including Cantonese squab, duckling
                stuffed with shark fin, and shrimp and beef in lily leaves. At
                the Colony Club, Chinese opera singers, acrobats and other groups
                perform during the evening.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/honkon01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/honkon01/hong-kong-logo-1965.gif",
          width: 152,
          height: 93,
          alt: "",
        },
        name: "HONG KONG",
        nameFace: "arial",
        summary: (
          <>
            The bustling East-meets-West air of the British crown colony is
            recreated in restaurants and shops.
          </>
        ),
        copy: (
          <>
            The pavilion, with its upturned eaves, intense colors and intricate
            carvings, contains special Oriental exhibits and shops.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "MARKET STREET",
            labelFace: "arial",
            body: (
              <>
                . The pavilion&apos;s first floor suggests a busy Hong Kong
                bazaar. For sale are teak and rosewood furniture, hand-carved
                objects of jade and ivory, silks and brocades. Measurements are
                taken for custom-made clothing.
              </>
            ),
          },
          {
            label: "RESTAURANTS",
            labelFace: "arial",
            body: (
              <>
                .The Birdcage Garden at the rear of the pavilion offers Chinese
                appetizers and light lunches. The Cathay Restaurant serves
                moderately priced Oriental and American dishes; the Restaurant
                of the Hungry Dragons serves international cuisine in a garden.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/honkon01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/honkon01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/honkonmap",
      }}
    />
  );
}
