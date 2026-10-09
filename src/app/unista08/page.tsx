import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista08.module.css";
import { Unista08Content } from "./unista08Content";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking & Construction — United States Pavilion — nywf64.com",
  description: "President Kennedy groundbreaking and Federal Pavilion construction — 1964/1965 New York World’s Fair.",
};

export default function Unista08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="United States Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/unistaoverview/hero-banner.jpg"
            alt="United States Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnistaNavChrome />

      <article className={styles.article} aria-labelledby="unista08-title">
        <header className={styles.titleBar}>
          <h1 id="unista08-title" className={styles.titleBarMain}>
            Groundbreaking &amp; Construction
          </h1>
        </header>

        <Unista08Content />
      </article>

      <Nav2Bar
        previousHref="/unista07"
        overviewHref="/unistaoverview"
        nextHref="/unista09"
      />
    </>
  );
}
