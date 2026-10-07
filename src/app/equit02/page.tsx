import type { Metadata } from "next";
import { EquitNavChrome } from "@/components/EquitNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Equitable Life — nywf64.com",
  description:
    "Equitable Life Assurance Society postcards from the 1964/1965 New York World’s Fair — exhibitor cards on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Equitable Life postcards page.
 * Body from legacy equit02.html. Layout: PostcardPage (/bell03).
 */
export default function Equit02Page() {
  return (
    <PostcardPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit02-title"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equit01"
      overviewHref="/equitoverview"
      nextHref="/equit03"
      entries={[
        {
          front: {
            src: "/images/equit02/80486-B.jpg",
            width: 450,
            height: 280,
            alt: "Equitable Demograph Pavilion exhibitor postcard No. 80486-B",
          },
          reverse: {
            src: "/images/equit02/80486-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse of Equitable Demograph Pavilion postcard No. 80486-B",
          },
          meta: [
            "Equitable Demograph Pavilion",
            exhibitor,
            "No. 80486-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
