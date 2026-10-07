import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync("/tmp/johwax-legacy/johwax16.html", "utf8");
const start = html.indexOf("<H1>");
const end = html.lastIndexOf("</TABLE>");
const td = html.slice(start, end);

const paraRe = /<p[^>]*>([\s\S]*?)<\/p>/gi;
const chunks = [];
let m;
while ((m = paraRe.exec(td))) {
  let part = m[1];
  const imgs = [...part.matchAll(/<IMG[^>]*SRC="([^"]+)"[^>]*WIDTH="(\d+)"[^>]*HEIGHT="(\d+)"[^>]*>/gi)];
  for (const im of imgs) {
    const file = im[1].split("/").pop();
    let align = "";
    if (/align="RIGHT"/i.test(im[0])) align = "floatRight";
    else if (/align="LEFT"/i.test(im[0])) align = "floatLeft";
    chunks.push({ type: "img", file, w: im[2], h: im[3], align });
  }
  if (imgs.length) {
    part = part.replace(/<IMG[^>]+>/gi, "");
  }
  if (/<TABLE/i.test(part)) {
    const im = part.match(/SRC="([^"]+)"[^>]*WIDTH="(\d+)"[^>]*HEIGHT="(\d+)"/i);
    if (im) {
      const file = im[1].split("/").pop();
      const cap = part.match(
        /<CAPTION[^>]*><I><FONT[^>]*>([\s\S]*?)<\/FONT><\/I>/i,
      );
      chunks.push({
        type: "img",
        file,
        w: im[2],
        h: im[3],
        align: "",
        caption: cap?.[1]?.replace(/<[^>]+>/g, "").trim(),
      });
    }
    continue;
  }
  let text = part
    .replace(/<font[^>]*>/gi, "")
    .replace(/<\/font>/gi, "")
    .replace(/<FONT[^>]*>/gi, "")
    .replace(/<\/FONT>/gi, "")
    .replace(/<img[^>]+>/gi, "")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<I>/gi, "<em>")
    .replace(/<\/I>/gi, "</em>")
    .replace(/<i>/gi, "<em>")
    .replace(/<\/i>/gi, "</em>")
    .trim();
  if (!text || text.length < 15) continue;
  chunks.push({ type: "p", text });
}

function jsxText(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/{/g, "&#123;")
    .replace(/}/g, "&#125;")
    .replace(/&lt;em&gt;/g, "<em>")
    .replace(/&lt;\/em&gt;/g, "</em>");
}

let body = "";
for (const c of chunks) {
  if (c.type === "p") {
    body += `      <p className={styles.body}>${jsxText(c.text)}</p>\n`;
  } else {
    const figureClass = c.align
      ? `\${styles.figure} \${styles.${c.align}}`
      : `\${styles.figure}`;
    body += `      <figure className={\`${figureClass}\`}>\n`;
    body += `        <Image src="/images/johwax16/${c.file}" alt="" width={${c.w}} height={${c.h}} className={styles.inlineArt} unoptimized />\n`;
    if (c.caption) {
      body += `        <figcaption className={styles.caption}>${jsxText(c.caption)}</figcaption>\n`;
    }
    body += `      </figure>\n`;
  }
}

const out = `import Image from "next/image";
import styles from "./johwax16.module.css";

export function Johwax16ArticleContent() {
  return (
    <>
      <h2 className={styles.headline}>World&apos;s Fair Jewel Gets a New Setting</h2>
      <p className={styles.subhead}>
        Golden Rondelle Theater will be brought to Racine after successful run at
        the New York Fair in 1964-65
      </p>
${body}      <p className={styles.source}>
        SOURCE: <em>Johnson Magazine</em>, early 1966(?)
      </p>
    </>
  );
}
`;

fs.mkdirSync(path.join(ROOT, "src/app/johwax16"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "src/app/johwax16/articleContent.tsx"), out);
console.log("chunks", chunks.length);
