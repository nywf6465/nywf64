import type { Metadata } from "next";
import Image from "next/image";
import { AlaskaNavChrome } from "@/components/AlaskaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./alaskaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Alaska — Overview — nywf64.com",
  description:
    "Alaska pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Alaska overview — follows the **overview** prototype
 * (same stack as /africaoverview / /aertowoverview / /morchuoverview).
 */
export default function AlaskaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Alaska">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/alaskaoverview/hero-banner.jpg"
            alt="Alaska at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AlaskaNavChrome />

      <section className={styles.overview} aria-label="Alaska overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Under a white, igloo-shaped dome, the 49th state presents its
              wildlife, industry and Indian crafts.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/alaskaoverview/photo.jpg"
              alt="Alaska pavilion"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/alaskaoverview"
        overviewHref="/alaskaoverview"
        nextHref="/alaska01"
      />
    </>
  );
}
