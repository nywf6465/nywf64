import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/singerEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue — Singer Bowl — nywf64.com",
  description:
    "Epilogue on the Singer Bowl feature — nywf64.com.",
};

/**
 * Singer Bowl — Epilogue.
 * Body from legacy singer10.html.
 */
export default function Singer10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Singer Bowl">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/singeroverview/hero-banner.jpg"
            alt="Singer Bowl at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SingerNavChrome />

      <article className={styles.article} aria-labelledby="singer10-title">
        <header className={styles.titleBar}>
          <h1 id="singer10-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 207 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer10/doats-doats02.jpg"
                alt="Epilogue"
                width={207}
                height={300}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The Lost Feature</p>
            <p>Dave Oats</p>
            <p>In August, 2003, I was working on a "Feature" presentation for nywf64.com for the Singer Bowl, the Fair's stadium and assembly building, with David Oats. To look at the Singer Bowl -- or Louis Armstrong Stadium as it is known today -- one would never know that by the late 1970s the structure had become nearly as derelict as the New York State Pavilion is today. The Singer Bowl was unused and virtually abandoned by the New York City Parks Department. The lack of funding for New York's parks during the city's financial crisis of the 1970s had taken a terrible toll on the arena.</p>
            <p>Dave was instrumental in getting the structure restored and in the hands of the U.S. Tennis Association. After the U.S. Open was moved to Flushing Meadows, the Singer Bowl was refurbished to become the home of that famous tennis tournament held in late summer each year. Dave was also instrumental in getting the name of the stadium changed to <em>Louis Armstrong Stadium</em> in honor of Queens' famous son.</p>
            <p>I was delighted that Dave had agreed to put down on paper his struggles and triumphs in saving this great legacy of the Fair. In anticipation, I developed the Singer Bowl feature around Dave's essay. Those of you who knew David Oats know that he always had about 15 "irons in the fire" going at any given time so I waited patiently for him to get to my particular "iron." Dave had written several essays for nywf64.com over the years. He was a journalist, a great writer and a great story teller. Sadly, Dave passed away on February 5, 2008 having never put down on paper for us his very personal story of the Singer Bowl.</p>
            <p>Time went by and after a computer change and a new look for nywf64.com, the Singer Bowl feature got <em>lost</em>. I thought that it had more-than-likely been cleaned off of my old computer before ever being saved. Then, while cleaning up some files recently, I came across the old feature from 2003!</p>
            <p>So here it is online at last ... the "lost" feature ... which I very respectfully dedicate to Dave Oats. He was a remarkable man with a remarkable connection to the Fair that not many people can match. If you read the tribute at nywf64.com to Dave, you'll get a better idea of what I'm talking about. He was a great guy and a great friend.</p>
            <p>You are missed Dave. Thanks for the memories.</p>
            <p>Bill Young - Webhost April 26, 2010</p>
            <p>Also, gratefully acknowledging photo contributions by Randy Treadway and Bill Cotter.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/singer09"
        explicitPrevious
        overviewHref="/singeroverview"
        nextHref="/singeroverview"
      />
    </>
  );
}
