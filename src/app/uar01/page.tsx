import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { UarNavChrome } from "@/components/UarNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — United Arab Republic — nywf64.com",
  description:
    "United Arab Republic pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Arab Republic guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy uar01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Uar01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="United Arab Republic"
      titleId="uar01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/uaroverview/hero-banner.jpg",
        alt: "United Arab Republic pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UarNavChrome />}
      previousHref="/uaroverview"
      nextHref="/uar02"
      guide1964={{
        cover: {
          src: "/images/uar01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/uar01/uarlogo64.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: (
          <>
            UNITED ARAB
            <br />
            REPUBLIC
          </>
        ),
        copy: (
          <>
            Three towering arches stand at the entrance to this pavilion, which
            reflects a culture that has lasted from the time of the pharaohs to
            the present. A museum holds treasures of the past, not only ancient
            Egyptian objects but also others representing the Greco-Roman, early
            Christian and Islamic eras in the history of Egypt. Among the
            artifacts are some of the objects found in the tomb of King
            Tutankhamun, who died about 1344 B.C. Inside the main building, the
            United Arab Republic of today is represented by numerous industrial,
            agricultural, handicraft and cultural exhibits. A small souvenir shop
            sells handicrafts of the Middle East. A snack bar sells Arab food.
          </>
        ),
        admission: "Admission: free to the pavilion; museum 50 cents.",
        highlights: [
          {
            label: "TREASURES FROM ANTIQUITY.",
            body: (
              <>
                A miniature gold coffin that depicts Tutankhamun holding the
                crook and flail of his office is on display in the museum, along
                with other artifacts.
              </>
            ),
          },
          {
            label: "A SHOW OF PROGRESS.",
            body: (
              <>
                Motion pictures, maps, models, displays and fashion shows provide
                a panorama of the U.A.R.&apos;s agricultural and industrial
                achievements. One section of the museum is devoted to an
                internationally sponsored program, now in progress, that will
                raise the 3,200-year-old temple of Ramses II and Queen Nefertari
                at Abu Simbel above the anticipated water level of the Aswan High
                Dam.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/uar01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/uar01/uarlogo.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: "UNITED ARAB REPUBLIC",
        summary: (
          <>
            Models of the Aswan Dam and the Suez Canal are among many displays
            that emphasize progress in this ancient land.
          </>
        ),
        copy: (
          <>
            Behind the three towering arches that form the gateway to the
            pavilion, relief maps, models and motion pictures provide a panorama
            of agricultural and industrial achievements. A souvenir shop sells
            rugs, leather goods and other items made by Egyptian craftsmen.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "ASWAN HIGH DAM.",
            body: (
              <>
                On exhibit is a scale model of this massive irrigation and
                electrification project, which will turn two million acres into
                fertile farm land. Another display illustrates the international
                effort now under way to move and reconstruct on high ground the
                famous Abu Simbel temples threatened by the dam&apos;s artificial
                lake.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                The motif is Egypt in ancient times. The cuisine stresses unusual
                Egyptian delicacies. A snack bar offers light meals.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/uar01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/uar01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/uarmap",
      }}
    />
  );
}
