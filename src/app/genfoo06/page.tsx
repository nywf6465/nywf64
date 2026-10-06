import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoo06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases — General Foods Arches — nywf64.com",
  description:
    "General Foods Arches press releases from the 1965 Fair season — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches — Press Releases.
 * Body from legacy genfoo06.html (custom press page).
 * Stack: hero → GenfooNavChrome → navy title → article → Nav2Bar.
 */
export default function Genfoo06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Foods Arches">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/genfoooverview/hero-banner.jpg"
            alt="General Foods Arches at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GenfooNavChrome />

      <article className={styles.article} aria-labelledby="genfoo06-title">
        <header className={styles.titleBar}>
          <h1 id="genfoo06-title" className={styles.titleBarMain}>
            Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionTitle}>News from the 1965 Season</p>
          <div className={styles.pressLayout}>
            <div>
              <div className={styles.story}>
                <h2>Arches To Be Newsier</h2>
                <p>
                  GF&apos;s 11 arches at the World&apos;s Fair will carry nearly
                  three times as many news items this year. Items will be held
                  on the board for only 45 seconds -- 90 seconds last year --
                  and this year news will also be offered with the GF sponsor
                  identification that appears every two minutes and lasts for 30
                  seconds. General Foods brand names also will get more mention.
                  They&apos;ll appear continuously in photo panels under the
                  news and on billboards on the reverse side of arches.
                </p>
                <p className={styles.storyDate}>-March 1965</p>
              </div>
              <div className={styles.story}>
                <h2>Fair Figures</h2>
                <p>
                  During the current New York World&apos;s Fair season, the GF
                  arches flashed out more than 200 special messages -- notes on
                  exhibits and public service announcements.
                </p>
                <p>
                  The GF employee lounge also drew a lot of visitors -- more
                  than 3,000 guests signed the lounge register.
                </p>
                <p className={styles.storyDate}>-September 1965</p>
              </div>
            </div>
            <div className={styles.sideCol}>
              <div className={styles.photoFrame}>
                <Image
                  src="/images/genfoo06/gf05.jpg"
                  alt="General Foods Archway #5"
                  width={125}
                  height={86}
                  className={styles.photoImg}
                  unoptimized
                />
              </div>
              <p className={styles.caption}>GF Archway #5</p>
              <p className={styles.creditTitle}>
                from <strong>GF NEWS</strong> for General Foods People
              </p>
              <Image
                src="/images/genfoo06/gf14.jpg"
                alt=""
                width={80}
                height={106}
                className={styles.creditLogo}
                unoptimized
              />
              <p className={styles.source}>
                presented courtesy of David Kelly
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genfoo05"
        overviewHref="/genfoooverview"
        nextHref="/genfoo07"
      />
    </>
  );
}
