import type { Metadata } from "next";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Sermons from Science — nywf64.com",
  description:
    "Sermons from Science pavilion postcard from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science postcards page — “postcards” standard.
 * Body from legacy sersci03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Sersci03Page() {
  return (
    <PostcardPage
      heroLabel="Sermons from Science"
      titleId="sersci03-title"
      hero={{
        src: "/images/serscioverview/hero-banner.jpg",
        alt: "Sermons from Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SersciNavChrome />}
      previousHref="/sersci02"
      overviewHref="/serscioverview"
      nextHref="/sersci04"
      entries={[
        {
          front: {
            src: "/images/sersci03/postcard-front.jpg",
            width: 450,
            height: 285,
            alt: "Sermons from Science pavilion postcard",
          },
          reverse: {
            src: "/images/sersci03/postcard-back.jpg",
            width: 300,
            height: 181,
            alt: "Reverse — Sermons from Science pavilion postcard",
          },
          meta: [
            "Sermons from Science",
            "Exhibitor Postcard",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
