import type { Metadata } from "next";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Schaefer — nywf64.com",
  description:
    "Schaefer Center pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center postcards page — “postcards” standard.
 * Body from legacy schcen03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Schcen03Page() {
  return (
    <PostcardPage
      heroLabel="Schaefer"
      titleId="schcen03-title"
      hero={{
        src: "/images/schcenoverview/hero-banner.jpg",
        alt: "Schaefer Center at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SchcenNavChrome />}
      previousHref="/schcen02"
      overviewHref="/schcenoverview"
      nextHref="/schcen04"
      entries={[
        {
          front: {
            src: "/images/schcen03/86858-B.jpg",
            width: 450,
            height: 280,
            alt: "Schaefer Center official postcard No. 86858-B",
          },
          reverse: {
            src: "/images/schcen03/86858-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Schaefer Center postcard No. 86858-B",
          },
          meta: [
            "Schaefer Center",
            "Official Postcard",
            "No. 86858-B",
            "Dexter No. WF-50",
            "Manhattan No. W-53",
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
