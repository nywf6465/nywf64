import type { Metadata } from "next";
import Image from "next/image";
import { LegaciesNavChrome } from "@/components/LegaciesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./legaciesoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Fair that Survived — Overview — nywf64.com",
  description:
    "Find where the Legacies of the 1964/1965 New York World’s Fair survive in buildings and artifacts salvaged from the Fair — on nywf64.com.",
};

/**
 * The Fair that Survived overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /booksoverview / /fair_airoverview).
 * Shared legacieshero is reused on later legacies pages.
 */
export default function LegaciesOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="The Fair that Survived">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/legacies/legacieshero.jpg"
            alt="The Fair that Survived — legacies of the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LegaciesNavChrome />

      <section
        className={styles.overview}
        aria-label="The Fair that Survived overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A roadsign in Michigan ... executive offices at a Missouri Lodge
              ... a radio station in Wisconsin. Find out where the{" "}
              <strong>Legacies</strong> of the New York World&apos;s Fair can be
              found in buildings and artifacts salvaged from the Fair.
            </p>
            <p className={styles.body}>
              It should be noted that this list of surviving legacies of the
              fair was recorded prior to 2010 and some of them may no longer
              exist. For example, the fate of the glide-a-ride vehicles is
              currently unknown. We also know that the former Austria pavilion
              has been destroyed by fire. If you know that a building or object
              still exists, drop me a line using the contact feature. I will
              update this presentation with that information.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/legaciesoverview/photo.jpg"
              alt="Surviving pavilion from the 1964/1965 New York World’s Fair"
              width={1505}
              height={1045}
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
        overviewHref="/legaciesoverview"
        nextHref="/legacies01"
      />
    </>
  );
}
