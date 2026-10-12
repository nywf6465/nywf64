import type { Metadata } from "next";
import Image from "next/image";
import { FtwptfNavChrome } from "@/components/FtwptfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ftwptfoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "For Those Who Produced the Fair — Overview — nywf64.com",
  description:
    "For Those Who Produced the New York World’s Fair 1964-1965 — remembrance book presented at the close of the Fair, on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * For Those Who Produced the Fair overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /fairnewsoverview / /reportoverview).
 * Shared ftwptfhero is reused on later ftwptf pages.
 */
export default function FtwptfOverviewPage() {
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

      <section
        className={styles.overview}
        aria-label="For Those Who Produced the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <BrandMark />. is please to present this rare and important
              artifact of the Fair.{" "}
              <span className={styles.bookTitle}>
                For Those Who Produced the New York World&apos;s Fair 1964-1965
              </span>{" "}
              is a remembrance book that was presented at the close of the Fair
              to those who were instrumental in the creation and operation of
              the Fair.
            </p>
            <p className={styles.body}>
              The book is a leather-bound three-ring binder containing primarily
              8X10 inch glossy photographs of the Fair&apos;s pavilions,
              prominent visitors, and speeches given by dignitaries on
              red-letter days. The pages are of the loose-leaf variety and
              number approximately one hundred.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/ftwptfoverview/photo.jpg"
              alt="For Those Who Produced the New York World’s Fair 1964-1965 — book cover"
              width={2129}
              height={739}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/ftwptfoverview"
        nextHref="/ftwptf01"
      />
    </>
  );
}
