import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Dinosaur Tour 1966 — Sinclair — nywf64.com",
  description:
    "Sinclair dinosaur tour of 1966 — after the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — Dinosaur Tour 1966.
 * Body from legacy sinclair13.html.
 */
export default function Sinclair13Page() {
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

      <article className={styles.article} aria-labelledby="sinclair13-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair13-title" className={styles.titleBarMain}>
            Dinosaur Tour 1966
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 583 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla48.jpg"
                alt="Dinosaur Tour 1966"
                width={583}
                height={481}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>For thirty-five years our Company has used, as its corporate symbol, a reproduction of the largest creature ever to roam the earth -- Brontosaurus, the giant reptile that spent some sixty million years in a world that was eventually inherited by Man. There are many interpretations one can give to this symbol as it relates to Sinclair: the size and power of our Company; the energy created eons ago, deep in the earth, by the vegetation and animal life that ultimately produced the petroleum products now available at our Sinclair stations throughout a good part of the United States; in short, the graphic meaning of one of nature's greatest natural resources -- oil.</p>
            <p>It was not until the 1964-1965 New York World's Fair, however, that even greater dimension was given to our familiar Brontosaurus. Although we hoped to have a successful exhibit we had no idea that our family of life-size dinosaurs, built of fiberglass in as exact detail as science could create, would generate such genuine interest and excitement that ten million visitors to the Fair would come to our prehistoric garden. Encouraged by this response we decided to launch a tour following the Fair and take our dinosaurs to the people.</p>
            <p>We traveled ten-thousand miles through twenty-five states and visited thirty-eight major cities in little less than ten months. Masses of people crowded the shopping centers that hosted our Dino Caravan, and when the 1966 tour ended, close to another ten million had seen our exhibit.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 596 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla56.jpg"
                alt="Sinclair Dinoland"
                width={596}
                height={320}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>You can appreciate the depth to which the project extended by noting that it reached the front pages of dozens of major metropolitan newspapers; became photographic features and backgrounds for professional and amateur alike; acted as the main topic of hundreds of radio and television programs; and provided a vital educational experience to hundreds of thousands of school children. The exhibit and the news that it stimulated saturated the media of entire areas and focused all-out community attention on our menagerie.</p>
            <p>We are so pleased with the results that we will tour again during 1967 -- and perhaps beyond that. We hope you will enjoy these memories as we review the Dinosaur Tour - 1966.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 193 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla49.jpg"
                alt="Sinclair Dinoland"
                width={193}
                height={294}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>C. G. Drescher, <em>President</em>,</p>
            <p>Sinclair Refining Company</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 283 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla53.jpg"
                alt="Sinclair Dinoland"
                width={283}
                height={242}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Sinclair Dinoland on tour in 1966</p>
            <h2 className={styles.heading}>THANKSGIVING, 1966: THE MACY PARADE</h2>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 252 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla54.jpg"
                alt="Sinclair Dinoland"
                width={252}
                height={219}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>2 MILLION WATCHED THE DINOSAURS FROM</h2>
            <h2 className={styles.heading}>THE STREET . . . AND 70 MILLION SAW THE</h2>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 589 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla51.jpg"
                alt="Sinclair Dinoland"
                width={589}
                height={399}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>PARADE ON TELEVISION</h2>
            <p className={styles.source}>Source: Booklet, <em>Sinclair Dinosaur Tour: 1966</em>, Presented Courtesy Greg Dawson Collection</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 242 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla50.jpg"
                alt="Sinclair Dinoland"
                width={242}
                height={175}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>A 30-second radio add spot copy announcing the Dinoland Tour at a local shopping center in Orlando, Florida.</p>
            <p className={styles.source}>Source: Presented Courtesy Mike Kraus Collection</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 236 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla55.jpg"
                alt="Sinclair Dinoland"
                width={236}
                height={154}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>On tour at a Florida shopping center - March, 1968</p>
            <p className={styles.source}>Source: Courtesy Bill Cotter Collection © Copyright 2007 Bill Cotter, All Rights Reserved</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 247 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla57.jpg"
                alt="Sinclair Dinoland"
                width={247}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 246 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla58.jpg"
                alt="Sinclair Dinoland"
                width={246}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 248 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla59.jpg"
                alt="Sinclair Dinoland"
                width={248}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 248 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla60.jpg"
                alt="Sinclair Dinoland"
                width={248}
                height={163}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 247 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla61.jpg"
                alt="Sinclair Dinoland"
                width={247}
                height={160}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 246 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla62.jpg"
                alt="Sinclair Dinoland"
                width={246}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 379 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla100.jpg"
                alt="Sinclair Dinoland"
                width={379}
                height={497}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 450 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair13/sincla98.jpg"
                alt="Sinclair Dinoland"
                width={450}
                height={307}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair12"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair14"
      />
    </>
  );
}
