import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista05.module.css";
import { unista05Paragraphs } from "./unista05Paragraphs";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Executive Order 11014 — United States Pavilion — nywf64.com",
  description:
    "Executive Order 11014 delegating Commerce Department functions for U.S. participation in the 1964/1965 New York World’s Fair — nywf64.com.",
};

/**
 * United States Pavilion — Executive Order 11014.
 * Body from legacy unista05.html (text-only legal document).
 *
 * Stack: hero → UnistaNavChrome → navy title → article → Nav2Bar.
 */
export default function Unista05Page() {
  const closingStart = unista05Paragraphs.findIndex((p) =>
    p.startsWith("JOHN F. KENNEDY"),
  );
  const bodyParas =
    closingStart >= 0
      ? unista05Paragraphs.slice(0, closingStart)
      : unista05Paragraphs;
  const closingParas =
    closingStart >= 0 ? unista05Paragraphs.slice(closingStart) : [];

  const subtitle = bodyParas[0];
  const mainParas = bodyParas.slice(1);

  return (
    <>
      <section className={styles.hero} aria-label="United States Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unistaoverview/hero-banner.jpg"
            alt="United States Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnistaNavChrome />

      <article className={styles.article} aria-labelledby="unista05-title">
        <header className={styles.titleBar}>
          <h1 id="unista05-title" className={styles.titleBarMain}>
            Executive Order 11014
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.docTitle}>Executive Order 11014</h2>
          <p className={styles.docSubtitle}>{subtitle}</p>

          <div className={styles.body}>
            {mainParas.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {closingParas.length > 0 ? (
            <div className={styles.signature}>
              {closingParas.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      <Nav2Bar
        previousHref="/unista04"
        overviewHref="/unistaoverview"
        nextHref="/unista06"
      />
    </>
  );
}
