import type { Metadata } from "next";
import Image from "next/image";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amerisr05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Pamphlet: Dedication Ceremony — American-Israel Pavilion — nywf64.com",
  description:
    "Download the American-Israel Pavilion Dedication Ceremony pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAMPHLET_PDF = "/pdf/amerisr/dedication.pdf";

/**
 * American-Israel Pavilion pamphlet page — Dedication Ceremony PDF.
 * Body from legacy amerisr05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Stack: hero → AmerisrNavChrome → navy title bar → cover + copy → Nav2Bar.
 */
export default function Amerisr05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="American-Israel Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amerisroverview/hero-banner.jpg"
            alt="American-Israel Pavilion at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmerisrNavChrome />

      <article className={styles.article} aria-labelledby="amerisr05-title">
        <header className={styles.titleBar}>
          <h1 id="amerisr05-title" className={styles.titleBarMain}>
            Pamphlet: Dedication Ceremony
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={PAMPHLET_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download American-Israel Pavilion Dedication Ceremony pamphlet (PDF)"
            >
              <Image
                src="/images/amerisr05/dedication.jpg"
                alt="American-Israel Pavilion Dedication Ceremony pamphlet"
                width={190}
                height={125}
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
              <em>zoom feature (+ or -)</em> to increase or decrease the document
              size to a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amerisr04"
        explicitPrevious
        overviewHref="/amerisroverview"
        nextHref="/amerisroverview"
      />
    </>
  );
}
