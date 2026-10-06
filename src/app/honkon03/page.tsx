import type { Metadata } from "next";
import { HonkonNavChrome } from "@/components/HonkonNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Hong Kong — nywf64.com",
  description:
    "Hong Kong pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Hong Kong postcards page — “postcards” standard.
 * Body from legacy honkon03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Honkon03Page() {
  return (
    <PostcardPage
      heroLabel="Hong Kong"
      titleId="honkon03-title"
      hero={{
        src: "/images/honkonoverview/hero-banner.jpg",
        alt: "Hong Kong at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HonkonNavChrome />}
      previousHref="/honkon02"
      overviewHref="/honkonoverview"
      nextHref="/honkon04"
      entries={[
        {
          front: {
            src: "/images/honkon03/83715-B.jpg",
            width: 450,
            height: 280,
            alt: "Hong Kong Pavilion official postcard No. 83715-B",
          },
          reverse: {
            src: "/images/honkon03/83715-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse of Hong Kong Pavilion postcard No. 83715-B",
          },
          meta: [
            "Hong Kong Pavilion",
            "Official Postcard",
            "No. 83715-B",
            "Dexter No. WF-36",
            "Manhattan No. W-40",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/honkon03/none-30.jpg",
            width: 600,
            height: 482,
            alt: "Pavilion of Hong Kong exhibitor postcard",
          },
          reverse: {
            src: "/images/honkon03/none-30-reverse.jpg",
            width: 300,
            height: 166,
            alt: "Reverse of Pavilion of Hong Kong exhibitor postcard",
          },
          meta: ["Pavilion of Hong Kong", exhibitor, "No. N/A"],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by jpm, New York City",
          ],
        },
      ]}
    />
  );
}
