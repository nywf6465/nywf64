import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { BellNavChrome } from "@/components/BellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bell10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Exhibit Hall — Bell System — nywf64.com",
  description:
    "The Exhibit Hall at the Bell System Pavilion — displays, demonstrations, and games at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function Photo({
  src,
  alt,
  width,
  height,
  caption,
  captionNote,
  source,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  captionNote?: ReactNode;
  source: string;
}) {
  return (
    <figure className={styles.figure}>
      <span className={styles.photoFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photoImg}
          unoptimized
        />
      </span>
      {caption ? (
        <figcaption className={styles.caption}>
          {caption}
          {captionNote ? (
            <>
              <br />
              <span className={styles.captionNote}>{captionNote}</span>
            </>
          ) : null}
        </figcaption>
      ) : null}
      <p className={styles.source}>{source}</p>
    </figure>
  );
}

/**
 * Bell System — The Exhibit Hall.
 * Body from legacy bell10.html (custom feature article — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → BellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Bell10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Bell System Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/belloverview/hero-banner.jpg"
            alt="Bell System Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BellNavChrome />

      <article className={styles.article} aria-labelledby="bell10-title">
        <header className={styles.titleBar}>
          <h1 id="bell10-title" className={styles.titleBarMain}>
            The Exhibit Hall
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p>
            The displays, demonstrations and games in the Exhibit Hall are
            designed to tell the story of how the Bell System, through science
            and technology, has in the past and will continue to make
            communicating easier and better for everyone, everywhere.
          </p>
          <p>The following describes the major areas of the Exhibit:</p>

          <p>
            <span className={styles.areaTitle}>Creatures and Man Area.</span>{" "}
            This display consists of a series of light boxes and copy blocks --
            pictures of creatures of land, sea and air -- as well as photographs
            of some of man&apos;s accomplishments in communications. The story
            told is that essentially all creatures communicate. Some have more
            highly developed senses than man, but man because he can think and
            reason has developed his ability to communicate to a far greater
            degree than any other form of life.
          </p>

          <p>
            <span className={styles.areaTitle}>Senses Area.</span> Here, speech,
            vision and hearing are examined. There are two major exhibits -- a
            demonstration of Visible Speech and Voice Prints, and one of
            Artificial Larynx and the Vocoder.
          </p>
          <p>
            Because the voice is transmitted on the telephone, Bell has devised
            ways of studying it. The Visible Speech Translator shows us the
            sounds of the voice on a television screen.
          </p>
          <p>
            The Visible Speech exhibit features an isolation booth in which a
            volunteer from the audience reads a sentence. His speech patterns
            appear to the audience on a television screen.
          </p>
          <p>
            The Artificial Larynx is demonstrated as the Bell Telephone
            Laboratories invention which restores the gift of speech to those
            who have lost their vocal chords.
          </p>

          <Photo
            src="/images/bell10/bell49.jpg"
            alt="Artificial Larynx"
            width={150}
            height={200}
            caption="Artificial Larynx demonstration"
            captionNote="(Photo courtesy of Bradd Schiffman)"
            source="SOURCE: A.T.& T. Archives Photo"
          />

          <p>
            In the Vocoder exhibit it is shown how this experimental machine
            samples the voice, selecting only parts for transmission and
            reconstructing them into a complete conversation at the receiving
            end. It will actually be demonstrated how your voice can be taken
            apart and put back together again.
          </p>
          <p>
            One wall includes an animated display of the ear, eye and throat,
            explaining how they function. The visitor is also able to test his
            skill at pitch matching, and to participate in an optical illusion
            game.
          </p>

          <Photo
            src="/images/bell10/bell24.jpg"
            alt="Senses Wall"
            width={460}
            height={298}
            caption="Senses Wall in the Bell System's pavilion. Approximately 14 by 40 feet, it depicts what takes place in hearing, speaking and seeing. Sound waves are shown in motion through the medium of Technamation."
            source="SOURCE: Industrial Photography, Vol. 13 No. 5, May 1964"
          />

          <Photo
            src="/images/bell10/bell57.jpg"
            alt="Children at the Senses Wall"
            width={233}
            height={298}
            source="SOURCE: Monsanto Magazine, Summer, 1964"
          />

          <p>
            <span className={styles.areaTitle}>
              Telephone of Today and Vision.
            </span>{" "}
            Two displays make up this area. They demonstrate some of the
            products of over 80 years of Bell System research. The first display
            explains the development of telephone instruments and services from
            our earliest offerings to the modern instruments and services. The
            second exhibit demonstrates how research in the area of vision has
            enabled us to gain knowledge in areas where we were once unable to
            see. It ranges in scope from the electronic microscope to the radio
            telescope
          </p>

          <p>
            <span className={styles.areaTitle}>Basic Science Exhibit.</span> The
            major display in this area demonstrates crystal growth. It is
            supported with displays of the dramatic developments that have been
            made possible by knowledge acquired through research on the
            structure of crystals -- the transistor, solar battery, Maser and
            Laser. One wall is devoted to a display of the dramatic impact on
            our lives that has resulted from these inventions, namely
            miniaturization of electronic equipment, use in satellites,
            computers, transmission, radio and television equipment, etc.
          </p>

          <p>
            <span className={styles.areaTitle}>Waves Exhibit.</span> The waves
            exhibit features a Torsional Wave Machine that demonstrates the
            behavior of waves. It is demonstrated that waves carry information
            and that this fact makes it possible to transmit voice, music and
            television over great distances.
          </p>
          <p>
            Supporting displays show the various transmission media -- cable,
            coaxial cable, wave guide, microwave, Maser and Laser.
          </p>

          <p>
            <span className={styles.areaTitle}>Tasi Complexity Exhibit.</span>{" "}
            This exhibit shows the underseas cable routes and how they operate.
            The Tasi demonstration explains how utilization of these routes is
            almost doubled by using the silent times occurring in a conversation
            (e.g., time spent listening, thinking or pauses) to transmit parts
            of another conversation. In the foreseeable future, the Vocoder,
            demonstrated in the Senses Area, will be used in conjunction with
            Tasi to more than quadruple the information-carrying capacity of the
            underseas cable.
          </p>
          <p>
            In support of these exhibits, there are logic and memory games in
            which the audience may participate. There is an age-guessing game, a
            Roman numeral translator and a Tic-Tac-Toe game.
          </p>

          <Photo
            src="/images/bell10/bell52.jpg"
            alt={'"What\'s the Weather?"'}
            width={300}
            height={373}
            caption="Hostess Ruth Gola gives Sally Winternitz a live demonstration on the speed of Direct Distance Dialing with a call to a recorded weather announcement in a distant city."
            source="SOURCE: A.T.& T. Archives Photo"
          />

          <p>
            <span className={styles.areaTitle}>
              Picturephone (Television Telephone).
            </span>{" "}
            Here the audience participates in an actual research project
            conducted by the Bell Telephone Laboratories on TV telephones. There
            are six picture telephones in this area which are interconnected so
            that a participant may use any one to see and speak with any one of
            the others. Bell Laboratories staff members interview participants
            to determine such things as what kind of picture phone instruments
            they would desire, what kinds of services they would like it to
            perform, how they would use it, what the value of a service of this
            kind would be to them, etc.
          </p>

          <Photo
            src="/images/bell10/bell48.jpg"
            alt="Picturephone Demonstration"
            width={280}
            height={222}
            caption="Picturephone in use at the Bell System"
            captionNote="(Photo courtesy of Bradd Schiffman)"
            source="SOURCE: A.T.& T. Archives Photo"
          />

          <p>
            <span className={styles.areaTitle}>Data Exhibit.</span> This exhibit
            demonstrates the services offered by the Bell System that makes it
            possible for machines to talk to machines. It emphasizes many of the
            ways that information may be passed between machines and the
            tremendous speeds of transmission made possible through the use of
            this medium.
          </p>

          <Photo
            src="/images/bell10/bell51.jpg"
            alt="Dataphone Exhibit"
            width={460}
            height={339}
            caption="Dataphone Exhibit"
            source="SOURCE: A.T.& T. Archives Photo"
          />

          <p>
            <span className={styles.areaTitle}>Network.</span> In a
            pyrotechnic-like display of moving multi-colored light on a treated
            plexi-glass wall that wraps almost halfway around a circular
            theater, the Network Story is told. In forty steps the story builds
            from a single call into the nationwide network. Data, the Defense
            Lines, the Cable and Microwave Systems all combine into one vast
            network which then expands into its world-wide capability, and, with
            the effect of a shrinking world, will ultimately evolve the
            extension of the network into space through satellites and the Maser
            or Laser.
          </p>

          <Photo
            src="/images/bell10/bell50.jpg"
            alt="Telstar Model"
            width={326}
            height={332}
            caption={
              <>
                Model of the <em>Telstar</em> Communications Satellite on
                display
              </>
            }
            captionNote="(Photo courtesy of Bradd Schiffman)"
            source="SOURCE: Official Guide - New York World's Fair, 1964 Edition, Time-Life Books, publisher"
          />

          <h2 className={styles.ticTacTitle}>TIC-TAC-TOE MACHINE</h2>
          <p>
            You can play a game of tic-tac-toe with a machine developed by
            William Keister of Bell Telephone Laboratories, but don&apos;t
            expect to win. The machine can be tied but cannot be beaten. The
            machine represents the kinds of processes that can be built into
            telephone systems. It illustrates how relay-type equipment (like
            that used in telephone systems) makes logical decisions in
            connecting one caller with another.
          </p>
          <p>
            The face of the cabinet is divided into nine squares. When you press
            a button near one of the squares to light it with a figure, such as
            &quot;x&quot;, the machine automatically places the other symbol, in
            this case an &quot;o&quot;, in another square and waits its turn for
            another play. The electro-mechanical brain can make three decisions.
            If you succeed in marking two symbols in a row, the machine makes a
            defensive play by filling in the third space in the row. If the
            machine itself has two in a row, it will fill in the third and win.
            If there is no immediate chance to win and no need to block you from
            winning, the machine marks the most advantageous square.
          </p>
          <p>
            No matter how good you are, the best you can hope for is a draw.
          </p>
          <p className={styles.sourceBook}>
            SOURCE: Book &quot;Science at the Fair&quot;
          </p>
          <hr className={styles.sectionRule} />

          <Photo
            src="/images/bell10/bell56.jpg"
            alt="Kiddie Telephone Center"
            width={400}
            height={225}
            caption={
              <>
                <strong>A pair of youngsters</strong> and hostess Diana
                Janukatys at the Bell System exhibit await an answer from a
                favorite cartoon character they have dialed at the kiddie
                telephone center. P.S. they got a recorded message.
              </>
            }
            source="SOURCE: News Colorfoto by Edmund Peters and Richard Lewis, New York Sunday News, May 23, 1965"
          />

          <div className={styles.webmasterBox}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              As is often the case, these &quot;Feature&quot; stories on the
              exhibits at the Fair involve the contributions of many people. I
              am so thankful for the materials that others contribute because of
              how much they add to these presentations. In the case of the Bell
              Feature, I&apos;d like to especially thank Tom Wentland for the
              Bethlehem Steel reprint that explains the construction of the
              pavilion. Bradd Schiffman contributed many of the pictures that
              you see throughout the story. And my thanks to Ray Dashner for his
              recording of the 1965 version of{" "}
              <em>The Ride of Communications</em> which I was able to transcribe
              to complement the &apos;64 version that I&apos;ve had for many
              years. Thanks to everyone who helped to remember this wonderful
              exhibit.
            </p>
            <p className={styles.signoff}>
              Bill Young
              <br />
              October, 2001
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/bell09"
        overviewHref="/belloverview"
        nextHref="/bellfunatthefair1964"
      />
    </>
  );
}
