import type { Metadata } from "next";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Boy Scouts of America — nywf64.com",
  description:
    "Boy Scouts of America entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy boysco01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /boyscomap (Industrial Area).
 */
export default function Boysco01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Boy Scouts of America"
      titleId="boysco01-title"
      hero={{
        src: "/images/boyscooverview/hero-banner.jpg",
        alt: "Boy Scouts of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BoyscoNavChrome />}
      nextHref="/boysco02"
      guide1964={{
        cover: {
          src: "/images/boysco01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/boysco01/logo-1964.gif",
          width: 144,
          height: 82,
          alt: "",
        },
        name: (
          <>
            BOY SCOUTS
            <br />
            OF AMERICA
          </>
        ),
        copy: (
          <>
            The Scout Service Corps. composed of a different group of 130 boys
            and 13 leaders each week, demonstrates scouting skills in an
            open-air pavilion. In canopied booths, Scouts and Explorers put on
            exhibitions of knot-tying, map and compass reading and fire-making -
            and invite onlookers to try their hand. Within a 300-seat Council
            Ring, visiting scout units join the Service Corps in various special
            shows developing the pavilion&apos;s theme, &quot;The Wonderful World
            of Scouting.&quot; Programs include seamanship, signaling and
            rope-spinning. Members of the service Corps, wearing distinctive red
            jackets and Unisphere armbands, are also stationed about the
            fairgrounds. They form honor guards for distinguished dignitaries and
            take part in other Fair ceremonies.
            <br />
            <br />
            <strong>
              <em>&para; </em>
            </strong>
            <em>Service Corps&apos; hometowns</em> are listed at the pavilion for
            visitors who wish to know if any boys from their area are on duty.
            From late May through September, the boys come from 32 states; during
            the other weeks they represent troops in the New York area.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/boysco01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/boysco01/logo-1965.gif",
          width: 144,
          height: 82,
          alt: "",
        },
        name: (
          <>
            BOY SCOUTS
            <br />
            OF AMERICA
          </>
        ),
        summary: (
          <>
            Scouts from around the U.S. display such skills as knot-tying,
            fire-making and lifesaving.
          </>
        ),
        copy: (
          <>
            Each week, Service Corps Scouts from different parts of the country
            are on duty. In a 300-seat Council Ring they hold programs of tower
            and bridge building, signaling and nightly campfires. There is also
            an Indian village with tepees, and a pool for showing of aquatic
            skills.
          </>
        ),
        highlights: [
          {
            label: "GOOD DEEDS.",
            body: (
              <>
                Scouts around the fairgrounds assist the handicapped, help
                visitors and distribute special Braille guidebooks for the blind.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/boysco01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/boysco01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/boyscomap",
      }}
    />
  );
}
