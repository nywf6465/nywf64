import type { Metadata } from "next";
import { JaycopNavChrome } from "@/components/JaycopNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Jaycopter Ride — nywf64.com",
  description:
    "Jaycopter Ride entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jaycopter Ride guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy jaycop01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy wording preserved (Jacopters Ltd., Would-be-pilots, admission punctuation).
 */
export default function Jaycop01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Jaycopter Ride"
      titleId="jaycop01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/jaycopoverview/hero-banner.jpg",
        alt: "Jaycopter Ride at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JaycopNavChrome />}
      previousHref="/jaycopoverview"
      nextHref="/jaycop02"
      guide1964={{
        cover: {
          src: "/images/jaycop01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/jaycop01/jaycoplogo64.gif",
          width: 96,
          height: 144,
          alt: "",
        },
        name: "JAYCOPTER RIDE",
        copy: (
          <>
            The sensations of a real helicopter flight are simulated in this
            high-flying machine, attached by a long boom to a tall tower. The
            pilot spins, drops, hovers and reverses flight at the request of his
            16 passengers. First developed by Jacopters Ltd. to train helicopter
            pilots, this electric-powered cab has a ceiling of 100 feet and a
            circular flight path 125 feet in diameter. For those who want to try
            their own hand at piloting, there are 22 small models that carry no
            passengers, operated on the ground by controls like those in the real
            machine.
          </>
        ),
        admission: "Admission: $1.00 for ride; 25 cents to operate small models.",
      }}
      guide1965={{
        cover: {
          src: "/images/jaycop01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/jaycop01/jaycoplogo.gif",
          width: 96,
          height: 144,
          alt: "",
        },
        name: "JAYCOPTER RIDE",
        copy: (
          <>
            This electrically powered device, developed to train pilots, is
            attached to a tower and takes 16 passengers up to 100 feet.
            Would-be-pilots can try their hand at 23 small models with controls
            just like those in the real machine.
          </>
        ),
        admission:
          "Admission: $1.00 for ride: 25 cents to operate small models. Hours: 10 a.m. to 10 p.m. or later.",
      }}
      map={{
        cover: {
          src: "/images/jaycop01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/jaycop01/locate-it.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/jaycopmap",
      }}
    />
  );
}
