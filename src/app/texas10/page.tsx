import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texas10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "To Broadway with Love - Original Cast Album — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Original cast album for To Broadway With Love at the Texas Pavilions Music Hall, 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions — To Broadway with Love original cast album (legacy texas10.html).
 * Stack: hero → TexasNavChrome → navy title → album → Nav2Bar.
 */
export default function Texas10Page() {
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

      <article className={styles.article} aria-labelledby="texas10-title">
        <header className={styles.titleBar}>
          <h1 id="texas10-title" className={styles.titleBarMain}>
            To Broadway with Love - Original Cast Album
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure>
            <span className={styles.photoFrame}>
              <Image
                src="/images/texas10/texas03.jpg"
                alt="Album Cover"
                width={500}
                height={499}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              Source: Cover, Original Cast Album, Columbia (Sony) Music
            </p>
          </figure>

          <section className={styles.albumPanel} aria-label="Track listing">
            <p>Album Produced by Thomas Z. Shepard</p>
            <p style={{ marginTop: "1.25rem" }}>Principle Performers in TO BROADWAY WITH LOVE:</p>
            <ul className={styles.trackList}>
              <li>CARMEN ALVAREZ .......................... GLORIA LeROY</li>
              <li>KELLY BROWN .................................... DON LIBERTO</li>
              <li>BOB CARROLL .................................... ROD PERRY</li>
              <li>BRADFORD CRAIG .................................... JIMMY RANDOLPH</li>
              <li>JEAN DEEKS .................................... EDDIE ROLL</li>
              <li>TED FORLOW .................................... STEWART ROSE</li>
              <li>DOROTHY FRANK .................................... GUY ROTONDO</li>
              <li>HOWARD HARTMANN .................................... EILEEN SCHAULER</li>
              <li>REBY HOWELLS .................................... MILLIE SLAVIN</li>
              <li>PATTI KARR .................................... SHEILA SMITH</li>
              <li>NANCY LEIGHTON .................................... RICHARD TONE</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              <em>
                The Company was divided into two complete casts playing alternate
                days.
              </em>
            </p>
            <p>
              <em>
                When this recording was made, one cast was actually performing at
                the World&apos;s Fair
              </em>
            </p>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>TO BROADWAY WITH LOVE</strong> (Vocal Ensemble) from{" "}
                <em>To Broadway Wight Love</em> by Jerry Brock and Sheldon Harnick
              </li>
              <li>
                <strong>OLD FOLKS AT HOME</strong> (Rod Perry) by Stephen Foster
              </li>
              <li>
                <strong>DIXIE</strong> (Rod Perry and Vocal Ensemble) from{" "}
                <em>Bryant Minstrels</em> by Daniel Decatur Emmett
              </li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>YANKEE DOODLE BOY </strong>(Don Liberto) from{" "}
                <em>Little Johnny Jones</em> by George M. Cohan
              </li>
              <li>
                <strong>MARY&apos;S A GRAND OLD NAME</strong> (Don Liberto) from{" "}
                <em>Forty-Five Minutes From Broadway</em> by George M. Cohan
              </li>
              <li>
                <strong>EVERY DAY IS LADIES&apos; DAY WITH ME</strong> (Vocal
                Ensemble) from <em>The Red Mill</em> by Victor Herbert and Henry
                Blossom
              </li>
              <li>
                <strong>THE 88 RAG</strong> (Don Liberto) from{" "}
                <em>To Broadway With Love</em> by Colin Romoff and Martin Charnin
              </li>
              <li>
                <strong>TILL THE CLOUDS ROLL BY</strong> (Vocal Ensemble) from{" "}
                <em>Oh, Boy!</em> by Jerome Kern, P.G. Wodehouse and Guy Bolton
              </li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>OVER THERE</strong> (Millie Slavin) by George M. Cohan
              </li>
              <li>
                <strong>THREE WONDERFUL LETTERS FROM HOME</strong> (Male Quintet)
                by James F. Hanley,
              </li>
              <li>Joe Goodwin and Ballard MacDonald</li>
              <li>
                <strong>WOULD YOU RATHER BE A COLONEL</strong> (Patti Karr and
                Girls) from <em>Ziegfeld Follies</em>
              </li>
              <li>by Archie Bottler and Sidney D. Mitchell</li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>ROSE OF WASHINGTON SQUARE</strong> (Millie Slavin) from{" "}
                <em>Ziegfeld Midnight Frolic</em>
              </li>
              <li>by James F. Hanley and Ballard Mac Donald</li>
              <li>
                <strong>BEAUTIFUL LADY</strong> (Bob Carroll, Guy Rotondo, Girls)
                from <em>To Broadway With Love</em>
              </li>
              <li>by Jerry Bock and Sheldon Harnick</li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>ANOTHER OP&apos;NIN&apos;, ANOTHER SHOW</strong> (The
                Company) from <em>Kiss Me, Kate</em> by Cole Porter
              </li>
              <li>
                <strong>THERE&apos;S NO BUSINESS LIKE SHOW BUSINESS</strong> (The
                Company) from <em>Annie Get Your Gun</em> by Irving Berlin
              </li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>CAROUSEL WALTZ</strong> (Orchestra) from <em>Carousel</em>{" "}
                by Richard Rodgers and Oscar Hammerstein II
              </li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>SPEAK LOW </strong>(Millie Slavin) from{" "}
                <em>One Touch of Venus</em> by Kurt Weill and Ogden Nash
              </li>
              <li>
                <strong>BUCKLE DOWN, WINSOCKI</strong> (Vocal Ensemble) from{" "}
                <em>Best Foot Forward</em> by Hugh Martin and Ralph Blane
              </li>
              <li>
                <strong>BALI HA&apos;I</strong> (Miriam Burton) from{" "}
                <em>South Pacific</em> by Richard Rodgers and Oscar Hammerstein
                II
              </li>
              <li>
                <strong>I STILL GET JEALOUS </strong>(Nancy Leighton, Guy
                Rotondo) from <em>High Button Shoes</em> by Jule Styne and Sammy
                Cahn
              </li>
              <li>
                <strong>F.D.R. JONES</strong> (Rod Perry and Vocal Ensemble) from{" "}
                <em>Sing Out the News</em> by Harold J. Rome
              </li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>MATA HARI MINE</strong> (Vocal Ensemble) from{" "}
                <em>To Broadway With Love</em> by Jerry Bock and Sheldon Harnick
              </li>
              <li>
                <strong>REMEMBER RADIO</strong> (Vocal Ensemble) from{" "}
                <em>To Broadway With Love</em> by Jerry Bock and Sheldon Harnick
              </li>
              <li>
                <strong>POPSICLES IN PARIS</strong> (The Company) from{" "}
                <em>To Broadway With Love</em> by Jerry Bock and Sheldon Harnick
              </li>
            </ul>
            <div className={styles.trackGap} />
            <ul className={styles.trackList}>
              <li>
                <strong>FINALE</strong> (The Company) from{" "}
                <em>To Broadway With Love</em> by Jerry Bock and Sheldon Harnick
              </li>
            </ul>
            <p className={styles.source} style={{ color: "#87cefa" }}>
              Source: Album Notes, Original Cast Album, Columbia (Sony) Music
            </p>
          </section>

          <section className={styles.notesPanel} aria-label="Album notes">
            <p>
              <strong>W</strong>hen <strong>TO BROADWAY WITH LOVE</strong>, the
              New York World&apos;s Fair&apos;s big, bright, bountiful musical
              extravaganza opened at The Music Hall in the Texas Pavilions in
              April 1964, Manhattan&apos;s newspaper critics were lavish in their
              praise. <em>The New York Times</em> called it &quot;a swift,
              sentimental journey into the songs dances and moods of other days .
              . . a cheerful show.&quot; Other reviewers variously described it as
              &quot;expertly conceived, &quot;beautifully staged . . . heavily
              populated with talent.&quot; &quot;the biggest eyeful and earful of
              stage memories you&apos;re every likely to meet&quot; and simply,
              &quot;a great show.&quot; This song-filled album preserves-perhaps as
              a memento of your own visit to The Music Hall-highlights from this
              salute to Broadway&apos;s musical theater.
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas34.jpg"
                alt="Dixie"
                width={658}
                height={221}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                In <strong>Dixie</strong>, cast recreates a moment from
                &quot;Bryant Minstrels.&quot;
              </p>
            </figure>
            <p>
              The Music Hall in the Texas Pavilions is a huge auditorium
              comfortably seating an audience of 2,600 people. During the course
              of the show the vast stage - 184 feet wide - holds 85 colorfully
              costumed singers and dancers, stunning scenery, and a movie screen
              upon which are flashed films from World War I, the Twenties,
              Thirties, World War II, the Forties, Fifties and Sixties to show
              us what was going on in the world at the time a certain show or
              song was popular.
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas33.jpg"
                alt="Beautiful Lady"
                width={658}
                height={315}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                &quot;<strong>Beautiful Lady</strong>, you&apos;re like a
                beautiful bird.&quot;
              </p>
            </figure>
            <p>
              A lavish reminiscence of nearly a century of musical comedy,{" "}
              <strong>TO BROADWAY WITH LOVE</strong> was conceived and directed
              by Morton Da Costa and produced by George Schaefer to remind us that
              although Broadway is but one of New York&apos;s City&apos;s main
              arteries, to most people it is the lifeline of theater, especially
              musical theater-in America. It is a musical bouquet to some of the
              song-and-dance men and women who over the years have delighted the
              nation and the world with words and music, romance and laughter
            </p>
            <p>
              One side of this album of highlights from{" "}
              <strong>TO BROADWAY WITH LOVE</strong> concentrates on the years
              from the early Minstrel Shows to the Ziegfeld era. The other side
              represents the shows of the Forties and modern times..
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas32.jpg"
                alt="Improvising Cast"
                width={658}
                height={241}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                Backstage, the cast improvises a musical number from some future
                Broadway show.
              </p>
            </figure>
            <p>
              <strong>JERRY BOCK</strong> and <strong>SHELDON HARNICK</strong>,
              composer and lyricist for <strong>TO BROADWAY WITH LOVE</strong>{" "}
              were most recently represented on Broadway with <em>She Love Me</em>
              , winner of both the Variety poll and the Saturday Review
              critics&apos; poll for the best score of 1963. Earlier, they had
              teamed up for <em>Fiorello!</em>, the first musical since{" "}
              <em>I&apos;d Rather Be Right</em> to have an actual political
              figure as its leading character. It was also the third musical to
              be awarded the Pulitzer Prize for drama, an honor it shared with
              another Broadway show with a political subject,{" "}
              <em>Of Thee I Sing</em>. They later wrote <em>Tenderloin</em> which
              starred Maurice Evans. Prior to their collaborations, Jerry Bock
              wrote the annual Haresfoot Show at the University of Wisconsin,
              and later provided the score for <em>Mr. Wonderful</em>, starring
              Sammy Davis, Jr. Sheldon Harnick, after studying music at
              Northwestern University, came to Broadway theatergoer&apos;s
              attention with his &quot;Boston Beguine,&quot; a hit of{" "}
              <em>New Faces of 1952</em>. The following year Orson Bean sang his
              &quot;Merry Minuet&quot; (&quot;They&apos;re rioting in Africa .
              . .&quot;) in <em>John Murray Anderson&apos;s Almanac</em>. Bock
              and Harnick are currently working on the score for{" "}
              <em>Fiddler on the Roof</em>, a musical version of Sholom
              Aleichem&apos;s Tevya&apos;s Daughters&apos; scheduled for
              Broadway.
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas31.jpg"
                alt="Carousel Waltz Ballet"
                width={658}
                height={246}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                Circus ring is setting for lavish <strong>Carousel Waltz</strong>{" "}
                ballet.
              </p>
            </figure>
            <p className={styles.source} style={{ color: "#87cefa" }}>
              Source: Album Notes, Original Cast Album, Columbia (Sony) Music
            </p>
          </section>

          <div className={styles.cdBanner}>
            <h2 className={styles.cdTitle}>TO BROADWAY WITH LOVE</h2>
            <h2 className={styles.cdHeading}>ORIGINAL CAST CD</h2>
          </div>

          <section className={styles.cdNotes} aria-label="CD liner notes">
            <p>
              <strong>T</strong>he next time you&apos;re with your fellow musical
              theatre enthusiasts and the conversation turns to trivia (as it
              always does), here&apos;s a question that you can ask:
            </p>
            <p>
              &quot;Can you identify the three musicals that played New York in
              1964 and offered songs by Jerry Bock and Sheldon Harnick?&quot;
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas35.jpg"
                alt="Broadway Tribute"
                width={658}
                height={109}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                A panoramic tribute to great Broadway shows of the past.
              </p>
            </figure>
            <p>
              Everyone will immediately exclaim <em>Fiddler on the Roof</em>,
              which opened on Sept. 22, 1964 and ran for a then-record 3,242
              performances. The more erudite of the bunch will recall that{" "}
              <em>She Loves Me</em>, which debuted on April 23, 1963, was still
              around for the first 10 days of 1964. But what of that third show?
            </p>
            <p>
              Some will guess <em>Man in the Moon</em>, the puppet show for which
              Bock and Harnick provided the score - but that played a week at the
              Biltmore in 1963. No, the answer, of course, is the album
              you&apos;re holding in your hands, <em>To Broadway With Love</em>.
              That&apos;s why the question said &quot;New York&quot; and not
              &quot;Broadway,&quot; or even &quot;off-Broadway.&quot; For{" "}
              <em>To Broadway With Love</em> was tailor-made for the Texas
              Pavilion at the 1964 World&apos;s Fair in Flushing Meadows, Queens.
              Now <em>that&apos;s </em>off-Broadway.
            </p>
            <div className={styles.twoUp}>
              <figure className={styles.twoUpItem}>
                <Image
                  src="/images/texas10/texas28.jpg"
                  alt="Yankee Doodle Boy"
                  width={295}
                  height={183}
                  className={styles.inlinePhotoImg}
                  unoptimized
                />
                <p className={styles.inlinePhotoCaption}>
                  Richard Tone recalls George M. Cohan&apos;s{" "}
                  <strong>Yankee Doodle Boy</strong>.
                </p>
              </figure>
              <figure className={styles.twoUpItem}>
                <Image
                  src="/images/texas10/texas61.jpg"
                  alt="Three Wonderful Letters From Home"
                  width={295}
                  height={245}
                  className={styles.inlinePhotoImg}
                  unoptimized
                />
                <p className={styles.inlinePhotoCaption}>
                  Comic visions of wife, daughter and mother appear to doughboys
                  in the sentimental{" "}
                  <strong>Three Wonderful Letters From Home</strong>.
                </p>
              </figure>
            </div>
            <p>
              It would be a revue that celebrated musical theater from the days
              of minstrel shows to Herbert, Cohan, Kern, Ziegfeld, Porter,
              Rodgers and Weill. Berlin and Rome may be most famous as foreign
              cities, but they&apos;re also the names of important American
              theater composers, so they made it into <em>To Broadway With Love, too</em>.
            </p>
            <p>
              The show was conceived and directed by Morton DaCosta, who&apos;d
              had four solid hits in the &apos;50s (<em>Plain and Fancy</em>,{" "}
              <em>No Time for Sergeants</em>, <em>Auntie Mame</em>, and{" "}
              <em>The Music Man</em>) before stumbling with <em>Saratoga</em>,{" "}
              <em>The Wall</em> and <em>Hot Spot</em>. Still, DaCosta was
              entrusted with the 90-minute show that would cost $1,250,000 - in
              an era when the average Broadway musical was budgeted at a third
              of that. Sure, the pavilion had 2,600 seats, but admission was only
              $4.80 for the best seats, and $2 for the not-so-good ones. It would
              take plenty of customers to make back that nut.
            </p>
            <div className={styles.twoUp}>
              <figure className={styles.twoUpItem}>
                <Image
                  src="/images/texas10/texas30.jpg"
                  alt="Would You Rather Be a Colonel"
                  width={295}
                  height={185}
                  className={styles.inlinePhotoImg}
                  unoptimized
                />
                <p className={styles.inlinePhotoCaption}>
                  Gloria LeRoy and World War I recruiting staff in{" "}
                  <strong>Would You Rather Be a Colonel</strong>.
                </p>
              </figure>
              <figure className={styles.twoUpItem}>
                <Image
                  src="/images/texas10/texas62.jpg"
                  alt="Speak Low"
                  width={295}
                  height={181}
                  className={styles.inlinePhotoImg}
                  unoptimized
                />
                <p className={styles.inlinePhotoCaption}>
                  Living statues gather round to hear <strong>Speak Low</strong>.
                </p>
              </figure>
            </div>
            <p>
              Alas, <em>To Broadway With Love</em> would run only 97 performances,
              leaving the Texas Pavilion to merely showcase such exhibits as
              &quot;Life on the Range&quot; and &quot;Art in Texas.&quot; Says
              Harnick, &quot;I don&apos;t blame people for not wanting to give up
              their time at the fair to go inside and see a show.&quot; That
              doesn&apos;t mean, however, that Bock and Harnick didn&apos;t do
              good work. They first provided the catchy title song. When DaCosta
              also wanted a &quot;new&quot; Ziegfeld number, Bock and Harnick
              obliged with &quot;Beautiful Lady.&quot; (Another song,
              &quot;Hawaii,&quot; didn&apos;t make this album.)
            </p>
            <p>
              But the songwriters biggest contributions came at show&apos;s end
              when, in the spirt of the forward-looking World&apos;s Fair, they
              imagined songs from the Broadway of tomorrow. Harnick&apos;s lyrics
              noted that there had been many recent musical biographies --{" "}
              <em>Funny Girl</em> and <em>The Sound of Music</em> -- though he
              only mentioned them after citing <em>Fiorello!</em> - his own show.
              (Hey, charity begins at home.)
            </p>
            <p>
              So Bock and Harnick imagined a musical about Mata Hari, and did a
              witty, tuneful parody. What&apos;s retroactively interesting is
              that three years later, there actually was a musical about Mata Hari
              - albeit a serious one - which had lyrics by Martin Charmin, the
              future <em>Annie</em> lyricist who had a song (&quot;The 88
              Rag&quot;) in <em>To Broadway With Love</em>. Says Charmin today,
              &quot;There is no truth to any assumption that I got the idea for
              &apos;Mata Hari&apos; from hearing Sheldon&apos;s song.&quot;
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas63.jpg"
                alt="The 88 Rag"
                width={365}
                height={365}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                <strong>The 88 Rag </strong>celebrates the keyboard wizards of
                ragtime era.
              </p>
            </figure>
            <p>
              Bock&apos;s melody for &quot;Popsicles in Paris&quot; is a real
              surprise. Says Harnick, &quot;Jerry and I wanted to try writing a
              jazz waltz.&quot; Indeed, it&apos;s unlike any Bock melody
              you&apos;ve ever heard. Harnick, meanwhile, also wanted to homage
              the fair&apos;s theme &quot;Man&apos;s Achievements on a Shrinking
              Globe in an Expanding Universe.&quot; So he came up with the idea
              that the world had become so small that one could now buy previously
              unavailable all-American foodstuffs in the most remote of places.
              (If you young &apos;uns out there don&apos;t understand the lyric,
              &quot;Metrecal in Moscow,&quot; just ask any overweight Baby
              Boomer.)
            </p>
            <p>
              Best of all, Bock and Harnick, in noting how much nostalgia
              there&apos;d been in recent Broadway musicals, created
              &quot;Remember Radio,&quot; a charming list song with a melody that
              was simply out to delight. &quot;Jerry was a big fan of radio
              serials,&quot; says Harnick, &quot;so he provided many references
              from those episodes of yesteryear.&quot; Harnick, though, pointed
              out that one of the delights of radio was that it encouraged a
              listener to close his eyes and visualize the scene that was offered
              in words. Indeed, you can now do the same by imagining what{" "}
              <em>To Broadway With Love</em> looked like while listening to this
              album.
            </p>
            <figure className={styles.inlinePhoto}>
              <Image
                src="/images/texas10/texas29.jpg"
                alt="Finale"
                width={658}
                height={195}
                className={styles.inlinePhotoImg}
                unoptimized
              />
              <p className={styles.inlinePhotoCaption}>
                <strong>Finale</strong>: the Company throws a final bouquet to
                Broadway, past, present and future.
              </p>
            </figure>
            <p>
              Today, there&apos;s precious little left of the World&apos;s Fair.
              Oh, the stainless steel globe known as the Unisphere is still
              there, as are a few ramshackle buildings. But add to the survivors
              something else: This original cast album of{" "}
              <em>To Broadway With Love</em>.
            </p>
            <div className={styles.byline}>
              <p>-Peter Filichia</p>
              <p>
                Peter Filichia is a columnist for TheaterMania, and the author of
                &quot;<em>Let&apos;s Put on a Musical!</em>&quot;
              </p>
            </div>
            <p className={styles.source} style={{ color: "#87cefa" }}>
              Source: Liner Notes, Original Cast CD, Sony Music
            </p>
          </section>

          <figure>
            <span className={styles.photoFrame}>
              <Image
                src="/images/texas10/texas54.jpg"
                alt="Album Back Cover"
                width={500}
                height={387}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              Source: Back Cover, Original Cast CD, Sony Music
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/texas09"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texas11"
      />
    </>
  );
}
