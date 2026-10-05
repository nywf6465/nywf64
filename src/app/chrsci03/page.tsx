import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Christian Science — nywf64.com",
  description:
    "Christian Science pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const official = (
  <span style={{ color: "#1e90ff" }}>Official Postcard</span>
);

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Christian Science postcards page — “postcards” standard.
 * Body from legacy chrsci03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Chrsci03Page() {
  return (
    <PostcardPage
      heroLabel="Christian Science"
      titleId="chrsci03-title"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci02"
      overviewHref="/chrscioverview"
      nextHref="/chrsci04"
      entries={[
        {
          front: {
            src: "/images/chrsci03/83728-B.jpg",
            width: 450,
            height: 283,
            alt: "Christian Science Pavilion",
          },
          reverse: {
            src: "/images/chrsci03/83728-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Christian Science Pavilion",
          },
          meta: [
            "Christian Science Pavilion",
            official,
            "No. 83728-B",
            "Dexter No. WF-30",
            "Manhattan No. W-41",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/chrsci03/80475-B.jpg",
            width: 450,
            height: 282,
            alt: "Christian Science Pavilion",
          },
          reverse: {
            src: "/images/chrsci03/80475-Breverse.jpg",
            width: 300,
            height: 62,
            alt: "Reverse — Christian Science Pavilion",
          },
          meta: [
            "Christian Science Pavilion",
            exhibitor,
            "No. 80475-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Christian Science Pavilion",
          ],
        },
      ]}
    />
  );
}
