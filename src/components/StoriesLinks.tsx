import Image from "next/image";
import Link from "next/link";
import styles from "./StoriesLinks.module.css";

type Hotspot = {
  id: string;
  title: string;
  href: string;
  hoverSrc: string;
  left: string;
  top: string;
  width: string;
  height: string;
};

type Panel = {
  src: string;
  alt: string;
  width: number;
  height: number;
  topics: readonly Hotspot[];
};

/** Exact user artwork — base unchanged. Hover crops swap burgundy↔navy on text/arrows only; thumbnails untouched. */
const PANELS: readonly Panel[] = [
  {
    src: "/images/stories-links-01.jpg",
    alt: "Stories & Essays: My Encounter with Robert Moses; Memories of the 1964 World’s Fair; To the Fair or Bust; A World’s Fair Odyssey; The Hunt for International Exhibits; New York’s Sacred Meadow",
    width: 1686,
    height: 933,
    topics: [
      {
        id: "robert-moses",
        title: "My Encounter with Robert Moses",
        href: "/stories/robert-moses",
        hoverSrc: "/images/stories-hover/robert-moses.jpg",
        left: "1.423%",
        top: "4.502%",
        width: "48.043%",
        height: "30.011%",
      },
      {
        id: "memories",
        title: "Memories of the 1964 World\u2019s Fair",
        href: "/stories/memories",
        hoverSrc: "/images/stories-hover/memories.jpg",
        left: "50.474%",
        top: "4.502%",
        width: "48.043%",
        height: "30.118%",
      },
      {
        id: "to-the-fair-or-bust",
        title: "To the Fair or Bust",
        href: "/stories/to-the-fair-or-bust",
        hoverSrc: "/images/stories-hover/to-the-fair-or-bust.jpg",
        left: "1.423%",
        top: "36.120%",
        width: "48.043%",
        height: "28.296%",
      },
      {
        id: "worlds-fair-odyssey",
        title: "A World\u2019s Fair Odyssey",
        href: "/stories/worlds-fair-odyssey",
        hoverSrc: "/images/stories-hover/worlds-fair-odyssey.jpg",
        left: "50.474%",
        top: "36.120%",
        width: "48.043%",
        height: "28.403%",
      },
      {
        id: "hunt-for-international-exhibits",
        title: "The Hunt for International Exhibits",
        href: "/stories/hunt-for-international-exhibits",
        hoverSrc: "/images/stories-hover/hunt-for-international-exhibits.jpg",
        left: "1.423%",
        top: "65.916%",
        width: "47.924%",
        height: "29.368%",
      },
      {
        id: "new-yorks-sacred-meadow",
        title: "New York\u2019s Sacred Meadow",
        href: "/stories/new-yorks-sacred-meadow",
        hoverSrc: "/images/stories-hover/new-yorks-sacred-meadow.jpg",
        left: "50.415%",
        top: "66.024%",
        width: "48.102%",
        height: "29.368%",
      },
    ],
  },
  {
    src: "/images/stories-links-02.jpg",
    alt: "Stories & Essays: Fairs and Flushing Meadows; Fire & Police; Allied Maintenance; Airlines; Schulmerich Carillons; Detailed Models",
    width: 1686,
    height: 933,
    topics: [
      {
        id: "fairs-and-flushing-meadows",
        title: "Fairs and Flushing Meadows",
        href: "/stories/fairs-and-flushing-meadows",
        hoverSrc: "/images/stories-hover/fairs-and-flushing-meadows.jpg",
        left: "1.186%",
        top: "6.109%",
        width: "48.399%",
        height: "28.403%",
      },
      {
        id: "fire-and-police",
        title: "Fire & Police",
        href: "/stories/fire-and-police",
        hoverSrc: "/images/stories-hover/fire-and-police.jpg",
        left: "50.534%",
        top: "6.109%",
        width: "48.339%",
        height: "28.510%",
      },
      {
        id: "allied-maintenance",
        title: "Allied Maintenance",
        href: "/stories/allied-maintenance",
        hoverSrc: "/images/stories-hover/allied-maintenance.jpg",
        left: "1.246%",
        top: "36.120%",
        width: "48.339%",
        height: "28.296%",
      },
      {
        id: "airlines",
        title: "Airlines",
        href: "/stories/airlines",
        hoverSrc: "/images/stories-hover/airlines.jpg",
        left: "50.534%",
        top: "36.120%",
        width: "48.339%",
        height: "28.296%",
      },
      {
        id: "schulmerich-carillons",
        title: "Schulmerich Carillons",
        href: "/stories/schulmerich-carillons",
        hoverSrc: "/images/stories-hover/schulmerich-carillons.jpg",
        left: "1.246%",
        top: "66.024%",
        width: "48.280%",
        height: "29.260%",
      },
      {
        id: "detailed-models",
        title: "Detailed Models",
        href: "/stories/detailed-models",
        hoverSrc: "/images/stories-hover/detailed-models.jpg",
        left: "50.474%",
        top: "66.024%",
        width: "48.399%",
        height: "29.368%",
      },
    ],
  },
  {
    src: "/images/stories-links-03.jpg",
    alt: "Stories & Essays: Rob Bianco’s Model; Almost Fond Farewell; Records; Gas Pavilion; Space Frame; Carousel of Progress",
    width: 1536,
    height: 1024,
    topics: [
      {
        id: "rob-biancos-model",
        title: "Rob Bianco\u2019s Model",
        href: "/stories/rob-biancos-model",
        hoverSrc: "/images/stories-hover/rob-biancos-model.jpg",
        left: "1.302%",
        top: "4.980%",
        width: "48.177%",
        height: "26.270%",
      },
      {
        id: "almost-fond-farewell",
        title: "Almost Fond Farewell",
        href: "/stories/almost-fond-farewell",
        hoverSrc: "/images/stories-hover/almost-fond-farewell.jpg",
        left: "50.456%",
        top: "4.980%",
        width: "48.307%",
        height: "26.270%",
      },
      {
        id: "records",
        title: "Records",
        href: "/stories/records",
        hoverSrc: "/images/stories-hover/records.jpg",
        left: "1.367%",
        top: "32.324%",
        width: "48.047%",
        height: "28.516%",
      },
      {
        id: "gas-pavilion",
        title: "Gas Pavilion",
        href: "/stories/gas-pavilion",
        hoverSrc: "/images/stories-hover/gas-pavilion.jpg",
        left: "50.456%",
        top: "32.324%",
        width: "48.242%",
        height: "28.418%",
      },
      {
        id: "space-frame",
        title: "Space Frame",
        href: "/stories/space-frame",
        hoverSrc: "/images/stories-hover/space-frame.jpg",
        left: "1.302%",
        top: "61.914%",
        width: "48.112%",
        height: "30.273%",
      },
      {
        id: "carousel-of-progress",
        title: "Carousel of Progress",
        href: "/stories/carousel-of-progress",
        hoverSrc: "/images/stories-hover/carousel-of-progress.jpg",
        left: "50.456%",
        top: "61.914%",
        width: "48.177%",
        height: "30.176%",
      },
    ],
  },
  {
    src: "/images/stories-links-04.jpg",
    alt: "Stories & Essays: Mr. Lincoln; Small World; Light Out; IBM; Holiday with Light; Texan with Big Dreams",
    width: 1536,
    height: 1024,
    topics: [
      {
        id: "mr-lincoln",
        title: "Mr. Lincoln",
        href: "/stories/mr-lincoln",
        hoverSrc: "/images/stories-hover/mr-lincoln.jpg",
        left: "1.172%",
        top: "12.305%",
        width: "48.242%",
        height: "24.707%",
      },
      {
        id: "small-world",
        title: "Small World",
        href: "/stories/small-world",
        hoverSrc: "/images/stories-hover/small-world.jpg",
        left: "50.651%",
        top: "12.305%",
        width: "48.568%",
        height: "24.707%",
      },
      {
        id: "light-out",
        title: "Light Out",
        href: "/stories/light-out",
        hoverSrc: "/images/stories-hover/light-out.jpg",
        left: "1.172%",
        top: "40.527%",
        width: "48.242%",
        height: "24.707%",
      },
      {
        id: "ibm",
        title: "IBM",
        href: "/stories/ibm",
        hoverSrc: "/images/stories-hover/ibm.jpg",
        left: "50.651%",
        top: "40.527%",
        width: "48.438%",
        height: "24.707%",
      },
      {
        id: "holiday-with-light",
        title: "Holiday with Light",
        href: "/stories/holiday-with-light",
        hoverSrc: "/images/stories-hover/holiday-with-light.jpg",
        left: "1.172%",
        top: "66.992%",
        width: "48.242%",
        height: "24.707%",
      },
      {
        id: "texan-with-big-dreams",
        title: "Texan with Big Dreams",
        href: "/stories/texan-with-big-dreams",
        hoverSrc: "/images/stories-hover/texan-with-big-dreams.jpg",
        left: "50.651%",
        top: "66.992%",
        width: "48.438%",
        height: "24.707%",
      },
    ],
  },
  {
    src: "/images/stories-links-05.jpg",
    alt: "Stories & Essays: The Underground World Home; The Story of The Better Living Center; Shea Stadium and the Moses Vision; World’s Fair History of Sermons from Science; Story of the Billy Graham Pavilion; The Mighty Fair; The 1989 New York World’s Fair",
    width: 1536,
    height: 1024,
    topics: [
      {
        id: "underground-world-home",
        title: "The Underground World Home",
        href: "/stories/underground-world-home",
        hoverSrc: "/images/stories-hover/underground-world-home.jpg",
        left: "1.172%",
        top: "5.469%",
        width: "48.242%",
        height: "21.191%",
      },
      {
        id: "better-living-center",
        title: "The Story of The Better Living Center",
        href: "/stories/better-living-center",
        hoverSrc: "/images/stories-hover/better-living-center.jpg",
        left: "50.651%",
        top: "5.566%",
        width: "48.763%",
        height: "21.191%",
      },
      {
        id: "shea-stadium",
        title: "Shea Stadium and the Moses Vision",
        href: "/stories/shea-stadium",
        hoverSrc: "/images/stories-hover/shea-stadium.jpg",
        left: "1.172%",
        top: "30.273%",
        width: "48.242%",
        height: "21.191%",
      },
      {
        id: "sermons-from-science",
        title: "World\u2019s Fair History of Sermons from Science",
        href: "/stories/sermons-from-science",
        hoverSrc: "/images/stories-hover/sermons-from-science.jpg",
        left: "50.651%",
        top: "30.273%",
        width: "48.698%",
        height: "21.191%",
      },
      {
        id: "billy-graham",
        title: "Story of the Billy Graham Pavilion",
        href: "/stories/billy-graham",
        hoverSrc: "/images/stories-hover/billy-graham.jpg",
        left: "1.172%",
        top: "53.711%",
        width: "48.242%",
        height: "21.191%",
      },
      {
        id: "the-mighty-fair",
        title: "The Mighty Fair",
        href: "/stories/the-mighty-fair",
        hoverSrc: "/images/stories-hover/the-mighty-fair.jpg",
        left: "50.651%",
        top: "53.711%",
        width: "48.698%",
        height: "21.191%",
      },
      {
        id: "1989-fair",
        title: "The 1989 New York World\u2019s Fair",
        href: "/stories/1989-fair",
        hoverSrc: "/images/stories-hover/1989-fair.jpg",
        left: "1.172%",
        top: "76.562%",
        width: "48.242%",
        height: "21.191%",
      },
    ],
  },
] as const;

export function StoriesLinks() {
  return (
    <section className={styles.section} aria-label="Stories & Essays links">
      <div className={styles.stack}>
        {PANELS.map((panel) => (
          <div key={panel.src} className={styles.frame}>
            <Image
              src={panel.src}
              alt={panel.alt}
              width={panel.width}
              height={panel.height}
              sizes="100vw"
              className={styles.art}
              unoptimized
            />
            {panel.topics.map((topic) => (
              <Link
                key={topic.id}
                href={topic.href}
                className={styles.hotspot}
                style={{
                  left: topic.left,
                  top: topic.top,
                  width: topic.width,
                  height: topic.height,
                }}
                aria-label={topic.title}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={topic.hoverSrc}
                  alt=""
                  className={styles.hoverArt}
                  draggable={false}
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
