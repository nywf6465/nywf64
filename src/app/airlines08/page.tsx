import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "Delta Air Lines — Airlines & The Fair — nywf64.com",
  description:
    "Delta Air Lines advertisement from the 1964 & 1965 Official Guide — on nywf64.com.",
};

const GRID_PHOTOS = [
  { file: "airlines42.1.jpg", width: 300, height: 331 },
  { file: "airlines42.2.jpg", width: 300, height: 331 },
  { file: "airlines42.3.jpg", width: 300, height: 330 },
  { file: "airlines42.4.jpg", width: 300, height: 330 },
  { file: "airlines42.5.jpg", width: 300, height: 330 },
  { file: "airlines42.6.jpg", width: 300, height: 330 },
] as const;

/**
 * Airlines feature page 8 (legacy airlines09.html remapped to /airlines08).
 * Stack: hero → Airlines nav (Page 9) → navy title bar → ad collage → nav2
 * PREVIOUS → /airlines07; NEXT → /airlines09
 */
export default function Airlines08Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines08-title">
        <header className={styles.titleBar}>
          <h1 id="airlines08-title" className={styles.titleBarMain}>
            Delta Air Lines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.photoGrid}>
            <div className={styles.photoGridTableTwo}>
              {GRID_PHOTOS.map(({ file, width, height }) => (
                <Image
                  key={file}
                  src={`/images/airlines08/${file}`}
                  alt=""
                  width={width}
                  height={height}
                  className={styles.photoGridPhoto}
                  unoptimized
                />
              ))}
            </div>
            <p className={styles.sourceLeft}>
              Source: Advertisement{" "}
              <em>1964 &amp; 1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines07"
        explicitPrevious
        nextHref="/airlines09"
      />
    </>
  );
}
