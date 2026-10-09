import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/betlivTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Humane Society of the United States / Beech Nut Theatre / Culligan — Better Living Center — nywf64.com",
  description:
    "Humane Society of the United States, Beech Nut Theatre, and Culligan at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

function BillCotterSource() {
  return (
    <p className={styles.source}>
      SOURCE: Photo presented courtesy Bill Cotter collection © 2010 Bill
      Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
      <u>fabulous</u> collection of World&apos;s Fair photographs at his
      website{" "}
      <a
        href="http://www.worldsfairphotos.com/"
        target="_blank"
        rel="noreferrer"
      >
        WorldsFairPhotos.com
      </a>
      .
    </p>
  );
}

/**
 * Better Living Center — Humane Society / Beech Nut Theatre / Culligan.
 * Body from legacy betliv19.html. Legacy wording and typos are preserved
 * (Unites States, must e found, old-=fashioned, Milday, Beach-Nut, Foor).
 *
 * Stack: hero → BetlivNavChrome → navy titles → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv19Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv19-title">
        <header className={styles.titleBar}>
          <h1 id="betliv19-title" className={styles.titleBarMain}>
            Humane Society of the United States
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.wideInner}`}>
          <div className={styles.hsusSplit}>
            <div>
              <div className={styles.hsusCard}>
                <Image
                  src="/images/betliv19/hsus-logo.jpg"
                  alt="Humane Society of the United States logo"
                  width={50}
                  height={56}
                  className={styles.hsusLogo}
                  unoptimized
                />
                <h2>
                  The
                  <br />
                  Humane Society
                  <br />
                  of the United States
                </h2>
                <p className={styles.groundFloor} style={{ marginTop: "0.85rem" }}>
                  AT THE WORLD&apos;S FAIR
                </p>
                <Image
                  src="/images/betliv19/amory-friends.jpg"
                  alt="Cleveland Amory & Friends"
                  width={290}
                  height={267}
                  className={`${styles.photoImg} ${styles.photoPlain}`}
                  unoptimized
                />
                <p className={styles.hsusCaption}>
                  <em>Left to right:</em> Nicky, Mr. Phifer, Mr. Amory, Donna,
                  Lady Guinevere, Jester, Mrs. D&apos;Essen, Ryda, Sir
                  Llancelot <em>(two l&apos;s)</em> and Morgan.
                </p>
                <p className={styles.groundFloor}>
                  THE GROUND FLOOR -
                  <br />
                  THE BETTER LIVING CENTER
                </p>
              </div>

              <hr className={styles.rule} />

              <h2 className={styles.sectionHeading}>What is a Humane Society?</h2>
              <div className={styles.essay}>
                <p>
                  The dictionary defines &quot;humane&quot; as &quot;having
                  what are considered the best qualities of mankind.&quot; And
                  first among these qualities is, of course, an actual part of
                  the word &quot;mankind&quot; - the word &quot;kind.&quot; A
                  humane Society wants, in short, not just human beings, but
                  humane beings.
                </p>
                <p>
                  The Humane Society of the Unites States, or HSUS, as it is
                  known, was organized as recently as 1952. Yet in less than a
                  score of years it has grown to be the largest national Society
                  in the world for the prevention of cruelty to animals. There
                  are local SPCA&apos;s all over the country, but they are
                  independent organizations and are even independent of the
                  &quot;American&quot; SPCA, which is a New York organization
                  only. The HSUS, in contrast, has either branches and
                  affiliates or members in every state in the Union and more
                  importantly, it also works closely with <em>all</em> humane
                  societies, whether they are HSUS affiliated or not, and
                  whether the job consists of rescuing an individual stray,
                  reorganizing a whole shelter operation, policing a rodeo or
                  circus, or sponsoring legislation such as the Federal Humane
                  Slaughter Act of 1958.
                </p>
                <p>
                  Today, any humane Society worthy of the name realizes that
                  while we are, on the one hand, in the midst of the greatest
                  pet boom in history, we are also, on the other hand, living in
                  a sad and dwindling world for wildlife and a world which is,
                  through neglect and surplus breeding, a terrifyingly inhumane
                  one for literally millions of unwanted dogs and cats. Spaying
                  bills are essential - so, too, because so many state
                  anti-cruelty laws specifically exempt laboratories, is a
                  federal bill to protect laboratory animals. On this subject,
                  between the anti-vivisectionists, who believe with religious
                  fervor that there should be no use of animals for
                  experimentation, and today&apos;s &quot;research
                  unlimited&quot; which believes, with equal fervor, in every
                  conceivable experimental use, a middle-ground can and must e
                  found - for the use of animals but not their{" "}
                  <em>ab</em>use. This middle-ground must establish ground
                  rules and foul lines whereby genuine necessary research can
                  proceed unimpeded, and yet whereby the 300,000,000 animals in
                  our laboratories will be protected every step of the way -
                  from unjust pound seizure and unscrupulous dog dealers to
                  unnecessary cruelty and needless repetition of experiments in
                  grant-happy institutions.
                </p>
                <p>
                  Finally, a humane Society worthy of the name is not just for
                  animals <em>for</em> animals - it is for animals <em>for</em>{" "}
                  people. While it believes that the least cruelty to the least
                  creature diminishes us all, it is a resolute in its opposition
                  to cruelty to children and mob violence as it is to
                  bullfighting and steel traps. And, looking to the future, it
                  seeks to enlist a whole new generation of humane beings - who
                  may be discovering for the first time a broad-scale charity in
                  which they themselves can play a meaningful role and through
                  which they may spearhead, on a broad front, an all-out assault
                  on today&apos;s age of violence.
                </p>
                <p className={styles.signoff}>CLEVELAND AMORY</p>
              </div>
            </div>

            <div>
              <h2 className={styles.sectionHeading}>The Exhibits</h2>
              <div className={styles.essay}>
                <p className={styles.exhibitTitle}>1 The Peaceable Kingdom</p>
                <p>
                  A living illustration, in a living-room, of what mutual
                  understanding and respect have accomplished when more than a
                  score of highly individual animals and humans have learned to
                  live together - a United Nations of Nature.
                </p>
                <p className={styles.exhibitTitle}>2 The Barnyard Nursery</p>
                <p>
                  A re-creation of an old-=fashioned farmyard in which one sees
                  the beginning of the educational relationships so essential to
                  harmonious living - in these days perhaps even more than then.
                </p>
                <p className={styles.exhibitTitle}>
                  3 The &quot;Pan-Humanitarian&quot; Room
                </p>
                <p>
                  A room dedicated to the concept of unity, and the areas of
                  basic agreement, among humane organizations - from the Mass.
                  SPCA to the Florida Federation of Humane Societies, from the
                  National Catholic Society for Animal Welfare to the Animal
                  Welfare Institute, from the Wayside Waifs to the Defenders of
                  Wildlife.
                </p>
                <p className={styles.exhibitTitle}>
                  4 The Seeing Eye - &quot;Gateway to Freedom&quot;
                </p>
                <p>
                  One of the famed Seeing Eye Dogs and her litter of pups,
                  together with a visual presentation demonstrating not only how
                  Seeing Eye Dogs are trained but also how their owners are
                  trained to work with them.
                </p>
                <p className={styles.exhibitTitle}>5 The Workshop</p>
                <p>
                  This reconstruction of an early colonial kitchen emphasizes
                  the fact that sheep are the second oldest species domesticated
                  by man, preceded only by the dog, and demonstrates that lambs,
                  frequently brought into the kitchen immediately after birth,
                  became, because of the close association with the farm family,
                  the outstanding family pet of early America.
                </p>
                <p className={styles.exhibitTitle}>6 The Rumpus Room</p>
                <p>
                  In this &quot;play room&quot; a dozen or more puppies and
                  kittens illustrate that, with an animal as with a child,
                  attention and affection during infancy are as important as
                  food itself.
                </p>
                <p className={styles.exhibitTitle}>7 Milady&apos;s Boudoir</p>
                <p>
                  In a lady&apos;s dressing room, a white peacock, a native of
                  Nepal, where it is a capital offense to kill one, and a blue
                  peacock, a native of the lowland of India, together
                  illustrate, by their beauty alone, why for centuries Orientals
                  have held them in more esteem than any other animal. The
                  American Golden Eagle, the symbol of the U.S.A., is in
                  contrast, the most graphic illustration of the unity of power
                  and beauty.
                </p>
                <p className={styles.exhibitTitle}>8 The Den</p>
                <p>
                  Once the inhabiters of more of the world than any other form
                  of wildlife, the wolf is today, through man&apos;s constant
                  and now needless persecution, facing extinction. His only
                  future, like that of his friend the coyote, may be, as these
                  are, as a personal pet. And what more could a man want in his
                  study - a wolf and a pretty girl?
                </p>
              </div>

              <hr className={styles.rule} />

              <div className={styles.poemBox}>
                <p>
                  <span className={styles.poemDrop}>I </span>
                  THINK I could turn and live with animals, they are so placid
                  and self-contained;
                </p>
                <p>I stand and look at them long and long,</p>
                <p>
                  They do not sweat and whine about their condition;
                </p>
                <p>
                  They do not lie awake in the dark and weep for their sins;
                </p>
                <p>
                  They do not make me sick discussing their duty to God.
                </p>
                <p>
                  Not one is dissatisfied, not one is demented with the mania of
                  owning things.
                </p>
                <p>
                  Not one kneels to another, nor to his kind that lived
                  thousands of years ago.
                </p>
                <p>
                  Not one is respectable or industrious over the whole earth
                </p>
                <p className={styles.signoff} style={{ color: "#fff" }}>
                  - Walt Whitman
                </p>
                <p
                  className={styles.signoff}
                  style={{ color: "#fff", fontStyle: "italic" }}
                >
                  Leaves of Grass
                </p>
              </div>
            </div>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv19/pan-humanitarian.jpg"
              alt="Pan-Humanitarian Room"
              width={500}
              height={336}
              className={styles.photoImg}
              unoptimized
            />
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv19/american-eagle.jpg"
              alt="American Eagle in Milday's Boudoir"
              width={500}
              height={334}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              (<em>top</em>) The Pan-Humanitarian Room and (<em>bottom</em>) the
              American Eagle in Milday&apos;s Boudoir - Exhibits of the Humane
              Society of the United States in the Better Living Center
            </figcaption>
            <BillCotterSource />
          </figure>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Beech Nut Theatre</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.news}>
            <h2>Beech-Nut Theatre</h2>
            <div className={styles.newsGrid}>
              <div>
                <p>
                  The performing arts are represented in the Better Living
                  Center in virtually all their aspects through the 550-seat
                  Beach-Nut Theatre, located on the first floor.
                </p>
                <p>
                  Some of the outstanding attractions of its first season
                  include a musical version of &quot;Young Abe Lincoln,&quot;
                  with Arnold Brown as Lincoln and a Broadway cast; Anna Russell
                  in the musical farce, &quot;Lady Audley&apos;s Secret or Who
                  Pushed George?&quot;; also featured was a widely-acclaimed
                  Austrian Fashion Show.
                </p>
              </div>
              <div>
                <p>
                  It was here that Twentieth Century-Fox Films decided to have
                  the world premier of their film, &quot;What a Way to
                  Go!&quot; starring Shirley MacLaine, Paul Newman and Gene
                  Kelly, on May 13th
                </p>
                <p>
                  The theatre is fully equipped with the latest facilities
                  including Cinemascope and ultra-fidelity sound. It is also
                  equipped for television and radio broadcasting and has two
                  35mm projectors which can handle all screen ratios.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.source}>
            SOURCE: <em>SPECTRACKULAR NEWS </em>
            Published by Better Living Center, New York World&apos;s Fair
          </p>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Culligan</h2>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/betliv19/magic-faucet.jpg"
              alt="Culligan Magic Faucet"
              width={400}
              height={400}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Culligan Magic Faucet Seemingly Suspended in Mid-air - 1st Foor
              Culligan Display
            </figcaption>
            <BillCotterSource />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv18"
        explicitPrevious
        overviewHref="/betliv01"
        nextHref="/betliv20"
      />
    </>
  );
}
