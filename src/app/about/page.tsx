import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "@/components/Star";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About nywf64.com — 1964/65 New York World’s Fair",
  description:
    "Meet George Jetson — Bill Young’s welcome to nywf64.com and the Space Age on display at the 1964/1965 New York World’s Fair.",
};

function BrandName() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNavy}>nywf</span>
      <span className={styles.brandBurgundy}>64</span>
      <span className={styles.brandNavy}>.com</span>
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <article className={styles.article} aria-labelledby="about-title">
        <header className={styles.intro}>
          <p className={styles.kicker}>About this Website</p>
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.rule} />
            <Star color="#26346e" size={13} />
            <span className={styles.rule} />
          </div>
          <h1 id="about-title" className={styles.title}>
            Meet George Jetson
          </h1>
        </header>

        <div className={styles.body}>
          <figure className={styles.heroArt}>
            <Image
              src="/images/about/jetsons-title.gif"
              alt="The Jetsons — © Hanna-Barbera Cartoons"
              width={275}
              height={189}
              className={styles.heroImg}
              priority
              unoptimized
            />
          </figure>

          <p>
            Remember <em>The Jetsons</em>? If you grew up in the sixties, how
            could you forget them? The Hanna-Barbera cartoon premiered on
            prime-time television in September 1962 and brought the fantasies of
            the Space Age into our living rooms. Flying cars, computers, robot
            maids, pills for lunch and office buildings on poles were the stuff
            the Jetsons’ world was made of.
          </p>

          <p>
            Did you think that was just a cartoon? Well it wasn’t! There once
            existed a real-life <em>Orbit City</em> in our midst. It was the
            Space Age extravaganza called the 1964/1965 New York World’s Fair.
            There has never been and never will be a more{" "}
            <em>Jetson-esque</em> world on display as what could be found on the
            646 acres of Flushing Meadows Park in the Borough of Queens, New
            York City in 1964 and 1965.
          </p>

          <figure className={styles.compare}>
            <div className={styles.comparePair}>
              <Image
                src="/images/about/orbit-city.jpg"
                alt="The Jetsons’ Orbit City"
                width={275}
                height={220}
                className={styles.compareImg}
                unoptimized
              />
              <Image
                src="/images/about/worlds-fair.jpg"
                alt="The New York World’s Fair"
                width={275}
                height={220}
                className={styles.compareImg}
                unoptimized
              />
            </div>
            <figcaption className={styles.compareCaption}>
              left: The Jetsons’ Orbit City &nbsp;&nbsp; right: The New York
              World’s Fair
            </figcaption>
          </figure>

          <p>
            We called those years “The Space Age.” It was a time when we were in
            the middle of a space race with the Russians to see who could put
            the first man on the moon and we were fighting a cold war with the
            evils of communism. While technological advances were exploding all
            around us our world was turning topsy-turvy with an increasingly
            unpopular war in Southeast Asia, political assassinations and civil
            unrest at home. Over it all hung the threat that we’d be blown to
            smithereens in a nuclear holocaust if someone accidentally pushed
            the button and the <em>cold</em> war suddenly got very{" "}
            <em>hot</em>! Is it any wonder that we imagined a future of
            limitless promise?
          </p>

          <p>
            And what promise it promised to be! How about a vacation in an
            underwater hotel? How about a rocket pack that lets you fly above
            the traffic? How about a machine that makes disposable dishes
            on-the-spot so that you’d never have to wash one again? How about
            abundant nuclear fuel? How about a monorail to whisk you from place
            to place? All of these marvels and so much more were on display at
            the Fair. General Motors’ <em>Futurama</em> told us that they were
            “beyond the promise and well on their way to tomorrow’s world.” Our
            future was going to be terrific.
          </p>

          <p>
            Well, if you blinked you missed it. It all ended in 1965.{" "}
            <em>Orbit City</em> was demolished and turned into a park. The
            fantastic promises of The Space Age faded into amusing anecdotes as
            our society became more aware of the dark side of technology.
            Worries about nuclear accidents made abundant nuclear fuel a
            fearsome thing. Monorails never overcame the popularity of the
            automobile. Rocket packs were too heavy, too noisy and gas guzzlers
            to boot! We worried about filling up our landfill with disposable
            diapers – where would we landfill all of those dirty disposable
            dishes? Underwater hotels? … Well they were too expensive to build,
            too elitist to occupy and too damp to enjoy.
          </p>

          <p>
            <BrandName /> is my chance to share with you a look back at The
            Space Age on display at the Fair where we could escape the troubles
            of “today” and explore the wonders of the “near tomorrow.” If you’re
            visiting for the first time, welcome! If you’re a repeat visitor,
            welcome back! As <BrandName /> celebrates over twenty-five years
            on-line, I’d like to take this opportunity to thank the many people
            who have contributed materials to this World’s Fair tribute over the
            years. You have made the glance backwards more enjoyable by sharing
            your collectibles and stories with all who come here.
          </p>

          <div className={styles.jetsonBlock}>
            <figure className={styles.jetson}>
              <Image
                src="/images/about/george-jetson.png"
                alt="George Jetson — © Hanna-Barbera Cartoons"
                width={292}
                height={560}
                className={styles.jetsonImg}
                unoptimized
              />
            </figure>
            <p>
              <strong className={styles.emphasis}>YOU</strong> really have
              become George Jetson you know. Think about that! Maybe you’re not
              living in an apartment on a pole like his Space Age family did and
              you don’t have Rosie the Robot to help the kids with their
              homework, but your world is filled with Space Age marvels like
              computers and microwaves and webcams, all things displayed and
              predicted in one way or another by the 1964-1965 New York World’s
              Fair.
            </p>
          </div>

          <p>
            Critics to this day say that the fanciful predictions of the Fair
            made it somehow less worthy than other Fairs that were less
            commercial and had loftier goals. Fair President Robert Moses used
            to call such nay-sayers “grumblers, antiseptics and jaundiced-eyed
            grouches!” The Fair entertained. It educated. It offered the world
            hope for a brighter tomorrow during some very dark and scary times
            in history. Here’s to the Fair! We still have a future of limitless
            promise.
          </p>

          <p className={styles.closing}>
            Welcome to The Space Age, George Jetson!
          </p>
        </div>

        <footer className={styles.signoff}>
          <p className={styles.signature}>Bill Young</p>
          <p className={styles.milestone}>
            April 22, 2026 - <strong>Our 25th year online!</strong>
          </p>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com — New York World’s Fair 1964/1965"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>

          <p className={styles.disclaimer}>
            All <em>The Jetsons</em> illustrations are © Copyright Hanna-Barbera
            Cartoons and presented here strictly for illustrative purposes.
          </p>
        </footer>
      </article>
    </main>
  );
}
