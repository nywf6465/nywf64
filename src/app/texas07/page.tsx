import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texas07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Texas Pavilions - Press Releases — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Texas Pavilions press releases from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall — Texas Pavilions - Press Releases.
 * Body from legacy texas07.html (press releases).
 * Stack: hero → TexasNavChrome → navy title → releases → Nav2Bar.
 */
export default function Texas07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Texas Pavilions & Music Hall">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/texasoverview/hero-banner.jpg"
            alt="Texas Pavilions & Music Hall at the 1964/1965 New York World&apos;s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TexasNavChrome />

      <article className={styles.article} aria-labelledby="texas07-title">
        <header className={styles.titleBar}>
          <h1 id="texas07-title" className={styles.titleBarMain}>
            Texas Pavilions - Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
            <section className={styles.release} aria-label="Press release 1">
              <div className={styles.releaseHeader}>
                <Image
                  src="/images/texas07/texas50.jpg"
                  alt="Texas Pavilions and Music Hall letterhead"
                  width={590}
                  height={197}
                  className={styles.letterhead}
                  unoptimized
                />
                <p className={styles.contact}>
                  Contact: <span className={styles.contactName}>MORT&nbsp;NATHANSON</span>
                </p>
              </div>
              <div className={styles.releaseBody}>
          <p className={styles.releaseHeadline}>TEXAS PAVILIONS RESULT OF</p>
          <p className={styles.releaseHeadline}><u>ONE MAN&apos;S LOVE FOR HIS STATE</u></p>
                <div className={styles.releaseText}>
          <p>One man&apos;s love for his State, and that State&apos;s confidence in</p>
          <p>him, is the prime reason that Texas will be represented at the</p>
          <p>New York World&apos;s Fair.</p>
          <p>It sounds incredible that this nation&apos;s most boastful State was</p>
          <p>not going to be represented in the largest exposition ever</p>
          <p>gathered together to show global progress. But it&apos;s a fact that</p>
          <p>only 14 of our 50 States have individual pavilions and that 6</p>
          <p>States have combined for a New England pavilion.</p>
          <p>Angus Wynne, Jr. one of Texas&apos; largest real estate developers</p>
          <p>and President of the Great Southwest Corporation, was</p>
          <p>stunned when he learned that State funds were not available to</p>
          <p>construct a Texas exhibit.</p>
          <p>Wynne, who had already contracted for 82,000 square feet in</p>
          <p>the Lake Amusement Area for the construction of a $4,00,000</p>
          <p>theatre, The Music Hall, to house a spectacular salute to</p>
          <p>Broadway and its songs called &quot;To Broadway With Love,&quot;</p>
          <p>offered to expand the area and personally underwrite the</p>
          <p>construction of the Texas Pavilions.</p>
          <p>When Governor John Connally accepted the offer, appointed</p>
          <p>Wynne to head the Texas exhibit, which, though officially</p>
          <p>representing the state, would be carried out under Wynne&apos;s</p>
          <p className={styles.pageNum}>-2-</p>
          <p>personal sponsorship as a private enterprise, a political storm</p>
          <p>broke. Connally, confronted by criticism, scotched all the</p>
          <p>scoofers with, &quot;I hope the people of Texas understand that my</p>
          <p>purpose is motivated only by a desire to see Texas represented</p>
          <p>in the manner in which it should be at a World&apos;s Fair. I think</p>
          <p>from his (Wynne&apos;s) experience at the Six Flags operation (one</p>
          <p>of the largest and most successful amusement areas in the</p>
          <p>World between Dallas and Fort Worth) and in light of what I</p>
          <p>know of his planned operations at the Music Hall, that he has</p>
          <p>the judgement and the people to handle the monumental task.&quot;</p>
          <p>To date Wynne has proven the Governor right. The Texas</p>
          <p>Pavilions will be covered, air-conditioned and heated, with</p>
          <p>fountains and facilities depicting modern Texas with its</p>
          <p>industrial aspects as well as tourist attractions. The exhibit will</p>
          <p>show the contrasting elements that give Texas its fascinating</p>
          <p>qualities, from the simple beauty of a longhorn steer to the</p>
          <p>modern, mechanized complexity of a National Aeronautical</p>
          <p>and Space Administration Exhibit.</p>
          <p>Wynne claims his interest in presenting Texas as an industrial</p>
          <p>state is a self-enlightened one, since the primary operation of</p>
          <p>the Great Southwest Corporation is the industrial development</p>
          <p>of 5,800 acres, formerly ranch and farm sites, now housing 70</p>
          <p>corporations with more than 2,300,000 square feet of building</p>
          <p>space. Included in this district are United States Steel,</p>
          <p>Anaconda, Container Corporation of America, National Cash</p>
          <p>Register, General Foods, Ozalid, Cummins Diesel, Vought</p>
          <p>Electronics and Frito-Lay. The industrial district is serviced by</p>
          <p>its own private railroad, which connects with the Texas and</p>
          <p className={styles.pageNum}>-3-</p>
          <p>Pacific and Chicago, Rock Island and Pacific major lines.</p>
          <p>&quot;Industry,&quot; Wynne claims, &quot;is coming to Texas due to the</p>
          <p>population explosion in major parts of the country. Texas has</p>
          <p>a climate inducive to industrial health and a productive labor</p>
          <p>force. Most people think in terms of cattle, not industry, that</p>
          <p>is why it is so important to have Texas represented at the</p>
          <p>World&apos;s Fair.</p>
          <p>Wynne, who was commissioned an Ensign in the Naval reserve</p>
          <p>in 1940, saw destroyer service in the Atlantic and Pacific and</p>
          <p>was discharged in 1945 as a Lieutenant Commander. He</p>
          <p>attended Washington and Lee University, was graduated from</p>
          <p>the University of Texas and in addition to his Presidency of the</p>
          <p>Great Southwest Corporation is Director and President of the</p>
          <p>Great Southwest Railroad, Inc., Chairman of the Executive</p>
          <p>Committee and director of the Great Southwest Warehouses,</p>
          <p>Director of the Dallas Power &amp; Light company and Director of</p>
          <p>the Wynnewood State Bank.</p>
          <p>Since taking on the sponsorship of his native State&apos;s Pavilions</p>
          <p>Wynne&apos;s investment in the World&apos;s Fair has risen to over</p>
          <p>$6,000,000. And yet, so certain is he of his state&apos;s</p>
          <p>attractiveness, so sure is he that his will be a &quot;fun pavilion&quot; that</p>
          <p>he never for an instance doubts the fact that his investment will</p>
          <p>bring back a profit.</p>
                </div>
              </div>
              <p className={styles.releaseSource}>
                Source: Texas Pavilions and Music Hall Press Release
              </p>
            </section>
            <hr className={styles.releaseRule} />
            <section className={styles.release} aria-label="Press release 2">
              <div className={styles.releaseHeader}>
                <Image
                  src="/images/texas07/texas50.jpg"
                  alt="Texas Pavilions and Music Hall letterhead"
                  width={590}
                  height={197}
                  className={styles.letterhead}
                  unoptimized
                />
                <p className={styles.contact}>
                  Contact: <span className={styles.contactName}>MORT&nbsp;NATHANSON</span>
                </p>
              </div>
              <div className={styles.releaseBody}>
          <p className={styles.releaseHeadline}>TEXAS&apos; MESSAGE AT THE FAIR IS THAT</p>
          <p className={styles.releaseHeadline}><u>TEXAS IS A FUN PLACE.</u></p>
                <div className={styles.releaseText}>
          <p>The message Texas wants to get across to the rest of the</p>
          <p>world, and will at the New York World&apos;s Fair, is that Texas is a</p>
          <p>fun place to be.</p>
          <p>Randall Duell, who went from architecture to art director of</p>
          <p>Metro Goldwyn Mayer and back to architecture, has worked</p>
          <p>out the details in his sketches and though a bull will tell the</p>
          <p>world that Texas is cattle country, though it will tell the world</p>
          <p>that Texas is cattle country with style; it will tell it with a sense</p>
          <p>of humor for that Black Angus bull will occupy the boudoir</p>
          <p>that Duell first created for Hollywood and the motion picture</p>
          <p>&quot;Marie Antoinette&quot;.</p>
          <p>The Texas Pavilions -- and it is plural -- will be surrounded by</p>
          <p>fountains, flowers and trees out in Flushing Meadow, New</p>
          <p>York. The $4,000,000 Music Hall Theatre will house a</p>
          <p>spectacular salute to the songs that made Broadway musicals</p>
          <p>the best in the world called &quot;To Broadway With Love&quot;.</p>
          <p>George Schaefer, producer of the Hallmark Hall of Fame will</p>
          <p>present it and Morta Da Costa -- &quot;Auntie Mame&quot; and &quot;Music</p>
          <p>Man&quot; -- stage and screen -- will direct it.</p>
          <p>There will be a waterfront scene -- and a shrimp bar to</p>
          <p>represent the Gulf Coast; the National Aeronautics and Space</p>
          <p>Administration will be represented; there will be a Gateway</p>
          <p className={styles.pageNum}>-2-</p>
          <p>to Mexico with wandering minstrels, there will be a Frontier</p>
          <p>Palace with shoot-outs and dancing girls--the kind whose</p>
          <p>entertainment thrilled the early pioneers. Everything will be</p>
          <p>done to remind you that Texas is not arid but a fun state.</p>
          <p>Randall Duell, though the architect, admits that one of the most</p>
          <p>important assets in proving this, cannot be put down to his</p>
          <p>planning board. &quot;The clean cut young people who&apos;ll work in</p>
          <p>the Texas Pavilions will be the thing that impresses the people</p>
          <p>from all over the world who will visit the World&apos;s Fair. We&apos;re</p>
          <p>flying our hosts and hostesses in--400 college students--and</p>
          <p>they will give the world a sample of Texas hospitality. All the</p>
          <p>architect and art director can do is provide the setting.</p>
          <p>And Duell has had plenty of experience in providing settings.</p>
          <p>After years of practicing as an architect in California--he</p>
          <p>planned the whole of Catalina Island, built a castle for</p>
          <p>William K. Wrigley, designed the Times Building and planned</p>
          <p>Boulder City-- he joined MGM as a designer and eventually art</p>
          <p>director. Included in his motion picture credits are such screen</p>
          <p>triumphs as &quot;Romeo and Juliet&quot;, &quot;Random Harvest&quot; and</p>
          <p>&quot;Ninotchka&quot;. Credit him also with the Screen Directors&apos;</p>
          <p>Building in Hollywood, a great many Bel-Air estates and</p>
          <p>Pleasure Island in Boston, Freedomland in New York and Six</p>
          <p>Flags Over Texas -- the amusement area between Fort Worth</p>
          <p>and Dallas, that has proven to be one of the outstanding fun</p>
          <p>spots in the world.</p>
          <p>Duell believes his years as a set designer sharpened his</p>
          <p>architectural imagination; they certainly sharpened his pubic</p>
          <p>relations sense for a prize Black Angus bull in a Louis XV</p>
          <p>chamber, a chamber sumptuous enough for Marie Antoinette</p>
          <p>on celluloid, is certain to get the message that Texas is certainly</p>
          <p>a fun place across to the public.</p>
                </div>
              </div>
              <p className={styles.releaseSource}>
                Source: Texas Pavilions and Music Hall Press Release
              </p>
            </section>
            <hr className={styles.releaseRule} />
            <section className={styles.release} aria-label="Press release 3">
              <div className={styles.releaseHeader}>
                <Image
                  src="/images/texas07/texas50.jpg"
                  alt="Texas Pavilions and Music Hall letterhead"
                  width={590}
                  height={197}
                  className={styles.letterhead}
                  unoptimized
                />
                <p className={styles.contact}>
                  Contact: <span className={styles.contactName}>MORT&nbsp;NATHANSON</span>
                </p>
              </div>
              <div className={styles.releaseBody}>
          <p className={styles.releaseHeadline}>NO YELLOW ROSE OF TEXAS AT</p>
          <p className={styles.releaseHeadline}>TEXAS PAVILIONS AT WORLD&apos;S FAIR</p>
                <div className={styles.releaseText}>
          <p>Don&apos;t look for the Yellow Rose of Texas in the Texas</p>
          <p>Pavilions at the New York World&apos;s Fair, for according to</p>
          <p>Charles Suddath, director of planting and maintenance of the</p>
          <p>Pavilions, the problems of cold winters and long transportation</p>
          <p>have virtually ruled out all Texas plant life around the Texas</p>
          <p>Pavilions.</p>
          <p>Landscape architect Suddath reported that there will be 400</p>
          <p>trees more than 14 feet tall, 500 rose bushes and 15,000 small</p>
          <p>plants on the three acre plot of the Texas Pavilions.</p>
          <p>But the roses will be pink -- not yellow; they will not even be</p>
          <p>Texas&apos; Tyler roses because bare-root Arizona-grown roses are</p>
          <p>hardier in northern climates. Even the pine trees in the area will</p>
          <p>be northern white pines, purchased in New York. Though</p>
          <p>mesquite trees are typically Texas, they were ruled out because</p>
          <p>they rarely tolerate transplanting even in their home state.</p>
          <p>Guests visiting the Texas Pavilions will see special exhibit areas</p>
          <p>showing the industrial and economic growth of the new Texas.</p>
          <p>They will view the six cultures of Texas-Spain, Mexico,</p>
          <p>France, the Republic of Texas, the Confederacy and the</p>
          <p>United States. They will be able to view the spectacularly lush</p>
          <p>musical &quot;To Broadway With Love&quot; produced by George</p>
          <p>Schaefer of Hallmark Hall of Fame and directed by Morton Da</p>
          <p>Costa who staged &quot;Auntie Mame&quot; and &quot;The Music Man&quot; in</p>
          <p className={styles.pageNum}>-2-</p>
          <p>the sumptuous $4,000,000 Music Hall. They will be able to eat</p>
          <p>in any of nine restaurants serving the different foods of Texas</p>
          <p>including the Frontier Palace with its shoot-aways and dance</p>
          <p>hall entertainers presenting the kind of show that thrilled the old</p>
          <p>pioneers. This and more. But they will not be able to see the</p>
          <p>Yellow Rose of Texas or any Texas flora.</p>
                </div>
              </div>
              <p className={styles.releaseSource}>
                Source: Texas Pavilions and Music Hall Press Release
              </p>
            </section>
            <hr className={styles.releaseRule} />
            <section className={styles.release} aria-label="Press release 4">
              <div className={styles.releaseHeader}>
                <Image
                  src="/images/texas07/texas50.jpg"
                  alt="Texas Pavilions and Music Hall letterhead"
                  width={590}
                  height={197}
                  className={styles.letterhead}
                  unoptimized
                />
                <p className={styles.contact}>
                  Contact: <span className={styles.contactName}>MORT&nbsp;NATHANSON</span>
                </p>
              </div>
              <div className={styles.releaseBody}>
          <p className={styles.releaseHeadline}>MUSIC HALL AT WORLD&apos;S FAIR</p>
          <p className={styles.releaseHeadline}><u>IS A $4,000,000 THEATRE</u></p>
                <div className={styles.releaseText}>
          <p>Despite a life expectancy of only two years, a $4,000,000</p>
          <p>theatre is being completed in Flushing Meadow, New York, to</p>
          <p>house &quot;To Broadway With Love,&quot; a show that will recreate a</p>
          <p>hundred years of American songs as lavishly and spectacularly</p>
          <p>as talent, money and the latest in electronic equipment will</p>
          <p>allow.</p>
          <p>Called the Music Hall, situated on 82,000 square feet in the</p>
          <p>amusement area adjacent to the Texas Pavilions, it has been</p>
          <p>designed for functional perfection backstage and in the</p>
          <p>auditorium.</p>
          <p>Though it seats 2,600 people, due to its 184 foot wide stage</p>
          <p>(3700 square feet larger than the Radio City Music Hall), no</p>
          <p>seat will be more than 100 feet from the center of action. The</p>
          <p>stage, set 50 feet from the floor, will include three revolving</p>
          <p>platforms and 12 electrically controlled pylons. A large,</p>
          <p>horseshoe-shaped runway, common in the Old American</p>
          <p>music halls, will extend from the stage to encompass the</p>
          <p>orchestra pit.</p>
          <p>The fact that there is no proscenium, as such, will give the</p>
          <p className={styles.pageNum}>-2-</p>
          <p>Music Hall all the benefits of theatre-in-the-round, without any</p>
          <p>of the disadvantages. Perfect sight lines from any seat in the</p>
          <p>theatre becomes an actual reality.</p>
          <p>George Schaefer who produced &quot;No Time for Sergeants&quot;</p>
          <p>among a score of Broadway hits, and who is currently</p>
          <p>producer of TV&apos;s Hallmark Hall of Fame will produce &quot;To</p>
          <p>Broadway With Love,&quot; which will be directed by Morton</p>
          <p>DaCosta, responsible for both the stage and screen versions of</p>
          <p>&quot;Auntie Mame&quot; and &quot;The Music Man.&quot;</p>
                </div>
              </div>
              <p className={styles.releaseSource}>
                Source: Texas Pavilions and Music Hall Press Release
              </p>
            </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/texas06"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texas08"
      />
    </>
  );
}
