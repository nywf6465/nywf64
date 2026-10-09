import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Tower of Light — nywf64.com",
  description:
    "Tower of Light Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light postcards page — “postcards” standard.
 * Body from legacy twrlit03.html. Layout: PostcardPage (/bell03).
 */
export default function Twrlit03Page() {
  return (
    <PostcardPage
      heroLabel="Tower of Light"
      titleId="twrlit03-title"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit02"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit04"
      entries={[
        {
          front: {
            src: "/images/twrlit03/87422-B.jpg",
            width: 450,
            height: 284,
            alt: "Tower of Light official postcard No. 87422-B",
          },
          reverse: {
            src: "/images/twrlit03/87422-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse of Tower of Light postcard No. 87422-B",
          },
          meta: [
            "Tower of Light",
            "Official Postcard",
            "No. 87422-B",
            "Dexter No. WF-79",
            "Manhattan No. W-85",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/twrlit03/87422-B2.jpg",
            width: 450,
            height: 281,
            alt: "Tower of Light exhibitor postcard No. 87422-B",
          },
          reverse: {
            src: "/images/twrlit03/87422-B2reverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse of Tower of Light exhibitor postcard No. 87422-B",
          },
          meta: [
            "Tower of Light",
            "Exhibitor Postcard",
            "No. 87422-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
