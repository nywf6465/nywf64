import type { Metadata } from "next";
import Link from "next/link";
import { BoustrNavChrome } from "@/components/BoustrNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Bourbon Street — nywf64.com",
  description:
    "Bourbon Street entries from the 1965 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bourbon Street guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy boustr01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: site was Louisiana pavilion. Locate It → /boustrmap (Federal/State Area).
 */
export default function Boustr01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Bourbon Street"
      titleId="boustr01-title"
      hero={{
        src: "/images/boustroverview/hero-banner.jpg",
        alt: "Bourbon Street at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<BoustrNavChrome />}
      previousHref="/boustroverview"
      nextHref="/boustr02"
      guide1964={{
        cover: {
          src: "/images/boustr01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            Bourbon Street was open for the 1965 Season. In 1964 this was the
            pavilion of <Link href="/louisia01">Louisiana</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/boustr01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/boustr01/boustr-logo.gif",
          width: 144,
          height: 94,
          alt: "",
        },
        name: "BOURBON STREET",
        summary: (
          <>
            A reconstruction of New Orleans&apos; famous street of fun features
            well-known jazz musicians, Creole food and sidewalk shops.
          </>
        ),
        copy: (
          <>
            A variety of restaurants, plus sidewalk artists, Mardi Gras parades
            and an organ grinder with a monkey, lends atmosphere to this street.
            Shops feature Louisiana products such as pralines and hand-blown
            glass. Nightclubs offer music and dancing as well as other kinds of
            entertainment, and the restaurants include a French Quarter sidewalk
            cafe&apos;.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/boustr01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/boustr01/federal-state-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/boustrmap",
      }}
    />
  );
}
