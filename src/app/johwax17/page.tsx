import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import styles from "./johwax17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Golden Rondelle Today — Johnson Wax — nywf64.com",
  description:
    "The Golden Rondelle theater in Racine, Wisconsin — Johnson Wax Pavilion legacy on nywf64.com.",
};

const PHOTOS = [
  { src: "/images/johwax17/johwax03.jpg", w: 300, h: 214, caption: "Exterior View" },
  { src: "/images/johwax17/johwax05.jpg", w: 300, h: 416, caption: "Exterior Close-up" },
  { src: "/images/johwax17/johwax01.jpg", w: 300, h: 216, caption: "Beneath the Rondelle" },
  { src: "/images/johwax17/johwax04.jpg", w: 300, h: 217, caption: "Rondelle Interior" },
  { src: "/images/johwax17/johwax06.jpg", w: 300, h: 193, caption: "Projection Booth" },
  { src: "/images/johwax17/johwax02.jpg", w: 300, h: 217, caption: "Tri-Arc Movie" },
] as const;

export default function Johwax17Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Johnson Wax Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={JOHWAX_HERO.src}
            alt={JOHWAX_HERO.alt}
            width={JOHWAX_HERO.width}
            height={JOHWAX_HERO.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JohwaxNavChrome />

      <article className={styles.article} aria-labelledby="johwax17-title">
        <header className={styles.titleBar}>
          <h1 id="johwax17-title" className={styles.titleBarMain}>
            The Golden Rondelle Today
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.leadRow}>
            <Image
              src="/images/johwax17/johwax47.jpg"
              alt="Postcard Rondelle Today"
              width={340}
              height={212}
              className={styles.leadPhoto}
              unoptimized
            />
            <p>
              The Golden Rondelle still draws visitors fifty years after its
              dedication in July, 1967 at the corner of 14th and Franklin Streets
              on the southside of Racine, Wisconsin.
            </p>
          </div>

          <p>
            <Link href="http://www.cityofracine.org/" target="_blank" rel="noreferrer">
              Racine, Wisconsin
            </Link>
            , home of the{" "}
            <Link href="http://www.scjohnson.com/" target="_blank" rel="noreferrer">
              S.C. Johnson Wax
            </Link>{" "}
            company, is a medium sized city located approximately 1 hour north of
            Chicago and 1/2 hour south of Milwaukee on the western shores of Lake
            Michigan.
          </p>

          <div className={styles.brochureRow}>
            <Image
              src="/images/johwax17/johwaxgrnew.gif"
              alt="A current Golden Rondelle brochure"
              width={147}
              height={273}
              className={styles.brochureArt}
              unoptimized
            />
            <p>
              If you should be planning a trip to the Chicago/Milwaukee area and
              would like to take a trip to Racine to see the Golden Rondelle, be
              sure to phone ahead to make sure the theater is open. Follow the
              information on Johnson&apos;s website. You might also consider taking
              in the tour of Johnson&apos;s Frank Lloyd Wright designed
              Administrative Complex -- a beautiful and architecturally important
              work.
            </p>
          </div>

          <p>
            You may click this link to the{" "}
            <Link
              href="http://scjohnson.com/en/company/architecture/golden-rondelle.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Golden Rondelle
            </Link>{" "}
            to bring up the theater&apos;s Official Web Site. From there you will
            be able to view film schedules, get driving instructions (including a
            map) to the theater and read a brief synopsis of the building and its
            World&apos;s Fair history. Tour information for the Johnson Wax complex
            is also given.
          </p>

          <hr className={styles.rule} />

          {PHOTOS.map((photo) => (
            <figure key={photo.src} className={styles.photoBlock}>
              <Image
                src={photo.src}
                alt={photo.caption}
                width={photo.w}
                height={photo.h}
                className={styles.photoArt}
                unoptimized
              />
              <figcaption className={styles.caption}>{photo.caption}</figcaption>
            </figure>
          ))}

          <p className={styles.source}>
            Photos Source: Presented Courtesy Bradd Schiffman Collection ©
            Copyright 2002, Bradd Schiffman
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/johwax16"
        explicitPrevious
        overviewHref="/johwaxoverview"
        nextHref="/johwaxoverview"
      />
    </>
  );
}
