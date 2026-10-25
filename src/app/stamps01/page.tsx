import type { Metadata } from "next";
import Image from "next/image";
import { StampsHero } from "@/components/StampsHero";
import { StampsNavChrome } from "@/components/StampsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./stamps01.module.css";

export const metadata: Metadata = {
  title:
    "The 1964-1965 New York World’s Fair in Postage Stamps — nywf64.com",
  description:
    "Randy Lambertus on the 1964/1965 New York World’s Fair in postage stamps — introductory essay on nywf64.com.",
};

/**
 * Postage Stamps of the Fair — Page One (legacy stamps02.html → /stamps01).
 * Shared StampsHero (1905×826). Nav Page 2.
 * PREVIOUS → /stampsoverview; NEXT hidden until the next stamps page ships.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Stamps01Page() {
  return (
    <>
      <StampsHero />

      <StampsNavChrome />

      <article className={styles.article} aria-labelledby="stamps01-title">
        <header className={styles.titleBar}>
          <h1 id="stamps01-title" className={styles.titleBarMain}>
            The 1964-1965 New York World&apos;s Fair in Postage Stamps
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.byline}>by: Randy Lambertus</p>

          <figure className={styles.figure}>
            <div className={styles.figureFrame}>
              <Image
                src="/images/stamps01/stamp_USA_1964_Sc1244a.jpg"
                alt="United States Plate Block — Scott #1244"
                width={350}
                height={186}
                className={styles.stamp}
                unoptimized
              />
            </div>
            <figcaption className={styles.caption}>
              United States Plate Block - Scott #1244 - Issued April 22, 1964
            </figcaption>
          </figure>

          <p className={styles.body}>
            Most people don&apos;t think of postage stamps when acquiring
            1964-1965 New York World&apos;s Fair items, yet these are economical
            and fun ways to enhance a World&apos;s Fair collection with
            semi-precious snapshots of philatelic history.
          </p>

          <p className={styles.body}>
            In regard to the 1964-1965 New York World&apos;s Fair, did you know
            there were over two hundred postage related issues of individual
            stamps, stamp sets, reissue overprints and souvenir sheets from 30
            countries? Well there were and all are to be highlighted over the
            course of this article. These stamps celebrated such topics as
            World&apos;s Fair pavilions, cultural events, political
            achievements, feats of construction, scientific efforts and
            historical heritage.
          </p>

          <p className={styles.body}>
            Of the possible 68 countries that exhibited at the 1964-1965
            World&apos;s Fair, only 30 of those countries issued postal
            commemoratives. Some pavilions, such as American-Israel, Berlin and
            Pavilion of Paris, were not officially sponsored by their respective
            countries so that may explain why they did not issue postage items.
            Others such as Mexico and Japan had the Olympic Games on the horizon
            and may have deemed the New York Fair as secondary to their events.
          </p>

          <p className={styles.body}>
            Surely the Bureau of International Expositions&apos; (BIE) decision
            not to recognize the New York World&apos;s Fair as an official
            World&apos;s Fair played a large part in limiting postal issues.
            Yet, remarkably, Afghanistan, Bhutan, Dubai, Paraguay and the Yemens
            were not present at the Fair as far as can be determined but did
            acknowledge the event on postage!
          </p>

          <p className={styles.body}>
            Stamps were usually timed to commemorate the opening day of the Fair
            on April 22, 1964. However some countries did not elect to honor
            that occasion, but released their stamps in a period ranging as
            early as February of 1964 through November of 1966; a year and
            several weeks after the fair had closed!
          </p>

          <p className={styles.body}>
            How did the 1964-1965 Fair compare against the 1939-1940 Fair? Well
            the 1964-1965 Fair had 30 countries resulting in 225 unique items at
            last count. The 1939-1940 Fair totaled 45 countries providing 173
            separate pieces of postage. The 1939-1940 totals can be a bit
            deceiving though as almost one-third of the stamps (48) were tied to
            24 French Colonies, known as common issue CD82. More about that in a
            future article if it can be determined there is any interest in the
            1939-1940 New York World&apos;s Fair stamp issues.
          </p>

          <p className={styles.body}>
            Let&apos;s explore the 1964-1965 New York World&apos;s Fair
            collection, displayed in alphabetical order. Stamp numbers and
            release dates are from the official &quot;Scott Standard Stamp
            Catalog,&quot; 2003 Edition, unless otherwise noted. Values
            indicated are for stamps in Mint, Never Hinged (MNH) condition, as
            of December 2002. All images are copyright of the respective
            countries. Stamp colors indicated in images are close to the
            original colors, but are not represented as 100% accurate due to
            scanner variations. Stamp images may not represent actual size.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/stampsoverview"
        explicitPrevious
        overviewHref="/stampsoverview"
        hideNext
      />
    </>
  );
}
