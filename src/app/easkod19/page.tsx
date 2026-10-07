import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "World's Fair Flash Camera — Eastman Kodak — nywf64.com",
  description:
    "Kodak World's Fair Flash Camera souvenir — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak World's Fair Flash Camera page.
 * Body from legacy easkod19.html.
 */
export default function Easkod19Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod19-title">
        <header className={styles.titleBar}>
          <h1 id="easkod19-title" className={styles.titleBarMain}>
            World&apos;s Fair Flash Camera
          </h1>
        </header>
        <div className={styles.articleInner}>
          <p className={`${styles.kicker} ${styles.center}`}>
            <span className={styles.underline}>KODAK</span> WORLD&apos;S FAIR
            FLASH CAMERA
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod19/kod42.jpg"
              alt="Kodak World's Fair Flash Camera"
              width={232}
              height={276}
              className={styles.figureImg}
              unoptimized
            />
          </figure>
          <p className={styles.source}>
            The Fair is full of fun -- and here&apos;s the smart, sturdy souvenir
            camera specially designed by Kodak to capture it all in pictures.
            New, compact and easy to use, the Kodak World&apos;s Fair Flash
            Camera takes color slides, color snapshots and black-and-white -
            indoors and out. No need to focus. No need to set lens opening. Just
            aim and shoot! built-in flash holder. And the box is a beautiful
            souvenir in itself! Less than $8.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod18"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod20"
      />
    </>
  );
}
