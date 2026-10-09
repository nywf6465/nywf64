import type { Metadata } from "next";
import Image from "next/image";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WESHOU15_BLOCKS } from "./contentBlocks";
import { renderLegacyBlocks } from "../weshou/renderLegacyBlocks";
import shared from "../weshou/weshouArticle.module.css";
import styles from "./weshou15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Essay: New York's sacred meadow — Westinghouse — nywf64.com",
  description:
    "Knute Berger’s essay on the Westinghouse time capsules and Flushing Meadows — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Weshou15Page() {
  return (
    <>
      <section className={shared.hero} aria-label="Westinghouse">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <article className={shared.article} aria-labelledby="weshou15-title">
        <header className={shared.titleBar}>
          <h1 id="weshou15-title" className={shared.titleBarMain}>
            Essay: <em>New York&apos;s sacred meadow</em>
          </h1>
          <p className={shared.titleBarByline}>... by Knute Berger</p>
        </header>

        <div className={shared.articleInner}>
          <p className={styles.subtitle}>
            <em>The vital legacy of the Westinghouse time capsules</em>
          </p>
          {renderLegacyBlocks(WESHOU15_BLOCKS)}
        </div>
      </article>

      <Nav2Bar
        previousHref="/weshou14"
        explicitPrevious
        overviewHref="/weshouoverview"
        nextHref="/weshouoverview"
      />
    </>
  );
}
