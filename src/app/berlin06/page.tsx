import type { Metadata } from "next";
import Image from "next/image";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./berlin06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A Spherical View of Berlin — Berlin — nywf64.com",
  description:
    "Business Screen Magazine report on the Berlin Pavilion’s spherical projection system — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Berlin — A Spherical View of Berlin.
 * Body from legacy berlin06.html (custom magazine reprint — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → BerlinNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Last Berlin topic: NEXT returns to /berlinoverview.
 */
export default function Berlin06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Berlin">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/berlinoverview/hero-banner.jpg"
            alt="Berlin at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BerlinNavChrome />

      <article className={styles.article} aria-labelledby="berlin06-title">
        <header className={styles.titleBar}>
          <h1 id="berlin06-title" className={styles.titleBarMain}>
            A Spherical View of Berlin
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.heroFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/berlin06/berlin02.jpg"
                alt="Berlin Pavilion"
                width={600}
                height={191}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.heroCaption}>
              The Berlin Pavilion at New York Fair features [a] spherical
              projection system ...
            </figcaption>
          </figure>

          <div className={styles.spread}>
            <div className={styles.spreadLeft}>
              <h2 className={styles.spreadTitle}>Spherical View of Berlin</h2>
              <p>
                <span className={styles.dropCap}>W</span>EST BERLINERS going
                about their daily chores are pictured in the cartoon film
                projected on a novel, spherical globe in the City&apos;s Pavilion
                at the Fair. Another short film takes up technological
                productivity; maps with special lighting effects portray the
                Berlin of the future.
              </p>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/berlin06/berlin03.jpg"
                    alt="Spherical project in Berlin Pavilion"
                    width={300}
                    height={469}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
            </div>

            <figure className={styles.drawing}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/berlin06/berlin04.jpg"
                  alt="Technical drawing of film projection"
                  width={280}
                  height={521}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.drawingCaption}>
                Left: <em>this translucent sphere carries a cartoon film about
                life in West Berlin. It has an approximate four-ft. diameter.</em>{" "}
                Above: <em>our own sketch shows how images are reflected upwards
                through Plexiglas tube from 35mm (German-made) repeater projector
                down below floor. A Zeiss lens; 45-degree mirror are used.</em>
              </figcaption>
            </figure>
          </div>

          <p className={styles.source}>
            SOURCE: <em>Business Screen Magazine</em> World&apos;s Fair Report
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/berlin05"
        explicitPrevious
        overviewHref="/berlin01"
        nextHref="/berlin01"
      />
    </>
  );
}
