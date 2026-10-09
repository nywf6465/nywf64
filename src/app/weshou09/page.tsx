import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import shared from "../weshou/weshouArticle.module.css";
import styles from "./weshou09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Book of Record — Westinghouse — nywf64.com",
  description:
    "Download The Book of Record of the Time Capsule of Cupaloy — Westinghouse at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse — The Book of Record (PDF). Adobe Reader paragraph/logo omitted.
 */
export default function Weshou09Page() {
  return (
    <>
      <section className={shared.hero} aria-label="Westinghouse">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <article className={shared.article} aria-labelledby="weshou09-title">
        <header className={shared.titleBar}>
          <h1 id="weshou09-title" className={shared.titleBarMain}>
            <em>The Book of Record</em>
          </h1>
        </header>

        <div className={shared.articleInner}>
          <div className={shared.coversRow}>
            <figure className={shared.coverFigure}>
              <Image
                src="/images/weshou09/weshou02.jpg"
                alt="Cover of The Book of Record"
                width={242}
                height={350}
                className={shared.photoImg}
                unoptimized
              />
              <figcaption className={shared.coverCaption}>
                <em>A cover of hand-made paper and an aluminum title</em>
              </figcaption>
            </figure>
            <figure className={shared.coverFigure}>
              <Image
                src="/images/weshou09/weshou44.jpg"
                alt="Cover of the Book of Record"
                width={242}
                height={350}
                className={shared.photoImg}
                unoptimized
              />
              <figcaption className={shared.coverCaption}>
                <em>A cover of blue buckram and a title of solid gold</em>
              </figcaption>
            </figure>
          </div>

          <hr className={shared.rule} />

          <div className={shared.pdfPanel}>
            <p className={shared.pdfTitle}>The Book of Record of</p>
            <p className={shared.pdfTitle}>THE TIME CAPSULE of Cupaloy</p>
            <p className={styles.downloadSize}>Download Size: 35Mb</p>
            <Link
              href="/pdf/weshou/book-of-record.pdf"
              className={shared.pdfDownloadLink}
              aria-label="Download The Book of Record of the Time Capsule of Cupaloy (PDF)"
            >
              Download PDF
            </Link>
          </div>

          <p className={shared.source}>
            SOURCE: The Book of Record of THE TIME CAPSULE of Cupaloy, ©
            Copyright 1938 Westinghouse Electric &amp; Manufacturing Company
            New York
          </p>
          <p className={shared.source}>
            Presented Courtesy of David Oats and Greg Godfrey - The Flushing
            Meadows-Corona Park World&apos;s Fair Association
          </p>
          <p className={shared.source}>© Copyright 2007</p>
          <p className={styles.contact}>
            Contact{" "}
            <a href="mailto:pitbull@theparkwatchdog.org?subject=Reviving NYS Pavilion">
              pitbull@theparkwatchdog.org
            </a>{" "}
            for permission to reprint or use, or to submit your comments.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/weshou08"
        overviewHref="/weshouoverview"
        nextHref="/weshou10"
      />
    </>
  );
}
