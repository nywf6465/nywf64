import type { Metadata } from "next";
import Image from "next/image";
import { PerspectiveHero } from "@/components/PerspectiveHero";
import { PerspectiveNavChrome } from "@/components/PerspectiveNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./perspectiveoverview.module.css";

export const metadata: Metadata = {
  title: "The Fairs and Flushing Meadows — Overview — nywf64.com",
  description:
    "Perisphere’s Perspective — David Oats’s essays on New York’s World’s Fairs and Flushing Meadows Park, on nywf64.com.",
};

/**
 * Perisphere’s Perspective overview — follows the overview prototype
 * (same stack as /odysseyoverview / /educardsoverview).
 * Hero canvas matches ibm01 (1905×826) via PerspectiveHero.
 * Nav bar shows Page 1 (`perspectiveoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /stories; NEXT → /perspective01 (essay page 1 / nav Page 2).
 */
export default function PerspectiveOverviewPage() {
  return (
    <>
      <PerspectiveHero />

      <PerspectiveNavChrome />

      <section
        className={styles.overview}
        aria-label="The Fairs and Flushing Meadows overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              David Oats was a journalist and historian with a unique
              perspective on New York&apos;s World&apos;s Fairs and Flushing
              Meadows Park. His story can be found in the &ldquo;People of the
              Fair&rdquo; section at nywf64.com. In 2003, Dave agreed to do a
              series of articles for nywf64.com where he would share his
              intimate knowledge with the website. Sadly, Dave was only able to
              author three essays before he passed away. It is our great honor
              to present Dave&apos;s excellent essays.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/perspectiveoverview/photo.jpg"
              alt="Perisphere’s Perspective — Trylon and Perisphere emblem"
              width={1268}
              height={1240}
              sizes="(max-width: 720px) 90vw, 28rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/stories"
        explicitPrevious
        nextHref="/perspective01"
      />
    </>
  );
}
