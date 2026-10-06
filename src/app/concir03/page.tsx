import type { Metadata } from "next";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Continental Circus — nywf64.com",
  description:
    "Continental Circus pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus postcards page — “postcards” standard.
 * Body from legacy concir03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Concir03Page() {
  return (
    <PostcardPage
      heroLabel="Continental Circus"
      titleId="concir03-title"
      hero={{
        src: "/images/conciroverview/hero-banner.jpg",
        alt: "Continental Circus at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConcirNavChrome />}
      previousHref="/concir02"
      overviewHref="/conciroverview"
      nextHref="/concir04"
      entries={[
        {
          front: {
            src: "/images/concir03/74030-B.jpg",
            width: 450,
            height: 282,
            alt: "Continental Circus official postcard No. 74030-B",
          },
          reverse: {
            src: "/images/concir03/74030-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Continental Circus postcard No. 74030-B",
          },
          meta: [
            "Continental Circus",
            "Official Postcard",
            "No. 74030-B",
            "Dexter No. WF-19",
            "Manhattan No. W-20",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
      ]}
    />
  );
}
