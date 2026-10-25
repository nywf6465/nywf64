import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps04.module.css";

export const metadata: Metadata = {
  title: "Guinea – Jordan — Postage Stamps of the Fair — nywf64.com",
  description:
    "Guinea, Haiti, Indonesia, Ireland, and Jordan postage stamps of the 1964/1965 New York World’s Fair — nywf64.com.",
};

type StampImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type StampIssue = {
  country?: string;
  meta?: string;
  body?: string;
  rows?: StampImage[][];
  figureNote?: string;
  figureNoteHref?: string;
  ruleAfter?: boolean;
};

const ISSUES: StampIssue[] = [
  {
    country: "GUINEA",
    meta: "(#346-349 Released October 26, 1964 - current value $1.50)",
    body: "- Guinea issued a set of 4 regular stamps and two special airmail value souvenir sheets for 1964 and 1965. Both perforate and imperforate examples of the regular issue were produced. The regular issue stamps displayed a front-on image of the Guinea Pavilion at the New York World's Fair.",
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Guinea_1964_Sc346.jpg",
          width: 120,
          height: 88,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1964_Sc347.jpg",
          width: 120,
          height: 87,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1964_Sc348.jpg",
          width: 120,
          height: 94,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1964_Sc349.jpg",
          width: 120,
          height: 89,
          alt: "Guinea",
        },
      ],
    ],
  },
  {
    meta: "(#C62-C63 Released October 26, 1964 - current value $2.70)",
    body: '- The two airmail value souvenir sheets for 1964. These added the "Rocket Thrower" and the Unisphere to a different Guinea Pavilion image.',
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Guinea_1964_ScC62.jpg",
          width: 220,
          height: 163,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1964_ScC63.jpg",
          width: 220,
          height: 166,
          alt: "Guinea",
        },
      ],
    ],
  },
  {
    meta: "(#372-375 Released March 24, 1965 - current value $1.50)",
    body: '- In 1965 the date was added to the regular issue stamps and the souvenir sheets. The coloring of the stamp denominations was also changed.',
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Guinea_1965_Sc372.jpg",
          width: 120,
          height: 88,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1965_Sc373.jpg",
          width: 120,
          height: 87,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1965_Sc374.jpg",
          width: 120,
          height: 86,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1965_Sc375.jpg",
          width: 120,
          height: 86,
          alt: "Guinea",
        },
      ],
    ],
  },
  {
    meta: "(#C69-C70 Released March 24, 1965 - current value $3.00)",
    body: '- The 1965 souvenir sheets with the year "1965" below the stamp.',
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Guinea_1965_ScC69.jpg",
          width: 220,
          height: 167,
          alt: "Guinea",
        },
        {
          src: "/images/stamps04/stamp_Guinea_1965_ScC70.jpg",
          width: 220,
          height: 164,
          alt: "Guinea",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "HAITI",
    meta: "(#521-523 Released March 22, 1965 - current value $.45)",
    body: '- Three stamps using the themes of the Unisphere and the statue "Rocket Thrower".',
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Haiti_1964_Sc521.jpg",
          width: 100,
          height: 150,
          alt: "Haiti",
        },
        {
          src: "/images/stamps04/stamp_Haiti_1964_Sc522.jpg",
          width: 100,
          height: 157,
          alt: "Haiti",
        },
        {
          src: "/images/stamps04/stamp_Haiti_1964_Sc523.jpg",
          width: 100,
          height: 159,
          alt: "Haiti",
        },
      ],
    ],
  },
  {
    meta: "(#C233-C235 Released March 22, 1965 - current value $1.45)",
    body: "- Three airmail values using similar images.",
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Haiti_1964_ScC233.jpg",
          width: 100,
          height: 158,
          alt: "Haiti",
        },
        {
          src: "/images/stamps04/stamp_Haiti_1964_ScC234.jpg",
          width: 100,
          height: 159,
          alt: "Haiti",
        },
        {
          src: "/images/stamps04/stamp_Haiti_1964_ScC235.jpg",
          width: 100,
          height: 156,
          alt: "Haiti",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "INDONESIA",
    meta: "(#643-644 Released May 16, 1964 - current value $1.25)",
    body: "- A set of two depicting the Indonesia Pavilion at the New York World's Fair. The smaller denomination background is silver, while the higher value has a gold background.",
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Indonesia_1964_Sc643.jpg",
          width: 160,
          height: 98,
          alt: "Indonesia",
        },
        {
          src: "/images/stamps04/stamp_Indonesia_1964_Sc644.jpg",
          width: 160,
          height: 100,
          alt: "Indonesia",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "IRELAND",
    meta: "(#194-195 Released July 20, 1964 - current value $4.50)",
    body: "- Two stamps showing a three-quarters perspective view of the Irish pavilion at the New York World's Fair.",
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Ireland_1964_Sc194.jpg",
          width: 160,
          height: 93,
          alt: "Ireland",
        },
        {
          src: "/images/stamps04/stamp_Ireland_1964_Sc195.jpg",
          width: 160,
          height: 91,
          alt: "Ireland",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "JORDAN",
    meta: "(#514-516 Released August, 1965 - current value $2.00)",
    body: "- Three stamps with the Jordan Pavilion at the New York World's Fair as the main feature. Though the colors are a bit washed out, the backgrounds are really a beautiful metallic silver, copper, and gold. Perforate and imperforate versions were produced.",
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Jordan_1965_Sc514.jpg",
          width: 160,
          height: 106,
          alt: "Jordan",
        },
        {
          src: "/images/stamps04/stamp_Jordan_1965_Sc515.jpg",
          width: 160,
          height: 107,
          alt: "Jordan",
        },
        {
          src: "/images/stamps04/stamp_Jordan_1965_Sc516.jpg",
          width: 160,
          height: 106,
          alt: "Jordan",
        },
      ],
    ],
  },
  {
    meta: "(#516a Released August, 1965 - current value $1.00)",
    body: "- - A special souvenir sheet with a different value from the three regular issues above.",
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Jordan_1964_Sc516a.jpg",
          width: 220,
          height: 144,
          alt: "Jordan",
        },
      ],
    ],
  },
  {
    // Legacy meta omits the closing parenthesis.
    meta: "(#C35-C42 Released 1965 - current value $2.40 ",
    body: '- A distant relation to the New York World\'s Fair series of Jordan stamps are the ones issued to commemorate the Columns of Jerash. One of these relics from the Roman temple of Artemis, known as the "Whispering Column Of Jerash", resides today in Flushing Meadow Corona Park as a gift from Jordan which was presented by the late King Hussein to the Fair in April 1964. These are not included in the total World\'s Fair stamp count.',
    rows: [
      [
        {
          src: "/images/stamps04/stamp_Jordan_Columns1.jpg",
          width: 480,
          height: 72,
          alt: "Jordan",
        },
      ],
      [
        {
          src: "/images/stamps04/stamp_Jordan_Columns2.jpg",
          width: 317,
          height: 125,
          alt: "Jordan",
        },
      ],
    ],
    figureNoteHref:
      "http://www.queenscourier.com/archives/1999/lead021199b.htm",
  },
];

/**
 * Postage Stamps of the Fair — Guinea–Jordan (legacy stamps05.html → /stamps04).
 * Shared StampsHero (1905×826). Nav Page 5.
 * PREVIOUS → /stamps03; NEXT → /stamps05.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps04Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps04-title">
        <header className={styles.titleBar}>
          <h1 id="stamps04-title" className={styles.titleBarMain}>
            Guinea&nbsp;&nbsp;-&nbsp;&nbsp;Jordan
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue, issueIndex) => {
            const key =
              issue.country ??
              issue.meta ??
              issue.body?.slice(0, 40) ??
              `issue-${issueIndex}`;

            return (
              <div key={key}>
                <section className={styles.issue}>
                  {(issue.country || issue.meta || issue.body) && (
                    <p className={styles.lead}>
                      {issue.country ? (
                        <strong className={styles.country}>
                          {issue.country}{" "}
                        </strong>
                      ) : null}
                      {issue.meta ? (
                        <em className={styles.meta}>{issue.meta} </em>
                      ) : null}
                      {issue.body ? (
                        <span className={styles.desc}>{issue.body}</span>
                      ) : null}
                    </p>
                  )}

                  {issue.rows ? (
                    <div className={styles.stampRows}>
                      {issue.rows.map((row, rowIndex) => (
                        <div
                          key={`${key}-row-${rowIndex}`}
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
                  ) : null}

                  {issue.figureNote || issue.figureNoteHref ? (
                    <p className={styles.figureNote}>
                      {issue.figureNote}
                      {issue.figureNoteHref ? (
                        <>
                          {issue.figureNote ? <br /> : null}
                          <a
                            className={styles.extLink}
                            href={issue.figureNoteHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {issue.figureNoteHref}
                          </a>
                        </>
                      ) : null}
                    </p>
                  ) : null}
                </section>
                {issue.ruleAfter ? <hr className={styles.rule} /> : null}
              </div>
            );
          })}
        </div>
      </article>

      <Nav2Bar
        previousHref="/stamps03"
        explicitPrevious
        overviewHref="/stampsoverview"
        nextHref="/stamps05"
      />
    </>
  );
}
