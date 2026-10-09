import type { Metadata } from "next";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Switzerland — nywf64.com",
  description:
    "Switzerland pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy switz01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Switz01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Switzerland"
      titleId="switz01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/switzoverview/hero-banner.jpg",
        alt: "Switzerland pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwitzNavChrome />}
      previousHref="/switzoverview"
      nextHref="/switz02"
      guide1964={{
        cover: {
          src: "/images/switz01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/switz01/logo1964.gif",
          width: 144,
          height: 86,
          alt: "",
        },
        name: "SWITZERLAND",
        copy: (
          <>
            In an exhibit area sponsored by the industries of Switzerland,
            displays of clocks, watches, chocolates and cheese are housed in
            building reminiscent of Alpine chalets. A tourist information center
            and a restaurant are part of the pavilion. Electronic equipment in
            the time Center controls 10 modern Swiss clock towers which provide
            accurate time at the Fair entrances.
          </>
        ),
        admission: [
          "Admission: free.",
          "Hours: Le Chalet Restaurant remains open until midnight to accommodate patrons of the adjacent Swiss Sky Ride.",
        ],
        highlights: [
          {
            label: "TIME TO THE SPLIT SECOND.",
            body: (
              <>
                The &quot;Time Center,&quot; near the entrance to the pavilion,
                is a concentrated display of the controls which regulate the
                official clocks of the Fair. At the front of the exhibit are the
                dials and indicators of a large &quot;Master Clock,&quot; so
                accurate that it can measure irregularities in the earth&apos;s
                rotation. This clock registers the year, day, hour, minute,
                second, 10th of a second and 100th of a second; visitors are
                invited to take pictures in front of the clock as a permanent
                time record of their visit. Smaller clocks at the Center show
                the correct time at various places around the world as well as
                solar, sidereal and other types of time.
              </>
            ),
          },
          {
            label: "GEMS OF THE WATCHMAKER'S ART.",
            body: (
              <>
                Three buildings house a two-million-dollar display of watches. In
                a daily drawing, a valuable Swiss watch is given away.
              </>
            ),
          },
          {
            label: "SHOPS AND TOURS.",
            body: (
              <>
                In a hall connecting the watchmakers&apos; exhibits and the
                restaurant, chocolates and cheese are for sale, and
                representative from various part of Switzerland give information
                to prospective tourists.
              </>
            ),
          },
          {
            label: "LE CHALET RESTAURANT.",
            body: (
              <>
                A dozen chefs and 60 waiters and waitresses in native costume
                prepare and serve the fondues, ramequins, raclette and other
                dishes that have made the Swiss cuisine famous. The country-inn
                restaurant has tables on the main floor, on the balcony and
                outside on the terrace. Six fine Swiss wines, never sold before
                in the United States, are also available.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/switz01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/switz01/logo1965.gif",
          width: 144,
          height: 86,
          alt: "",
        },
        name: "SWITZERLAND",
        summary: (
          <>
            In a cluster of Alpine chalets, Swiss industries display tourist
            attractions, watches, chocolates and cheese.
          </>
        ),
        admission: "Admission: free; restaurant open until midnight.",
        highlights: [
          {
            label: "TIME CENTER.",
            body: (
              <>
                On view is a master clock so accurate that it registers
                hundredths of seconds and can also measure irregularities in the
                earth&apos;s rotation. Smaller clocks show correct times around
                the world, as well as solar and sidereal time.
              </>
            ),
          },
          {
            label: "WATCHMAKERS' GEMS.",
            body: (
              <>
                Three buildings house a display of watches, including famous
                timepieces.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                Waiters in native costumes serve fondues, ramequins, raclette and
                other Swiss dishes and wines. Diners may eat on an outside
                balcony or a terrace.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/switz01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/switz01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/switzmap",
      }}
    />
  );
}
