import type { Metadata } from "next";
import Image from "next/image";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./florida08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "After the Fair — Florida — nywf64.com",
  description:
    "After the Fair — Florida Pavilion in the Chicago Tribune, February 18, 1966 — on nywf64.com.",
};

/**
 * Florida — After the Fair.
 * Body from legacy florida08.html (Chicago Tribune clipping).
 *
 * Stack: hero → FloridaNavChrome → navy title → image → Nav2Bar.
 * Last Florida topic: NEXT returns to /floridaoverview.
 */
export default function Florida08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Florida">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/floridaoverview/hero-banner.jpg"
            alt="Florida Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FloridaNavChrome />

      <article className={styles.article} aria-labelledby="florida08-title">
        <header className={styles.titleBar}>
          <h1 id="florida08-title" className={styles.titleBarMain}>
            After the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: "37.5rem" }}>
            <Image
              src="/images/florida08/florid08.jpg"
              alt="Chicago Tribune clipping about the Florida Pavilion after the Fair"
              width={600}
              height={669}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <span className={styles.capSource}>
                Source: <em>Chicago Tribune</em>, Friday, February 18, 1966
              </span>
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/florida07"
        explicitPrevious
        overviewHref="/floridaoverview"
        nextHref="/floridaoverview"
      />
    </>
  );
}
