import type { Metadata } from "next";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Boy Scouts of America — nywf64.com",
  description:
    "Boy Scouts of America postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

const sources = [
  "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Fascolor Incorporated",
];

/**
 * Boy Scouts of America postcards page — “postcards” standard.
 * Body from legacy boysco03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Boysco03Page() {
  return (
    <PostcardPage
      heroLabel="Boy Scouts of America"
      titleId="boysco03-title"
      hero={{
        src: "/images/boyscooverview/hero-banner.jpg",
        alt: "Boy Scouts of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BoyscoNavChrome />}
      previousHref="/boysco02"
      overviewHref="/boyscooverview"
      nextHref="/boysco04"
      entries={[
        {
          front: {
            src: "/images/boysco03/96323-B.jpg",
            width: 450,
            height: 284,
            alt: "Scouts at Unisphere",
          },
          reverse: {
            src: "/images/boysco03/96323-Breverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Scouts at Unisphere",
          },
          meta: [
            "Wonderful World of Scouting (1 of 6)",
            "Scouts at Unisphere",
            exhibitorSet,
            "No. 96323-B",
          ],
          sources,
        },
        {
          front: {
            src: "/images/boysco03/96324-B.jpg",
            width: 450,
            height: 280,
            alt: "Scouts at Scout Exhibit",
          },
          reverse: {
            src: "/images/boysco03/96324-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — Scouts at Scout Exhibit",
          },
          meta: [
            "Wonderful World of Scouting (2 of 6)",
            "Scouts at Scout Exhibit",
            exhibitorSet,
            "No. 96324-B",
          ],
          sources,
        },
        {
          front: {
            src: "/images/boysco03/96325-B.jpg",
            width: 450,
            height: 281,
            alt: "Indians in Scout Exhibit",
          },
          reverse: {
            src: "/images/boysco03/96325-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Indians in Scout Exhibit",
          },
          meta: [
            "Wonderful World of Scouting (3 of 6)",
            "Indians in Scout Exhibit",
            exhibitorSet,
            "No. 96325-B",
          ],
          sources,
        },
        {
          front: {
            src: "/images/boysco03/96326-B.jpg",
            width: 450,
            height: 282,
            alt: "Scout Exhibit w/Unisphere",
          },
          reverse: {
            src: "/images/boysco03/96326-Breverse.jpg",
            width: 300,
            height: 103,
            alt: "Reverse — Scout Exhibit w/Unisphere",
          },
          meta: [
            "Wonderful World of Scouting (4 of 6)",
            "Scout Exhibit w/Unisphere",
            exhibitorSet,
            "No. 96326-B",
          ],
          sources,
        },
        {
          front: {
            src: "/images/boysco03/96327-B.jpg",
            width: 450,
            height: 283,
            alt: "Scouts at Continental Insurance",
          },
          reverse: {
            src: "/images/boysco03/96327-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Scouts at Continental Insurance",
          },
          meta: [
            "Wonderful World of Scouting (5 of 6)",
            "Scouts at Continental Insurance",
            exhibitorSet,
            "No. 96327-B",
          ],
          sources,
        },
        {
          front: {
            src: "/images/boysco03/96328-B.jpg",
            width: 450,
            height: 283,
            alt: "Scouts at U.S. Pavilion",
          },
          reverse: {
            src: "/images/boysco03/96328-Breverse.jpg",
            width: 300,
            height: 102,
            alt: "Reverse — Scouts at U.S. Pavilion",
          },
          meta: [
            "Wonderful World of Scouting (6 of 6)",
            "Scouts at U.S. Pavilion",
            exhibitorSet,
            "No. 96328-B",
          ],
          sources,
        },
      ]}
    />
  );
}
