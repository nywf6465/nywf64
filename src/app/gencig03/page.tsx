import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import postcardStyles from "@/styles/postcardPage.module.css";
import styles from "./gencig03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Postcards — General Cigar — nywf64.com",
  description:
    "General Cigar pavilion postcards and Hall of Magic souvenir folder — 1964/1965 New York World’s Fair on nywf64.com.",
};

const FOLDER_PANELS = [
  { src: "/images/gencig03/gencig22.jpg", width: 450, height: 268 },
  { src: "/images/gencig03/gencig23.jpg", width: 450, height: 266 },
  { src: "/images/gencig03/gencig24.jpg", width: 450, height: 269 },
  { src: "/images/gencig03/gencig25.jpg", width: 450, height: 276 },
  { src: "/images/gencig03/gencig26.jpg", width: 450, height: 271 },
  { src: "/images/gencig03/gencig27.jpg", width: 450, height: 267 },
  { src: "/images/gencig03/gencig28.jpg", width: 450, height: 256 },
  { src: "/images/gencig03/gencig29.jpg", width: 450, height: 261 },
  { src: "/images/gencig03/gencig30.jpg", width: 450, height: 262 },
  { src: "/images/gencig03/gencig31.jpg", width: 450, height: 265 },
] as const;

type Entry = {
  front: { src: string; width: number; height: number; alt: string };
  reverse: { src: string; width: number; height: number; alt: string };
  meta: ReactNode[];
  sources: string[];
  note?: string;
};

const ENTRIES: Entry[] = [
  {
    front: {
      src: "/images/gencig03/WF419.jpg",
      width: 450,
      height: 278,
      alt: "Industrial Area unauthorized postcard No. WF419",
    },
    reverse: {
      src: "/images/gencig03/WF419reverse.jpg",
      width: 300,
      height: 63,
      alt: "Reverse of Industrial Area postcard No. WF419",
    },
    meta: [
      "General Scene of the Industrial Area",
      <span key="u" className={postcardStyles.unauthorized}>
        Unauthorized Postcard
      </span>,
      "No. WF419",
    ],
    sources: [
      "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
    ],
  },
  {
    front: {
      src: "/images/gencig03/78165-B.jpg",
      width: 450,
      height: 281,
      alt: "General Cigar Pavilion official postcard No. 78165-B",
    },
    reverse: {
      src: "/images/gencig03/78165-Breverse.jpg",
      width: 300,
      height: 84,
      alt: "Reverse of General Cigar Pavilion postcard No. 78165-B",
    },
    meta: [
      "General Cigar Pavilion",
      "Official Postcard",
      "No. 78165-B",
      "Dexter No. N/A",
      "Manhattan No. N/A",
    ],
    sources: [
      "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
      "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
    ],
  },
  {
    front: {
      src: "/images/gencig03/None2.jpg",
      width: 450,
      height: 264,
      alt: 'General Cigar "Hall of Magic" exhibitor postcard',
    },
    reverse: {
      src: "/images/gencig03/None2reverse.jpg",
      width: 300,
      height: 122,
      alt: 'Reverse of General Cigar "Hall of Magic" postcard',
    },
    meta: [
      'General Cigar "Hall of Magic"',
      "Exhibitor Postcard",
      "No. N/A",
    ],
    sources: [
      "Source: Postcard Made by Unknown",
      "Source: Postcard Published by Magical Productions Incorporated",
    ],
    note: "A five-fold card with views of Pavilion and Magic Tricks. (see below)",
  },
];

/**
 * General Cigar postcards page — postcards standard + Hall of Magic folder.
 * Body from legacy gencig03.html.
 * Stack: hero → GencigNavChrome → navy title → postcard entries → folder → Nav2Bar.
 */
export default function Gencig03Page() {
  return (
    <>
      <section className={postcardStyles.hero} aria-label="General Cigar">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gencigoverview/hero-banner.jpg"
            alt="General Cigar at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GencigNavChrome />

      <article
        className={postcardStyles.article}
        aria-labelledby="gencig03-title"
      >
        <header className={postcardStyles.titleBar}>
          <h1 id="gencig03-title" className={postcardStyles.titleBarMain}>
            Postcards
          </h1>
        </header>

        <div className={postcardStyles.articleInner}>
          <div className={postcardStyles.entries}>
            {ENTRIES.map((entry, index) => (
              <section
                key={entry.front.src}
                className={postcardStyles.entry}
                aria-label={`Postcard ${index + 1}`}
              >
                <div className={postcardStyles.row}>
                  <div className={postcardStyles.front}>
                    <Image
                      src={entry.front.src}
                      alt={entry.front.alt}
                      width={entry.front.width}
                      height={entry.front.height}
                      className={postcardStyles.frontImg}
                      unoptimized
                    />
                  </div>
                  <div className={postcardStyles.side}>
                    <Image
                      src={entry.reverse.src}
                      alt={entry.reverse.alt}
                      width={entry.reverse.width}
                      height={entry.reverse.height}
                      className={postcardStyles.reverseImg}
                      unoptimized
                    />
                    <ul className={postcardStyles.meta}>
                      {entry.meta.map((line, lineIndex) => (
                        <li key={`meta-${index}-${lineIndex}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className={postcardStyles.sources}>
                  {entry.sources.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {entry.note ? (
                  <p className={styles.folderNote}>{entry.note}</p>
                ) : null}
              </section>
            ))}
          </div>

          <section
            className={styles.folder}
            aria-label="Souvenir postcard folder"
          >
            <div className={styles.folderGrid}>
              {FOLDER_PANELS.map((panel) => (
                <Image
                  key={panel.src}
                  src={panel.src}
                  alt="General Cigar Pavilion souvenir postcard folder panel"
                  width={panel.width}
                  height={panel.height}
                  className={styles.folderPanel}
                  unoptimized
                />
              ))}
            </div>
            <ul className={postcardStyles.sources}>
              <li>SOURCE: General Cigar Pavilion Souvenir Postcard Folder</li>
            </ul>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gencig02"
        explicitPrevious
        overviewHref="/gencigoverview"
        nextHref="/gencig04"
      />
    </>
  );
}
