import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genele13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Scrims \u2014 General Electric \u2014 nywf64.com",
  description:
    "Scrims \u2014 General Electric Progressland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Electric — Scrims.
 * Body from legacy genele13.html (custom topic page).
 * Stack: hero → GeneleNavChrome → navy title → article → Nav2Bar.
 */
export default function Genele13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <article className={styles.article} aria-labelledby="genele13-title">
        <header className={styles.titleBar}>
          <h1 id="genele13-title" className={styles.titleBarMain}>
            Scrims
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.heading}>The use of scrims in the Carousel of Progress</p>
          <div className={styles.body}>
            <p>The Carousel of Progress sets made use of a theatrical device called &quot;scrims&quot; to conceal smaller rotating stages at the left and right sides of the main stage in the Act I, II and III theaters. This allowed multiple scenes to be played out in each theater. A scrim is a gauze-like curtain with a weave that is wide enough to allow the action behind it to be seen when the lights are lowered on the main stage. When the lights are up on the main stage, the audience sees only a painted background. When the main stage lights dim and the action is lit behind the scrim, the audience sees the previously hidden stage.</p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/genele13/ge94.jpg"
              alt="Scrimmed side theater"
              width={243}
              height={248}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The highly reflective nature of a scrim can be seen in this flash-photo of the 1940s kitchen. Even though the action is lighted behind the scrim, the flash reflects off the scrim the way normal stage light does to obscure the action behind it.</figcaption>
            <p className={styles.source}>SOURCE - Photo: Bill Young © 2002 Bill Young, All Rights Reserved</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genele12"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/genele14"
      />
    </>
  );
}
