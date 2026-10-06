import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Christian Science — nywf64.com",
  description:
    "Christian Science pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy chrsci01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /chrscimap (International Area).
 */
export default function Chrsci01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Christian Science"
      titleId="chrsci01-title"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrscioverview"
      nextHref="/chrsci02"
      guide1964={{
        cover: {
          src: "/images/chrsci01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chrsci01/logo1964.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: "CHRISTIAN SCIENCE",
        copy: (
          <>
            Topped by a heptagonal pyramid of glass, the main building of the
            pavilion offers colorful and graphic three-dimensional exhibits that
            explain Christian Science. The structure, surrounded by 14 lighted
            fountains, is shaped like a seven-pointed star and rises from a pool
            of water 100 feet in diameter. A photographic display in the first
            point of the star sets a thoughtful mood that is carried out in other
            exhibits, which range from explanations in the Bible regarding God
            and man to the relevance of religion in the nuclear age. In one
            section, visitors can listen to verified accounts of healings through
            Christian Science told by the people who had the experiences. Near
            the main building is a second, smaller building, which houses a
            reading room accommodating 25 people; behind both structures is a
            park with chairs for relaxation and contemplation. Visitors to the
            pavilion can get on-the-spot world news reports, supplied by
            correspondents of the <em>Christian Science Monitor</em>, by pressing
            a button.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/chrsci01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chrsci01/logo1965.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: "CHRISTIAN SCIENCE",
        nameFace: "arial",
        summary: (
          <>
            Graphic exhibits explain the religion&apos;s teachings; there is also
            a reading room and park.
          </>
        ),
        copy: (
          <>
            The structure, surrounded by illuminated fountains, is shaped like a
            seven-pointed star.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE RELIGION.",
            body: (
              <>
                A film on the nature of God sets a thoughtful mood that is
                carried out in other exhibits. In one section visitors can listen
                to verified accounts of healing though Christian Science.
              </>
            ),
          },
          {
            label: "THE NEWS.",
            body: (
              <>
                On-the-spot news reports from correspondents of{" "}
                <em>The Christian Science Monitor</em> are available. A smaller
                building nearby houses a reading room.
              </>
            ),
          },
          {
            label: "THE PARK.",
            body: (
              <>
                Behind both buildings is a small grassy area with chairs for
                relaxation and contemplation.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/chrsci01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/chrsci01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/chrscimap",
      }}
    />
  );
}
