import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/singerEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Singer at the Fair — Singer Bowl — nywf64.com",
  description:
    "Singer Company exhibits at the Singer Bowl — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl — Singer at the Fair.
 * Body from legacy singer08.html.
 */
export default function Singer08Page() {
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

      <article className={styles.article} aria-labelledby="singer08-title">
        <header className={styles.titleBar}>
          <h1 id="singer08-title" className={styles.titleBarMain}>
            Singer at the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 482 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow08.jpg"
                alt="Singer at the Fair"
                width={482}
                height={196}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>THE SINGER BOWL AT THE NEW YORK WORLD'S FAIR</h2>
            <p>is a 17,000 seat stadium located at a main entrance "cross roads", where visitors coming by train and subway enter the Fair. Exciting public events are stage daily o admission free o Olympic tryouts o dramatic and dance programs o music festivals o band concerts o other special events.</p>
            <p>THE SINGER EXHIBIT CENTER is located in one side of the Singer Bowl, facing outward on New York Avenue.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow09.jpg"
                alt="Singer Bowl"
                width={200}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Wonderful things will happen to you... at the New York World's Fair --</p>
            <p>where SINGER is part of a great and spectacular show designed to bring you tomorrow's marvels today!</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 121 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow10.jpg"
                alt="Singer Bowl"
                width={121}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>You'll be on T.V.!</p>
            <p>View yourself on 21 television screens at once -- from three different angles! See the remarkable Singer 6" Personal TV in action!</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 217 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow11.jpg"
                alt="Singer Bowl"
                width={217}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Camera which sees in</p>
            <p>the dark</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 226 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow12.jpg"
                alt="Singer Bowl"
                width={226}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>A photo-mural of Manhattan Island -- shot at night from 30,000 feet, shows the astonishing capability of an infra-red scanning camera made by a Singer subsidiary.</p>
            <p>You'll be inspired</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 224 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow13.jpg"
                alt="Singer Bowl"
                width={224}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>by demonstrations of exciting sewing ideas -- beautiful collage in felt -- decorator tricks with ticking -- and other creative designs you and Singer sewing can achieve.</p>
            <p>Ballet of needle and cloth</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 217 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow14.jpg"
                alt="Singer Bowl"
                width={217}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Ugo Torricelli's movie camera fashions an elegant visual experience from the rhythm of gleaming machinery and the glowing textures of fabric and thread.</p>
            <p>You may win</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 163 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow15.jpg"
                alt="Singer Bowl"
                width={163}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>one of the beautiful American flags we'll be sewing every day as prizes for our guests. Just register!</p>
            <p>You can relax</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 260 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer08/sinbow16.jpg"
                alt="Singer Bowl"
                width={260}
                height={161}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>to soft music in the Home Entertainment Center -- and marvel at the tiny size and magnificent sound of transistorized stereo hi-fi.</p>
            <p>Be our guest!</p>
            <p>Use our postcard -- and a Singer typewriter -- to tap out a message back home. We'll mail it for you.</p>
            <p className={styles.source}>SOURCE: Singer Souvenir Brochure</p>
            <p>You'll be dazzled by "MILLIONAIRE FABRICS"</p>
            <p>a collection of twenty-five of the world's most luxurious fabrics . . . "fabulous" is the word for them.</p>
            <p>P.S. If the fabrics are strictly for dreams -- the exciting high fashions you'll see are styles you can create for yourself.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/singer07"
        explicitPrevious
        overviewHref="/singeroverview"
        nextHref="/singer09"
      />
    </>
  );
}
