import type { Metadata } from "next";
import { AlaskaNavChrome } from "@/components/AlaskaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Alaska — nywf64.com",
  description:
    "Alaska pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Alaska postcards page — “postcards” standard.
 * Body from legacy alaska03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Alaska03Page() {
  return (
    <PostcardPage
      heroLabel="Alaska"
      titleId="alaska03-title"
      hero={{
        src: "/images/alaskaoverview/hero-banner.jpg",
        alt: "Alaska at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AlaskaNavChrome />}
      previousHref="/alaska02"
      overviewHref="/alaskaoverview"
      nextHref="/alaska04"
      entries={[
        {
          front: {
            src: "/images/alaska03/78166-B.jpg",
            width: 450,
            height: 281,
            alt: "Alaskan Village exhibitor postcard No. 78166-B",
          },
          reverse: {
            src: "/images/alaska03/78166-Breverse.jpg",
            width: 300,
            height: 308,
            alt: "Reverse — Alaskan Village postcard No. 78166-B",
          },
          meta: [
            "Alaskan Village",
            "Exhibitor Postcard",
            "No. 78166-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Alaska Crafts & Culture Corp.",
          ],
        },
      ]}
    />
  );
}
