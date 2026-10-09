import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Billy Graham — nywf64.com",
  description:
    "Billy Graham Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

const dexterUnknown = [
  "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Unknown",
];

/**
 * Billy Graham postcards page — “postcards” standard.
 * Body from legacy bilgra03.html. Layout: PostcardPage (/bell03 standard).
 * Legacy wording (two “(5 of 10)”, “(7 of 10”, “(10 of 10”) is preserved.
 */
export default function Bilgra03Page() {
  return (
    <PostcardPage
      heroLabel="Billy Graham"
      titleId="bilgra03-title"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra02"
      overviewHref="/bilgra01"
      nextHref="/bilgra04"
      entries={[
        {
          front: {
            src: "/images/bilgra03/none-9.jpg",
            width: 450,
            height: 283,
            alt: "Billy Graham Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/bilgra03/none-9-reverse.jpg",
            width: 300,
            height: 130,
            alt: "Reverse — Billy Graham Pavilion exhibitor postcard",
          },
          meta: ["Billy Graham Pavilion", exhibitor, "No. N/A"],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88269-B.jpg",
            width: 450,
            height: 282,
            alt: "In a Galilean Carpenter Shop",
          },
          reverse: {
            src: "/images/bilgra03/88269-Breverse.jpg",
            width: 300,
            height: 95,
            alt: "Reverse — In a Galilean Carpenter Shop",
          },
          meta: [
            "Billy Graham Pavilion (1 of 10)",
            "In a Galilean Carpenter Shop",
            exhibitorSet,
            "No. 88269-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88270-B.jpg",
            width: 450,
            height: 281,
            alt: "The Pavilion at Night",
          },
          reverse: {
            src: "/images/bilgra03/88270-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — The Pavilion at Night",
          },
          meta: [
            "Billy Graham Pavilion (2 of 10)",
            "The Pavilion at Night",
            exhibitorSet,
            "No. 88270-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88271-B.jpg",
            width: 450,
            height: 288,
            alt: 'Filming of "Man in the 5th Dimension"',
          },
          reverse: {
            src: "/images/bilgra03/88271-Breverse.jpg",
            width: 300,
            height: 119,
            alt: 'Reverse — Filming of "Man in the 5th Dimension"',
          },
          meta: [
            "Billy Graham Pavilion (3 of 10)",
            'Filming of "Man in the 5th Dimension"',
            exhibitorSet,
            "No. 88271-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88272-B.jpg",
            width: 450,
            height: 284,
            alt: "Jerusalem, the Holy City",
          },
          reverse: {
            src: "/images/bilgra03/88272-Breverse.jpg",
            width: 300,
            height: 129,
            alt: "Reverse — Jerusalem, the Holy City",
          },
          meta: [
            "Billy Graham Pavilion (4 of 10)",
            "Jerusalem, the Holy City",
            exhibitorSet,
            "No. 88272-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88273-B.jpg",
            width: 450,
            height: 285,
            alt: "Billy Graham Pavilion",
          },
          reverse: {
            src: "/images/bilgra03/88273-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Billy Graham Pavilion",
          },
          meta: [
            "Billy Graham Pavilion (5 of 10)",
            "Billy Graham Pavilion",
            exhibitorSet,
            "No. 88273-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88274-B.jpg",
            width: 284,
            height: 450,
            alt: "Tower and Fountains",
          },
          reverse: {
            src: "/images/bilgra03/88274-Breverse.jpg",
            width: 300,
            height: 131,
            alt: "Reverse — Tower and Fountains",
          },
          meta: [
            "Billy Graham Pavilion (5 of 10)",
            "Tower and Fountains",
            exhibitorSet,
            "No. 88274-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88275-B.jpg",
            width: 450,
            height: 285,
            alt: "Inside the Pavilion Theatre",
          },
          reverse: {
            src: "/images/bilgra03/88275-Breverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse — Inside the Pavilion Theatre",
          },
          meta: [
            "Billy Graham Pavilion (7 of 10",
            "Inside the Pavilion Theatre",
            exhibitorSet,
            "No. 88275-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88276-B.jpg",
            width: 450,
            height: 284,
            alt: "The Created Universe",
          },
          reverse: {
            src: "/images/bilgra03/88276-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — The Created Universe",
          },
          meta: [
            "Billy Graham Pavilion (8 of 10)",
            "The Created Universe",
            exhibitorSet,
            "No. 88276-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88277-B.jpg",
            width: 450,
            height: 283,
            alt: "Along the Avenue of the Americas",
          },
          reverse: {
            src: "/images/bilgra03/88277-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Along the Avenue of the Americas",
          },
          meta: [
            "Billy Graham Pavilion (9 of 10)",
            "Along the Avenue of the Americas",
            exhibitorSet,
            "No. 88277-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/bilgra03/88278-B.jpg",
            width: 279,
            height: 450,
            alt: "In the Pavilion Courtyard",
          },
          reverse: {
            src: "/images/bilgra03/88278-Breverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse — In the Pavilion Courtyard",
          },
          meta: [
            "Billy Graham Pavilion (10 of 10",
            "In the Pavilion Courtyard",
            exhibitorSet,
            "No. 88278-B",
          ],
          sources: dexterUnknown,
        },
      ]}
    />
  );
}
