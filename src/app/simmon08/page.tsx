import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/simmonEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Johnny Carson's Review — Simmons — nywf64.com",
  description:
    "Johnny Carson's review of the Simmons Beautyrest pavilion, with audio — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons — Johnny Carson's Review (audio).
 * Body from legacy simmon08.html.
 *
 * Stack: hero → SimmonNavChrome → navy title → article → Nav2Bar.
 */
export default function Simmon08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Simmons">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/simmonoverview/hero-banner.jpg"
            alt="Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SimmonNavChrome />

      <article className={styles.article} aria-labelledby="simmon08-title">
        <header className={styles.titleBar}>
          <h1 id="simmon08-title" className={styles.titleBarMain}>
            Johnny Carson&apos;s Review <em>(audio!)</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.audioRow}>
            <Image
              src="/images/simmon08/sound.gif"
              alt=""
              width={20}
              height={23}
              unoptimized
            />
            <a
              className={styles.audioLink}
              href="/audio/simmon/Sim.mp3"
              download
            >
              LISTEN! to Johnny Carson&apos;s review of the Simmons &quot;Land
              of Enchantment&quot; -- direct from the New York World&apos;s Fair
              (248K Download)
            </a>
          </div>
          <audio
            className={styles.audioPlayer}
            controls
            preload="metadata"
            src="/audio/simmon/Sim.mp3"
          >
            Your browser does not support the audio element.
          </audio>

          <figure className={styles.figure} style={{ maxWidth: 464 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon08/simmons22.jpg"
                alt="Simmons rest alcove"
                width={464}
                height={309}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.body}>
            <p>
              <em>
                At the Simmons Pavilion, where you can rent a bed in a rest
                alcove for $1 a half hour (men on one side of the corridor,
                women on the other), there is a VIP alcove which is rent free.
                It awaits the VIP who happens to catch the eye of the Simmons
                press agent.
              </em>
            </p>
            <p>
              <em>
                More women then men use the alcoves. &quot;I guess men think
                it&apos;s sissy to get tired,&quot; the manager told me. &quot;But
                yesterday I found a man sprawled out on the couch on the main
                floor. He said he was waiting for his wife, who had rented an
                alcove upstairs. He was what I should call a free-loader.&quot;
              </em>
            </p>
            <p>
              <em>
                The Simmons Company indulgently provides interior-spring
                sanctuaries for those who have had all they can stand. Among
                those wallowing on foamy mattresses are the waifs who could not
                find a hotel room in New York.
              </em>
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: <em>HOLIDAY</em> Magazine, June, 1964, Courtesy Rich Post
            Collection
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/simmon07"
        explicitPrevious
        overviewHref="/simmonoverview"
        nextHref="/simmon09"
      />
    </>
  );
}
