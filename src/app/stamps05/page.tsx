import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps05.module.css";

export const metadata: Metadata = {
  title: "Korea – Sharjah — Postage Stamps of the Fair — nywf64.com",
  description:
    "Korea, Mexico, Morocco, Pakistan, Panama, Paraguay, Republic of China (Taiwan), and Sharjah postage stamps of the 1964/1965 New York World’s Fair — nywf64.com.",
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
  figureNoteItalic?: string;
  ruleAfter?: boolean;
};

const ISSUES: StampIssue[] = [
  {
    country: "KOREA",
    meta: "(#432-433 Released April 22, 1964 - current value $15.00)",
    body: "- Two stamps in this set, the higher value featuring the Korean Pavilion at the New York Worlds Fair. The lower denomination stamp illustrates a Ginsing root next to the stylized Unisphere.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Korea_1964_Sc432.jpg",
          width: 160,
          height: 113,
          alt: "Korea",
        },
        {
          src: "/images/stamps05/stamp_Korea_1964_Sc433.jpg",
          width: 160,
          height: 112,
          alt: "Korea",
        },
      ],
    ],
  },
  {
    meta: "(#433a Released April 22, 1964 - current value $22.00)",
    body: "- Souvenir sheet commemorating the Korean Participation in the New York World's Fair which incorporated both standard issue stamps.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Korea_1964_Sc433a.jpg",
          width: 220,
          height: 146,
          alt: "Korea",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "MEXICO",
    meta: "(#C307 Released November 9, 1965 - current value $0.50)",
    body: "- A single Mexican airmail stamp displaying a Mayan image along with the Unisphere. This was the second to last stamp to be issued for the New York World's Fair; over three weeks after the fair had permanently closed!",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Mexico_1965_ScC307.jpg",
          width: 180,
          height: 102,
          alt: "Mexico",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "MOROCCO",
    meta: "(#C12 Released May 25, 1964 - current value $1.00)",
    body: "- Another airmail stamp prominently featuring the Moroccan Pavilion at the World's Fair alongside a colorful Unisphere logo.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Morocco_1964_ScC12.jpg",
          width: 180,
          height: 101,
          alt: "Morocco",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "PAKISTAN",
    meta: "(#206-207 Released April 22, 1964 - current value $0.65)",
    body: "- Two stamps in this series each having an image of the Pakistani New York World's Fair Pavilion set against the Unisphere.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Pakistan_1964_Sc206.jpg",
          width: 160,
          height: 98,
          alt: "Pakistan",
        },
        {
          src: "/images/stamps05/stamp_Pakistan_1964_Sc207.jpg",
          width: 99,
          height: 160,
          alt: "Pakistan",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "PANAMA",
    meta: "(#C322-C325 Released September 14, 1964 - current value $5.00)",
    body: "- Four very colorful airmails each depicting a different aspect of the New York World's Fair. The smallest denomination stamp illustrates the Vatican pavilion, the second features the New York State pavilion (notice the omission of the Tent Of Tomorrow), the third value displays the Sudan pavilion; and finally we have the Unisphere as the topic of its own stamp.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Panama_1964_ScC322.jpg",
          width: 120,
          height: 89,
          alt: "Panama",
        },
        {
          src: "/images/stamps05/stamp_Panama_1964_ScC323.jpg",
          width: 120,
          height: 90,
          alt: "Panama",
        },
        {
          src: "/images/stamps05/stamp_Panama_1964_ScC324.jpg",
          width: 120,
          height: 89,
          alt: "Panama",
        },
        {
          src: "/images/stamps05/stamp_Panama_1964_ScC325.jpg",
          width: 120,
          height: 90,
          alt: "Panama",
        },
      ],
    ],
  },
  {
    meta: "(#C326, C326a Released September 14, 1964 - current value $3.00 each)",
    body: "- Souvenir airmail sheet proclaiming the New York World's Fair in 1964 while repeating the design from the highest denomination airmail stamp. Available in perforate and imperforate versions.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Panama_1964_ScC326.jpg",
          width: 220,
          height: 132,
          alt: "Panama",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "PARAGUAY",
    meta: "(#906, 909 Released November 19, 1966 - current value 5.00)",
    body: "- These stamps celebrated Pope Paul the VI's visit to the UN in New York City and the World's Fair in October of 1965. Out of the series of six, two stamps had images related to the New York World's Fair, each showing the Unisphere at upper left and Pope Paul VI. Stamp # 909 (right) is an airmail value.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Paraguay_1966_Sc906.jpg",
          width: 160,
          height: 123,
          alt: "Paraguay",
        },
        {
          src: "/images/stamps05/stamp_Paraguay_1966_Sc909.jpg",
          width: 160,
          height: 124,
          alt: "Paraguay",
        },
      ],
    ],
    figureNote:
      'These particular Paraguay stamps were issued over a year after the fair had closed, earning the title of "Current, Absolute Last Stamps Issued For The New York World\'s Fair of 1964-65." ',
    figureNoteItalic:
      "For you trivia fans, that same title for the 1939-40 New York World's Fair goes to Antigua, who issued a set of Disney stamps in 1989 (#1248-1257), honoring the event 50 years later! (see Epilogue)",
  },
  {
    meta: "(#910a, 910ai Released November 19, 1966 - current value $19.00 each)",
    body: "- Space was the topic of these souvenir sheet's central image, though they honor two completely different themes, the Pope's visit to New York and the New York World's Fair.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Paraguay_1965_Sc910a.jpg",
          width: 220,
          height: 156,
          alt: "Paraguay",
        },
        {
          src: "/images/stamps05/stamp_Paraguay_1965_Sc910ai.jpg",
          width: 220,
          height: 152,
          alt: "Paraguay",
        },
      ],
    ],
  },
  {
    meta: "(#923, 925 Released March 9, 1965 - current value $15.00)",
    body: '- The "Events of 1965" set of six had two values associated with the New York World\'s Fair. The two stamps featured the Saturn V booster section with the rockets of Space Park in the background. Stamp #925 (right) is an airmail version. Though they have a higher Scott Catalog number, surprisingly these were released before the 1966 set honoring Pope Paul VI\'s visit to New York, discussed above.',
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Paraguay_stamp1.jpg",
          width: 160,
          height: 161,
          alt: "Paraguay",
        },
        {
          src: "/images/stamps05/stamp_Paraguay_stamp2.jpg",
          width: 160,
          height: 160,
          alt: "Paraguay",
        },
      ],
    ],
  },
  {
    meta: "(#923i, 925i Released March 9, 1965 - current value $15.00)",
    body: "- Imperforate versions of the same stamps above, but with different color schemes.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Paraguay_stamp3.jpg",
          width: 160,
          height: 159,
          alt: "Paraguay",
        },
        {
          src: "/images/stamps05/stamp_Paraguay_stamp4.jpg",
          width: 160,
          height: 160,
          alt: "Paraguay",
        },
      ],
    ],
  },
  {
    meta: "(#926a, 926ai Released March 9, 1965 - current value $19.00 each)",
    body: '- As you may have guessed, "Space" exploration is a frequent theme of Paraguay stamps. This souvenir sheet celebrates "Events Of 1965", among which is the New York World\'s Fair. The NY World\'s Fair stamps are shown at the lower left of center on the sheet. Available in perforate and imperforate versions.',
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Paraguay_1965_Sc926a.jpg",
          width: 220,
          height: 287,
          alt: "Paraguay",
        },
        {
          src: "/images/stamps05/stamp_Paraguay_1965_Sc926ai.jpg",
          width: 220,
          height: 290,
          alt: "Paraguay",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "REPUBLIC OF CHINA (Taiwan)",
    meta: "(#1420-1421 Released September 10, 1964 - current value $3.00)",
    body: "- The Republic of China issued stamps for the New York World's Fair in both 1964 and 1965. The 1964 versions featured the Unisphere with Taiwanese and US flags on one, and the Republic Of China Pavilion on the higher value.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Taiwan_1964_Sc1420.jpg",
          width: 106,
          height: 160,
          alt: "Republic of China (Taiwan)",
        },
        {
          src: "/images/stamps05/stamp_Taiwan_1964_Sc1421.jpg",
          width: 160,
          height: 115,
          alt: "Republic of China (Taiwan)",
        },
      ],
    ],
  },
  {
    meta: "(#1450-1451 Released May 8, 1965 - current value $25.00)",
    body: '- In 1965 there were two new stamps. First, the Unisphere was set against the Republic Of China Pavilion in the background. The higher denomination showcased "100 birds paying homage to Queen Phoenix", with a small Unisphere symbol.',
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Taiwan_1965_Sc1450.jpg",
          width: 180,
          height: 103,
          alt: "Republic of China (Taiwan)",
        },
        {
          src: "/images/stamps05/stamp_Taiwan_1965_Sc1451.jpg",
          width: 180,
          height: 105,
          alt: "Republic of China (Taiwan)",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "SHARJAH",
    meta: "(#C22-C24 Released September 5, 1964 - current value $1.50)",
    body: "- Sharjah, now part of the United Arab Emirates, provided a unique triptych combining three airmail stamps on one sheet. Both perforate and imperforate versions exist. C22 is at right, C23 is on the left, and C24 is the center stamp.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Sharjah_1964_ScC22_SC24.jpg",
          width: 442,
          height: 139,
          alt: "Sharjah",
        },
      ],
    ],
  },
  {
    meta: "(#C24a Released September 5, 1964 - current value $0.40)",
    body: "- The souvenir sheet featuring airmail stamp C23.",
    rows: [
      [
        {
          src: "/images/stamps05/stamp_Sharjah_1964_ScC24a.jpg",
          width: 220,
          height: 307,
          alt: "Sharjah",
        },
      ],
    ],
  },
];

/**
 * Postage Stamps of the Fair — Korea–Sharjah (legacy stamps06.html → /stamps05).
 * Shared StampsHero (1905×826). Nav Page 6.
 * PREVIOUS → /stamps04; NEXT hidden until the next stamps page ships.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps05Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps05-title">
        <header className={styles.titleBar}>
          <h1 id="stamps05-title" className={styles.titleBarMain}>
            Korea&nbsp;&nbsp;-&nbsp;&nbsp;Sharjah
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

                  {issue.figureNote || issue.figureNoteItalic ? (
                    <p className={styles.figureNote}>
                      {issue.figureNote}
                      {issue.figureNoteItalic ? (
                        <span className={styles.figureNoteItalic}>
                          {issue.figureNoteItalic}
                        </span>
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
        previousHref="/stamps04"
        explicitPrevious
        overviewHref="/stampsoverview"
        hideNext
      />
    </>
  );
}
