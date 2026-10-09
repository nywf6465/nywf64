import type { Metadata } from "next";
import Image from "next/image";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amex06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Pamphlet: World Press Announcement Ceremony — American Express — nywf64.com",
  description:
    "Download the American Express World Press Announcement Ceremony pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAMPHLET_PDF = "/pdf/amex/press-announcement.pdf";

/**
 * American Express pamphlet page — World Press Announcement Ceremony PDF.
 * Body from legacy amex06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Stack: hero → AmexNavChrome → navy title bar → cover + copy → Nav2Bar.
 */
export default function Amex06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="American Express">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amexoverview/hero-banner.jpg"
            alt="American Express at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmexNavChrome />

      <article className={styles.article} aria-labelledby="amex06-title">
        <header className={styles.titleBar}>
          <h1 id="amex06-title" className={styles.titleBarMain}>
            Pamphlet: World Press Announcement Ceremony
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={PAMPHLET_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download American Express World Press Announcement Ceremony pamphlet (PDF)"
            >
              <Image
                src="/images/amex06/press-announcement.jpg"
                alt="American Express World Press Announcement Ceremony pamphlet"
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
              <em>zoom feature</em> to increase or decrease the document size to
              a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex05"
        explicitPrevious
        overviewHref="/amex01"
        nextHref="/amex07"
      />
    </>
  );
}
