import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MAPS03_HEIGHT,
  MAPS03_INSTRUCTION,
  MAPS03_MAPS,
  MAPS03_TILES,
  MAPS03_WIDTH,
} from "@/data/maps03InternationalMap";
import styles from "./maps03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "International Area Map — nywf64.com",
  description:
    "Interactive International Area Map — click or tap any pavilion to explore. 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Interactive Fair map — International Area Map (`/maps03`).
 * Body from legacy maps03.html (tiled InternationalR*C* image map).
 *
 * HARD RULE — Interactive Fair maps must keep native size on mobile
 * (no shrink-to-fit). Visitors scroll/pan to tap hotspots. Horizontal
 * pan stays inside `.mapScroller` so header/footer remain stationary.
 *
 * Stack: international-map hero → navy title → instruction → native-size map scroller.
 */
export default function Maps03Page() {
  const mapNames = Array.from(
    new Set(
      MAPS03_TILES.map((t) => t.mapName).filter(
        (n): n is string => typeof n === "string" && n.length > 0,
      ),
    ),
  );

  return (
    <main>
      <section className={styles.hero} aria-label="International Area Map">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maps03/hero-banner.jpg"
            alt="International Area Map"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>

      <article className={styles.article} aria-labelledby="maps03-title">
        <header className={styles.titleBar}>
          <h1 id="maps03-title" className={styles.titleBarMain}>
            International Area Map
          </h1>
        </header>

        <p className={styles.backLink}>
          <Link href="/maps">← Interactive Maps</Link>
        </p>

        <p className={styles.instruction}>{MAPS03_INSTRUCTION}</p>

        <div
          className={styles.mapScroller}
          role="region"
          aria-label="International Area Map — scroll or pan to explore"
        >
          <div
            className={styles.mapSurface}
            style={{ width: MAPS03_WIDTH, height: MAPS03_HEIGHT }}
          >
            {MAPS03_TILES.map((tile) => {
              const mapId = tile.mapName ? `#${tile.mapName}` : undefined;
              return (
                <div
                  key={tile.file}
                  className={styles.tile}
                  style={
                    {
                      "--tile-w": `${tile.width}px`,
                      "--tile-h": `${tile.height}px`,
                      "--tile-x": `${tile.x}px`,
                      "--tile-y": `${tile.y}px`,
                    } as CSSProperties
                  }
                >
                  {/* Native <img> required for HTML image maps (usemap). */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/maps03/${tile.file}`}
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
              {(MAPS03_MAPS[name] ?? []).map((area, i) => (
                <area
                  key={`${name}-${i}-${area.href}-${area.coords}`}
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
