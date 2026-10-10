import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Miracle in the Meadow IV — Building the Fair — nywf64.com",
  description:
    "Miracle in the Meadow IV — Josef Seebacher gallery: Sinclair dinosaurs and New York State Pavilion crown from Building the Fair on nywf64.com.",
};

type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
};

/**
 * Building the Fair — Miracle in the Meadow IV.
 * Body from legacy building18.html (mapped to /building17 as Page 17 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building17Page() {
  const dinolandPhotos: Photo[] = [
    {
      src: "building149.jpg",
      width: 269,
      height: 400,
      alt: "T-Rex arrives in sections",
    },
    {
      src: "building147.jpg",
      width: 400,
      height: 269,
      alt: "Dinosaur peers at the photographer",
    },
    {
      src: "building146.jpg",
      width: 400,
      height: 270,
      alt: "Anklyosaurus",
    },
    {
      src: "building150.jpg",
      width: 400,
      height: 271,
      alt: "Triceratops on a flatbed",
    },
    {
      src: "building151.jpg",
      width: 400,
      height: 268,
      alt: "Dinoland arrival",
    },
    {
      src: "building148.jpg",
      width: 268,
      height: 400,
      alt: "Struthomethius",
    },
    {
      src: "building152.jpg",
      width: 400,
      height: 270,
      alt: "Stegasaurus",
    },
  ];

  const crownPhotos: Photo[] = [
    {
      src: "building158.jpg",
      width: 400,
      height: 268,
      caption:
        "Workmen ready to put the last section of steel in place for the crown.",
    },
    {
      src: "building172.jpg",
      width: 400,
      height: 268,
      caption: "Cranes set the final section in place.",
    },
    {
      src: "building171.jpg",
      width: 400,
      height: 267,
      caption:
        "Oval-shaped pieces of the center ring of the roof structure are complete and ready for installation.",
    },
    {
      src: "building169.jpg",
      width: 400,
      height: 268,
      caption: "Threading the roof support cables into the central hub.",
    },
    {
      src: "building168.jpg",
      width: 400,
      height: 268,
      caption:
        "Steel girders support the central section above the ground as the cables are threaded in place.",
    },
    {
      src: "building167.jpg",
      width: 400,
      height: 268,
      caption: "Capping the central hub.",
    },
    {
      src: "building176.jpg",
      width: 400,
      height: 268,
      caption: "Aerial view of the same.",
    },
    {
      src: "building165.jpg",
      width: 400,
      height: 269,
      caption:
        "Workmen install the large drainage pipes which would bleed rainwater off the huge roof and funnel it down the interior of the concrete support columns.",
    },
    {
      src: "building164.jpg",
      width: 400,
      height: 268,
      caption: "Ground work is nearly completed on the crown.",
    },
    {
      src: "building160.jpg",
      width: 400,
      height: 268,
      caption:
        "What amazing engineering! This huge steel structure would be raised to the top of New York State's mighty columns.",
    },
    {
      src: "building170.jpg",
      width: 400,
      height: 270,
      caption:
        "Raising the roof! The structure has been lifted from its supporting girders. Steel tracks can be seen along the inside of the white concrete columns. The roof was raised to the top on these tracks.",
    },
    {
      src: "building179.jpg",
      width: 400,
      height: 269,
      caption: "Half-way to the top.",
    },
    {
      src: "building180.jpg",
      width: 269,
      height: 400,
      caption:
        'With the crown in place, workmen begin installing the multi-colored panels in the suspended roof of the "Tent of Tomorrow."',
    },
    {
      src: "building181.jpg",
      width: 400,
      height: 255,
      caption:
        "Scaffolding still surrounds the Theaterama building of the New York State Pavilion in Mr. Seebacher's final photo of the building he helped to build.",
    },
  ];

  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building17-title">
        <header className={styles.titleBar}>
          <h1 id="building17-title" className={styles.titleBarMain}>
            Miracle in the Meadow IV
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionLabel}>JOSEPH SEEBACHER GALLERY</h2>

          <section className={styles.section} aria-labelledby="sec-0">
            <h2 id="sec-0" className={styles.sectionLabel}>
              The Sinclair Dinosaurs arrive at
              <br />
              Flushing Meadow!
            </h2>
            <p className={styles.body}>
              Sinclair&apos;s <em>Dinoland</em> dinosaurs were constructed in
              upstate New York and floated by barge down the Hudson River to the
              Fair site. The nine dinosaurs on a floating barge caused a traffic
              jam as people stopped to watch the strange sight. After they
              arrived at the Fair&apos;s Marina, they were trucked to the Sinclair
              Pavilion site at Flushing Meadow. Josef Seebacher was on hand for
              their arrival and captured the moment on film.
            </p>
            <div className={styles.photoGrid}>
              {dinolandPhotos.map((photo) => (
                <figure key={photo.src} className={styles.figure}>
                  <Image
                    src={`/images/building17/${photo.src}`}
                    alt={photo.alt ?? ""}
                    width={photo.width}
                    height={photo.height}
                    className={styles.photo}
                    unoptimized
                  />
                </figure>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="sec-1">
            <h2 id="sec-1" className={styles.sectionLabel}>
              Construction and raising of the crown of the
              <br />
              New York State Pavilion
            </h2>
            <p className={styles.body}>
              The &quot;crown&quot; of the New York State Pavilion is the massive
              oval steel structure attached to the tops of the concrete columns
              that holds the support cables and multi-colored, suspended roof of
              the &quot;Tent of Tomorrow.&quot; Josef Seebacher captured the
              crown&apos;s construction and raising on film in the following shots.
            </p>
            <div className={styles.photoGrid}>
              {crownPhotos.map((photo) => (
                <figure key={photo.src} className={styles.figure}>
                  <Image
                    src={`/images/building17/${photo.src}`}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    className={styles.photo}
                    unoptimized
                  />
                  {photo.caption ? (
                    <figcaption className={styles.caption}>
                      <em>{photo.caption}</em>
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
            <p className={styles.source}>
              Source: All Photos presented courtesy Karl Baker collection and
              are © Copyright 2005 Karl Baker, All Rights Reserved
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building16"
        explicitPrevious
        nextHref="/building18"
      />
    </>
  );
}
