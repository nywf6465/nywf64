import type { Metadata } from "next";
import Image from "next/image";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { FOUNTAIN_SHOW_MUSIC } from "./music";
import styles from "./poolin06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fountain Show Music — Pool of Industry — nywf64.com",
  description:
    "Fountain of the Planets fountain show music programs — Pool of Industry at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry Fountain Show Music page.
 * Body from legacy poolin06.html (custom listing — no shared brochure/manual
 * standard). Stack: hero → PoolinNavChrome → navy title → music sections →
 * Nav2Bar.
 */
export default function Poolin06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Pool of Industry">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/poolinoverview/hero-banner.jpg"
            alt="Pool of Industry at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PoolinNavChrome />

      <article className={styles.article} aria-labelledby="poolin06-title">
        <header className={styles.titleBar}>
          <h1 id="poolin06-title" className={styles.titleBarMain}>
            Fountain Show Music
          </h1>
        </header>

        <div className={styles.articleInner}>
          {FOUNTAIN_SHOW_MUSIC.map((section) => (
            <section
              key={section.name}
              className={styles.section}
              aria-label={section.name}
            >
              <h2 className={styles.sectionHeading}>{section.name}</h2>
              {section.mode === "composer" ? (
                <ul className={styles.composerList}>
                  {section.items.map((item) => (
                    <li key={`${item.title}-${item.composer}`}>
                      <span className={styles.songTitle}>
                        <em>{item.title}</em>
                      </span>
                      <span className={styles.composer}>{item.composer}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.songGrid}>
                  {section.songs.map((song) => (
                    <li key={song}>
                      <em>{song}</em>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/poolin05"
        explicitPrevious
        overviewHref="/poolinoverview"
        nextHref="/poolin07"
      />
    </>
  );
}
