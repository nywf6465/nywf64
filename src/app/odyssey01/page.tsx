import type { Metadata } from "next";
import Image from "next/image";
import { OdysseyHero } from "@/components/OdysseyHero";
import { OdysseyNavChrome } from "@/components/OdysseyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../odysseyEssay.module.css";

export const metadata: Metadata = {
  title: "A World’s Fair Odyssey & An Afternoon of Delight — nywf64.com",
  description:
    "Craig Bavaro’s essay A World’s Fair Odyssey & An Afternoon of Delight — discovering the 1964/1965 New York World’s Fair in 1976, on nywf64.com.",
};

/**
 * Odyssey essay page 1 (legacy odyssey02.html remapped to /odyssey01).
 * Stack: hero → Odyssey nav (Page 2) → navy title bar → essay → nav2
 * PREVIOUS → /odysseyoverview; NEXT → /odyssey02
 */
export default function Odyssey01Page() {
  return (
    <>
      <OdysseyHero />

      <OdysseyNavChrome />

      <article className={styles.article} aria-labelledby="odyssey01-title">
        <header className={styles.titleBar}>
          <h1 id="odyssey01-title" className={styles.titleBarMain}>
            Essay:{" "}
            <em>A World&apos;s Fair Odyssey &amp; An Afternoon of Delight</em>
          </h1>
          <p className={styles.titleBarByline}>... by Craig Bavaro</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              Back in the mid-seventies I discovered the wonder that was the
              1964/1965 New York World&apos;s Fair. I stumbled across a record of
              this momentous event in an old Time magazine I found in our school
              library. Being somewhat of a 60s history buff at that time I
              searched every magazine and newspaper of the period for additional
              pictures and articles that would tell me more about this event that
              took place right in the middle of my hometown. After I had
              exhausted these avenues of information I expanded my quest by
              trying to find people who had attended or worked at the Fair. Lucky
              for me I didn&apos;t have to look any further than my own family at
              first. But knowing my family as I do, that was to be both a
              blessing and a curse because they are often long with excuses and
              short on details which was most frustrating to this teenage fact
              hound. Here is what I did find out from my parents who lived just a
              few miles away from the Fairgrounds at the time of the Fair:
            </p>

            <p className={styles.quote}>
              &quot;It took them forever to build that thing.&quot;
            </p>
            <p className={styles.quote}>
              &quot;What a traffic nightmare that was for your father.&quot;
            </p>
            <p className={styles.quote}>
              &quot;We didn&apos;t go much. You know your father hates
              crowds.&quot;
            </p>
            <p className={styles.quote}>
              &quot;By the time the Fair opened we were sick of hearing about
              it.&quot;
            </p>
            <p className={styles.quote}>
              &quot;We heard it was very expensive.&quot;
            </p>

            <p>
              As you can see, I wasn&apos;t finding much out at this point. So I
              asked my mother the big question hoping I could get something more
              concrete out of her. &quot;Mom? Did you ever get to the World&apos;s
              Fair?&quot; As I eagerly sat awaiting my mother&apos;s answer,
              visions of the wonders that she saw first-hand filled my
              13-year-old head. Boy, was that a mistake! She said, &quot;Well, we
              did go twice in 1965 with my parents. I remember it was summertime
              and very hot. I was pregnant with your sister and I had to push you
              around in the stroller.&quot;
            </p>

            <p>
              Wow! Now we were getting somewhere! And more importantly, I now
              knew that I went to the Fair too! &quot;OK mom. What did we
              see?&quot; Images of the major industrial exhibits, foreign lands
              and far off states danced in my head. My mom continued, &quot;We
              really didn&apos;t see that much of the big exhibits. It was very
              crowded and everything was so far apart. I did see the Bell
              exhibit. I remember the long line. Your father wouldn&apos;t wait
              so he and your grandfather went to drink beer at the Schaefer
              Center.&quot;
            </p>

            <p>
              &quot;On our way back to meet them we passed the Clairol Pavilion.
              I remember we stuck our heads in these domes that showed us what we
              would look like with different hair colors. That was fun; no line
              to do that!&quot; Got it so far mom. Beer. Bell. Hair. Tell me
              more...
            </p>

            <p>
              &quot;Not much more to tell.&quot; she said, &quot;You were cranky,
              I was tired and your grandmother was hungry and you know what that
              means.&quot; I sure did. I was about to find out more than I really
              cared to know about one restaurant at the World&apos;s Fair. Care
              to guess which one? Spain? Mexico? Japan? China? The Festival of
              Gas? Nope. My family spent the rest of their time at one of the
              biggest World&apos;s Fairs ever held at the Seven-Up Pavilion
              drinking soda and eating small sandwich platters! My mom regaled me
              with how good and how inexpensive they were. This is what impressed
              my family most about the Fair; a good roast beef sandwich and a
              soda served in a paper cup!
            </p>

            <figure className={styles.menuFigure}>
              <div className={styles.menuTray}>
                <Image
                  src="/images/odyssey/odys14.jpg"
                  alt="7-Up Sandwich Gardens Menu front"
                  width={350}
                  height={161}
                  className={styles.menuPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys15.jpg"
                  alt="7-Up Sandwich Gardens Menu back"
                  width={350}
                  height={162}
                  className={styles.menuPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                &quot;This is what impressed my family most about the Fair; a
                good roast beef sandwich and a soda served in a paper cup!&quot;
              </figcaption>
            </figure>

            <p>
              I had to ask my mom, &quot;You mean you didn&apos;t even get to the
              GM exhibit?&quot; &quot;No, we didn&apos;t see that. Your father
              said it was too far to walk to and you know how your father hates
              to wait on big lines.&quot; I was in shock. I mean, how could
              29-million people see the future at the General Motors{" "}
              <em>Futurama</em> and my parents, who lived just a mere couple of
              miles away, not see it because there was a <em>line</em>! I was a
              little disappointed but not surprised. This was the summer of
              &apos;76 and my father had recently refused to go see the Tall
              Ships in New York Harbor for the Bicentennial because there would
              be too much traffic and too many people there.
            </p>

            <p>
              But my mom did give me two important things which I treasure to
              this day. One is a handful of black and white Polaroids from the
              Fair. And the other was the little fact that her father had worked
              at the Fair during its construction as an electrician! My
              grandfather was to visit soon from Florida and he would provide me
              with more behind-the-scenes details than I could imagine and take
              me on the first of my many visits to the site of the World&apos;s
              Fair: Flushing Meadows/Corona Park.
            </p>

            <figure className={styles.pairFigure}>
              <div className={styles.pairRow}>
                <Image
                  src="/images/odyssey/odys18.jpg"
                  alt="Craig's mom at the Fair"
                  width={240}
                  height={192}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys19.jpg"
                  alt="Fountains of the Fair and Bell System"
                  width={240}
                  height={192}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                left: Craig&apos;s mom atop the Seven-Up Pavilion Lookout |
                right: Fountains of the Fair lead to the Bell System Pavilion
                where Craig&apos;s grandfather worked as a union electrician
                during its construction.
              </figcaption>
            </figure>

            <p>
              When my grandfather finally arrived he was ready for my questions.
              I guess my mom had forewarned him of my budding interest in the
              Fair and her lack of details to satisfy my curiosity. My
              grandfather was <em>nothing</em> like the rest of my relatives. My
              mother&apos;s father was a self-taught very intelligent man of
              details and dreams. He could remember many experiences in his life
              vividly and could retell them in great detail many years later like
              it happened yesterday. He was also a man of ideas; most of them
              half-baked of course. But still he tried.
            </p>

            <p>
              Shortly after my grandfather&apos;s arrival I finally got him to
              sit down and tell me what he remembered most about working at the
              Fair. For the next few hours he regaled me with descriptions of the
              fantastic structures and the crush of people working on the site
              trying to get ready for the opening of the Fair. Working as a union
              electrician at the time my grandfather worked at the Bell Pavilion,
              Better Living Center and the Hall of Science, to name a few. I
              remember him telling us how interesting the jobs were since many of
              the exhibit areas required very unusual power and lighting work to
              meet their exhibit needs.
            </p>

            <p>
              I also remember how overwhelmed he said he was by the sheer size
              and scope of the site. He said it was 646 acres of organized chaos
              the likes of which he had never seen before or since. This from a
              man who had climbed bridges in the New York area to run power
              cables and attach lighting fixtures to illuminate those lofty
              structures! I asked him if we went to the Park, could we still see
              some of his handiwork? Much to my amazement he said we could go but
              doubted that we would find much of his work, or anybody else&apos;s
              since much of the Fair had been torn down after it closed. But
              none-the-less we began to plan our visit to the Park in the next
              week or so.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/odysseyoverview"
        explicitPrevious
        nextHref="/odyssey02"
      />
    </>
  );
}
