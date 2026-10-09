import type { Metadata } from "next";
import { DanwatNavChrome } from "@/components/DanwatNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Dancing Waters — nywf64.com",
  description:
    "Dancing Waters entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dancing Waters guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy danwat01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /danwatmap (Amusement Area).
 * Legacy wording (Fomations) preserved.
 */
export default function Danwat01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Dancing Waters"
      titleId="danwat01-title"
      hero={{
        src: "/images/danwatoverview/hero-banner.jpg",
        alt: "Dancing Waters at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<DanwatNavChrome />}
      previousHref="/danwatoverview"
      nextHref="/danwat02"
      guide1964={{
        cover: {
          src: "/images/danwat01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/danwat01/danwatlogo64.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "DANCING WATERS",
        copy: (
          <>
            Fomations of water tinted by a kaleidoscope of colored lights sway
            to dance rhythms in an unusual spectacle that has been successfully
            presented in a number of cities all over the world. Sitting at an
            organlike console that controls both the lights and the height and
            direction of more than 4,000 jets of water, an operator creates a
            variety of visual effects synchronized with the music while a
            &quot;butterfly&quot; dancing girl waves a pair of 20-foot wings.
            For this production, an inflated theater has been erected - a plastic
            bubble that seats 400 and is supported by air pressure maintained by
            blowers.
          </>
        ),
        admission: [
          "Admission: 50 cents till 6 p.m.; 75 cents evenings and holidays.",
          "Hours: 10 a.m. until midnight.",
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/danwat01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/danwat01/danwatlogo.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "DANCING WATERS",
        summary: (
          <>
            Colored lights, music and 4,000 moving jets of water are combined to
            create a variety of unusual effects.
          </>
        ),
        copy: (
          <>
            An operator at an organ-like console controls the lights and
            direction and height of the water jets. Patrons sit under a plastic
            bubble supported by air pressure.
          </>
        ),
        admission:
          "Admission: adults, 75 cents; children, 50 cents. Hours: 10 a.m. to midnight.",
      }}
      map={{
        cover: {
          src: "/images/danwat01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/danwat01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/danwatmap",
      }}
    />
  );
}
