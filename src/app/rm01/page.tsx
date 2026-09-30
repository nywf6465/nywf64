import type { Metadata } from "next";
import Image from "next/image";
import { RmHero } from "@/components/RmHero";
import { RmNavChrome } from "@/components/RmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rm01.module.css";

export const metadata: Metadata = {
  title: "My Encounter with Robert Moses — nywf64.com",
  description:
    "Bill Young’s encounter with Robert Moses, president of the 1964/1965 New York World’s Fair Corporation — from nywf64.com.",
};

/**
 * Robert Moses page stack:
 * site header → hero banner → nav bar (RM menu) → legacy article body → nav2 → site footer
 *
 * Body imported from legacy rm02.html (“My Encounter with Robert Moses”).
 */
export default function Rm01Page() {
  return (
    <>
      <RmHero />

      <RmNavChrome />

      <article className={styles.article} aria-labelledby="rm01-title">
        <div className={styles.articleInner}>
          <header className={styles.titleBar}>
            <h1 id="rm01-title" className={styles.titleBarMain}>
              <em>My Encounter with Robert Moses</em> ...
            </h1>
            <p className={styles.titleBarByline}>by Bill Young</p>
          </header>

          <div className={styles.body}>
            <figure className={styles.figure}>
              <Image
                src="/images/rm01/rm3.jpg"
                alt="Adlai Stevenson, Robert Moses and Walt Disney at the Illinois Pavilion"
                width={296}
                height={193}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                (Left to right) Adlai Stevenson, Robert Moses and Walt Disney at
                the opening of Disney&apos;s &quot;Great Moments with Mr.
                Lincoln&quot; at the Illinois Pavilion, New York World&apos;s
                Fair, April, 1964.
              </figcaption>
            </figure>

            <p>
              Robert Moses was the head of the New York World&apos;s Fair. To
              describe him and all of his accomplishments in decades of public
              service would take a thousand page book. That has already been
              done thanks to Robert A. Caro&apos;s Pulitzer Prize winning
              biography of the man called the &quot;master builder&quot; of New
              York. It is well worth reading. The Fair is but one chapter in a
              book filled with the history of a man who helped to shape a great
              city. To present the New York World&apos;s Fair in any manner is
              impossible without including him.
            </p>

            <p>
              Mr. Moses died in 1981 at the age of 92. He was 70 years old when
              he assumed the Presidency of the 1964/1965 New York World&apos;s
              Fair Corporation in 1960. He ran it as he had many of his public
              works projects -- with a combination of limitless energy and
              genius and a good amount of bullying and antagonism. He was shrewd
              and he was ruthless. That his critics thought his ideas good or
              bad -- it didn&apos;t matter. He said &quot;Critics build
              nothing.&quot; He got things done. In this age when &quot;do
              nothing&quot; is the phrase most often uttered when speaking of
              our national and civic leaders, it&apos;s almost a novel idea,
              isn&apos;t it?
            </p>

            <p>
              The World&apos;s Fair was the last great work in a lifetime of
              great works and it left Robert Moses with the tarnished image of a
              greedy man who used the Fair to promote his own self interests --
              financial, and as a means to complete <em>his</em> Flushing Meadow
              Park rather than to educate, entertain and promote &quot;
              <em>Peace</em> through <em>Understanding</em>&quot; (two words
              that may not even have been in his vocabulary until the Fair).
              We&apos;ll leave this topic for the biographers as well.
            </p>

            <p>
              Back in 1971 I was in the 9th grade at West Junior High School in
              Wisconsin Rapids, Wisconsin enrolled in a second semester speech
              class. I decided that my final speech for the year would be on
              &quot;World&apos;s Fairs.&quot; Naturally, I wrote to the
              &quot;Chamber of Commerce&quot; of the City of New York for
              information on their World&apos;s Fair. Where else would a kid
              write to get information from a city?
            </p>

            <p>
              Miraculously, my letter was forwarded to the Triborough Bridge and
              Tunnel Authority and to the desk of Robert Moses himself. He sent
              back a wealth of information and when I pestered him for more, he
              sent back more -- even signed the letters himself.
            </p>

            <p>
              Imagine, Robert Moses, the man described as
              &quot;imperious,&quot; took the time to write to some kid out in
              the hinterlands of Wisconsin who was interested in the 1964
              World&apos;s Fair and helped him out with a Junior High School
              class project. That brief contact led to my never-ending interest
              in the Fair and culminates today with this web site where I share
              my hobby with the world! I guess one might say that I&apos;m
              somewhat biased in my opinion of the man.
            </p>

            <p>
              One would like to think Mr. Moses would be pleased to know that he
              made a lasting impression. I don&apos;t know what he&apos;d think
              about websites or the internet and the fact that one can now find
              a wealth of information there on the Fair and, indeed, on Robert
              Moses himself. I believe that he <em>would</em> be pleased that{" "}
              <em>his</em> Fair still fascinates and delights after more than
              half a century has passed. After all, he told the Gloomy Gusses,
              acid skeptics, grouches and jaundiced-eyed grumblers that it
              would!
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/rm01"
        nextHref="/rm02"
        hideOverview
      />
    </>
  );
}
