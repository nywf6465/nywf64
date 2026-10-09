import type { Metadata } from "next";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Schaefer — nywf64.com",
  description:
    "Schaefer Center pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy schcen01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Schcen01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Schaefer"
      titleId="schcen01-title"
      hero={{
        src: "/images/schcenoverview/hero-banner.jpg",
        alt: "Schaefer Center at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SchcenNavChrome />}
      previousHref="/schcenoverview"
      nextHref="/schcen02"
      guide1964={{
        cover: {
          src: "/images/schcen01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/schcen01/logo-1964.gif",
          width: 144,
          height: 100,
          alt: "",
        },
        name: "SCHAEFER",
        copy: (
          <>
            This restaurant and exhibit area is roofed with air-filled plastic
            disks that look like huge pillows. There is a model of the original
            Schaefer brewery, located at 19th Street and Broadway in 1842, which
            shows how beer was made a century ago. A gallery of outstanding
            sports photographs is on display. The restaurant, offering luncheons
            and dinners, is in a large wing that adjoins the exhibit building. In
            the center of the restaurant stands an illuminated fountain 12 feet
            tall; nearby are ornamental trees that appear to be filled with
            twinkling fire-flies. Outside are a beer garden for 300 and a curved
            bar which the exhibitor claim to be the largest in the world.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/schcen01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/schcen01/logo-1965.gif",
          width: 144,
          height: 100,
          alt: "",
        },
        name: "SCHAEFER CENTER",
        summary: (
          <>
            A restaurant, bar and beer garden offer food and drink in a sporting
            atmosphere; a model of an old brewery is on view.
          </>
        ),
        copy: (
          <>
            Under one of two air-filled plastic roofs is the circular restaurant.
            Under the other, an exhibit area displays a model of the original
            Schaefer brewery showing how beer was made over a century ago.
            Outside is a 100-foot curved bar and beer garden seating 300. Sports
            photographs are on view; on weekends sports celebrities welcome
            visitors.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/schcen01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/schcen01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/schcenmap",
      }}
    />
  );
}
