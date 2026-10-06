import type { Metadata } from "next";
import { GarmedNavChrome } from "@/components/GarmedNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Garden of Meditation — nywf64.com",
  description:
    "Garden of Meditation entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Garden of Meditation guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy garmed01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Preserve legacy wording (quite spot).
 */
export default function Garmed01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Garden of Meditation"
      titleId="garmed01-title"
      hero={{
        src: "/images/garmedoverview/hero-banner.jpg",
        alt: "Garden of Meditation at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GarmedNavChrome />}
      previousHref="/garmedoverview"
      nextHref="/garmed02"
      guide1964={{
        cover: {
          src: "/images/garmed01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/garmed01/garmedlogo64.gif",
          width: 144,
          height: 93,
          alt: "",
        },
        name: (
          <>
            GARDEN
            <br />
            OF MEDITATION
          </>
        ),
        copy: (
          <>
            A two-acre park set aside by the Fair provides a place for rest,
            relaxation and reflection amid the bustle and excitement of the
            other attractions. the Garden of Meditation is bordered by pine,
            birch and oak trees; mountain laurel, azaleas, lilies, irises and
            other plants line its paths. There are benches on an oval walk near
            an informal pool; plaques carry references to appropriate Biblical
            verses and a quotation on the wonder of nature from Sir Francis
            Bacon.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/garmed01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/garmed01/garmedlogo.gif",
          width: 144,
          height: 93,
          alt: "",
        },
        name: "GARDEN OF MEDITATION",
        nameFace: "arial",
        summary:
          "A two-acre park set aside by the Fair provides a quite spot for relaxation.",
        copy: (
          <>
            The garden is bordered by pine, birch and oak trees; shrubs and
            flowers line its paths. Benches are set beside a pool. Directly
            across from the park is the Lithuanian Wayside Shrine, where a
            carved wooden cross memorializes those who have given their lives in
            defense of Lithuanian freedom.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/garmed01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/garmed01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/garmedmap",
      }}
    />
  );
}
