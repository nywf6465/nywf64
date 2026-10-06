import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genele22.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow \u2014 General Electric \u2014 nywf64.com",
  description:
    "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow \u2014 General Electric Progressland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Electric — Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow.
 * Body from legacy genele22.html (custom topic page).
 * Stack: hero → GeneleNavChrome → navy title → article → Nav2Bar.
 */
export default function Genele22Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <article className={styles.article} aria-labelledby="genele22-title">
        <header className={styles.titleBar}>
          <h1 id="genele22-title" className={styles.titleBarMain}>
            Beyond the Fair: the Carousel of Progress&apos; Beautiful Tomorrow
          </h1>
          <p className={styles.titleBarSub}>... an essay by Eric Paddon</p>
        </header>

        <div className={`${styles.articleInner} ${styles.wide}`}>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge134.jpg"
              alt="Concept Artwork"
              width={437}
              height={261}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>Concept artwork for the Carousel of Progress Pavilion at Disneyland</figcaption>
            <p className={styles.source}>Source: © The Walt Disney Company</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge19.jpg"
              alt="Record Jacket"
              width={481}
              height={381}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Disneyland c. 1968</figcaption>
            <p className={styles.source}>Source: Record Jacket © The Walt Disney Company</p>
          </figure>
          <div className={styles.body}>
            <p>What has ultimately made the Carousel of Progress unique from all the attractions at the New York World&apos;s Fair that offered a glimpse of a &quot;Space Age&quot; future is that it was the only one to live into the future it tried to anticipate. From the very beginning Walt Disney was determined to have the attractions he built for the Fair become permanent fixtures at Disneyland. Save for the Ford Magic Skyway, which ultimately survived only in bits and pieces, they did. The enormous popularity of the Carousel at the Fair insured there&apos;d be considerable anticipation in a West Coast audience to see what more than 12 million people experienced in New York once it arrived in California.</p>
            <p>The reopening of the Carousel Of Progress at Disneyland in July 1967 coincided with a massive overhaul of the Park&apos;s Tomorrowland section that was designed to bring it more in-line with forward thinking &quot;Space Age&quot; themes that had characterized the Fair. Gone were a number of attractions that dated back to the Park&apos;s opening in 1955 such as the outdated Hall Of Chemistry and the rapidly deteriorating walk-through exhibit of sets and props from the movie 20,000 Leagues Under The Sea. In their place were new attractions such as &quot;Adventures Thru Innerspace,&quot; which utilized a ride system similar to those from the Fair and took visitors through impressive set construction and optical illusions giving them the impression of being miniaturized within a snowflake down to the tiniest atom particles (the ride also spawned another memorable song from the Sherman brothers, &quot;Miracles From Molecules&quot;).</p>
            <p>The &quot;Peoplemover&quot; ride through Tomorrowland carried over the ride system technology from Ford&apos;s World&apos;s Fair &quot;Magic Skyway&quot; while the old &quot;Rocket To The Moon&quot; ride that dated back to 1955 was given an overhaul that transformed it from its fancifully dated 1950s vision of spaceflight into the more scientifically plausible &quot;Flight To The Moon&quot;. As part of its overhaul, &quot;Flight To The Moon&quot; added a pre-show with an audio-animatronic Mission Control specialist named &quot;Tom Morrow&quot; further showing how the audio-animatronic technology pioneered for the Fair was impacting the Park in other places. Many visitors noticed how &quot;Tom Morrow&quot; seemed a lot like the Father from Carousel.</p>
            <p>In this context of a revised Tomorrowland offering new, cutting edge attractions that still forecast the magnificent possibility of things to come, the Carousel Of Progress seemed right at home. Except for a new voice in the role of the mother, the show itself was virtually identical to what had played in New York. A new two-level building was constructed to house the show which didn&apos;t duplicate any of the architectural features of the GE pavilion in New York. Guests viewed the show on the bottom level while the second level featured the post-show view of &quot;Progress City&quot; representing Walt Disney&apos;s vision of what he hoped technology would bring for the future development of urban communities. At the time of his death in December, 1966, Disney was deep into planning for the opening of a new theme park in Florida and also using the land to develop an &quot;Experimental Prototype Community Of Tomorrow&quot; (EPCOT) that would represent the ultimate in the Carousel&apos;s message of a &quot;big beautiful tomorrow,&quot; thanks to technological innovation and careful research and development. In the Disney vision, monorails and peoplemover transports cutting down on urban traffic and pollution, automatic vacuum waste disposal services, and an interrelated workplace and living environment would be the next logical step in the progression of technology and better living heralded in each act of the Carousel.</p>
            <p>Carousel proved to be quite popular once it opened in Disneyland. It seems surprising to think that its stay in Anaheim would ultimately be short-lived by Disney Park standards. In 1973, just six years after its arrival, Carousel played for the last time in Disneyland and was closed. A new carousel-style attraction would take its place; &quot;America Sings,&quot; which presented more than 200 elaborate audio-animatronic animals celebrating 200 years of American music. The upper level, which originally housed the Progress City post-show, became a &quot;Super Speed Tunnel&quot; for passengers of the People Mover to ride through.</p>
            <p>The show&apos;s closing in Disneyland was not the end of the Carousel of Progress. The decision had been made to transfer the expensive audio-anamatronic figures and sets to Florida for installation in Walt Disney World&apos;s Tomorrowland section. The reasons for the decision to move the attraction have never been fully documented but two factors have been suggested by Disney historians. One was that General Electric felt that the attraction had received the most exposure it could get in California and that attendance would inevitably decline if it weren&apos;t shifted to a fresh locale. The second was that Disney World&apos;s Tomorrowland needed something additional to coincide with the planned 1975 opening of the Florida Park&apos;s signature attraction, Space Mountain. Heavy lines were anticipated for this roller-coaster-in-the-dark and having the Carousel situated nearby would provide guests with an alternative new attraction to experience if they didn&apos;t want to wait at Space Mountain.</p>
            <p>Whatever the reason, Carousel opened in its third venue in 1975. Those who were familiar with it from New York and Anaheim were greeted to a show that had undergone some significant changes. It was now housed in a smaller, single-level theater which moved counter-clockwise rather than clockwise. The closing &quot;Progress City&quot; act had been eliminated entirely while the elaborate Progress City model that had graced the upper level of Disneyland&apos;s Carousel theater was placed in a window situated along the Wedway People Mover ride in Disney World&apos;s Tomorrowland. Guests could only get, at best, a five second view of the model as their vehicles went past; not able to fully appreciate the thought and care that had gone into its design.</p>
            <p>A new recording had been made for the show as well with new actors brought in to handle the roles. (Only the small contributions of cartoon legend Mel Blanc as the parrot in Act I and Cousin Orville in Act II were retained from the original Fair and Disneyland tracks.) Character actor Andrew Duggan replaced Rex Allen in the principal role of narrator and Father. In addition, the character of the unnamed son was finally given a speaking part and some scenes in each of the four acts. For the most part though, Acts I, II and III were generally the same as they&apos;d been in New York and California.</p>
            <p>Act IV represented a significant departure from the previous versions with the action now taking place on New Year&apos;s Eve instead of Christmas. This time, the entire family was present instead of just Father and Mother, and Grandpa and Grandma were living with them and not residing in a Senior Citizens Community. And in a concession to the changing roles of women in society since 1964, Mother was at work on the computer while Father was preparing dinner. New, cutting-edge technology of the 1970s such as giant sized television sets, cable television and home computers were now featured. But the focus on new technologies for the future was considerably lower-key than had been the case in the original Act IV finale. If anything it seemed evident that in this newest incarnation, Carousel Of Progress felt the need to be less bold about proclaiming how the future would bring us newer, wonderful technologies to make our lives better.</p>
            <p>Perhaps nothing drove this point home more than in the critical decision to make the biggest change to the show: the dropping of the theme song, &quot;There&apos;s A Great Big Beautiful Tomorrow,&quot; for a new Sherman brothers composition titled &quot;Now Is The Time.&quot; In this song, the focus was not about anticipating the future but celebrating how good our respective present happened to be and, in light of how far we&apos;d come since the turn of the century, that we should feel good about those accomplishments. As for looking to tomorrow, the new song&apos;s caution was best summed up this way:</p>
            <div className={styles.lyrics}>
              <p>&quot;Yesterday&apos;s memories may sparkle and gleam.</p>
              <p>Tomorrow is still but a dream.</p>
              <p>Right here and now, you&apos;ve got it made.</p>
              <p>The world&apos;s forward marching and you&apos;re in the parade.&quot;</p>
              <p>&quot;Now is the time. Now is the best time.</p>
              <p>Be it a time of joy or strife.</p>
              <p>There&apos;s so much to cheer for --</p>
              <p>be glad you&apos;re here for.</p>
              <p>It&apos;s the best time of your life.&quot;</p>
            </div>
            <p>It was a rather careful attempt to maintain the attraction&apos;s theme of celebrating progress and being innovative while saying that perhaps the time had come to be more prudent in terms of looking ahead.</p>
            <p>This change in song may have been sacrilege to long-time fans of the show from its days in New York and California. But, in the end, it actually fit better with the changing mood of American society in the 1970s which had grown increasingly cynical about technology and now viewed the &quot;Space Age&quot; thinking of the 1964 Fair as an overly naive vision of a future that could never be. The elimination of the Progressland post-show and moving the Progress City model to an out-of-the-way location also demonstrated how, in the 1970s, the public wasn&apos;t interested that much in grandiose visions of the future. America&apos;s declining interest in the space program after Apollo XI, the greater concern over the side-effects of technology and the national traumas of the Vietnam War and the Watergate scandal had left Americans so cynical about the times they lived in that, in a sense, a song that reminded them of how good their present was better fit the needs of the society than the message of &quot; A Great Big Beautiful Tomorrow.&quot;</p>
            <p>In its new incarnation, the Carousel settled down to what has ever since been the longest run of its post-Fair life. A new cast recording in 1981 was made that updated Act IV to showcase 1980s style technology and, except for Andrew Duggan who continued as narrator and Father (along with the ever-present Mel Blanc cameos), featured new voices that included James Gregory (Inspector Luger of TV&apos;s Barney Miller) as Grandpa, and Dena Dietrich (who in the 1970s made the phrase &quot;It&apos;s not nice to fool Mother Nature!&quot; famous in commercials for Chiffon Margarine) as Grandma. In 1985 more retooling was done when General Electric dropped their twenty year sponsorship of the Carousel Of Progress. Even though GE was now no longer mentioned by name, all the implicit references to &quot;a new company&quot; and the &quot;research boys&quot; remained as well as the incorporation of GE&apos;s slogan about &quot;bringing good things to life&quot; which created a somewhat awkward aura.</p>
            <p>EPCOT finally opened in 1982 but bore no resemblance to the City of Tomorrow that Walt Disney had envisioned and, instead, had become the Disney equivalent of a New York World&apos;s Fair. One of the attractions that opened at EPCOT one year later was a spin-off of the Carousel of Progress called &quot;Horizons.&quot; Sponsored by General Electric, it offered a view of how our perceptions of what the future will bring have changed over the years and a glimpse at what the future still has to offer us today. A slightly elderly couple that bore a strong resemblance to the Father and Mother from Carousel were the hosts. And during the journey through past visions of what the future would bring, the connection to Carousel of Progress was made even more blunt when viewers saw a robot butler from a 1930s vision of the future singing &quot;There&apos;s A Great Big Beautiful Tomorrow.&quot;</p>
            <p>After giving us our view of future visions from the past, Father and Mother took us to a vision of their family living in highly advanced urban, agricultural and underwater communities of the future. Probably the most memorable effect of this ride-through came during the view of the agricultural community where an orange grove had been developed from previously barren desert. As the vehicles made their way through, visitors were always greeted by the powerful fragrance of oranges all around them. &quot;Horizons&quot; ran for fifteen years at EPCOT, closing in January 1999. The pavilion was demolished and a new attraction &quot;Mission Space&quot; will open on the same site in 2003.</p>
            <p>The Carousel Of Progress had come close to meeting the same fate much sooner. By the early 1990s the Carousel was beginning to seem like a relic from the past, much as the rest of Disney World&apos;s Tomorrowland section did at that point; its views of the future seemed stuck in a 1970s time capsule. Carousel&apos;s audio-animatronic technology that had &quot;wowed&quot; audiences in the 1960s no longer seemed so innovative. And, because the performances would never differ in a way that a live program with real actors can always seem different, few people found repeat visits to the Carousel appealing. (This problem was not just limited to Carousel but also affected other long-standing audio-animatronic shows in the Disney Parks like &quot;The Enchanted Tiki Room.&quot;) According to Disney expert Jim Hill, when plans were originally drawn up in the early 1990s for a massive overhaul of Tomorrowland, the Carousel Of Progress was slated to be closed. The theater space was to be gutted and transformed into a new edition of the &quot;Flying Saucers&quot; ride that had been at Disneyland from 1961-66. But when the Disney Corporation suffered enormous financial losses following the opening of EuroDisneyland outside of Paris, plans for the overhaul of Tomorrowland were scaled back with an emphasis on doing the makeover for as little money as possible. It was because of that cost-conscious approach to redoing Tomorrowland that Carousel Of Progress suddenly got a new lease on life.</p>
            <p>The new Tomorrowland&apos;s thrust would not be on offering glimpses of a possible future that ran the risk of always becoming outdated but, instead, would focus on pop-culture visions of futures that never were and focus more on fantastic thrills to be found in a futuristic setting that was straight out of the fantasy realm. To fit into this vision, the Carousel of Progress would be stressed for its nostalgia value as a tribute to Walt Disney; a complete turnaround from the forward-thinking vision that had created the attraction in the first place. The attraction was renamed &quot;Walt Disney&apos;s Carousel Of Progress&quot; and given its first major overhaul since 1975. Humorist Jean Shepherd, renowned for his ability to be a charming storyteller that had made him a legend of New York radio for several decades, would lead a new cast of voices that even featured the return of the original Father, Rex Allen, in the part of Grandpa (the Mel Blanc vocals from the original Fair soundtrack also survived this transition). For longtime Carousel fans the biggest change would be the restoration of &quot;There&apos;s A Great Big Beautiful Tomorrow&quot; as the theme song.</p>
            <p>In the new opening narration, Shepherd set the tone of nostalgia by giving a brief history of how the Carousel all began as part of Walt Disney&apos;s vision to celebrate progress and how, after all these years, the Carousel had done more performances of any stage show in American history. Acts I, II and III still featured the turn-of-the-century, the 1920s and the late 1940s, but the tone was different from the earlier versions. Now, rather than moving each act forward according to the progression of seasons (spring-1890s, summer-1920s, fall-1940s, winter-Act IV), a different holiday was the theme for each act. Jean Shepherd&apos;s Father seemed a more bumbling type making asides about how &quot;Lindbergh will never make it&quot; and culminating in Act IV with Father managing to ruin Christmas dinner because of his inability to handle his technologically advanced oven! Mother had also come a long way from the earlier versions. No longer passively sighing &quot;Yes, dear&quot; and doing the laundry, she is seen more as the real &quot;brains&quot; of the family in the end. Depending on one&apos;s perspective, this represented either some welcome progress or too much intrusion of political correctness.</p>
            <p>But by this point the biggest flaw that had become apparent in the Carousel was that the show no longer gave an orderly presentation of progress over the last century. With the jump from Act III to Act IV now representing more than 50 years of change as opposed to the 20 year progressions of the previous acts, there seemed to be something missing in going this far from Act III to Act IV. It was as though what the show really needed at this point was a fifth act that allowed for the progress of the 1960s and 70s before arriving at the dawn of the 21st century. Unfortunately, given the technical limitations of the existing Carousel theater, such an option could never be possible.</p>
            <p>By the end of the 1990s, Carousel was once again becoming a more neglected component of Disney World, with less maintenance being performed and the attraction shut down most of the year. Only during &quot;peak&quot; periods of attendance at the Park was the Carousel opened up again with the most recent period of operation occurring for several weeks in the summer of 2002. Rumors are once again circulating that Carousel&apos;s long-term future is bleak with Disney Imagineers again anxious to build a new &quot;Flying Saucers&quot; ride in the existing theater space for a possible 2005 opening to coincide with the 50th anniversary of Disneyland. Given how Disney Park management in the last decade has shown little regard for maintaining the traditions of the past by shutting down such longtime favorites as the submarine rides in both Disney Parks, and given how a valiant Internet effort to save a beloved Florida attraction like &quot;Mr. Toad&apos;s Wild Ride&quot; ended in failure, it seems unlikely that current management would be receptive to any appeals to save the Carousel Of Progress from final extinction.</p>
            <p>If that were to come to pass, then the last of the great industrial pavilion exhibits of the New York World&apos;s Fair that dealt directly with the Fair&apos;s theme of Space Age progress will have become extinct offering us another reminder of how, ultimately, yesterday&apos;s visions of the future can not endure forever in the cold light of a present that has overtaken the vision completely. But for those who have been able to enjoy the Carousel in its different incarnations in New York, California and Florida, the memories of what it symbolized at its best will always, to borrow a line from &quot;Now Is The Time,&quot; be memories that will continue to sparkle and gleam.</p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge89.jpg"
              alt="1940s Kitchen at Disneyland"
              width={250}
              height={192}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Disneyland c. 1968. The scenes changed slightly in the move from the Fair to Disneyland. Our 1940s father moved out from behind the table to address the audience from the kitchen stool. And our contemporary couple are now residents of Progress City. The view from their terrace overlooks EPCOT!</figcaption>
            <p className={styles.source}>Source: © The Walt Disney Company</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge88.jpg"
              alt="Medallion Home - Act IV - Disneyland"
              width={250}
              height={200}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Disneyland c. 1968. The scenes changed slightly in the move from the Fair to Disneyland. Our 1940s father moved out from behind the table to address the audience from the kitchen stool. And our contemporary couple are now residents of Progress City. The view from their terrace overlooks EPCOT!</figcaption>
            <p className={styles.source}>Source: © The Walt Disney Company</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge22.jpg"
              alt="Artist's conception of Progress City"
              width={194}
              height={148}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>A GREAT BIG BEAUTIFUL TOMORROW is at Disneyland today. The city of the future comes alive today in the General Electric Carousel of Progress at Disneyland. This revolutionary idea in civic planning features coordinated electric transportation, a completely enclosed downtown with climate controlled environment, ample recreation and entertainment facilities and spacious grounds for private residences.</figcaption>
            <p className={styles.source}>Source: Record Jacket © The Walt Disney Company</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge91.jpg"
              alt="Prologue Theater DisneyWorld circa 1977"
              width={242}
              height={233}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Walt Disney World c. 1977 -- still sponsored by General Electric. Gone though is the Kaleidophonic Screen, replaced by a shimmering silver curtain. Dad&apos;s seated behind his 1940s table again, now in a new alcove. Grandma, Grandpa and the kids join Mom &amp; Dad in the contemporary scene. Check out that macrame&apos; plant hanger and Jane&apos;s wild bell-bottoms and Jimmy&apos;s plaid pants!</figcaption>
            <p className={styles.source}>Source: Bill Young personal collection © 2017 Bill Young, All Rights Reserved</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge90.jpg"
              alt="1940s Kitchen circa 1977"
              width={243}
              height={248}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Walt Disney World c. 1977 -- still sponsored by General Electric. Gone though is the Kaleidophonic Screen, replaced by a shimmering silver curtain. Dad&apos;s seated behind his 1940s table again, now in a new alcove. Grandma, Grandpa and the kids join Mom &amp; Dad in the contemporary scene. Check out that macrame&apos; plant hanger and Jane&apos;s wild bell-bottoms and Jimmy&apos;s plaid pants!</figcaption>
            <p className={styles.source}>Source: Bill Young personal collection © 2017 Bill Young, All Rights Reserved</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge92.jpg"
              alt="Modern Living circa 1977"
              width={242}
              height={247}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Walt Disney World c. 1977 -- still sponsored by General Electric. Gone though is the Kaleidophonic Screen, replaced by a shimmering silver curtain. Dad&apos;s seated behind his 1940s table again, now in a new alcove. Grandma, Grandpa and the kids join Mom &amp; Dad in the contemporary scene. Check out that macrame&apos; plant hanger and Jane&apos;s wild bell-bottoms and Jimmy&apos;s plaid pants!</figcaption>
            <p className={styles.source}>Source: Bill Young personal collection © 2017 Bill Young, All Rights Reserved</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge93.jpg"
              alt="Modern Living circa 1977"
              width={241}
              height={248}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>The Carousel of Progress at Walt Disney World c. 1977 -- still sponsored by General Electric. Gone though is the Kaleidophonic Screen, replaced by a shimmering silver curtain. Dad&apos;s seated behind his 1940s table again, now in a new alcove. Grandma, Grandpa and the kids join Mom &amp; Dad in the contemporary scene. Check out that macrame&apos; plant hanger and Jane&apos;s wild bell-bottoms and Jimmy&apos;s plaid pants!</figcaption>
            <p className={styles.source}>Source: Bill Young personal collection © 2017 Bill Young, All Rights Reserved</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge23.jpg"
              alt="Artist's rendering of Horizons EPCOT Pavilion"
              width={240}
              height={201}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>Artist&apos;s rendering of the GE HORIZONS Pavilion at EPCOT -- a follow on to the Carousel of Progress</figcaption>
            <p className={styles.source}>Source: 1982 EPCOT Souvenir Book © The Walt Disney Company</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge95.jpg"
              alt="Carousel Theater at Walt Disney World today"
              width={300}
              height={187}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>&quot;Walt Disney&apos;s Carousel of Progress&quot; pavilion in its latest incarnation at Walt Disney World in Orlando, Florida</figcaption>
            <p className={styles.source}>Source: Internet</p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/genele22/ge97.jpg"
              alt="Collage of Current Carousel"
              width={481}
              height={361}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>In the current version (c. 2002) of Carousel of Progress, Grandma looks smart in her virtual-reality headset while Grandpa sports a stylish Hawaiian shirt. Notice Dad&apos;s black eye? Seems his virtual-reality golf game got a little rough!</figcaption>
            <p className={styles.source}>Source: Marc Thorner © 2017 Marc Thorner, All Rights Reserved.</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/genele21"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/geneleoverview"
      />
    </>
  );
}
