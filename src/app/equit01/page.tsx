import type { Metadata } from "next";
import { EquitNavChrome } from "@/components/EquitNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Equitable Life — nywf64.com",
  description:
    "Equitable Life Assurance Society entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAVILION_NAME = (
  <>
    EQUITABLE LIFE
    <br />
    ASSURANCE
  </>
);

/**
 * Equitable Life guidebook page.
 * Body from legacy equit01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Preserve “Untied States”. Locate It → /equitmap.
 */
export default function Equit01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit01-title"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equitoverview"
      nextHref="/equit02"
      guide1964={{
        cover: {
          src: "/images/equit01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/equit01/equitlogo64.gif",
          width: 147,
          height: 76,
          alt: "",
        },
        name: PAVILION_NAME,
        copy: (
          <>
            The story of the nation&apos;s and the world&apos;s phenomenal
            population growth and changes is depicted in several imposing
            exhibits. Beneath a giant tabulator which keeps an up-to-the-minute
            tally of the nation&apos;s total population, lights flash on a
            45-foot-wide map - the Demograph - to indicate births and deaths as
            they occur in each state. World population distribution and totals
            are shown on another map and counter. These displays are housed in
            an open concrete pavilion. A two-way grandstand offers a view of the
            exhibits on one side; the other side faces the Pool of Industry with
            its fountains and nightly displays of fireworks.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "OUR CHANGING POPULATION.",
            body: (
              <>
                The Demograph is studded with electronically controlled lights
                that indicate not only births and deaths but also age and sex
                distributions, the trend toward metropolitan areas, and rates of
                future growth in the Untied States. Hanging above the map is the
                giant counter, which dramatizes the growth of the total U.S.
                population at the rate of one person every 11 seconds - by
                displaying the current figure in numbers more than six feet
                high.
              </>
            ),
          },
          {
            label: "THE WORLD EXPLOSION.",
            body: (
              <>
                Constantly rising totals on the world counter reflect the
                phenomenal speed at which the earth&apos;s population of more
                than three billion is increasing (at a rate of about two persons
                a second). An accompanying map shows the distribution of the
                world population.
              </>
            ),
          },
          {
            label: "INTERPRETING THE FIGURES.",
            body: (
              <>
                A narrator explains the significance of population growth and
                distribution in the coming years. Phones installed along the
                sides of the pavilion provide facts about the population of the
                United States in specific areas. Earphones near the map of the
                world furnish similar information on a global scale in a variety
                of foreign languages.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/equit01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/equit01/equitlogo.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: PAVILION_NAME,
        nameFace: "arial",
        summary: (
          <>
            A huge tabulator flashes the exact U.S. population every 12 seconds;
            displays chart population trends around the world.
          </>
        ),
        copy: (
          <>
            The Demograph counter, a 44-foot long scoreboard with electric
            numerals six feet high, keeps an up-to-the-minute tally of the
            number of people in the nation. Multi-colored lights on a large map
            indicate births and deaths by state.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "POPULATION EXPLOSION.",
            body: (
              <>
                Other displays keep up with age and sex distribution, mobility
                patterns and predictions of growth in each of the 50 states.
                World population totals are shown on a separate map and counter
                connected to multilingual telephones.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/equit01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/equit01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/equitmap",
      }}
    />
  );
}
