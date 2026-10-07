import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genele14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Transcript of the Skydome Spectacular Show \u2014 General Electric \u2014 nywf64.com",
  description:
    "Transcript of the Skydome Spectacular Show \u2014 General Electric Progressland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Electric — Transcript of the Skydome Spectacular Show.
 * Body from legacy genele14.html (custom topic page).
 * Stack: hero → GeneleNavChrome → navy title → article → Nav2Bar.
 */
export default function Genele14Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <article className={styles.article} aria-labelledby="genele14-title">
        <header className={styles.titleBar}>
          <h1 id="genele14-title" className={styles.titleBarMain}>
            Transcript of the Skydome Spectacular Show
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/genele14/ge103.jpg"
              alt="Sun Animation Artist's rendering"
              width={481}
              height={300}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele14/ge102.jpg"
              alt="Skydome Spectacular"
              width={481}
              height={43}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.heading}>Preshow</p>
          <p className={styles.speaker}>HOST or HOSTESS</p>
          <div className={styles.body}>
            <p>On the Carousel of Progress you traveled with us from the past to the present and you saw how rapidity electricity has brought greater comfort and convenience into all of our lives. In our next presentation, Skydome Spectacular, you will see the never-ending story of man&apos;s search for new sources of energy. Then you will witness the new source of energy: nuclear fusion.</p>
            <p>The most powerful forces of nature are found within the atom. Scientists have already learned to harness the power of nuclear fission which is the splitting of atoms. Today, around the world, General Electric scientists are putting this energy to use. But there is an even more powerful source of energy than fission. It is the joining-together of atoms, or nuclear fusion. Here is limitless energy. And here, in essence, is what you&apos;ll be seeing downstairs in our nuclear fusion experiment.</p>
            <p>Our next presentation, the Skydome Spectacular, is a preface to the fusion experiment and will be told to you on the interior dome of our building which is over 200 feet in diameter. When you enter our viewing terrace, you lean back, look up. The show is on the ceiling.</p>
            <p>From there, you&apos;ll walk down a stationary circular ramp to our nuclear fusion experiment. Then you will enter Medallion City which is free-flow. If you move all the way forward please. Stay behind the light of your hostess as you enter our next attraction through any of the doors on the left-hand side.</p>
          </div>
          <p className={styles.heading}>On the Viewing Terrace for the Skydome Spectacular</p>
          <p className={styles.speaker}>Voice of Narrator</p>
          <div className={styles.body}>
            <p>A flash of lightning. Raw energy. Uncontrollable. A source of fear and yet a challenge. One that has sparked man&apos;s quest to harness and to use the turbulent power of nature.</p>
            <p>A flash of lightning and a flicker of fire. Fire that spread and changed the world as man put nature&apos;s energy to work for him. He unlocked the energy of wood and coal and made his own fire. He boiled water and mastered the mighty muscles of steam. And then, with great turbine generators, he transformed steam into the substance of thunderbolts. He made electricity, man&apos;s strongest, most faithful servant whose tireless hands have carved a vast new world.</p>
            <p>Yet today man taps far greater energies -- new ways to create electric power. The atom. Energy stored in the heart of matter. Now man has learned to split the atom; to harness atomic fission. Today and tomorrow, throughout the world, atomic power plants will generate vast quantities of electric energy for our modern cities, industries, homes and farms.</p>
            <p>But now man dreams of making power by joining atoms together. He looks up at the nuclear storm in space, the sun, where atoms joining together -- fusing -- are creating energy so boundless it staggers the imagination. Here is the challenge of the future. Nuclear fusion. If man could create and control his own sun power he could produce a limitless supply of energy. Today this goal is on a distant horizon. But scientists in government and industry have taken the first steps. And you are about to see a demonstration of actual equipment used by General Electric scientists to study controlled nuclear fusion. The dream that may wake up tomorrow.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genele13"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/genele15"
      />
    </>
  );
}
