import type { Metadata } from "next";
import Image from "next/image";
import { FtwptfNavChrome } from "@/components/FtwptfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ftwptf100.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Invitation to Reopening of Flushing Meadows Park — For Those Who Produced the Fair — nywf64.com",
  description:
    "Invitation to Reopening of Flushing Meadows Park from For Those Who Produced the New York World’s Fair 1964-1965 — nywf64.com.",
};

/**
 * For Those Who Produced the Fair — Invitation to Reopening of Flushing Meadows Park
 * (legacy ftwptfpark.html). Nav bar shows Page 100 (route number).
 *
 * Stack: ftwptfhero → FtwptfNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Ftwptf100Page() {
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

      <article className={styles.article} aria-labelledby="ftwptf100-title">
        <header className={styles.titleBar}>
          <h1 id="ftwptf100-title" className={styles.titleBarMain}>
            Invitation to Reopening of Flushing Meadows Park
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/ftwptf100/park.jpg"
              alt="Invitation to Reopening of Flushing Meadows Park from For Those Who Produced the New York World’s Fair 1964-1965"
              width={902}
              height={1126}
              className={styles.image}
              sizes="(max-width: 902px) 100vw, 902px"
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ftwptf99"
        explicitPrevious
        overviewHref="/ftwptfoverview"
        nextHref="/ftwptfoverview"
      />
    </>
  );
}
