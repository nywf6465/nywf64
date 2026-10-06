import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { PostcardPage, type PostcardEntry } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — American-Israel Pavilion — nywf64.com",
  description:
    "American-Israel Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const EXHIBITOR_SET = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

function entry(
  num: string,
  index: number,
  total: number,
  title: string,
  frontW: number,
  frontH: number,
  reverseH: number,
  extraSources: ReactNode[] = [],
): PostcardEntry {
  const id = `${num}-B`;
  return {
    front: {
      src: `/images/amerisr03/${id}.jpg`,
      width: frontW,
      height: frontH,
      alt: `${title} — American-Israel Pavilion postcard ${id}`,
    },
    reverse: {
      src: `/images/amerisr03/${id}reverse.jpg`,
      width: 300,
      height: reverseH,
      alt: `Reverse — ${title} postcard ${id}`,
    },
    meta: [
      `American-Israel Pavilion (${index} of ${total})`,
      title,
      EXHIBITOR_SET,
      `No. ${id}`,
    ],
    sources: [
      "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
      "Source: Postcard Published by American-Israel World's Fair Corporation",
      ...extraSources,
    ],
  };
}

/**
 * American-Israel Pavilion postcards page — “postcards” standard.
 * Body from legacy amerisr03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Amerisr03Page() {
  return (
    <PostcardPage
      heroLabel="American-Israel Pavilion"
      titleId="amerisr03-title"
      hero={{
        src: "/images/amerisroverview/hero-banner.jpg",
        alt: "American-Israel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmerisrNavChrome />}
      previousHref="/amerisr02"
      overviewHref="/amerisr01"
      nextHref="/amerisr04"
      entries={[
        entry("88292", 1, 12, "Rendering of Pavilion", 450, 282, 122),
        entry("88293", 2, 12, "Together", 450, 285, 101),
        entry("88294", 3, 12, "It Is No Legend", 450, 285, 86),
        entry("88295", 4, 12, "A Hassidic Dance", 450, 289, 94, [
          <span key="courtesy" className={styles.unauthorized}>
            Presented courtesy Craig Bavaro Collection
          </span>,
        ]),
        entry("88296", 5, 12, "In George Washington's Time", 450, 285, 95),
        entry("88297", 6, 12, "The Rug Weavers", 450, 283, 90),
        entry("88298", 7, 12, "The Craftsmen", 450, 285, 87),
        entry("88299", 8, 12, "In Ancient Babylon", 450, 285, 94),
        entry("88300", 9, 12, "Reciting the Law", 450, 285, 97),
        entry("88301", 10, 12, "Nightfall in Jerusalem", 284, 450, 91),
        entry("88302", 11, 12, "A Biblical Family Scene", 450, 282, 104),
        entry("88303", 12, 12, "The Wall of Peace", 284, 450, 102),
      ]}
    />
  );
}
