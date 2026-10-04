import type { Metadata } from "next";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — American-Israel Pavilion — nywf64.com",
  description:
    "American-Israel Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American-Israel Pavilion guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy amerisr01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Amerisr01Page() {
  const name1964 = (
    <>
      AMERICAN-ISRAEL
      <br />
      PAVILION
    </>
  );

  return (
    <GuidebookSouvenirPage
      heroLabel="American-Israel Pavilion"
      titleId="amerisr01-title"
      hero={{
        src: "/images/amerisroverview/hero-banner.jpg",
        alt: "American-Israel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmerisrNavChrome />}
      previousHref="/amerisroverview"
      nextHref="/amerisr02"
      guide1964={{
        cover: {
          src: "/images/amerisr01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/amerisr01/amerisr-logo-1964.gif",
          width: 144,
          height: 87,
          alt: "",
        },
        name: name1964,
        copy: (
          <>
            This spiral-shaped building, with boulders hewn from King
            Solomon&apos;s Mine set at its entrance, curls around itself like a
            chambered nautilus in red mahogany. The winding walkway conducts the
            visitor through 4,000 years of Jewish history. Successive rooms
            re-create the sights and sounds of various epochs by means of music,
            artifacts and dioramas. Open shops, including a snack bar, line the
            low end of the spiral. The pavilion is sponsored by the
            American-Israel World&apos;s Fair Corporation.
          </>
        ),
        admission:
          "Admission: adults, 75 cents; children under 12, 25 cents; children under 6, free. Special group rates.",
        highlights: [
          {
            label: "REBIRTH OF A NATION.",
            body: (
              <>
                The 15-to-20 minute walking tour begins in a city of Biblical
                times. The visitor finds himself strolling down a narrow stone
                street; he sees women milling grain, scribes at work and the
                Temple of Solomon in the background. A second scene, called
                &quot;Dispersion,&quot; shows Jews scattered around the world,
                making their contributions at different periods to the cultures of
                Europe, Asia and Africa. A display of the Ten Commandments in
                various languages indicates the special impact of their moral
                traditions. The tour ends in the streets of Haifa of 1964.
                Displays contrast the new and the old; models of an ancient
                Mediterranean barge and a 20th Century Israeli ocean liner are
                side by side. Israel&apos;s scientific and social progress are
                also depicted.
              </>
            ),
          },
          {
            label: "SHOPPING MALL.",
            body: (
              <>
                Shops are staffed by young Israeli students. On sale are
                hand-wrought jewelry, ceremonial religious objects and
                hand-embroidered blouses.
              </>
            ),
          },
          {
            label: '"FALAFEL" AND FRANKFURTERS.',
            body: (
              <>
                The stand-up snack bar serves kosher foods and Israeli
                specialties such as <i>falafel</i>, a spicy vegetable patty eaten
                between slices of a soft, round bread.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/amerisr01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/amerisr01/amerisr-logo-1965.gif",
          width: 144,
          height: 87,
          alt: "",
        },
        name: "AMERICAN-ISRAEL PAVILION",
        nameFace: "arial",
        summary: (
          <>
            In this spiral-shaped building, the visitor walks through the sights
            and sounds of 4,000 years of Jewish history.
          </>
        ),
        copy: (
          <>
            Various aspects of the Holy Land and its people come to life in this
            privately sponsored pavilion. A shopping mall and snack bar lead to
            an open-air cafe.
          </>
        ),
        admission:
          "Admission: 25 to 75 cents for various exhibits and performances; children under 6, free.",
        highlights: [
          {
            label: "REBIRTH OF A NATION.",
            labelFace: "arial",
            body: (
              <>
                The 15-to-20-minute walking tour begins at a wall of stones hewn
                from King Solomon&apos;s mines and moves through the narrow
                streets of Biblical Jerusalem. On display are rare Bibles, some
                letters of Anne Frank and depictions of modern Israel&apos;s
                struggle for independence and its industry, science and social
                services.
              </>
            ),
          },
          {
            label: "CAFE ISRAEL.",
            labelFace: "arial",
            body: (
              <>
                Performers put on a lively show in a garden cafe&apos; and teach
                the <i>Hora</i>, Israel&apos;s national dance. A snack bar serves
                kosher sandwiches, Israeli beer and wine.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/amerisr01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/amerisr01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/amerisrmap",
      }}
    />
  );
}
