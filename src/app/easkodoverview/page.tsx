import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./easkodoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Eastman Kodak — Overview — nywf64.com",
  description:
    "Eastman Kodak Pavilion overview at the 1964/1965 New York World’s Fair — The Picture Tower on nywf64.com.",
};

/**
 * Eastman Kodak overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (easkod menu) → overview body → nav2 → footer
 */
export default function EaskodOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <section className={styles.overview} aria-label="Eastman Kodak overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Atop the pavilion are huge colored prints and a &quot;moondeck&quot;
              for picture-taking; inside are exhibits and an award-winning film.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/easkodoverview/photo.jpg"
              alt="Eastman Kodak Pavilion — Picture Tower and moondeck"
              width={958}
              height={706}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/easkodoverview"
        overviewHref="/easkodoverview"
        nextHref="/easkod01"
      />
    </>
  );
}
