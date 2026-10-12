import type { Metadata } from "next";
import Image from "next/image";
import { ReportNavChrome } from "@/components/ReportNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./report01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Progress Reports — nywf64.com",
  description:
    "Download Progress Reports of the 1964-1965 New York World’s Fair — complete set courtesy of the Bradd Schiffman collection on nywf64.com.",
};

type Issue = {
  file: string;
  width: number;
  height: number;
  title: string;
  date: string;
};

/** Cover thumbnails + PDFs from legacy report.html (top intro block replaced). */
const ISSUES: Issue[] = [
  {
    file: "Report1",
    width: 116,
    height: 150,
    title: "Progress Report One",
    date: "January 16, 1961",
  },
  {
    file: "Report2",
    width: 115,
    height: 150,
    title: "Progress Report Two",
    date: "May 8, 1961",
  },
  {
    file: "Report3",
    width: 117,
    height: 150,
    title: "Progress Report Three",
    date: "September 14, 1961",
  },
  {
    file: "Report4",
    width: 115,
    height: 150,
    title: "Progress Report Four",
    date: "January 17, 1962",
  },
  {
    file: "Report5",
    width: 116,
    height: 150,
    title: "Progress Report Five",
    date: "May 17, 1962",
  },
  {
    file: "Report6",
    width: 115,
    height: 150,
    title: "Progress Report Six",
    date: "September 12, 1962",
  },
  {
    file: "Report7",
    width: 115,
    height: 150,
    title: "Progress Report Seven",
    date: "January 24, 1963",
  },
  {
    file: "Report8",
    width: 116,
    height: 150,
    title: "Progress Report Eight",
    date: "April 22, 1963",
  },
  {
    file: "Report9",
    width: 117,
    height: 150,
    title: "Progress Report Nine",
    date: "September 26, 1963",
  },
];

/**
 * Progress Reports index — body from legacy report.html.
 * Top header image + branded intro replaced with PDF download intro
 * (“bulletins” → “reports”).
 *
 * Stack: reporthero → ReportNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Report01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="World’s Fair Progress Reports">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/report/reporthero.jpg"
            alt="World’s Fair Progress Reports — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ReportNavChrome />

      <article className={styles.article} aria-labelledby="report01-title">
        <header className={styles.titleBar}>
          <h1 id="report01-title" className={styles.titleBarMain}>
            Progress Reports
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            The reports have been saved in <strong>PDF format</strong>.{" "}
            <u>Click or tap the images below</u> to download the report. Once
            inside the document you can use the{" "}
            <em>zoom feature (+ or -)</em> to increase or decrease the document
            size to a comfortable viewing level.
          </p>

          <div className={styles.issueGrid}>
            {ISSUES.map((issue) => (
              <div key={issue.file} className={styles.issue}>
                <a
                  href={`/pdf/report/${issue.file}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.coverLink}
                  aria-label={`Download ${issue.title} — ${issue.date} (PDF)`}
                >
                  <Image
                    src={`/images/report01/${issue.file}.jpg`}
                    alt={`${issue.title} cover — ${issue.date}`}
                    width={issue.width}
                    height={issue.height}
                    className={styles.cover}
                    unoptimized
                  />
                </a>
                <dl className={styles.meta}>
                  <dt>{issue.title}</dt>
                  <dd>{issue.date}</dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/reportoverview"
        explicitPrevious
        overviewHref="/reportoverview"
        nextHref="/reportoverview"
      />
    </>
  );
}
