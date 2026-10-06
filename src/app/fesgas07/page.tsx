import type { Metadata } from "next";
import Image from "next/image";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fesgas07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases — Festival of Gas — nywf64.com",
  description:
    "American Gas Association press release for the Festival of Gas Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — Press Releases.
 * Body from legacy fesgas07.html / fesgas07-full.txt.
 * Preserve typos (though, and and, Ceasars, fun House, Theater of food).
 * Stack: hero → FesgasNavChrome → navy title → article → Nav2Bar.
 * CSS pattern adapted from equit09.
 */
export default function Fesgas07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Festival of Gas">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fesgasoverview/hero-banner.jpg"
            alt="Festival of Gas at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FesgasNavChrome />

      <article className={styles.article} aria-labelledby="fesgas07-title">
        <header className={styles.titleBar}>
          <h1 id="fesgas07-title" className={styles.titleBarMain}>
            Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/fesgas07/fesgas60.jpg"
              alt="Festival of Gas Story"
              width={597}
              height={98}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.kicker}>FESTIVAL OF GAS STORY</p>
          <p className={styles.headline}>FESTIVAL OF GAS PAVILION</p>
          <p className={styles.subhead}>FIRST AT THE WORLD&apos;S FAIR</p>

          <p className={styles.body}>
            The Festival of Gas -- first at the New York World&apos;s Fair --
            typifies the entire World&apos;s Fair in the sense that it has
            something for everyone ... young or old ... seeker of knowledge or
            seeker of fun.
          </p>
          <p className={styles.body}>
            The pavilion, sponsored by the gas industry, first to contract for
            space and break ground at the Fair, helped set the pattern that has
            been followed by most exhibitors ... entertainment and then ...
            education.
          </p>
          <p className={styles.body}>
            Designed by Walter Dorwin Teague Associates, the pavilion is a
            gleaming-white, open, spacious structure with pools, fountains, and
            colorful landscaping ... and it is a &quot;fun&quot; place.
          </p>
          <p className={styles.body}>
            Visitors will get their first preview of the pavilion while they
            ride a giant, gaily decorated Carousel, complete with huge, colorful
            prancing horses.
          </p>
          <p className={styles.body}>
            A number of special features, such as a Fun House, a Puppet Show, a
            Magic Show, a Garden of the Giants, a Pantomime Promenade, a Theater
            of Food, and one of the best restaurants at the Fair, will provide
            something of interest and entertainment for everyone.
          </p>
          <p className={styles.body}>
            Located on one of the main thoroughfares, the pavilion has an
            inviting, natural, park-like garden of amusement look which will
            draw Fair visitors.
          </p>
          <p className={styles.body}>
            A moving ramp will whisk people to the Carousel located in the heart
            of the pavilion twelve feet above the main floor.
          </p>
          <p className={styles.body}>
            From the Carousel, during a five-minute ride complete with
            narration, visitors will get a bird&apos;s eye view of the Festival
            of Gas and an introduction to special features of the pavilion.
          </p>
          <p className={styles.body}>
            At the end of the Carousel ride, another moving ramp will return
            them to the main floor and the entrance of the Fun House of the
            Future.
          </p>
          <p className={styles.body}>
            Visitors will enter the fun House on an outdoor ramp over a lagoon.
            Once inside they will experience a number of novel, amusing,
            surprising, and sometimes delightfully eerie adventures.
          </p>
          <p className={styles.body}>
            In the first section of the Fun House, engulfed in a weird eerie
            near-darkness, visitors will see the major milestones of man&apos;s
            use of natural gas -- from gas worship to gas use -- emerge before
            his eyes.
          </p>

          <p className={styles.source}>
            Source: American Gas Association Press Release - Presented Courtesy
            Gary Holmes Collection
          </p>

          <p className={styles.pageBreak}>- 2 -</p>

          <p className={styles.body}>
            Then they will be whipped on a magic carpet into the second section
            of the Fun House where the story of gas energy in the future will be
            told in a dazzling and dramatic display of multiple images
            accompanied by narration and music.
          </p>
          <p className={styles.body}>
            Finally in the third section of the Fun House, visitors will see the
            Gas Producer&apos;s Wishing Wells. Looking into the Wishing Wells,
            they will take part in the actual search for gas, land by helicopter
            on a sea-borne drilling platform, and see exhibits of everyday
            products, such as plastics which are actually &quot;made&quot; from
            gas.
          </p>
          <p className={styles.body}>
            Next on the tour of the pavilion is the Gas Transmission Pipeline
            Labyrinth where visitors will see a cross section of the intricate
            technology through which natural gas is stored, transported, and
            provided to industry and individuals when and where it is wanted.
          </p>
          <p className={styles.body}>
            The Festival&apos;s Magic show is a spectacular demonstration of the
            use of gas in industry, and particularly in the manufacture of
            glass. Visitors will actually take part in experiments and
            demonstrations becoming part of the Magic Show themselves.
          </p>
          <p className={styles.body}>
            The Festival&apos;s Puppet Show, featuring Tom Tichenor, famed
            puppeteer of the Broadway hit Carnival, is created to amuse both
            children and adults. It follows the adventures of Tom Therm in his
            battle against the elements and features a host of lovable Tichenor
            puppets which will work their way into everyone&apos;s heart.
          </p>
          <p className={styles.body}>
            Within the gay garden of amusement motif of the pavilion, visitors
            will find the Pantomime Promenade, a series of four miniature
            animated stage settings. These will dramatize the value of
            climate-control though &quot;before-and-after&quot; vignettes,
            featuring animated puppets.
          </p>
          <p className={styles.body}>
            The pavilion will also feature a unique way of displaying
            contemporary gas appliances within an entertainment theme. The
            appliances will set in a 24-foot high Ferris Wheel which revolves
            without center spokes. Festival of Gas visitors will walk through
            the center of the Ferris Wheel on their tour of the pavilion and the
            appliances will revolve around them.
          </p>
          <p className={styles.body}>
            The Festival&apos;s Theater of Food is a glass-enclosed,
            semi-circular, amphitheater where famous chefs from all over the
            world will perform. A new Guest Chef will be presented each week and
            from four to eight performances will be given daily. The Theater of
            food will hold 200 spectators for each performance.
          </p>
          <p className={styles.body}>
            One of the major exhibits at the 1964-65 New York World&apos;s Fair,
            which may rival television and and nylon exhibits at the 1939-40
            Fair, is the Festival&apos;s Garden of the Giants.
          </p>
          <p className={styles.body}>
            In the garden a gas fired turbine demonstrates a dramatic portrayal
            of the industry&apos;s potential. The turbine, similar to those in
            jet airplanes, actually provides all the heating and cooling and a
            major portion of the electricity and power for the pavilion.
          </p>
          <p className={styles.body}>
            This is part of the industry&apos;s total air-conditioning story
            which is vividly being told in the fact that 80 per cent of the air
            conditioning at the Fair is being done by gas.
          </p>
          <p className={styles.body}>
            Another major highlight of the Festival of Gas pavilion will be the
            Festival &apos;64 -- The American Restaurant -- which will feature
            regional American specialties. The restaurant with
            &quot;see-through-walls&quot; gives diners a pleasant unobstructed
            view of the fairgrounds, both night and day.
          </p>
          <p className={styles.body}>
            Set among the pavilion&apos;s pools and flowing streams, the
            Festival &apos;64 blends into the garden-like atmosphere providing
            Fair visitors with a romantic, unhurried dining
            experience.The restaurant is managed by Restaurant Associates,
            operators of New York city&apos;s famed Four Season, The Forum of
            the Twelve Ceasars, and La Fonda del Sol.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fesgas06"
        explicitPrevious
        overviewHref="/fesgasoverview"
        nextHref="/fesgas08"
      />
    </>
  );
}
