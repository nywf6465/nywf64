import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoo09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Article: Archways to Understanding — General Foods Arches — nywf64.com",
  description:
    "Industrial Photography article Archways to Understanding — General Foods Arches at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches — Article: Archways to Understanding.
 * Body from legacy genfoo09.html (page-scan article reprint).
 * Stack: hero → GenfooNavChrome → navy title → article → Nav2Bar.
 */
export default function Genfoo09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Foods Arches">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/genfoooverview/hero-banner.jpg"
            alt="General Foods Arches at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GenfooNavChrome />

      <article className={styles.article} aria-labelledby="genfoo09-title">
        <header className={styles.titleBar}>
          <h1 id="genfoo09-title" className={styles.titleBarMain}>
            Article: Archways to Understanding
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.stack}>
            <div className={styles.grid3}>
            <Image
              src="/images/genfoo09/gf25.01.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.02.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.03.jpg"
              alt=""
              width={300}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.04.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.05.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.06.jpg"
              alt=""
              width={300}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.07.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.08.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.09.jpg"
              alt=""
              width={300}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.10.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.11.jpg"
              alt=""
              width={301}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf25.12.jpg"
              alt=""
              width={300}
              height={354}
              className={styles.pageImg}
              unoptimized
            />
            </div>
            <div>
              <div className={styles.grid3}>
            <Image
              src="/images/genfoo09/gf26.01.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.02.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.03.jpg"
              alt=""
              width={300}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.04.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.05.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.06.jpg"
              alt=""
              width={300}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.07.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.08.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.09.jpg"
              alt=""
              width={300}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.10.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.11.jpg"
              alt=""
              width={301}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
            <Image
              src="/images/genfoo09/gf26.12.jpg"
              alt=""
              width={300}
              height={314}
              className={styles.pageImg}
              unoptimized
            />
              </div>
              <p className={styles.source}>
                Source: INDUSTRIAL PHOTOGRAPHY, Vol. 13, No. 5, May 1964
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genfoo08"
        overviewHref="/genfoooverview"
        nextHref="/genfoo10"
      />
    </>
  );
}
