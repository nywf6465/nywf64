import type { Metadata } from "next";
import Image from "next/image";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./thai05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Thailand Travel Talk — Thailand — nywf64.com",
  description:
    "Thailand Travel Talk brochure scans from the Thailand pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand Travel Talk — stitched brochure scan from legacy thai05.html.
 * Legacy 3×3 tiles are composed into one image (china07 / unisph12 pattern)
 * so no grid seam lines run through the scan.
 * Stack: hero → ThaiNavChrome → navy title bar → brochure → Nav2Bar.
 */
export default function Thai05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Thailand">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/thaioverview/hero-banner.jpg"
            alt="Thailand pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ThaiNavChrome />

      <article className={styles.article} aria-labelledby="thai05-title">
        <div className={styles.titleBar} id="thai05-title">
          Thailand Travel Talk
        </div>
        <div className={styles.body}>
          <div className={styles.frame}>
            <Image
              src="/images/thai05/thailand-travel-talk.jpg"
              alt="Thailand Travel Talk brochure — Tourist Organization of Thailand special number for the New York World’s Fair"
              width={902}
              height={1168}
              className={styles.brochure}
              sizes="(max-width: 910px) 100vw, 900px"
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/thai04"
        explicitPrevious
        overviewHref="/thaioverview"
        nextHref="/thaioverview"
      />
    </>
  );
}
