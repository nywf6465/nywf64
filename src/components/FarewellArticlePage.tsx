import type { ReactNode } from "react";
import Image from "next/image";
import { FarewellNavChrome } from "@/components/FarewellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/components/farewellArticlePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type FarewellArticlePageProps = {
  pageNum: number;
  title: string;
  previousHref: string;
  nextHref: string;
  children: ReactNode;
};

/**
 * Shared layout for The End of the Fair article pages
 * (legacy farewell02–farewell11 → /farewell01–/farewell10).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export function FarewellArticlePage({
  pageNum,
  title,
  previousHref,
  nextHref,
  children,
}: FarewellArticlePageProps) {
  const titleId = `farewell${String(pageNum).padStart(2, "0")}-title`;

  return (
    <>
      <section className={styles.hero} aria-label="The End of the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/farewell/farewellhero.jpg"
            alt="The End of the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FarewellNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>{children}</div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        nextHref={nextHref}
      />
    </>
  );
}
