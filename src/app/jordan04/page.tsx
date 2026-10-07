import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/photographsPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Jordan — nywf64.com",
  description:
    "Bill Cotter Collection — Pavilion of Jordan — 1964/1965 New York World’s Fair on nywf64.com.",
};

const cotterSource =
  "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved";

/**
 * Jordan gallery — Bill Cotter Collection (legacy jordan04.html).
 * Photographs standard with collection intro preserved from legacy.
 */
export default function Jordan04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <article className={styles.article} aria-labelledby="jordan04-title">
        <header className={styles.titleBar}>
          <h1 id="jordan04-title" className={styles.titleBarMain}>
            Gallery of Photographs
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHeading}>
            <strong>Bill Cotter</strong>, World&apos;s Fair enthusiast, has been
            collecting images of the 1964/1965 New York World&apos;s Fair for many
            years. He shares with us here some wonderful views of{" "}
            <strong>
              <em>The Pavilion of Jordan</em>
            </strong>
            . If you would like to see more images of Bill&apos;s{" "}
            <em>fabulous</em> collection of World&apos;s Fair images, visit his
            website{" "}
            <Link href="http://www.worldsfairphotos.com/" target="_blank">
              WorldsFairPhotos.com
            </Link>
            .
          </p>

          <div className={styles.sections}>
            <section className={styles.section} aria-label="Bill Cotter Collection">
              <div className={styles.tray}>
                <div className={styles.photos}>
                  {[
                    {
                      src: "/images/jordan04/jordan17.jpg",
                      width: 400,
                      height: 271,
                      alt: "Aerial View of Jordan Pavilion",
                    },
                    {
                      src: "/images/jordan04/jordan19.jpg",
                      width: 400,
                      height: 270,
                      alt: "Jordanian Pavilion",
                    },
                  ].map((photo) => (
                    <figure
                      key={photo.src}
                      className={styles.card}
                      style={{ width: photo.width }}
                    >
                      <div className={styles.frame}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className={styles.photo}
                          unoptimized
                        />
                      </div>
                      <figcaption className={styles.caption}>
                        <p className={styles.captionSource}>{cotterSource}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <p className={styles.sectionHeading}>
                <em>Above</em>: Views of the Pavilion of Indonesia. <em>Below</em>
                : The Column of Jerash. Jerash flouished during the first to the
                third centuries A.D. It is the best preserved of Roman colonial
                cities in the Middle East. This column from Roman ruins in the
                city of Jerash was presented to the New York World&apos;s Fair and
                the people of New York City by King Hussein in friendship and in
                commemoration of the Jordanian participation in the World&apos;s
                Fair. The column can still be visited today on its site in Flushing
                Meadows-Corona Park.
              </p>

              <div className={styles.tray}>
                <div className={styles.photos}>
                  {[
                    {
                      src: "/images/jordan04/jordan18.jpg",
                      width: 400,
                      height: 269,
                      alt: "Pavilion and Jerash Column",
                    },
                    {
                      src: "/images/jordan04/jordan20.jpg",
                      width: 260,
                      height: 400,
                      alt: "Column of Jerash",
                    },
                  ].map((photo) => (
                    <figure
                      key={photo.src}
                      className={styles.card}
                      style={{ width: photo.width }}
                    >
                      <div className={styles.frame}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className={styles.photo}
                          unoptimized
                        />
                      </div>
                      <figcaption className={styles.caption}>
                        <p className={styles.captionSource}>{cotterSource}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan03"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan05"
      />
    </>
  );
}
