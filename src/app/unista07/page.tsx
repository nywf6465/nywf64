import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista07.module.css";
import { Unista07Content } from "./unista07Content";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The United States Goes to the Fair — United States Pavilion — nywf64.com",
  description: "Congressional appropriation, Federal Pavilion design, and press releases — U.S. Pavilion at the 1964/1965 Fair.",
};

export default function Unista07Page() {
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

      <article className={styles.article} aria-labelledby="unista07-title">
        <header className={styles.titleBar}>
          <h1 id="unista07-title" className={styles.titleBarMain}>
            The United States Goes to the Fair
          </h1>
        </header>

        <Unista07Content />
      </article>

      <Nav2Bar
        previousHref="/unista06"
        overviewHref="/unistaoverview"
        nextHref="/unista08"
      />
    </>
  );
}
