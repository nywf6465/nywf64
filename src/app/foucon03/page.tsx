import type { Metadata } from "next";
import { FouconNavChrome } from "@/components/FouconNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Fountain of the Continents — nywf64.com",
  description:
    "Fountain of the Continents postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of the Continents postcards page — “postcards” standard.
 * Body from legacy foucon03.html. Layout: PostcardPage (/bell03 standard).
 * Preserve legacy abbreviations (Fount., cont&apos;s).
 */
export default function Foucon03Page() {
  return (
    <PostcardPage
      heroLabel="Fountain of the Continents"
      titleId="foucon03-title"
      hero={{
        src: "/images/fouconoverview/hero-banner.jpg",
        alt: "Fountain of the Continents at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FouconNavChrome />}
      previousHref="/foucon02"
      overviewHref="/fouconoverview"
      nextHref="/foucon04"
      entries={[
        {
          front: {
            src: "/images/foucon03/87501-B.jpg",
            width: 283,
            height: 450,
            alt: "Unisphere show Fount. (cont's beneath)",
          },
          reverse: {
            src: "/images/foucon03/87501-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Unisphere show Fount. (cont's beneath)",
          },
          meta: [
            "Unisphere show Fount. (cont's beneath)",
            "Official Postcard",
            "No. 87501-B",
            "Dexter No. WF-60",
            "Manhattan No. W-63",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/foucon03/87425-B.jpg",
            width: 450,
            height: 279,
            alt: "Unisphere in Fountain of the Continents - From N.Y.S. Towers",
          },
          reverse: {
            src: "/images/foucon03/87425-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Unisphere in Fountain of the Continents - From N.Y.S. Towers",
          },
          meta: [
            "Unisphere in Fountain of the Continents - From N.Y.S. Towers",
            "Official Postcard",
            "No. 87425-B",
            "Dexter No. WF-82",
            "Manhattan No. W-79",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/foucon03/92320-B.jpg",
            width: 450,
            height: 281,
            alt: "Night Unisphere from N.Y.S. Towers",
          },
          reverse: {
            src: "/images/foucon03/92320-Breverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Night Unisphere from N.Y.S. Towers",
          },
          meta: [
            "Night Unisphere from N.Y.S. Towers",
            "Official Postcard",
            "No. 92320-B",
            "Dexter No. WF-125",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
      ]}
    />
  );
}
