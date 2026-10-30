import type { Metadata } from "next";
import Image from "next/image";
import { OdysseyHero } from "@/components/OdysseyHero";
import { OdysseyNavChrome } from "@/components/OdysseyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./odysseyoverview.module.css";

export const metadata: Metadata = {
  title: "A World’s Fair Odyssey — Overview — nywf64.com",
  description:
    "A World’s Fair Odyssey — Craig Bavaro’s essay of a 1976 return to the 1964/1965 New York World’s Fair site, on nywf64.com.",
};

/**
 * A World’s Fair Odyssey overview — follows the overview prototype
 * (same stack as /scrapbookoverview / /educardsoverview).
 * Hero canvas matches ibm01 (1905×826) via OdysseyHero.
 * Nav bar shows Page 1 (`odysseyoverview` special-cased in pageNumberFromPath).
 * Body from legacy odyssey01.html Introduction.
 * PREVIOUS → /stories; NEXT → /odyssey01 (essay page 1 / nav Page 2).
 */
export default function OdysseyOverviewPage() {
  return (
    <>
      <OdysseyHero />

      <OdysseyNavChrome />

      <section
        className={styles.overview}
        aria-label="A World’s Fair Odyssey overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              It&apos;s 1976 and Craig Bavaro is on a mission to discover{" "}
              <em>his</em> <strong>&quot;Lost World of the Fair&quot;</strong>{" "}
              in this essay filled with history and humor. You&apos;re on a
              World&apos;s Fair Odyssey and an Afternoon of Delight armed with
              your <em>110-Instamatic</em> and a 13-year-old&apos;s desire to
              find out what remains of the New York World&apos;s Fair!
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/odysseyoverview/photo.jpg"
              alt="A World's Fair An Afternoon Odyssey Of Delight — New York World's Fair 1964-1965"
              width={1506}
              height={1044}
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
        nextHref="/odyssey01"
      />
    </>
  );
}
