import type { Metadata } from "next";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy simmon01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Simmon01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Simmons"
      titleId="simmon01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/simmonoverview/hero-banner.jpg",
        alt: "Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SimmonNavChrome />}
      previousHref="/simmonoverview"
      nextHref="/simmon02"
      guide1964={{
        cover: {
          src: "/images/simmon01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/simmon01/logo64.gif",
          width: 144,
          height: 93,
          alt: "",
        },
        name: "SIMMONS",
        copy: (
          <>
            On the first floor of the blue and white Beautyrest pavilion, five
            whimsical displays follow man&apos;s progress from rock pillow to
            comfortable mattress in his effort to get a good night&apos;s sleep.
            On the upper floors, visitors can lie down in small, private rest
            alcoves, rented by the half-hour.
          </>
        ),
        admission: ["Admission: free to the pavilion; rest alcoves, $1.00."],
        highlights: [
          {
            label: '"LAND OF ENCHANTMENT."',
            body: (
              <>
                In the exhibit area, the animated displays deal with various
                aspects of sleep: elves digging sand for the Sandman; the
                sleeping difficulties of William Shakespeare, George Washington,
                Napoleon and other historic figures.
              </>
            ),
          },
          {
            label: "AND SO TO BED.",
            body: (
              <>
                Uniformed attendants escort visitors to their rest alcoves, set
                a timer and rouse them gently if they sleep beyond the half-hour
                limit. Each alcove is carpeted and furnished with bed, shelf and
                full-length mirror; a blanket is provided. The beds may be
                adjusted electronically like hospital beds.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/simmon01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/simmon01/logo65.gif",
          width: 144,
          height: 93,
          alt: "",
        },
        name: "SIMMONS",
        copy: (
          <>
            Visitors can take half-hour naps in rest alcoves or view model rooms
            cleverly designed to provide extra sleeping space. Six model rooms,
            designed by <em>Better Homes and Gardens</em> magazine, show
            homemakers how to get maximum use out of a minimum amount of floor
            space.
          </>
        ),
        highlights: [
          {
            label: "AND SO TO BED.",
            body: (
              <>
                Attendants escort visitors upstairs to sleeping alcoves with
                adjustable beds, set a timer and gently wake them if they sleep
                beyond the half-hour period.
              </>
            ),
          },
        ],
        admission: [
          "Admission: free to the pavilion; rest alcoves, 50 cents a half hour.",
        ],
      }}
      map={{
        cover: {
          src: "/images/simmon01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/simmon01/industrial-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/simmonmap",
      }}
    />
  );
}
