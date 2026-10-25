import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps03.module.css";

export const metadata: Metadata = {
  title: "Congo – Guatemala — Postage Stamps of the Fair — nywf64.com",
  description:
    "Congo, Dubai, Egypt, Germany, Ghana, and Guatemala postage stamps of the 1964/1965 New York World’s Fair — nywf64.com.",
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
  /** Extra body paragraphs after the lead line. */
  paragraphs?: string[];
  /** External link shown after `linkAfter` paragraphs (default 0 = after lead). */
  link?: { href: string; label: string };
  linkAfter?: number;
  rows?: StampImage[][];
  /** Caption under the stamp figure (Dubai JFK note). */
  figureNote?: string;
  figureNoteHref?: string;
  ruleAfter?: boolean;
};

const ISSUES: StampIssue[] = [
  {
    country: "CONGO DEMOCRATIC REPUBLIC",
    meta: "(#521-527 Released March, 1965 - current value $1.50)",
    body: '- Seven different denomination and colored stamps each showing a rocket blasting off next to the Unisphere. The original inspiration for the film "MiB?"',
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc525.jpg",
          width: 65,
          height: 104,
          alt: "Congo",
        },
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc524.jpg",
          width: 65,
          height: 103,
          alt: "Congo",
        },
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc523.jpg",
          width: 65,
          height: 106,
          alt: "Congo",
        },
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc522.jpg",
          width: 65,
          height: 103,
          alt: "Congo",
        },
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc521.jpg",
          width: 65,
          height: 102,
          alt: "Congo",
        },
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc527.jpg",
          width: 65,
          height: 100,
          alt: "Congo",
        },
        {
          src: "/images/stamps03/stamp_Congo_1965_Sc526.jpg",
          width: 65,
          height: 101,
          alt: "Congo",
        },
      ],
    ],
  },
  {
    country: "DUBAI",
    meta: "(#33-38 Released April 22, 1964 - current value $2.00)",
    body: "- Six standard postal values for use inside Dubai. Each feature the Unisphere set against various backdrops of New York City at left and Dubai landmarks at right.",
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Dubai_1964_Sc33.jpg",
          width: 160,
          height: 73,
          alt: "Dubai",
        },
        {
          src: "/images/stamps03/stamp_Dubai_1964_Sc34.jpg",
          width: 160,
          height: 77,
          alt: "Dubai",
        },
        {
          src: "/images/stamps03/stamp_Dubai_1964_Sc35.jpg",
          width: 160,
          height: 74,
          alt: "Dubai",
        },
      ],
      [
        {
          src: "/images/stamps03/stamp_Dubai_1964_Sc36.jpg",
          width: 160,
          height: 73,
          alt: "Dubai",
        },
        {
          src: "/images/stamps03/stamp_Dubai_1964_ScC37.jpg",
          width: 160,
          height: 76,
          alt: "Dubai",
        },
        {
          src: "/images/stamps03/stamp_Dubai_1964_Sc38.jpg",
          width: 160,
          height: 74,
          alt: "Dubai",
        },
      ],
    ],
  },
  {
    meta: "(#C36-C38 Released April 22, 1964 - current value $1.50)",
    body: '- Here is the first set of airmail denominations to be presented in this article. These three stamps spotlight the Unisphere, the Statue of Liberty, and a Dubai harbor view. (NOTE: The Scott catalog designates airmail stamps with a capital "C" prefix.)',
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Dubai_1964_ScC36.jpg",
          width: 160,
          height: 74,
          alt: "Dubai",
        },
        {
          src: "/images/stamps03/stamp_Dubai_1964_ScC37.jpg",
          width: 160,
          height: 76,
          alt: "Dubai",
        },
        {
          src: "/images/stamps03/stamp_Dubai_1964_ScC38.jpg",
          width: 160,
          height: 74,
          alt: "Dubai",
        },
      ],
    ],
  },
  {
    meta: "(#C38a Released April 22, 1964 - current value $5.00)",
    body: "- The two larger denominations of the three Dubai airmail issues were combined to make this souvenir sheet. Note that the colors are changed from the original single-stamp versions. The perforations are simulated.",
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Dubai_1964_Sc238a.jpg",
          width: 220,
          height: 178,
          alt: "Dubai",
        },
      ],
    ],
  },
  {
    body: 'A variation of the Dubai set was created in the late 60\'s to honor the anniversary of President John F. Kennedy\'s death. These stamps were never released officially, yet are available from select dealers who purchased the stamps from the firm that printed the issue and which are known as "essays." Since these were never sold to the general public for postal use, these are not included in the grand total of 1964-65 New York World\'s Fair issues.',
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Dubai_Kennedy.jpg",
          width: 160,
          height: 74,
          alt: "Dubai",
        },
      ],
    ],
    figureNote:
      "More information regarding these special Dubai JFK stamps may be seen at:",
    figureNoteHref:
      "http://friends.peoria.lib.il.us/community/howardcourtney/dubai3.html",
    ruleAfter: true,
  },
  {
    country: "EGYPT (UAR)",
    meta: "(#625 Released April 22, 1964 - current value $1.40)",
    body: "- A single stamp issue depicting the Statue of Liberty, the Great Pyramids, and the United Arab Republic Pavilion at the New York World's Fair. (Egypt and Syria formed the United Arab Republic [UAR] in 1958. Syria withdrew in 1961 due to a military coup, however Egypt kept the UAR designation until 1972.)",
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Egypt_1964_Sc625.jpg",
          width: 180,
          height: 105,
          alt: "Egypt",
        },
      ],
    ],
  },
  {
    country: "GERMANY",
    meta:
      "(no official number; Released April, 1964? - current value unknown)",
    body: '- These are termed "Cinderellas" by the stamp community since they were never official stamps issued by their respective country. "Rocket Mail" began early in the 20th Century and was looked upon as a novel way to make money but was never considered a serious method for mail delivery.',
    paragraphs: [
      'The main advocate for rocket mail was a German named Gerhard Zucker. He did many flights around Europe selling these "mail pieces" as collectibles. The practice was stopped in 1964 after an accident killed a student during one of the launches. The complete story may be read at:',
      'Here are two items created for the New York World\'s Fair that were used in association with real postage on mail covers to and from the United States during 1964. The first images are close up views of the individual "stamps" depicting the Unisphere, Statue of Liberty, and New York City, along with a rocket, jet airplane and German town.',
      'Issued in both blue and red colors, each had perforated and imperforated versions. Notice that the English words say "Peace With Understanding" though the German words "Frieden Durch Verstandigung" is the correct translation of the official fair motto, "Peace Through Understanding."',
    ],
    link: {
      href: "http://www.astronautix.com/lvs/zucocket.htm",
      label: "http://www.astronautix.com/lvs/zucocket.htm",
    },
    linkAfter: 1,
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Germany_1964_01.jpg",
          width: 149,
          height: 108,
          alt: "Germany",
        },
        {
          src: "/images/stamps03/stamp_Germany_1964_02.jpg",
          width: 149,
          height: 108,
          alt: "Germany",
        },
      ],
    ],
  },
  {
    body: "Seen below are two of the four different souvenir sheets. Both colors were produced in imperforate and perforate versions. An example of each kind and color is illustrated.",
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Germany_1964_03.jpg",
          width: 220,
          height: 167,
          alt: "Germany",
        },
        {
          src: "/images/stamps03/stamp_Germany_1964_04.jpg",
          width: 220,
          height: 150,
          alt: "Germany",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "GHANA",
    meta: "(#186-188 Released October 1964 - current value $8.00)",
    body: "- Three individual stamps, each taken from a souvenir sheet similar to the sheets illustrated below. Perforated and imperforated versions were produced.",
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Ghana_1964_Sc186.jpg",
          width: 100,
          height: 101,
          alt: "Ghana",
        },
        {
          src: "/images/stamps03/stamp_Ghana_1964_Sc187.jpg",
          width: 100,
          height: 100,
          alt: "Ghana",
        },
        {
          src: "/images/stamps03/stamp_Ghana_1964_Sc188.jpg",
          width: 100,
          height: 103,
          alt: "Ghana",
        },
      ],
    ],
  },
  {
    meta: "(#186a-188a Released October 1964 - current value $30.00 per sheet)",
    body: "- Series of three souvenir sheets issued in conjunction with the globally organized Quiet Sun Year. The souvenir sheets were created using color-modified backgrounds (gray, pink, and tan) which differed from the regular issue Ghana stamps #164-166 (tan, gray, and pink). Each six-inch square sheet contains 12 stamps surrounding a stylized Unisphere. Both perforate and imperforate sheets were printed.",
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Ghana_1964_Sc186a.jpg",
          width: 220,
          height: 220,
          alt: "Ghana",
        },
        {
          src: "/images/stamps03/stamp_Ghana_1964_Sc187a.jpg",
          width: 220,
          height: 218,
          alt: "Ghana",
        },
      ],
      [
        {
          src: "/images/stamps03/stamp_Ghana_1964_Sc188a.jpg",
          width: 220,
          height: 221,
          alt: "Ghana",
        },
      ],
    ],
    ruleAfter: true,
  },
  {
    country: "GUATEMALA",
    meta: "(#C291-C294 Released June 25, 1964 - current value $1.40)",
    body: '- Four airmail stamps honoring the Red Cross. The stamps are reissues of 1961 Guatemalan stamps C219-C222 and are each overprinted with the wording "FERIA MUNDIAL DE NEW YORK (World\'s Fair of New York)." This series of stamps has to win the award for "Most Recycled" as the set was overprinted an additional 8 times between 1961 and 1966 with different phrases to celebrate various events.',
    rows: [
      [
        {
          src: "/images/stamps03/stamp_Guatemala_1964_ScC291.jpg",
          width: 120,
          height: 91,
          alt: "Guatemala",
        },
        {
          src: "/images/stamps03/stamp_Guatemala_1964_ScC292.jpg",
          width: 87,
          height: 120,
          alt: "Guatemala",
        },
        {
          src: "/images/stamps03/stamp_Guatemala_1964_ScC293.jpg",
          width: 120,
          height: 93,
          alt: "Guatemala",
        },
        {
          src: "/images/stamps03/stamp_Guatemala_1964_ScC294.jpg",
          width: 120,
          height: 91,
          alt: "Guatemala",
        },
      ],
    ],
  },
];

/**
 * Postage Stamps of the Fair — Congo–Guatemala (legacy stamps04.html → /stamps03).
 * Shared StampsHero (1905×826). Nav Page 4.
 * PREVIOUS → /stamps02; NEXT hidden until the next stamps page ships.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps03Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps03-title">
        <header className={styles.titleBar}>
          <h1 id="stamps03-title" className={styles.titleBarMain}>
            Congo&nbsp;&nbsp;-&nbsp;&nbsp;Guatemala
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue, issueIndex) => {
            const linkAfter = issue.linkAfter ?? 0;
            const paragraphs = issue.paragraphs ?? [];
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

                  {issue.link && linkAfter === 0 ? (
                    <p className={styles.paragraph}>
                      <a
                        className={styles.extLink}
                        href={issue.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {issue.link.label}
                      </a>
                    </p>
                  ) : null}

                  {paragraphs.map((paragraph, paragraphIndex) => (
                    <div key={`${key}-p-${paragraphIndex}`}>
                      <p className={styles.paragraph}>{paragraph}</p>
                      {issue.link && linkAfter === paragraphIndex + 1 ? (
                        <p className={styles.paragraph}>
                          <a
                            className={styles.extLink}
                            href={issue.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {issue.link.label}
                          </a>
                        </p>
                      ) : null}
                    </div>
                  ))}

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

                  {issue.figureNote ? (
                    <p className={styles.figureNote}>
                      {issue.figureNote}
                      {issue.figureNoteHref ? (
                        <>
                          <br />
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
        previousHref="/stamps02"
        explicitPrevious
        overviewHref="/stampsoverview"
        hideNext
      />
    </>
  );
}
