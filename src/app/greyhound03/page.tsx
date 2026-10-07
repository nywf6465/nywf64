import type { Metadata } from "next";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Greyhound — nywf64.com",
  description:
    "Greyhound pavilion postcards — Escorters and Glide-A-Ride quotations from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound postcards page — “postcards” standard.
 * Body from legacy greyhound03.html. Layout: PostcardPage (/bell03).
 */
export default function Greyhound03Page() {
  return (
    <PostcardPage
      heroLabel="Greyhound"
      titleId="greyhound03-title"
      hero={{
        src: "/images/greyhoundoverview/hero-banner.jpg",
        alt: "Greyhound at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreyhoundNavChrome />}
      previousHref="/greyhound02"
      overviewHref="/greyhoundoverview"
      nextHref="/greyhound04"
      entries={[
        {
          front: {
            src: "/images/greyhound03/87187-B.jpg",
            width: 282,
            height: 450,
            alt: 'Unisphere w/"Escorters"',
          },
          reverse: {
            src: "/images/greyhound03/87187-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Postcard reverse",
          },
          meta: [
            <>Unisphere w/&quot;Escorters&quot;</>,
            "Official Postcard",
            "No. 87187-B",
            "Dexter No. WF-68",
            "Manhattan No. W-71",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/greyhound03/87188-B.jpg",
            width: 450,
            height: 282,
            alt: "Glide-A-Ride Trains",
          },
          reverse: {
            src: "/images/greyhound03/87188-Breverse.jpg",
            width: 300,
            height: 106,
            alt: "Postcard reverse",
          },
          meta: [
            "Glide-A-Ride Trains",
            "Official Postcard",
            "No. 87188-B",
            "Dexter No. WF-69",
            "Manhattan No. W-72",
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
