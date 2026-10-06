import type { Metadata } from "next";
import Image from "next/image";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ford10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Magic Skyway - Transcript of the 1964 Show \u2014 Ford \u2014 nywf64.com",
  description:
    "The Magic Skyway - Transcript of the 1964 Show at the Ford Pavilion \u2014 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * Ford — The Magic Skyway - Transcript of the 1964 Show.
 * Body from legacy ford10.html (custom transcript page).
 */
export default function Ford10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Ford Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fordoverview/hero-banner.jpg"
            alt="Ford Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FordNavChrome />

      <article className={styles.article} aria-labelledby="ford10-title">
        <header className={styles.titleBar}>
          <h1 id="ford10-title" className={styles.titleBarMain}>
            The Magic Skyway - Transcript of the 1964 Show
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.line}>{"I am your guide through this adventure. As you travel, other guests are hearing these words in their own native language. [\"The Ford Motor Company Welcomes You\" is repeated in several languages.] Yes, in any language, wherever you drive, your Ford, Lincoln or Mercury car is always a front-row seat for The Big Show."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford42.jpg"
              alt="Boarding convertibles on the Magic Skyway ride"
              width={460}
              height={298}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 Wolfe Worldwide Films, Bradd Schiffman Collection"}</figcaption>
          </figure>
          <p className={styles.line}>{"Please remain seated at all times. Keep your hands and arms inside the car. And no smoking please."}</p>
          <p className={styles.line}>{"And now, The Magic Skyway takes you back through the time barrier. Backwards millions of years to the dawn of life on land."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford27.jpg"
              alt=""
              width={285}
              height={133}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"This is the world that was. A world that trembled under the tread of giant beasts. Here, millions of years unfold at a single glance."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford48.jpg"
              alt="Primeval Scene on the Magic Skyway ride"
              width={360}
              height={511}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 National Geographic , Vol. 12, No. 4, April 1965"}</figcaption>
          </figure>
          <p className={styles.line}>{"Brontosaurus. Stegosaurus. Triceratops. They ruled a world of perpetual summer. But here, birth and death walk hand-in-hand."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford49.jpg"
              alt="Dinosaurs battle on the Magic Skyway ride"
              width={460}
              height={278}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 The Saturday Evening Post , Issue No. 20, May 23, 1964"}</figcaption>
          </figure>
          <p className={styles.line}>{"This was the most fearsome reptile ever known. \"King\" of all the dinosaurs."}</p>
          <p className={styles.line}>{"Years of violent natural turmoil doomed the mighty reptiles. Now, a new world rises with the dawn. And a new creature stands before the challenge of the universe: man."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford29.jpg"
              alt=""
              width={270}
              height={360}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"At first, caveman really wasn't much of a man."}</p>
          <p className={styles.line}>{"Here in his humble home he began a new era: The \"do-it-yourself\" craze."}</p>
          <p className={styles.line}>{"He harnessed nature's fire to cook his food and warm his ... uhh ... house."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford46.jpg"
              alt="Cavemen warm bottoms on the Magic Skyway ride"
              width={460}
              height={292}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 Wolfe Worldwide Films, Bradd Schiffman Collection"}</figcaption>
          </figure>
          <p className={styles.line}>{"He invented language to communicate his most important ideas."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford30.jpg"
              alt=""
              width={184}
              height={180}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"One day, these caves would tell the story of man's adventures. Here he recorded his great deeds."}</p>
          <p className={styles.line}>{"And now, the \"Man of the Hour\" Introducing the inventor of the round wheel."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford32.jpg"
              alt=""
              width={203}
              height={171}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"Now at last, man is free. Unchained from his cave. Free to move forward toward the future and a new destiny."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford44.jpg"
              alt="Leaving the cave behind on the Magic Skyway ride"
              width={460}
              height={301}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 Wolfe Worldwide Films, Bradd Schiffman Collection"}</figcaption>
          </figure>
          <p className={styles.line}>{"Thousands of years race by. Man applies the wheel to travel, explore, discover."}</p>
          <p className={styles.line}>{"Faster and faster across the pages of time, the wheels race towards a new tomorrow. A tomorrow where man's loftiest hopes and dreams can become reality."}</p>
          <p className={styles.line}>{"And now Ford's Magic Skyway becomes a Magic Carpet carrying you aloft through time and space to the threshold of tomorrow. A vision born out of man's long journey. The promise of The Future."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford10/ford31.jpg"
              alt="Magic Skyway: Space City of Tomorrow"
              width={457}
              height={331}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.speaker}>Walt Disney:</p>
          <p className={styles.line}>{"This is Walt Disney speaking. Our Space City is a distant dream. But all such dreams must begin in the minds of men. Men like the scientists, engineers and automotive designers of Ford Motor Company."}</p>
          <p className={styles.line}>{"I hope you enjoyed our show and your ride on The Magic Skyway in a new Ford product as much as I've enjoyed the Fords I have driven through the years."}</p>
          <p className={styles.line}>{"Now step out and see a world where tomorrow is being created today."}</p>
          <p className={styles.speaker}>Narrator:</p>
          <p className={styles.line}>{"Ladies and Gentlemen. Prepare to debark. Do not attempt to leave the car until the attendant opens the door at the unloading platform. Thank You."}</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ford09"
        explicitPrevious
        overviewHref="/fordoverview"
        nextHref="/ford11"
      />
    </>
  );
}
