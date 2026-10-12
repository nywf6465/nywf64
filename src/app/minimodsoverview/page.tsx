import type { Metadata } from "next";
import Image from "next/image";
import { MinimodNavChrome } from "@/components/MinimodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./minimodsoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Miniature Models of the Fair — Overview — nywf64.com",
  description:
    "Rare miniature models of the 1964/1965 New York World’s Fair — an unusual Fair legacy on nywf64.com.",
};

/**
 * Miniature Models of the Fair overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /legaciesoverview / /fair_airoverview).
 * Shared minihero is reused on later minimod pages.
 */
export default function MinimodOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Miniature Models of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/minimod/minihero.jpg"
            alt="Miniature Models of the Fair — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MinimodNavChrome />

      <section
        className={styles.overview}
        aria-label="Miniature Models of the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Every once in a while an unusual legacy of the Fair pops up and
              we&apos;ve just got to talk about it! Such is the case with the{" "}
              <strong>
                <em>mini models!</em>
              </strong>{" "}
              Take a look at these rare and wonderful collectibles.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/minimodsoverview/photo.jpg"
              alt="Miniature architectural models of New York World’s Fair pavilions with an architect’s scale"
              width={1536}
              height={1024}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/minimodsoverview"
        nextHref="/minimod01"
      />
    </>
  );
}
