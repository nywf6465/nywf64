import type { Metadata } from "next";
import Image from "next/image";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amex07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: Handi-Facts — American Express — nywf64.com",
  description:
    "Download the American Express Handi-Facts brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

const BROCHURE_PDF = "/pdf/amex/handi-facts.pdf";

/**
 * American Express brochure page — Handi-Facts PDF download.
 * Body from legacy amex07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Stack: hero → AmexNavChrome → navy title bar → cover + copy → Nav2Bar.
 */
export default function Amex07Page() {
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

      <article className={styles.article} aria-labelledby="amex07-title">
        <header className={styles.titleBar}>
          <h1 id="amex07-title" className={styles.titleBarMain}>
            Brochure: Handi-Facts
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={BROCHURE_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download American Express Handi-Facts brochure (PDF)"
            >
              <Image
                src="/images/amex07/handi-facts.jpg"
                alt="American Express Handi-Facts brochure"
                width={66}
                height={150}
                className={styles.cover}
                unoptimized
              />
            </a>
          </div>

          <div className={styles.body}>
            <p>
              The brochure has been saved in <strong>PDF format</strong>.{" "}
              <span className={styles.tapHint}>
                Click or tap the image above
              </span>{" "}
              to download the brochure. Once inside the document you can use the{" "}
              <em>zoom feature</em> to increase or decrease the document size to
              a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex06"
        explicitPrevious
        overviewHref="/amexoverview"
        nextHref="/amex08"
      />
    </>
  );
}
