import type { Metadata } from "next";
import Image from "next/image";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { SpacparkEssayBlocks } from "@/components/SpacparkEssayBlocks";
import { SPACPARK12_BLOCKS } from "./blocks";
import styles from "./spacpark12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue — Space Park — nywf64.com",
  description:
    "Epilogue: A Park in Ruin by Bill Young — the legacy of the U.S. Space Park after the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Spacpark12Page() {
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

      <article className={styles.article} aria-labelledby="spacpark12-title">
        <header className={styles.titleBar}>
          <h1 id="spacpark12-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <SpacparkEssayBlocks
            blocks={SPACPARK12_BLOCKS}
            imageDir="/images/spacpark12"
            styles={styles}
          />
          <p className={styles.date}>Bradd Schiffman, June, 2002</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/spacpark11"
        explicitPrevious
        overviewHref="/spacparkoverview"
        nextHref="/spacparkoverview"
      />
    </>
  );
}
