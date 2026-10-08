import type { Metadata } from "next";
import Image from "next/image";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sierra06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sierra Leone Since the Fair — Sierra Leone — nywf64.com",
  description:
    "Sierra Leone since the 1964/1965 New York World’s Fair — notes on the nation’s later history on nywf64.com.",
};

/**
 * Sierra Leone — Since the Fair.
 * Body from legacy sierra06.html (short post-Fair note).
 *
 * Stack: hero → SierraNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sierra06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sierra Leone">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sierraoverview/hero-banner.jpg"
            alt="Sierra Leone pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SierraNavChrome />

      <article className={styles.article} aria-labelledby="sierra06-title">
        <header className={styles.titleBar}>
          <h1 id="sierra06-title" className={styles.titleBarMain}>
            Sierra Leone Since the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sierra06/sierra13.jpg"
                alt="Sierra Leone"
                width={600}
                height={379}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <p className={styles.source}>SOURCE: Wikipedia</p>

          <div className={styles.body}>
            <p>
              Sierra Leone came to the Fair with all of the pride, hope and
              confidence of a new nation, typical of a number of newly
              independent African states who were participating in their first
              international exposition by exhibiting at the New York World&apos;s
              Fair. Sadly, the story of Sierra Leone since 1964 has been a
              tragic one.
            </p>
            <p>
              Political instability over the following decades, in which the
              country wavered between civilian and military rule, eventually led
              to the Sierra Leone Civil War that began in 1991 and was resolved
              with the assistance of United Nations Peacekeeping Forces in 2002.
              Since then, almost 72,500 former combatants have disarmed and the
              country has reestablished a functioning democracy. The Special
              Court for Sierra Leone was set up in 2002 to deal with war crimes
              and crimes against humanity committed since 1996.
            </p>
            <p>
              As of 2008, Sierra Leone is the lowest ranked country on the Human
              Development Index and seventh lowest on the Human Poverty Index,
              suffering from endemic corruption, suppression of the press and
              the HIV/AIDS pandemic.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sierra05"
        explicitPrevious
        overviewHref="/sierraoverview"
        nextHref="/sierraoverview"
      />
    </>
  );
}
