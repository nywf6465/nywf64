import type { Metadata } from "next";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Florida — nywf64.com",
  description:
    "Florida Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Florida postcards page.
 * Body from legacy florida03.html. Layout: PostcardPage (/bell03).
 */
export default function Florida03Page() {
  return (
    <PostcardPage
      heroLabel="Florida"
      titleId="florida03-title"
      hero={{
        src: "/images/floridaoverview/hero-banner.jpg",
        alt: "Florida Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FloridaNavChrome />}
      previousHref="/florida02"
      overviewHref="/floridaoverview"
      nextHref="/florida04"
      entries={[
        {
          front: {
            src: "/images/florida03/65129.jpg",
            width: 450,
            height: 285,
            alt: "Florida Pavilion exhibitor postcard No. 65129",
          },
          reverse: {
            src: "/images/florida03/65129reverse.jpg",
            width: 300,
            height: 195,
            alt: "Reverse — Florida Pavilion postcard No. 65129",
          },
          meta: ["Florida Pavilion", exhibitor, "No. 65129"],
          sources: [
            "Source: Postcard Made by Mort Kaye Studios.",
            "Source: Postcard Published by Florida W.F. Authority Incorporated",
          ],
        },
        {
          front: {
            src: "/images/florida03/66384.jpg",
            width: 450,
            height: 283,
            alt: "Florida Pavilion exhibitor postcard No. 66384",
          },
          reverse: {
            src: "/images/florida03/66384reverse.jpg",
            width: 300,
            height: 168,
            alt: "Reverse — Florida Pavilion postcard No. 66384",
          },
          meta: ["Florida Pavilion", exhibitor, "No. 66384"],
          sources: [
            "Source: Postcard Made by Mort Kaye Studios.",
            "Source: Postcard Published by Florida W.F. Authority Incorporated",
          ],
        },
      ]}
    />
  );
}
