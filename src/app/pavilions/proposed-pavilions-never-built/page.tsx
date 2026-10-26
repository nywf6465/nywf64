import type { Metadata } from "next";
import Image from "next/image";
import { ProposedPavilionsLinks } from "@/components/ProposedPavilionsLinks";
import styles from "./proposed.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Proposed Pavilions Never Built — nywf64.com",
  description:
    "Proposed Pavilions Never Built — discover the Fair’s phantom pavilions at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Landing: header → hero → guidebook banner → links → footer
 * (Disney Shows / Religions / Quiet Spaces pattern).
 * Links: American Indian Exposition, Arch of the Americas, Argentina — same `/A` cards.
 */
export default function ProposedPavilionsNeverBuiltPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="Proposed Pavilions Never Built"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/proposed-pavilions-hero.jpg"
            alt="Proposed Pavilions Never Built — discover the Fair’s phantom pavilions"
            width={1935}
            height={812}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <section className={styles.banner} aria-label="Guidebook banner">
        <div className={styles.bannerFrame}>
          <Image
            src="/images/guidebook-banner.jpg"
            alt=""
            width={1206}
            height={180}
            sizes="100vw"
            className={styles.bannerArt}
            unoptimized
          />
        </div>
      </section>
      <ProposedPavilionsLinks />
    </main>
  );
}
