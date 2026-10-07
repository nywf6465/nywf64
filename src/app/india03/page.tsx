import type { Metadata } from "next";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — India — nywf64.com",
  description:
    "India Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * India postcards page — “postcards” standard.
 * Body from legacy india03.html (Adobe chrome omitted).
 * Layout: PostcardPage (/bell03).
 */
export default function India03Page() {
  return (
    <PostcardPage
      heroLabel="India"
      titleId="india03-title"
      hero={{
        src: "/images/indiaoverview/hero-banner.jpg",
        alt: "India pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IndiaNavChrome />}
      previousHref="/india02"
      overviewHref="/indiaoverview"
      nextHref="/india04"
      entries={[
        {
          front: {
            src: "/images/india03/P60064.jpg",
            width: 450,
            height: 326,
            alt: "India Pavilion — Decorated Mud Wall",
          },
          reverse: {
            src: "/images/india03/P60064reverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Decorated Mud Wall",
          },
          meta: [
            "India Pavilion",
            "Decorated Mud Wall",
            "Exhibitor Postcard",
            "No. P60064",
          ],
          sources: [
            "Source: Postcard Made by Colourpicture Publishers, Inc. (Plastichrome)",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/india03/P60065.jpg",
            width: 450,
            height: 280,
            alt: "India Pavilion — The Entrance Hall",
          },
          reverse: {
            src: "/images/india03/P60065reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — The Entrance Hall",
          },
          meta: [
            "India Pavilion",
            "The Entrance Hall",
            "Exhibitor Postcard",
            "No. P60065",
          ],
          sources: [
            "Source: Postcard Made by Colourpicture Publishers, Inc. (Plastichrome)",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
