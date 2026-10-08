import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Experience Dinoland with AUDIO! — Sinclair — nywf64.com",
  description:
    "Experience Sinclair Dinoland with audio narrations — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — Experience Dinoland with AUDIO!.
 * Body from legacy sinclair06.html.
 */
export default function Sinclair06Page() {
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

      <article className={styles.article} aria-labelledby="sinclair06-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair06-title" className={styles.titleBarMain}>
            Experience Dinoland <em>with AUDIO!</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p className={styles.lead}>Bill Cotter, World's Fair enthusiast, has been collecting images of the 1964/1965 New York World's Fair for many years. He shares with us here some excellent views of <em>Dinoland</em>. If you would like to see more images of Bill's fabulous collection of World's Fair images, visit his website WorldsFairPhotos.com.</p>
            <p>Tom Weakley, Assistant Manager of <em>Dinoland</em>, had the presence of mind back in October,1965 to save the audio narration of Sinclair's presentation at the Fair. Our thanks to Tom for sharing the narrations with Fair fans some forty-plus years later!</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla02.jpg"
                alt="Our first stop is to take a look at Trachodon. 1500 teeth! Is he really harmless?"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Our first stop is to take a look at Trachodon. 1500 teeth! Is he really harmless?</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/02-Trachodon.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla73.jpg"
                alt="Who's this little fella on the other side of the path? It's Ornitholestes. A flesh eater that's the size of a turkey."
                width={300}
                height={288}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Who's this little fella on the other side of the path? It's Ornitholestes. A flesh eater that's the size of a turkey.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/07-Ornitholestes.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla72.jpg"
                alt="Here's the real monster! Tyrannosaurus. King of the dinosaurs!"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Here's the real monster! Tyrannosaurus. King of the dinosaurs!</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/03-Tyranosaurus.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla71.jpg"
                alt="Triceratops. Ready to do battle with the T-Rex."
                width={400}
                height={262}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Triceratops. Ready to do battle with the T-Rex.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/04-Triceratops.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 264 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla75.jpg"
                alt="Ankylosaurus. A walking fortress."
                width={264}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Ankylosaurus. A walking fortress.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/05-Ankylosaurus.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla74.jpg"
                alt="In a water setting we find Corythosaurus. With a face only a mother could love?"
                width={400}
                height={264}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>In a water setting we find Corythosaurus. With a face only a mother could love?</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/06-Corythosaurus.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla76.jpg"
                alt="Everybody's favorite at the top of the hill -- Brontosaurus!"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Everybody's favorite at the top of the hill -- Brontosaurus!</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/09-Brontosaurus.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla77.jpg"
                alt="Bony plates provided the ultimate protection for Stegosaurus. We find him on the pathway as we head toward the Sinclair Petroleum displays."
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Bony plates provided the ultimate protection for Stegosaurus. We find him on the pathway as we head toward the Sinclair Petroleum displays.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/08-Stegosaurus.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla79.jpg"
                alt="The last dinosaur on our tour of Dinoland is Struthiomimus."
                width={400}
                height={270}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>The last dinosaur on our tour of Dinoland is Struthiomimus.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/01-Struthiomimus.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 264 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla80.jpg"
                alt="Dinoland Exit Diorama depicting the geologic conditions that combined to create the crude oil used in the production of petroleum products by Sinclair Refining."
                width={264}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Dinoland Exit Diorama depicting the geologic conditions that combined to create the crude oil used in the production of petroleum products by Sinclair Refining.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/10-Diorama-Narration.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla78.jpg"
                alt="Our Sinclair Dinoland tour ends with a display of Sinclair's Diversified Petroleum Products."
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Our Sinclair Dinoland tour ends with a display of Sinclair's Diversified Petroleum Products.</figcaption>
          </figure>
          <div className={styles.audioBlock}>
            <div className={styles.audioLabel}>
              <Image src="/images/sinclair06/sound.gif" alt="" width={20} height={23} unoptimized />
              <span>Narration: LISTEN!</span>
            </div>
            <audio className={styles.audioPlayer} controls preload="metadata" src="/audio/sinclair/11-Sinclair-Serves-the-World.mp3">
              Your browser does not support the audio element.
            </audio>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla81.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={270}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla82.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 264 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla83.jpg"
                alt="Sinclair Dinoland"
                width={264}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla84.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla85.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla87.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={264}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 264 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla86.jpg"
                alt="Sinclair Dinoland"
                width={264}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla88.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={270}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla91.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={268}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla89.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={268}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla90.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={266}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla95.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla94.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla96.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla93.jpg"
                alt="Sinclair Dinoland"
                width={350}
                height={336}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla92.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={269}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 368 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair06/sincla45.jpg"
                alt="Sinclair Dinoland"
                width={368}
                height={446}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <p className={styles.source}>Source: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2007 Bill Cotter, All Rights Reserved</p>
          <p className={styles.source}>Source: Official Souvenir Book - 1964/1965 New York World&apos;s Fair, presented courtesy Bradd Schiffman Collection</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair05"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair07"
      />
    </>
  );
}
