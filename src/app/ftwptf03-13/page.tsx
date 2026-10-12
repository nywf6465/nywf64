import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FtwptfNavChrome } from "@/components/FtwptfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ftwptf03-13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Saga of Flushing Meadow - Page 13 — For Those Who Produced the Fair — nywf64.com",
  description:
    "The Saga of Flushing Meadow page 13 from For Those Who Produced the New York World’s Fair 1964-1965 — nywf64.com.",
};

/**
 * For Those Who Produced the Fair — The Saga of Flushing Meadow - Page 13.
 * Subpage of /ftwptf03 (legacy ftwptfsaga13.html). No nav menu card.
 *
 * Stack: ftwptfhero → FtwptfNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Ftwptf0313Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="For Those Who Produced the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ftwptf/ftwptfhero.jpg"
            alt="For Those Who Produced the Fair — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FtwptfNavChrome />

      <article className={styles.article} aria-labelledby="ftwptf03-13-title">
        <header className={styles.titleBar}>
          <h1 id="ftwptf03-13-title" className={styles.titleBarMain}>
            The Saga of Flushing Meadow - Page 13
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.handRow}>
            <Link href="/ftwptf03-12" aria-label="Go back to Page Twelve">
              <Image
                src="/images/ftwptf03-13/hand_lf.gif"
                alt=""
                width={33}
                height={14}
                className={styles.hand}
                unoptimized
              />
            </Link>{" "}
            <Link href="/ftwptf03-12" className={styles.handPrompt}>
              Click the Hand
            </Link>
            <span className={styles.handTarget}> to go back to </span>
            <Link href="/ftwptf03-12" className={styles.handTarget}>
              Page Twelve
            </Link>
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/ftwptf03-13/saga13-top.jpg"
              alt="The Saga of Flushing Meadow — Page 13 photograph"
              width={900}
              height={1125}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </figure>

          <p className={styles.handRowEnd}>
            <Link href="/ftwptf03-14" className={styles.handPrompt}>
              Click the Hand
            </Link>
            <span className={styles.handTarget}> to go to </span>
            <Link href="/ftwptf03-14" className={styles.handTarget}>
              Page Fourteen
            </Link>{" "}
            <Link href="/ftwptf03-14" aria-label="Go to Page Fourteen">
              <Image
                src="/images/ftwptf03-13/hand_rg.gif"
                alt=""
                width={33}
                height={14}
                className={styles.hand}
                unoptimized
              />
            </Link>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ftwptf03-12"
        explicitPrevious
        overviewHref="/ftwptfoverview"
        nextHref="/ftwptf03-14"
      />
    </>
  );
}
