import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica18.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A World's Fair House in Sheboygan? — Formica — nywf64.com",
  description:
    "A World's Fair House in Sheboygan? at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — A World's Fair House in Sheboygan?.
 * Body from legacy formica18.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica18Page() {
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

      <article className={styles.article} aria-labelledby="formica18-title">
        <header className={styles.titleBar}>
          <h1 id="formica18-title" className={styles.titleBarMain}>
            A World&apos;s Fair House in <em>Sheboygan?</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"A World's Fair House in Sheboygan?"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica18/formica59.jpg"
              alt="Sheboygan World's Fair House"
              width={375}
              height={268}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Sheboygan, Wisconsin's World's Fair House circa August, 2002"}</figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica18/formica60.jpg"
              alt="Sheboygan World's Fair House"
              width={375}
              height={253}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Today, the World's Fair House resembles any number of Ranch Home styles of construction that were popular during the 1960s. Richard Ballschmider, the contractor for the home, was a Sheboygan area home builder. Mr. Ballschmider is now deceased."}</figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica18/formica62.jpg"
              alt="Sheboygan World's Fair House"
              width={375}
              height={255}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"The \"cache\" of World's Fair House is not what sells this home. In fact, its location is only one lot from the Lake Michigan shoreline, high on a bluff overlooking the Lake, with a spectacular view. THAT is what makes this home so special today in Sheboygan!"}</figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica18/formica61.jpg"
              alt="Sheboygan World's Fair House"
              width={375}
              height={270}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"The back yard of Sheboygan's World's Fair House . Notice the skylights? The back of the house actually resembles the floorplan described in the commemorative book more so than the front!"}</figcaption>
          </figure>
          <p className={styles.sectionHead}>{"How About a World's Fair House in Oklahoma City?"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica18/formica65.jpg"
              alt="Lakehurst, OK World's Fair House?"
              width={460}
              height={345}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Lakehurst, Oklahoma World's Fair House!"}</figcaption>
            <p className={styles.source}>{"Source: © 2007 Roy L. Thomas - All Rights Reserved"}</p>
          </figure>
          <p className={styles.caption} style={{ fontStyle: "italic" }}>{"Left: Formica Floorplan Right: Lakehurst, OK Floorplan"}</p>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica18/formica10.jpg"
                alt="Formica Floorplan"
                width={200}
                height={144}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica18/formica66.jpg"
                alt="Lakehurst Floorplan"
                width={200}
                height={113}
                className={styles.photoImgPlain}
                unoptimized
              />
            </figure>
          </div>
          <p className={styles.caption} style={{ fontStyle: "italic" }}>{"And a World's Fair House in Janesville, Wisconsin!"}</p>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica18/formica67.jpg"
                alt="Janesville Formica House"
                width={375}
                height={281}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica18/formica68.jpg"
                alt="Janesville Formica House"
                width={375}
                height={281}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica18/formica69.jpg"
                alt="Janesville Formica House"
                width={375}
                height={281}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica18/formica70.jpg"
                alt="Janesville Formica House"
                width={281}
                height={375}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <p className={styles.sectionHead}>{"And a World's Fair House in Janesville, Wisconsin!"}</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica17"
        overviewHref="/formicaoverview"
        nextHref="/formica19"
      />
    </>
  );
}
