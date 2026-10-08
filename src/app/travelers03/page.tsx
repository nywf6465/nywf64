import type { Metadata } from "next";
import { PostcardPage } from "@/components/PostcardPage";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";

export const metadata: Metadata = {
  title: "Postcards — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance postcards page.
 * Body from legacy travelers03.html. Layout: PostcardPage.
 */
export default function Travelers03Page() {
  return (
    <PostcardPage
      heroLabel="Travelers Insurance"
      titleId="travelers03-title"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers02"
      overviewHref="/travelersoverview"
      nextHref="/travelers04"
      entries={[
        {
          front: {
            src: "/images/travelers03/77765-B.jpg",
            width: 450,
            height: 278,
            alt: "Travelers Insurance Pavilion",
          },
          reverse: {
            src: "/images/travelers03/77765-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Travelers Insurance official postcard",
          },
          meta: [
            "Travelers Insurance",
            "Official Postcard",
            "No. 77765-B",
            "Dexter No. WF-45",
            "Manhattan No. N/A",
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
