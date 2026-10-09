import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The End of the Fair — Sinclair — nywf64.com",
  description:
    "End of the Fair and dismantling of Sinclair Dinoland — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — The End of the Fair.
 * Body from legacy sinclair12.html.
 */
export default function Sinclair12Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sinclair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sinclairoverview/hero-banner.jpg"
            alt="Sinclair Dinoland at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SinclairNavChrome />

      <article className={styles.article} aria-labelledby="sinclair12-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair12-title" className={styles.titleBarMain}>
            The End of the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 460 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair12/farefair08.jpg"
                alt="The End of the Fair"
                width={460}
                height={311}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The <em>New York Daily News</em> captures glimpses of the end of the Fair in October, 1965 and the dismantling of the Sinclair Dinoland. (above) Workmen remove Struthiomimus from his location. (below) The moveable head of Brontosaurus is detached first before the rest of the massive dinosaur is taken from Dinoland.</p>
            <p className={styles.source}>Source: (top) <em>New York Daily News</em>, Tuesday, October 19, 1965</p>
            <p>_Photo: NEWS photo by Charles Payne</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 270 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair12/farefair10.jpg"
                alt="Sinclair Dinoland"
                width={270}
                height={252}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>Source: (bottom) <em>New York Daily News</em>, late October, 1965</p>
            <p>Photos: NEWS photos by Jim Hughes</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 270 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair12/farefair15.jpg"
                alt="Sinclair Dinoland"
                width={270}
                height={216}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Now, Even the Dinosaurs are Heading for Florida</p>
            <p>Triceratops leaves Hudson, N.Y., bound for Florida aboard a specially designed trailer</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair12/sincla52.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={230}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>Source: <em>The New York Times</em>, Thursday, February 3, 1966</p>
            <p>A drove of dinosaurs is making its way south from New York and will arrive in Florida this week for a five-day stand in Miami beginning next Wednesday.</p>
            <p>The life-sized reproductions of the beasts have been part of the Sinclair Refining Company's World Fair exhibit and are now part of a promotional road show that will take them to 40 shopping centers in 18 states during the next nine months.</p>
            <p>The Sinclair tour is one of several by major companies to take advantage of the shopping center as a sort of showcase for its promotional activities.</p>
            <p>Sinclair said it decided on the tour after individuals, schools, groups and even cities had asked to borrow or to be given one or all of the animals.</p>
            <p>The dinosaurs are being transported in a caravan of nine specially adapted 40-foot flatbed trailer trucks.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair11"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair13"
      />
    </>
  );
}
