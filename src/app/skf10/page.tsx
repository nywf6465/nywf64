import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/skfEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Old Abe's Encounter with Motion Engineering — SKF — nywf64.com",
  description:
    "Old Abe's encounter with Motion Engineering at SKF — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF — Old Abe's Encounter with Motion Engineering.
 * Body from legacy skf10.html.
 */
export default function Skf10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="SKF">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/skfoverview/hero-banner.jpg"
            alt="SKF pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SkfNavChrome />

      <article className={styles.article} aria-labelledby="skf10-title">
        <header className={styles.titleBar}>
          <h1 id="skf10-title" className={styles.titleBarMain}>
            Old Abe&apos;s Encounter with <em>Motion Engineering</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 330 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf10/skf27.jpg"
                alt="Old Abe's Encounter with Motion Engineering"
                width={330}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The attraction at the Illinois Pavilion was really quite spectacular. Walt Disney presents "Great Moments with Mr. Lincoln" in which a life-like audio-animatronic figure of Abraham Lincoln talks, rises from his chair, walks and gestures through several minutes of Lincoln's speeches.</p>
            <p>The 1964/1965 New York World's Fair becomes the proving grounds for Disney's then new audio-animatronic technology. "Great Moments with Mr. Lincoln" is one of the hits of the Fair and audiences can hardly believe that this sophisticated talking machine is not an actor playing the role of Lincoln!</p>
            <p>Paul Anderson, in his excellent <em>Persistence of Vision </em>issue dedicated to Disney and the 1964 New York World's Fair, brought to light an interesting story of Abe's run-in with the world of <em>motion engineering...</em></p>
            <p>So many people believed that Lincoln was real, that it resulted in an unusual incident. The technicians kept finding little holes in Lincoln's skin and clothes. Finally, when an eye and the teeth became chipped, they figured it out. "One of the international pavilions had this big machine that was punching out ball bearings," explained Jack Ferges. "They had a big trough full of them, and you could reach in and grab a handful. The New York kids were using sling shots and shooting Lincoln with these ball bearings, trying to get him to flinch. We were having a hell of a time; finally we got the pavilion to agree to give the kids just one ball bearing each."</p>
            <p className={styles.source}>SOURCE: "Disney and the 1964 New York World's Fair," <em>Persistence of Vision</em> Issue #6/#7, Paul F. Anderson, Author and Publisher. © Copyright 2001, Paul F. Anderson. All rights reserved. Reprinted here with permission.</p>
            <p>PHOTO SOURCE: Souvenir Record Jacket, Buena Vista Records</p>
            <p>Webmaster's note... Many thanks to Paul Anderson for allowing the reprint from his excellent <em>Persistence of Vision</em> issue on Disney and the Fair. <em>Persistence of Vision</em> is the finest, most comprehensive source for historical information on Walt Disney and his creative legacy. The Fair issue is THE most thoroughly researched presentation on Disney's involvement with the Fair ever written. In fact, at 144 pages, it is truly a book!</p>
            <p>Bill Young July, 2001</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/skf09"
        explicitPrevious
        overviewHref="/skfoverview"
        nextHref="/skfoverview"
      />
    </>
  );
}
