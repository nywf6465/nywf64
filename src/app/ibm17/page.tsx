import type { Metadata } from "next";
import Image from "next/image";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ibm17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Essay: My IBM at the Fair — IBM Pavilion — nywf64.com",
  description:
    "Oren Kugler’s essay My IBM at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Essay from legacy ibm17.html — legacy wording and typos preserved. */
export default function Ibm17Page() {
  return (
    <>
      <section className={styles.hero} aria-label="IBM Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <article className={styles.article} aria-labelledby="ibm17-title">
        <header className={styles.titleBar}>
          <h1 id="ibm17-title" className={styles.titleBarMain}>
            <em>My IBM at the Fair</em>
          </h1>
          <p className={styles.titleBarByline}>... an essay by Oren Kugler</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.letterRow}>
            <Image
              src="/images/ibm17/ibm01.jpg"
              alt=""
              width={260}
              height={242}
              className={styles.letterPhoto}
              unoptimized
            />
            <div className={styles.letter}>
              <p className={styles.letterLine}><em>January 8, 1965</em></p>
              <p className={styles.letterLine}><em>Dear Oren,</em></p>
              <p className={styles.letterLine}><em>I am very pleased to welcome you to our IBM New York World's Fair team as a host. I am sure you will find the Fair to be an exciting and rewarding experience.</em></p>
              <p className={styles.letterLine}><em>By copy of this letter to Mr. J. A. Burmahl, I am making him aware of a short meeting which I would like you to attend in my office, 545 Madison Avenue, 5th floor, on January 22 at 10:45 a. m.</em></p>
              <p className={styles.letterLine}><em>I am looking forward to seeing you. on January 22.</em></p>
              <p className={styles.letterLine}><em>Sincerely,</em></p>
              <p className={styles.letterLine}><em>E. A. Kelleher</em></p>
              <p className={styles.letterLine}><em>cc: Mr. J. A. Burmahl</em></p>
            </div>
          </div>

          <div className={styles.body}>
            <p>HIS WAS THE LETTER that would provide me with a lifetime of memories that are as vivid today as they were 39 years ago. Thirty-nine years ago. What happened? Where has the time gone?</p>
            <p>Several months before I received this letter I was working in the Corporate Headquarters of the IBM DP (Data Processing) Division at 112 East Post Road, White Plains, New York. My then manager, John Burmahl, called me into his office one morning in November. As a newer IBM employee I had no idea what to expect especially when one considers that senior IBM management usually only had meetings with other senior management while the rest of us would meet with our immediate supervisors.</p>
            <p>Okay. That said I was greeted as the newest member of the payroll department, welcomed as a second generation member of the IBM family (my father of course being the first) and then instructed to make myself available for an interview on the following day with other IBM managers. Details to this were not immediately forthcoming. If only I had known that this was going to be a life altering experience I might have gotten some sleep the night before instead of concerning myself with issues that kept me pondering what was in store for me in the upcoming meeting.</p>
            <p>I was introduced to two gentlemen who were the managers at the IBM Pavilion at the New York World's Fair at Flushing Meadows. Now at this time I had made only a couple of visits to the Fair the year before in 1964 and, yes, I had visited the IBM Pavilion but only as an interested spectator and employee. As they began to ask me what I knew about the Fair and had I seen the IBM Pavilion, the reason for this interview began to crystallize. I was a candidate for a position. As the interview came to a close and I left the office I heard one of the managers say to the other, &quot;He'll work out just fine.&quot; Me. The new guy. Even back then I never banked on what I heard until it happened. Well in this case it did as you can see from the letter at the beginning of this story. I was to later find out that there had been 500 IBM employees interviewed for 50 positions -- this also included IBM World Trade Corporation, our European counterpart.</p>
            <p>Training began at the IBM offices at 590 Madison Avenue in New York City where we met the other staff members and were given an overview from members of the 1964 staff at the pavilion. We were then given a &quot;huge&quot; manual with every aspect of the pavilion outlined in detail, from hosting the Typewriter Bar (does anyone remember what a typewriter was?) to giving the OCR (Optical Character Recognition) demonstration. As we began to become a cohesive working unit, the excitement of this adventure began to take shape. And then one morning we were told we would be boarding a charted bus for a trip to the Fair and our pavilion. The Fair had, of course, not opened as yet and the bus pulled directly up to the pavilion. I suspect those of you reading this [who worked at a pavilion at the Fair] had a similar experience at your own pavilion during training.</p>
            <p>IT was a marvelous experience that first visit as a &quot;new&quot; host; learning about the exhibit, seeing the inner workings of the displays, i.e. the &quot;Little Theaters&quot; the &quot;language translation&quot; equipment and how, by typing information at the pavilion, the data was sent to our Kingston facility, translated, and sent back to a printer at the pavilion in seconds. Amazing stuff. One really got the feeling they were on the cutting edge of technology and proud to be a part of such a great company. The IBM of the 1960's in no way resembles the IBM of today but that's another story. As part of the preparations for the Fair we were sent to a clothing store in Manhattan called Chipworths, where the men were measured and fitted for two new suits and five new shirts. As I recall the women received two outfits as well, although I don't recall the details to that part of the training.</p>
            <p>Once the training was completed and we had practiced the various positions at the pavilion we were ready for opening day. Now let me explain that IBM had some very strict rules on how the work assignments were handled. Women were not assigned to evening hours, those hours leading up to closing. This was done as a safety precaution for women traveling at night especially on public transportation. Not that those things were nearly as bad as they are today, but I think for its time it was an excellent precaution.</p>
            <p>Some of my most interesting experiences were on the &quot;People Wall.&quot; For those of you who visited the Fair and the IBM Pavilion, the People Wall was very impressive. Imagine this grandstand-like structure that could accommodate 500 people and carry them 90 feet up into the egg shaped structure called an &quot;ovoid&quot; that was impregnated with the letters IBM completely around it. In order to get onto the People Wall you had to walk on a path through a maze that was suspended over water, each path leading to an entrance that would lead onto a row on the Wall. We had entertainers who performed while you waited in line throughout the maze waiting your turn on the Wall. The entertainers were singers who performed from a separate part within the maze. One of my personal favorites was folk singer Josh White, Jr. We became great friends and had lunch frequently as time and schedules permitted.</p>
            <p>We would position a host at the entrance to each row leading directly onto the People Wall. Now here is something for those of you who were fortunate enough to have the experience of riding on the Wall that you probably never knew. There was an arm that would be pulled down at either end of each row. They had to be down in order to close the circuit that would allow the person positioned at the lower right hand position of the first row to push the button to open the door to the &quot;ovoid&quot; and then push the button that would engage the hydraulics that would lift the 60,000 lb. Wall up and into the &quot;ovoid&quot; for the show on &quot;how a machine works,&quot; namely, the computer. Remember this is 1965 so we are talking &quot;360&quot; main frames not PC's or laptops that we know today!</p>
            <p>Keep in mind, for those of you who did not visit the Fair or the IBM Pavilion, that one could not avoid seeing this huge grandstand-of-a-wall being lifted up into the &quot;ovoid.&quot; You simply could not have missed being aware of how you got to see the show via this hydraulically lifted wall. For whatever reason there were people who actually became hysterical while seated on the Wall, distracting those around them and, in some cases, causing the wall to stop momentarily! Speaking of the wall stopping, on every other row at each end there were no hosts stationed thus leaving an inquisitive youngster or adult wanting to lift up that arm I spoke of that completed the circuit. Guess what? That caused the Wall to come to an abrupt stop! Every host on the wall would then have to quickly assess where the arm had been lifted and correct the problem.</p>
            <p>Then there were those people who upon arriving at the inside of the &quot;ovoid&quot; for the show wanted out. I mean out! Off the Wall up there inside the &quot;ovoid.&quot; I had one women who was so afraid of heights that she wanted to walk down, anything but ride the Wall back down at the end of the show. I assured her that the Wall was safe and her best option for getting back down given what the alternative was (remember she had a very real fear of heights). Well she insisted on an alternate route down. When I took her to the exit door and opened it revealing a fire escape outside the &quot;ovoid,&quot; I thought the poor women was going into cardiac arrest. She rode the Wall back down with me sitting there holding her hand as she closed her eyes and prayed for it to be over with. I had many such encounters on that wonderful People Wall and wish it were 1965 again.</p>
            <p>Every two days we rotated to a different position: two days at the typewriter bar, two days giving the Optical Character Recognition demonstration and another of my favorite positions, VIP Guide. As a VIP Guide, when someone of importance visited the pavilion, it was your job to give them a personal tour usually ending at the VIP platform leading onto the People Wall. This also afforded you an opportunity to talk with them and answer any questions. My most memorable VIP's were Helen Hayes and her son, actor James MacArthur. Remember those Disney movies of the late 1950's or TV's Hawaii Five-O? That was he.</p>
            <p>I could go on forever about all my experiences at that wondrous World's Fair. I wonder if any of you reading this had the opportunity to take the last People Wall ride in the evening before the fireworks were to begin in the Pool of Industry which the Wall faced? Do you remember the Master of Ceremonies who dropped down from the ceiling on that flimsy-looking stand attached to a pole that brought him up and down to introduce and welcome you to the IBM Pavilion? If you were there you may well have been there on an evening when he would say, &quot;The fireworks are about to begin ladies and gentlemen and you have the best seats in the house. So sit back and enjoy them and I'll see you upstairs after they are over.&quot; I'll bet some of you had wished that you had been inside instead watching the show! On windy evenings you were entertained by the music, fireworks and dancing colorful waters. But sitting there with no escape on the People Wall, you would be dampened from the water blowing directly at the Wall and left breathing in that sulfur residue smell from the fireworks! On some occasions I remember the wall being engulfed in what appeared to be a colored damp cloud!</p>
            <p>You had to be there, and if you were, count yourself one of the more fortunate people on planet earth. There will never ever be anything the likes of the 1964-1965 Worlds Fair again, at least not in my lifetime. I now satisfy myself with trips to Walt Disney World and Epcot. It rekindles those memories of the Fair but will never replace it.</p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm17/ibm05.jpg"
              alt=""
              width={379}
              height={261}
              className={styles.inlinePhoto}
              unoptimized
            />
            <figcaption className={styles.figCaption}>
              <em>
                Oren&apos;s IBM Pavilion of the 1964/1965 New York World&apos;s Fair
                and the giant &quot;ovoid&quot; theater perched 90 feet above the
                main pavilion.
              </em>
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm17/ibm04.jpg"
              alt=""
              width={240}
              height={238}
              className={styles.inlinePhoto}
              unoptimized
            />
            <figcaption className={styles.figCaption}>
              <em>
                The &quot;People Wall&quot; - a moving grandstand seating 500 -
                lifts visitors into the giant ovoid theater overhead where a film
                on the workings of the Computer was shown.
              </em>
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm17/ibm03.jpg"
              alt=""
              width={481}
              height={252}
              className={styles.inlinePhoto}
              unoptimized
            />
            <figcaption className={styles.figCaption}>
              <em>
                IBM Pavilion&apos;s Master of Ceremonies greets visitors on the
                People Wall. Photo on the left shows MC&apos;s descent from the
                ovoid theater.
              </em>
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm17/ibm40.jpg"
              alt=""
              width={420}
              height={320}
              className={styles.inlinePhoto}
              unoptimized
            />
            <figcaption className={styles.figCaption}>
              <em>
                I received my draft notice about a month before the Fair was due
                to end. I left the Fair and IBM to spend some time with family and
                friends before going into the Army. By the way I did not leave the
                employ of IBM. Back in the 1960s, if you were drafted or elected
                to enlist for two years, you were still employed by IBM. The only
                difference was that you received 25% of your salary every month
                for the two years you served. Military pay being what it was made
                receiving more money from your employer then the Army paid you a
                major benefit. My manager at the Fair called me into his office
                before I left to bid me good luck and farewell and presented me
                with what everyone else would being receiving at the conclusion of
                the Fair. As you can see it is a pen mounted on marble with my
                name tag, the same as I wore on my suit every day, and a medallion
                commemorating the IBM Pavilion and the New York Worlds Fair. The
                single reminder of the Fair has increased in personal value to me
                with every year that passes since my Worlds Fair experience.
              </em>
            </figcaption>
          </figure>

          <p className={styles.copy}>
            &copy; Copyright 2003 Oren Kugler -- do not reprint without permission.
          </p>

          <div className={styles.thanks}>
            <p>
              Thank you to Oren Kugler for giving us a look back at the workings
              of the IBM pavilion at the Fair.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ibm16"
        overviewHref="/ibmoverview"
        nextHref="/ibm18"
      />
    </>
  );
}
