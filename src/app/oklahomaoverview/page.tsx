import type { Metadata } from "next";
import Image from "next/image";
import { OklahomaNavChrome } from "@/components/OklahomaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./oklahomaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Oklahoma — Overview — nywf64.com",
  description:
    "Oklahoma pavilion overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Oklahoma overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /floridaoverview).
 */
export default function OklahomaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Oklahoma">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/oklahomaoverview/hero-banner.jpg"
            alt="Oklahoma at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <OklahomaNavChrome />

      <section className={styles.overview} aria-label="Oklahoma overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This &quot;pavilion&quot; is actually a park with winding pathways
              arranged around a lake and a large outdoor map of the state.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/oklahomaoverview/photo.jpg"
              alt="Oklahoma pavilion at the 1964/1965 New York World’s Fair"
              width={1598}
              height={984}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/oklahomaoverview"
        overviewHref="/oklahomaoverview"
        nextHref="/oklahoma01"
      />
    </>
  );
}
