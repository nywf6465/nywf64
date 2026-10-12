import type { Metadata } from "next";
import Image from "next/image";
import { MinimodNavChrome } from "@/components/MinimodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./minimods02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Miniature Models (continued) — Miniature Models of the Fair — nywf64.com",
  description:
    "More miniature pavilion models from the 1964/1965 New York World’s Fair — Doug Siebenaler’s collection on nywf64.com.",
};

const GALLERY: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/minimods02/minimod23.jpg",
    alt: "Unidentified pavilion model",
    caption: "unidentified",
  },
  {
    src: "/images/minimods02/minimod24.jpg",
    alt: "Uniroyal Ferris Wheel model",
    caption: "Uniroyal Ferris Wheel",
  },
  {
    src: "/images/minimods02/minimod25.jpg",
    alt: "Tower of Light model",
    caption: "Tower of Light",
  },
  {
    src: "/images/minimods02/minimod26.jpg",
    alt: "Denmark, Philippines, First National City Bank, and unidentified models",
    caption:
      "Denmark, Philippines (upside-down left), First National City Bank (center), unidentified",
  },
  {
    src: "/images/minimods02/minimod27.jpg",
    alt: "Missouri, Mexico, House of Japan, and Argentina/Bargreens models",
    caption:
      "Missouri (top left), Mexico (bottom left), House of Japan (top right), Argentina/Bargreens (bottom right)",
  },
  {
    src: "/images/minimods02/minimod28.jpg",
    alt: "SKF Industries and Hall of Education models",
    caption: "SKF Industries (left), Hall of Education",
  },
  {
    src: "/images/minimods02/minimod29.jpg",
    alt: "Sinclair Dinoland and Avis Antique Car Ride models",
    caption: "Sinclair Dinoland, Avis Antique Car Ride",
  },
  {
    src: "/images/minimods02/minimod30.jpg",
    alt: "New York State Towers models",
    caption: "NY State Towers",
  },
  {
    src: "/images/minimods02/minimod31.jpg",
    alt: "Dynamic Maturity model",
    caption: "Dynamic Maturity",
  },
  {
    src: "/images/minimods02/minimod32.jpg",
    alt: "Eastern Air Lines and Walters Wax models",
    caption: "Eastern Air Lines, Walters Wax?",
  },
  {
    src: "/images/minimods02/minimod33.jpg",
    alt: "New Jersey pavilion model",
    caption: "New Jersey",
  },
  {
    src: "/images/minimods02/minimod35.jpg",
    alt: "American Indian Pavilion model",
    caption: "American Indian Pavilion",
  },
  {
    src: "/images/minimods02/minimod36.jpg",
    alt: "AMF Monorail Station model",
    caption: "AMF Monorail Station",
  },
  {
    src: "/images/minimods02/minimod37.jpg",
    alt: "Unidentified pavilion model",
    caption: "unidentified",
  },
];

/**
 * Miniature Models of the Fair — continued (gallery).
 * Body from legacy minimods03.html (mapped to /minimods02 after overview).
 *
 * Stack: minihero → MinimodNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Minimods02Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Miniature Models of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/minimod/minihero.jpg"
            alt="Miniature Models of the Fair — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MinimodNavChrome />

      <article className={styles.article} aria-labelledby="minimods02-title">
        <header className={styles.titleBar}>
          <h1 id="minimods02-title" className={styles.titleBarMain}>
            Miniature Models (continued)
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.photoGrid}>
            {GALLERY.map((item) => (
              <figure key={item.src} className={styles.gridFigure}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={235}
                  height={157}
                  unoptimized
                />
                <figcaption className={styles.gridCaption}>
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/minimods01"
        explicitPrevious
        overviewHref="/minimodsoverview"
        nextHref="/minimodsoverview"
      />
    </>
  );
}
