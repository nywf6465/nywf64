import type { Metadata } from "next";
import Image from "next/image";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { Johwax16ArticleContent } from "./articleContent";
import styles from "./johwax16.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Article: World's Fair Jewel Gets a New Setting — Johnson Wax — nywf64.com",
  description:
    "Article: World's Fair Jewel Gets a New Setting — Johnson Wax Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax16Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Johnson Wax Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={JOHWAX_HERO.src}
            alt={JOHWAX_HERO.alt}
            width={JOHWAX_HERO.width}
            height={JOHWAX_HERO.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JohwaxNavChrome />

      <article className={styles.article} aria-labelledby="johwax16-title">
        <header className={styles.titleBar}>
          <h1 id="johwax16-title" className={styles.titleBarMain}>
            Article: World&apos;s Fair Jewel Gets a New Setting
          </h1>
        </header>
        <div className={styles.articleInner}>
          <Johwax16ArticleContent />
        </div>
      </article>

      <Nav2Bar
        previousHref="/johwax15"
        explicitPrevious
        overviewHref="/johwaxoverview"
        nextHref="/johwax17"
      />
    </>
  );
}
