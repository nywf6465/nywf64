import type { Metadata } from "next";
import Image from "next/image";
import { NewyorNavChrome } from "@/components/NewyorNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./newyoroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "New York State — Overview — nywf64.com",
  description:
    "New York State Pavilion overview at the 1964/1965 New York World’s Fair — Tent of Tomorrow on nywf64.com.",
};

/**
 * New York State overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (newyor menu) → overview body → nav2 → footer
 * Route spelled `newyoroverview` per user request.
 */
export default function NewYorkStateOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="New York State Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/newyoroverview/hero-banner.jpg"
            alt="New York State Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NewyorNavChrome />

      <section className={styles.overview} aria-label="New York State overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Above a huge &quot;Tent of Tomorrow,&quot; housing state exhibits and
              shows, rise three towers, one of them an observation tower 226 feet
              high.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/newyoroverview/photo.jpg"
              alt="New York State Pavilion — Tent of Tomorrow and observation towers"
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
        previousHref="/newyoroverview"
        overviewHref="/newyoroverview"
        nextHref="/newyor01"
      />
    </>
  );
}
