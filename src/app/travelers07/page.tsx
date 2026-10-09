import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./travelers07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Photograph Album: COSI Columbus Museum — Travelers Insurance — nywf64.com",
  description:
    "COSI Columbus Museum photographs of The Triumph of Man dioramas — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

type SceneImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Scene = {
  label: string;
  labelFirst?: boolean;
  images: SceneImage[];
};

const SCENES: Scene[] = [
  {
    label: "THE DAWN OF MAN",
    images: [
      {
        src: "/images/travelers07/trvlrs32.jpg",
        width: 240,
        height: 171,
        alt: "Dawn of Man scene",
      },
    ],
  },
  {
    label: "THE ORIGIN OF RELIGION",
    labelFirst: true,
    images: [
      {
        src: "/images/travelers07/trvlrs34.jpg",
        width: 240,
        height: 168,
        alt: "Origin of Religion scene",
      },
    ],
  },
  {
    label: "THE ORIGIN OF AGRICULTURE",
    labelFirst: true,
    images: [
      {
        src: "/images/travelers07/trvlrs35.jpg",
        width: 240,
        height: 174,
        alt: "Origin of Agriculture scene",
      },
      {
        src: "/images/travelers07/trvlrs36.jpg",
        width: 169,
        height: 241,
        alt: "Origin of Agriculture scene",
      },
      {
        src: "/images/travelers07/trvlrs33.jpg",
        width: 240,
        height: 174,
        alt: "Origin of Agriculture scene",
      },
    ],
  },
  {
    label: "THE GRANDEUR OF ROME",
    labelFirst: true,
    images: [
      {
        src: "/images/travelers07/trvlrs37.jpg",
        width: 240,
        height: 175,
        alt: "Grandeur of Rome scene",
      },
    ],
  },
  {
    label: "CIVILIZATION IN PERIL",
    images: [
      {
        src: "/images/travelers07/trvlrs38.jpg",
        width: 240,
        height: 177,
        alt: "Civilization in Peril scene",
      },
    ],
  },
  {
    label: "THE BLACK DEATH",
    labelFirst: true,
    images: [
      {
        src: "/images/travelers07/trvlrs39.jpg",
        width: 240,
        height: 165,
        alt: "The Black Death scene",
      },
    ],
  },
  {
    label: "VOYAGE TO THE NEW WORLD",
    labelFirst: true,
    images: [
      {
        src: "/images/travelers07/trvlrs40.jpg",
        width: 240,
        height: 173,
        alt: "Voyage to the New World scene",
      },
    ],
  },
  {
    label: "TAMING OF A CONTINENT",
    labelFirst: true,
    images: [
      {
        src: "/images/travelers07/trvlrs41.jpg",
        width: 240,
        height: 176,
        alt: "Taming of a Continent scene",
      },
    ],
  },
  {
    label: "THE AMERICAN CRISIS",
    images: [
      {
        src: "/images/travelers07/trvlrs42.jpg",
        width: 240,
        height: 166,
        alt: "The American Crisis scene",
      },
    ],
  },
];

/**
 * COSI Columbus Museum diorama photograph album.
 * Body from legacy travelers07.html (scrapbook banner omitted).
 */
export default function Travelers07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Travelers Insurance">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <article className={styles.article} aria-labelledby="travelers07-title">
        <header className={styles.titleBar}>
          <h1 className={styles.titleBarMain} id="travelers07-title">
            Photograph Album: COSI Columbus Museum
          </h1>
        </header>

        <div className={styles.bodyInner}>
          <p className={styles.sourceLine}>
            Source: Private Collection of Bradd Schiffman © Copyright 2026,
            Bradd Schiffman
          </p>

          <div className={styles.tray}>
            <div className={styles.introBand}>
              <div className={styles.introPanel}>
                <p>THE TRAVELERS INSURANCE COMPANIES</p>
                <p>WORLD&apos;S FAIR EXHIBIT</p>
                <p>&nbsp;</p>
                <span className={styles.introRedWord}>&quot;THE</span>
                <span className={styles.introRedWord}>TRIUMPH</span>
                <span className={styles.introRedWord}>OF</span>
                <span className={styles.introRedWord}>MAN&quot;</span>
                <p>&nbsp;</p>
                <p>AT THE</p>
                <p>CENTER OF SCIENCE AND INDUSTRY</p>
                <p>COLUMBUS, OHIO</p>
                <p className={styles.introCirca}>Circa 1993</p>
              </div>
            </div>

            {SCENES.map((scene) => (
              <div
                key={scene.label}
                className={`${styles.sceneRow} ${
                  scene.labelFirst ? styles.sceneRowLabelFirst : ""
                }`}
              >
                <div className={styles.scenePhotos}>
                  {scene.images.map((image) => (
                    <figure key={image.src} className={styles.photoFrame}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className={styles.photoArt}
                        unoptimized
                      />
                    </figure>
                  ))}
                </div>
                <div className={styles.sceneLabel}>{scene.label}</div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers06"
        overviewHref="/travelersoverview"
        nextHref="/travelers08"
      />
    </>
  );
}
