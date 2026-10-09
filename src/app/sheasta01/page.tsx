import type { Metadata } from "next";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Shea Stadium — nywf64.com",
  description:
    "Shea Stadium entries from the 1964 and 1965 Official Guide Books — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Shea Stadium guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy sheasta01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy page has no souvenir-map column copy; map cover + transportation pin only.
 */
export default function Sheasta01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Shea Stadium"
      titleId="sheasta01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/sheastaoverview/hero-banner.jpg",
        alt: "Shea Stadium at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SheastaNavChrome />}
      previousHref="/sheastaoverview"
      nextHref="/sheasta02"
      guide1964={{
        cover: {
          src: "/images/sheasta01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sheasta01/logo-1964.gif",
          width: 144,
          height: 96,
          alt: "",
        },
        name: "SHEA STADIUM",
        copy: (
          <>
            Long after the Fair is gone, New York City&apos;s new Shea Stadium
            will remain as the ultimate in modern sports arenas. A five-minute
            walk from the Fair&apos;s main gate, it is the home of the New York
            Mets (baseball) and Jets (football). Between baseball games, it is
            used by the Fair for large special events. The stadium seats 55,000
            for baseball and 60,000 for football, and no columns obstruct the
            view from any seat. There are some 40 acres of parking space,
            available to fairgoers between sports events, plenty of snack stands
            and 57 restrooms.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/sheasta01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sheasta01/logo-1965.gif",
          width: 144,
          height: 96,
          alt: "",
        },
        name: "SHEA STADIUM",
        nameFace: "arial",
        summary: (
          <>
            This home of two teams -- the New York Mets (baseball) and Jets
            (football) -- is one of the most modern stadiums in the world.
          </>
        ),
        copy: (
          <>
            Long after the Fair has gone, the city&apos;s new Shea Stadium will
            remain as the latest word in comfort, convenience and design for
            sporting arenas. It seats 55,000 for baseball; for football, 10,000
            of these seats in two arc-shaped stands are moved on tracks to
            provide better sideline viewing, and 5,000 bleacher seats are set up
            at the arena&apos;s open end. During the season the Mets and Jets
            play all their home games at the Stadium. When the teams are away,
            special events such as college football games are sometimes
            presented.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/sheasta01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sheasta01/transportation-map.gif",
          width: 60,
          height: 54,
        },
      }}
    />
  );
}
