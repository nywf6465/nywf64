import type { Metadata } from "next";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Clairol — nywf64.com",
  description:
    "Clairol Color Carousel entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy clair01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Locate It → /clairmap (Industrial Area).
 */
export default function Clair01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Clairol"
      titleId="clair01-title"
      hero={{
        src: "/images/clairoverview/hero-banner.jpg",
        alt: "Clairol Color Carousel at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ClairNavChrome />}
      previousHref="/clairoverview"
      nextHref="/clair02"
      guide1964={{
        cover: {
          src: "/images/clair01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/clair01/clairlogo64.gif",
          width: 144,
          height: 87,
          alt: "",
        },
        name: "CLAIROL",
        copy: (
          <>
            Women only are allowed in this exhibit: a round glass structure
            called the Clairol Color Carousel, which has 40 private booths on a
            slowly circling turntable. Special devices on the Carousel&apos;s
            steps show the ladies how they would look in various hair shades and
            styles. Each visitor fills out a card on which she tells the color of
            her hair and checks another color she would like to try. While she
            takes a six-minute ride in one of the compartments, a computer
            digests the information and, after the ride, produces a formula for
            achieving the color she wants.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/clair01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/clair01/clairlogo.gif",
          width: 144,
          height: 87,
          alt: "",
        },
        name: "CLAIROL",
        summary: (
          <>
            Ladies can see themselves in various hair colors, view a film on
            beauty and talk with experts.
          </>
        ),
        copy: (
          <>
            Designed for women only, the carousel encloses a revolving turntable,
            divided into 38 individual booths in which the film is shown.
            Elsewhere, ladies may peer into a mirrored device to see themselves
            in several different hair colors, and beauty consultants provide
            formulas for the colors desired.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/clair01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/clair01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial Area map",
        },
        locateHref: "/clairmap",
      }}
    />
  );
}
