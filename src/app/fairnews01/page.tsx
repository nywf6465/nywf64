import type { Metadata } from "next";
import Image from "next/image";
import { FairNewsNavChrome } from "@/components/FairNewsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fairnews01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "FAIR NEWS — The Official Bulletin of the Fair — nywf64.com",
  description:
    "Download FAIR NEWS, the Official Bulletin of the 1964-1965 New York World’s Fair — complete set courtesy of the Bradd Schiffman collection on nywf64.com.",
};

type Issue = {
  file: string;
  width: number;
  height: number;
  volume: string;
  date: string;
};

/** Cover thumbnails + PDFs from legacy fairnews01.html (minus Adobe download block). */
const ISSUES: Issue[] = [
  {
    file: "FairNews062162",
    width: 116,
    height: 150,
    volume: "Vol. 1, No. 1",
    date: "June 21, 1962",
  },
  {
    file: "FairNews071062",
    width: 114,
    height: 150,
    volume: "Vol. 1, No. 2",
    date: "July 10, 1962",
  },
  {
    file: "FairNews080262",
    width: 114,
    height: 150,
    volume: "Vol. 1, No. 3",
    date: "August 02, 1962",
  },
  {
    file: "FairNews090662",
    width: 114,
    height: 150,
    volume: "Vol. 1, No. 4",
    date: "September 6, 1962",
  },
  {
    file: "FairNews101662",
    width: 114,
    height: 150,
    volume: "Vol. 1, No. 5",
    date: "October 16, 1962",
  },
  {
    file: "FairNews111362",
    width: 114,
    height: 150,
    volume: "Vol. 1, No. 6",
    date: "November 13, 1962",
  },
  {
    file: "FairNews122062",
    width: 114,
    height: 150,
    volume: "Vol. 1, No. 7",
    date: "December 20, 1962",
  },
  {
    file: "FairNews012163",
    width: 114,
    height: 150,
    volume: "Vol. 2, No. 1",
    date: "January 21, 1963",
  },
  {
    file: "FairNews021963",
    width: 114,
    height: 150,
    volume: "Vol. 2, No. 2",
    date: "February 19, 1963",
  },
  {
    file: "FairNews030663",
    width: 114,
    height: 150,
    volume: "Vol. 2, No. 3",
    date: "March 6, 1963",
  },
  {
    file: "FairNews041663",
    width: 115,
    height: 150,
    volume: "Vol. 2, No. 4",
    date: "April 16, 1963",
  },
  {
    file: "FairNews050463",
    width: 115,
    height: 150,
    volume: "Vol. 2, No. 5",
    date: "May 4, 1963",
  },
  {
    file: "FairNews061763",
    width: 114,
    height: 150,
    volume: "Vol. 2, No. 6",
    date: "June 17, 1963",
  },
  {
    file: "FairNews072263",
    width: 114,
    height: 150,
    volume: "Vol. 2, No. 7",
    date: "July 22, 1963",
  },
  {
    file: "FairNewsLaborDay63",
    width: 117,
    height: 150,
    volume: "Vol. 2, No. 8",
    date: "Labor Day, 1963",
  },
  {
    file: "FairNews102963",
    width: 118,
    height: 150,
    volume: "Vol. 2, No. 9",
    date: "October 29, 1963",
  },
  {
    file: "FairNews112263",
    width: 116,
    height: 150,
    volume: "Vol. 2, No. 10",
    date: "November 22,  1963",
  },
  {
    file: "FairNewsHolidayIssue63",
    width: 115,
    height: 150,
    volume: "Vol. 2, No. 11",
    date: "Holiday Issue, 1963",
  },
  {
    file: "FairNews012264",
    width: 116,
    height: 150,
    volume: "Vol. 3, No. 1",
    date: "January 22, 1964",
  },
  {
    file: "FairNews022264",
    width: 116,
    height: 150,
    volume: "Vol. 3, No. 2",
    date: "February 22, 1964",
  },
  {
    file: "FairNews032264",
    width: 116,
    height: 150,
    volume: "Vol. 3, No. 3",
    date: "March 22, 1964",
  },
];

/**
 * Fair News — The Official Bulletin of the Fair.
 * Body from legacy fairnews01.html (top intro image/text block, Adobe paragraph,
 * and Adobe icon omitted).
 *
 * Stack: newshero → FairNewsNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairNews01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Fair News Newsletters">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fairnews/newshero.jpg"
            alt="FAIR NEWS Newsletters — Official Bulletin of the New York World’s Fair 1964-1965"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairNewsNavChrome />

      <article className={styles.article} aria-labelledby="fairnews01-title">
        <header className={styles.titleBar}>
          <h1 id="fairnews01-title" className={styles.titleBarMain}>
            FAIR&nbsp;NEWS - The Official Bulletin of the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            The bulletins have been saved in <strong>PDF format</strong>.{" "}
            <u>Click or tap the images below</u> to download the bulletin. Once
            inside the document you can use the{" "}
            <em>zoom feature (+ or -)</em> to increase or decrease the document
            size to a comfortable viewing level.
          </p>

          <div className={styles.issueGrid}>
            {ISSUES.map((issue) => (
              <div key={issue.file} className={styles.issue}>
                <a
                  href={`/pdf/fairnews/${issue.file}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.coverLink}
                  aria-label={`Download ${issue.volume} — ${issue.date} (PDF)`}
                >
                  <Image
                    src={`/images/fairnews01/${issue.file}.jpg`}
                    alt={`${issue.volume} cover — ${issue.date}`}
                    width={issue.width}
                    height={issue.height}
                    className={styles.cover}
                    unoptimized
                  />
                </a>
                <dl className={styles.meta}>
                  <dt>{issue.volume}</dt>
                  <dd>{issue.date}</dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fairnewsoverview"
        explicitPrevious
        overviewHref="/fairnewsoverview"
        nextHref="/fairnewsoverview"
      />
    </>
  );
}
