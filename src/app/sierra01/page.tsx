import type { Metadata } from "next";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Sierra Leone — nywf64.com",
  description:
    "Sierra Leone pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sierra Leone guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy sierra01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Sierra01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Sierra Leone"
      titleId="sierra01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/sierraoverview/hero-banner.jpg",
        alt: "Sierra Leone pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SierraNavChrome />}
      previousHref="/sierraoverview"
      nextHref="/sierra02"
      guide1964={{
        cover: {
          src: "/images/sierra01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sierra01/logo.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: "SIERRA LEONE",
        copy: (
          <>
            One of the most interesting aspects of this pavilion is the
            architecture: a building of thee conic shapes floating above glass
            walls. The shapes are reminiscent of the West African country&apos;s
            mountain peaks and carry out the design of the three pyramids that
            appear on the nation&apos;s coat of arms. At the reception desk under
            the center cone, hostesses wearing colorful dress greet visitors and
            guide them on a tour that includes a stage show, displays of
            industrial products, striking photographs of native and tourist life,
            crafts and an exhibit of exotic African woods. The building, designed
            by the Greek-American architect Costas Machlouzarides, will be
            dismantled after the Fair and shipped to Sierra Leone to become a
            permanent exhibition hall.
          </>
        ),
        admission: ["Admission: 10 cents."],
        highlights: [
          {
            label: "AFRICA IN DANCE.",
            body: (
              <>
                The pavilion&apos;s feature attraction, visible throughout the
                building and even from the street outside, is a show which is
                presented on a raised stage under the main cone. Two troupes
                perform intricate dances, and acrobats entertain with feats of
                skill and precision.
              </>
            ),
          },
          {
            label: "FROM MINERALS TO DIAMONDS.",
            body: (
              <>
                The entire center of one cone is devoted to diamonds, a major
                industry in Sierra Leone. The display shows how diamonds are
                transformed from rough stones to cut and finished gems.
              </>
            ),
          },
          {
            label: "NATIVE ARTISANS.",
            body: (
              <>
                Near the pavilion&apos;s small cocktail bar, a woodcraftsman
                demonstrates how the exotic African masks and statues on display
                are carved. Close by, a weaver works to make cloth of the kind
                worn by the hostesses. Both carvings and the cloth, as well as
                other items, are on sale at an information counter.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/sierra01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote: (
          <>
            The Sierra Leone pavilion did not reopen in 1965. In 1965 the
            pavilion housed the United Nations Exhibit.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/sierra01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sierra01/international-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/sierramap",
      }}
    />
  );
}
