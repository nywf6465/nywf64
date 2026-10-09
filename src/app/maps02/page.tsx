import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractiveMapScroller } from "@/components/InteractiveMapScroller";
import {
  MAPS02_HEIGHT,
  MAPS02_INSTRUCTION,
  MAPS02_MAPS,
  MAPS02_TILES,
  MAPS02_WIDTH,
} from "@/data/maps02IndustrialMap";
import styles from "./maps02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Industrial Area Map — nywf64.com",
  description:
    "Interactive Industrial Area Map — click or tap any pavilion to explore. 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Interactive Fair map — Industrial Area Map (`/maps02`).
 * Body from legacy maps02.html (tiled IndustrialR*C* image map).
 *
 * HARD RULE — Interactive Fair maps must keep native size on mobile
 * (no shrink-to-fit). Visitors scroll/pan to tap hotspots. Desktop
 * drag-to-pan is enabled; pan stays inside `.mapScroller`
 * so header/footer remain stationary.
 *
 * Stack: industrial-map hero → navy title → instruction → native-size map scroller.
 */
export default function Maps02Page() {
  const mapNames = Array.from(
    new Set(
      MAPS02_TILES.map((t) => t.mapName).filter(
        (n): n is string => typeof n === "string" && n.length > 0,
      ),
    ),
  );

  return (
    <main>
      <section className={styles.hero} aria-label="Industrial Area Map">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maps02/hero-banner.jpg"
            alt="Industrial Area Map"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <article className={styles.article} aria-labelledby="maps02-title">
        <header className={styles.titleBar}>
          <h1 id="maps02-title" className={styles.titleBarMain}>
            Industrial Area Map
          </h1>
        </header>

        <p className={styles.backLink}>
          <Link href="/maps">← Interactive Maps</Link>
        </p>

        <p className={styles.instruction}>{MAPS02_INSTRUCTION}</p>

        <InteractiveMapScroller
          className={styles.mapScroller}
          draggingClassName={styles.mapScrollerDragging}
          aria-label="Industrial Area Map — scroll or pan to explore"
        >
          <div
            className={styles.mapSurface}
            style={{ width: MAPS02_WIDTH, height: MAPS02_HEIGHT }}
          >
            {MAPS02_TILES.map((tile) => {
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
                    src={`/images/maps02/${tile.file}`}
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
              {(MAPS02_MAPS[name] ?? []).map((area, i) => (
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
