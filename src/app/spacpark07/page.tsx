import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { EXHIBIT_ITEMS } from "./exhibitItems";
import { LAYOUT_MAP_AREAS } from "./layoutMapAreas";
import styles from "./spacpark07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Exhibit Layout — Space Park — nywf64.com",
  description:
    "U.S. Space Park exhibit layout map and descriptions from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park — Exhibit Layout (legacy spacpark07).
 */
export default function Spacpark07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Space Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spacparkoverview/hero-banner.jpg"
            alt="Space Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpacparkNavChrome />

      <article className={styles.article} aria-labelledby="spacpark07-title">
        <header className={styles.titleBar}>
          <h1 id="spacpark07-title" className={styles.titleBarMain}>
            Exhibit Layout
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.mapNote} id="TOP">
            Map icons are linked to descriptions below
          </p>

          <figure className={styles.mapFigure}>
            <Image
              src="/images/spacpark07/ussppk02.jpg"
              alt="Park Layout Map"
              width={489}
              height={359}
              useMap="#spacpark07-layout-map"
              unoptimized
            />
            <map name="spacpark07-layout-map" id="spacpark07-layout-map">
              {LAYOUT_MAP_AREAS.map((area) => (
                <area
                  key={`${area.shape}-${area.coords}`}
                  shape={area.shape}
                  coords={area.coords}
                  href={area.href}
                />
              ))}
            </map>
          </figure>

          <div className={styles.exhibitList}>
            {EXHIBIT_ITEMS.map((item) => (
              <p key={item.anchor} id={item.anchor} className={styles.exhibitItem}>
                {item.text}
                {item.topLink ? (
                  <>
                    {" "}
                    <Link href="#TOP" className={styles.topLink}>TOP</Link>
                  </>
                ) : null}
              </p>
            ))}
          </div>

          <p className={styles.source}>
            <em>Source: NASA Press Release, March 30, 1965</em>
          </p>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <Image
              src="/images/spacpark07/ussppk04.jpg"
              alt="Aerial view of Space Park"
              width={462}
              height={215}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            This aerial of the Transportation Area taken early in the 1964 Fair
            Season shows the layout of the U.S. Space Park. Note the early
            construction stages of The Hall of Science behind the Park. Ford Motor
            Company&apos;s <em>Wonder Rotunda</em> can be seen in the upper left
            corner of the photo. For a larger version of this photograph please
            visit the{" "}
            <Link href="/information/from-the-air">
              <em>See the Fair From the Air</em>
            </Link>{" "}
            Feature at nywf64.com.
          </p>
          <p className={styles.source}>
            Source:{" "}
            <em>
              World&apos;s Fair publicity photograph. Presented here courtesy of
              Craig Bavaro
            </em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/spacpark06"
        explicitPrevious
        overviewHref="/spacparkoverview"
        nextHref="/spacpark08"
      />
    </>
  );
}
