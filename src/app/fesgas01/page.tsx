import type { Metadata } from "next";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Festival of Gas — nywf64.com",
  description:
    "Festival of Gas entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAVILION_NAME = <>FESTIVAL OF GAS</>;

/**
 * Festival of Gas guidebook page.
 * Body from legacy fesgas01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Locate It → /fesgasmap.
 */
export default function Fesgas01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Festival of Gas"
      titleId="fesgas01-title"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgasoverview"
      nextHref="/fesgas02"
      guide1964={{
        cover: {
          src: "/images/fesgas01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/fesgas01/fesgaslogo64.gif",
          width: 144,
          height: 74,
          alt: "",
        },
        name: PAVILION_NAME,
        copy: (
          <>
            A puppet movie, a magic show, cooking demonstrations and product
            displays have been assembled by the gas industry in a pavilion of
            light, airy architecture in a pleasant garden. A white roof, raised
            high on two columns, shelters most of the area. Underneath, an
            arrangement of trees, shrubs, ponds and paths leads the flow of
            visitors to the exhibits and a restaurant.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "CAROUSEL PREVIEW.",
            body: (
              <>
                A giant carousel, 12 feet off the ground, slowly revolves within
                the exhibit area and permits riders to view the displays they
                are about to visit. A complete turn takes about five minutes.
              </>
            ),
          },
          {
            label: '"FUN HOUSE OF THE FUTURE."',
            body: (
              <>
                In three connecting buildings, the importance of gas is
                dramatized by tricks and surprise displays. During the
                10-and-1-half-minute tour, the narrator&apos;s voice eerily
                echoes in dark corridors, animated appliances pop out of the
                ceiling and color pictures are displayed in unexpected places on
                the walls.
              </>
            ),
          },
          {
            label: "PUPPETS ON FILM.",
            body: (
              <>
                A 15-minute movie presents the sometimes tender, sometimes
                slapstick adventures of a puppet named &quot;Truthful
                George.&quot;
              </>
            ),
          },
          {
            label: "APPLIANCE FERRIS WHEEL.",
            body: (
              <>
                The latest in stoves, refrigerators, laundry driers and other
                gas equipment intended for the home is displayed on a
                15-foot-high rotating wheel.
              </>
            ),
          },
          {
            label: '"THE MAGIC OF FOOD."',
            body: (
              <>
                Six to eight times a day, in a 150-seat amphitheater, a magician
                chef does startling tricks with food.
              </>
            ),
          },
          {
            label: "MACHINES AT WORK.",
            body: (
              <>
                The gas turbine, generators and coolers actually being used to
                heat, light and cool the pavilion are shown and explained in a
                landscaped area called the Garden of Giants.
              </>
            ),
          },
          {
            label: "FROM EARTH TO HOME.",
            body: (
              <>
                Diagrams show how gas is discovered, processed and brought to
                the consumer.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                &quot;Festival &apos;64 - the American Restaurant&quot; has
                walls of glass and cascading greenery, and features American
                regional dishes. Much of the food served in this restaurant is
                prepared right at the table.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/fesgas01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/fesgas01/fesgaslogo.gif",
          width: 144,
          height: 74,
          alt: "",
        },
        name: PAVILION_NAME,
        nameFace: "arial",
        summary: (
          <>
            The U.S. gas industry presents cooking demonstrations, a movie, and
            displays of industrial and domestic equipment.
          </>
        ),
        copy: (
          <>
            A huge white umbrella-roof on two columns shelters a restaurant and
            exhibit areas set amid landscaped gardens. A giant elevated carousel
            carries visitors on a tour of the World of Gas, from the gaslit
            streets of yesteryear to a futuristic City of Tomorrow.
          </>
        ),
        highlights: [
          {
            label: "HOUSE OF ENERGY.",
            body: (
              <>
                This exhibit explains how gas helps to heat, cool and cook at
                the Fair; ultramodern kitchen equipment is on display. A turbine
                is in operation in the Gas Energy Center.
              </>
            ),
          },
          {
            label: "THEATER OF FOOD.",
            body: (
              <>
                Cooking shows are given in a theater; a movie tells how gas gets
                to the home.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                The Festival &apos;65 Restaurant offers regional American
                dishes, many prepared at the table.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/fesgas01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/fesgas01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/fesgasmap",
      }}
    />
  );
}
