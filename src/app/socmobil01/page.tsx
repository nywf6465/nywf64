import type { Metadata } from "next";
import { SocmobilNavChrome } from "@/components/SocmobilNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Socony Mobil — nywf64.com",
  description:
    "Socony Mobil pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Socony Mobil guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy socmobil01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Socmobil01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Socony Mobil"
      titleId="socmobil01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/socmobiloverview/hero-banner.jpg",
        alt: "Socony Mobil pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SocmobilNavChrome />}
      previousHref="/socmobiloverview"
      nextHref="/socmobil02"
      guide1964={{
        cover: {
          src: "/images/socmobil01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/socmobil01/logo64.gif",
          width: 144,
          height: 52,
          alt: "",
        },
        name: "SOCONY MOBIL",
        copy: (
          <>
            This exhibit, located in a low, red-roofed pavilion, is devoted to a
            game. On a large map of the United States is marked the route of the
            most recent Mobil Economy Run - a grueling cross-country test in
            which experts try to get the most efficient gasoline consumption out
            of new cars. Contestants seated at automobile controls &quot;drive&quot;
            this route, attempting to hold down fuel consumption.
          </>
        ),
        admission: ["Admission: free."],
        highlights: [
          {
            label: "TEST FOR GOOD DRIVERS.",
            body: (
              <>
                Eighteen players compete in each game (two games go on
                simultaneously). They &quot;drive&quot; from the Pacific to the
                Atlantic Coast, compensating for the road conditions they see
                flashed on closed-circuit television screens in front of them. As
                each driver steers, brakes and accelerates, an electronic device
                keeps a running total of the amount of gasoline he would be
                burning if he were driving a real car. At the end of the ride,
                the driver with the best miles-per-gallon record of the 18
                entrants receives a certificate.
              </>
            ),
          },
          {
            label: "THE LESSON RAMPS.",
            body: (
              <>
                From wide ramps, spectators can watch the game in progress.
                Guides offer contestants and observers rules for economical and
                safe motoring that are based on the company&apos;s
                &quot;Think-Ahead Driving Program.&quot;
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/socmobil01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/socmobil01/logo65.gif",
          width: 144,
          height: 56,
          alt: "",
        },
        name: "SOCONY MOBIL",
        copy: (
          <>
            Visitors take part in a simulated cross-country driving game that
            tests their skills at the wheel. Contestants, seated at auto controls
            in front of a map, &quot;travel&quot; the route of the famous Mobil
            Economy Runs, a grueling test in which driving experts try to hold
            down fuel consumption.
          </>
        ),
        highlights: [
          {
            label: "DRIVING TEST.",
            body: (
              <>
                Eighteen players compete in each game. They &quot;drive&quot;
                across America, compensating for the road conditions they see
                flashed on a TV screen. An electronic device records the amount
                of gasoline that would be consumed under actual conditions. The
                driver using the least fuel receives a certificate. From wide
                ramps, spectators can watch the games in progress.
              </>
            ),
          },
        ],
        admission: ["Admission: free."],
      }}
      map={{
        cover: {
          src: "/images/socmobil01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/socmobil01/transportation-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/socmobilmap",
      }}
    />
  );
}
