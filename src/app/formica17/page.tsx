import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A World's Fair House in Ohio — Formica — nywf64.com",
  description:
    "A World's Fair House in Ohio at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — A World's Fair House in Ohio.
 * Body from legacy formica17.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica17Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <article className={styles.article} aria-labelledby="formica17-title">
        <header className={styles.titleBar}>
          <h1 id="formica17-title" className={styles.titleBarMain}>
            A World&apos;s Fair House in Ohio
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"A World's Fair House in Ohio"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica17/formica56.jpg"
              alt="World's Fair House in Cincinnati"
              width={500}
              height={167}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Thompson's Colonial in Terrace Park"}</figcaption>
          </figure>
          <p className={styles.introNote}>{"SOURCE: Cincinnati newspaper, unknown origin,circa 1964, Presented Courtesy of Carol C. Cole and husband Lee, of the Terrace Park Historical Survey ."}</p>
          <p className={styles.caption} style={{ fontStyle: "italic" }}>{"Flyer for the Terrace Park house, modified slightly for readability."}</p>
          <p className={styles.source}>{"SOURCE: Lee & Carol C. Cole"}</p>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica17/formica57a.jpg"
                alt="Cincinnati Floorplan - Panel 1"
                width={497}
                height={226}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica17/formica57b.jpg"
                alt="Cincinnati Floorplan - Panel 2"
                width={497}
                height={321}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica17/formica57c.jpg"
                alt="Cincinnati Floorplan - Panel 3"
                width={497}
                height={303}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/formica17/formica58.jpg"
              alt="Cincinnati World's Fair House c. 1998"
              width={497}
              height={308}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"The Terrace Park house as it appeared in 1998. Compare the tree in the front yard with its size in the 1964 newspaper photo above."}</figcaption>
            <p className={styles.source}>{"SOURCE: Photo presented Courtesy of Lee & Carol C. Cole"}</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica16"
        overviewHref="/formicaoverview"
        nextHref="/formica18"
      />
    </>
  );
}
