import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/hollywoodLegacyTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

const HOLLYWOOD_HERO = {
  src: "/images/hollywoodoverview/hero-banner.jpg",
  alt: "Hollywood at the 1964/1965 New York World’s Fair",
  width: 1905,
  height: 826,
} as const;

export type HollywoodLegacyTopicPageProps = {
  title: string;
  titleId: string;
  nav: ReactNode;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
  children: ReactNode;
  /** Souvenir program source line (legacy holwod06–15). */
  source?: ReactNode;
};

export function HollywoodLegacyTopicPage({
  title,
  titleId,
  nav,
  previousHref,
  nextHref,
  overviewHref = "/hollywoodoverview",
  children,
  source,
}: HollywoodLegacyTopicPageProps) {
  return (
    <>
      <section className={styles.hero} aria-label="Hollywood">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={HOLLYWOOD_HERO.src}
            alt={HOLLYWOOD_HERO.alt}
            width={HOLLYWOOD_HERO.width}
            height={HOLLYWOOD_HERO.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      {nav}

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          {children}
          {source ? <p className={styles.source}>{source}</p> : null}
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

export { HOLLYWOOD_HERO };
