import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genele21.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Progressland Model Auction \u2014 General Electric \u2014 nywf64.com",
  description:
    "The Progressland Model Auction \u2014 General Electric Progressland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Electric — The Progressland Model Auction.
 * Body from legacy genele21.html (custom topic page).
 * Stack: hero → GeneleNavChrome → navy title → article → Nav2Bar.
 */
export default function Genele21Page() {
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

      <article className={styles.article} aria-labelledby="genele21-title">
        <header className={styles.titleBar}>
          <h1 id="genele21-title" className={styles.titleBarMain}>
            The Progressland Model Auction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.heading}>
            THE PROGRESSLAND MODEL AUCTION
          </p>
          <div className={styles.grid}>
            <Image
              src="/images/genele21/ge123.jpg"
              alt="Packing Crate"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge116.jpg"
              alt="Model"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge121.jpg"
              alt="Model"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge120.jpg"
              alt="Model"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge118.jpg"
              alt="Model Close-up"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge117.jpg"
              alt="Model under Plexiglass"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge119.jpg"
              alt="Lighted Model"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/genele21/ge122.jpg"
              alt="Dome Top"
              width={150}
              height={113}
              className={styles.photo}
              unoptimized
            />
          </div>
          <div className={styles.body}>
            <p>On October 19, 2002 a model of the General Electric Progressland Pavilion sold on the internet auction site, eBay. In its original packing crate and protective plexiglass cover, the model was numbered #7 of 14 and was created by the industrial display firm of Richard Rush Studios in Chicago to promote General Electric&apos;s pavilion. It sold for an astounding $5100.00. As illustrated by these photos, the lighted model simulates the rotating lighting effects on the domed roof of the pavilion. It measures 26 2/16&quot; wide by 29&quot; deep and is constructed of a fiberglass base with plastic and plaster covered wood.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genele20"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/genele22"
      />
    </>
  );
}
