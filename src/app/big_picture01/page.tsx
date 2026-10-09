import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractiveMapScroller } from "@/components/InteractiveMapScroller";
import {
  BIG_PICTURE01_INSTRUCTION,
  BIG_PICTURE01_MAPS,
  BIG_PICTURE01_TILES,
  BIG_PICTURE01_WIDTH,
} from "@/data/bigPicture01Photo";
import styles from "./big_picture01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The BIG Picture — nywf64.com",
  description:
    "Interactive aerial photograph of the 1964/1965 New York World’s Fair — click or tap any pavilion to explore. The BIG Picture on nywf64.com.",
};

/**
 * Interactive Fair aerial photograph — The BIG Picture (`/big_picture01`).
 * Body from legacy big_picture01.html (tiled bigpicR*C* image map).
 *
 * HARD RULE — Interactive Fair maps/photos must keep native size on mobile
 * (no shrink-to-fit). Visitors scroll/pan to tap hotspots. Desktop
 * drag-to-pan is enabled; pan stays inside `.mapScroller` so header/footer
 * remain stationary.
 *
 * Stack: banner hero → navy title → instruction → native-size photo scroller
 * with 1px border.
 */
export default function BigPicture01Page() {
  const mapNames = Array.from(
    new Set(
      BIG_PICTURE01_TILES.map((t) => t.mapName).filter(
        (n): n is string => typeof n === "string" && n.length > 0,
      ),
    ),
  );

  return (
    <main>
      <section className={styles.hero} aria-label="The BIG Picture">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/big_picture01/banner.jpg"
            alt="The BIG Picture"
            width={910}
            height={100}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <article className={styles.article} aria-labelledby="big-picture01-title">
        <header className={styles.titleBar}>
          <h1 id="big-picture01-title" className={styles.titleBarMain}>
            The BIG Picture
          </h1>
        </header>

        <p className={styles.backLink}>
          <Link href="/maps">← Interactive Maps</Link>
        </p>

        <p className={styles.instruction}>{BIG_PICTURE01_INSTRUCTION}</p>

        <InteractiveMapScroller
          className={styles.mapScroller}
          draggingClassName={styles.mapScrollerDragging}
          aria-label="The BIG Picture — scroll or pan to explore the Fair photograph"
        >
          <div
            className={styles.mapSurface}
            style={{ width: BIG_PICTURE01_WIDTH }}
          >
            {BIG_PICTURE01_TILES.map((tile) => {
              const mapId = tile.mapName ? `#${tile.mapName}` : undefined;
              return (
                <div
                  key={tile.file}
                  className={styles.tile}
                  style={
                    {
                      "--tile-w": `${tile.width}px`,
                      "--tile-h": `${tile.height}px`,
                    } as CSSProperties
                  }
                >
                  {/* Native <img> required for HTML image maps (usemap). */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/big_picture01/${tile.file}`}
                    alt=""
                    width={tile.width}
                    height={tile.height}
                    useMap={mapId}
                    className={styles.tileImg}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          {mapNames.map((name) => (
            <map key={name} name={name}>
              {(BIG_PICTURE01_MAPS[name] ?? []).map((area, i) => (
                <area
                  key={`${name}-${i}-${area.href}`}
                  shape={area.shape}
                  coords={area.coords}
                  href={area.href}
                  alt={area.title}
                  title={area.title}
                />
              ))}
            </map>
          ))}
        </InteractiveMapScroller>
      </article>
    </main>
  );
}
