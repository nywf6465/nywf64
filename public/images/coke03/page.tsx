import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola postcards page — “postcards” standard.
 * Body from legacy coke03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Coke03Page() {
  return (
    <PostcardPage
      heroLabel="Coca-Cola"
      titleId="coke03-title"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke02"
      overviewHref="/cokeoverview"
      nextHref="/coke04"
      entries={[
        {
          front: {
            src: "/images/coke03/79912-B.jpg",
            width: 450,
            height: 285,
            alt: "Coca Cola Pavilion official postcard No. 79912-B",
          },
          reverse: {
            src: "/images/coke03/79912-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Coca Cola Pavilion postcard No. 79912-B",
          },
          meta: [
            "Coca Cola Pavilion",
            "Official Postcard",
            "No. 79912-B",
            "Dexter No. N/A",
            "Manhattan No. W-32",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/coke03/86855-B.jpg",
            width: 450,
            height: 279,
            alt: "Coca Cola Pavilion official postcard No. 86855-B",
          },
          reverse: {
            src: "/images/coke03/86855-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Coca Cola Pavilion postcard No. 86855-B",
          },
          meta: [
            "Coca Cola Pavilion",
            "Official Postcard",
            "No. 86855-B",
            "Dexter No. WF-47",
            "Manhattan No. W-50",
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
