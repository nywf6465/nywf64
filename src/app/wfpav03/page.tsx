import type { Metadata } from "next";
import { PostcardPage } from "@/components/PostcardPage";
import { WfpavNavChrome } from "@/components/WfpavNavChrome";

export const metadata: Metadata = {
  title: "Postcards — World's Fair Pavilion — nywf64.com",
  description:
    "World's Fair Pavilion postcard from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Pavilion postcards page.
 * Body from legacy wfpav03.html. Layout: PostcardPage (/bell03).
 */
export default function Wfpav03Page() {
  return (
    <PostcardPage
      heroLabel="World's Fair Pavilion"
      titleId="wfpav03-title"
      hero={{
        src: "/images/wfpavoverview/hero-banner.jpg",
        alt: "World's Fair Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfpavNavChrome />}
      previousHref="/wfpav02"
      overviewHref="/wfpavoverview"
      nextHref="/wfpav04"
      entries={[
        {
          front: {
            src: "/images/wfpav03/83735-B.jpg",
            width: 450,
            height: 280,
            alt: "The Pavilion official postcard No. 83735-B",
          },
          reverse: {
            src: "/images/wfpav03/83735-B-reverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse of The Pavilion postcard No. 83735-B",
          },
          meta: [
            "The Pavilion",
            "Official Postcard",
            "No. 83735-B",
            "Dexter No. WF-37",
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
