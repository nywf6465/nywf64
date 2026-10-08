import type { Metadata } from "next";
import { SwedenNavChrome } from "@/components/SwedenNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Sweden — nywf64.com",
  description:
    "Sweden Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Sweden postcards page — “postcards” standard.
 * Body from legacy sweden02.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Sweden02Page() {
  return (
    <PostcardPage
      heroLabel="Sweden"
      titleId="sweden02-title"
      hero={{
        src: "/images/swedenoverview/hero-banner.jpg",
        alt: "Sweden pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwedenNavChrome />}
      previousHref="/sweden01"
      overviewHref="/swedenoverview"
      nextHref="/sweden03"
      entries={[
        {
          front: {
            src: "/images/sweden02/87339-B.jpg",
            width: 450,
            height: 282,
            alt: "Swedish Pavilion — Exhibitor Postcard No. 87339-B",
          },
          reverse: {
            src: "/images/sweden02/87339-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Swedish Pavilion Exhibitor Postcard No. 87339-B",
          },
          meta: ["Swedish Pavilion", exhibitor, "No. 87339-B"],
          sources: [
            "Source: Postcard Made by Dexter Press - West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sweden02/89825-B.jpg",
            width: 450,
            height: 282,
            alt: "Swedish Pavilion ASEA Powerama Exhibit — Exhibitor Postcard No. 89825-B",
          },
          reverse: {
            src: "/images/sweden02/89825-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — ASEA Powerama Exhibit Exhibitor Postcard No. 89825-B",
          },
          meta: [
            "Swedish Pavilion",
            "ASEA Powerama Exhibit",
            exhibitor,
            "No. 89825-B",
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
