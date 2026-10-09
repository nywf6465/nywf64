import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevup08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "1965 Menu — Seven-Up — nywf64.com",
  description:
    "1965 menu for The Seven-Up International Sandwich Gardens — 1964/1965 New York World’s Fair on nywf64.com.",
};

const MENU_FOLDS = [
  { src: "/images/sevup08/sevup15.jpg", alt: "1965 menu fold 1" },
  { src: "/images/sevup08/sevup16.jpg", alt: "1965 menu fold 2" },
  { src: "/images/sevup08/sevup17.jpg", alt: "1965 menu fold 3" },
  { src: "/images/sevup08/sevup18.jpg", alt: "1965 menu fold 4" },
  { src: "/images/sevup08/sevup19.jpg", alt: "1965 menu fold 5" },
  { src: "/images/sevup08/sevup20.jpg", alt: "1965 menu fold 6" },
] as const;

/**
 * Seven-Up — 1965 Menu.
 * Body from legacy sevup08.html (stacked menu folds + souvenir napkin).
 *
 * Stack: hero → SevupNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sevup08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <article className={styles.article} aria-labelledby="sevup08-title">
        <header className={styles.titleBar}>
          <h1 id="sevup08-title" className={styles.titleBarMain}>
            1965 Menu
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.stack} role="group" aria-label="1965 menu pages">
            {MENU_FOLDS.map((fold) => (
              <Image
                key={fold.src}
                src={fold.src}
                alt={fold.alt}
                width={600}
                height={275}
                className={styles.stackImg}
                unoptimized
              />
            ))}
          </div>
          <p className={styles.source}>
            SOURCE: 1965 Menu for The Seven-Up International Sandwich Gardens
          </p>

          <hr className={styles.rule} />

          <figure className={styles.napkin}>
            <span className={styles.napkinFrame}>
              <Image
                src="/images/sevup08/sevup45b.jpg"
                alt="Paper napkin souvenir of the 7-Up International Sandwich Gardens"
                width={500}
                height={300}
                className={styles.napkinImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.napkinCaption}>
              Paper Napkin - Souvenir of the 7-Up International Sandwich Gardens
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sevup07"
        explicitPrevious
        overviewHref="/sevupoverview"
        nextHref="/sevup09"
      />
    </>
  );
}
