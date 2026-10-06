import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Script: The Searching Eye — Eastman Kodak — nywf64.com",
  description:
    "Script of The Searching Eye, shown at the Eastman Kodak Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak Searching Eye script page.
 * Body from legacy easkod16.html.
 */
export default function Easkod16Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod16-title">
        <header className={styles.titleBar}>
          <h1 id="easkod16-title" className={styles.titleBarMain}>
            Script: <em>The Searching Eye</em>
          </h1>
        </header>
        <div className={styles.articleInner}>
          <p className={styles.scriptIntro}>
            In the Tower Theatre, see{" "}
            <span className={styles.scriptDots}>. . .</span>
          </p>
          <div className={styles.logoPair}>
            <Image
              src="/images/easkod16/kod04.jpg"
              alt="The Searching Eye film logo"
              width={79}
              height={59}
              unoptimized
            />
            <p className={styles.scriptTitle}>The Searching Eye</p>
          </div>
          <div className={styles.row}>
            <div className={styles.scriptFilm}>
              <Image
                src="/images/easkod16/kod15.jpg"
                alt="The Searching Eye stills"
                width={120}
                height={450}
                unoptimized
              />
            </div>
            <div className={styles.rowCopy}>
              <p className={styles.body}>
                A move like no movie you&apos;ve ever seen.
              </p>
              <p className={styles.body}>
                Designed and produced by Hollywood&apos;s famed Saul Bass,
                &quot;The Searching Eye&quot; is more than a new kind of movie.
                It is an entirely new visual experience.
              </p>
              <p className={styles.body}>
                You will explore the complete range of visual sensation as you
                share a boy&apos;s reactions to the wonders of the world around
                him. And you&apos;ll see other wonders that only special
                cameras, a brilliant director and new multi-image, 70mm
                projection techniques can reveal.
              </p>
              <p className={styles.body}>
                You&apos;ll see as many as six frames of motion on a screen at
                one time ... ultra-high-speed photography (up to 2,500 frames
                per minute) ... a stop-action sequence that took months and
                thousands of individually photographed frames to record.
              </p>
              <p className={styles.body}>
                You&apos;ll see, in short, an unusually imaginative motion
                picture that will be one of the highlights of your visit to the
                Fair.
              </p>
              <p className={styles.body}>And now...</p>
            </div>
          </div>
          <div className={styles.logoPair}>
            <p className={styles.scriptTitle}>The Searching Eye</p>
            <Image
              src="/images/easkod16/kod04.jpg"
              alt="The Searching Eye film logo"
              width={79}
              height={59}
              unoptimized
            />
          </div>
          <p className={styles.source}>
            Source (Introduction): Kodak Advertisement, The New York Times,
            April 26, 1964, Section 11
          </p>
          <div className={styles.scriptBox}>
            <p>This is darkness. Darkness has no dimension.</p>
            <p>
              There are simple creatures who live in the eternal darkness of
              their own bodies. There are others for whom nature has devised a
              window to the mind. Complex. Sensitive. Efficient. But used only
              to observe what is present; unconcerned with the past, unmindful
              of the future.
            </p>
            <p>
              Of all the creatures there is one whose vision embraces more than
              that -- much more than that.
            </p>
            <p>
              The eye. A simple tool for measuring; the use of which some are
              skilled and some are not. The eye. A complex instrument for the
              contemplation of the unknown. The mysterious. The beautiful.
            </p>
            <p>
              Long gone from his ancestral home, man can no longer easily
              penetrate its dark shadowed corner. Those who live in its
              limitless chambers can but in them there is no wonder. The thirst
              to know is man&apos;s alone.
            </p>
            <p>
              That has led him to devise the means to enlarge his vision. To
              reveal what he cannot see with the unaided eye so that he might
              know and understand.
            </p>
            <p>
              Generations of learning, yet we are born without knowledge. All we
              know we acquire. Observing. Exploring. Experiencing.
            </p>
            <p>
              There are objects which suggest imitation and imitation is the
              beginning of leaning. There are objects which exist to be chased
              and sometimes to be watched with wonder and envy and speculation.
            </p>
            <p>
              Only man can envision the future. Where once there was nothing he
              builds and gives reality to his vision.
            </p>
            <p>
              There are natural objects in which the knowing eye reads the
              distant past. The forces once greater than the comprehension of
              man. Of events unseen by any living man. Constructive, violent,
              destructive beauty. Molding. Altering. Shaping the face of the
              earth.
            </p>
            <p>
              There are man-made objects whose complex and delicate symbols, to
              the unknowing eye, mean nothing.
            </p>
            <p>
              But all men are gifted to the alchemy of sight; the power of
              seeing one form in the shape of another. Of bringing an object to
              life in the eye of the imagination.
            </p>
            <p>
              But reality inevitably returns. Man struggles to preserve his
              visions and his dreams. Man recognizes the strength of reality. He
              accepts it and becomes part of it. Seeking always for a more
              perfect perception of reality we grow impatient with our physical
              limits.
            </p>
            <p>
              Some events occur too quickly for our comprehension. The camera
              slows down the truth so we can see.
            </p>
            <p>
              Of all the images which flow by in endless procession there are
              some we wish to keep, a particular moment. So we preserve the
              image as a tangible memory.
            </p>
            <p>
              In all living things there is hidden promise of growth. A growth
              too slow for the eye, almost invisible. The camera speeds up the
              truth. Our vision is enriched so we can see and understand.
            </p>
            <p>
              Knowledge has no boundaries. The horizons are forever receding.
              The more we are able to see, the more we look for. The more we
              question, the more there is to question. The more we contemplate,
              the greater is our need for contemplation.
            </p>
            <p>
              Once firmly believing that he stood at the center of the universe
              man has learned how small is his place in the totality of all
              there is.
            </p>
            <p>
              But man&apos;s spirit knows no boundaries and his vision, aided by
              the searching eye of the camera, penetrates ever further into the
              reaches of the universe.
            </p>
            <p>
              For there is so much to see. So much to learn. So much to know.
              And the promise of knowledge and beauty is the reward of the
              searching eye.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod15"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod17"
      />
    </>
  );
}
