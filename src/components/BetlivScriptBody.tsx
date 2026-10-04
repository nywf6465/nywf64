import Image from "next/image";
import styles from "@/styles/betlivTopic.module.css";

export type ScriptPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  source?: "kellberg";
  plain?: boolean;
};

const KELLBERG_SOURCE =
  /SOURCE:\s*Photos?\s+presented\s+courtesy\s+Chris\s+Kellberg\s+collection\s+©\s+2010\s+Chris\s+Kellberg,\s+All\s+Rights\s+Reserved\.?/gi;

function KellbergSource() {
  return (
    <p className={styles.source}>
      SOURCE: Photo presented courtesy Chris Kellberg collection © 2010 Chris
      Kellberg, All Rights Reserved.
    </p>
  );
}

function KellbergPhotosSource() {
  return (
    <p className={styles.source}>
      SOURCE: Photos presented courtesy Chris Kellberg collection © 2010 Chris
      Kellberg, All Rights Reserved.
    </p>
  );
}

function cleanScriptText(text: string, captions: string[] = []) {
  let next = text.replace(KELLBERG_SOURCE, "");
  for (const caption of captions) {
    const pattern = caption.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    next = next.replace(new RegExp(pattern, "gi"), "");
  }
  return next.replace(/\n{3,}/g, "\n\n").trim();
}

type Block =
  | { type: "text"; text: string }
  | { type: "images"; keys: string[] };

function parseBlocks(text: string, captions: string[] = []): Block[] {
  const parts = text.split(/(\[\[IMG:[^\]]+\]\])/);
  const blocks: Block[] = [];

  const pushText = (raw: string) => {
    const cleaned = cleanScriptText(raw, captions);
    if (cleaned) blocks.push({ type: "text", text: cleaned });
  };

  for (const part of parts) {
    const match = part.match(/^\[\[IMG:(.+)\]\]$/);
    if (match) {
      const last = blocks[blocks.length - 1];
      if (last?.type === "images") {
        last.keys.push(match[1]);
      } else {
        blocks.push({ type: "images", keys: [match[1]] });
      }
    } else if (part.trim()) {
      const onlySource = !cleanScriptText(part, captions);
      if (onlySource) continue;
      pushText(part);
    }
  }
  return blocks;
}

export function BetlivScriptBody({
  text,
  photos,
}: {
  text: string;
  photos: Record<string, ScriptPhoto>;
}) {
  const captions = Object.values(photos)
    .map((photo) => photo.caption)
    .filter((caption): caption is string => Boolean(caption));
  const blocks = parseBlocks(text, captions);

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "text") {
          return (
            <pre key={`t-${index}`} className={styles.script}>
              {block.text}
            </pre>
          );
        }

        const items = block.keys
          .map((key) => photos[key])
          .filter((photo): photo is ScriptPhoto => Boolean(photo));
        if (items.length === 0) return null;

        const sharedCaption = items.find((item) => item.caption)?.caption;
        const usesKellberg = items.some((item) => item.source === "kellberg");
        const groupSource = items.length > 1;

        return (
          <div key={`i-${index}`} className={styles.scriptPhotos}>
            <div
              className={
                items.length > 1 ? styles.scriptPhotoRow : undefined
              }
            >
              {items.map((photo) => (
                <figure
                  key={photo.src}
                  className={styles.figure}
                  style={{ maxWidth: photo.width }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className={
                      photo.plain
                        ? `${styles.photoImg} ${styles.photoPlain}`
                        : styles.photoImg
                    }
                    unoptimized
                  />
                  {items.length === 1 && photo.caption ? (
                    <figcaption className={styles.caption}>
                      {photo.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
            {items.length > 1 && sharedCaption ? (
              <p className={styles.caption}>{sharedCaption}</p>
            ) : null}
            {usesKellberg
              ? groupSource
                ? <KellbergPhotosSource />
                : <KellbergSource />
              : null}
          </div>
        );
      })}
    </>
  );
}
