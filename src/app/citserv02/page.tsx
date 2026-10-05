import type { Metadata } from "next";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Cities Service Band — nywf64.com",
  description:
    "Cities Service World's Fair Band of America postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Cities Service Band postcards page — “postcards” standard.
 * Body from legacy citserv02.html. Layout: PostcardPage (/bell03).
 * Front stacks with reverse B; reverse A sits beside the meta lines.
 */
export default function Citserv02Page() {
  return (
    <PostcardPage
      heroLabel="Cities Service World's Fair Band of America"
      titleId="citserv02-title"
      hero={{
        src: "/images/citservoverview/hero-banner.jpg",
        alt: "Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CitservNavChrome />}
      previousHref="/citserv01"
      overviewHref="/citservoverview"
      nextHref="/citserv03"
      entries={[
        {
          front: {
            src: "/images/citserv02/None-21.jpg",
            width: 700,
            height: 297,
            alt: "The Cities Service World's Fair Band of America exhibitor postcard",
          },
          belowFront: {
            src: "/images/citserv02/None-21-reverseB.jpg",
            width: 450,
            height: 273,
            alt: "Reverse B — Cities Service World's Fair Band of America postcard",
          },
          reverse: {
            src: "/images/citserv02/None-21-reverseA.jpg",
            width: 200,
            height: 254,
            alt: "Reverse A — Cities Service World's Fair Band of America postcard",
          },
          meta: [
            "The Cities Service World's Fair Band of America",
            <span key="exhibitor" style={{ color: "#1e90ff" }}>
              Exhibitor Postcard
            </span>,
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
