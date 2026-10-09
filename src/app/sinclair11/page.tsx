import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "THE Souvenir of the Fair — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland Mold-a-Rama souvenirs — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — THE Souvenir of the Fair.
 * Body from legacy sinclair11.html.
 */
export default function Sinclair11Page() {
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

      <article className={styles.article} aria-labelledby="sinclair11-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair11-title" className={styles.titleBarMain}>
            THE Souvenir of the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 174 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla12.jpg"
                alt="THE Souvenir of the Fair"
                width={174}
                height={251}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>A vintage Mold-a-Rama machine of the sort millions of Fairgoers used to build their very own souvenir from Sinclair's Dinoland.</p>
            <p className={styles.source}>SOURCE: Photo © 2007 Replication Devices</p>
            <p>Their popularity is indisputable. Collectors call them <em>Sinclair Dinoland Waxy-Plastic Dinosaurs</em>. The real name for these injection-molded dinosaurs are <em>Mold-a-Ramas</em>. According to Replication Devices of Tampa, Florida, the company that still manufactures and sells the do-it-yourself plastic injection machines that made them, Mold-a-Ramas have been in existence since the early 1960s, starting at the 1964/1965 New York World's Fair and, afterward, traveling the country to various Sinclair Oil Company Gas Stations that hosted the post-Fair traveling exhibit of Sinclair Dinoland.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla05.jpg"
                alt="Sinclair Dinoland"
                width={320}
                height={239}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The Mold-a-Rama dinosaurs were a wonderful and <em>affordable</em> souvenir of the Fair. Then, like now, every kid had a fascination with dinosaurs. And at only 25c a model, kids could take home a souvenir from Dinoland that they made as they watched and yet was easy on mom and dad's World's Fair budget!</p>
            <p>A note to collectors: Mold-a-Rama dinosaurs produced at the Fair bear the inscription "1964-1965 New York World's Fair." Mold-a-Rama Sinclair Dinoland dinosaurs continued to be produced <em>after</em> the Fair, but these do not have the World's Fair inscription.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla06.jpg"
                alt="Sinclair Dinoland"
                width={320}
                height={241}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Today, the Sinclair dinosaur Mold-a-Ramas are among some of the most prolific souvenirs to be found in online auctions of 1964/1965 New York World's Fair memorabilia. Yet they have kept their popularity, snapped up by aging baby-boomer Fairgoers wishing to buy back a bit of their childhood memories.</p>
            <p>Sinclair Dinoland Mold-a-Rama dinosaurs were available in seven different dinosaur designs and came in many different colors. They cost 25c to make and were a popular and <em>affordable</em> souvenir of the Fair.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla08.jpg"
                alt="Sinclair Dinoland"
                width={320}
                height={239}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>SOURCE: Photos from online auctions</p>
            <p>Souvenirs from <em>Sinclair</em></p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla07.jpg"
                alt="Sinclair Dinoland"
                width={320}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>From the amazing Mike Kraus Collection collection of New York World's Fair memorabilia, here's more souvenirs from Sinclair's participation in the Fair...</p>
            <p>Dealer Promos! Below: Its the "Dino Playmate" and the "Bag-O-Dinos" which were available at <em>Sinclair</em> Stations during the run of the Fair. A large banner banner advertising the Bag-O-Dinos and a poster advertising the "Trip 'n Travel Prize-O-Rama" contest <em>Sinclair</em> held in conjuction with their World's Fair participation.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla09.jpg"
                alt="Sinclair Dinoland"
                width={320}
                height={239}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Left: <em>Sinclair</em> featured the Fair in a big way on every give-away roadmap. Right: A poster advertising Dinoland</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 320 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla11.jpg"
                alt="Sinclair Dinoland"
                width={320}
                height={241}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla112.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={300}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla113.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={250}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla115.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={323}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 202 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla114.jpg"
                alt="Sinclair Dinoland"
                width={202}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 310 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair11/sincla116.jpg"
                alt="Sinclair Dinoland"
                width={310}
                height={400}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair10"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair12"
      />
    </>
  );
}
