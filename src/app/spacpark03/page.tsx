import type { Metadata } from "next";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Space Park — nywf64.com",
  description:
    "U.S. Space Park postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park postcards page — “postcards” standard.
 * Body from legacy spacpark03.html. Layout: PostcardPage (/bell03).
 */
export default function Spacpark03Page() {
  return (
    <PostcardPage
      heroLabel="Space Park"
      titleId="spacpark03-title"
      hero={{
        src: "/images/spacparkoverview/hero-banner.jpg",
        alt: "Space Park at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SpacparkNavChrome />}
      previousHref="/spacpark02"
      overviewHref="/spacparkoverview"
      nextHref="/spacpark04"
      entries={[
        {
          front: {
            src: "/images/spacpark03/92008-B.jpg",
            width: 282,
            height: 450,
            alt: "Atlas-Mercury Launch Vehicle - U.S. Space Park",
          },
          reverse: {
            src: "/images/spacpark03/92008-Breverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Atlas-Mercury Launch Vehicle",
          },
          meta: [
            "Atlas-Mercury Launch Vehicle - U.S. Space Park",
            "Official Postcard",
            "No. 92008-B",
            "Dexter No. WF-105",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/spacpark03/92009-B.jpg",
            width: 286,
            height: 450,
            alt: "Titan II - U.S. Space Park",
          },
          reverse: {
            src: "/images/spacpark03/92009-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Titan II",
          },
          meta: [
            "Titan II - U.S. Space Park",
            "Official Postcard",
            "No. 92009-B",
            "Dexter No. WF-106",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/spacpark03/92010-B.jpg",
            width: 280,
            height: 450,
            alt: "Thor-Delta - U.S. Space Park",
          },
          reverse: {
            src: "/images/spacpark03/92010-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Thor-Delta",
          },
          meta: [
            "Thor-Delta - U.S. Space Park",
            "Official Postcard",
            "No. 92010-B",
            "Dexter No. WF-107",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/spacpark03/92011-B.jpg",
            width: 280,
            height: 450,
            alt: "Saturn V Boat Tail - U.S. Space Park",
          },
          reverse: {
            src: "/images/spacpark03/92011-Breverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Saturn V Boat Tail",
          },
          meta: [
            "Saturn V Boat Tail - U.S. Space Park",
            "Official Postcard",
            "No. 92011-B",
            "Dexter No. WF-108",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/spacpark03/92012-B.jpg",
            width: 450,
            height: 280,
            alt: "Replica of X-15 Rocket Plane - U.S. Space Park",
          },
          reverse: {
            src: "/images/spacpark03/92012-Breverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Replica of X-15 Rocket Plane",
          },
          meta: [
            "Replica of X-15 Rocket Plane - U.S. Space Park",
            "Official Postcard",
            "No. 92012-B",
            "Dexter No. WF-109",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
      ]}
    />
  );
}
