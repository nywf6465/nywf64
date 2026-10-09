import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./dupont15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Audio Selections from The Wonderful World of Chemistry — DuPont — nywf64.com",
  description:
    "Audio selections and 1964 showtune lyrics from DuPont’s Wonderful World of Chemistry — 1964/1965 New York World’s Fair on nywf64.com.",
};

function ListenBlock({
  title,
  href,
  size,
  source,
}: {
  title: ReactNode;
  href: string;
  size: string;
  source: ReactNode;
}) {
  return (
    <div className={styles.listenBlock}>
      <div className={styles.listenRow}>
        <p className={styles.listenTitle}>{title}</p>
        <div>
          <a
            className={styles.listenLink}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/dupont15/sound.gif"
              alt=""
              width={20}
              height={23}
              className={styles.soundIcon}
              unoptimized
            />
            LISTEN! <span className={styles.listenSize}>({size})</span>
          </a>
          <p className={styles.source}>{source}</p>
        </div>
      </div>
      <audio className={styles.player} controls preload="none" src={href}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

/**
 * DuPont — Audio Selections from The Wonderful World of Chemistry.
 * Body from legacy dupont15.html (custom feature page).
 *
 * Stack: hero → DupontNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * Legacy wording (exiciting) preserved.
 * Last DuPont topic — NEXT returns to overview.
 */
export default function Dupont15Page() {
  return (
    <>
      <section className={styles.hero} aria-label="DuPont">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/dupontoverview/hero-banner.jpg"
            alt="DuPont Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DupontNavChrome />

      <article className={styles.article} aria-labelledby="dupont15-title">
        <header className={styles.titleBar}>
          <h1 id="dupont15-title" className={styles.titleBarMain}>
            Audio Selections from{" "}
            <em>The Wonderful World of Chemistry</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.theaterRow}>
            <p className={styles.theaterLabel}>
              IN THE
              <br />
              BLUE THEATER
            </p>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont15/dupont16.jpg"
                alt="Comedy/Tragedy Masks"
                width={185}
                height={149}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont15/dupont01.jpg"
                alt='"Wonderful World of Chemistry" performers'
                width={350}
                height={280}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.theaterLabel}>
              AND THE
              <br />
              GOLD THEATER
            </p>
          </div>

          <p className={styles.lede}>
            Your trip to the New York World&apos;s Fair isn&apos;t complete
            without a visit to the Du Pont pavilion for a fascinating,
            fast-moving swing through the &quot;Wonderful World of
            Chemistry.&quot;
          </p>
          <p className={styles.lede}>
            The first act of the popular Du Pont show is a lively musical revue
            performed simultaneously in the Blue and the Gold Theaters. In an
            exiciting new theatrical technique, singers and dancers on stage
            interplay with other singers and dancers on moving motion picture
            screens. So if you think you see a dancer on stage hand a flower to
            a dancer on film, be assured those around you are seeing the same
            thing.
          </p>

          <p className={styles.dashner}>
            <span className={styles.dashnerName}>Ray Dashner</span>, tape
            recorder in hand, preserved the soundtracks of many of the New York
            World&apos;s Fair shows for his own enjoyment. Now, relive the
            sounds of the Fair through Ray&apos;s fabulous recordings!
          </p>

          <ListenBlock
            title={
              <>
                Du Pont&apos;s &quot;Wonderful World of Chemistry&quot;
                <br />
                Soundtrack 1965 Show
              </>
            }
            href="/audio/dupont/Dashner_DuPont_Show.mp3"
            size="9MB"
            source="Source: Ray Dashner Archives 2007 All Rights Reserved"
          />
          <ListenBlock
            title={
              <>
                Du Pont&apos;s &quot;Wonderful World of Chemistry&quot;
                <br />
                Selections from the 1964 Show
              </>
            }
            href="/audio/dupont/Dup64.mp3"
            size="2.3MB"
            source="Source: Presented Courtesy Bradd Schiffman Collection"
          />
          <ListenBlock
            title={
              <>
                Du Pont&apos;s &quot;Wonderful World of Chemistry&quot;
                <br />
                Selections from the 1965 Show
              </>
            }
            href="/audio/dupont/Dup65.mp3"
            size="1.8MB"
            source="Source: Presented Courtesy Bradd Schiffman Collection"
          />

          <p className={styles.jacketNote}>
            Source Record Jacket: &quot;The Norman Paris Quintet plays songs
            from Michael Brown&apos;s &apos;Wonderful World of Chemistry&apos;&quot;
            1964
          </p>

          <div className={styles.jacketRow}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont15/dupont11.jpg"
                alt="Record jacket cover"
                width={235}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont15/dupont28.jpg"
                alt="Record jacket back"
                width={235}
                height={237}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </div>

          <p className={styles.body}>
            An intriguing concept in entertainment as live actors sing, dance
            and talk with life-size figures on motion picture screens has been
            utilized by du Pont in the &quot;Wonderful World of Chemistry&quot;
            at the New York World&apos;s Fair.
          </p>
          <p className={styles.body}>
            Produced and directed by Michael Brown, who also has written the
            book, music and lyrics, the musical revue will have a record number
            of showings, being performed by eight different troupes in two
            theatres simultaneously. To accommodate the crowds expected to
            attend the show, it will be presented 40 times daily for a total of
            14,600 times during the two seasons of the Fair.
          </p>

          <h2 className={styles.lyricsHead}>1964 Showtunes Lyrics</h2>

          <p className={styles.songTitle}>E.I. du Pont de Nemours &amp; Company</p>
          <ul className={styles.lyrics}>
            <li>E.I. du Pont de Nemours.</li>
            <li>E.I. du Pont de Nemours.</li>
            <li>E.I. du Pont de Nemours &amp; Company!</li>
            <li>E.I. du Pont de Nemours &amp; Company welcomes you today.</li>
            <li>E.I. du Pont de Nemours &amp; Company simply wants to say:</li>
            <li>
              There&apos;s a Wonderful World of Chemistry anywhere you wander.
            </li>
            <li>Thousands of sights. Of pure delights.</li>
            <li>Stretching from here clear to yonder.</li>
            <li>E.I. du Pont de Nemours &amp; Company acting as your host.</li>
            <li>E.I. du Pont de Nemours &amp; Company wishes you the most</li>
            <li>entrancing hour that there could be.</li>
            <li>Where imagination is fancy-free.</li>
            <li>In the &quot;Wonderful World of Chemistry.&quot;</li>
            <li>Beginning now.</li>
            <li>Beginning at the beginning now!</li>
          </ul>

          <p className={styles.songTitle}>With Antron and Nylon</p>
          <ul className={styles.lyrics}>
            <li>With Antron and Nylon and Lycra and Orlon</li>
            <li>and Dacron, the world&apos;s a better place.</li>
            <li>You know we all have a smile on that started with Nylon</li>
            <li>and stretches across each happy face.</li>
            <li>We&apos;ll sing it and shout it.</li>
            <li>Without a doubt about it.</li>
            <li>For &quot;Better Living&quot; there&apos;s a modern way!</li>
            <li>
              With Antron and Nylon and Lycra and Orlon and Dacron
            </li>
            <li>let&apos;s live each day!</li>
          </ul>

          <p className={styles.songTitle}>The Happy Plastics Family</p>
          <ul className={styles.lyrics}>
            <li>
              There&apos;s nothing to match the thousand things you do with
              plastics.
            </li>
            <li>There&apos;s nothing to beat their skill and versatility.</li>
            <li>That&apos;s why we can tell you we are all enthusiastics</li>
            <li>
              about the very significant, truly magnificent Happy Plastics
              Family!
            </li>
          </ul>

          <p className={styles.songTitle}>We&apos;re Gonna Have Shoes</p>
          <ul className={styles.lyrics}>
            <li>
              We&apos;re gonna have shoes like we never had shoes before.
            </li>
            <li>
              We&apos;re spreadin&apos; the news, we&apos;ll be walkin&apos; on
              clouds galore.
            </li>
            <li>So let it rain or let it shine.</li>
            <li>
              It&apos;s very plain the weather&apos;s fine with shoes for
              showin&apos; the blues the door.
            </li>
            <li>
              We&apos;re gonna sing hey ! while we&apos;re walkin&apos; down
              every street.
            </li>
            <li>
              We&apos;re showin&apos; the way to the patter of &quot;Happy
              Feet.&quot;
            </li>
            <li>So come along, the feelin&apos;s grand</li>
            <li>
              and sassy as a brassy band with shoes -- such wonderful shoes!
            </li>
            <li>There&apos;s no need now to be afraid</li>
            <li>
              even with the look of suede when you&apos;re caught in buckets
              full of rain.
            </li>
            <li>So come along, the feelin&apos;s grand</li>
            <li>
              and sassy as a brassy band with shoes -- with wonderful CORFAM.
              New!
            </li>
            <li>CORFAM shoes!</li>
          </ul>

          <p className={styles.songTitle}>
            Better Things for Better Living
          </p>
          <ul className={styles.lyrics}>
            <li>
              Better Things for Better Living through Chemistry for the finer
              world we want.
            </li>
            <li>
              Better Things for Better Living through Chemistry, that&apos;s the
              promise of du Pont.
            </li>
            <li>
              Every day that we are living is such a thrill that we can&apos;t
              stay nonchalant.
            </li>
            <li>
              Better Things for Better Living are common still, that&apos;s the
              promise of du Pont!
            </li>
          </ul>
        </div>
      </article>

      <Nav2Bar
        previousHref="/dupont14"
        explicitPrevious
        overviewHref="/dupontoverview"
        nextHref="/dupontoverview"
      />
    </>
  );
}
