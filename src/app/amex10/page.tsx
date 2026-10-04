import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amex10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Rob Bianco's Model — American Express — nywf64.com",
  description:
    "A Story Updated — Rob Bianco’s childhood model of the 1964/1965 New York World’s Fair, from the American Express pavilion story on nywf64.com.",
};

/**
 * American Express — Rob Bianco's Model feature page.
 * Body from legacy amex10.html.
 * Stack: hero → AmexNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Amex10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="American Express">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amexoverview/hero-banner.jpg"
            alt="American Express at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmexNavChrome />

      <article className={styles.article} aria-labelledby="amex10-title">
        <header className={styles.titleBar}>
          <h1 id="amex10-title" className={styles.titleBarMain}>
            Rob Bianco&apos;s Model
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.storyTitle}>A Story Updated</h2>
          <p className={styles.byline}>by Bill Young with Rob Bianco</p>

          <div className={styles.clipping}>
            <p className={styles.clippingHeading}>MODEL BUILDER</p>
            <div className={styles.clippingPhotos}>
              <Image
                src="/images/amex10/amex02.jpg"
                alt="Rob Bianco at the New York World’s Fair"
                width={150}
                height={197}
                className={styles.portrait}
                unoptimized
              />
              <Image
                src="/images/amex10/amex01.jpg"
                alt="Rob and Model"
                width={300}
                height={206}
                className={styles.modelPhoto}
                unoptimized
              />
            </div>
            <hr className={styles.clippingRule} />
            <p>
              When Robert Bianco visited the New York World&apos;s Fair last
              summer, he was much impressed with the half-million dollar official
              scale model of the Fair which is housed in the American Express
              Pavilion. Viewing the model helps visitors to orient themselves and
              plan their Fair sightseeing easily and quickly.
            </p>
            <p>
              Robert, 14, was so impressed with the Amexco Pavilion model he
              decided to build his own. He began the project last August after
              taking numerous color photographs of the model, making on-site
              inspections and studying copies of the various other pavilions at
              the Fair.
            </p>
            <p>
              Using wood, clay and 150 light bulbs, Robert created an amazingly
              accurate and colorful replica of the official model. As visitors to
              the Bianco home view the model, Robert plays a tape recording which
              describes the pavilions. As each pavilion is mentioned on the tape,
              Robert, in the next room, throws a switch on a control panel which
              lights up the pavilion being featured. As the tape ends, Robert
              turns off the overhead lights, recreating the unusual effect of the
              Fair as it appears at night.
            </p>
            <p>
              So far, the neophyte architect has completed 125 pavilions. He has
              25 more to go. The cost of Robert&apos;s project -- $30. The only
              aid the young man received was from his father, Martin, who wired
              the model and soldered the light bulbs into place.
            </p>
            <p>
              A student in the ninth grade at Elmont Memorial High School,
              Elmont, New York, Robert hopes to become a civil engineer. In
              addition to his architectural talents (which come naturally -- he
              has had no training), Robert is an accomplished drummer and plays
              in the school band.
            </p>
            <p className={styles.source}>
              SOURCE: <em>GOING PLACES</em>, July 1965
            </p>
          </div>

          <div className={styles.narrative}>
            <p>&quot;Bianco ... Bianco ... why does that name ring a bell?&quot;</p>
            <p>
              In late summer 2001, I received an email message from a friend with
              an attachment photo of a yellowed newspaper clipping from the{" "}
              <em>Long Island Press</em> of July 12, 1965 showing 14-year-old
              Robert Bianco of Elmont, NY with the model of the Fair he had
              constructed. I had recently published a Feature on the{" "}
              <Link href="/minimods01">Mini-Models of the Fair</Link> at{" "}
              <span className={styles.brand}>
                <span className={styles.brandNywf}>nywf</span>
                <span className={styles.brandSixtyFour}>64</span>
                <span className={styles.brandDotCom}>.com</span>
              </span>{" "}
              and my friend thought I might be interested in seeing this news
              clipping. He&apos;d been in touch with Mr. Bianco who had sent him
              the copy of the clipping I was looking at.
            </p>
            <p>
              Somehow I knew about Rob Bianco and his model —{" "}
              <em>but how?</em> Finally it came to me. This was the kid that
              I&apos;d read about way back in 1972 when I obtained the
              photo-copies of the <em>Going Places</em> (American Express Company
              Magazine) issues from the Fair years! I thought it amazing that
              nearly 30 years later I would come across someone who could put me
              in touch with the adult Robert Bianco so I could find out the story
              behind <em>his story</em>. I was soon exchanging emails with Rob
              who filled me in on the details of his incredible childhood
              project. Rob writes...
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <Image
              src="/images/amex10/amex05.jpg"
              alt="Illuminated Model"
              width={481}
              height={236}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Rob&apos;s complete model illuminated
            </figcaption>
          </figure>

          <div className={styles.quoteBlock}>
            <p>
              &quot;My story started when during one of my many visits to the
              Fair, I wandered into the American Express Pavilion. My eyes beheld
              something the likes of which I had never seen before. There, spread
              out in front of me was a huge scale model of the Fair. The model
              would have been impressive by itself, but then there were the
              narrative and lights. I was awestruck. At age 14, I walked out of
              that pavilion and was never the same again. I had always tinkered
              with model kits, just like most kids, but to build something like
              this would be quite different. I dreamt about building my own scale
              model of the Fair in an unfinished bathroom on the second floor of
              my Elmont home.
            </p>
            <p>
              &quot;Several thoughts about this project fascinated me. First, I
              would build something that no one else had or could buy. Second, I
              loved the World&apos;s Fair and this would be an opportunity to
              bring the Fair home, to relive my memories many times over. The
              American Express official model of the New York World&apos;s Fair
              would be my inspiration.
            </p>
            <p>
              &quot;I started building some of my favorite pavilions from wood,
              clay and paper. The unique architecture of the Fair made model
              making a real challenge. I found myself looking at any and all
              objects around the house and in restaurants asking myself the
              question, &quot;does this thing look like any part of a
              pavilion?&quot; I studied the official guidebook, took photos and
              researched any information I could find that would serve as a
              resource for my model. The first roadblock occurred when I attempted
              to illuminate the pavilions. The thickness of the wood and clay made
              lighting the buildings impossible. My aunt Celeste, who lived in
              Manhattan, was able to purchase several large sheets of plastic,
              which I was able to reshape into World&apos;s Fair pavilions that
              could be lit from inside. I also discovered that by remaking the
              buildings they would look better on the second attempt. By the time
              the model was complete, not one original building remained. Most
              models were of the third or fourth generation. Even the photo of the
              model that appeared in the paper was not the final version of this
              project.
            </p>
            <p>
              &quot;How I ended up with my picture in the paper is as much a story
              as making the model itself. After several months of sheer model
              making pleasure, I had a pretty good replica of the Fair with
              pavilions that could be illuminated. The only thing I was missing to
              make the experience complete was the narrated recording from the
              American Express Pavilion. This recording named the pavilions and
              spoke briefly about each one as they would light up. It was quite a
              show. The 20 x 40 foot model was located on the floor and when it
              lit up it made you feel as if you were in an airplane flying above
              the Fair. But how to get a copy of this recording?
            </p>

            <figure className={styles.quoteFigure}>
              <Image
                src="/images/amex10/amex06.jpg"
                alt="Rob and Model"
                width={300}
                height={303}
                unoptimized
              />
              <figcaption
                className={`${styles.caption} ${styles.captionOnQuote}`}
              >
                Rob and model several years after the Fair
              </figcaption>
            </figure>

            <p>
              &quot;My very supportive father took me to the Fair carrying our
              reel-to-reel tape recorder with the intent of tape recording the
              narrative. You might imagine my disappointment when we arrived at
              the pavilion to find out that there was no electrical outlet in the
              room. (Battery operated tape machines were not available back in
              1964.) I was depressed and very upset and told my father that I just
              wanted to leave. He noticed how visibly disappointed I was, and
              wasn&apos;t about to leave that easily. He suggested that we ask
              someone who worked at the American Express Pavilion if we could
              somehow make a copy of the recording. It was at this point that he
              spoke one of his many words of wisdom...a lesson that I continue to
              experience throughout my life. He said, &quot;Let&apos;s just ask
              someone...we have nothing to lose by asking.&quot; I was reluctant
              at first and somewhat embarrassed at the thought, but my father
              prevailed and proved to be right again.
            </p>
            <p>
              &quot;Before I knew what was happening, we were being escorted to
              the VIP room on the second level of the pavilion. From a small
              viewing room I was able to look down on the Fair model and make the
              recording that I had wanted so very much. As we were getting ready
              to leave the pavilion, the American Express employee asked what we
              wanted the recording for. I told him what I had built at home and he
              was so intrigued by it all, that he said he wanted to come and see
              it and bring a photographer with him. Several weeks passed and the
              day came when we had these special guests in our home.
            </p>
            <p>
              &quot;Several pictures were taken and they said to watch the local
              papers. On July 12, 1965, my picture with my model of the New York
              World&apos;s Fair appeared in the <em>Long Island Press</em>. I
              guess you can say that it was my one moment of fame. Who would have
              thought.....
            </p>

            <figure className={styles.quoteFigure}>
              <Image
                src="/images/amex10/amex03.jpg"
                alt="Newsclipping"
                width={300}
                height={326}
                unoptimized
              />
              <figcaption
                className={`${styles.caption} ${styles.captionOnQuote}`}
              >
                The photo and caption published nation-wide
              </figcaption>
            </figure>

            <p>
              &quot;In the months that followed I learned that Newsday and several
              other papers had also carried my story and photo. Unknown to me, UPI
              had picked up the story and ran with it. One of my most prized
              possessions arrived in the mail on September 16, 1965, just one month
              before the Fair closed. It was a letter from Robert Moses himself.
              It read, &apos;Dear Robert, The excellent job you did on
              constructing a model of the World&apos;s Fair has come to my
              attention. I congratulate you on this accomplishment and wish you
              success in your future endeavors. Enclosed is a World&apos;s Fair
              medallion which I thought you might like to have.&apos;
            </p>
            <p>&quot;All I could say was WOW!!!!</p>

            <figure
              className={`${styles.quoteFigure} ${styles.quoteFigureLetter}`}
            >
              <Image
                src="/images/amex10/amex04.jpg"
                alt="Moses Letter of Congratulations"
                width={342}
                height={400}
                unoptimized
              />
              <figcaption
                className={`${styles.caption} ${styles.captionOnQuote}`}
              >
                Moses letter of congratulations
              </figcaption>
            </figure>

            <p>
              &quot;In 1986 I was living in Fayetteville, Arkansas. I was working
              as the Administrator of a Retirement community when one of our
              part-time employees called me to say that she had something very
              interesting to show me. It so happened that this employee also
              worked in the local bank. One day a couple visiting from Clovis, New
              Mexico came to the bank. They had a newspaper clipping of their
              wedding from 20 years ago. Because the paper had aged, they wanted
              to know if the bank could laminate their clipping. She told them
              that she could do that for them, and proceeded to do so. In the
              process, she turned the article over to fit it into the machine. Can
              you guess what was on the other side of that article? The same
              article that had appeared in the <em>Long Island Press</em> in 1965!
              There I was, halfway across the United States and 20 years removed
              from the event that now reappeared before me. I cannot fathom just
              what the odds of this happening are, but I can tell you that it was
              the most amazing thing that ever happened to me. To think that my
              little article had appeared in the Clovis, New Mexico newspaper made
              me wonder just how many other papers it might have appeared in.&quot;
            </p>
          </div>

          <div className={styles.narrative}>
            <p>
              Rob never knew that American Express published the story about him
              in the <em>Going Places</em> company magazine so it was a treat for
              me to be able to send him my copy to add to his scrapbook and to be
              able to tell him that his story had once inspired me to attempt my
              own model construction -- a project that was not nearly so
              successful as his own.
            </p>
            <p>
              The one thing he didn&apos;t construct in his model was Unisphere.
              Instead, he used one of the best quality miniatures sold at the Fair
              that stands about 3 1/2 inches tall (a scale of about 1:500) and
              everything else was made in scale to it. He used the Esso Map of the
              Fairgrounds to determine the plot sizes and the grounds layout.
            </p>
            <p>
              I asked Rob what ever happened to the kid from Elmont and the
              fantastic model he had created. Rob replied...
            </p>
          </div>

          <div className={styles.quoteBlock}>
            <p>
              &quot;The kid from Elmont went to the Fair on the closing day...at
              the end of the day I went up in the New York State Towers (my
              favorite pavilion) for the last time and then left the Fair feeling
              very sad about it....As soon as it reopened as a park I revisited
              the site many times. However, the greatest park in New York City
              that Robert Moses had envisioned was never to be. In 1975 I married
              and we moved to an apartment in Mineola. The model stayed in my
              parents home. I moved several times over the years living in
              Virginia, Arkansas and now Florida. My mother passed away in 1986
              and my father joined her in 1988. But before my father died, he sold
              the house and moved to Connecticut to be near my sister. When he
              sold the house, he had to demolish the model. He saved a few of the
              buildings and sent them to me.
            </p>

            <figure className={styles.quoteFigure}>
              <Image
                src="/images/amex10/amex07.jpg"
                alt="Full Model View"
                width={300}
                height={201}
                unoptimized
              />
            </figure>

            <p>
              &quot;I have vowed to rebuild the complete Fair model again, and I
              believe that I will do this sometime in the very near future. I have
              always made models (many from scratch) and because of many years of
              modeling experience I believe that a model I would make today would
              be infinitely better than the one I made as a teenager. I still have
              the Unisphere, the New York State Pavilion, General Motors, and
              while it was not part of the Fair, a model of Shea Stadium as it
              appeared during the Fair. Many out of state visitors thought that
              Shea was part of the Fair -- I still remember overhearing people
              asking, &quot;What is that big pavilion over there?&quot;
            </p>

            <figure className={styles.quoteFigure}>
              <Image
                src="/images/amex10/amex08.jpg"
                alt="Shea Model"
                width={300}
                height={211}
                unoptimized
              />
              <figcaption
                className={`${styles.caption} ${styles.captionOnQuote}`}
              >
                Detailed view of Rob&apos;s Shea Stadium model
              </figcaption>
            </figure>
          </div>

          <div className={styles.narrative}>
            <p>
              Today, Rob is a Licensed Nursing Home Administrator in Central
              Florida, not the Civil Engineer that he had planned to be way back
              in &apos;64 when he was a 14-year-old Elmont, NY boy building
              models. But one thing that hasn&apos;t changed is his interest in
              and love for the Fair. Rob&apos;s story is representative of
              thousands of stories of kids who were so fascinated with the Fair,
              they wanted to keep a part of it forever. That is an enduring story
              of the Fair!
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex09"
        explicitPrevious
        overviewHref="/amexoverview"
        nextHref="/amex11"
      />
    </>
  );
}
