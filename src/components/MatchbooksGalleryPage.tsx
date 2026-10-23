import type { ReactNode } from "react";
import Image from "next/image";
import { MatchbooksHero } from "@/components/MatchbooksHero";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/matchbooksGalleryPage.module.css";

export type MatchbookImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type MatchbookSection = {
  heading: string;
  images: MatchbookImage[];
};

export type MatchbooksGalleryPageProps = {
  title: string;
  titleId?: string;
  nav: ReactNode;
  sections: MatchbookSection[];
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
};

/**
 * Matchbook gallery (“Exhibitor Matchbooks”, etc.).
 * Stack: MatchbooksHero → nav chrome → navy title → sections → Nav2Bar.
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export function MatchbooksGalleryPage({
  title,
  titleId = "matchbooks-title",
  nav,
  sections,
  previousHref,
  nextHref,
  overviewHref,
}: MatchbooksGalleryPageProps) {
  return (
    <>
      <MatchbooksHero />

      {nav}

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.sections}>
            {sections.map((section, sectionIndex) => (
              <section
                key={`${section.heading}-${sectionIndex}`}
                className={styles.section}
                aria-label={section.heading}
              >
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                <div className={styles.row}>
                  {section.images.map((image, index) => (
                    <div
                      key={`${section.heading}-${image.src}-${index}`}
                      className={styles.frame}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt ?? ""}
                        width={image.width}
                        height={image.height}
                        className={styles.image}
                        sizes="(max-width: 720px) 90vw, 200px"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref={overviewHref}
        nextHref={nextHref}
      />
    </>
  );
}
