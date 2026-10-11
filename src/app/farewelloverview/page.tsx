import type { Metadata } from "next";
import Image from "next/image";
import { FarewellNavChrome } from "@/components/FarewellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./farewelloverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The End of the Fair — Overview — nywf64.com",
  description:
    "The End of the Fair overview — the final days, demolition, and post-Fair restoration of Flushing Meadows-Corona Park on nywf64.com.",
};

/**
 * The End of the Fair overview — follows the **overview** prototype
 * (same stack as /fair_eraoverview / /fair_airoverview).
 * Shared farewellhero is reused on later farewell pages.
 */
export default function FarewellOverviewPage() {
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

      <section
        className={styles.overview}
        aria-label="The End of the Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              After years of planning and construction and two seasons of
              operation, the 1964/1965 New York World&apos;s Fair came to a
              close on October 17th, 1965. The world had beaten a path to its
              door and now it was time to return the land it had occupied to
              the natives. Learn of the Fair&apos;s final days, its demoliton
              and the post-Fair restoration of Flushing Meadows-Corona Park.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/farewelloverview/photo.jpg"
              alt="The End of the Fair"
              width={150}
              height={169}
              sizes="(max-width: 720px) 100vw, 22rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        overviewHref="/farewelloverview"
        nextHref="/farewell01"
      />
    </>
  );
}
