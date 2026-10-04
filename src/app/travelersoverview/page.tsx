import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./travelersoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Travelers Insurance — Overview — nywf64.com",
  description:
    "Travelers Insurance Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (travelers menu) → overview body → nav2 → footer
 */
export default function TravelersOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Travelers Insurance">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <section
        className={styles.overview}
        aria-label="Travelers Insurance overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors walk past dioramas that dramatize the story of life on
              earth, from the first cell to man&apos;s leap into space.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/travelersoverview/photo.jpg"
              alt="Travelers Insurance Pavilion — the red umbrella building"
              width={1569}
              height={1002}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/travelersoverview"
        overviewHref="/travelersoverview"
        nextHref="/travelers01"
      />
    </>
  );
}
