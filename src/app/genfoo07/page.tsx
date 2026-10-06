import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoo07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Brochure: General Foods at the New York World's Fair — General Foods Arches — nywf64.com",
  description:
    "Page scans from the brochure General Foods at the New York World's Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches — Brochure: General Foods at the New York World's Fair.
 * Body from legacy genfoo07.html (page-scan brochure; not the PDF BrochurePage).
 * Adobe Reader chrome omitted (none in legacy body beyond scans).
 * Stack: hero → GenfooNavChrome → navy title → article → Nav2Bar.
 */
export default function Genfoo07Page() {
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

      <article className={styles.article} aria-labelledby="genfoo07-title">
        <header className={styles.titleBar}>
          <h1 id="genfoo07-title" className={styles.titleBarMain}>
            Brochure: General Foods at the New York World&apos;s Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.stack}>
            <div className={styles.blockNarrow}>
              <div className={styles.col1}>
              <Image
                src="/images/genfoo07/gf20.01.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf20.02.jpg"
                alt=""
                width={350}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf20.03.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf20.04.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.col2}>
              <Image
                src="/images/genfoo07/gf21.01.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.02.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.03.jpg"
                alt=""
                width={351}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.04.jpg"
                alt=""
                width={350}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.05.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.06.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.07.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf21.08.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.col2}>
              <Image
                src="/images/genfoo07/gf22.01.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.02.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.03.jpg"
                alt=""
                width={351}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.04.jpg"
                alt=""
                width={350}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.05.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.06.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.07.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf22.08.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.col2}>
              <Image
                src="/images/genfoo07/gf23.01.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.02.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.03.jpg"
                alt=""
                width={351}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.04.jpg"
                alt=""
                width={350}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.05.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.06.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.07.jpg"
                alt=""
                width={351}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf23.08.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              </div>
            </div>

            <div>
              <div className={styles.blockNarrow}>
                <div className={styles.col1}>
              <Image
                src="/images/genfoo07/gf24.01.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf24.02.jpg"
                alt=""
                width={350}
                height={216}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf24.03.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
              <Image
                src="/images/genfoo07/gf24.04.jpg"
                alt=""
                width={350}
                height={215}
                className={styles.pageImg}
                unoptimized
              />
                </div>
              </div>
              <p className={styles.blockSource}>
                SOURCE: Brochure: 
                <em>General Foods at the New York World&apos;s Fair</em>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genfoo06"
        overviewHref="/genfoooverview"
        nextHref="/genfoo08"
      />
    </>
  );
}
