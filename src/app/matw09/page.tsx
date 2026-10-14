import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 10 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 10 of Men at Work — Luciano Guarnieri sketches including the Vatican Pavilion from the Transportation Area at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const PLAIN_IMAGES = [
  {
    src: "/images/matw09/matw43.jpg",
    width: 560,
    height: 294,
    alt: "Men at Work — construction sketch introducing Page 10",
  },
  {
    src: "/images/matw09/matw21.jpg",
    width: 590,
    height: 276,
    alt: "Men at Work — construction sketch of Fair site work",
  },
  {
    src: "/images/matw09/matw32.jpg",
    width: 590,
    height: 211,
    alt: "Men at Work — construction sketch of pavilion framing",
  },
  {
    src: "/images/matw09/matw31.jpg",
    width: 500,
    height: 337,
    alt: "Men at Work — construction sketch of Fair building work",
  },
] as const;

/**
 * The “Men at Work” Book — Page 10.
 * Body from legacy MatW10.html.
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw09Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Men at Work Book"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/matw/matwhero.jpg"
            alt='The “Men at Work” Book — Official Art Book of the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MatwNavChrome />

      <article className={styles.article} aria-labelledby="matw09-title">
        <header className={styles.titleBar}>
          <h1 id="matw09-title" className={styles.titleBarMain}>
            Page 10
          </h1>
        </header>

        <div className={styles.articleInner}>
          {PLAIN_IMAGES.map((image) => (
            <div key={image.src} className={styles.plain}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.plainImage}
                sizes={`(max-width: 720px) 100vw, ${image.width}px`}
                unoptimized
              />
            </div>
          ))}

          <figure className={styles.plate}>
            <figcaption className={styles.plateLetter}>a.</figcaption>
            <Image
              src="/images/matw09/matw12.jpg"
              alt="Men at Work — The Vatican Pavilion from Transportation Area"
              width={590}
              height={288}
              className={`${styles.plateImage} ${styles.plateImageBordered}`}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </figure>

          <div className={styles.plain}>
            <Image
              src="/images/matw09/matw29.jpg"
              alt="Men at Work — construction sketch closing Page 10"
              width={590}
              height={241}
              className={styles.plainImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
          </div>

          <div className={styles.key}>
            <ul className={styles.keyList}>
              <li>a. The Vatican Pavilion from Transportation Area</li>
            </ul>
            <p className={styles.source}>
              SOURCE:{" "}
              <em>
                Official Art Book of the World&apos;s Fair New York 1964-1965
              </em>
              , Leo S. Olschki - Publisher, Florence (Italy)
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/matw08"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw10"
      />
    </>
  );
}
