import type { Metadata } from "next";
import Image from "next/image";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./spacpark11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Project Mercury — Space Park — nywf64.com",
  description:
    "Project Mercury and Dedication Remarks by James E. Webb — Space Park at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const DEDICATION_PARAGRAPHS = [
  "The Hall of Science will serve as a legacy of this great fair. It will be the cornerstone of this city's science center. It will be a meaningful symbol of the impact of science on our lives. But most significantly it will contribute to the understanding of those many disciplines which comprise modern scientific undertakings.",
  "Most of us are aware of the changes that are being made in our personal lives by the increase in technical development. Applications of science's discoveries surround us. But those of us whose work brings us into touch with this outpouring of challenge and response are not mindful enough, I think, of our obligation to encourage a constant understanding of what we are about.",
  "There is a tendency, even perhaps an effort by some, to set up the scientific community in a special category of its own, separated by some mystique from our humanitarian traditions. This Hall of Science means that New Yorkers will not be guilty of that misconception. It will help them understand that the world of science is a world of accumulated knowledge, not a world of magic or mystery. They will see how slowly, painstakingly the scientists unveil knowledge that has not been disclosed by the inquiries of the past; that science is a search for truth, and that so are philosophy and history and poetry.",
  "As we move more deeply into the age of applied science, public understanding is supremely important. For science is an integral part of the concepts and hard work that sustain this nation. In your New York universities, in your schools and in this building the disciplines of science work with all others in the American conviction that public knowledge is public strength. It is essential, in support of this belief, that the public realize science's problems, become familiar with its tools, appreciate its progress, recognize its relevance to modern living, and share in its aspirations.",
  "So this building has significance beyond its magnificent structure. It is a means of helping the thousands who will visit here to understand a field of human endeavor which has assumed new dimension and new importance in our day.",
  "This building, and others of similar purpose, stand at the critical points between scientific advancement and public understanding. The function of this Hall and its sister institutions are as important to scientific progress as the most advanced laboratory where research is reaching the very edges of our knowledge.",
  "I feel a personal relationship to this dedication. Last year Paul Screvane and Guy Tozzoli and others came to my office with the building's sketches. Their enthusiasm was irresistible for me as it was for many of you who have answered their plea for funds.",
  "It is no accident that the U.S. Space Park is located adjacent to the Hall of Science. It is a great credit to the wisdom of Robert Moses and his associates that the permanent structure designed for retention after the Fair is the building we are here to dedicate.",
  "New York City and New Yorkers are to be commended for the enterprise and the imagination that makes this building available to the city and its visitors. I wish for it every possible success.",
];

export default function Spacpark11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Space Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/spacparkoverview/hero-banner.jpg"
            alt="Space Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpacparkNavChrome />

      <article className={styles.article} aria-labelledby="spacpark11-title">
        <header className={styles.titleBar}>
          <h1 id="spacpark11-title" className={styles.titleBarMain}>
            Project Mercury
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              By the time the Fair opened, Project Mercury was a thing of the
              past. There had been no U.S. manned space flights since Gordon
              Cooper&apos;s 22 orbits in 1963, and there would not be another
              U.S. astronaut in space until the first Gemini flight in 1965. All
              eyes were now on the Moon. Little wonder, then, that so much
              hardware from the Mercury program found its way into Space Park.
              Included for the 1965 season were what must have been two of the
              simulators that the Mercury astronauts actually trained on,
              repackaged for the Fair as the &quot;Mercury Space Ride&quot;.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/spacpark11/ussppk14.jpg"
              alt="Rocket collection"
              width={273}
              height={400}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Atlas-Mercury left, Agena center, Titan-Gemini right, on a summer
            morning in 1964.
          </p>
          <p className={styles.source}>
            Source:{" "}
            <em>
              (above/below) Private Collection of Bradd Schiffman © Copyright
              2002, Bradd Schiffman
            </em>
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/spacpark11/ussppk13.jpg"
              alt="Bradd as a Mercury Astronaut!"
              width={300}
              height={203}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            This is a far as I would ever get towards my goal of becoming a
            Mercury astronaut. My brother&apos;s sneakers and my sister&apos;s
            flip-flops can be seen just below the capsule to the left.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/spacpark11/ussppk12.jpg"
              alt="Aurora 7 on display"
              width={300}
              height={198}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            This is probably Scott Carpenter&apos;s Aurora 7, dating this photo
            to 1965.
          </p>
          <p className={styles.source}>
            Source: <em>© Copyright Wolfe Worldwide Films</em>
          </p>

          <div className={styles.body}>
            <p>
              For an excellent story about the origins, personalities, problems
              and successes of Project Mercury, see &quot;The Right Stuff&quot; by
              Tom Wolfe. Also &quot;This New Ocean: A History of Project
              Mercury&quot; by Loyd S. Swenson Jr., James M. Grimwood, and
              Charles C. Alexander, is available online at:{" "}
              <a
                href="http://www.hq.nasa.gov/office/pao/History/SP-4201/toc.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.hq.nasa.gov/office/pao/History/SP-4201/toc.htm
              </a>
            </p>
          </div>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Dedication Remarks</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.dedicationHead}>
            <h2 className={styles.sectionHeading}>Remarks</h2>
            <p className={styles.sectionSub}>by NASA Administrator</p>
            <p className={styles.sectionSub}>James E. Webb</p>
            <p className={styles.sectionSub}>
              on the Dedication of the Hall of Science, September 9, 1964
            </p>
          </div>
          <div className={styles.body}>
            {DEDICATION_PARAGRAPHS.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/spacpark10"
        explicitPrevious
        overviewHref="/spacparkoverview"
        nextHref="/spacpark12"
      />
    </>
  );
}
