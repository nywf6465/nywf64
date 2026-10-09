import type { Metadata } from "next";
import Image from "next/image";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./citserv05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "About the World's Fair Band of America — Cities Service Band — nywf64.com",
  description:
    "About the Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair — from nywf64.com.",
};

/**
 * Cities Service Band — About the World's Fair Band of America.
 * Body from legacy citserv05.html; hero shared with the citserv overview.
 */
export default function Citserv05Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Cities Service World's Fair Band of America"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/citservoverview/hero-banner.jpg"
            alt="Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CitservNavChrome />

      <article className={styles.article} aria-labelledby="citserv05-title">
        <header className={styles.titleBar}>
          <h1 id="citserv05-title" className={styles.titleBarMain}>
            About the World&apos;s Fair Band of America
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.heading}>
            IT&apos;S BEEN LIKENED TO THE PIED PIPER OF HAMELIN
          </h2>

          <Image
            src="/images/citserv05/citserv03.jpg"
            alt="Bandwagon and Unisphere"
            width={460}
            height={249}
            className={styles.photo}
            unoptimized
          />

          <p className={styles.copy}>
            <strong>
              ... this Cities Service World&apos;s Fair Band of America --{" "}
            </strong>
            as it moves around the fairgrounds on its custom-built bandstand
            attracting listeners by the hundreds to various parts of the Fair.
            The unique bandstand is said to be the second most photographed
            object on the fairgrounds. The self-propelled, two-unit bandwagon is
            72 feet long, 9 feet wide and 12 feet high. Operated by a driver in
            the lead unit and a tiller steersman in the rear unit, the bandwagon
            is jack-knifed to form a bandstand for concerts. When it is moving
            it operates at a speed of five miles per hour. The 50-man band,
            under the baton of Paul Lavalle, plays anything from jazz to the
            classics in its six daily concerts. It has added the national
            anthems of several countries to its repertoire as it provided music
            for the celebration of special days and dedications. TV-viewers in
            England, Italy, Spain and Japan have seen it in special news films,
            and the Voice of America has taped it for overseas broadcast. The
            Cities Service World&apos;s Fair Band of America is in direct
            personal contact with thousands of people from all over America and
            the world daily and is serving as an outstanding representative of
            Cities Service.
          </p>

          <p className={styles.source}>
            Source: Unknown ... possibly Cities Service Literature
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/citserv04"
        overviewHref="/citservoverview"
        nextHref="/citserv06"
      />
    </>
  );
}
