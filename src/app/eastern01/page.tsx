import type { Metadata } from "next";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import guidebookStyles from "@/styles/guidebookSouvenirPage.module.css";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastern Air Lines guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy eastern01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 * 1964 admission mark is the inline size="+1" asterisk and italic period.
 * No large area-map detail under the souvenir-map column.
 */
export default function Eastern01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Eastern Air Lines"
      titleId="eastern01-title"
      hero={{
        src: "/images/easternoverview/hero-banner.jpg",
        alt: "Eastern Air Lines at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<EasternNavChrome />}
      previousHref="/easternoverview"
      nextHref="/eastern02"
      guide1964={{
        cover: {
          src: "/images/eastern01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/eastern01/easairlogo64.gif",
          width: 144,
          height: 107,
          alt: "",
        },
        name: "EASTERN AIR LINES",
        copy: (
          <>
            The building is primarily a terminal for the shuttle-bus service
            which Eastern operates on an hourly schedule for its passengers to
            and from LaGuardia and Kennedy airports.  The pavilion has a ticket
            counter, lounge and baggage-checking facilities.{" "}
            <strong className={guidebookStyles.admissionStar}>* </strong>
            <em>.</em>
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/eastern01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/eastern01/easairlogo.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "EASTERN AIRLINES",
        nameFace: "arial",
        summary: (
          <>The building is a terminal for buses to local airports.</>
        ),
        copy: (
          <>
            Eastern Air Lines passengers traveling between the Fair and Kennedy
            or LaGuardia Airports will find lounge and checking facilities.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/eastern01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/eastern01/trasmlmap.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/easternmap",
      }}
    />
  );
}
