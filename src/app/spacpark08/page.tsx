import type { Metadata } from "next";
import Image from "next/image";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { SpacparkEssayBlocks } from "@/components/SpacparkEssayBlocks";
import { SPACPARK08_BLOCKS } from "./blocks";
import styles from "./spacpark08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The US Space Park — Space Park — nywf64.com",
  description:
    "Science at the Fair — United States Space Park reprint from the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Spacpark08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Space Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spacparkoverview/hero-banner.jpg"
            alt="Space Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpacparkNavChrome />

      <article className={styles.article} aria-labelledby="spacpark08-title">
        <header className={styles.titleBar}>
          <h1 id="spacpark08-title" className={styles.titleBarMain}>
            The US Space Park
          </h1>
        </header>

        <div className={styles.articleInner}>
          <SpacparkEssayBlocks
            blocks={SPACPARK08_BLOCKS}
            imageDir="/images/spacpark08"
            styles={styles}
          />
          <p className={styles.source}>
            Photos by <em>Peter A. Leavens</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/spacpark07"
        explicitPrevious
        overviewHref="/spacparkoverview"
        nextHref="/spacpark09"
      />
    </>
  );
}
