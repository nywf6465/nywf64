import type { Metadata } from "next";
import Image from "next/image";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ford20.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A Favorite Souvenir — Ford — nywf64.com",
  description:
    "Ford Pavilion glow-in-the-dark state lapel pin souvenir — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — A Favorite Souvenir.
 * Body from legacy ford20.html.
 */
export default function Ford20Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Ford Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fordoverview/hero-banner.jpg"
            alt="Ford Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FordNavChrome />

      <article className={styles.article} aria-labelledby="ford20-title">
        <header className={styles.titleBar}>
          <h1 id="ford20-title" className={styles.titleBarMain}>
            A Favorite Souvenir
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/ford20/ford54.jpg"
              alt="Souvenir Pin"
              width={214}
              height={208}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <strong>
                Thank You for visiting the Ford Motor Company Pavilion
              </strong>
              <span>
                A favorite souvenir of the Fair, these glow-in-the-dark lapel
                pins were handed out to visitors to the Ford Pavilion -- a
                different plastic pin for every state.
              </span>
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ford19"
        explicitPrevious
        overviewHref="/fordoverview"
        nextHref="/ford21"
      />
    </>
  );
}
