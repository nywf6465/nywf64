import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import {
  adjacentLooksGuidePages,
  getLooksGuidePage,
} from "@/data/looksguidePages";
import styles from "./looksguide01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

const PAGE = 1;
const meta = getLooksGuidePage(PAGE)!;
const { next } = adjacentLooksGuidePages(PAGE);

export const metadata: Metadata = {
  title: `LOOK's Guide to the N.Y. World's Fair - ${meta.titleSuffix} — nywf64.com`,
  description:
    "LOOK's Guide to the N.Y. World's Fair — N.Y. City — Look Magazine guide covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * LOOK's Guide to the N.Y. World's Fair — page 01 (legacy looksguide.01.html).
 * Linked from the first cover on /look01. Nav bar shows Page 2. No NEXT.
 * Right-hand icon advances to looksguide02 (Keys to the City).
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Looksguide01Page() {
  const nextHref = next ? `/${next.slug}` : "/look01";

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

      <article className={styles.article} aria-labelledby="looksguide01-title">
        <header className={styles.titleBar}>
          <h1 id="looksguide01-title" className={styles.titleBarMain}>
            LOOK&apos;s Guide to the N.Y. World&apos;s Fair - {meta.titleSuffix}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverStack} role="group" aria-label="Guide cover">
            <Image
              src="/images/looksguide01/cover-stack.jpg"
                alt=""
                width={350}
                height={598}
              unoptimized
            />
          </div>

          <div className={styles.panels}>
            <div className={styles.panel} role="group" aria-label="Guide panel">
              <Image
                src="/images/looksguide01/panel-01.jpg"
                alt=""
                width={350}
                height={523}
                unoptimized
              />
            </div>
            <div className={styles.panel} role="group" aria-label="Guide panel">
              <Image
                src="/images/looksguide01/panel-02.jpg"
                alt=""
                width={350}
                height={523}
                unoptimized
              />
            </div>
          </div>

          {next ? (
            <p className={styles.handRowEnd}>
              <Link href={nextHref} className={styles.handPrompt}>
                Click the Hand
              </Link>
              <span className={styles.handTarget}> to go to </span>
              <Link href={nextHref} className={styles.handTarget}>
                {next.handLabel}
              </Link>{" "}
              <Link href={nextHref} aria-label={`Go to ${next.handLabel}`}>
                <Image
                  src="/images/looksguide01/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.hand}
                  unoptimized
                />
              </Link>
            </p>
          ) : null}
        </div>
      </article>

      <Nav2Bar
        previousHref="/look01"
        explicitPrevious
        overviewHref="/periodicalsoverview"
        hideNext
      />
    </>
  );
}
