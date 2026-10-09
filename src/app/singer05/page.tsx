import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/singerEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Evolution of an Arena — Singer Bowl — nywf64.com",
  description:
    "How the Singer Bowl arena evolved in Fair planning — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl — Evolution of an Arena.
 * Body from legacy singer05.html.
 */
export default function Singer05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Singer Bowl">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/singeroverview/hero-banner.jpg"
            alt="Singer Bowl at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SingerNavChrome />

      <article className={styles.article} aria-labelledby="singer05-title">
        <header className={styles.titleBar}>
          <h1 id="singer05-title" className={styles.titleBarMain}>
            Evolution of an Arena
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 460 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer05/sinbow03.jpg"
                alt="Evolution of an Arena"
                width={460}
                height={214}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The need for a structure to hold large-scale gatherings was recognized early-on in planning for the Fair. By January, 1963, the New York World's Fair Corporation was considering the construction of a World's Fair Assembly Pavilion. Plans called for an open-sided structure to be located near the main entrance of the Fair that would accommodate up to 2,000 people. This building, designed by the architectural firm of Eggers &amp; Higgins, would be one of only a few actually constructed by the World's Fair Corporation.</p>
            <p>Plans are nearing completion for the World's Fair Assembly Pavilion, designed to remain as a permanent feature of Flushing Meadow Park after the end of the Fair. The 2,000-seat pavilion is an open-air structure, roofed to protect audiences from rain and sun; it will have complete stage facilities and, in addition to free entertainment, will be available to special convention groups and other large meetings.</p>
            <p>Contracts have been signed for weekly Nationality Day Folk Festivals to take place in this pavilion and for weekly exhibitions of square dancing representative of the best national dancers and callers. Other free events will include daily band concerts and various musical championships.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 460 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer05/sinbow04.jpg"
                alt="Singer Bowl"
                width={460}
                height={246}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>Source: NY World's Fair Corporation Progress Report #7, January 24, 1963</p>
            <p>In April, 1963, the Fair Corporation began advertising for a contract for the construction of a much larger, outdoor facility that could host athletic and other events too large for the Assembly Pavilion. This structure was known simply as "The Assembly Area." The stadium would occupy an area to the immediate west of the Fair's main entrance between the International and State/Federal Areas of the Fair. An artist's conception of the arena displays the name "ABC Bowl" on the exterior.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 275 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer05/sinbow05.jpg"
                alt="Singer Bowl"
                width={275}
                height={141}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The Assembly Area that would later become known as The Singer Bowl</p>
            <p className={styles.source}>Source: NY World's Fair Corporation Progress Report #8, April 22, 1963</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer05/sinbow06.jpg"
                alt="Singer Bowl"
                width={300}
                height={317}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>By Autumn of 1963, the plans for a permanent Assembly Pavilion to be built by the Parks Department were replaced by a new concept for an open-sided geodesic dome structure. Now called The World's Fair Pavilion, plans still called for this structure to seat 2,000 persons with dressing room facilities and lighting for television broadcasting. This pavilion, during the run of the Fair in 1964, hosted many of the Olympic Trials held at the Fair. In 1965, the pavilion's name was changed to The Churchill Center and hosted a major exhibition on memorabilia from the estate of the late Winston Churchill.</p>
            <p>ABOVE: Artist's rendering of The World's Fair Pavilion. The geodesic dome structure replaced the design for the Assembly Pavilion. BELOW: Aerial view of World's Fair site construction in Autumn, 1963, shows progress on The Arena (upper left corner of the photo).</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer05/unista-us18.jpg"
                alt="Singer Bowl"
                width={300}
                height={383}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p className={styles.source}>Source: (Both) NY World's Fair Corporation Progress Report #9, September 26, 1963</p>
            <p>Good progress had also been made toward the construction of The Arena, as The Assembly Area was now being called. Plans called for a concrete stadium with seating for 15,000 for athletic events and 3,000 additional seats for stage shows. The stage would move automatically from the side to the center of the stadium as needed. Lighting would be provided for evening as well as daylight events.</p>
            <p>As the Fair's opening neared, the Singer Sewing Company agreed to host the operation of the facility during the run of the Fair and sponsored a major corporate exhibit in the stadium's entrance hall. Appropriately, the stadium was renamed The Singer Bowl.</p>
            <p>BELOW: Aerial view of World's Fair site construction taken in Winter, 1964, shows progress on The Arena (large white expanse to the right of the box-like Federal Pavilion, near the center top of the photo).</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/singer04"
        explicitPrevious
        overviewHref="/singeroverview"
        nextHref="/singer06"
      />
    </>
  );
}
