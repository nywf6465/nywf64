import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genele12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "There's a Great Big Beautiful Tomorrow \u2014 General Electric \u2014 nywf64.com",
  description:
    "There's a Great Big Beautiful Tomorrow \u2014 General Electric Progressland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Electric — There's a Great Big Beautiful Tomorrow.
 * Body from legacy genele12.html (custom topic page).
 * Stack: hero → GeneleNavChrome → navy title → article → Nav2Bar.
 */
export default function Genele12Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <article className={styles.article} aria-labelledby="genele12-title">
        <header className={styles.titleBar}>
          <h1 id="genele12-title" className={styles.titleBarMain}>
            There&apos;s a Great Big Beautiful Tomorrow
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.banner}>the song</div>
          <p className={styles.heading}>
            THERE&apos;S A GREAT BIG BEAUTIFUL TOMORROW
          </p>
          <p className={styles.source}>
            Theme of GENERAL ELECTRIC&apos;S CAROUSEL OF PROGRESS
            <br />
            Lyrics and music by Richard M. Sherman and Robert B. Sherman
          </p>
          <div className={styles.lyrics}>
            <p>There&apos;s a great big beautiful tomorrow</p>
            <p>shining at the end of every day.</p>
            <p>There&apos;s a great big beautiful tomorrow,</p>
            <p>and tomorrow&apos;s just a dream away.</p>
            <p>Man has a dream</p>
            <p>and that&apos;s the start.</p>
            <p>He follows his dream</p>
            <p>with mind and heart.</p>
            <p>And when it becomes a reality,</p>
            <p>it&apos;s a dream come true for you and me.</p>
            <p>So, there&apos;s a great big beautiful tomorrow</p>
            <p>shining at the end of every day.</p>
            <p>There&apos;s a great big beautiful tomorrow,</p>
            <p>just a dream away!</p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/genele12/ge160.jpg"
              alt="The Sherman Brothers and Walt Disney"
              width={400}
              height={225}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Sherman Brothers and Walt Disney</figcaption>
            <p className={styles.source}>Source: Screen Shot - Film: Disney Goes to the World&apos;s Fair</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele12/ge20.jpg"
              alt="Record"
              width={240}
              height={241}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele12/ge21.jpg"
              alt="Sherman Brothers and Walt Disney"
              width={481}
              height={376}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Sherman Brothers and Walt Disney in a G.E. &quot;Update&quot; film.</figcaption>
            <p className={styles.source}>Source: © The Walt Disney Company, presented courtesy of Paul F. Anderson</p>
          </figure>
          <div className={styles.body}>
            <p>&quot;Walt called us over to a meeting at WED,&quot; remembered Richard Sherman, half of the song-writing tandem known as the Sherman Brothers (then staff writers for Disney). &quot;He wanted us to come over and look at a mock-up of the Carousel of Progress.&quot; Robert Sherman illuminates, &quot;He wanted a song, something that was a certain amount of seconds, so when they moved the audience to a different stage it would coincide with the time in between the move -- it was a technical job.&quot;</p>
            <p>Walt had a great deal of confidence in his two song writers. He knew that they could create the kind of song he wanted. Richard discusses Walt&apos;s request, &quot;He wanted a song that would fit in each style of the show -- a ragtime for the 1920s, swing for the 1940s, and a sweet Mantovani sound for the 1960s. Another challenge was that he wanted it to talk about progress. You know, G.E. is always looking for new ways to make life better -- but a soft sell. A singing commercial without mentioning the product. We kind of understood what he wanted, because we felt the same way about things. We always believed in what we were doing.&quot;</p>
            <p>The Sherman brothers set out to accomplish Walt&apos;s assignment. &quot;First, we worked back and forth with the writers of the script -- there was a lot of give and take -- but our job was to give Walt this theme song,&quot; recalled Richard. &quot;Then we went away for a couple of weeks, and we thought, and we played, and we finally got something that we really liked -- the title. And then we wrote the song. We devised a way of talking about the idea of man looking for new and better ways to live, and it was just a dream away -- you know the idea of dreamers being the ones that dream up these things.&quot;</p>
            <p>The now famous &quot;There&apos;s a Great Big Beautiful Tomorrow,&quot; was the result of this creative collaboration. &quot;We finished it, but we would play it for Walt first,&quot; remembered Robert. Richard continued, &quot; He came down to our office on the third floor of the animation building, and said &apos;What do you got?&apos; We played it for him and he said &apos;That will work fine. Can you play it like ragtime?&apos; So I played it like ragtime, and then I played it like a swing, and he said &apos;Okay, we&apos;ll get the orchestraters in and that will be fine.&apos; That was his reaction.&quot; What may appear as a vague response on Walt&apos;s part, was anything but. Robert explains, &quot;He was not one with superlatives. Once he said, &apos;That will work,&apos; that was a big compliment coming from Walt Disney.</p>
            <p>-- Just a Dream Away --</p>
            <p>Walt assigned Disney staff writers Richard M. and Robert B. Sherman to write a tune that told the story of the Carousel without giving away what was to happen. The first music to be completed for G.E.&apos;s Carousel was a song entitled &quot;There&apos;s a Great Big Beautiful Tomorrow.&quot; Written in late February, 1963, this jaunty tune was quickly arranged by staff composer Buddy Baker into the variety of styles called for by the Carousel of Progress script. Though it seemed impossible to isolate audio within each of the six sections, or theaters, of the carousel as it rotated, Buddy Baker turned this hurdle into an advantage. Working with the Sherman Brothers, he planned the five musical transitions required to cover each rotation of the carousel to start simultaneously, play in the same key, and be exactly the same length. They were based on &quot;There&apos;s a Great Big Beautiful Tomorrow,&quot; and each variation reflected the time period, or purpose, to which the carousel was turning, i.e.: 1890s, 1920s, 1940s, 1960s, and Finale. On March 6, 1963, several of these were recorded using eleven musicians. The Overture interpolating &quot;There&apos;s a Great Big Beautiful Tomorrow,&quot; was followed by arrangements in musical styles of the 1890s, 1920s, 1940s, and 1960s, as well as in Waltz, Marching Band, Swing, Future and Dixieland versions. Rex Allen recorded the vocal for &quot;There&apos;s a Great Big Beautiful Tomorrow,&quot; and the patter for the carousel show. With music and dialog edited together into a rough cut, this early version of the Carousel of Progress provided the Disney creative team with the basic idea of the show&apos;s timing and sound, and gave Walt a &quot;dog and pony show&quot; to pitch to G.E. The show continued to evolve with Walt and his Imagineers focused on the script and technology of the carousel, leaving any required musical changes until the show was closer to being locked. Although music budgeting continued non-stop as changes were made to the G.E. Pavilion, no further music was recorded until November 11, 1963.</p>
            <p>-Alexander Rannie, Author</p>
          </div>
          <p className={styles.source}>
            SOURCE: &quot;Disney and the 1964 New York World&apos;s Fair,&quot; Persistence of Vision Issue #6/#7, Paul F. Anderson, Author and Publisher. © Copyright 2001, Paul F. Anderson. All rights reserved. Reprinted here with permission.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genele11"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/genele13"
      />
    </>
  );
}
