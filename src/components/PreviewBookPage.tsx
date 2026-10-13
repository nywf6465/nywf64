import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PreviewHero } from "@/components/PreviewHero";
import { PreviewNavChrome } from "@/components/PreviewNavChrome";
import styles from "@/styles/previewBookPage.module.css";

export type PreviewTile = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type PreviewTileGroup = {
  columns: number;
  tiles: PreviewTile[];
};

export type PreviewBookPageProps = {
  titleId: string;
  /** Navy title bar text (legacy titlebar). */
  title?: string;
  groups: PreviewTileGroup[];
  previousHref: string;
  nextHref: string;
};

const DEFAULT_TITLE = "Official Preview New York World's Fair 1964/1965";

/**
 * Shared Official Preview Book page shell.
 * Stack: PreviewHero → PreviewNavChrome → navy title → tiled scans → Nav2Bar.
 */
export function PreviewBookPage({
  titleId,
  title = DEFAULT_TITLE,
  groups,
  previousHref,
  nextHref,
}: PreviewBookPageProps) {
  return (
    <>
      <PreviewHero />
      <PreviewNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          {groups.map((group, gi) => (
            <div
              key={gi}
              className={styles.tileFrame}
              style={{
                gridTemplateColumns: `repeat(${group.columns}, minmax(0, 1fr))`,
              }}
            >
              {group.tiles.map((tile) => (
                <Image
                  key={tile.src}
                  src={tile.src}
                  alt={tile.alt ?? ""}
                  width={tile.width}
                  height={tile.height}
                  className={styles.tile}
                  sizes="(max-width: 720px) 33vw, 300px"
                  unoptimized
                />
              ))}
            </div>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/preview"
        nextHref={nextHref}
      />
    </>
  );
}
