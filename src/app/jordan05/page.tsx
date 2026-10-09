import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/photographsPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Jordan — nywf64.com",
  description:
    "Mike Kraus Collection — Pavilion of Jordan — 1964/1965 New York World’s Fair on nywf64.com.",
};

const krausSource =
  "SOURCE: Above photos presented courtesy Mike Kraus Collection and are © Copyright 2018 Mike Kraus, All Rights Reserved";

/** Jordan gallery — Mike Kraus Collection (legacy jordan05.html). */
export default function Jordan05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <article className={styles.article} aria-labelledby="jordan05-title">
        <header className={styles.titleBar}>
          <h1 id="jordan05-title" className={styles.titleBarMain}>
            Gallery of Photographs
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHeading}>
            World&apos;s Fair enthusiast and collector{" "}
            <strong>Mike Kraus</strong> has very generously donated a wonderful
            collection of images of various Pavilions and Exhibits from the
            1964/1965 New York World&apos;s Fair to{" "}
            <strong>
              <span style={{ color: "#0066cc" }}>nywf</span>
              <span style={{ color: "#ff3300" }}>64</span>
            </strong>
            .com. He shares with us here some excellent views of{" "}
            <strong>
              <em>The Pavilion of Jordan</em>
            </strong>
            .
          </p>

          <div className={styles.sections}>
            <section className={styles.section} aria-label="Mike Kraus Collection">
              <div className={styles.tray}>
                <div className={styles.photos}>
                  {[
                    {
                      src: "/images/jordan05/jordan22.jpg",
                      width: 400,
                      height: 268,
                      alt: "Jordan Pavilion",
                      caption: null,
                    },
                    {
                      src: "/images/jordan05/jordan23.jpg",
                      width: 400,
                      height: 274,
                      alt: "Jordan Pavilion",
                      caption:
                        "The gently rolling mosaic domes of the Jordan Pavilion. The blue dots on the domes are actually skylights to allow natural light to filter into the pavilion.",
                    },
                    {
                      src: "/images/jordan05/jordan24.jpg",
                      width: 257,
                      height: 400,
                      alt: "Pavilion of Jordan",
                      caption: null,
                    },
                    {
                      src: "/images/jordan05/jordan25.jpg",
                      width: 400,
                      height: 253,
                      alt: "Pavilion of Jordan",
                      caption: "Views of the Pavilion of Jordan.",
                    },
                    {
                      src: "/images/jordan05/jordan26.jpg",
                      width: 400,
                      height: 270,
                      alt: "Pavilion Entrance",
                      caption:
                        "Closer view of the entrance to the pavilion. Frieze is of the Dome of the Rock. The Mosque is venerated as the site of Abraham's sacrifice, andof Mohammed's last days on earth.",
                    },
                    {
                      src: "/images/jordan05/jordan27.jpg",
                      width: 400,
                      height: 258,
                      alt: "Dome of the Rock",
                      caption: null,
                    },
                    {
                      src: "/images/jordan05/jordan28.jpg",
                      width: 400,
                      height: 277,
                      alt: "Mosaic Covered Domes",
                      caption:
                        "Closeer views of the mosaic covered domes, skylights and the pavilion tower - a very modern Minarette?",
                    },
                    {
                      src: "/images/jordan05/jordan29.jpg",
                      width: 267,
                      height: 400,
                      alt: "Jordan Tower",
                      caption: null,
                    },
                    {
                      src: "/images/jordan05/jordan30.jpg",
                      width: 400,
                      height: 262,
                      alt: "Jordan Pavilion interior",
                      caption:
                        "Interior view of the Jordan Pavilion highlighting the beautiful stained glass windows portraying the Via Dolorosa - The Stations of the Cross.",
                    },
                    {
                      src: "/images/jordan05/jordan21.jpg",
                      width: 400,
                      height: 255,
                      alt: "Nighttime View",
                      caption: null,
                    },
                  ].map((photo) => (
                    <figure
                      key={photo.src}
                      className={styles.card}
                      style={{ width: photo.width }}
                    >
                      <div className={styles.frame}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className={styles.photo}
                          unoptimized
                        />
                      </div>
                      <figcaption className={styles.caption}>
                        {photo.caption ? (
                          <p className={styles.captionTitle}>{photo.caption}</p>
                        ) : null}
                        <p className={styles.captionSource}>{krausSource}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan04"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan06"
      />
    </>
  );
}
