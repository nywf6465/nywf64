import type { Metadata } from "next";
import Image from "next/image";
import { FairEraNavChrome } from "@/components/FairEraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_eraoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "1964/1965 The Era of the Fair — Overview — nywf64.com",
  description:
    "1964/1965 The Era of the Fair overview — the age of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * 1964/1965 The Era of the Fair overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /true_fairoverview).
 * Shared erahero is reused on later fair_era pages.
 */
export default function FairEraOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="1964/1965 The Era of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_era/erahero.jpg"
            alt="1964/1965 The Era of the Fair — New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairEraNavChrome />

      <section
        className={styles.overview}
        aria-label="1964/1965 The Era of the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fair made headlines in <strong>1964</strong> and{" "}
              <strong>1965</strong>. But other events occupied our nation and
              the world during the middle of the &quot;sixties decade.&quot;
              From pop culture to the news of the time -- discover the
              &quot;age&quot; of the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fair_eraoverview/photo.jpg"
              alt="1964 and 1965 — The Era of the Fair"
              width={319}
              height={443}
              sizes="(max-width: 720px) 100vw, 22rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        overviewHref="/fair_eraoverview"
        nextHref="/fair_era01"
      />
    </>
  );
}
