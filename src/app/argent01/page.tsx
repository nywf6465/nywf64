import type { Metadata } from "next";
import Link from "next/link";
import { ArgentNavChrome } from "@/components/ArgentNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Argentina — nywf64.com",
  description:
    "Argentina pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Argentina guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy argent01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964/1965 columns: status notes (Pavilion of Fine Art / Bargreen Buffet).
 * Pavilion entry sits under the Souvenir Map column.
 */
export default function Argent01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Argentina"
      titleId="argent01-title"
      hero={{
        src: "/images/argentoverview/hero-banner.jpg",
        alt: "Argentina at the 1964/1965 New York World’s Fair",
        width: 1907,
        height: 825,
      }}
      nav={<ArgentNavChrome />}
      previousHref="/argentoverview"
      nextHref="/argent02"
      guide1964={{
        cover: {
          src: "/images/argent01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            In 1964 this building was the{" "}
            <Link href="/finart01">Pavilion of Fine Art</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/argent01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            In 1965 this building was the{" "}
            <Link href="/barbuf01">Bargreen Buffet</Link>.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/argent01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/argent01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/argentmap",
        entry: {
          logo: {
            src: "/images/argent01/argentina-logo.gif",
            width: 144,
            height: 70,
            alt: "",
          },
          name: "ARGENTINA",
          copy: (
            <>
              Ground was broken, the pavilion constructed but never occupied by
              Argentina. The Argentine pavilion housed a display of{" "}
              <Link href="/finart01">Fine Art</Link> sponsored by the Long
              Island Art Center in 1964. The pavilion was leased by the Bargreen
              organization who operated a cafeteria-style restaurant in the
              building called <Link href="/barbuf01">Bargreen Buffet</Link>{" "}
              during the 1965 Season.
            </>
          ),
        },
      }}
    />
  );
}
