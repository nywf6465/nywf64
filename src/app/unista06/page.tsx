import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista06.module.css";
import { Unista06Content } from "./unista06Content";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal for a National Center of Science and Education — United States Pavilion — nywf64.com",
  description: "Franklin National Center of Science and Education proposal — 1964/1965 New York World’s Fair.",
};

export default function Unista06Page() {
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

      <article className={styles.article} aria-labelledby="unista06-title">
        <header className={styles.titleBar}>
          <h1 id="unista06-title" className={styles.titleBarMain}>
            Proposal for a National Center of Science and Education
          </h1>
        </header>

        <Unista06Content />
      </article>

      <Nav2Bar
        previousHref="/unista05"
        overviewHref="/unistaoverview"
        nextHref="/unista07"
      />
    </>
  );
}
