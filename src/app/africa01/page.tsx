import type { Metadata } from "next";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Africa — nywf64.com",
  description:
    "Africa pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Africa guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy africa01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Africa01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Africa"
      titleId="africa01-title"
      hero={{
        src: "/images/africaoverview/hero-banner.jpg",
        alt: "Africa pavilion at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AfricaNavChrome />}
      nextHref="/africa02"
      guide1964={{
        cover: {
          src: "/images/africa01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/africa01/africa-logo-1964.gif",
          width: 144,
          height: 91,
          alt: "",
        },
        name: "AFRICAN PAVILION",
        copy: (
          <>
            A village of round huts representing 24 nations of sub-Saharan Africa
            stands on a broad platform erected on stilts above water. A giant
            model of a banyan tree towers above the platform. Built into the
            branches of the tree are small huts that make up the pavilion&apos;s
            restaurant. Within the privately sponsored village are caged wild
            animals, an entertainment area where tribal groups demonstrate their
            skills and - a less primitive touch - a movie theater. The huts,
            ancient in design but fashioned of plastics and wood to suggest
            Africa&apos;s modern outlook, display museum collections of folk art
            and offer for sale African products that range from five-cent
            postcards to $500 diamonds. In the restaurant, amid weapons, masks
            and caged birds, waiters in tribal attire serve African dishes
            modified for the American palate.
          </>
        ),
        admission: "Admission: adults, $1.00; children, 50 cents.",
        highlights: [
          {
            label: "LIONS AT THE GATE.",
            body: (
              <>
                Inside the pavilion&apos;s main gate, cages of lions, leopards
                and other animals line the path to the movie theater. Around the
                theater, an exhibit area displays samples of Africa&apos;s
                natural resources, including copper, tin, rubber and diamonds.
              </>
            ),
          },
          {
            label: "AFRICA ON FILM.",
            body: (
              <>
                Near the theater entrance, photographs, flags and a huge map
                provide a brief introduction to the participating nations.
                Inside, a 10-minute film presents a geographical survey of
                Africa&apos;s scenic wonders and industrial developments.
              </>
            ),
          },
          {
            label: "ANTELOPES AND ARTIFACTS.",
            body: (
              <>
                Huts sheltering antelopes, monkeys, zebras, giraffes and exotic
                birds are interspersed among exhibit and sales huts which display
                works of art in gold, silver and ivory from each of the
                participating nations: Burundi, Cameroun, Central African
                Republic, Chad, Republic of Congo, Congo, Ivory Coast, Dahomey,
                Ethiopia, Gabon, Ghana, Kenya, Liberia, Mauritania, Niger,
                Nigeria, Uganda, Upper Volta, Malagasy Republic, Somalia, Rwanda,
                Senegal, Tanganyika, Togo.
              </>
            ),
          },
          {
            label: "DANCERS AND DRUMMERS.",
            body: (
              <>
                In the pavilion&apos;s open-air entertainment area, tall, graceful
                Watusi men from Rwanda perform spirited dances and demonstrate
                their prowess at high-jumping. Burundi drummers and West African
                dancers also perform.
              </>
            ),
          },
          {
            label: "THREE-HOUSE RESTAURANT.",
            body: (
              <>
                The multilevel rooms of the tree-house restaurant and bar are
                reached by a winding staircase that girdles the tree&apos;s
                massive trunk. The restaurant features special delicacies of a
                number of regions, including chicken, lamb and pork dishes
                garnished with a peanut sauce.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/africa01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/africa01/africa-logo-1965.gif",
          width: 144,
          height: 91,
          alt: "",
        },
        name: "AFRICAN PAVILION",
        summary: (
          <>
            A hut-village on stilts, representing 26 African nations, offers wild
            animals, tribal dancers and a tree-house restaurant.
          </>
        ),
        copy: (
          <>
            Above a platform supporting the village rises a giant banyan tree,
            whose branches hold the small huts of the pavilion&apos;s restaurant.
            Below are a movie theater, collections of folk art, and shops selling
            various African products.
          </>
        ),
        admission: "Admission: adults, $1.50; children, 50 cents.",
        highlights: [
          {
            label: "THE ANIMAL KINGDOM.",
            body: (
              <>
                Near the main gate are cages of African animals: gorillas, lions,
                leopards, giraffes, monkeys, baby elephants. In addition, huts
                sheltering exotic birds are interspersed among exhibit and sales
                areas.
              </>
            ),
          },
          {
            label: "A CONTINENT ON FILM.",
            body: (
              <>
                In the theater a 12-minute film surveys Africa&apos;s many scenic
                wonders and its recent industrial progress.
              </>
            ),
          },
          {
            label: "AFRICAN ARTIFACTS.",
            body: (
              <>
                Shops sell arts and crafts of each of the participating nations:
                Burundi, Cameroun, Central African Republic, Chad, Republic of
                Congo, Congo, Ivory Coast, Dahomey, Ethiopia, Gabon, Ghana,
                Kenya, Liberia, Malawi, Mauritania, Niger, Nigeria, Uganda, Upper
                Volta, Malagasy Republic, Somalia, Rwanda, Senegal, Zambia,
                Tanzania, Togo.
              </>
            ),
          },
          {
            label: "DANCERS AND DRUMMERS.",
            body: (
              <>
                Featured are high-jumping Watusi warriors seven feet tall, Zulu
                dancers and a Nigerian dance-and-drum troupe.
              </>
            ),
          },
          {
            label: "TREE-HOUSE RESTAURANT.",
            body: (
              <>
                Delicacies include chicken garnished with peanut sauce, beef
                curry, lobster and couscous. The bar features an exotic
                &quot;African Punch.&quot;
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/africa01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/africa01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/africamap",
      }}
    />
  );
}
