import type { Metadata } from "next";
import Image from "next/image";
import { AmptheNavChrome } from "@/components/AmptheNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ampthe04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Wonder World Playbill — Amphitheatre — nywf64.com",
  description:
    "Download the Amphitheatre Wonder World Playbill — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLAYBILL_PDF = "/pdf/ampthe/wonder-world-playbill.pdf";

/**
 * Amphitheatre playbill page — Wonder World PDF.
 * Body from legacy ampthe04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Stack: hero → AmptheNavChrome → navy title bar → cover + copy → Nav2Bar.
 */
export default function Ampthe04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Amphitheatre">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amptheoverview/hero-banner.jpg"
            alt="Amphitheatre at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmptheNavChrome />

      <article className={styles.article} aria-labelledby="ampthe04-title">
        <header className={styles.titleBar}>
          <h1 id="ampthe04-title" className={styles.titleBarMain}>
            Wonder World Playbill
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={PLAYBILL_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download Amphitheatre Wonder World Playbill (PDF)"
            >
              <Image
                src="/images/ampthe04/playbill.jpg"
                alt="Wonder World Playbill cover"
                width={150}
                height={205}
                className={styles.cover}
                unoptimized
              />
            </a>
          </div>

          <div className={styles.body}>
            <p>
              The Playbill has been saved in <strong>PDF format</strong>.{" "}
              <span className={styles.tapHint}>
                Click or tap the image above
              </span>{" "}
              to download the Playbill. Once inside the document you can use the{" "}
              <em>zoom feature</em> to increase or decrease the document size to
              a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ampthe03"
        explicitPrevious
        overviewHref="/ampthe01"
        nextHref="/ampthe01"
      />
    </>
  );
}
