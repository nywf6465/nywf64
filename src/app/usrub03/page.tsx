import type { Metadata } from "next";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — U.S. Rubber — nywf64.com",
  description:
    "U.S. Rubber postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber postcards page — “postcards” standard.
 * Body from legacy usrub03.html. Layout: PostcardPage (/bell03).
 */
export default function Usrub03Page() {
  return (
    <PostcardPage
      heroLabel="U.S. Rubber"
      titleId="usrub03-title"
      hero={{
        src: "/images/usruboverview/hero-banner.jpg",
        alt: "U.S. Rubber at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UsrubNavChrome />}
      previousHref="/usrub02"
      overviewHref="/usruboverview"
      nextHref="/usrub04"
      entries={[
        {
          front: {
            src: "/images/usrub03/87189-B.jpg",
            width: 450,
            height: 284,
            alt: "U.S. Rubber Giant Tire postcard No. 87189-B",
          },
          reverse: {
            src: "/images/usrub03/87189-Breverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse of U.S. Rubber Giant Tire postcard No. 87189-B",
          },
          meta: [
            "U.S. Rubber Giant Tire",
            "Official Postcard",
            "No. 87189-B",
            "Dexter No. WF-70",
            "Manhattan No. W-73",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/usrub03/87316-B.jpg",
            width: 450,
            height: 283,
            alt: "U.S. Royal Giant Tire postcard No. 87316-B",
          },
          reverse: {
            src: "/images/usrub03/87316-Breverse.jpg",
            width: 300,
            height: 98,
            alt: "Reverse of U.S. Royal Giant Tire postcard No. 87316-B",
          },
          meta: [
            "U.S. Royal Giant Tire",
            <span key="exhibitor" style={{ color: "#1e90ff" }}>
              Exhibitor Postcard
            </span>,
            "No. 87316-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press - West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
