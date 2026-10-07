import type { Metadata } from "next";
import { HalfreNavChrome } from "@/components/HalfreNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Hall of Free Enterprise — nywf64.com",
  description:
    "Hall of Free Enterprise postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Free Enterprise postcards page — “postcards” standard.
 * Body from legacy halfre03.html. Layout: PostcardPage (/bell03).
 */
export default function Halfre03Page() {
  return (
    <PostcardPage
      heroLabel="Hall of Free Enterprise"
      titleId="halfre03-title"
      hero={{
        src: "/images/halfreoverview/hero-banner.jpg",
        alt: "Hall of Free Enterprise at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalfreNavChrome />}
      previousHref="/halfre02"
      overviewHref="/halfreoverview"
      nextHref="/halfre04"
      entries={[
        {
          front: {
            src: "/images/halfre03/80899-B.jpg",
            width: 450,
            height: 281,
            alt: "Hall of Free Enterprise official postcard No. 80899-B",
          },
          reverse: {
            src: "/images/halfre03/80899-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse of Hall of Free Enterprise postcard No. 80899-B",
          },
          meta: [
            "Hall of Free Enterprise",
            "Official Postcard",
            "No. 80899-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/halfre03/86863-B.jpg",
            width: 450,
            height: 283,
            alt: "Hall of Free Enterprise official postcard No. 86863-B",
          },
          reverse: {
            src: "/images/halfre03/86863-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse of Hall of Free Enterprise postcard No. 86863-B",
          },
          meta: [
            "Hall of Free Enterprise",
            "Official Postcard",
            "No. 86863-B",
            "Dexter No. WF-55",
            "Manhattan No. W-58",
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
