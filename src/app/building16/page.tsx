import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building16.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Miracle in the Meadow III — Building the Fair — nywf64.com",
  description:
    "Miracle in the Meadow III — Josef Seebacher construction gallery from Building the Fair on nywf64.com.",
};

type Photo = {
  src: string;
  width: number;
  height: number;
  caption: ReactNode;
};

/**
 * Building the Fair — Miracle in the Meadow III.
 * Body from legacy building17.html (mapped to /building16 as Page 16 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building16Page() {
  const octoberPhotos: Photo[] = [
    {
      src: "building144.jpg",
      width: 400,
      height: 268,
      caption:
        "The leaves on the trees and the Helicopter approaching to land on the rooftop of the completed Port Authority Heliport indicate that these photos were probably taken from atop the New York State Pavilion construction site in October, 1963.",
    },
    {
      src: "building96.jpg",
      width: 400,
      height: 266,
      caption:
        "Orbitals and continents were in place on Unisphere by Labor Day, 1963. Construction shows the steel skeletons of the light towers surrounding Unisphere. Federal Pavilion is roofed. Steel skeleton at right is Republic of China under construction.",
    },
    {
      src: "building98.jpg",
      width: 400,
      height: 268,
      caption:
        "Industrial Area construction in full swing. Orange steelwork in the center of the photo is the House of Japan. Many smaller international pavilions are still nothing more than foundations.",
    },
    {
      src: "building97.jpg",
      width: 400,
      height: 267,
      caption:
        "The Kodak Pavilion is the unmistakable landmark in this shot. The International Plaza and the peaked roof of the Hall of Free Enterprise show that construction is far along on those structures. The pointed roof of Edward Durel Stone's Christian Science Pavilion can be seen behind them.",
    },
    {
      src: "building135.jpg",
      width: 267,
      height: 400,
      caption:
        "A long view of the Central Court construction. In the lower left, the platforms of the New Jersey Pavilion are in place and the steel booms that would hold the pyramid rooftops are beginning to be put in place. It was these steel booms that collapsed during construction of the pavilion resulting in the deaths of three construction workers; the only fatalities recorded in the building of the Fair.",
    },
    {
      src: "building143.jpg",
      width: 400,
      height: 275,
      caption: "A view of the General Motors construction site.",
    },
  ];

  const springPhotos: Photo[] = [
    {
      src: "building133.jpg",
      width: 400,
      height: 255,
      caption:
        "The Lunar Fountain is completed. Steel framework of the Coca-Cola Carillon tower rises in the background.",
    },
    {
      src: "building145.jpg",
      width: 400,
      height: 255,
      caption:
        "Construction sites of the Dynamic Maturity and Seven-up Pavilions. The wood exterior of the Venezuela Pavilion is to the right. Hong Kong Pavilion rises in the background.",
    },
    {
      src: "building141.jpg",
      width: 400,
      height: 255,
      caption: "Installation of the Carillon at the Coca-Cola Pavilion.",
    },
    {
      src: "building138.jpg",
      width: 400,
      height: 254,
      caption:
        'Workmen install the giant horses on the Gas Companies oversized "carousel."',
    },
    {
      src: "building140.jpg",
      width: 400,
      height: 254,
      caption: "Hong Kong Pavilion readies for visitors.",
    },
    {
      src: "building134.jpg",
      width: 255,
      height: 400,
      caption: "Putting the finishing touches on the Mormon Pavilion.",
    },
    {
      src: "building139.jpg",
      width: 400,
      height: 254,
      caption: "Steel scaffold still surrounds the Thai Pavilion.",
    },
    {
      src: "building99.jpg",
      width: 400,
      height: 257,
      caption:
        "Federal Pavilion is fully enclosed and the decorative fiberglass curtains have been installed on the exterior of the pavilion.",
    },
    {
      src: "building136.jpg",
      width: 255,
      height: 400,
      caption:
        "Site huts surround the Tower of the Four Winds at the Pepsi Pavilion. Completed phone booths can be seen at the left.",
    },
    {
      src: "building142.jpg",
      width: 400,
      height: 256,
      caption:
        "With its buckets in place, the US Rubber Ferris Wheel waits for riders. Moon Dome of the Transportation and Travel Pavilion can be seen in the background.",
    },
    {
      src: "building132.jpg",
      width: 400,
      height: 255,
      caption:
        "Work progresses on the Republic of China Pavilion. Thatched roof of the Caribbean Pavilion is to its left. Light towers are completed and already providing nighttime lighting for Unisphere.",
    },
    {
      src: "building137.jpg",
      width: 255,
      height: 400,
      caption:
        "A completed Unisphere awes passerby. New England States and Federal Pavilion can be seen in the background.",
    },
    {
      src: "building153.jpg",
      width: 257,
      height: 400,
      caption: (
        <>
          Sinclair&apos;s Dinoland is ready for guests.
        </>
      ),
    },
    {
      src: "building154.jpg",
      width: 400,
      height: 256,
      caption: (
        <>
          Tyrannosaurus Rex prepares for battle with Triceratops at Sinclair&apos;s
          Dinoland.
        </>
      ),
    },
    {
      src: "building155.jpg",
      width: 400,
      height: 254,
      caption: (
        <>
          Dinoland&apos;s Brontosaurus peers down on the passing motorists along the
          Grand Central Parkway. The Fair was almost ready!
        </>
      ),
    },
  ];

  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building16-title">
        <header className={styles.titleBar}>
          <h1 id="building16-title" className={styles.titleBarMain}>
            Miracle in the Meadow III
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.section} aria-labelledby="sec-0">
            <h2 id="sec-0" className={styles.sectionLabel}>
              JOSEPH SEEBACHER GALLERY
            </h2>
            <p className={styles.body}>
              Josef Seebacher was a tradesman, an iron worker in New York. He
              worked on the construction of very many well-known projects such
              as the GM Building, Gulf + Western Building, Throggs Neck Bridge
              and the Verrazano Narrows Bridge. He also worked on building the
              New York State Pavilion for the 1964-1965 New York World&apos;s Fair.
              During his time there, Mr. Seebacher took a series of photographs
              of the Fair under construction. This is his gallery, a generous
              contribution to{" "}
              <strong>
                <span className={styles.nywf}>nywf</span>
                <span className={styles.nywf64}>64</span>
              </strong>
              .com by his son, Karl Baker.
            </p>
            <div className={styles.photoGrid}>
              <figure className={styles.figure}>
                <Image
                  src="/images/building16/building95.jpg"
                  alt="Josef Seebacher"
                  width={204}
                  height={300}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.caption}>
                  <em>
                    Josef Seebacher at work on the World Trade Center
                  </em>
                </figcaption>
              </figure>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-1">
            <h2 id="sec-1" className={styles.sectionLabel}>
              View from the New York State Pavilion construction site
              <br />
              October, 1963
            </h2>
            <div className={styles.photoGrid}>
              {octoberPhotos.map((photo) => (
                <figure key={photo.src} className={styles.figure}>
                  <Image
                    src={`/images/building16/${photo.src}`}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    className={styles.photo}
                    unoptimized
                  />
                  <figcaption className={styles.caption}>
                    <em>{photo.caption}</em>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-2">
            <h2 id="sec-2" className={styles.sectionLabel}>
              The Fair nears completion
              <br />
              Early Spring, 1964
            </h2>
            <div className={styles.photoGrid}>
              {springPhotos.map((photo) => (
                <figure key={photo.src} className={styles.figure}>
                  <Image
                    src={`/images/building16/${photo.src}`}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    className={styles.photo}
                    unoptimized
                  />
                  <figcaption className={styles.caption}>
                    <em>{photo.caption}</em>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className={styles.source}>
              Source: All Photos presented courtesy Karl Baker collection and
              are © Copyright 2005 Karl Baker, All Rights Reserved
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building15"
        explicitPrevious
        nextHref="/building17"
      />
    </>
  );
}
