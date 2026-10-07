import type { ReactNode } from "react";
import Image from "next/image";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/illinoisTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

const ILLINOIS_HERO = {
  src: "/images/illinoisoverview/hero-banner.jpg",
  alt: "Illinois Pavilion at the 1964/1965 New York World’s Fair",
  width: 1905,
  height: 826,
} as const;

export type IllinoisTopicPageProps = {
  titleId: string;
  /** Plain title bar text when `titleNode` is omitted. */
  title?: string;
  /** Custom title bar content (italics, subtitle). */
  titleNode?: ReactNode;
  children: ReactNode;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
  /** Wider article column (legacy 910px tables). */
  wide?: boolean;
};

/**
 * Illinois custom topic pages (05–13) — hero → nav → navy title → body → Nav2Bar.
 */
export function IllinoisTopicPage({
  titleId,
  title,
  titleNode,
  children,
  previousHref,
  nextHref,
  overviewHref = "/illinoisoverview",
  wide = false,
}: IllinoisTopicPageProps) {
  return (
    <>
      <section className={styles.hero} aria-label="Illinois Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={ILLINOIS_HERO.src}
            alt={ILLINOIS_HERO.alt}
            width={ILLINOIS_HERO.width}
            height={ILLINOIS_HERO.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IllinoisNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {titleNode ?? title}
          </h1>
        </header>

        <div
          className={
            wide
              ? `${styles.articleInner} ${styles.wideInner}`
              : styles.articleInner
          }
        >
          {children}
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
