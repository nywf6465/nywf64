import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jordan09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Mural of a Refugee — Jordan — nywf64.com",
  description:
    "Mural of a Refugee — Jordan Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

const poemLeft = [
  "Before you go,",
  "Have you a minute to spare,",
  "To hear a word on Palestine",
  "And perhaps to help us right a wrong?",
  "Ever since the birth of Christ",
  "And later with the coming of Mohammed,",
  "Christians, Jews and Moslems, believers",
  ".....in one God,",
  "Lived there in peaceful harmony.",
  "For centuries it was so,",
  "Until strangers from abroad,",
  "Professing one thing, but underneath,",
  ".....another,",
  "Began buying up land and stirring up the",
  ".....people.",
  "Neighbors became enemies",
  "And fought against each other,",
  "The strangers, once thought terror's victims,",
  "Became terror's fierce practioners.",
  "Seeking peace at all costs, including the",
  ".....cost of justice,",
  "The blinded world, in solemn council, split",
  ".....the land in two,",
] as const;

const poemRight = [
  "Tossing to one side",
  "The right of self-determination.",
  "What followed then perhaps you know.",
  "Seeking to redress the wrong, our nearby",
  ".....neighbors",
  "Tried to help us in our cause,",
  "And for reasons, not in their control, did not",
  ".....succeed.",
  "Today, there are a million of us,",
  "Some like us, but many like my mother,",
  "Wasting their lives in exiled misery",
  "Waiting to go home.",
  "But even now, to protect their gains ill-got,",
  "As if the land was theirs and had the right,",
  "They're threatening to disturb the Jordan's",
  ".....course",
  "And make the desert bloom with warriors.",
  "And who's to stop them?",
  "The world seems not to care, or is blinded",
  ".....still.",
  "That's why I'm glad you stopped",
  "And heard the story.",
] as const;

export default function Jordan09Page() {
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

      <article className={styles.article} aria-labelledby="jordan09-title">
        <header className={styles.titleBar}>
          <h1 id="jordan09-title" className={styles.titleBarMain}>
            <em>Mural of a Refugee</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.topGrid}>
            <Image
              src="/images/jordan09/jordan14.jpg"
              alt="Artist's Rendering - Jordan Pavilion"
              width={300}
              height={238}
              unoptimized
            />
            <div className={styles.exhibitList}>
              <Image
                src="/images/jordan09/jordan15.jpg"
                alt="Jordanian Clothing Display"
                width={300}
                height={230}
                unoptimized
              />
              <p>
                <strong>AT THE</strong>
              </p>
              <h2>JORDAN PAVILION</h2>
              <p>
                <strong>YOU CAN VISIT:</strong>
              </p>
              <h3>THE HOLY LAND EXHIBIT</h3>
              <p>
                A photographic survey of the Holy Places in Jordan.
              </p>
              <h3>CRADLE OF CIVILIZATION EXHIBIT</h3>
              <p>
                An exhibit of the archaeological findings in Jordan. Of interest
                are the finds illustrating the evolution of lamps in history.
              </p>
              <h3>MODERN JORDAN</h3>
              <p>Educational, Industrial and Economic Progress.</p>
              <h3>THE DEAD SEA SCROLLS EXHIBIT</h3>
              <p>
                The Dead Sea Scrolls which were uncovered as a result of the most
                sensational discovery of the century are at the Jordan Pavilion in
                New York.
              </p>
              <h3>THEATER</h3>
              <p>
                Films about different aspects of the country will be shown.
              </p>
            </div>
          </div>

          <Image
            src="/images/jordan09/jordan16.jpg"
            alt="Mural of a Refugee"
            width={600}
            height={386}
            className={styles.muralScan}
            unoptimized
          />

          <div className={styles.poemGrid}>
            <div>
              {poemLeft.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div>
              {poemRight.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: Brochure: Mural of a Refugee - Pavilion of Jordan
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan08"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan10"
      />
    </>
  );
}
