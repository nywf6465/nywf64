import type { Metadata } from "next";
import Image from "next/image";
import { PreviewNavChrome } from "@/components/PreviewNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./preview09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Official Preview New York World's Fair 1964/1965 — nywf64.com",
  description:
    "Official Preview New York World's Fair 1964/1965 — interior page from the Official Preview Book on nywf64.com.",
};

/**
 * Official Preview Book — interior spread (legacy preview.08.html).
 * Nav bar shows Page 9 (route number). No hand-icon bars (omitted per request).
 *
 * Stack: previewhero → PreviewNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Preview09Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Official Preview Book"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/preview/previewhero.jpg"
            alt="Official Preview New York World's Fair 1964/1965"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PreviewNavChrome />

      <article className={styles.article} aria-labelledby="preview09-title">
        <header className={styles.titleBar}>
          <h1 id="preview09-title" className={styles.titleBarMain}>
            Official Preview New York World&apos;s Fair 1964/1965
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/preview09/page08.jpg"
              alt="Official Preview New York World's Fair 1964/1965 — page from the Official Preview Book"
              width={901}
              height={1200}
              className={styles.image}
              sizes="(max-width: 901px) 100vw, 901px"
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/preview08"
        explicitPrevious
        overviewHref="/preview01"
        nextHref="/preview10"
      />
    </>
  );
}
