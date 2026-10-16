import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WolfeNavChrome } from "@/components/WolfeNavChrome";
import styles from "@/styles/wolfeSlidePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type WolfeSlidePageProps = {
  /** Five-digit Wolfe catalog number, e.g. "79000". */
  slideId: string;
  /** Navy title bar text, e.g. "Slide 79000 - Unisphere and Fountains at Dusk". */
  title: string;
  titleId?: string;
  image: { src: string; width: number; height: number; alt?: string };
  /** Sky-blue caption under the photo (legacy plate line). */
  caption: string;
  previousHref: string;
  nextHref: string;
};

/**
 * Wolfe Worldwide Films individual slide (legacy wolfeNNNNN.html).
 * Stack: wolfehero → WolfeNavChrome → navy title → slide plate → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export function WolfeSlidePage({
  slideId,
  title,
  titleId = `wolfe${slideId}-title`,
  image,
  caption,
  previousHref,
  nextHref,
}: WolfeSlidePageProps) {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Wolfe Worldwide Films Slide Series"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wolfe/wolfehero.jpg"
            alt="The Wolfe Worldwide Films Slide Series — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WolfeNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plate} role="group" aria-label={`Slide ${slideId}`}>
            <p className={styles.plateLabel}>WOLFE WORLDWIDE FILMS</p>
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
              className={styles.slideImage}
              unoptimized
            />
            <p className={styles.caption}>{caption}</p>
          </div>
          <p className={styles.credit}>
            Image 2002 PHOTO NETWORK - NO Unauthorized Reproduction is Permitted
          </p>
          <p className={styles.credit}>
            WebPage 2002 nywf64.com - NO Unauthorized Reproduction is Permitted
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/wolfeoverview"
        nextHref={nextHref}
      />
    </>
  );
}
