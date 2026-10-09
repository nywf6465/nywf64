import type { Metadata } from "next";
import { RusortNavChrome } from "@/components/RusortNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Russian Orthodox Greek-Catholic Church of America — nywf64.com",
  description:
    "Russian Orthodox Greek-Catholic Church of America pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Russian Orthodox guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy rusort01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Rusort01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Russian Orthodox Greek-Catholic Church of America"
      titleId="rusort01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/rusortoverview/hero-banner.jpg",
        alt: "Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<RusortNavChrome />}
      previousHref="/rusortoverview"
      nextHref="/rusort02"
      guide1964={{
        cover: {
          src: "/images/rusort01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/rusort01/logo-1964.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: (
          <>
            RUSSIAN ORTHODOX
            <br />
            GREEK-CATHOLIC
            <br />
            CHURCH OF AMERICA
          </>
        ),
        copy: (
          <>
            This pavilion is a replica of the historic Russian Orthodox chapel
            built at Fort Ross, California, in 1823, at a time when the Czar was
            claiming part of the West Coast as Russian territory (Rossiya, the
            original name, means &quot;Russia&quot;). Inside the simple wooden
            chapel is the main exhibit: an icon whose gold covering is encrusted
            with jewels. It is one of a type modeled after the famous 16th
            Century icon of <i>Our Lady of Kazan</i>, whose miraculous powers
            were recognized by the Church. Other religious objects complete the
            exhibit. A kiosk sells reproductions of the icon.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/rusort01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/rusort01/logo-1965.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: (
          <>
            RUSSIAN ORTHODOX
            <br />
            GREEK-CATHOLIC
            <br />
            CHURCH OF AMERICA
          </>
        ),
        summary: (
          <>
            A valuable jeweled icon is shown in a replica of a Russian chapel
            built in California in 1823.
          </>
        ),
        copy: (
          <>
            The historic chapel was erected at Fort Ross at a time when Russia
            claimed a part of America&apos;s west coast. The icon is revered as
            an authentic replica of the famous 16th Century icon of{" "}
            <i>Our Lady of Kazan</i>, believed to have miraculous powers.
            Reproductions of it are on sale.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/rusort01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/rusort01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/rusortmap",
      }}
    />
  );
}
