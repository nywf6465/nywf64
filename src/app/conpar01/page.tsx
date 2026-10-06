import type { Metadata } from "next";
import Link from "next/link";
import { ConparNavChrome } from "@/components/ConparNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Continental Park — nywf64.com",
  description:
    "Continental Park entries from the 1965 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Park guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy conpar01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: season note — site was Continental Circus. Locate It → /conparmap (Amusement).
 * Legacy wording ($100, groilla compund) preserved.
 */
export default function Conpar01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Continental Park"
      titleId="conpar01-title"
      hero={{
        src: "/images/conparoverview/hero-banner.jpg",
        alt: "Continental Park at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConparNavChrome />}
      previousHref="/conparoverview"
      nextHref="/conpar02"
      guide1964={{
        cover: {
          src: "/images/conpar01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            Continental Park was open for the 1965 Season. In 1964 this was the{" "}
            <Link href="/concir01">Continental Circus</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/conpar01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/conpar01/conparlogo.gif",
          width: 144,
          height: 102,
          alt: "",
        },
        name: "CONTINENTAL PARK",
        summary: (
          <>
            The area includes rides, a children&apos;s zoo, a gorilla compound
            and picnic facilities.
          </>
        ),
        copy: (
          <>
            Fairgoers may take their pick of five amusement-park rides and race
            small gasoline-driven &quot;go-karts&quot; around a 300-foot track.
            In a zoo tent, children may feed tame animals. Nearby, Gargantua II
            and M&apos;Toto, said to be the oldest and largest gorillas in
            captivity, are on view in a &quot;jungle compound.&quot;
          </>
        ),
        admission:
          "Admission: rides, 35 cents each or three for $100; go-karts, 50 cents a ride; zoo tent, 25 cents; groilla compund, 25 cents. Hours: 10 a.m. to 10 p.m or later.",
      }}
      map={{
        cover: {
          src: "/images/conpar01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/conpar01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/conparmap",
      }}
    />
  );
}
