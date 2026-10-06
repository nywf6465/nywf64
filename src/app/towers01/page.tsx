import type { Metadata } from "next";
import { TowersNavChrome } from "@/components/TowersNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Entrance Towers — nywf64.com",
  description:
    "Entrance Towers entries from the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Towers guidebook page.
 * Body from legacy towers01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964 & 1965 omitted from Official Guide Books; ENTRANCE TOWERS entry under
 * the map column. Four Locate It links (Industrial, Federal/State,
 * Transportation, Amusement) arranged like /brarai01 (`map.locates`).
 */
export default function Towers01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Entrance Towers"
      titleId="towers01-title"
      hero={{
        src: "/images/towersoverview/hero-banner.jpg",
        alt: "Entrance Towers at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<TowersNavChrome />}
      previousHref="/towersoverview"
      nextHref="/towers02"
      guide1964={{
        cover: {
          src: "/images/towers01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of these features was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/towers01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of these features was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/towers01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        subjectDeterminer: "these",
        subjectNoun: "features",
        locates: [
          {
            areaMap: {
              src: "/images/towers01/industrial-map.gif",
              width: 60,
              height: 54,
              alt: "Industrial area map",
            },
            locateHref: "/towersindmap",
          },
          {
            areaMap: {
              src: "/images/towers01/federal-state-map.gif",
              width: 60,
              height: 54,
              alt: "Federal and State area map",
            },
            locateHref: "/towersstamap",
          },
          {
            areaMap: {
              src: "/images/towers01/transportation-map.gif",
              width: 60,
              height: 54,
              alt: "Transportation area map",
            },
            locateHref: "/towerstramap",
          },
          {
            areaMap: {
              src: "/images/towers01/amusement-map.gif",
              width: 60,
              height: 54,
              alt: "Amusement area map",
            },
            locateHref: "/towersamumap",
          },
        ],
        entry: {
          logo: {
            src: "/images/towers01/towerslogo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: (
            <>
              ENTRANCE&nbsp;TOWERS
            </>
          ),
          copy: (
            <>
              The five entrance towers serve as landmarks to locate the
              entrances to the Fairgrounds. The reflections of light from one
              structural panel to another make them look translucent and
              weightless.
            </>
          ),
        },
      }}
    />
  );
}
