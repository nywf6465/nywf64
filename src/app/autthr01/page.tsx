import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Auto Thrill Show — nywf64.com",
  description:
    "Auto Thrill Show entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy autthr01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 * Legacy typos in admission amounts and the 1965 lead sentence are preserved.
 */
export default function Autthr01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Auto Thrill Show"
      titleId="autthr01-title"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthroverview"
      nextHref="/autthr02"
      guide1964={{
        cover: {
          src: "/images/autthr01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/autthr01/autthr-logo-1964.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: "AUTO THRILL SHOW",
        copy: (
          <>
            Thirty &quot;Hell Drivers&quot; risk life, limb and vehicles,
            crashing cars and performing other stunts in a daring high-speed
            show. Among the features of the program are: four-car bumper tag,
            wing ski jumps (drivers careen off a low ramp on two wheels at 50
            miles an hour), a crash rollover contest, and the &quot;dive bomber
            crash&quot; (off the ramp with an old car onto the top of a parked
            car). In the show&apos;s climax, a driver pilots a truck on a
            dangerous ramp-to-ramp &quot;flight,&quot; hurtling more than 70 feet
            through the air. The 5,600-seat Auto Thrill Stadium has a banked
            figure-8 track, the first such track to be created exclusively for
            stunt driving.
          </>
        ),
        admission: [
          "Admission: box seats, $2.00; center seats, $150; general admission, $1.00.",
          "Performances: four shows daily on week-days, six on Saturdays, Sundays and holidays; the performance last about one hour.",
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/autthr01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/autthr01/autthr-logo-1965.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: "AUTO THRILL SHOW",
        nameFace: "arial",
        summary: (
          <>
            A&quot;Hell drivers&quot; risk life, limb and vehicles as they crash,
            roll and leap their cars in a high-speed show.
          </>
        ),
        copy: (
          <>
            Drivers put their cars through brutal trials, including four-car
            bumper tag and wing ski jumps (autos careen off a ramp on two wheels
            at 50 mph). In the show&apos;s climax, a driver pilots a truck up a
            ramp, then soars over a 70-foot gap to land safely on a second ramp.
          </>
        ),
        admission:
          "Admission: reserved seats, $2.00; center section, $1.50; general admission, $100. Performances: four shows daily; six on Saturdays, Sundays and holidays; show lasts 40 minutes.",
      }}
      map={{
        cover: {
          src: "/images/autthr01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/autthr01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/autthrmap",
      }}
    />
  );
}
