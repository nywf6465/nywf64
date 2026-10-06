import type { Metadata } from "next";
import { LogfluNavChrome } from "@/components/LogfluNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Flume Ride — nywf64.com",
  description:
    "Flume Ride / Log Flume Ride entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Flume Ride guidebook page.
 * Body from legacy logflu01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Locate It → /logflumap. Adobe PageMill meta only (no body Adobe copy).
 */
export default function Logflu01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Flume Ride"
      titleId="logflu01-title"
      hero={{
        src: "/images/logfluoverview/hero-banner.jpg",
        alt: "Flume Ride at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<LogfluNavChrome />}
      previousHref="/logfluoverview"
      nextHref="/logflu02"
      guide1964={{
        cover: {
          src: "/images/logflu01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/logflu01/logflulogo64.gif",
          width: 144,
          height: 109,
          alt: "",
        },
        name: "FLUME RIDE",
        copy: (
          <>
            In a three-and-a-half-minute ride, five-passenger boats shaped like
            hollow logs are propelled by rushing water at 10 feet a second along
            a channel of steep inclines and sharp curves. The ride winds up with
            a breath-taking splash as the &quot;logs&quot; whisk down a 45&deg;
            slide into swirling rapids.
          </>
        ),
        admission: ["Admission: 95 cents.", "Hours: 10 a.m. to 2 a.m."],
      }}
      guide1965={{
        cover: {
          src: "/images/logflu01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/logflu01/logflulogo.gif",
          width: 144,
          height: 109,
          alt: "",
        },
        name: "LOG FLUME RIDE",
        nameFace: "arial",
        summary: (
          <>
            A trip on a water-borne roller coaster ends with a big splash into
            swirling rapids.
          </>
        ),
        copy: (
          <>
            Passengers take a three-and-a-half-minute ride in small, four-seat
            boats in the shape of hollowed-out logs. They are propelled at 10
            feet a second along a lively series of inclines and sharp curves,
            and finally shoot down a 45&deg; slide into a whirling, eddying
            pool.
          </>
        ),
        admission:
          "Admission: 75 cents; children, 50 cents. Hours: 10 a.m. to 2 a.m.",
      }}
      map={{
        cover: {
          src: "/images/logflu01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/logflu01/amusmlmap.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/logflumap",
      }}
    />
  );
}
