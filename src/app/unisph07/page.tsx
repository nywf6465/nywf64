import type { Metadata } from "next";
import Image from "next/image";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unisph07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Pamphlet: United States Steel Unisphere Ceremonies — Unisphere — nywf64.com",
  description:
    "Download the United States Steel Unisphere Ceremonies pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAMPHLET_PDF = "/pdf/unisph/ceremonies.pdf";

/**
 * Unisphere pamphlet page — United States Steel Unisphere Ceremonies PDF.
 * Body from legacy unisph07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Stack: hero → UnisphNavChrome → navy title bar → cover + copy → Nav2Bar.
 */
export default function Unisph07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Unisphere">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unisphoverview/hero-banner.jpg"
            alt="Unisphere at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnisphNavChrome />

      <article className={styles.article} aria-labelledby="unisph07-title">
        <header className={styles.titleBar}>
          <h1 id="unisph07-title" className={styles.titleBarMain}>
            Pamphlet: United States Steel Unisphere Ceremonies
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={PAMPHLET_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download United States Steel Unisphere Ceremonies pamphlet (PDF)"
            >
              <Image
                src="/images/unisph07/ceremonies-cover.jpg"
                alt="United States Steel Unisphere Ceremonies pamphlet"
                width={200}
                height={133}
                className={styles.cover}
                unoptimized
              />
            </a>
          </div>

          <div className={styles.body}>
            <p>
              The pamphlet has been saved in <strong>PDF format</strong>.{" "}
              <span className={styles.tapHint}>
                Click or tap the image above
              </span>{" "}
              to download the pamphlet. Once inside the document you can use the{" "}
              <em>zoom feature</em> to increase or decrease the document size to
              a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unisph06"
        explicitPrevious
        overviewHref="/unisph01"
        nextHref="/unisph08"
      />
    </>
  );
}
