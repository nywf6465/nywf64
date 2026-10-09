import type { Metadata } from "next";
import Image from "next/image";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ford11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Magic Skyway - Transcript of the 1965 Show \u2014 Ford \u2014 nywf64.com",
  description:
    "The Magic Skyway - Transcript of the 1965 Show at the Ford Pavilion \u2014 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * Ford — The Magic Skyway - Transcript of the 1965 Show.
 * Body from legacy ford11.html (custom transcript page).
 */
export default function Ford11Page() {
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

      <article className={styles.article} aria-labelledby="ford11-title">
        <header className={styles.titleBar}>
          <h1 id="ford11-title" className={styles.titleBarMain}>
            The Magic Skyway - Transcript of the 1965 Show
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.line}>{"Ladies and Gentlemen. Please remain seated at all times. Keep your hands and arms inside the car. And no smoking please."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford42.jpg"
              alt="Boarding convertibles on the Magic Skyway ride"
              width={460}
              height={298}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 Wolfe Worldwide Films, Bradd Schiffman Collection"}</figcaption>
          </figure>
          <p className={styles.speaker}>Henry Ford II:</p>
          <p className={styles.line}>{"Ladies and Gentlemen. This is Henry Ford II. Welcome to Ford Motor Company's Magic Skyway. An adventure created by the incomparable Walt Disney. A voyage through time and space. From a dark and distant yesterday to a bright and promising tomorrow. May you all have an entertaining trip."}</p>
          <p className={styles.speaker}>Walt Disney:</p>
          <p className={styles.line}>{"Thank you Mr. Ford and hello friends. This is Walt Disney speaking. I'll be riding along to point out some of the things you're going to see from your front-row seat in Mr. Ford's automobiles."}</p>
          <p className={styles.line}>{"Thanks to some old-fashioned magic we call \"imagination,\" this Ford Motor Company car will be your time machine for your journey. Carrying you far back in time to the dawn of life on land and transporting you far out into the future."}</p>
          <p className={styles.line}>{"But that's getting far ahead of our story. Right now we're leaving the world of today behind. So if your imagination is ready, here we go."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford27.jpg"
              alt=""
              width={285}
              height={133}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"We're traveling backwards in time. Many millions of years in fact. Back to a day when giant creatures thundered over the land and soared like gliders across the sky. You're probably familiar with some of their names: Allosaurus. Edopasaurus. Pterodactyl. Not exactly the kind of pets you would keep around the house. In fact, most of them were kind of ... well, kind of ... \"supercalifragilisticexpialidotious\" and that's as big as they come!"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford48.jpg"
              alt="Primeval Scene on the Magic Skyway ride"
              width={360}
              height={511}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 National Geographic , Vol. 12, No. 4, April 1965"}</figcaption>
          </figure>
          <p className={styles.line}>{"Our ancestors never heard the sounds you're about to hear or saw the sights of the world you're about to visit. We're moving back long before man arrived on our planet. Our story begins just ahead in the warm primeval seas that covered the earth millions of years ago."}</p>
          <p className={styles.line}>{"It was always summer here, even in Alaska. And a swamp like this attracted whole families of touring dinosaurs like those tall Brontosaurus. Father Brontosaurus over there weighed sixty-thousand pounds. And he ate his vegetables every day. In fact, that's all he ate!"}</p>
          <p className={styles.line}>{"The Teranodon flew with wings like a bat. But he was still a reptile like all the other dinosaurs. Even those armor-plated Triceratops hatched bouncing baby reptiles."}</p>
          <p className={styles.line}>{"But armor was no protection from the \"King\" of all the dinosaurs. Even his name was frightening: Tyrannosaurus Rex."}</p>
          <p className={styles.line}>{"And now as a changing earth ends the rule of the reptiles, The Magic Skyway takes you forward in time once more toward the shadow of a new arrival: man."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford29.jpg"
              alt=""
              width={270}
              height={360}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"This was a strange new world. But man embarked on his adventure with a new power: the ability to think and reason."}</p>
          <p className={styles.line}>{"Before long, the caveman discovered how to harness nature's fire to cook his food and warm his ... uhh ... home."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford46.jpg"
              alt="Cavemen warm bottoms on the Magic Skyway ride"
              width={460}
              height={292}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 Wolfe Worldwide Films, Bradd Schiffman Collection"}</figcaption>
          </figure>
          <p className={styles.line}>{"The things he learned, like fire-making and language, were passed from father to son ... and to a friend in need!"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford30.jpg"
              alt=""
              width={184}
              height={180}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"His hunting and tool-making skills helped trap the Woolly Mammoth and gave his world its name: The Stone Age."}</p>
          <p className={styles.line}>{"Caveman recorded his adventures for posterity on the walls of his home ... (probably when his wife was out.)"}</p>
          <p className={styles.line}>{"There's a fellow we would all like to meet! The inventor of the first wheel. As you can see it was a \"trial and error\" process: Square wheels. Oblongs. And finally the round wheel."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford32.jpg"
              alt=""
              width={203}
              height={171}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"The wheel gave man a new freedom. Now he could leave the caves behind and travel on to seek his fortune in the wide, wide world."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford44.jpg"
              alt="Leaving the cave behind on the Magic Skyway ride"
              width={460}
              height={301}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 Wolfe Worldwide Films, Bradd Schiffman Collection"}</figcaption>
          </figure>
          <p className={styles.line}>{"Thousands of years raced by as man applied the wheel to explore the world. And then he discovered new ways to make the wheel work for him. There were water wheels for generating power and iron wheels to span the continent. Wheels within wheels for industry's machines. Wheels for the automobile and the airplane. And just as the first wheel freed man from his cave, today they have carried us to the beginning of still another new age."}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford11/ford31.jpg"
              alt="Magic Skyway: Space City of Tomorrow"
              width={457}
              height={331}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>{"SOURCE: \u00a9 1964 WED Enterprises, Inc."}</figcaption>
          </figure>
          <p className={styles.line}>{"And now The Magic Skyway becomes a highway in the sky carrying you across the boundless night and out into time and space."}</p>
          <p className={styles.line}>{"We've come a long way in our journey with man. And here were are, on the threshold of tomorrow. Man's achievements in science and industry have carried us here. And like the blast-off of a space vehicle for the moon and beyond, man's achievements have challenged our hopes and rocketed our dreams beyond the horizon."}</p>
          <p className={styles.line}>{"Perhaps, someday, we'll be riding rocketships like those flashing overhead to anywhere in space. Perhaps, someday, we will drive jet-powered vehicles over weather-controlled highways in the sky like the spiraling tubes around you."}</p>
          <p className={styles.line}>{"But all such dreams begin in the minds of men. Men of vision, faith and imagination. Men of science and industry, education and the arts. As we have seen along The Magic Skyway man is always on the move, searching and dreaming beyond the horizons of today and bringing the promise of tomorrow ever closer to reality."}</p>
          <p className={styles.line}>{"Now our journey is almost at an end. On behalf of your host, Ford Motor Company, and the creative staff of the Walt Disney Studio who dreamed up this adventure, I hope you have enjoyed your trip on The Magic Skyway. Thanks for joining us!"}</p>
          <p className={styles.speaker}>Announcer:</p>
          <p className={styles.line}>{"Ladies and Gentlemen. Prepare to debark. Make sure you have all your personal belongings. Do not attempt to leave the car until the attendant opens the door for you at the unloading platform. Thank You."}</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ford10"
        explicitPrevious
        overviewHref="/fordoverview"
        nextHref="/ford12"
      />
    </>
  );
}
