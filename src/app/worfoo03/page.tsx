import type { Metadata } from "next";
import { PostcardPage } from "@/components/PostcardPage";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";

export const metadata: Metadata = {
  title: "Postcards — World of Food — nywf64.com",
  description:
    "World of Food Pavilion postcard from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World of Food postcards page.
 * Body from legacy worfoo03.html. Layout: PostcardPage (/bell03).
 */
export default function Worfoo03Page() {
  return (
    <PostcardPage
      heroLabel="World of Food"
      titleId="worfoo03-title"
      hero={{
        src: "/images/worfoooverview/hero-banner.jpg",
        alt: "World of Food pavilion site at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WorfooNavChrome />}
      previousHref="/worfoo02"
      overviewHref="/worfoooverview"
      nextHref="/worfoo04"
      entries={[
        {
          front: {
            src: "/images/worfoo03/None7.jpg",
            width: 450,
            height: 281,
            alt: "World of Food exhibitor postcard",
          },
          reverse: {
            src: "/images/worfoo03/None7-reverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse of World of Food exhibitor postcard",
          },
          meta: ["World of Food", "Exhibitor Postcard", "No. N/A"],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
