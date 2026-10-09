import type { Metadata } from "next";
import Link from "next/link";
import { FunlanNavChrome } from "@/components/FunlanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Funland — nywf64.com",
  description:
    "Funland entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Funland guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy funlan01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: attraction was called Kiddyland (link to /kidlan01). 1965: Funland entry.
 */
export default function Funlan01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Funland"
      titleId="funlan01-title"
      hero={{
        src: "/images/funlanoverview/hero-banner.jpg",
        alt: "Funland at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FunlanNavChrome />}
      previousHref="/funlanoverview"
      nextHref="/funlanoverview"
      guide1964={{
        cover: {
          src: "/images/funlan01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            In 1964 this attraction was called{" "}
            <Link href="/kidlan01">Kiddyland</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/funlan01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/funlan01/funlanlogo.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "FUNLAND",
        nameFace: "arial",
        summary:
          "Three exciting rides are offered for children and grownups.",
        copy: (
          <>
            The rides include &quot;Roto-Jet&quot;; its small cabins are swung
            high in the air on arms that revolve around a hub like the spokes of
            a wheel.
          </>
        ),
        admission:
          "Admission: 35 cents a ride; three for $1.00. Hours: 10 a.m. to 10 p.m. or later.",
      }}
      map={{
        cover: {
          src: "/images/funlan01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/funlan01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/funlanmap",
      }}
    />
  );
}
