import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractiveMapScroller } from "@/components/InteractiveMapScroller";
import {
  MAPS06_HEIGHT,
  MAPS06_INSTRUCTION,
  MAPS06_MAPS,
  MAPS06_TILES,
  MAPS06_WIDTH,
} from "@/data/maps06AmusementMap";
import styles from "./maps06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Amusement Area Map — nywf64.com",
  description:
    "Interactive Amusement Area Map — click or tap any pavilion to explore. 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Interactive Fair map — Amusement Area Map (`/maps06`).
 * Body from legacy maps06.html (tiled AmusementR*C* image map).
 *
 * HARD RULE — Interactive Fair maps must keep native size on mobile
 * (no shrink-to-fit). Visitors scroll/pan to tap hotspots. Desktop
 * drag-to-pan is enabled; pan stays inside `.mapScroller`
 * so header/footer remain stationary.
 *
 * Stack: amusement-map hero → navy title → instruction → native-size map scroller.
 */
export default function Maps06Page() {
  const mapNames = Array.from(
    new Set(
      MAPS06_TILES.map((t) => t.mapName).filter(
        (n): n is string => typeof n === "string" && n.length > 0,
      ),
    ),
  );

  return (
    <main>
      <section className={styles.hero} aria-label="Amusement Area Map">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maps06/hero-banner.jpg"
            alt="Amusement Area Map"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <article className={styles.article} aria-labelledby="maps06-title">
        <header className={styles.titleBar}>
          <h1 id="maps06-title" className={styles.titleBarMain}>
            Amusement Area Map
          </h1>
        </header>

        <p className={styles.backLink}>
          <Link href="/maps">← Interactive Maps</Link>
        </p>

        <p className={styles.instruction}>{MAPS06_INSTRUCTION}</p>

        <InteractiveMapScroller
          className={styles.mapScroller}
          draggingClassName={styles.mapScrollerDragging}
          aria-label="Amusement Area Map — scroll or pan to explore"
        >
          <div
            className={styles.mapSurface}
            style={{ width: MAPS06_WIDTH, height: MAPS06_HEIGHT }}
          >
            {MAPS06_TILES.map((tile) => {
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
                    src={`/images/maps06/${tile.file}`}
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
              {(MAPS06_MAPS[name] ?? []).map((area, i) => (
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
        </InteractiveMapScroller>
      </article>
    </main>
  );
}
