import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Belgian Village — nywf64.com",
  description:
    "Belgian Village postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

const dexterSources = [
  "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Island Refreshment Corporation",
];

/**
 * Belgian Village postcards page — “postcards” standard.
 * Body from legacy belvil03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Belvil03Page() {
  return (
    <PostcardPage
      heroLabel="Belgian Village"
      titleId="belvil03-title"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil02"
      overviewHref="/belvil01"
      nextHref="/belvil04"
      entries={[
        {
          front: {
            src: "/images/belvil03/97091-B.jpg",
            width: 280,
            height: 450,
            alt: "Night View of Village with Tower",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Night View of Village with Tower",
          },
          meta: [
            "Belgian Village (1 of 8)",
            "Night View of Village with Tower",
            exhibitorSet,
            "No. 97091-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98700-B.jpg",
            width: 280,
            height: 450,
            alt: "Entrance to Pavilion through Vatican Arch",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Entrance to Pavilion through Vatican Arch",
          },
          meta: [
            "Belgian Village (2 of 8)",
            "Entrance to Pavilion through Vatican Arch",
            exhibitorSet,
            "No. 98700-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98701-B.jpg",
            width: 450,
            height: 282,
            alt: "Scene in Village with Tower",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Scene in Village with Tower",
          },
          meta: [
            "Belgian Village (3 of 8)",
            "Scene in Village with Tower",
            exhibitorSet,
            "No. 98701-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98702-B.jpg",
            width: 279,
            height: 450,
            alt: "Through Arch in Village",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Through Arch in Village",
          },
          meta: [
            "Belgian Village (4 of 8)",
            "Through Arch in Village",
            exhibitorSet,
            "No. 98702-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98703-B.jpg",
            width: 450,
            height: 281,
            alt: "Outside Village near Vatican",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Outside Village near Vatican",
          },
          meta: [
            "Belgian Village (5 of 8)",
            "Outside Village near Vatican",
            exhibitorSet,
            "No. 98703-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98705-B.jpg",
            width: 450,
            height: 282,
            alt: "Night View in the Village",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Night View in the Village",
          },
          meta: [
            "Belgian Village (6 of 8)",
            "Night View in the Village",
            exhibitorSet,
            "No. 98705-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98706-B.jpg",
            width: 450,
            height: 280,
            alt: "Day View in Village Main Square",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Day View in Village Main Square",
          },
          meta: [
            "Belgian Village (7 of 8)",
            "Day View in Village Main Square",
            exhibitorSet,
            "No. 98706-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/98707-B.jpg",
            width: 450,
            height: 282,
            alt: "Night View of Carousel",
          },
          reverse: {
            src: "/images/belvil03/97091-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Night View of Carousel",
          },
          meta: [
            "Belgian Village (8 of 8)",
            "Night View of Carousel",
            exhibitorSet,
            "No. 98707-B",
          ],
          sources: dexterSources,
        },
        {
          front: {
            src: "/images/belvil03/S-57120.jpg",
            width: 450,
            height: 285,
            alt: "Ballantine Rathskeller",
          },
          reverse: {
            src: "/images/belvil03/S-57120reverse.jpg",
            width: 300,
            height: 114,
            alt: "Reverse — Ballantine Rathskeller",
          },
          meta: [
            "Belgian Village",
            "Ballantine Rathskeller",
            exhibitor,
            "No. S-57120",
          ],
          sources: [
            "Source: Postcard Made by Shelton Color Process, Hackensack, N.J.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
