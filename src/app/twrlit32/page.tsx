import type { Metadata } from "next";
import Image from "next/image";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twrlit32.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

const GRID_IMAGES = [
  { src: "/images/twrlit32/tl96.01.jpg", width: 301, height: 294, alt: "Memo from The Boss page 1" },
  { src: "/images/twrlit32/tl96.02.jpg", width: 301, height: 294, alt: "Memo from The Boss page 2" },
  { src: "/images/twrlit32/tl96.03.jpg", width: 300, height: 294, alt: "Memo from The Boss page 3" },
  { src: "/images/twrlit32/tl96.04.jpg", width: 301, height: 294, alt: "Memo from The Boss page 4" },
  { src: "/images/twrlit32/tl96.05.jpg", width: 301, height: 294, alt: "Memo from The Boss page 5" },
  { src: "/images/twrlit32/tl96.06.jpg", width: 300, height: 294, alt: "Memo from The Boss page 6" },
  { src: "/images/twrlit32/tl96.07.jpg", width: 301, height: 294, alt: "Memo from The Boss page 7" },
  { src: "/images/twrlit32/tl96.08.jpg", width: 301, height: 294, alt: "Memo from The Boss page 8" },
  { src: "/images/twrlit32/tl96.09.jpg", width: 300, height: 294, alt: "Memo from The Boss page 9" },
] as const;

export const metadata: Metadata = {
  title:
    "The End of the Fair: Memo from The Boss — Tower of Light — nywf64.com",
  description:
    "Memo from The Boss — closing the Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light — end-of-fair memo grid (legacy twrlit32.html).
 */
export default function Twrlit32Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Tower of Light">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/twrlitoverview/hero-banner.jpg"
            alt="Tower of Light at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwrlitNavChrome />

      <article className={styles.article} aria-labelledby="twrlit32-title">
        <header className={styles.titleBar}>
          <h1 id="twrlit32-title" className={styles.titleBarMain}>
            The End of the Fair: Memo from The Boss
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.gridBorder}>
            <div className={styles.grid}>
              {GRID_IMAGES.map((img) => (
                <div key={img.src} className={styles.gridCell}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className={styles.gridImg}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.thanks}>
            <p>
              Webmaster&apos;s Note: Special thanks to Ines Hellendall, Gary
              Holmes, Bradd Schiffman and Bill Cotter for their contributions to
              our presentation of the Tower of Light
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/twrlit31"
        explicitPrevious
        overviewHref="/twrlitoverview"
        nextHref="/twrlitoverview"
      />
    </>
  );
}
