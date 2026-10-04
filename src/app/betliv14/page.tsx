import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { BetlivScriptBody, type ScriptPhoto } from "@/components/BetlivScriptBody";
import { Nav2Bar } from "@/components/Nav2Bar";
import { SIDESHOWS_SCRIPT } from "./script";
import styles from "@/styles/betlivTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Borden's Sideshows — Better Living Center — nywf64.com",
  description:
    "Borden's sideshows and Elmer's Marvelous Ark at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SCRIPT_PHOTOS: Record<string, ScriptPhoto> = {
  "Image/betliv/betliv58.jpg": {
    src: "/images/betliv14/borden-logo.jpg",
    width: 150,
    height: 148,
    alt: "Borden's logo",
    plain: true,
  },
  "Image/betliv/betliv88.jpg": {
    src: "/images/betliv14/marcelle.jpg",
    width: 268,
    height: 400,
    alt: "Marcelle Cosmetics",
    caption: "Marcelle Cosmetics",
    source: "kellberg",
  },
  "Image/betliv/betliv89.jpg": {
    src: "/images/betliv14/swiss-bell.jpg",
    width: 275,
    height: 400,
    alt: "Swiss Bell Ringer",
    caption: "Borden's Cheese Rings the Bell",
    source: "kellberg",
  },
  "Image/betliv/betliv87.jpg": {
    src: "/images/betliv14/convenience.jpg",
    width: 267,
    height: 400,
    alt: "Convenience",
    caption: "Convenience",
    source: "kellberg",
  },
  "Image/betliv/betliv90.jpg": {
    src: "/images/betliv14/holiday.jpg",
    width: 262,
    height: 400,
    alt: "Holiday Jamboree",
    caption: "Borden's Holiday Jamboree",
    source: "kellberg",
  },
  "Image/betliv/betliv86.jpg": {
    src: "/images/betliv14/elmer.jpg",
    width: 500,
    height: 340,
    alt: "Elmer",
    caption: "Elmer's Marvelous Ark",
    source: "kellberg",
  },
};

/**
 * Better Living Center — Borden's Sideshows.
 * Body from legacy betliv14.html (five sideshows + Elmer's Marvelous Ark scripts).
 *
 * Stack: hero → BetlivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv14Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv14-title">
        <header className={styles.titleBar}>
          <h1 id="betliv14-title" className={styles.titleBarMain}>
            Borden&apos;s Sideshows
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.scriptHead}>
            <div>
              <p className={styles.scriptTitle}>FIVE SIDESHOWS &amp;</p>
              <p className={styles.scriptTitle}>
                &quot;ELMER&apos;S MARVELOUS ARK&quot;
              </p>
              <p className={styles.scriptSub}>BETTER LIVING CENTER</p>
              <p className={styles.scriptFair}>
                1964-1965 New York World&apos;s Fair
              </p>
              <span className={styles.scriptBadge}>
                T H E&nbsp;&nbsp;S C R I P T S
              </span>
            </div>
            <Image
              src="/images/betliv14/borden-logo.jpg"
              alt="Borden's logo"
              width={150}
              height={148}
              className={`${styles.logo} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <BetlivScriptBody
            text={SIDESHOWS_SCRIPT.replace(
              /^[\s\S]*?\[\[IMG:Image\/betliv\/betliv58\.jpg\]\]\s*/,
              "",
            )}
            photos={SCRIPT_PHOTOS}
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv13"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv15"
      />
    </>
  );
}
