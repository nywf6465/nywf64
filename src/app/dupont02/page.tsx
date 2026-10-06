import type { Metadata } from "next";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — DuPont — nywf64.com",
  description:
    "DuPont pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont postcards page — “postcards” standard.
 * Body from legacy dupont02.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Dupont02Page() {
  return (
    <PostcardPage
      heroLabel="DuPont"
      titleId="dupont02-title"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont01"
      overviewHref="/dupontoverview"
      nextHref="/dupont03"
      entries={[
        {
          front: {
            src: "/images/dupont02/80424-B.jpg",
            width: 450,
            height: 282,
            alt: "Dupont Pavilion official postcard No. 80424-B",
          },
          reverse: {
            src: "/images/dupont02/80424-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Dupont Pavilion postcard No. 80424-B",
          },
          meta: [
            "Dupont Pavilion",
            "Official Postcard",
            "No. 80424-B",
            "Dexter No. WF-21",
            "Manhattan No. W-39",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/dupont02/WF405.jpg",
            width: 450,
            height: 282,
            alt: "7 Up and Dupont Pavilions unauthorized postcard No. WF405",
          },
          reverse: {
            src: "/images/dupont02/WF405reverse.jpg",
            width: 300,
            height: 58,
            alt: "Reverse — 7 Up and Dupont Pavilions postcard No. WF405",
          },
          meta: [
            "7 Up and Dupont Pavilions",
            "Unauthorized Postcard",
            "No. WF405",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
