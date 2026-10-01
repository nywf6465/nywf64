import type { Metadata } from "next";
import Image from "next/image";
import { FisherHero } from "@/components/FisherHero";
import { FisherNavChrome } from "@/components/FisherNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../fisherEssay.module.css";

export const metadata: Metadata = {
  title: "New York World's Fair Memories — Albert Fisher — nywf64.com",
  description:
    "Albert Fisher's essay of New York World's Fair memories — Director of Television for the 1964/1965 New York World's Fair — from nywf64.com.",
};

/**
 * Albert Fisher page stack (modeled on rm01):
 * site header → hero → Fisher nav → essay body → nav2 → site footer
 *
 * Body from legacy fisher02.html, remapped to /fisher01.
 */
export default function Fisher01Page() {
  return (
    <>
      <FisherHero />

      <FisherNavChrome />

      <article className={styles.article} aria-labelledby="fisher01-title">
        <header className={styles.titleBar}>
          <h1 id="fisher01-title" className={styles.titleBarMain}>
            <em>New York World&apos;s Fair Memories</em>
          </h1>
          <p className={styles.titleBarByline}>
            ... an essay by Albert Fisher
          </p>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.subtitle}>
            Albert Fisher was the Director of Television for the Thomas Deegan
            Company/New York World&apos;s Fair 1964-1965 Corporation
          </p>

          <div className={styles.body}>
            <p>
              I first became aware of the 1964-65 New York World&apos;s Fair when I worked as Director of Television and Motion Pictures for the 1962 Seattle World&apos;s Fair in Washington. The New York Fair had a small exhibit there ... mainly a plexiglas covered model about 6&apos; X 4&apos;, posters and brochures. But having had a taste of the World&apos;s Fair excitement from Seattle, I knew that I would want to have some sort of association with the New York venture.
            </p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(17.4375rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher01.jpg"
                alt="Cantinflas Photograph"
                width={279}
                height={420}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>Cantinflas</span>
                <span className={styles.capBody}>Photo taken with the internationally famous Mexican film star Cantinflas during production of the NBC Television special: <em>&quot;Opening Night At The New York World&apos;s Fair.&quot;</em> Shot was taken at the African Pavilion in late winter, around February or March, 1964 prior to the Fair opening.</span>
              </figcaption>
            </figure>

            <p>
              After the Seattle Fair, in the fall of 1962, I moved to New York City as Producer and head Talent Scout for the CBS television series: <em>&quot;Ted Mack and The Original Amateur Hour.&quot;</em> I had a roommate, Phil Bodwell who landed a job as a Producer of the planned 90-minute <em>&quot;Opening Night Special&quot;</em> from the New York Fair for NBC to be sponsored by USS Steel, the makers of the Unisphere. I managed to convince Bob Benedict, the Executive Producer of the show that he needed my experience from Seattle on the program and landed a job as one of the other Producers. We shot from February to mid April of 1964. The show was to air &quot;live,&quot; with most of the elements pre-filmed and the &quot;live&quot; portion to be lead-ins and lead-outs hosted by Henry Fonda. Guest star hosts on the segments included Carol Channing (representing the industrial section), Fred Mac Murray (Transportation), Lorne Greene (States), Marion Anderson (Religion) and the Mexican film star Cantinflas (International). I had a chance to work with them all. Probably the hardest thing for all of us to do was to shoot in the freezing cold of winter weather and pretend that it was a balmy late April day for the cameras. It was difficult to keep everyone&apos;s breath from showing on the film, but we pulled it off. Channing had a song to do on the roof of the Kodak Pavilion on a Sunday afternoon when it must have been well below freezing. Her husband, Charles Lowe, kept pulling me aside saying he was going to pull her off the roof any minute now because he was concerned that her voice would be affected by the cold and she had a full schedule of stage appearances in <em>&quot;Hello Dolly&quot;</em> on Broadway which was the big hit at the time. She persevered however and was delightful. The famous motion picture star Fred Mac Murray had a more difficult time.
            </p>

            <p>
              I had to get him to go up on top of the Chrysler Pavilion for a sequence. The only way up was a ladder. Fred did not like heights and it took a lot of coaxing to get him up to the top, but he finally made it. The shot was done from the roof of the Heliport looking down on Mac Murray on the Chrysler building. Because of the angle, we had to get rid of the ladder once Fred was up on top and I was one of the few people allowed up on top with him because we did not want to see anyone other than Fred on the roof on camera. So here we were ... trapped on the roof of the Chrysler Pavilion ... when Fred whispered that he had a &quot;problem.&quot; Seems that he had severe bowel problems that day and had &quot;the runs.&quot; There was no toilet on top and Fred &quot;had to go ... now!&quot; I found a workman&apos;s left over metal pail on the roof and, with a coat cover to protect what little decency was left of the poor man, Fred Mac Murray, one of America&apos;s greatest actors, had to relieve himself in a metal pail in the freezing cold on the roof of the Chrysler Pavilion. He maintained his dignity throughout and swore us to secrecy about the incident. I think that this is the first time that oath of secrecy has been broken.
            </p>

            <p>
              Opening day, April 22, 1964 was a disaster. Protesters were taking axes and cutting the cables of our cameras prior to our going on the air &quot;live.&quot; It was raining and the expected crowds stayed away from the Fair, which made it look cold, wet and deserted. Henry Fonda, one of the world&apos;s greatest actors and the consummate showman, never complained and forged ahead with rehearsals. I stood on the press platform for the opening day ceremonies, just a few feet away from every dignitary from Presidents Truman and Eisenhower to Indira Ghandi of India. It was exhilarating for a young man to witness this up-close. The show did air as scheduled that night and pulled tremendous ratings and was a huge success.
            </p>

            <p>
              While all of the shooting over the months prior to the opening was going on, I had opened up discussions with Bill Berns, the VP of Public Relations and Communications for the Fair, Tom Deegan, Chairman of the Executive Committee whose company ran press, and John O&apos;Keefe who headed up TV. After so much badgering by me, they finally let me join O&apos;Keefe in the TV department the day after opening day. That started my full-time work for the Fair corporation.
            </p>

            <p>
              My job was to get TV shows to talk up the Fair and to originate from the Fair. In the beginning, this was an easy task as everyone wanted to come see the Fair and were anxious to help promote it. We did origination&apos;s with shows such as <em>&quot;Today,&quot; &quot;Candid Camera,&quot; &quot;Queen For A Day,&quot; &quot;To Tell The Truth&quot;</em> (I even appeared as an impostor on this show and established a lifelong close friendship with the host, Bud Collyer and his family).
            </p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(26.2500rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher03.jpg"
                alt="Joan Crawford Photograph"
                width={420}
                height={353}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>(l to r) Joan Crawford, Albert Fisher</span>
                <span className={styles.capBody}>This photo was taken at Joan&apos;s penthouse apartment on 5th Avenue when we recorded her narration for the official radio series for The New York World&apos;s Fair, <em>&quot;World&apos;s Fair Holiday.&quot;</em> Taken in the fall of 1964.</span>
              </figcaption>
            </figure>

            <p>
              Another aspect of my job was to take TV stars around the Fair in the hopes that they would promote the Fair on their respective shows. At the same time, I began chronicling my time with some of these stars in a series of audio interviews which I would later weave into a radio series: <em>&quot;World&apos;s Fair Holiday,&quot;</em> the official radio series of the Fair which was distributed to stations around the world. As hosts of the series, I obtained screen actress and legend Joan Crawford, singer Pat Boone, TV hostess Arlene Francis and my friend, TV game show host Bud Collyer. I wrote, produced and directed the 20 episodes of the series. Additionally, I interviewed people like Leonard Bernstein, Louis Armstrong, and Tippi Hedren of the movie &quot;The Birds&quot; fame. Tippi brought along her 7 year old daughter who I also interviewed. Her name is Melanie Griffith.
            </p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(26.2500rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher02.jpg"
                alt="Carol Channing Photo"
                width={420}
                height={331}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>(l to r) Albert Fisher, Gower Champion, Marge Champion, Gordon MacRae, Carol Channing</span>
                <span className={styles.capBody}>Marge and Gower Champion were amazing dancers and choroeographers for Broadway and Films. Gower was also one of the top stage and screen directors. Gordon MacRae was one of the biggest names on Broadway, movies and TV. Carol Channing remains one of the great stage stars whose fame hit the top with <em>&quot;Hello Dolly.&quot;</em> This photo was taken at the Gas Pavilion in the summer of 1964.</span>
              </figcaption>
            </figure>

            <p>
              Almost all of the pavilions at the Fair had VIP lounges where we could bring our visiting dignitaries. The best of these were at the bigger industrial exhibits: Ford, General Motors, Electric Light, Pepsi, Bell Telephone, etc. My favorite two restaurants at the Fair turned out to be the Gas Pavilion (run by Restaurant Associates) and the famed Spanish Pavilion restaurant. I remember taking Carol Channing to the Spanish Pavilion. The previous week, I had been there with Ed Sullivan and the folks at the restaurant could not do enough to try and impress him. I knew that they would turn out the same kind of amazing Spanish hospitality for Channing. What I did not know was that they would invite the press to come to see Broadway&apos;s biggest star, Carol Channing, eat at their magnificent restaurant. And further, what I also did not know was that Carol was on a special diet. When we arrived at the restaurant, Carol had a large canvas bag with her. We sat down at the best table in the restaurant ... right in the middle where everyone could see her ... and she proceeded to pull from this bag her own dinner! She would not have anything to do with the Spanish food. There were immediate diplomatic hurdles to overcome and I thought that the manager of the restaurant was going to send me into a ring with the bulls. However, I did finally manage to have them set a plate of Spanish food in front of Carol for the photographers to shoot and, afterwards, she continued to eat her own plain broiled chicken and hard-boiled eggs.
            </p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(26.2500rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher07.jpg"
                alt="Red Skelton Photograph"
                width={420}
                height={469}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>(l to r) Albert Fisher, Red Skelton</span>
                <span className={styles.capBody}>Photo taken in the restaurant at the Gas Pavilion, summer 1964.</span>
              </figcaption>
            </figure>

            <p>
              The day I spent with the legendary comic and TV star Red Skelton and his son at the Fair was one of mixed emotions. I was excited about being with Skelton but was also aware of the fact that Red was on an extended leave of absence from his TV series so he could spend time with his son who was dying of Leukemia. Every place we visited, throngs of admirers confronted Skelton and he was always happy to give autographs and pose for pictures. Inside, he must have been in anguish knowing that his time with his little boy was limited. Within 6 months, the boy passed away. Skelton was well known as an artist who painted clowns. I always felt that this was a prime example of the classic tale of the clown laughing on the outside and crying on the inside.
            </p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(26.2500rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher06.jpg"
                alt="Merv Griffin, Albert Fisher"
                width={420}
                height={331}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>(l to r) Merv Griffin, Albert Fisher</span>
                <span className={styles.capBody}>Photo with Merv at the fountains near the Unisphere. In the background is the Johnson&apos;s Wax pavilion. Summer, 1964.</span>
              </figcaption>
            </figure>

            <p>
              I had met Merv Griffin at the Seattle World&apos;s Fair two years earlier. I did not know who he was and spent an entire day taking him around the Fair with a camera crew from <em>The Tonight Show</em> and everywhere we went, I introduced him as &quot;Marv Griffith.&quot; My innocent error laid the foundation for a friendship that would last a lifetime. I took Merv and his family on many trips around the New York World&apos;s Fair and when my stint at the Fair ended, Merv offered me the job as head of promotion, publicity and public relations for his soon-to-start TV series: <em>&quot;The Merv Griffin Show.&quot;</em> I remained with Merv for 5 years and, to this day, still consider him to be one of the most influential people in my life.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/people"
        explicitPrevious
        nextHref="/fisher02"
        hideOverview
      />
    </>
  );
}
