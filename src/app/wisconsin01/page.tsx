import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Wisconsin — nywf64.com",
  description:
    "Wisconsin pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy wisconsin01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Wisconsin01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Wisconsin"
      titleId="wisconsin01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/wisconsinoverview/hero-banner.jpg",
        alt: "Wisconsin pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WisconsinNavChrome />}
      previousHref="/wisconsinoverview"
      nextHref="/wisconsin02"
      guide1964={{
        cover: {
          src: "/images/wisconsin01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wisconsin01/wilogo64.gif",
          width: 144,
          height: 71,
          alt: "",
        },
        name: "WISCONSIN",
        copy: (
          <>
            The Indian heritage of the Badger State provided the inspiration for
            the modern tepee that houses this exhibit. The displays tell the
            stories of Wisconsin&apos;s farms, industries and great outdoors.
            Outside the pavilion, experts demonstrate fishing and archery
            techniques. A 17-ton cheese, said to be the world&apos;s largest, is
            displayed on a huge, air-conditioned van, protected by chromium and
            glass. A cafeteria and a beer garden are located in the area, which
            is set amid pine trees.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "SPORTSMAN'S SHOW.",
            body: (
              <>
                There are daily demonstrations of flycasting, Indian archery and
                field work with hunting dogs. Trout fishing is available for
                fishing enthusiasts.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                Flame-grilled steak is served in the gay &apos;90s cafeteria.
                Banjo players and an old-fashioned nickelodeon provide music in
                the beer garden, where the menu offers a typical Wisconsin
                knackwurst lunch.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/wisconsin01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wisconsin01/wilogo.gif",
          width: 144,
          height: 71,
          alt: "",
        },
        name: "WISCONSIN",
        nameFace: "arial",
        summary: (
          <>
            A big, stylized tepee rises above state exhibits, including the
            world&apos;s largest cheese.
          </>
        ),
        copy: (
          <>
            Displays tell the story of Wisconsin&apos;s farms, industries and
            great outdoors. The 17-ton champion cheese, protected by glass, is
            displayed in an air-conditioned van.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "RESTAURANTS.",
            body: (
              <>
                Flame-grilled steak is the feature of the Gay &apos;90s
                cafeteria. Banjo players and an old-fashioned nickelodeon make
                music in the beer garden, where sandwiches and full dinners are
                served.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/wisconsin01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/wisconsin01/federal-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/wisconsinmap",
      }}
    />
  );
}
