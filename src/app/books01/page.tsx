import type { Metadata } from "next";
import Image from "next/image";
import { BooksNavChrome } from "@/components/BooksNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./books01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Essay: Author! Author! — Our Books on the Fair — nywf64.com",
  description:
    "Essay: Author! Author! — Bill Young on co-authoring the Images of America books about the 1964/1965 New York World’s Fair on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * Our Books on the Fair — Author! Author!
 * Body from legacy book02.html (Page 1 after overview).
 *
 * Stack: bookshero → BooksNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Books01Page() {
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

      <article className={styles.article} aria-labelledby="books01-title">
        <header className={styles.titleBar}>
          <h1 id="books01-title" className={styles.titleBarMain}>
            Essay: <em>Author! Author!</em>
          </h1>
          <p className={styles.titleBarByline}>... by Bill Young</p>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.body}>
            I&apos;ve been called a lot of things in my life, but I never figured
            &quot;author&quot; would be one of them. In fact, I hated English
            classes so how could I wind up co-authoring a series of books?
          </p>

          <p className={styles.body}>
            Late in the fall of 2003 I was contacted by an editor from Arcadia
            Publishing. Arcadia is an east coast subsidiary of the British
            publisher, Tempus. They develop pictorial books on regional and
            special interest topics. Arcadia had recently published a book
            featuring the post cards from the 1933-1934 Century of Progress
            Exposition (Chicago) and the book had sold well for them. They were
            now interested in publishing other books on World&apos;s Fairs of
            the past and they were looking for someone with some knowledge of
            the 1964/1965 New York World&apos;s Fair to author a book for them.
            The Arcadia editor had come across <BrandMark /> in her author search
            and now I was being asked if I&apos;d like to do a book on the Fair.
          </p>

          <p className={styles.body}>
            After getting some promotional material from Arcadia I realized,
            with relief, that I didn&apos;t need to be John Steinbeck.
            Arcadia&apos;s books run about 130 pages and are primarily
            photographic in nature. Chapters have written introductions but the
            pictures tell the real story.
          </p>

          <p className={styles.body}>
            Unfortunately for me, copyrights of pictures and material from the
            Fair fall into a kind of gray area -- they&apos;re not necessarily
            in the public domain yet and free for anyone to use, despite the
            fact that the Fair has been over for fifty years. Use of materials
            for a commercial project like a book would be subject to some pretty
            thorough copyright search and clearance. Arcadia told me that
            I&apos;d be the one doing the copyright clearance and{" "}
            <em>that</em> was a project I didn&apos;t want to touch with a
            ten-foot pole!
          </p>

          <p className={styles.body}>
            Fortunately for me, I&apos;d made the acquaintance of a wonderful
            fellow through <BrandMark /> that I thought might have a solution to
            the copyright problem. He is Bill Cotter, a World&apos;s Fair
            enthusiast from the Los Angeles area. Bill has been collecting
            amateur photographs from the Fair for many years. I contacted him
            and asked if he would be interested in co-authoring the book with me
            and if he would allow use of some of his photographs as the basis
            for the book. Much to my delight, he agreed!
          </p>

          <p className={styles.body}>
            Now here it is ... 2014 ... the fiftieth anniversary of the Fair.
            And here we are ... in 2014 ... the authors of <em>three</em> Arcadia
            books on the Fair. Our latest book, published January 27, 2014 is
            titled,{" "}
            <strong>
              <em>
                Images of Modern America: The 1964-1965 New York World&apos;s
                Fair
              </em>
            </strong>
            . We were chosen by Arcadia to be the first book in their new Modern
            American Images series and we were honored to be their{" "}
            <em>first book published in color</em>!
          </p>

          <p className={styles.body}>
            <strong>
              <em>
                Images of Modern America: The 1964-1965 New York World&apos;s
                Fair
              </em>
            </strong>{" "}
            is a soft-covered, 96 page book with seven chapters and an
            introduction. We have approximately 170 full color photographs of
            the Fair ranging in size from full-page views to two-per-page.
            Because the book is part of an Arcadia series, we had a very
            specific format that we had to follow. For example, all chapters had
            to start on odd-numbered pages. Chapter introductions could be no
            more than 400 words long. Captions must be between 70 and 100 words.
            I never thought writing a book would have so many rules!
          </p>

          <p className={styles.body}>
            <strong>
              <em>
                Images of Modern America: The 1964-1965 New York World&apos;s
                Fair
              </em>
            </strong>{" "}
            is the third book in our trilogy of the Fair. I think the books do a
            good job of documenting the Fair photographically and explaining its
            place in that era we call &quot;The Space Age.&quot; Our first book,
            published in 2004, is titled{" "}
            <strong>
              <em>
                Images of America: The 1964-1965 New York World&apos;s Fair
              </em>
            </strong>{" "}
            and features 128 pages with more than 200 photos in black and white
            from the Fair. Our second book, published in 2008 is titled{" "}
            <strong>
              <em>
                Images of America: The 1964-1965 New York World&apos;s Fair
                Creation and Legacy
              </em>
            </strong>{" "}
            is similar in the number of pages and photos and tells the story of
            how the Fair came to be and what became of the Fair after it closed.
            The nearly 600 photos in all three books are never-before-seen images
            from Bill Cotter&apos;s fabulous collection of 1964/1965 New York
            World&apos;s Fair photographs.
          </p>

          <p className={styles.body}>
            Can it actually be 10 years since we published our first book?
            It&apos;s very pleasing to us (and to Arcadia) that the popularity
            of the first two books have resulted in numerous reprints and they
            continue to sell well. It has been a fun learning experience for me
            and it was great fun working with Bill Cotter on these projects.
            I&apos;m actually very honored that there will be some sort of
            legacy of the Fair that will have my name on it. When I started
            collecting things from the Fair in Junior High School, I could never
            have imagined that it would lead to three published books. If you
            decide to add copies to your Fair Library, I would be most honored.
            Thank you!
          </p>

          <div className={styles.signature}>
            <p>Bill Young</p>
            <p>
              <BrandMark />
            </p>
            <p>February, 2014</p>
          </div>

          <p className={styles.excerptLead}>
            An excerpt from{" "}
            <em>
              Images of Modern America: The 1964-1965 New York World&apos;s Fair
            </em>{" "}
            follows...
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/booksoverview"
        explicitPrevious
        overviewHref="/booksoverview"
        nextHref="/books02"
      />
    </>
  );
}
