import type { Metadata } from "next";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WolfeNavChrome } from "@/components/WolfeNavChrome";
import styles from "./wolfeoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Wolfe Worldwide Films Slide Series — Overview — nywf64.com",
  description:
    "Wolfe Worldwide Films color slides of the 1964/1965 New York World’s Fair — Bradd Schiffman collection on nywf64.com.",
};

/**
 * Wolfe Worldwide Films Slide Series overview — follows the overview prototype
 * (same stack as /archoverview). Hero canvas matches ibm01 (1905×826).
 * No Page notation (`wolfeoverview` is not a numbered route).
 */
export default function WolfeOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Wolfe Worldwide Films Slide Series"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wolfe/wolfehero.jpg"
            alt="The Wolfe Worldwide Films Slide Series — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WolfeNavChrome />

      <section
        className={styles.overview}
        aria-label="Wolfe Worldwide Films Slide Series overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <em>
                &quot;When you return home, fill in your collection with{" "}
                <strong>Wolfe slides</strong> to commemorate the New York
                World&apos;s Fair and show to your friends.&quot;
              </em>{" "}
              Now enjoy this popular collectible of the Fair on-line. The slide
              tray is set up with nearly 100 of these color slides to explore
              courtesy of the Bradd Schiffman collection.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/wolfeoverview/photo.jpg"
              alt="Wolfe Worldwide Films 79000 — Unisphere and Fountains at Dusk"
              width={1254}
              height={1254}
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
        overviewHref="/wolfeoverview"
        nextHref="/wolfetray"
      />
    </>
  );
}
