import type { Metadata } from "next";
import Image from "next/image";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unisph14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue: A Permanent Gift — Unisphere — nywf64.com",
  description:
    "Epilogue: A Permanent Gift — Unisphere as a lasting landmark of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere — Epilogue: A Permanent Gift.
 * Body from legacy unisph14.html.
 * Stack: hero → UnisphNavChrome → navy title → article → Nav2Bar.
 */
export default function Unisph14Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Unisphere">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unisphoverview/hero-banner.jpg"
            alt="Unisphere at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnisphNavChrome />

      <article className={styles.article} aria-labelledby="unisph14-title">
        <header className={styles.titleBar}>
          <h1 id="unisph14-title" className={styles.titleBarMain}>
            Epilogue: A Permanent Gift
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.source}>
            Source: Photo: Fair Promotional Brochure (1965) Text: US&nbsp;Steel
            Press Release and 1964 US&nbsp;Steel Annual Report
          </p>

          <div className={styles.promoRow}>
            <span className={styles.promoPhoto}>
              <Image
                src="/images/unisph14/unisph08.jpg"
                alt="Unisphere at Night"
                width={200}
                height={471}
                className={styles.promoImg}
                unoptimized
              />
            </span>
            <div>
              <p className={styles.promoCopy}>
                Emerging from a long winter&apos;s nap, the UNISPHERE - greatest
                show of the world ever made by man - thrills visitors to the New
                York World&apos;s Fair.
              </p>
              <p className={styles.promoCopy}>
                Glistening in the sunlight - or bathed in moonlight - it stands
                as the focal point of the Fair. The gigantic stainless steel
                replica of the Earth, built and presented by United States Steel,
                will be one of the very few edifices to remain standing long
                after the Fair has faded into memory.
              </p>
              <p className={styles.promoCopy}>
                Twenty-six million visitors to the New
              </p>
            </div>
            <div>
              <p className={styles.promoCopy}>
                York World&apos;s Fair saw <em>Unisphere</em> and as many more
                may be viewing it in 1965 before it continues as a permanent
                landmark at its Flushing Meadow site. The most talked-about,
                read-about, photographed globe ever made, this stainless steel
                structure -- 12 stores high, measuring 120 feet in diameter and
                weighing more than 700 thousand pounds -- will be a constant
                reminder as the years go by of the engineering, fabrication and
                construction skill of U. S. Steel&apos;s American Bridge
                Division.
              </p>
            </div>
          </div>

          <hr className={styles.rule} />

          <figure className={styles.moonFigure}>
            <span className={styles.moonFrame}>
              <Image
                src="/images/unisph14/unisph201.jpg"
                alt="Unisphere & Moon"
                width={450}
                height={338}
                className={styles.moonImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              Source: © Copyright 2018 Photograph by Ken Thalheimer
            </figcaption>
          </figure>

          <section className={styles.epilogue} aria-label="A Permanent Gift">
            <h2 className={styles.epilogueHeading}>A Permanent Gift</h2>
            <p>
              And so it stands today. Gleaming stainless steel. Looming over the
              Meadow long after the Fair is a distant memory. A monument to the
              time America celebrated the Space Age. The flights represented by
              its orbitals forgotten achievements. Was that Sheppard? Or{" "}
              <em>Telstar</em>? It&apos;s fountains restored. It&apos;s
              reflecting pool empty to prevent waders and vandalism. The
              capitols of nations no longer represented by electric lights.
              Disconnected. The capitols of nations that have not outlived
              Unisphere.
            </p>
            <p>Times have changed.</p>
            <p>
              Symbol now of a borough. A community. Its new admirers unmindful
              of the time the world stood at its pedestal. Yet knowing that it
              must stand for <em>something</em> grand. &quot;Built to remain as
              a permanent feature of the park, reminding succeeding generations
              of a pageant of surpassing interest and significance.&quot; So
              spoke Moses.
            </p>
            <p>
              <em>
                Man&apos;s Achievements on a Shrinking Globe in an Expanding
                Universe.{" "}
              </em>
              Symbolized in stainless steel. A permanent Gift.
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unisph13"
        explicitPrevious
        overviewHref="/unisph01"
        nextHref="/unisph01"
      />
    </>
  );
}
