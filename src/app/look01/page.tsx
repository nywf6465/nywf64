import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./look01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Look Magazine Index — Magazine Articles of the Fair — nywf64.com",
  description:
    "Look Magazine index of articles covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

type LookIssue = {
  href: string;
  src: string;
  width: number;
  height: number;
  date: string;
  volume?: string;
  titles: string[];
  caption: string;
  coverClassName?: string;
};

/** Body from legacy look01.html — cover thumbs link to article / guide pages. */
const ISSUES: LookIssue[] = [
  {
    href: "/looksguide01",
    src: "/images/look01/cover126.jpg",
    width: 76,
    height: 126,
    date: "February 11, 1964",
    titles: ["LOOK's Guide to the N.Y. World's Fair"],
    caption: "(click image for guide)",
    coverClassName: styles.coverGuide,
  },
  {
    href: "/look640211",
    src: "/images/look01/look640211.jpg",
    width: 100,
    height: 126,
    date: "February 11, 1964",
    volume: "Vol. 28, No. 3",
    titles: ["Showcase of Our Times Opens April 22", "See it Now"],
    caption: "(click image for article)",
  },
  {
    href: "/look640211b",
    src: "/images/look01/look640211.jpg",
    width: 100,
    height: 126,
    date: "February 11, 1964",
    volume: "Vol. 28, No. 3",
    titles: ["Walt Disney: Giant at the Fair"],
    caption: "(click image for article)",
  },
  {
    href: "/look640211c",
    src: "/images/look01/look640211.jpg",
    width: 100,
    height: 126,
    date: "February 11, 1964",
    volume: "Vol. 28, No. 3",
    titles: [
      "For the Fair: Shoes to Pamper your Feet",
      "Home for the Fair",
    ],
    caption: "(click image for articles)",
  },
  {
    href: "/look640211d",
    src: "/images/look01/look640211.jpg",
    width: 100,
    height: 126,
    date: "February 11, 1964",
    volume: "Vol. 28, No. 3",
    titles: [
      "Look's Map of the New York World's Fair",
      "Fairs:  Builders of Dreams",
    ],
    caption: "(click image for articles)",
  },
];

/**
 * Look Magazine Index — Magazine Articles / Periodicals of the Fair.
 * Body from legacy look01.html.
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * No NEXT — index page; covers link out to article / guide routes.
 */
export default function Look01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Magazine Articles of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/periodicals/periodicalshero.jpg"
            alt='The “Magazine Articles on the Fair” — periodicals covering the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PeriodicalsNavChrome />

      <article className={styles.article} aria-labelledby="look01-title">
        <header className={styles.titleBar}>
          <h1 id="look01-title" className={styles.titleBarMain}>
            Look Magazine Index
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue) => (
            <div key={issue.href} className={styles.issue}>
              <div className={styles.coverBlock}>
                <Link
                  href={issue.href}
                  className={styles.coverLink}
                  aria-label={`${issue.date} — ${issue.titles.join("; ")}`}
                >
                  <Image
                    src={issue.src}
                    alt={`Look Magazine cover — ${issue.date}`}
                    width={issue.width}
                    height={issue.height}
                    className={
                      issue.coverClassName
                        ? `${styles.cover} ${issue.coverClassName}`
                        : styles.cover
                    }
                    unoptimized
                  />
                </Link>
                <p className={styles.coverCaption}>{issue.caption}</p>
              </div>

              <div className={styles.meta}>
                <p className={styles.date}>{issue.date}</p>
                {issue.volume ? (
                  <p className={styles.volume}>{issue.volume}</p>
                ) : null}
                <ul className={styles.titles}>
                  {issue.titles.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/periodicalsoverview"
        explicitPrevious
        overviewHref="/periodicalsoverview"
        hideNext
      />
    </>
  );
}
