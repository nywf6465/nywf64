import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Dinosaurs Today — Sinclair — nywf64.com",
  description:
    "Where the Sinclair Dinoland dinosaurs are today — nywf64.com.",
};

/**
 * Sinclair — The Dinosaurs Today.
 * Body from legacy sinclair14.html.
 */
export default function Sinclair14Page() {
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

      <article className={styles.article} aria-labelledby="sinclair14-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair14-title" className={styles.titleBarMain}>
            The Dinosaurs Today
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 325 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla67.jpg"
                alt="The Dinosaurs Today"
                width={325}
                height={220}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Sinclair's <em>Dinoland</em> toured the country again in 1967 and 1968 on their specially constructed flatbed trailers before the dinosaurs settled down to permanent homes.</p>
            <p>Here's where you can visit the Sinclair Dinoland dinosaurs today...</p>
            <p>Brontosaurus and Tyrannosaurus Rex ...</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 219 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla66.jpg"
                alt="Sinclair Dinoland"
                width={219}
                height={325}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Dinosaur Park Glen Rose, Texas</p>
            <p>... Still an impressive sight after over 50 years!</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 340 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla97.jpg"
                alt="Sinclair Dinoland"
                width={340}
                height={255}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>SOURCE: Photos courtesy of Wesley Treat</p>
            <p>© Copyright 2001 All Rights Reserved</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla63.jpg"
                alt="Sinclair Dinoland"
                width={300}
                height={225}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Triceratops ...</p>
            <p>Louisville Science Center Louisville, Kentucky</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 248 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla65.jpg"
                alt="Sinclair Dinoland"
                width={248}
                height={254}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>... at the Louisville Science Center</p>
            <p className={styles.source}>SOURCE: Photos Courtesy Gary Holmes Collection</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla118.jpg"
                alt="Sinclair Dinoland"
                width={300}
                height={235}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>© 2007 All Rights Reserved</p>
            <p>Stegosaurus ...</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 325 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla69.jpg"
                alt="Sinclair Dinoland"
                width={325}
                height={267}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Dinosaur National Monument Harpers Corner, Utah</p>
            <p>... located outside the Visitor's Center at Dinosaur National Monument</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 219 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla68.jpg"
                alt="Sinclair Dinoland"
                width={219}
                height={338}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>SOURCE: Photo Courtesy National Park Service</p>
            <p>© Copyright National Park Service, All Rights Reserved</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair14/sincla64.jpg"
                alt="Sinclair Dinoland"
                width={300}
                height={332}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Corythosaurus ...</p>
            <p>Riverside Park &amp; Zoo Independence, Kansas</p>
            <p>... greets visitors in Independence!</p>
            <p className={styles.source}>SOURCE: Photo Courtesy Riverside Park Ralph Mitchell Zoo</p>
            <p>© Copyright Riverside Park, All Rights Reserved</p>
            <p>Anklyosaurus ...</p>
            <p>Houston Museum of Natural Science Houston, Texas</p>
            <p>... found at the Houston Museum of Natural Science!!</p>
            <p className={styles.source}>SOURCE: Photo Courtesy Houston Museum of Natural Science</p>
            <p>© Copyright Houston Museum of Natural Science, All Rights Reserved</p>
            <p>Struthiomimus ...</p>
            <p>Milwaukee County Museum Milwaukee, Wisconsin</p>
            <p>... relegated to the back of the Dinosaur Hall at the Milwaukee County Museum</p>
            <p className={styles.source}>SOURCE: Photos Courtesy Gary Holmes Collection, © 2007 All Rights Reserved</p>
            <p>Trachodon ...</p>
            <p>Brookfield Zoo Chicago, Illinois</p>
            <p>... in a wooded setting at the Brookfield Zoo</p>
            <p className={styles.source}>SOURCE: Photo Courtesy www.thelope.com</p>
            <p>© Copyright thelope.com, All Rights Reserved</p>
            <p>Ornitholestes</p>
            <p>(whereabouts unknown)</p>
            <p>The dinosaurs were offered to the Smithsonian Institute in Washington, D.C. following their national tours. The Smithsonian declined the offer.</p>
            <p>Jonas Studios of Hudson, New York, continues to produce dinosaur models for display at various museums and institutions around the world.</p>
            <p>Footnotes:</p>
            <p>You can still buy Sinclair gasoline in the West and Midwest. Anyone interested in the company today should check out their website: http://www.sinclairoil.com, particularly the History section with a look back at Dinoland: http://www.sinclairoil.com/history/worlds_fair_01.html, and of course the merchandise section: http://store.sinclairoil.com/.</p>
            <p>Webmaster's note... As is often the case, these "Feature" stories on the exhibits at the Fair involve the contributions of many people. I am so thankful for the materials that others contribute because of how much they add to these presentations. In the case of the Sinclair Feature, I'd like to especially thank Tom Weakly for the audio selections from the actual Dinoland soundtrack from the Fair. Bill Cotter contributed most of the pictures that you see in the gallery and no tour of Dinoland could be complete without Bill's excellent photographs. And ... Mike Kraus who generously shared a number of his collectibles from Dinoland for everyone to enjoy! A special thank you to Greg Dawson, the organizer of the post-Fair tours of Dinoland who provided the publication describing the 1966 tour. Thanks go to Replication Devices of Tampa, Florida, who provided the photograph of the actual machine used to create the Mold-a-Rama dinos from the Fair. Thanks to Karl Baker for allowing me to reprint his father's photographs of the arrival at Flushing Meadows of the dinosuars. And my thanks to Bradd Schiffman and Gary Holmes who are always so supportive of these features and provide great tidbits from their collections to enhance these stories. Lastly, my thanks to the websites who supplied photographs of the dinosaurs in their current settings.</p>
            <p>Bill Young February, 2007</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair13"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclairoverview"
      />
    </>
  );
}
