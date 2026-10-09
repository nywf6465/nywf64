import type { Metadata } from "next";
import { ChukininnNavChrome } from "@/components/ChukininnNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Chukin Inn — nywf64.com",
  description:
    "Chun King Inn entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chukin Inn guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy chukininn01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /chukininnmap (Amusement Area).
 */
export default function Chukininn01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Chukin Inn"
      titleId="chukininn01-title"
      hero={{
        src: "/images/chukininnoverview/hero-banner.jpg",
        alt: "Chukin Inn at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<ChukininnNavChrome />}
      previousHref="/chukininnoverview"
      nextHref="/chukininn02"
      guide1964={{
        cover: {
          src: "/images/chukininn01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chukininn01/logo1964.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "CHUN KING INN",
        copy: (
          <>
            A pagoda-style restaurant and two connected teahouses are set in a
            restful lake-dotted Oriental garden that also has rickshaws parked
            about, primarily for the benefit of camera buffs. Operated by the
            Chun King Corporation, the complex can accommodate 600 diners indoor
            and outdoors. Two complete meals are served, each priced at 99 cents.
            One is a lunch or dinner with seven varieties of familiar Chinese
            foods, the other is a plate featuring a &quot;Hong Kong Burger,&quot;
            a double-decker hamburger with bean sprouts, cheese, lettuce and a
            special sauce. Both meals include beverage. Chun King foods are also
            on sale at the 25 Brass Rail stands which are situated throughout the
            fairgrounds.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/chukininn01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chukininn01/logo1965.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "CHUN KING INN",
        nameFace: "arial",
        summary: (
          <>
            A pagoda-style restaurant with a lake-dotted garden offers
            comfortable, inexpensive dining.
          </>
        ),
        copy: (
          <>
            Two buffet menus are offered, each at 99 cents including beverage. One
            is a lunch or dinner featuring seven varieties of Chinese foods. The
            other is a &quot;Hong Kong Burger,&quot; a double-decker hamburger
            with bean sprouts, cheese, lettuce and a special sauce.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/chukininn01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/chukininn01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/chukininnmap",
      }}
    />
  );
}
