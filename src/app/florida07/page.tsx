import type { Metadata } from "next";
import Image from "next/image";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./florida07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Article: Visualizing the Good Life — Florida — nywf64.com",
  description:
    "Business Screen Magazine report on Florida Pavilion sight/sound exhibits — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida — Article: Visualizing the Good Life.
 * Body from legacy florida07.html (Business Screen magazine reprint).
 * Preserve typo: Varous.
 *
 * Stack: hero → FloridaNavChrome → navy title → article → Nav2Bar.
 */
export default function Florida07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Florida">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/floridaoverview/hero-banner.jpg"
            alt="Florida Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FloridaNavChrome />

      <article className={styles.article} aria-labelledby="florida07-title">
        <header className={styles.titleBar}>
          <h1 id="florida07-title" className={styles.titleBarMain}>
            Article: Visualizing the Good Life
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.heroFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/florida07/florid03.jpg"
                alt="Florida Pavilion"
                width={460}
                height={200}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.heroCaption}>
              Florida&apos;s attractions are exhibited within this big circular
              pavilion.
            </figcaption>
          </figure>

          <h2 className={styles.spreadTitle}>
            Visualizing the Good Life in Sunny Florida
          </h2>

          <div className={styles.spread}>
            <div className={styles.spreadLeft}>
              <p>
                <span className={styles.dropCap}>R</span>
                ESORT PROMOTION is understandably a primary motif within the
                large circular Florida Pavilion. Varous tourist areas, such as
                Miami, Orlando and Palm Beach, are using sight/sound
              </p>
            </div>
            <div className={styles.spreadLeft}>
              <p>
                media to show visitors the delights awaiting them.
                Transparencies are shown on &quot;revolving ride&quot; in the
                Palm Beach booth; the Miami show uses slide boxes turning on a
                center core.
              </p>
            </div>
          </div>

          <div className={styles.spread}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/florida07/florid04.jpg"
                  alt="Palm Beach County Booth"
                  width={230}
                  height={345}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.heroCaption}>
                Plastic stalls take visitors on a sight/sound &quot;ride&quot;
                past activities of Palm Beach County environs.
              </figcaption>
            </figure>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/florida07/florid05.jpg"
                  alt="Orlando Booth"
                  width={230}
                  height={348}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.heroCaption}>
                Fair visitors are watching a slide program about Orlando
                projected within this well.
              </figcaption>
            </figure>
          </div>

          <p className={styles.source}>
            Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/florida06"
        explicitPrevious
        overviewHref="/floridaoverview"
        nextHref="/florida08"
      />
    </>
  );
}
