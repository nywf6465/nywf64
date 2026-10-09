import type { Metadata } from "next";
import Image from "next/image";
import { ChukininnNavChrome } from "@/components/ChukininnNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chukininnoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Chukin Inn — Overview — nywf64.com",
  description:
    "Chukin Inn overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chukin Inn overview — follows the **overview** prototype
 * (same stack as /chinaoverview / /cengrioverview).
 */
export default function ChukinInnOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Chukin Inn">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/chukininnoverview/hero-banner.jpg"
            alt="Chukin Inn at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChukininnNavChrome />

      <section className={styles.overview} aria-label="Chukin Inn overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A pagoda-style restaurant with a lake-dotted garden offers
              comfortable, inexpensive dining.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/chukininnoverview/photo.jpg"
              alt="Chukin Inn — pagoda-style restaurant and garden"
              width={990}
              height={1290}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/chukininnoverview"
        overviewHref="/chukininnoverview"
        nextHref="/chukininn01"
      />
    </>
  );
}
