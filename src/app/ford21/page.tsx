import type { Metadata } from "next";
import Image from "next/image";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ford21.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Remembering The Magic Skyway — Ford — nywf64.com",
  description:
    "Fairgoer reminiscences of Ford’s Magic Skyway — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Remembering The Magic Skyway.
 * Body from legacy ford21.html.
 * Preserve typo: hightlight.
 */
export default function Ford21Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Ford Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fordoverview/hero-banner.jpg"
            alt="Ford Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FordNavChrome />

      <article className={styles.article} aria-labelledby="ford21-title">
        <header className={styles.titleBar}>
          <h1 id="ford21-title" className={styles.titleBarMain}>
            Remembering The Magic Skyway
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.source}>
            Reminiscences from the Bulletin Board at{" "}
            <a
              href="http://www.worldsfaircommunity.org"
              target="_blank"
              rel="noreferrer"
            >
              <em>www.worldsfaircommunity.org</em>
            </a>
          </p>

          <div className={styles.lead}>
            <Image
              src="/images/ford21/ford37.jpg"
              alt="Magic Skyway reminiscence"
              width={327}
              height={200}
              className={styles.leadPhoto}
              unoptimized
            />
            <h2 className={styles.leadText}>
              Ford&apos;s <em>Magic Skyway</em> was among the most popular
              attractions at the Fair. Little wonder Fairgoers still remember it
              as a hightlight of their visit.
            </h2>
          </div>

          <p className={styles.speaker}>Frank Donnantuono:</p>
          <p className={styles.quote}>
            I was about 4 1/2 when my family went to the Fair, so I don&apos;t
            have a lot of clear memories, except for one encounter that has
            locked itself into my mind to this day. Even though I was so young I
            was a bona fide car nut and knew a lot about different makes and
            models. I couldn&apos;t wait to see the new Mustang at the Ford
            Pavilion.
          </p>
          <p className={styles.quote}>
            When we got on the Magic Skyway ride, my parents, grandparents,
            sister and I got into a dark blue &apos;64 Galaxie convertible with a
            white interior -- this I remember clearly. I begged to sit behind the
            wheel, and as soon as I got in, turned on the radio. Just as the ride
            started moving, I heard a voice on the radio intone, &quot;Hello,
            this is Henry Ford, and welcome to the Ford Magic Skyway.&quot; Well,
            even at my young age, I knew Henry Ford was dead! Totally spooked by
            this ghostly voice talking through the radio, and combined with the
            looming darkness of the tunnel, I screamed from one end of the ride
            to the other.
          </p>
          <p className={styles.quote}>
            I told this story to a co-worker once who [is] the same age as I am.
            He related a story about going to the Fair in &apos;65. He remembers
            that his family sat in a red &apos;65 Galaxie convertible and he
            begged for the driver&apos;s seat also. In his case, he started
            turning the steering wheel to pretend like he was driving.
            Unfortunately for him, many other Fairgoers must have done the same
            thing because he said that the wheel came off in his hands. Not
            wishing to anger his parents, he held the wheel against the steering
            column with all his might throughout the ride. When the time came for
            them to get out of the car, he wouldn&apos;t budge and when the
            operator asked him to get out, he started crying hysterically,
            figuring that he would be held responsible for breaking the car.
          </p>

          <p className={styles.speaker}>Rich Post:</p>
          <p className={styles.quote}>
            I drove my parents <strong>NUTS</strong> switching the language
            channels on the dashboard radio in front of me.
          </p>

          <p className={styles.speaker}>Peter Stathes:</p>
          <p className={styles.quote}>
            One of my memories of Ford and some others was sneaking in on the VIP
            line. Being only 12 in &apos;65 I would look for a young couple and
            we would walk up and stand next to them. It looked like we were one
            big family. Only once did we get caught. We tried this at many other
            VIP lines. Why wait?
          </p>

          <p className={styles.speaker}>Greg:</p>
          <p className={styles.quote}>
            I also had the daylights scared out of me at the Ford Magic Skyway. I
            was [6 1/2 years old] then ... but if you remember the blinding
            multi-colored lights as your car entered, that was enough to scare me
            to death. What can I tell you? Glad to see I was not the only one
            scared. After a few times being on it I grew up and enjoyed the
            dinosaurs.
          </p>

          <p className={styles.speaker}>markallenmaine:</p>
          <p className={styles.quote}>
            I do recall of the Ford pavilion, seeing new Mustang convertibles on
            the rotating displays, someone giving me a &quot;Maryland&quot;
            [souvenir pin] rather then &quot;New Hampshire,&quot; where I lived,
            and getting to sit in the driver&apos;s seat in a Galaxy 500 (I think
            it was white). I too was a real nut about driving, so I was really
            ticked when I discovered that the steering wheel was locked and
            didn&apos;t turn!
          </p>

          <p className={styles.speaker}>Hoodlock:</p>
          <p className={styles.quote}>
            While riding the Skyway my friend, Dale, reached out over the door of
            the car to grab part of the display. It must have been in the early
            days or most likely a slow day. I say this because Dale and me were
            the only ones in the car. Think about that, just two young teens left
            alone in a brand new car. Well anyway, as he reached over the door of
            the car his hand hit one of the wires that ran along the sides of the
            Skyway. No sooner did he touch it he gave out a yell, screaming about
            an electrical shock. He was convinced that this was designed to be a
            deterrent, intended to keep kids like him in their place. I believe
            it was only some static charge. But then again, it wasn&apos;t me who
            got zapped.
          </p>

          <p className={styles.speaker}>Bradd Schiffman:</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford21/ford55.jpg"
              alt="Bradd Schiffman on the Magic Skyway"
              width={300}
              height={201}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.quote}>
            A snapshot shows our family happily tooling along the Magic Skyway,
            my brother and I in the front seat of a new convertible, with my
            parents and sister apparently in the back. My sister&apos;s clawlike
            arm can be seen reaching over the front seatback in a foreshadowing
            of her future role as our family&apos;s self-appointed backseat
            commander. After navigating through our glass tunnel, giving us a
            great view of the Fairgrounds, the ride plunged into darkness, then
            opened into a room where a Tyrannosaurus was fighting a Stegosaurus
            on a rocky ledge, so that they looked like they would fall right into
            your car as you passed underneath. Just as we safely made it past
            them, the ride stopped. After waiting some time, and thinking to
            lighten the mood, I turned around and said, &quot;Gee, I hope my
            playing with the pedals didn&apos;t cause the ride to break.&quot; My
            mom exploded: &quot;Then keep your #@!&amp; foot OFF THE
            PEDALS!&quot; I quickly turned back around and began staring straight
            ahead. Mom was obviously having a bad day, and in all the excitement
            I hadn&apos;t noticed. The five of us spent the next 15 minutes in
            icy silence while a giant plastic Pterodactyl shrieked overhead as it
            circled endlessly on what I could now make out was a black wire
            suspended from a rotating black arm in the corner of a black ceiling.
            The radio kept repeating the same two sentences over and over. The
            illusion of being in a primeval jungle had pretty much vanished.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ford20"
        explicitPrevious
        overviewHref="/fordoverview"
        nextHref="/fordoverview"
      />
    </>
  );
}
