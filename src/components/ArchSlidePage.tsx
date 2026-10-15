import type { ReactNode } from "react";
import Image from "next/image";
import { ArchNavChrome } from "@/components/ArchNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/archSlidePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type ArchSlidePageProps = {
  slideId: number;
  /** Navy title bar text, e.g. "Slide 5401 - Unisphere". */
  title: string;
  titleId?: string;
  image: { src: string; width: number; height: number; alt?: string };
  /** Caption lines under the slide image (legacy bold Arial lines). */
  captions: ReactNode[];
  previousHref?: string;
  /** When set, Nav2 shows NEXT to this slide; otherwise NEXT is hidden. */
  nextHref?: string;
};

/**
 * Architectural Series individual slide (legacy archNNNN.html).
 * Stack: archhero → ArchNavChrome → navy title → slide plate → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * PREVIOUS defaults to the slide tray; optional NEXT for slide-to-slide.
 */
export function ArchSlidePage({
  slideId,
  title,
  titleId = `arch${slideId}-title`,
  image,
  captions,
  previousHref = "/archtray",
  nextHref,
}: ArchSlidePageProps) {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Architectural Series of Slides"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/arch/archhero.jpg"
            alt="The Architectural Series of Slides — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArchNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.plate} role="group" aria-label={`Slide ${slideId}`}>
            <div className={styles.headers}>
              <p>ARCHITECT&apos;S RENDERINGS</p>
              <p>NEW YORK WORLD&apos;S FAIR 1964-1965</p>
              <p>ATTRACTIONS</p>
            </div>
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
              className={styles.slideImage}
              unoptimized
            />
            <div className={styles.captions}>
              {captions.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
          <p className={styles.credit}>PHOTO LAB, INC.</p>
          <p className={styles.credit}>
            NO Unauthorized Reproduction is Permitted
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/archoverview"
        nextHref={nextHref}
        hideNext={!nextHref}
      />
    </>
  );
}
