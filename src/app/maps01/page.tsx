import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MAPS01_INSTRUCTION,
  MAPS01_MAPS,
  MAPS01_TILES,
  MAPS01_WIDTH,
} from "@/data/maps01SouvenirMap";
import styles from "./maps01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "1964 Official Souvenir Map of the Fair — nywf64.com",
  description:
    "Interactive 1964 Official Souvenir Map of the Fair — click or tap any pavilion to explore. 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Interactive Fair map — 1964 Official Souvenir Map (`/maps01`).
 * Body from legacy maps01.html (tiled OfficialR*C* image map).
 *
 * HARD RULE — Interactive Fair maps must keep native size on mobile
 * (no shrink-to-fit). Visitors scroll/pan to tap hotspots. Horizontal
 * pan stays inside `.mapScroller` so header/footer remain stationary.
 *
 * Stack: souvenir-map hero → navy title → instruction → native-size map scroller.
 */
export default function Maps01Page() {
  const mapNames = Array.from(
    new Set(
      MAPS01_TILES.map((t) => t.mapName).filter(
        (n): n is string => typeof n === "string" && n.length > 0,
      ),
    ),
  );

  return (
    <main>
      <section className={styles.hero} aria-label="1964 Official Souvenir Map">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maps01/hero-banner.jpg"
            alt="1964 Official Souvenir Map"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>

      <article className={styles.article} aria-labelledby="maps01-title">
        <header className={styles.titleBar}>
          <h1 id="maps01-title" className={styles.titleBarMain}>
            1964 Official Souvenir Map of the Fair
          </h1>
        </header>

        <p className={styles.backLink}>
          <Link href="/maps">← Interactive Maps</Link>
        </p>

        <p className={styles.instruction}>{MAPS01_INSTRUCTION}</p>

        <div
          className={styles.mapScroller}
          role="region"
          aria-label="1964 Official Souvenir Map — scroll or pan to explore"
        >
          <div
            className={styles.mapSurface}
            style={{ width: MAPS01_WIDTH }}
          >
            {MAPS01_TILES.map((tile) => {
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
                    src={`/images/maps01/${tile.file}`}
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
              {(MAPS01_MAPS[name] ?? []).map((area, i) => (
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
        </div>
      </article>
    </main>
  );
}
