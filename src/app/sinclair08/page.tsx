import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Dinosaurs Come to the Fair — Sinclair — nywf64.com",
  description:
    "Sinclair dinosaurs arrive at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — The Dinosaurs Come to the Fair.
 * Body from legacy sinclair08.html.
 */
export default function Sinclair08Page() {
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

      <article className={styles.article} aria-labelledby="sinclair08-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair08-title" className={styles.titleBarMain}>
            The Dinosaurs Come to the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 540 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla03.jpg"
                alt="The Dinosaurs Come to the Fair"
                width={540}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Spectators line the Hudson River to watch the barge carrying the Sinclair Dinosaurs to the Fairgrounds</p>
            <p className={styles.source}>SOURCE: Photo presented courtesy Greg Dawson Collection</p>
            <p className={styles.source}>Source: All Photos presented courtesy Karl Baker collection and are © Copyright 2005 Karl Baker, All Rights Reserved</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 269 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building149.jpg"
                alt="Sinclair Dinoland"
                width={269}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Sinclair's <em>Dinoland</em> dinosaurs were constructed in upstate New York at the Louis Paul Jonas Studios in Hudson, N.Y. and floated by barge down the Hudson River to the Fair site. The nine dinosaurs on a floating barge caused a traffic jam as people stopped to watch this strange sight. After they arrived at the Fair's Marina they were trucked to the Sinclair Pavilion site at Flushing Meadow. Josef Seebacher was on hand for their arrival and captured the moment on film.</p>
            <p>Tyrannosaurus Rex</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building147.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Corythosaurus</p>
            <p>Anklyosaurus</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building146.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={270}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Triceratops</p>
            <p>Trachodon</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building150.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={271}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Struthiomimus</p>
            <p>Stegosaurus</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building151.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={268}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>Source: Shareholder Invitation</p>
            <p>Your visit to the 1964-65 New York World's Fair will be an unforgettable experience. More than 300 exhibitors have created on Flushing Meadows an exciting, informative exposition offering probably the most "firsts" ever assembled.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 268 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building148.jpg"
                alt="Sinclair Dinoland"
                width={268}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Sinclair Dinoland, nearing completion for the April opening, is one of these "firsts" -- an unequaled recreation of the age of dinosaurs. Located in the Fair's Transportation section, Dinoland will focus the attention of millions on Sinclair's trademark and operations.</p>
            <p>Sinclair Refining Company will serve visitors, too, as exclusive operator of service stations in the Fair's two largest parking fields.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/building152.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={270}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>A <em>special color map</em> of the World's Fair site and the best routes to it has been prepared by Sinclair. For a copy and other Fair information, write Sinclair Auto Tour Service, 600 Fifth Ave. New York, N. Y. 10020.</p>
            <p className={styles.source}>Source: Sinclair advertisement, presented courtesy Bradd Schiffman Collection</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 515 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla19.jpg"
                alt="Sinclair Dinoland"
                width={515}
                height={232}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>Source: NY World's Fair Progress Report No. 7, presented courtesy Bradd Schiffman Collection</p>
            <p>Sinclair was the exclusive operator of these Space Age looking service stations located in the Fair's two largest parking fields.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 167 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla22.jpg"
                alt="Sinclair Dinoland"
                width={167}
                height={92}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 198 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla21.jpg"
                alt="Sinclair Dinoland"
                width={198}
                height={37}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 224 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla20.jpg"
                alt="Sinclair Dinoland"
                width={224}
                height={464}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 357 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla47.jpg"
                alt="Sinclair Dinoland"
                width={357}
                height={132}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 360 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair08/sincla70.jpg"
                alt="Sinclair Dinoland"
                width={360}
                height={244}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair07"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair09"
      />
    </>
  );
}
