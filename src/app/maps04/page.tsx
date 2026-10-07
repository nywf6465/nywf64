import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InteractiveMapScroller } from "@/components/InteractiveMapScroller";
import {
  MAPS04_HEIGHT,
  MAPS04_INSTRUCTION,
  MAPS04_MAPS,
  MAPS04_TILES,
  MAPS04_WIDTH,
} from "@/data/maps04FederalStateMap";
import styles from "./maps04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Federal & State Area Map — nywf64.com",
  description:
    "Interactive Federal & State Area Map — click or tap any pavilion to explore. 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Interactive Fair map — Federal & State Area Map (`/maps04`).
 * Body from legacy maps04.html (tiled StateFederalR*C* image map).
 *
 * HARD RULE — Interactive Fair maps must keep native size on mobile
 * (no shrink-to-fit). Visitors scroll/pan to tap hotspots. Desktop
 * drag-to-pan is enabled; pan stays inside `.mapScroller`
 * so header/footer remain stationary.
 *
 * Stack: federal-state hero → navy title → instruction → native-size map scroller.
 */
export default function Maps04Page() {
  const mapNames = Array.from(
    new Set(
      MAPS04_TILES.map((t) => t.mapName).filter(
        (n): n is string => typeof n === "string" && n.length > 0,
      ),
    ),
  );

  return (
    <main>
      <section className={styles.hero} aria-label="Federal & State Area Map">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/maps04/hero-banner.jpg"
            alt="Federal & State Area Map"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <article className={styles.article} aria-labelledby="maps04-title">
        <header className={styles.titleBar}>
          <h1 id="maps04-title" className={styles.titleBarMain}>
            Federal &amp; State Area Map
          </h1>
        </header>

        <p className={styles.backLink}>
          <Link href="/maps">← Interactive Maps</Link>
        </p>

        <p className={styles.instruction}>{MAPS04_INSTRUCTION}</p>

        <InteractiveMapScroller
          className={styles.mapScroller}
          draggingClassName={styles.mapScrollerDragging}
          aria-label="Federal & State Area Map — scroll or pan to explore"
        >
          <div
            className={styles.mapSurface}
            style={{ width: MAPS04_WIDTH, height: MAPS04_HEIGHT }}
          >
            {MAPS04_TILES.map((tile) => {
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
                    src={`/images/maps04/${tile.file}`}
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
              {(MAPS04_MAPS[name] ?? []).map((area, i) => (
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
