import type { Metadata } from "next";
import Image from "next/image";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./coke08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion Guide — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion guide — World of Refreshment, Global Holiday, ham radio, USO, and Tower of Music — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola — Pavilion Guide.
 * Body from legacy coke08.html (custom guide page; page scans + copy).
 * Legacy wording (Rio de Janerio, your are, Coca-Company, carilloneurs) preserved.
 *
 * Stack: hero → CokeNavChrome → navy title → article → Nav2Bar.
 */
export default function Coke08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Coca-Cola">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/cokeoverview/hero-banner.jpg"
            alt="Coca-Cola at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CokeNavChrome />

      <article className={styles.article} aria-labelledby="coke08-title">
        <header className={styles.titleBar}>
          <h1 id="coke08-title" className={styles.titleBarMain}>
            Pavilion Guide
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.coverStack}>
            <Image
              src="/images/coke08/coke13.jpg"
              alt="Cover"
              width={171}
              height={500}
              className={styles.coverImg}
              unoptimized
            />
            <Image
              src="/images/coke08/coke14.jpg"
              alt="things go better with Coke"
              width={171}
              height={194}
              className={styles.coverImg}
              unoptimized
            />
            <Image
              src="/images/coke08/coke15.jpg"
              alt="Trademark"
              width={171}
              height={53}
              className={styles.coverImg}
              unoptimized
            />
          </div>

          <h2 className={styles.sectionTitle}>&quot;World of Refreshment&quot;</h2>

          <div className={styles.body}>
            <p>
              Within The Coca-Cola Company Pavilion you will enjoy the
              refreshment and excitement of far-away places as you join us for a
              free trip through the unique re-creations of five exotic locales.
              Special devices stimulate the senses to give you an amazingly
              realistic experience.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/coke08/coke16.jpg"
              alt="Global Holiday"
              width={353}
              height={595}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              Your first stop is the bustling city of Hong Kong. Here among
              oriental shops, junks and sampans, your ears capture the clatter of
              rickshaws on cobblestone streets and the tinkle of Chinese music.
            </p>
            <p>
              There is a complete change of mood on your next stop, which finds
              you in a serene Victorian garden with a majestic view of the
              awe-inspiring Taj Mahal. Steps later your are in a Bavarian ski
              lodge high on a mountain top. You see the snow-capped Alps with
              skiers speeding down the treacherous slopes. The sounds of music
              and a crackling fire add to the atmosphere of fun and friendship.
            </p>
            <p>
              From snowy Alpine peaks you walk into a fragrant, cool and
              refreshing tropical forest near an ancient temple of Angkor Wat.
              Here only the call of birds and the chatter of monkeys break the
              mysterious stillness of the forest. Soon it is night and you are on
              the promenade deck of a cruise ship riding at anchor off the coast
              of Rio de Janerio. Across the water twinkle the lights of famous
              Copacabana beach. Here, as Latin music steals softly from the
              ship&apos;s lounge, you conclude your memorable and realistic Global
              Holiday.
            </p>
          </div>

          <div className={styles.logoRow}>
            <Image
              src="/images/coke08/coke17.jpg"
              alt="American Radio Relay League"
              width={171}
              height={113}
              unoptimized
            />
          </div>

          <div className={styles.body}>
            <p>
              The Coca-Cola Company Pavilion houses the finest facility ever
              built for amateur radio communications. This special three-position
              sending and receiving station will be sponsored by the famous
              American Radio Relay League and operated by the Hudson Amateur
              Radio Council. You will be able to see and hear these amateur
              operators -- popularly called Hams -- communicating from the Fair
              with their counterparts around the world.
            </p>
            <p>
              If you happen to be a licensed Ham yourself (and some 250,000
              Americans are), just present your credentials and you will be
              entitled to transmit from the studio.
            </p>
          </div>

          <div className={styles.logoRow}>
            <Image
              src="/images/coke08/coke18.jpg"
              alt="USO Logo"
              width={171}
              height={67}
              unoptimized
            />
          </div>

          <div className={styles.body}>
            <p>
              The USO Lounge at the World&apos;s Fair is also located in the
              Coca-Cola Company Pavilion to accommodate Fair-going American and
              Allied Service personnel and their dependents.
            </p>
            <p>
              Among its features is a direct tie-line to the USO Times Square
              Center so that service personnel will receive the total services
              now available through USO of New York City.
            </p>
            <p>
              These services include tickets, entertainment, tours, accommodation
              services, housing placement, counseling, guidance and referrals.
            </p>
          </div>

          <div className={styles.towerWrap}>
            <Image
              src="/images/coke08/coke19.jpg"
              alt="Tower of Music"
              width={311}
              height={749}
              className={styles.photo}
              unoptimized
            />
          </div>

          <div className={styles.body}>
            <p>
              Focal point of the pavilion is The Coca-Cola Tower that stretches
              120 feet into the sky.
            </p>
            <p>
              In a glass enclosed area at its base is the tremendous console that
              brings to life the 610 electronic bells of the world&apos;s largest
              and finest carillon.
            </p>
            <p>
              At intervals throughout the day, Fairgoers will thrill to the
              musical voice of the carillon as it adds a new dimension to the
              festive atmosphere. Visitors to The Coca-Cola Company Pavilion can
              witness the skilled artistry of world-famous carilloneurs as they
              perform at the console.
            </p>
            <p>
              This unique musical system -- made possible by modern advances in
              electronics -- combines an unprecedented variety of bells into a
              single instrument. The carillon comprises 61 notes in chromatic
              range of each of the following type bells: Flemish, Harp, Celesta,
              Quadra, Minor Tierce, Campana, Aeolian, Bourdon, Celestial and
              Baroque.
            </p>
            <p>
              The entire carillon system was designed and built for The
              Coca-Company by Schulmerich Carillons, Inc. of Sellersville,
              Pennsylvania.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/coke07"
        explicitPrevious
        overviewHref="/cokeoverview"
        nextHref="/coke09"
      />
    </>
  );
}
