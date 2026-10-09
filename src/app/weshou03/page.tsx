import type { Metadata } from "next";
import { PostcardPage } from "@/components/PostcardPage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title: "Postcards — Westinghouse — nywf64.com",
  description:
    "Westinghouse Time Capsule postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse postcards page.
 * Body from legacy weshou03.html. Layout: PostcardPage (/bell03).
 */
export default function Weshou03Page() {
  return (
    <PostcardPage
      heroLabel="Westinghouse"
      titleId="weshou03-title"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou02"
      overviewHref="/weshouoverview"
      nextHref="/weshou04"
      entries={[
        {
          front: {
            src: "/images/weshou03/88528-B.jpg",
            width: 280,
            height: 450,
            alt: "Westinghouse Time Capsule",
          },
          reverse: {
            src: "/images/weshou03/88528-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Westinghouse Time Capsule",
          },
          meta: [
            "Westinghouse Time Capsule",
            "Official Postcard",
            "No. 88528-B",
            "Dexter No. WF-97",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
      ]}
    />
  );
}
