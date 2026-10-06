import type { Metadata } from "next";
import { ChucenNavChrome } from "@/components/ChucenNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Churchill Center — nywf64.com",
  description:
    "Churchill Center pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Churchill Center postcards page — “postcards” standard.
 * Body from legacy chucen03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Chucen03Page() {
  return (
    <PostcardPage
      heroLabel="Churchill Center"
      titleId="chucen03-title"
      hero={{
        src: "/images/chucenoverview/hero-banner.jpg",
        alt: "Churchill Center at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucenNavChrome />}
      previousHref="/chucen02"
      overviewHref="/chucenoverview"
      nextHref="/chucen04"
      entries={[
        {
          front: {
            src: "/images/chucen03/83735-B.jpg",
            width: 450,
            height: 280,
            alt: "The Pavilion official postcard No. 83735-B",
          },
          reverse: {
            src: "/images/chucen03/83735-Breverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse — The Pavilion postcard No. 83735-B",
          },
          meta: [
            "The Pavilion",
            "Official Postcard",
            "No. 83735-B",
            "Dexter No. WF-37",
            "Manhattan No. N/A",
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
