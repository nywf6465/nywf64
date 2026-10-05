import type { Metadata } from "next";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Chunky Candy — nywf64.com",
  description:
    "Chunky Candy pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chunky Candy guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy chucan01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /chucanmap (Industrial Area).
 */
export default function Chucan01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Chunky Candy"
      titleId="chucan01-title"
      hero={{
        src: "/images/chucanoverview/hero-banner.jpg",
        alt: "Chunky Candy at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucanNavChrome />}
      previousHref="/chucanoverview"
      nextHref="/chucan02"
      guide1964={{
        cover: {
          src: "/images/chucan01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chucan01/logo1964.gif",
          width: 144,
          height: 93,
          alt: "",
        },
        name: "CHUNKY CANDY",
        copy: (
          <>
            A transparent candy factory - two glass-walled buildings connected by
            a cooling tunnel - enables visitors to watch candy bars being made in
            an almost completely automated process. The pavilion, called
            &quot;Chunky Square,&quot; also has a playground of 13 abstract
            sculptures that youngsters may climb on.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "CANDY IN PRODUCTION.",
            body: (
              <>
                With the normal manufacturing speed slowed to make every step
                readily understandable, candy bars are produced, cooled, wrapped
                and boxed. The freshly made candies are sold at a sales booth.
              </>
            ),
          },
          {
            label: "STATUES TO PLAY WITH.",
            body: (
              <>
                In the &quot;Sculpture Continuum&quot; playground, children may
                clamber all over the plastic abstractions, which vary in height
                from two to 14 feet. As an extra surprise for the youngsters, when
                the statues are viewed through special peepholes, they align in
                the form of recognizable objects - a duck, a man standing on his
                head, a giraffe and so on.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/chucan01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chucan01/logo1965.gif",
          width: 144,
          height: 93,
          alt: "",
        },
        name: "CHUNKY CANDY FACTORY",
        nameFace: "arial",
        summary: (
          <>
            Children can watch candy being made in a glass-walled factory, and
            play in a sculpture garden.
          </>
        ),
        copy: (
          <>
            All the steps in a highly automated process -- mixing, coating,
            cooling, wrapping, and boxing -- are on view, and the freshly made
            candies are sold at a booth.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "SCULPTURES TO PLAY WITH.",
            body: (
              <>
                In the &quot;Sculpture Continuum,&quot; youngsters can clamber
                over and through 13 abstract sculptures. Viewed through special
                peepholes, the sculptures also align into a duck, a giraffe, a man
                standing on his head.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/chucan01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/chucan01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/chucanmap",
      }}
    />
  );
}
