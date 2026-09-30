import type { Metadata } from "next";
import Image from "next/image";
import { RmHero } from "@/components/RmHero";
import { RmNavChrome } from "@/components/RmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rm03.module.css";

export const metadata: Metadata = {
  title: "Booklet: The Fair, The City and The Critics — nywf64.com",
  description:
    "Download the booklet The Fair, The City and The Critics — from the Robert Moses pages at nywf64.com.",
};

const BOOKLET_PDF = "/pdf/rm/the-fair-the-city-the-critics.pdf";

/**
 * Robert Moses page stack (modeled on rm01):
 * site header → hero → RM nav → booklet body → nav2 → site footer
 *
 * Body imported from legacy rm04.html, remapped to /rm03.
 */
export default function Rm03Page() {
  return (
    <>
      <RmHero />

      <RmNavChrome />

      <article className={styles.article} aria-labelledby="rm03-title">
        <header className={styles.titleBar}>
          <h1 id="rm03-title" className={styles.titleBarMain}>
            Booklet:{" "}
            <em>The Fair, The City and The Critics</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverWrap}>
            <a
              className={styles.coverLink}
              href={BOOKLET_PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Download booklet: The Fair, The City and The Critics (PDF)"
            >
              <Image
                src="/images/rm03/rm4.jpg"
                alt="Cover of The Fair, The City and The Critics booklet"
                width={133}
                height={200}
                className={styles.cover}
                unoptimized
              />
            </a>
          </div>

          <div className={styles.body}>
            <p>
              The booklet has been saved in <strong>PDF format</strong>.{" "}
              <span className={styles.tapHint}>
                Click or tap the image above
              </span>{" "}
              to download the booklet. Once inside the document you can choose
              to print the document or use the{" "}
              <em>zoom feature (+ or -)</em> to increase or decrease the
              document size to a comfortable viewing level.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/rm02" nextHref="/rm03" />
    </>
  );
}
