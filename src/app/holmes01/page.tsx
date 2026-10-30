import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HolmesHero } from "@/components/HolmesHero";
import { HolmesNavChrome } from "@/components/HolmesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../holmesEssay.module.css";

export const metadata: Metadata = {
  title: "To the Fair or Bust by Bike or by Bus! — nywf64.com",
  description:
    "Gary Holmes’ essay of a Liberty, N.Y. boy’s determination to reach the 1964/1965 New York World’s Fair — from nywf64.com.",
};

/**
 * Gary Holmes page stack (modeled on fisher01 / rm01):
 * site header → hero → Holmes nav → navy title bar → essay body → nav2 → site footer
 *
 * Body from legacy holmes02.html, remapped to /holmes01.
 */
export default function Holmes01Page() {
  return (
    <>
      <HolmesHero />

      <HolmesNavChrome />

      <article className={styles.article} aria-labelledby="holmes01-title">
        <header className={styles.titleBar}>
          <h1 id="holmes01-title" className={styles.titleBarMain}>
            Essay: <em>To the Fair or Bust by Bike or by Bus!</em>
          </h1>
          <p className={styles.titleBarByline}>... by Gary Holmes</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              <span className={styles.dropcap} aria-hidden="true">
                G
              </span>
              ARY HOLMES will probably tell you that his name appears too often
              at{" "}
              <span className={styles.brandNy}>nywf</span>
              <span className={styles.brandWf}>64</span>
              <span className={styles.brandCom}>.com</span>. I would tell Gary
              that it appears for good reason! He has contributed many articles
              and photos to{" "}
              <span className={styles.brandNy}>nywf</span>
              <span className={styles.brandWf}>64</span>
              <span className={styles.brandCom}>.com</span>. He was one of the
              first visitors to contact me after{" "}
              <span className={styles.brandNy}>nywf</span>
              <span className={styles.brandWf}>64</span>
              <span className={styles.brandCom}>.com</span> went live back in
              April 2000 telling me then that he&apos;d had a deep interest in
              the Fair since his many visits as a lad back in &apos;64 and
              &apos;65.
            </p>

            <p>
              If any reader was fortunate to attend the &quot;Saturday in the
              Park 2001&quot; gathering of Fair enthusiasts at Flushing Meadows
              Park in June you would have met Gary. And one of the things that
              you will long remember of the event is Gary serving Belgian
              Waffles out of the back of his car in a pouring rain because he
              wanted to recreate a special part of the Fair for those assembled,
              despite the lousy weather. He and his cousin got up at the crack
              of dawn to mix and bake Belgian Waffles for some 60 people.
              That&apos;s the Gary I know: Thoughtful, creative and always with
              something interesting up his sleeve.
            </p>

            <p>
              Now &quot;Saturday in the Park&quot; isn&apos;t the first time
              Gary has lost sleep because of the Fair. He once told me that one
              of the local New York television stations would end every
              evening&apos;s 11 o&apos;clock news broadcast with pictures of the
              day&apos;s events at the Fair. Little Gary would force himself to
              stay awake and sneak down the hall so that he could watch that
              broadcast every night. He had to be careful not to get caught as
              this was <em>way</em> past his bedtime and he knew his parents
              wouldn&apos;t be pleased. And that&apos;s not the only little
              deception he played on the family. There was a rule at his house:
              &quot;No TV during dinner Gary,&quot; which was <em>always</em> at
              6PM. So it wasn&apos;t beneath him to set the clocks ahead a few
              minutes if he knew a really juicy World&apos;s Fair news tidbit
              was coming up on the 6:25 Fair Update on Chanel 4 so the family
              would be finished eating before the broadcast! Gary told me
              &quot;Oh, I was nuts for the Fair! I couldn&apos;t get enough of
              it.&quot; Little did I know!
            </p>

            <p>
              This past summer, I was invited to spend a couple of days with him
              at his family&apos;s lake home in Upstate New York (actually, I
              think I probably invited myself). It was a great time and Gary is
              a wonderful host. He showed me some of his collection, of which he
              has a wealth of information on the Fair in articles and pictures
              clipped from newspapers and magazines at the time. Regulars to the
              website who have read through the{" "}
              <Link href="/legacies02">Legacies</Link> section probably know
              already that Gary possesses several remarkable pieces of
              memorabilia from the Fair in his collection. The most fabulous
              piece is one of the Ben Franklin characters that appeared in the
              Electric Company&apos;s Tower of Light show.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/holmes/holmes03.jpg"
                alt="Gary's Uncle Ben from the Tower of Light"
                width={250}
                height={443}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Gary&apos;s &quot;Uncle Ben&quot; from the Tower of Light
              </figcaption>
            </figure>

            <p>
              Gary told me that as the Fair drew to a close, he wrote to his
              favorite pavilions asking for a piece of &quot;his&quot; Fair to
              keep. &quot;I should probably have just asked for anything they
              could give me, but I asked for specific things. I had written
              nearly 20 letters and had gotten nearly 20 rejections. The closest
              I got was a letter from Scott Paper. I had asked for the little
              fawn figure that appeared at the start of their &apos;Enchanted
              Forest&apos; scene. The letter I got told me that they had, just
              the day before, sold the setting to someone and the bill of sale
              stated that the scene was to be sold in its entirety - otherwise
              they would have been happy to accommodate my request. I was very
              disappointed to come so close. But not long after that I got my
              letter from the Tower of Light.&quot;
            </p>

            <p>
              That letter, of course, told Gary that the Electric Power and
              Light exhibit was going to give him &quot;Uncle Ben&quot; and that
              he could pick him up at a warehouse location in Queens. After he
              stopped jumping and and down and screaming incoherently, his
              parents finally got the news as well! After the prize was
              retrieved it was discovered that the electrical control box they
              included that was supposed to control the electrical workings of
              Ben actually controlled &quot;Sam the Eagle&quot; -- a different
              character in the show. Undaunted, Gary set about rewiring the
              control box and eventually won First Place in his school&apos;s
              Science Fair with Ben as his project!
            </p>

            <p>
              While paging though Gary&apos;s collection I came across that
              letter, carefully preserved. I also came across the following
              article that was written for Liberty News in Upstate New York. It
              is mainly about Gary and how he rescued Ben -- a good story in
              itself. But it begins with a bit more information about Gary and
              his love of the Fair that, I&apos;m sure, will bring a smile to
              your face (as it did to mine!)
            </p>

            <div className={styles.newsExcerpt}>
              <p>
                Most families who visited the World&apos;s Fair found it
                delightful and chock full of all those marvelous things that
                make memories. But, to one small boy in the Liberty District,
                the Fair was awe-inspiring to his serious mind and persistent
                nature. Garry Holmes, of Liberty, N.Y., usually interested in
                math, science and social studies and none of the devilish things
                that most 12-year-olds think of, was so caught up with the great
                exhibits that the numerous visits made to the Fair with his
                parents, Lyman and Doris Holmes and his brother, Lyman Jr., were
                never enough to satisfy the unquenching quest for adventure
                which stirred within Garry. The Fair became his every thought.
                He started a scrap book collecting any and everything he could
                get his hands on concerning it. When his family announced that
                they had made their last trip to Flushing Meadow, Garry kept
                right on talking about going again.
              </p>

              <p>
                Following breakfast one morning, Garry gathered up his
                adventurous spirit, his bicycle and his $15 savings account and
                set out on his own for the Fair, 80 miles from home. Less than
                half way there the bike had a flat and, as luck would have it,
                this was the town of Wurtsboro, the place where Garry&apos;s
                father works as County National Bank branch manager. Knowing all
                too well that he would be severely reprimanded and having failed
                in his attempt at adventure, a sad and tired boy tucked his
                pride away and decided that, for the time being, surrender was
                the best resort. A few weeks later, resources regrouped, he
                slipped out on the family again, this time taking a bus, a
                course which he was sure would lead him right up to the front
                gate of his dreamland.
              </p>

              <p>
                Finding out, after a frantic search, that their son was on his
                way to New York, the Holmes&apos; decided to let him get it out
                of his system and, safe in the assurance that he would be
                returning on the evening bus, took no action to stop him this
                time. Alas, our adventurer got absorbed in the fireworks at the
                end of the day and missed the bus. &quot;The Fair police were a
                great help,&quot; says Mrs. Holmes who, after learning that her
                son was safe in their hands, made arrangements for him to stay
                with relatives in the city for the night.
              </p>

              <p>
                When the Fair closed and all seemingly returned to normal, Garry
                still had more surprises in store for his family. Convinced that
                he must own a souvenir of something once a part of the Fair, he
                began writing letters to Fair officials and exhibitors asking
                for treasures which he had seen. Twenty letters in all went out
                from Liberty, one of which was directed to Mr. Robert Moses,
                World&apos;s Fair head, who told Garry whom to contact in some
                of the cases of inquiry. Results at first were disheartening.
                Most of the replies stated that the exhibits had already be sold
                or committed in some way. Then, one triumphant day in November
                [1965], Mr. John G. Schumm, Asst. Manager of Show Operations for
                the Electric Power and Light Exhibit, put an end to all the
                dreaming by granting the wish. &quot;We reserved one of the
                Uncle Ben figures from the Tower of Light exhibit for you as per
                your request,&quot; was the answer Garry had been hoping for.
              </p>

              <p>
                With great anticipation, Uncle Ben was transported home but soon
                became a puzzle for the control box which accompanied him was
                the wrong one. Mrs. Holmes, a former N.Y.S. Electric &amp; Gas
                employee, says that when Garry sets his mind on something, he
                never quits until it is accomplished and when he is learning he
                gets so many facts that it soon gets to be collegiate. And so it
                was with this mystery control box, Garry became an electronics
                enthusiast, determined to get his Uncle Ben in working order.
                The project began, with Garry keeping a visitors book and
                dragging in everyone who would listen or who could help him
                figure out some of the complexities. Warren G. Herrick, district
                manager, was one of those visitors, working for hours on his
                hands an knees with Garry until, finally, Uncle Ben&apos;s head
                began to move, his lights went on and a major victory had come
                to pass.
              </p>

              <p>
                Liberty Central School&apos;s 13th annual Science Fair was the
                perfect setting to stage an encore for Uncle Ben and Garry set
                to work organizing an exhibit around him. The exhibit featured
                electronics and the volumes of research that Garry had gathered,
                explaining just how and why this animated character worked.
                Naturally, the judges were amazed and awarded the project First
                Place, a crowning touch to the adventure which had its beginning
                at the World&apos;s Fair through the adventurous mind of a boy.
              </p>
            </div>

            <figure className={styles.figure}>
              <Image
                src="/images/holmes/holmes01.jpg"
                alt="Gary Holmes introduces Uncle Ben at Liberty High School Science Fair"
                width={250}
                height={276}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionStrong}>
                  Gary Holmes introduces his &quot;Uncle Ben&quot; to visitors
                  at Liberty High School Science Fair.
                </span>{" "}
                [Photo courtesy Liberty News]
              </figcaption>
            </figure>

            <div className={styles.newsExcerpt}>
              <p>
                Following the success of the Science Fair, Uncle Ben was put on
                exhibit again in the lobby of the Liberty Office, visited daily
                by his producer. On one of his visits, someone asked Garry what
                he was going to be when he finished his formal education, &quot;A
                doctor,&quot; he replied, &quot;but second to that, a World&apos;s
                Fair planner.&quot; A determined lad like this may well make it
                a fact!
              </p>
            </div>

            <p>
              Well, well, well. I had heard the story about the boy who lived at
              the World&apos;s Fair for nearly a month by plucking coins out of
              the fountains for spending money. But here was a story that lay
              hidden since the days of the Fair and was begging to be told:
              &quot;To the Fair or Bust by Bike or by Bus&quot;
            </p>

            <p>
              I had an opportunity to talk with Gary&apos;s mother on my visit
              and I asked her about that little bus trip incident: &quot;Well, I
              thought he was sleeping in awfully late that morning,&quot; said
              Mrs. Holmes. &quot;I went in to shake him to wake him up and
              discovered that he&apos;d arranged the pillows under his bedcovers
              to make it look like he was still asleep there just like you see
              in the prison movies. I was frantic. I ran next door to his
              friend, Johnny&apos;s house, and asked him if he knew where Gary
              was. He thought for a long time and finally said &apos;Well Mrs.
              Holmes, I&apos;d tell you ... but it would make you real
              nervous.&apos; And then he told me he was on a bus on his way to
              the Fair!&quot;
            </p>

            <p>
              &quot;After that, Lyman and I thought &apos;Well, we&apos;d better
              let him go,&apos; if he&apos;d go to those lengths to get to the
              Fair. So after that, every time we heard of someone who was going
              to the Fair, we&apos;d ask them if they wanted to take Gary as
              their guide since he knew practically everything there was to know
              about the Fair. For a long time after that though, I took him
              everywhere I went -- even to the Garden Club functions -- because
              I wasn&apos;t about to let him out of my sight!&quot;
            </p>

            <p>
              Gary said &quot;My parents were and are excellent people who always
              did what they could to encourage my interests ... [but] they told
              me we weren&apos;t going to the Fair anymore and this was the only
              way I could go and get them to realize that I was serious about
              wanting to go.&quot; &quot;And, Hey! It worked! I probably got to
              go to the Fair another eight or nine times in &apos;65 because of
              it!&quot; he says with a chuckle. His mother smiles with that look
              that only time and distance from the event can bring a mother.
            </p>

            <p>
              But wait! The story doesn&apos;t end there. &quot;I missed my bus
              back, literally, by a minute,&quot; Gary told me. &quot;My mother
              made arrangements with my Uncle, who had been out on an anniversary
              celebration with his wife, to pick me up and I had to wait at the
              World&apos;s Fair police precinct for him to get home. On the way
              back to his house, after picking me up, he bumped the back of
              another car. A police car! After a hasty explanation and the
              display of a piece of paper from the World&apos;s Fair police
              releasing me to him, the police officer said something to the
              effect that my Uncle had already had enough annoyance for the
              night and let him go. The next morning, when he put me on the bus
              from the Port Authority back to Liberty, he handed me a bus
              schedule and very coyly suggested I use the time to learn how to
              read a bus schedule.&quot;
            </p>

            <p>
              Nearly 40 years later Gary&apos;s still enjoying the Fair as a
              collector and enthusiast. His interests have lead him on other life
              paths away from World&apos;s Fair planning. He didn&apos;t become a
              doctor either. An attorney now, by trade, he still enjoys the
              puzzles that legal research offers and he is a world traveler with
              an enthusiasm to explore and discover and learn. Obviously that
              hasn&apos;t changed since the days of the Fair either.
            </p>

            <p>
              Now would you like to hear the story about how Gary got to go to
              Expo &apos;70 in Japan? I think we&apos;ll save <em>that</em> for
              the next &quot;Saturday in the Park.&quot; I think it&apos;d be
              great with slides and audio! Right Gary?
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
            <p className={styles.copyright}>
              © Copyright 2001, Bill Young — do not reprint without permission.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/stories" explicitPrevious hideNext />
    </>
  );
}
