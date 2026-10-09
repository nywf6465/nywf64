import type { Metadata } from "next";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Singer Bowl — nywf64.com",
  description:
    "Singer Bowl entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy singer01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Singer01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Singer Bowl"
      titleId="singer01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/singeroverview/hero-banner.jpg",
        alt: "Singer Bowl at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SingerNavChrome />}
      previousHref="/singeroverview"
      nextHref="/singer02"
      guide1964={{
        cover: {
          src: "/images/singer01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/singer01/logo64.gif",
          width: 144,
          height: 63,
          alt: "",
        },
        name: "SINGER BOWL",
        copy: (
          <>
            This open-air stadium, which hold 15,000, is scheduled for a variety
            of events - U.S. Olympic trials, folk festivals, Judo and Karate
            exhibitions, and so on. It is paved in green macadam, has lights for
            night use, a movable stage 60 feet long and dressing room facilities
            for 200 performers. The Singer company has a series of displays under
            the grandstand: the latest in fashions and fabrics, do-it-yourself
            sewing projects an a representation of Singer products - not only
            sewing machines, but typewriters, vacuum cleaners and computing
            devices.
          </>
        ),
        admission: ["Admission: free."],
      }}
      guide1965={{
        cover: {
          src: "/images/singer01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/singer01/logo65.gif",
          width: 144,
          height: 63,
          alt: "",
        },
        name: "SINGER BOWL",
        copy: (
          <>
            Music festivals, sports events and variety shows are held in this
            open-air stadium seating 15,000. Under the grandstand, the Singer
            Company exhibits the latest in fashions and do-it-yourself sewing
            projects. Sewing machines, typewriters, vacuum cleaners, TV sets,
            phonographs, computing devices and other products are on display.
          </>
        ),
        admission: ["Admission: free."],
      }}
      map={{
        cover: {
          src: "/images/singer01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/singer01/industrial-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/singermap",
      }}
    />
  );
}
