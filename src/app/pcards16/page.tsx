import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Miscellaneous Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Miscellaneous Post Cards of the 1964/1965 New York World’s Fair from the nywf64.com collection.",
};

const miscellaneous = (
  <span style={{ color: "#9400d3" }}>Miscellaneous Postcard</span>
);

/**
 * Miscellaneous Postcards gallery (legacy pcards17.html → /pcards16).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 17. PREVIOUS → /pcards15; NEXT → /pcardsoverview (last gallery page).
 */
export default function Pcards16Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards16-title"
      title="Miscellaneous Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards15"
      overviewHref="/pcardsoverview"
      nextHref="/pcardsoverview"
      entries={[
        {
          front: {
            src: "/images/pcards16/None(15).jpg",
            width: 450,
            height: 282,
            alt: "Air View of the Fair miscellaneous postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards16/None(15)reverse.jpg",
            width: 300,
            height: 50,
            alt: "Reverse — Air View of the Fair miscellaneous postcard",
          },
          meta: ["Air View of the Fair", miscellaneous, "No. N/A"],
          sources: [
            "Source: Postcard Made by The Schellor Co., Hackettstown, N.J.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
