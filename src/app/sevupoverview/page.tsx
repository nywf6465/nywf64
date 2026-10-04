import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevupoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Seven-Up — Overview — nywf64.com",
  description:
    "Seven-Up overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Seven-Up overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SevupOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <section className={styles.overview} aria-label="Seven-Up overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This open-air cafe offers musical entertainment and an
              international sandwich buffet.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sevupoverview/photo.jpg"
              alt="Seven-Up International Sandwich Gardens at the 1964/1965 New York World’s Fair"
              width={1382}
              height={1138}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sevupoverview"
        overviewHref="/sevupoverview"
        nextHref="/sevup01"
      />
    </>
  );
}
