import type { Metadata } from "next";
import Image from "next/image";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import styles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Pool of Industry — nywf64.com",
  description:
    "Pool of Industry / Fountain of the Planets entries from the World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry Information Manual page — “manual” standard.
 * Body from legacy poolin02.html (three manual entries). Layout:
 * InformationManualPage (/bell02) with afterFeatures for the second and third
 * entries.
 */
export default function Poolin02Page() {
  return (
    <InformationManualPage
      heroLabel="Pool of Industry"
      titleId="poolin02-title"
      hero={{
        src: "/images/poolinoverview/hero-banner.jpg",
        alt: "Pool of Industry at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<PoolinNavChrome />}
      previousHref="/poolin01"
      overviewHref="/poolinoverview"
      nextHref="/poolin03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Fountain of the Planets"],
        },
        {
          label: "POOL",
          lines: ["Pool of Industry"],
        },
        {
          label: "CONSULTANTS",
          lines: [
            "Hamel and Langer",
            "652 First Avenue",
            "New York, New York 10016",
            "OR 9-9140",
          ],
        },
        {
          label: "CONTRACTORS",
          lines: [
            "Lummus Corp. - general",
            "Waverly Builders - civil",
            "Mulligan & Sons - mechanical",
            "Eastern States - electrical",
            "Johnson Service - pneumatic",
            "Commercial Radio and Sound Corp.- electronics",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Center of Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["6-1/2 acres"],
        },
        {
          label: "DESIGNERS",
          lines: ["J.S. Hamel", "Gilmore D. Clarke", "Donald Oenslager"],
        },
      ]}
      primaryFigure={{
        src: "/images/poolin02/poolin04.jpg",
        width: 600,
        height: 411,
        alt: "Fountain of the Planets — Pool of Industry",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Fountain of Planets, impressive in size and design, uses more
              than 400-tons of water ejected through 2,000 nozzles. This is the
              scene of the popular fountain and fireworks show held nightly
              during the Fair season and free to Fair visitors. About 10,000
              tons of water are recirculated during the show and approximately
              150,000,000 candle power illuminates the waters with brilliant and
              changing color-lighting. Fireworks in the display are fired from
              464 mortars. Over 1,000 different patterns of water and light
              effects are produced.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={styles.rule} />

          <div className={styles.facts}>
            <div aria-label="Exhibit facts">
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>FOUNTAIN</p>
                <ul className={styles.factLines}>
                  <li>Fountain of Planets</li>
                </ul>
              </div>
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>POOL</p>
                <ul className={styles.factLines}>
                  <li>Pool of Industry</li>
                </ul>
              </div>
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>CONSULTANTS</p>
                <ul className={styles.factLines}>
                  <li>Hamel &amp; Langer</li>
                  <li>652 First Avenue</li>
                  <li>New York, New York 10016</li>
                  <li>and</li>
                  <li>Clarke &amp; Rapuano, Inc.</li>
                  <li>830 Third Avenue</li>
                  <li>New York, New York 10022</li>
                  <li>PL 4-1030</li>
                </ul>
              </div>
            </div>
            <div aria-label="Site and construction facts">
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>LOCATION</p>
                <ul className={styles.factLines}>
                  <li>Center of Industrial Area</li>
                </ul>
              </div>
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>AREA</p>
                <ul className={styles.factLines}>
                  <li>6-1/2 acres</li>
                </ul>
              </div>
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>DESIGNERS</p>
                <p className={styles.factLabel}>Fountain Spectacular</p>
                <ul className={styles.factLines}>
                  <li>Leon Leonidoff - Producer</li>
                  <li>Jacques Belasco - Music director &amp; composer</li>
                  <li>
                    Hamel &amp; Langer - Technical director, lighting, water and
                    sound
                  </li>
                </ul>
              </div>
              <div className={styles.factBlock}>
                <p className={styles.factLabel}>Fountain Construction</p>
                <ul className={styles.factLines}>
                  <li>Lummus Corp. - general</li>
                  <li>Waverly Builders - civil</li>
                  <li>Mulligan &amp; Sons - mechanical</li>
                  <li>Eastern States - electrical</li>
                  <li>Johnson Service - pneumatic</li>
                  <li>Commercail Radio &amp; Sound Corp. - electronics</li>
                </ul>
              </div>
            </div>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/poolin02/poolin05.jpg"
              alt="Fountain of the Planets diagram"
              width={600}
              height={282}
              className={styles.figureArt}
              unoptimized
            />
            <Image
              src="/images/poolin02/poolin06.jpg"
              alt="Fountain of the Planets diagram detail"
              width={600}
              height={114}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.figureCaption}>
              <p className={styles.figureSource}>
                SOURCE: 1965 World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>

          <p className={styles.featuresHeading}>FEATURES</p>
          <p className={styles.feature}>
            <span className={styles.featureBody}>
              The Fountain Show is a combination of artistry and science in a
              fountain design of limitless possibilities. The players are
              electronics, sound, water, lights, colors and fireworks, in a
              harmonious array of delightful effects. The theme of the show,
              changed daily may be classical, popular, patriotic, spiritual or
              any other pre-planned motif. Punched cue cards which set the show
              in motion, control thousands of regulating relays, valves,
              switches and other devices involved in the presentation.
            </span>
          </p>

          <hr className={styles.rule} />

          <figure className={styles.figure}>
            <Image
              src="/images/poolin02/poolin07.jpg"
              alt="Fountain of the Planets - Pool of Industry"
              width={600}
              height={351}
              className={`${styles.figureArt} ${styles.figureArtBordered}`}
              unoptimized
            />
            <figcaption className={styles.figureCaption}>
              <p className={styles.figureTitle}>
                Fountain of the Planets - Pool of Industry
              </p>
              <p className={styles.figureSource}>
                Source: NY World&apos;s Fair Publication{" "}
                <em>
                  For Those Who Produced the New York World&apos;s Fair
                  1964-1965
                </em>
              </p>
            </figcaption>
          </figure>
        </>
      }
    />
  );
}
