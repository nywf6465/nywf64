import type { Metadata } from "next";
import Image from "next/image";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sersci06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The World's Fair History of Sermons from Science — Sermons from Science — nywf64.com",
  description:
    "Eric Paddon’s essay on the World’s Fair history of Sermons from Science — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science — The World's Fair History of Sermons from Science.
 * Body from legacy sersci06.html (Eric Paddon essay + promotional pamphlet).
 *
 * Stack: hero → SersciNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Sersci06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sermons from Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/serscioverview/hero-banner.jpg"
            alt="Sermons from Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SersciNavChrome />

      <article className={styles.article} aria-labelledby="sersci06-title">
        <header className={styles.titleBar}>
          <h1 id="sersci06-title" className={styles.titleBarMain}>
            <em>The World&apos;s Fair History of Sermons from Science</em>
          </h1>
          <p className={styles.titleBarByline}>
            ... an essay by Eric Paddon
          </p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.pamphletSpread}>
            <figure className={styles.pamphletFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sersci06/sersci04.jpg"
                  alt="Pamphlet Cover"
                  width={290}
                  height={477}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.source}>
                SOURCE: Pavilion Promotional Pamphlet
              </figcaption>
            </figure>

            <div className={styles.pamphletCopy}>
              <p>
                This presentation has been developed by the Moody Institute of
                Science of Los Angeles and is one of twelve different programs
                featured each day for your pleasure.
              </p>
              <p>
                For the convenience and enjoyment of our visitors who prefer a
                language other than English, the films can be heard in a variety
                of languages through the use of ear-phones located on the arm of
                your chair. A total of thirteen different languages are
                available.
              </p>
              <p>
                For further information check a member of the staff as you leave
                or consult the Information Center at the entrance of the
                building.
              </p>

              <div className={styles.requestForm}>
                <p className={styles.requestNote}>
                  If you desire any of the above material leave the request with
                  one of the Staff
                </p>
                <p>SERMONS FROM SCIENCE,</p>
                <p>123 West 57th Street, New York 19, N.Y.</p>
                <p>I WOULD LIKE:</p>
                <ul className={styles.requestList}>
                  <li>
                    __ the free booklet on the Sermons From Science Films
                  </li>
                  <li>__ a free home study book</li>
                  <li>__ a film catalogue and list of distributors</li>
                  <li>__ further information</li>
                </ul>
                <div className={styles.requestFields}>
                  <p>NAME_____________________________________________</p>
                  <p>ADDRESS__________________________________________</p>
                  <p>CITY_________________________STATE_______________</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              Of the six major religion pavilions at the 1964 World&apos;s Fair,
              the one that would have earned the award for most previous Fair
              experience was Moody Bible Institute&apos;s &quot;Sermons From
              Science.&quot; The 1964 Fair marked the third time that a Sermons
              From Science pavilion had been part of a major World&apos;s Fair,
              with previous participation at the 1939 San Francisco World&apos;s
              Fair (the less remembered one to take place that year) and the
              1962 Century 21 Exposition in Seattle. Ultimately,
              &quot;Sermons&quot; would also participate in the next two major
              Fairs to take place in North America: Montreal&apos;s Expo &apos;67
              and the 1974 Spokane World&apos;s Fair.
            </p>

            <p>
              In each of these fairs, the message of &quot;Sermons&quot;
              remained the same as it had been since the program was founded in
              1931 by Irwin Moon. A California pastor with a long-time childhood
              fascination with science, Moon hit upon the idea of using
              scientific demonstrations as a way of communicating Biblical
              concepts to younger audiences. Whether consciously or not, this
              represented an attempt to move away from the impression left in
              the 1920s in the wake of the Scopes Trial that scientific concepts
              and traditional Biblical beliefs could not be easily reconciled.
            </p>

            <p>
              Moon&apos;s approach was to use experiments from the areas of
              physics, biology and chemistry that to him would demonstrate the
              reality of a &quot;Divine plan of creation&quot; in the world and
              the universe. By spotlighting the intricacies of scientific
              concepts in actions in an eye-catching experiment, this would
              communicate the broader idea of the universe&apos;s intricate
              patterns that indicated the reality of a Divine Creator.
              Ultimately, this would represent a more positive approach to
              defending the idea of God as creator of the Universe by means
              other than a simple appeal to the Book of Genesis. Somewhat
              prudently, these demonstrations did not focus on challenging
              evolutionary theory or defending the 19th century concept of a
              young Earth (indeed, Moon and most evangelicals by this point had
              reconciled themselves to the concept of an old Earth, even while
              remaining skeptical of macro-evolution, the idea of one species
              changing into another as opposed to evolution within a species),
              but instead focused on the more basic concept of the presence of
              God in the universe.
            </p>

            <p>
              Moon&apos;s demonstrations became so popular with audiences that
              ultimately he gave up his pastorate to devote his full attention
              to the science ministry. To reach a broader audience, he began
              using filmed demonstrations for church and national distribution.
              By 1939, he had linked his &quot;Sermons From Science&quot;
              program to Chicago-based Moody Bible Institute and was traveling
              all over the country. That same year saw the first &quot;Sermons
              From Science&quot; program at a World&apos;s Fair in San
              Francisco, and this perhaps brought the greatest national
              attention to the ministry. During World War II, Moon focused on
              America&apos;s servicemen with many &quot;Sermons&quot;
              presentations at military bases, and after the war, the use of
              films for distribution to servicemen remained a vital component of
              the Sermons ministry.
            </p>

            <p>
              By the late 1940s, Moon had decided to cut back on doing the live
              demonstrations himself so he could concentrate instead on
              producing new science films for Moody. Among the many titles that
              Moon would help produce over the next two decades (and all of
              which were ultimately shown at the 1964 Fair) were &quot;God Of
              the Atom,&quot; &quot;Red River of Life,&quot; &quot;Experience
              With an Eel&quot; and &quot;City Of the Bees.&quot; The live
              demonstrations and traveling ministry would now be done by George
              Speake, who retained the same format Moon had pioneered. Speake
              would hold the position of chief demonstrator of the &quot;Sermons
              From Science&quot; program for the next thirty years, before
              retiring in the mid-1970s.
            </p>

            <p>
              The effort Speake put into the program was almost limitless. At
              the 1962 Century 21 Fair in Seattle, Speake&apos;s workload
              involved doing several performances a day for six months
              single-handedly. His efforts paid off as &quot;Sermons From
              Science&quot; reported a 92% occupancy rate at Seattle with over
              400,000 people attending.
            </p>

            <p>
              With the program considered a success at Seattle, it was no
              surprise that &quot;Sermons From Science&quot; would find a place
              at the 1964-1965 World&apos;s Fair in New York. In late 1962, New
              York based pastors of the Christian Life Convention organized a
              Sermons From Science Committee to make the necessary pitch to the
              Fair organizers and receive approval for a pavilion. With Robert
              Moses already showing considerable deference to religious
              organizations and finding a place for them at the Fair, gaining
              approval turned out to be an easy task.
            </p>

            <p>
              Although considered in Fair literature as part of the
              International section, the Sermons pavilion was ultimately located
              close to some of the more prominent Industrial pavilions, with the
              Kodak Pavilion its nearest neighbor. The building&apos;s design
              (by H. Robley Saunders) contained a unique &quot;pie-shaped&quot;
              roof and a 500 seat auditorium that would host both the live
              demonstrations (in which because of the heavier workload, Speake
              would alternate with James Moon, son of the program&apos;s
              founder) and showings of Moody Science Institute films. Their
              intent, as a 1963 preview brochure noted, was to be
              &quot;accurate from a scientific point of view; exciting from an
              entertainment point of view; stimulating from an intellectual
              point of view; and faithful from a Biblical point of view.&quot;
            </p>

            <p>
              Among the many live demonstrations Speake and Moon used to
              illustrate their scriptural points (according to the catchy
              descriptions in their literature) were &quot;Metal Rings Floating
              in Air&quot; (when placed over an electric transformer);
              &quot;Invisible Energy Sets Steel Aflame&quot; (steel wool
              actually, placed inside a copper coil fixed to a transformer);
              &quot;Frying an Egg On a Cold Stove&quot; (the key being the
              presence of a coil of wire inside the cold plate affixed to a high
              voltage source, which demonstrated the &quot;selective nature of
              physical forces&quot;); and &quot;The Cry that Can Shatter
              Glass&quot; (placing a glass above an &quot;electronic voice&quot;
              and adjusting it to the right frequency).
            </p>

            <p>
              But by far, the most famous demonstration in the entire
              &quot;Sermons From Science&quot; program, the one that had been
              its signature for many years and which always attracted the most
              attention, was the &quot;Million Volts of Man-Made
              Lightning.&quot; Even those not necessarily interested in the
              pavilion&apos;s religious message always found this demonstration
              worth seeing. This was when Speake or Moon would literally allow a
              million volts of electricity to safely pass through their body
              without causing any injury.
            </p>

            <p>
              As founder Irwin Moon explained in a 1957 filmed demonstration,
              the key was changing the frequency from 60 cycles of alternating
              current to 65,000. Once this was done, &quot;a lot of power can be
              taken through the human body.&quot; The demonstrator, Speake or
              Moon, then removed his shoes and stood on top of the transformer,
              holding a pine board in one hand to provide the visual
              demonstration of the electricity&apos;s power as it discharged
              from the body. The command &quot;Lights!&quot; was given to darken
              the auditorium, and then came the next command, &quot;On!&quot;
              Astonished spectators then saw the sparks as the wood ignited
              demonstrating that it was no trick and that one million volts of
              electricity were indeed passing through Speake&apos;s body with
              the only visible damage being caused to the wood he held. Once
              this was done the central lesson of relating science to scripture
              was taught. Natural laws needed to be followed in order for this
              demonstration to be performed safely and violating those natural
              laws would result in certain death. In the same way, Speake would
              argue, man needed to follow the spiritual laws set forth by God in
              the Bible to avoid the certainty of spiritual death. Such lessons
              were the things that Speake and Moon ultimately hoped would impact
              the audience even more then their fascination with the visual
              demonstrations.
            </p>

            <p>
              Ultimately, &quot;Sermons From Science&quot; was one of the few
              Fair pavilions to enjoy a gradual increase in attendance over the
              two year run of the Fair. Final statistics put 1964 attendance at
              555,429 while in 1965 that rose to 802,733. When the one
              millionth pavilion visitor, a businessman from Alexandria,
              Virginia came on August 21, 1965, the occasion was marked by an
              informal ceremony (and in a further boon to the Sermons From
              Science program, the gentleman even accepted counseling afterwards
              and professed a newfound Christian commitment). When the Fair
              closed, Sermons From Science was just shy of making back its
              overall costs for the two years of the Fair, but the indications
              were that one set of post-Fair contributions from supporters would
              be enough to make up the remaining difference. Overall, as
              pavilion director Scott Nyborg noted, the results were considered
              a success from the organization&apos;s standpoint.
            </p>

            <p>
              After the Fair, &quot;Sermons From Science&quot; resumed its
              traveling ministry across the country and added to its
              World&apos;s Fair legacy with pavilions at Montreal in 1967, and
              Spokane in 1974. George Speake retired in 1976 and was succeeded
              by Dean Ortner who continues to head the ministry today. In 2001,
              &quot;Sermons From Science&quot; ended its 55 year affiliation
              with Moody Bible Institute in order to base its operations on the
              west coast in Whittier, California. The program is now called
              &quot;Wonders Of Science&quot; and the focus on using scientific
              demonstrations as a way of entertaining audiences while raising
              challenging questions about the presence of God in the world
              remains the same as it was when Irwin Moon first started the
              program.
            </p>
          </div>

          <figure className={styles.rendering}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sersci06/sersci03.jpg"
                alt="Artist's Rendering"
                width={600}
                height={365}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <div className={styles.architectBox}>
              <h2>
                Sermons From Science Pavilion - 1964/1965 New York World&apos;s
                Fair
              </h2>
              <p>
                The building is a 500-seat circular air-conditioned auditorium
                35&apos; in height, 80&apos; in diameter, with a passage
                connecting to a smaller circular wing which houses a conference
                hall on the main level. The second floor of this wing is planned
                for the staff offices and lounge. The auditorium has a circular
                scalloped shell roof supported beyond the building by colorful
                fins decorated with abstract designs. The entrance to the
                auditorium is 8&apos; above the ground and is approached by a
                65&apos; long ramp, which follows the curve of the building
                outside the line of fins and over a reflecting pool. Seats and
                audio equipment are placed along the ramp for the comfort and
                interest of the waiting queue. The reflecting pool boarding the
                building is decorated with fire and water fountains and a
                sculptured standard rising 60&apos; which supports and
                ever-changing color sphere.
              </p>
              <div className={styles.architectCredit}>
                <p>H. Robley Saunders</p>
                <p>Architect</p>
              </div>
            </div>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sersci05"
        explicitPrevious
        overviewHref="/serscioverview"
        nextHref="/sersci07"
      />
    </>
  );
}
