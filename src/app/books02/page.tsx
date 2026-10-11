import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BooksNavChrome } from "@/components/BooksNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./books02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Book Excerpt and Ordering Information — Our Books on the Fair — nywf64.com",
  description:
    "Book excerpt and ordering information for the Images of America New York World’s Fair books by Bill Cotter and Bill Young on nywf64.com.",
};

const AMAZON_MODERN =
  "https://www.amazon.com/1964-1965-Worlds-Images-Modern-America/dp/1467121053/ref=sr_1_3?s=books&ie=UTF8&qid=1541791838&sr=1-3&keywords=new+york+world%27s+fair+1964";
const AMAZON_IOA =
  "https://www.amazon.com/1964-1965-York-Worlds-Images-America/dp/0738536067/ref=sr_1_1?s=books&ie=UTF8&qid=1541791988&sr=1-1&keywords=new+york+world%27s+fair+1964";
const AMAZON_LEGACY =
  "https://www.amazon.com/1964-1965-New-York-Worlds-Fair/dp/0738557455/ref=sr_1_5?s=books&ie=UTF8&qid=1541792074&sr=1-5&keywords=new+york+world%27s+fair+1964";

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

const CONTENTS: { num?: string; title: string; page: string }[] = [
  { title: "Acknowledgments", page: "6" },
  { title: "Introduction", page: "7" },
  { num: "1.", title: "General Tour", page: "9" },
  { num: "2.", title: "International Area", page: "23" },
  { num: "3.", title: "Industrial Area", page: "39" },
  { num: "4.", title: "Federal and State Area", page: "55" },
  { num: "5.", title: "Transportation Area", page: "67" },
  { num: "6.", title: "Lake Amusement Area", page: "79" },
  { num: "7.", title: "Night Scenes", page: "87" },
];

/**
 * Our Books on the Fair — Book Excerpt and Ordering Information.
 * Body from legacy book03.html (Page 2 after overview).
 *
 * Stack: bookshero → BooksNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Books02Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Our Books on the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/books/bookshero.jpg"
            alt="Our Books on the Fair — Images of America series on the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BooksNavChrome />

      <article className={styles.article} aria-labelledby="books02-title">
        <header className={styles.titleBar}>
          <h1 id="books02-title" className={styles.titleBarMain}>
            Book Excerpt and <em>Ordering Information</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.excerptBox}>
            <p className={styles.excerptHead}>
              Excerpts from{" "}
              <strong>
                <em>
                  Images of Modern America: The 1964-1965 New York World&apos;s
                  Fair
                </em>
              </strong>
            </p>
            <p className={styles.excerptByline}>
              by Bill Cotter and Bill Young
            </p>

            <p className={styles.contentsTitle}>
              <span className={styles.drop}>C</span>ONTENTS
            </p>
            <table className={styles.contentsTable}>
              <tbody>
                {CONTENTS.map((row) => (
                  <tr key={`${row.num ?? ""}${row.title}`}>
                    <td className={styles.contentsNum}>{row.num ?? ""}</td>
                    <td>{row.title}</td>
                    <td className={styles.contentsPage}>{row.page}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr className={styles.rule} />

            <div className={styles.chapterHead}>
              <p className={styles.seven}>Seven</p>
              <p className={styles.night}>
                <span className={styles.drop}>N</span>IGHT{" "}
                <span className={styles.drop}>S</span>CENES
              </p>
            </div>

            <p className={styles.body}>
              An attraction often overlooked in retrospectives of the 1964-1965
              New York World&apos;s Fair -- one seen and remembered by millions
              of fairgoers -- was the magical fairyland of color and light that
              the fair became after the sun had set.
            </p>
            <p className={styles.body}>
              Imagine 10,000 tons of water shooting as high as 150 feet into the
              air in ever-shifting patterns while colored lights cast brilliant
              effects on the water jets. Overhead, fireworks explode in the sky
              while a 60-piece orchestra plays symphony music by the great
              masters through speakers hidden in the street lights. There has
              not been a water and light show since that matches the nightly
              spectacle of the show at the Fountains of the Planets in the Pool
              of Industry.
            </p>
            <p className={styles.body}>
              Now, imagine the sight the fairgoers saw as they turned from the
              fountain to exit the fairgrounds. To the left were the swirling
              multi-colored lights atop General Electric&apos;s elegantly domed
              pavilion. Slightly ahead and to the left, ever-changing pastel
              colors glowed from the reflective aluminum panels covering the
              Electric Utilities&apos;s Tower of Light, where a beam of light
              with an intensity of 105 million 100-watt bulbs shot skyward from
              the center of the pavilion. Straight ahead, ground-based lighting
              units shown up into the trees lining the fair&apos;s Main Mall,
              producing highlights and shadows in the foliage. The white-light
              sprays of the Fountains of the Fair splashed inward into the east
              and west pools while the silhouette of the Rocket Thrower could be
              seen against the brilliantly lit Unisphere at the end of the mall.
              To the right, DuPont&apos;s multicolored chemical atoms encircled
              its red-and-white pavilion. Farther to the right were the
              illuminated spires of the Mormon pavilion with its golden statue
              of the angel Moroni trumpeting from the highest spire.
            </p>
            <p className={styles.body}>
              From the decorative street lights to the illuminated flying flags,
              to the spectacular lighting effects of the Unisphere, lighting and
              special effects were an important part of the fair. Millions of
              dollars were spent by the fair and its exhibitors to make the time
              after dark a memorable experience for the fairgoer.
            </p>
            <p className={styles.pageCite}>
              <strong>
                <em>
                  Images of Modern America: The 1964-1965 New York World&apos;s
                  Fair
                </em>
              </strong>{" "}
              page 87
            </p>

            <div className={styles.photoBlock}>
              <Image
                src="/images/books02/151NYS.jpg"
                alt="New York State Pavilion at night"
                width={500}
                height={330}
                className={styles.photo}
                unoptimized
              />
            </div>
            <p className={styles.caption}>
              Cables suspended above the roof of the New York State pavilion
              held bright lights that shown down on the translucent colored
              panels, transforming the pavilion into a cathedral of stained
              glass. The roof construction consisted of sets of two fiberglass
              panels separated by four inches, the top panel, white, the bottom,
              colored. Light passing through the two panels gave the effect of a
              roof made of thick glass blocks.
            </p>
            <p className={styles.pageCite}>
              <strong>
                <em>
                  Images of Modern America: The 1964-1965 New York World&apos;s
                  Fair
                </em>
              </strong>{" "}
              page 90
            </p>
          </div>

          <p className={styles.sectionTitle}>
            <span className={styles.drop}>T</span>O{" "}
            <span className={styles.drop}>P</span>URCHASE{" "}
            <span className={styles.drop}>Y</span>OUR{" "}
            <span className={styles.drop}>C</span>OPY
          </p>

          <div className={styles.purchaseRow}>
            <div className={styles.purchaseCopy}>
              <p>
                <strong>
                  <em>
                    Images of Modern America: The 1964-1965 New York World&apos;s
                    Fair
                  </em>
                </strong>{" "}
                is available for purchase at <BrandMark /> through{" "}
                <strong>amazon.com</strong>.
              </p>
              <p>
                To purchase a copy, simply click on the book image to the right
                for convenient ordering through <em>amazon.com</em>. I hope
                you&apos;ll enjoy the book!
              </p>
            </div>
            <Link
              href={AMAZON_MODERN}
              className={styles.coverLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/books02/book-modern-america.jpg"
                alt="Images of Modern America: The 1964-1965 New York World's Fair"
                width={1045}
                height={1506}
                className={styles.cover}
                unoptimized
              />
            </Link>
          </div>

          <p className={styles.sectionTitle}>
            <span className={styles.drop}>A</span>LSO{" "}
            <span className={styles.drop}>A</span>VAILABLE:
          </p>

          <div className={styles.purchaseRow}>
            <div className={styles.purchaseCopy}>
              <p>
                <strong>
                  <em>
                    Images of America: The 1964-1965 New York World&apos;s Fair
                  </em>
                </strong>{" "}
                the <em>FIRST </em>book of our World&apos;s Fair trilogy, is
                available for purchase at <BrandMark /> through{" "}
                <strong>amazon.com</strong>.
              </p>
              <p>
                To purchase a copy, simply click on the book image to the right
                for convenient ordering through <em>amazon.com</em>. Thank you
                for your purchases!
              </p>
            </div>
            <Link
              href={AMAZON_IOA}
              className={styles.coverLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/books02/book-images-of-america.jpg"
                alt="Images of America: The 1964-1965 New York World's Fair"
                width={1044}
                height={1507}
                className={styles.cover}
                unoptimized
              />
            </Link>
          </div>

          <div className={styles.purchaseRow}>
            <div className={styles.purchaseCopy}>
              <p>
                <strong>
                  <em>
                    Images of America: The 1964-1965 New York World&apos;s Fair -
                    Creation And Legacy
                  </em>
                </strong>{" "}
                book <em>TWO</em> of our World&apos;s Fair trilogy, is available
                for purchase at <BrandMark /> through{" "}
                <strong>amazon.com</strong>.
              </p>
              <p>
                To purchase a copy, simply click on the book image to the right
                for convenient ordering through <em>amazon.com</em>. Thank you
                for your purchases!
              </p>
            </div>
            <Link
              href={AMAZON_LEGACY}
              className={styles.coverLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/books02/book-creation-legacy.jpg"
                alt="Images of America: The 1964-1965 New York World's Fair - Creation And Legacy"
                width={1051}
                height={1496}
                className={styles.cover}
                unoptimized
              />
            </Link>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/books01"
        explicitPrevious
        overviewHref="/booksoverview"
        nextHref="/booksoverview"
      />
    </>
  );
}
