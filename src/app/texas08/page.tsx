import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texas08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "To Broadway with Love - Press Releases — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "To Broadway with Love press releases from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall — To Broadway with Love - Press Releases.
 * Body from legacy texas08.html (press releases).
 * Stack: hero → TexasNavChrome → navy title → releases → Nav2Bar.
 */
export default function Texas08Page() {
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

      <article className={styles.article} aria-labelledby="texas08-title">
        <header className={styles.titleBar}>
          <h1 id="texas08-title" className={styles.titleBarMain}>
            To Broadway with Love - Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
            <section className={styles.release} aria-label="Press release 1">
              <div className={styles.releaseHeader}>
                <Image
                  src="/images/texas08/texas50.jpg"
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
          <p className={styles.releaseHeadline}>GREAT ARRAY OF SONGWRITERS HAVE DONE SCORE AND LYRICS FOR WORLD&apos;S FAIR</p>
          <p className={styles.releaseHeadline}>MUSICAL &quot;TO BROADWAY WITH LOVE&quot;.</p>
                <div className={styles.releaseText}>
          <p>&quot;To Broadway With Love&quot;, the spectacular musical salute to</p>
          <p>the songs this nation has sung and hummed during the last</p>
          <p>century, which will open at the World&apos;s Fair Music Hall in</p>
          <p>Flushing Meadow in April has the greatest name-line-up of</p>
          <p>songwriters ever gathered for one show.</p>
          <p>Dealing -- as the George Schaefer-Morton Da Costa musical</p>
          <p>does, with recreating each decade via its songs -- but with</p>
          <p>completely new conceptions as to how those songs should be</p>
          <p>presented on the stage -- the show&apos;s songs were written by a</p>
          <p>who&apos;s who of the music world.</p>
          <p>Richard Rogers, Oscar Hammerstein, Alan Jay Lerner,</p>
          <p>Frederick Loewe, Cole Porter, Irving Berlin, Harold Rome,</p>
          <p>Harold Arlen, Kurt Weill, Ogden Nash, Jule Styne, Sammy</p>
          <p>Cahn, Leonard Bernstein, Betty Comden, Adolph Green,</p>
          <p>Howard Dietz, Arthur Schwartz, Al Dubin, Harry Warren, Joe</p>
          <p>Burke, Hugh Martin, Ralph Blane, Leo Robin are just a few of</p>
          <p>the songwriters represented in the show.</p>
          <p>Among the old-timers are Stephen Foster, George M. Cohan,</p>
          <p>Henry Blossom, Victor Herbert, Franz Lehar, Gus Edwards,</p>
          <p>Ballard MacDonald, James Hanley and Roger Wolfe Kahn.</p>
          <p>Certainly as promising a musical line-up for one show as has</p>
          <p>ever been gathered together.</p>
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
                  src="/images/texas08/texas50.jpg"
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
          <p className={styles.releaseHeadline}>SHOW BASED ON HIT SONGS DURING THE</p>
          <p className={styles.releaseHeadline}>LAST CENTURY AT WORLD&apos;S FAIR.</p>
                <div className={styles.releaseText}>
          <p>The theme for &quot;To Broadway With Love&quot;, the spectacular</p>
          <p>musical which will be seen in the World&apos;s Fair&apos;s Music Hall in</p>
          <p>Flushing Meadow New York, comes April 22, is that by its</p>
          <p>songs so shall you know a nation.</p>
          <p>In conceiving the remarkable musical George Schaefer and</p>
          <p>Morton Da Costa, musical director Franz Allers and Philip</p>
          <p>Long the orchestrator, selected songs that, via melody, lyrics</p>
          <p>and ideas, could well be termed &quot;an entertaining history of</p>
          <p>Broadway musical hits and other songs the nation sang.&quot;</p>
          <p>There are no stars, per se, in the musical, since its three shows</p>
          <p>a day, seven days a week schedule necessitate two completely</p>
          <p>different casts. Factually the songs might be termed stars of</p>
          <p>the show.</p>
          <p>With an original theme song &quot;To Broadway With Love&quot; by</p>
          <p>Jerry Bock and Sheldon Harnick to keep the show together,</p>
          <p>the musical, visually and lyrically, but via production numbers</p>
          <p>that have nothing to do with the recreation of the way they</p>
          <p>were originally presented, takes its audiences on a trip thru</p>
          <p>America&apos;s greatest contribution to the theatre --musical</p>
          <p>comedy.</p>
          <p>Who are the songwriters Schaefer and Da Costa think are most</p>
          <p>representative? They start with Stephen Foster and his &quot;Old</p>
          <p>Folks at Home&quot;, more popularly known as &quot;Swanee River&quot;;</p>
          <p className={styles.pageNum}>-2-</p>
          <p>move on to George M. Cohan&apos;s &quot;The Yankee Doodle Boy&quot;</p>
          <p>and &quot;Mary&apos;s a Grand Old Name&quot;. Henry Blossom, the world&apos;s</p>
          <p>most forgotten lyricist -- he wrote the words for most of</p>
          <p>Victor Herbert&apos;s songs -- and Mr. Herbert are represented by</p>
          <p>&quot;Every Day Is Ladies&apos; Day With Me&quot;; Franz Lehar -- though</p>
          <p>not American -- is included with his &quot;The Merry Widow</p>
          <p>Waltz&quot;.</p>
          <p>Since humor is an integral part of any good musical, and since</p>
          <p>&quot;To Broadway With Love&quot; will have no dialogue-songs and</p>
          <p>dances-the producer and director of the show have gone to</p>
          <p>&quot;He&apos;d Have To Get Under-Get Out and Get Under to Fix Up</p>
          <p>His Automobile&quot;, a song written in 1913 by Grant Clarke and</p>
          <p>Edgar Leslie to the music of Maurice Abrahams. Gus</p>
          <p>Edwards&apos; and Edward Maden&apos;s &quot;By The Light of The Silvery</p>
          <p>Moon&quot;; George M. Cohan&apos;s &quot;Over there&quot; &quot;Three Wonderful</p>
          <p>Letters From Home&quot; by Joe Goodwin, Ballard MacDonald and</p>
          <p>James F. Hanley and &quot;Would you Rather be a Colonel With an</p>
          <p>Eagle on Your Shoulder, Or a Private With a Chicken on Your</p>
          <p>Knee&quot;, by Sidney D. Mitchell and Archie Gottler, are used to</p>
          <p>recreate a specific time area.</p>
          <p>On the world&apos;s largest indoor stage, with three revolving</p>
          <p>platforms and twelve electrically controlled pylons, with the</p>
          <p>world&apos;s tallest and most beautiful showgirls, with some of the</p>
          <p>most talented terpsichoreans and finest voices, &quot;To</p>
          <p>Broadway With Love&quot; will utilize the Ballard MacDonald-</p>
          <p>James F. Hanley hit of 1920 &quot;Rose of Washington Square&quot; as</p>
          <p>balance to Armand J. Piron&apos;s &quot;I wish I Could Shimmy Like My</p>
          <p>Sister Kate&quot;. Jack Yellen and Milton Ager&apos;s &quot;Ain&apos;t She Sweet&quot;,</p>
          <p>Irving Caesar and Joseph Meyer-Roger Wolfe Kahn&apos;s &quot;Crazy</p>
          <p>Rythm&quot; and Bob Carlton&apos;s &quot;Ja-Da&quot;, expose another phase of</p>
          <p>American music. As does &quot;Tip Toe Thru The Tulips With</p>
          <p>Me&quot; by Al Dubin and Joe Burke. Cecil Mack and Jimmy</p>
          <p>Johnson&apos;s &quot;Charleston&quot; and Herb Magidson and Con</p>
          <p className={styles.pageNum}>-3-</p>
          <p>Conrad&apos;s &quot;The Continental&quot;.</p>
          <p>Still in the terrific thirties and the show picks up &quot;Dancing In</p>
          <p>The Dark&quot;, by Howard Dietz and Arthur Schwartz &quot;Lullaby of</p>
          <p>Broadway&quot; by Al Dubin and Harry Warren and &quot;Get Happy&quot;</p>
          <p>by Arlen and Ted Koehler.</p>
          <p>Moving into the forties with Cole Porter&apos;s &quot;Another Opening,</p>
          <p>Another Show&quot;, and Irving Berlin&apos;s &quot;There&apos;s No Business Like</p>
          <p>Show Business&quot;, &quot;To Broadway With Love&quot; changes its pace</p>
          <p>with the Ogden Nash-Kurt Weill &quot;Speak Low&quot;. &quot;Diamonds</p>
          <p>Are A Girl&apos;s Best Friend&quot; by Leo Robin and Jule Styne,</p>
          <p>&quot;Buckle Down, Winsocki&quot; by Hugh Martin and Ralph Blane</p>
          <p>and the great Rodgers and Hammerstein hit &quot;Bali Ha&apos;i&quot;.</p>
          <p>Betty Comden, Adolph Green and Leonard Bernstein are</p>
          <p>represented by &quot;New York, New York&quot;, Harold J. Rome by</p>
          <p>&quot;F.D.R. Jones&quot;, Cole Porter by &quot;C&apos;Est Magnifique&quot;, Alan Jay</p>
          <p>Lerner and Frederick Loewe by &quot;Get Me To the Church on</p>
          <p>Time&quot; and &quot;Camelot&quot;.</p>
          <p>Other Rodgers and Hammerstein songs are &quot;Carousel Waltz&quot;,</p>
          <p>&quot;Hello Young Lovers&quot; and Richard Rodgers&apos; solo effort &quot;The</p>
          <p>Sweetest Sounds&quot;. Irving Berlin also has &quot;It&apos;s A Lovely Day</p>
          <p>Today&quot;. Harold Rome&apos;s second song in the show is &quot;Wish</p>
          <p>You Were Here&quot;. Arnold Horwitt and Albert Hague&apos;s big hit</p>
          <p>&quot;Young and Foolish&quot;, &quot;The Land of Milk and Honey&quot; by Jerry</p>
          <p>Herman and &quot;Hey Look Me Over&quot; by Carolyn Leigh and Cy</p>
          <p>Coleman are also included in &quot;To Broadway With Love&quot;.</p>
          <p>There are a few songs that have been left out of this rundown,</p>
          <p>but these songs should give you some idea of the scope, the</p>
          <p>range and the quality that will make &quot;To Broadway With Love&quot;</p>
          <p>the outstanding theatrical event at the New York World&apos;s Fair</p>
          <p>.</p>
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
                  src="/images/texas08/texas50.jpg"
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
          <p className={styles.releaseHeadline}><u>&quot;BY ITS MUSIC YOU CAN TELL A NATION&quot;</u></p>
                <div className={styles.releaseText}>
          <p>&quot;You can tell a country by its music; you can almost see each</p>
          <p>different decade as the rhythm and lyrics change.&quot; Morton</p>
          <p>DaCosta, who directed the stage and screen versions of</p>
          <p>&quot;Auntie Mame&quot; and &quot;The Music Man&quot; was doing the final</p>
          <p>work preparatory before placing two completely different</p>
          <p>companies into rehearsal for &quot;To Broadway With Love,&quot;</p>
          <p>which will be the big legitimate musical at the New York</p>
          <p>World&apos;s Fair.</p>
          <p>Almost all of the problems, and there have been many in the</p>
          <p>ten months since he and George Schaefer conceived the</p>
          <p>spectacular salute to American musical comedy, which will be</p>
          <p>housed in the Flushing Meadow Music Hall a $4,000,000</p>
          <p>Theatre being built for just this show, were momentarily</p>
          <p>solved.</p>
          <p>&quot;Talk about the problems. Where do you start, the</p>
          <p>jurisdictional disputes of the unions, the last minute changing</p>
          <p>of certain songs because rights were not clearly defined,</p>
          <p>they&apos;re over with. Let&apos;s talk about concept.&quot;</p>
          <p>DaCosta and Schaefer had decided to present a history of</p>
          <p>American musical comedy --&quot; musical comedy because this is</p>
          <p>the field in the theatre, in which, without the faintest shadow</p>
          <p className={styles.pageNum}>-2-</p>
          <p>of a doubt, we excel&quot; -- which would take a tour from the early</p>
          <p>minstrel shows and &quot;The Black Crook&quot; to the present. &quot;Each</p>
          <p>decade will be</p>
          <p>presented thru the songs of that particular</p>
          <p>period, but we are not repeating</p>
          <p>the production numbers from</p>
          <p>the original show, this would be a waste of the</p>
          <p>technical</p>
          <p>improvements, the advance in musical comedy technique. We</p>
          <p>are</p>
          <p>trying to tell the story of that particular moment in time via</p>
          <p>its music.</p>
          <p>&quot;It is one of the most exciting things I&apos;ve ever worked on; and</p>
          <p>one of the</p>
          <p>most</p>
          <p>frustrating. It is also the biggest challenge. Can</p>
          <p>you imagine directing</p>
          <p>two</p>
          <p>companies -- they alternate daily</p>
          <p>what with three shows a day, seven</p>
          <p>days a</p>
          <p>week -- in the exact</p>
          <p>same patterns. You must remember, &quot; Da Costa</p>
          <p>continued,&quot;</p>
          <p>that there is no dialogue in this entertainment. Music, lyrics,</p>
          <p>songs and dances, a panorama of nostalgia -- dating back to</p>
          <p>the early shows</p>
          <p>and the operettas, combining the excitement of</p>
          <p>the circus and the satisfaction</p>
          <p>of modern musicals. And we&apos;ll</p>
          <p>feature glamorous girls as girls should be.</p>
          <p>&quot;One of the things missing from Broadway in the last two</p>
          <p>decades&quot; admitted</p>
          <p>Mr. DaCosta,&quot; is the glamour the highly</p>
          <p>publicized showgirls in the days of Ziegfeld, Carroll and</p>
          <p className={styles.pageNum}>-3-</p>
          <p>White, brought to the Great White Way scenes. The tall,</p>
          <p>beautiful girls disappeared from the theatre as the dancing</p>
          <p>requirements were made tougher and only the stars could fake</p>
          <p>singing. With actors in singing roles you needed voices to</p>
          <p>back them up.</p>
          <p>&quot;So the lovelies who could do nothing but walk, slink, entice</p>
          <p>on stage disappeared into the few nightclubs large enough to</p>
          <p>have a couple of showgirls. But nightclubs don&apos;t have the</p>
          <p>glamour of the theatre despite Vegas and a couple of other</p>
          <p>places.</p>
          <p>&quot;At the Music Hall in the Texas Pavilions we&apos;re bringing back</p>
          <p>the showgirls in their luxurious loveliness. We&apos;re glamorizing</p>
          <p>them onstage and publicizing them off-stage. Between that, a</p>
          <p>large chorus of fantastically great dancers, a large group of</p>
          <p>magnificent singing voices and principals who can sing and</p>
          <p>dance, plus the music that made this nation the number one</p>
          <p>musical comedy producers we have a boquet to songwriters in</p>
          <p>&apos;To Broadway With Love&apos; that we think will be one of the most</p>
          <p>entertaining shows, not only at the Fair, but in New York.&quot;</p>
          <p className={styles.endMark}>#     #     #</p>
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
                  src="/images/texas08/texas50.jpg"
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
          <p className={styles.releaseHeadline}>SHOWGIRLS TO BRING BACK GLAMOUR</p>
          <p className={styles.releaseHeadline}>AT THE FAIR</p>
                <div className={styles.releaseText}>
          <p>When Broadway was the glamour packed street of Florenz</p>
          <p>Ziegfeld, Earl Carroll and George White, the showgirl per se</p>
          <p>were synonymous with the glittering Bright White Way.</p>
          <p>Before the days of Hollywood stars and starlets, the mink clad</p>
          <p>-</p>
          <p>off-stage, unclad-on-stage beauties were responsible for</p>
          <p>injecting excitement into the theatrical area.</p>
          <p>Since the lights of Broadway have been dimmed, showgirls,</p>
          <p>like the old fashioned musical comedies that set out to entertain</p>
          <p>the public, have gone on their way to some unknown Valhalla,</p>
          <p>while musical comedy books have become almost as serious</p>
          <p>as Tennessee Williams&apos; plays.</p>
          <p>The news today is good news. Showgirls are going to come</p>
          <p>into their own again at New York&apos;s World&apos;s Fair in a show</p>
          <p>called &quot;To Broadway With Love&quot;, which will be housed in the</p>
          <p>$4,000,000 Music Hall in the Texas Pavilions in Flushing</p>
          <p>Meadow.</p>
          <p>George Schaefer and Morton Da Costa, who are presenting the</p>
          <p>spectacular salute to the songs the nation has sung and</p>
          <p>hummed for the last century, are bringing back the glamour that</p>
          <p>gleams from these six foot, beautifully proportioned Amazons,</p>
          <p>via 16 of the most pulchritudinous dazzlers a six months</p>
          <p>search could unearth.</p>
          <p>There are no stars in the two companies that will present &quot;To</p>
          <p>Broadway With Love&quot;, three times a day, seven days a week,</p>
          <p>comes April 22nd.</p>
          <p className={styles.pageNum}>-2-</p>
          <p>Who are these glamorzons that Schaefer and Da Costa expect</p>
          <p>to dazzle the 70 million visitors to the Fair with? How do they</p>
          <p>differ from the old time showgirl? Our reporter with a</p>
          <p>penchant for statistics investigated the question thoroughly and</p>
          <p>has come up with some pertinent information.</p>
          <p>First -- the old time showgirls did not have much more than a</p>
          <p>grammer school education, it that. They started work at</p>
          <p>fourteen or fifteen, with no visible talent but their looks.</p>
          <p>Today&apos;s showgirl is from a different world.</p>
          <p>The girls who will grace &quot;To Broadway With Love&quot; can slink</p>
          <p>across a stage with the best of the old timers: they can match</p>
          <p>them feature by feature and win hands down; and today&apos;s crop</p>
          <p>of beauties are talented as well as pretty.</p>
          <p>Of the sixteen girls in the Music Hall musical six stopped their</p>
          <p>formal education after graduating from high school; but of the</p>
          <p>six, four continued musical and dramatic studies. Five of the</p>
          <p>girls have college degrees, four of the girls have had a</p>
          <p>minimum of two years of college and one went three years</p>
          <p>before leaving and is continuing at night school to earn her</p>
          <p>degree. One majored in psychology; most majored in drama</p>
          <p>and music.</p>
          <p>The overall average height is 5 ft. 9 1/2 -- though on stage the</p>
          <p>girls will all probably be close to six feet -- the tallest girl is a</p>
          <p>six footer, the shortest if five foot 8. The thinnest weighs 123</p>
          <p>pounds; the heaviest refuses to give her weight. Average</p>
          <p>weight is 130, for the 15 who will tell. Largest bust is 39, the</p>
          <p>smallest 35 1/2, the average 36. Waist average is 24 with 23</p>
          <p>the smallest and 29 the largest. Hips average 36, with 27 the</p>
          <p>smallest and 39 the largest.</p>
          <p className={styles.pageNum}>-3-</p>
          <p>The girls come from musical comedy, the Copacabana, the</p>
          <p>Latin Quarter, the Denver ballet, the Follies Bergere, London&apos;s</p>
          <p>Crazy Gag, the Chez Paree, Vegas&apos; Tropicana, one from</p>
          <p>modeling, one from a Water Follies and one beauty was</p>
          <p>discovered in a burlesque show.</p>
          <p>Their families range from one mother who is a Doctor, to</p>
          <p>another mother who was a showgirl at the Acquacade at the</p>
          <p>last New York&apos;s World&apos;s Fair. One girl&apos;s uncle was the late</p>
          <p>Victor McLaglen, another girl&apos;s first cousin is the city editor of</p>
          <p>a New York newspaper. One girl&apos;s father is a photographer,</p>
          <p>one girl&apos;s grandfather walked to Texas with an oxen team; a girl</p>
          <p>who is a direct descendant of General Nathaniel Green, one girl</p>
          <p>was Miss Page One in 1963, another was runner up for Miss</p>
          <p>New York City in 1964.</p>
          <p>For the record, if you are a historian at heart, note these names</p>
          <p>-- they will be showgirls in &quot;To Broadway With Love&quot; at the</p>
          <p>World&apos;s Fair comes April; but tomorrow? beauties whose</p>
          <p>names will probably be famous internationally. In alphabetical</p>
          <p>order, Alleen Aune, Diane Brown, Pamela Burrell, Terry</p>
          <p>Crawford, Michele Evens, Carol Holt, Lyn Janice, Anna</p>
          <p>Johnson, Melissa Mc Call, Jo Mc Kee, Denise McLaglen,</p>
          <p>Trinka Morgan, Judy Pierce, Cathy Triffon, Carolle van Seter</p>
          <p>and Mary Lee Winton. They will add beauty and glamour to</p>
          <p>the World&apos;s Fair and will dazzle the audience with a wardrobe</p>
          <p>designed by Freddie Wittop that is actually costing $490,890.</p>
                </div>
              </div>
              <p className={styles.releaseSource}>
                Source: Texas Pavilions and Music Hall Press Release
              </p>
            </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/texas07"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texas09"
      />
    </>
  );
}
