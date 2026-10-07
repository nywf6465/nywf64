import type { Metadata } from "next";
import Image from "next/image";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import {
  ARCHITECTURE_BULLETS,
  INLINE_FIGURES,
  MODEL_CAPTION,
  PANCHA_SILA,
  TRANSCRIPT_PARAGRAPHS,
} from "./transcript";
import styles from "./indones05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Indonesia — nywf64.com",
  description:
    "Groundbreaking ceremonies for the Indonesia Pavilion — model photograph and full remarks transcript from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy indones05.html (Adobe Reader references omitted). */
export default function Indones05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Indonesia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/indonesoverview/hero-banner.jpg"
            alt="Indonesia at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IndonesNavChrome />

      <article className={styles.article} aria-labelledby="indones05-title">
        <header className={styles.titleBar}>
          <h1 id="indones05-title" className={styles.titleBarMain}>
            Pamphlet: Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.modelFigure}>
            <Image
              src="/images/indones05/model.jpg"
              alt="Cover of Groundbreaking Brochure — model of the Indonesia Pavilion"
              width={600}
              height={395}
              className={styles.modelImg}
              unoptimized
            />
            <figcaption className={styles.modelCaption}>{MODEL_CAPTION}</figcaption>
          </figure>
          <p className={styles.modelSource}>
            SOURCE: Groundbreaking Brochure, The Indonesia Pavilion
          </p>

          {TRANSCRIPT_PARAGRAPHS.map((text, index) => {
            const figure = INLINE_FIGURES.find((f) => f.afterParagraph === index);
            return (
              <div key={`p-${index}`}>
                <p className={styles.paragraph}>{text}</p>
                {figure ? (
                  <figure className={styles.inlineFigure}>
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={figure.width}
                      height={figure.height}
                      className={styles.inlineImg}
                      unoptimized
                    />
                    <figcaption className={styles.inlineCaption}>
                      {figure.caption}
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            );
          })}

          <div className={styles.clear} />

          <hr className={styles.rule} />

          <p className={styles.archTitle}>ARCHITECTURE OF THE INDONESIAN</p>
          <p className={styles.archTitle}>PAVILION NEW YORK WORLD&apos;S FAIR,</p>
          <p className={styles.archTitle}>1964 - 1965</p>
          <Image
            src="/images/indones05/indones08.jpg"
            alt="Architecture of Indonesia Pavilion"
            width={500}
            height={365}
            className={styles.archImg}
            unoptimized
          />
          {ARCHITECTURE_BULLETS.map((bullet) => (
            <p key={bullet.slice(0, 40)} className={styles.archBullet}>
              {bullet}
            </p>
          ))}
          <div className={styles.pancha}>
            <p className={styles.panchaItem}>{PANCHA_SILA[0]}</p>
            <div className={styles.panchaRow}>
              <span>{PANCHA_SILA[1]}</span>
              <span>{PANCHA_SILA[3]}</span>
            </div>
            <div className={styles.panchaRow}>
              <span>{PANCHA_SILA[2]}</span>
              <span>{PANCHA_SILA[4]}</span>
            </div>
          </div>
          <p className={styles.archSource}>
            SOURCE: Card, <em>The Architecture of the Indonesian Pavilion</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/indones04"
        explicitPrevious
        overviewHref="/indonesoverview"
        nextHref="/indones06"
      />
    </>
  );
}
