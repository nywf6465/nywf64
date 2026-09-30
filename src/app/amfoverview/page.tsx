import type { Metadata } from "next";
import Image from "next/image";
import { AmfNavChrome } from "@/components/AmfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amfoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Monorail (AMF) — Overview — nywf64.com",
  description:
    "Monorail (AMF) overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Monorail (AMF) overview — follows the **overview** prototype
 * (same stack as /missourioverview / /minnesotaoverview).
 * Wired with the shared **amf menu**.
 * Route slug: `/amfoverview`.
 */
export default function AmfOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Monorail (AMF)">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/amfoverview/hero-banner.jpg"
            alt="Monorail (AMF) at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmfNavChrome />

      <section className={styles.overview} aria-label="Monorail (AMF) overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Futuristic two-car trains circle the Lake Area 40 feet up,
              providing spectacular views.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/amfoverview/photo.jpg"
              alt="AMF Monorail at the Fair"
              width={1584}
              height={979}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/amfoverview"
        overviewHref="/amfoverview"
        nextHref="/amf01"
      />
    </>
  );
}
