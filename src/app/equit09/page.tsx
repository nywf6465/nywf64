import type { Metadata } from "next";
import Image from "next/image";
import { EquitNavChrome } from "@/components/EquitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./equit09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Transcript Selections from the Demograph Soundtrack — Equitable Life — nywf64.com",
  description:
    "Transcript selections from the Equitable Demograph soundtrack at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Demograph soundtrack transcript.
 * Body from legacy equit09.html (navy title uses “Selections”; menu keeps
 * the OCR “Slections”). Last topic — NEXT returns to overview.
 */
export default function Equit09Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Equitable Life Assurance Society"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/equitoverview/hero-banner.jpg"
            alt="Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair"
            width={2066}
            height={761}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EquitNavChrome />

      <article className={styles.article} aria-labelledby="equit09-title">
        <header className={styles.titleBar}>
          <h1 id="equit09-title" className={styles.titleBarMain}>
            Transcript Selections from the Demograph Soundtrack
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/equit09/equit03.jpg"
              alt="Equitable Pavilion"
              width={300}
              height={168}
              className={styles.photo}
              unoptimized
            />
            <hr className={styles.rule} />
          </figure>

          <p className={styles.vignette}>Vignette One:</p>
          <p className={styles.stage}>Sound of telephone ringing …</p>
          <p className={styles.body}>
            <strong>Husband:</strong> Hi Honey, it&apos;s me.
            <br />
            <strong>Wife:</strong> Hi Jack! Say, you don&apos;t have to work late
            again, do you?
            <br />
            <strong>Husband:</strong> Oh no! No. I&apos;ll be home on time.
            <br />
            <strong>Wife:</strong> Are you feeling all right?
            <br />
            <strong>Husband:</strong> Great. Just great!
            <br />
            <strong>Wife:</strong> Well how come you&apos;re calling?
            <br />
            <strong>Husband:</strong> I was wondering if you knew 37 million
            Americans would be moving from one dwelling to another this year.
            <br />
            <strong>Wife:</strong> Jack are you sure you&apos;re all right?
            <br />
            <strong>Husband:</strong> Of course I&apos;m all right. How &apos;bout
            this: Did you know that more than a million families would be moving
            from one state to another this year?
            <br />
            <strong>Wife:</strong> Jack, are you trying to tell me something?
            <br />
            <strong>Husband:</strong> As a matter of fact, I am. We&apos;re going
            to be one of the families moving. The boss just called me and told me
            I&apos;m being transferred out west.
            <br />
            <strong>Wife:</strong> Here we go again.
          </p>
          <p className={styles.body}>
            <strong>Narrator:</strong>
            <br />
            Americans are on the move. Each year one out of five of us move to a
            new home. To find out all that&apos;s going on with our mobile
            population, you couldn&apos;t be in a better place! Take a look at
            the Equitable Demograph.
          </p>
          <p className={styles.body}>
            The states now shown in yellow are the most mobile. Over a third of
            their present residents were born in a different state. The most stay
            at homes are in the violet lighted states. The red states are just
            above the national average in movers. The blue states, just below.
          </p>
          <p className={styles.body}>
            Americans move for new jobs. For marriage. For better homes For new
            opportunities. And as we change our address, we change the face of
            America.
          </p>
          <p className={styles.body}>
            The states now lighted have the largest proportion of people living
            in cities. While those coming up in violet are the least urban:
            Idaho, the Dakotas, Vermont and New Hampshire. These states in red
            are just above the average in city population, and these in blue,
            just below the average.
          </p>
          <p className={styles.body}>
            In 1900 most Americans lived on farms. Today 2/3rds of us live in
            only 211 metropolitan centers.
          </p>
          <p className={styles.body}>
            Yes. Americans are on the move. And if you&apos;re among them,
            here&apos;s a reassuring fact to remember: Wherever you move in the
            USA, there&apos;s a man from Equitable nearby. Which means that
            whenever you need service, you can count on getting it. Fast. With
            Living Insurance from Equitable.
          </p>
          <p className={styles.body}>
            The Equitable Life Assurance Society of the United States.
          </p>

          <p className={styles.vignette}>Vignette Two:</p>
          <p className={styles.body}>
            <strong>1st Boy:</strong> I was born in Texas! The biggest state in
            the country!
            <br />
            <strong>2nd Boy:</strong> Hey! Haven&apos;t you heard? I was born in
            Alaska. You can put over two Texas-es in one Alaska!
          </p>
          <p className={styles.body}>
            <strong>Narrator:</strong>
            <br />
            <em>(chuckling)</em> Don&apos;t argue boys. You both have a lot to
            talk about. Alaska has a great expanse of 586,000 square miles. But
            less than two people for each mile. Texas has 267,339 square miles
            but over ten times as many people for each mile. Now here&apos;s a
            little girl with an interesting comment:
          </p>
          <p className={styles.body}>
            <strong>Girl:</strong> Oh boy. I was born in Washington, D.C. And you
            know what my daddy says? We have 12,000 people on each mile.
          </p>
          <p className={styles.body}>
            <strong>Narrator:</strong>
            <br />
            Yes, she&apos;s right. The most densely populated 61 square miles in
            the country. Incidentally, we picked the little lady from Washington,
            D.C. because the ladies there outnumber the men 100 females to every
            88 males.
          </p>
          <p className={styles.body}>
            Let&apos;s watch the Equitable Demograph. It can tell us a great
            deal, for example, that our population is increasing by one person
            every 12 seconds. That&apos;s 5 new citizens every minute. But what
            makes up this increase? The Demograph has the answers from the Bureau
            of the Census in Washington.
          </p>
          <p className={styles.body}>
            Watch how each state lights up every now and then in pink. Somewhere
            in the United States a baby is born every 7 ½ seconds. But, people
            also die. Watch for the blue lights. Somewhere in the United States
            someone dies about every 17 ½ seconds. Then we have new neighbors
            coming to our shores from other lands. Right now, there is an arrival
            every minute and a half. And, of course, some leave our country;
            though at a much slower rate: about one every 23 minutes. So with
            birth and death, immigrants and emigrants all figured into the
            Demograph, we are increasing our population by one person every 12
            seconds. That&apos;s about 300 each hour and a big total of 7,200
            each day.
          </p>
          <p className={styles.body}>
            Watch the map. See how your own state is playing its part in this
            never ending story of a growing America.
          </p>
          <p className={styles.source}>
            SOURCE: Transcribed from recordings - courtesy of Ray Dashner
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/equit08"
        explicitPrevious
        overviewHref="/equitoverview"
        nextHref="/equitoverview"
      />
    </>
  );
}
