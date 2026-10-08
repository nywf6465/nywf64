import type { Metadata } from "next";
import { PostcardPage } from "@/components/PostcardPage";
import { WalwaxNavChrome } from "@/components/WalwaxNavChrome";

export const metadata: Metadata = {
  title: "Postcards — Walter's International Wax Museum — nywf64.com",
  description:
    "Walter's International Wax Museum postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Walter's International Wax Museum postcards page.
 * Body from legacy walwax03.html. Layout: PostcardPage (/bell03).
 */
export default function Walwax03Page() {
  return (
    <PostcardPage
      heroLabel="Walter's International Wax Museum"
      titleId="walwax03-title"
      hero={{
        src: "/images/walwaxoverview/hero-banner.jpg",
        alt: "Walter's International Wax Museum at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<WalwaxNavChrome />}
      previousHref="/walwax02"
      overviewHref="/walwaxoverview"
      nextHref="/walwax04"
      entries={[
        {
          front: {
            src: "/images/walwax03/83733-B.jpg",
            width: 450,
            height: 282,
            alt: "Walter's International Wax Museum",
          },
          reverse: {
            src: "/images/walwax03/83733-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Walter's International Wax Museum",
          },
          meta: [
            "Walter's International Wax Museum",
            "Official Postcard",
            "No. 83733-B",
            "Dexter No. WF-35",
            "Manhattan No. W-36",
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
