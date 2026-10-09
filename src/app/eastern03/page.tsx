import type { Metadata } from "next";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Eastern Air Lines postcards page — “postcards” standard.
 * Body from legacy eastern03.html. Layout: PostcardPage (/bell03 standard).
 * Adobe PageMill generator meta is omitted.
 */
export default function Eastern03Page() {
  return (
    <PostcardPage
      heroLabel="Eastern Air Lines"
      titleId="eastern03-title"
      hero={{
        src: "/images/easternoverview/hero-banner.jpg",
        alt: "Eastern Air Lines at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<EasternNavChrome />}
      previousHref="/eastern02"
      overviewHref="/easternoverview"
      nextHref="/eastern04"
      entries={[
        {
          front: {
            src: "/images/eastern03/none-1.jpg",
            width: 450,
            height: 281,
            alt: "Eastern Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/eastern03/none-1-reverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse — Eastern Pavilion exhibitor postcard",
          },
          meta: ["Eastern Pavilion", exhibitor, "No. N/A"],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
