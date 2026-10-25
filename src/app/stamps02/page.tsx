import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps02.module.css";

export const metadata: Metadata = {
  title: "Afghanistan – Burundi — Postage Stamps of the Fair — nywf64.com",
  description:
    "Afghanistan, Bhutan, and Burundi postage stamps of the 1964/1965 New York World’s Fair — nywf64.com.",
};

type StampImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type StampIssue = {
  country?: string;
  meta: string;
  body: string;
  rows: StampImage[][];
};

const ISSUES: StampIssue[] = [
  {
    country: "AFGHANISTAN",
    meta: "(#677 Released April 21, 1964 - current value $0.50)",
    body: "- A colorful single issue encompassing a view of the Unisphere and mall fountains with the Afghan flag prominent at the left foreground.",
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Afghanistan_1964_Sc677.jpg",
          width: 148,
          height: 112,
          alt: "Afghanistan",
        },
      ],
    ],
  },
  {
    country: "BHUTAN",
    meta: "(#47-52 Released April 21, 1964 - current value $4.00)",
    body: "- A set of six views alternating between a typical Bhutanese pagoda; an image of the Pieta and Khmer Buddha; the New York City skyline against a local Bhutanese village; and a Bhutanese bridge with the George Washington Bridge in the background. Issued in both perforated and imperforated versions.",
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc47.jpg",
          width: 120,
          height: 88,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc48.jpg",
          width: 120,
          height: 90,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc49.jpg",
          width: 118,
          height: 88,
          alt: "Bhutan",
        },
      ],
      [
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc50.jpg",
          width: 118,
          height: 90,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc51.jpg",
          width: 119,
          height: 89,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc52.jpg",
          width: 118,
          height: 88,
          alt: "Bhutan",
        },
      ],
    ],
  },
  {
    meta: "(#52a Released April 21, 1964 - current value $6.00)",
    body: "- Two souvenir sheets, perforated and imperforated illustrating the Bhutanese pagoda, and the Pieta / Khmer Buddha.",
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Bhutan_1964_Sc52a.jpg",
          width: 220,
          height: 159,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1965_Sc52ai.jpg",
          width: 220,
          height: 158,
          alt: "Bhutan",
        },
      ],
    ],
  },
  {
    meta: "(#87-87i Released for Expo'67 - current value $12.00)",
    body: '- The New York World\'s Fair stamps were recycled in 1967 in order to commemorate the fair in Montreal. Three select stamps and one souvenir sheet were simply reissued with "expo67" overprints on top of the 1964 New York World\'s Fair Unisphere emblems. Imperforate versions of the stamps and souvenir sheet were also manufactured.',
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Bhutan_1967_Sc87.jpg",
          width: 118,
          height: 89,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1967_Sc87a.jpg",
          width: 118,
          height: 90,
          alt: "Bhutan",
        },
        {
          src: "/images/stamps02/stamp_Bhutan_1967_Sc87b.jpg",
          width: 118,
          height: 89,
          alt: "Bhutan",
        },
      ],
      [
        {
          src: "/images/stamps02/stamp_Bhutan_1967_Sc87c.jpg",
          width: 220,
          height: 159,
          alt: "Bhutan",
        },
      ],
    ],
  },
  {
    country: "BURUNDI",
    meta: "(#88-94 Released August 21, 1964 - current value $2.00)",
    body: "- A set of seven dancers performing the Royal Dance in typical native costume, set against a gold background. These stamps were released in both perforated and imperforated (illustrated below) versions.",
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc88i.jpg",
          width: 65,
          height: 193,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc89i.jpg",
          width: 65,
          height: 194,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc90i.jpg",
          width: 65,
          height: 202,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc91i.jpg",
          width: 65,
          height: 196,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc92i.jpg",
          width: 65,
          height: 197,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc93i.jpg",
          width: 65,
          height: 198,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc94i.jpg",
          width: 65,
          height: 199,
          alt: "Burundi",
        },
      ],
    ],
  },
  {
    meta: "(#94a-94b Released August 21, 1964 - current value $3.00)",
    body: "- A souvenir sheet with three of the higher value stamps. Both imperforate and perforate versions exist. Gold background for 1964.",
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc94a.jpg",
          width: 220,
          height: 180,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1964_Sc94b.jpg",
          width: 220,
          height: 180,
          alt: "Burundi",
        },
      ],
    ],
  },
  {
    meta: "(#88a-94c Released September 10, 1965 - current value $2.00)",
    body: "- The same set of seven dancers in typical native costume, but this time against a silver background. Released in both perforated and imperforated versions. The two highest values below illustrate the unique corner selvage design with the extra Unisphere-theme non-revenue stamp.",
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc88a.jpg",
          width: 65,
          height: 133,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc89a.jpg",
          width: 65,
          height: 134,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc90a.jpg",
          width: 65,
          height: 130,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc91a.jpg",
          width: 65,
          height: 131,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc92a.jpg",
          width: 65,
          height: 135,
          alt: "Burundi",
        },
      ],
      [
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc94c.jpg",
          width: 220,
          height: 244,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc93a.jpg",
          width: 220,
          height: 244,
          alt: "Burundi",
        },
      ],
    ],
  },
  {
    meta: "(#94d-94e Released August 21, 1964 - current value $3.00)",
    body: '- A souvenir sheet using three of the standard seven issued stamps with slightly modified colors. Both imperforate and perforate versions exist. The sheets have a silver background with yellow "1965" date added below the Unisphere. Perforate and imperforate versions are illustrated below.',
    rows: [
      [
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc94d.jpg",
          width: 220,
          height: 183,
          alt: "Burundi",
        },
        {
          src: "/images/stamps02/stamp_Burundi_1965_Sc94e.jpg",
          width: 220,
          height: 186,
          alt: "Burundi",
        },
      ],
    ],
  },
];

/**
 * Postage Stamps of the Fair — Afghanistan–Burundi (legacy stamps03.html → /stamps02).
 * Shared StampsHero (1905×826). Nav Page 3.
 * PREVIOUS → /stamps01; NEXT → /stamps03.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps02Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps02-title">
        <header className={styles.titleBar}>
          <h1 id="stamps02-title" className={styles.titleBarMain}>
            Afghanistan&nbsp;&nbsp;-&nbsp;&nbsp;Brundi
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue) => (
            <section
              key={`${issue.country ?? ""}${issue.meta}`}
              className={styles.issue}
            >
              <p className={styles.lead}>
                {issue.country ? (
                  <strong className={styles.country}>{issue.country} </strong>
                ) : null}
                <em className={styles.meta}>{issue.meta} </em>
                <span className={styles.desc}>{issue.body}</span>
              </p>
              <div className={styles.stampRows}>
                {issue.rows.map((row, rowIndex) => (
                  <div
                    key={`${issue.meta}-row-${rowIndex}`}
                    className={styles.stampRow}
                  >
                    {row.map((stamp) => (
                      <Image
                        key={stamp.src}
                        src={stamp.src}
                        alt={stamp.alt}
                        width={stamp.width}
                        height={stamp.height}
                        className={styles.stamp}
                        unoptimized
                      />
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/stamps01"
        explicitPrevious
        overviewHref="/stampsoverview"
        nextHref="/stamps03"
      />
    </>
  );
}
