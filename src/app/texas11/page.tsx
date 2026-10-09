import type { Metadata } from "next";
import Image from "next/image";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./texas11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import {
  castPortraits,
  concertRows,
  musicRows,
  permissionsNote,
  staffPortraits,
  type ProgramPortrait,
  type SongRow,
} from "./texas11Data";

export const metadata: Metadata = {
  title:
    "To Broadway with Love - Souvenir Program — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Souvenir program for To Broadway With Love at the Texas Pavilions Music Hall, 1964/1965 New York World’s Fair on nywf64.com.",
};

function SongTable({
  heading,
  rows,
}: {
  heading: string;
  rows: SongRow[];
}) {
  return (
    <div className={styles.songTableWrap}>
      <h2 className={styles.sectionH1}>{heading}</h2>
      <table className={styles.songTable}>
        <thead>
          <tr>
            <th>SONG TITLE</th>
            <th>FROM THE SHOW</th>
            <th>COMPOSER</th>
            <th>LYRICIST</th>
            <th>YEAR</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${heading}-${row.title}-${row.year}`}>
              <td><em>{row.title}</em></td>
              <td>{row.show ? <em>{row.show}</em> : null}</td>
              <td>{row.composer}</td>
              <td>{row.lyricist}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PortraitCard({ portrait }: { portrait: ProgramPortrait }) {
  return (
    <div className={styles.portraitCard}>
      <div className={styles.portraitCaption}>
        <strong>{portrait.name}</strong>
        {portrait.role ? (
          <>
            <br />
            <em>({portrait.role})</em>
          </>
        ) : (
          <>
            <br />
            <em>(Cast)</em>
          </>
        )}
      </div>
      <Image
        src={`/images/texas11/${portrait.file}`}
        alt={portrait.name}
        width={portrait.width}
        height={portrait.height}
        className={styles.photoImg}
        unoptimized
      />
    </div>
  );
}

/**
 * Texas Pavilions — To Broadway with Love souvenir program (legacy texas11.html).
 * Stack: hero → TexasNavChrome → navy title → program → Nav2Bar.
 */
export default function Texas11Page() {
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

      <article className={styles.article} aria-labelledby="texas11-title">
        <header className={styles.titleBar}>
          <h1 id="texas11-title" className={styles.titleBarMain}>
            To Broadway with Love - Souvenir Program
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.programBlock} aria-label="Program covers">
            <div className={styles.coversRow}>
              <Image
                src="/images/texas11/texas55.jpg"
                alt="Cover"
                width={400}
                height={550}
                className={styles.photoImg}
                unoptimized
              />
              <div>
                <p className={styles.coverBackText}>THE</p>
                <p className={styles.coverBackText}>TEXAS</p>
                <p className={styles.coverBackText}>PAVILIONS</p>
                <Image
                  src="/images/texas11/texas56.jpg"
                  alt="Back Cover / Texas State Flag"
                  width={360}
                  height={234}
                  className={styles.photoImg}
                  unoptimized
                />
                <p className={styles.coverPublisher}>
                  NEW YORK WORLD&apos;S FAIR 1964-1965
                </p>
                <p className={styles.coverPublisher}>
                  <em>Published by</em> PROGRAM PUBLISHING CO.,{" "}
                  <em>1472 Broadway, New York 10036, N.Y.</em>
                </p>
              </div>
            </div>
            <p className={styles.source}>
              Source: Front/Back Cover, Souvenir Program <em>To Broadway With Love</em>
            </p>
            <p className={styles.source}>
              Source: for the following, Souvenir Program <em>To Broadway With Love</em>
            </p>
          </section>

          <hr className={styles.sectionRule} />

          <figure>
            <span className={styles.photoFrame}>
              <Image
                src="/images/texas11/texas57.jpg"
                alt="Inside Cover"
                width={560}
                height={760}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="Production credits">
            <div className={styles.credits}>
              <p>Angus G. Wynne, Jr. &amp; Compass Fair, Inc.</p>
              <p className={styles.creditsRole}><em>present</em></p>
              <p className={styles.creditsTitle}>TO BROADWAY WITH LOVE</p>
              <p className={styles.creditsRole}>
                <em>Dances and Musical Numbers Staged By</em>
              </p>
              <p className={styles.creditsName}>DONALD SADDLER</p>
              <p className={styles.creditsRole}>
                <em>Music Adapted and Arranged By</em>
              </p>
              <p className={styles.creditsName}>PHILIP J. LANG</p>
              <div className={styles.creditsGrid}>
                <div>
                  <p className={styles.creditsRole}><em>Scenery Designed By</em></p>
                  <p className={styles.creditsName}>PETER WOLF</p>
                </div>
                <div>
                  <p className={styles.creditsRole}><em>Costumes Designed By</em></p>
                  <p className={styles.creditsName}>FREDDY WITTOP</p>
                </div>
                <div>
                  <p className={styles.creditsRole}><em>Lighting By</em></p>
                  <p className={styles.creditsName}>JEAN ROSENTHAL</p>
                </div>
                <div>
                  <p className={styles.creditsRole}><em>Conductor</em></p>
                  <p className={styles.creditsName}>OSCAR KOSARIN</p>
                </div>
                <div>
                  <p className={styles.creditsRole}><em>Musical Director</em></p>
                  <p className={styles.creditsName}>FRANZ ALLERS</p>
                </div>
                <div>
                  <p className={styles.creditsRole}>
                    <em>Associate Musical Director</em>
                  </p>
                  <p className={styles.creditsName}>JAMES LEON</p>
                </div>
              </div>
              <p className={styles.creditsRole}>
                <em>Title theme and Original Material By</em>
              </p>
              <p className={styles.creditsName}>JERRY BOCK and SHELDON HARNICK</p>
              <div className={styles.creditsGrid}>
                <div>
                  <p className={styles.creditsRole}><em>Associate Choreographers</em></p>
                  <p className={styles.creditsName}>TED CAPPY &amp; STUART HODES</p>
                </div>
                <div>
                  <p className={styles.creditsRole}><em>Production Coordinator</em></p>
                  <p className={styles.creditsName}>SAMMY LAMBERT</p>
                </div>
                <div>
                  <p className={styles.creditsRole}><em>Film Sequences by</em></p>
                  <p className={styles.creditsName}>BEATRICE CUNNINGHAM</p>
                </div>
              </div>
              <p className={styles.creditsRole}>
                <em>Production Conceived and Staged By</em>
              </p>
              <p className={styles.creditsBig}>MORTON DA COSTA</p>
              <p className={styles.creditsRole}><em>Produced By</em></p>
              <p className={styles.creditsBig}>GEORGE SCHAEFER</p>
              <p className={styles.creditsBig}>
                THE MUSIC HALL AT THE TEXAS PAVILIONS
              </p>
              <p>
                <em>Executive Producer, </em>
                <span className={styles.creditsName}>Gordon R. Wynne, Jr.</span>
              </p>
              <Image
                src="/images/texas11/texas58.jpg"
                alt=""
                width={600}
                height={104}
                className={styles.photoImg}
                unoptimized
              />
            </div>
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="George Schaefer welcome">
            <div className={styles.welcomeGrid}>
              <div>
                <p className={styles.nameHeading}>GEORGE</p>
                <p className={styles.nameHeading}>SCHAEFER</p>
              </div>
              <Image
                src="/images/texas11/texas59.jpg"
                alt="George Schaefer"
                width={300}
                height={329}
                className={styles.photoImg}
                unoptimized
              />
            </div>
            <div className={styles.prose}>
              <p><strong>W</strong>elcome to the world of musical comedy...</p>
              <p>
                <strong>I</strong>t is a world to which you already belong,
                because the songs and dances that were first performed on the
                stages of a few dozen theatres in the midst of Manhattan have
                become part of the lives of people everywhere.
              </p>
              <p>
                One hundred years ago entertainments such as <em>The Black Crook</em>{" "}
                and <em>Bryant&apos;s Minstrels</em> started a movement from which
                has emerged a unique, dynamic theatre form that playgoers
                throughout the world associate with Broadway. Our aim in preparing
                a special show for a World&apos;s Fair in New York has been to
                capture the excitement, the gaiety, the music and magic of this
                century.
              </p>
              <p>
                Here was an enormous challenge. We had to avoid being a mere
                historical pageant and, of course, there was no possible way to
                include all of the available riches. We were fortunate, indeed, in
                persuading Morton Da Costa to take the production into his most
                talented hands and conceive and stage <em>TO BROADWAY WITH LOVE</em>.
                Moreover, we believe our entire creative production team consists
                of the finest talents in the theatre today. Even the auditorium and
                stage have been designed especially for this salute to the many
                great leaders of the American Musical Theatre.
              </p>
              <p style={{ textAlign: "right" }}>
                Thanks for joining us! Enjoy yourselves!
              </p>
              <p style={{ textAlign: "right" }}>
                <Image
                  src="/images/texas11/texas60.jpg"
                  alt="George Schaefer signature"
                  width={150}
                  height={76}
                  unoptimized
                />
              </p>
            </div>
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="Morton Da Costa biography">
            <div className={styles.welcomeGrid}>
              <Image
                src="/images/texas11/texas74.jpg"
                alt="Morton DaCosta"
                width={300}
                height={332}
                className={styles.photoImg}
                unoptimized
              />
              <div>
                <p className={styles.nameHeading} style={{ textAlign: "left" }}>
                  MORTON
                </p>
                <p className={styles.nameHeading} style={{ textAlign: "left" }}>
                  DA COSTA
                </p>
                <Image
                  src="/images/texas11/texas75.jpg"
                  alt="Morton DaCosta"
                  width={200}
                  height={194}
                  className={styles.photoImg}
                  unoptimized
                />
              </div>
            </div>
            <div className={styles.proseWide} style={{ textAlign: "left" }}>
              <p>
                <strong>MORTON DA COSTA</strong> (<em>Director</em>) has had a
                phenomenally successful career. During one stretch of five years,
                he brought to Broadway four successive hits, <em>Plain and Fancy</em>
                , <em>No Time For Sergeants</em>, <em>Auntie Mame </em>and{" "}
                <em>The Music Man</em>. The key to this record lies in the fact
                that he is a thorough-going professional, schooled in every phase
                of the theatre and, as a result, he inspires confidence. Born in
                Philadelphia, he attended Temple University where he acted,
                directed, designed scenery and costumes and finally became
                President of the Templayers. He also became assistant to the
                drama director, Paul E. Randall. Upon graduation, he was for a
                while an instructor at the Temple University School of the Theatre.
                Like many other fine directors, Da Costa began his professional
                stage career as an actor, his first job being with the Claire Tree
                Major Children&apos;s Theatre which travelled thousands of miles each
                season across the country. With a group of other serious-minded
                young people from the Children&apos;s Theatre, Da Costa formed the
                Civic Repertory Theatre in Dayton, Ohio, where he produced plays
                for four years.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "flex-end" }}>
                <Image
                  src="/images/texas11/texas76.jpg"
                  alt="Morton DaCosta"
                  width={250}
                  height={212}
                  unoptimized
                />
                <Image
                  src="/images/texas11/texas77.jpg"
                  alt="Morton DaCosta"
                  width={200}
                  height={197}
                  unoptimized
                />
              </div>
              <p>
                He also produced and directed a 26 week dramatic radio series
                called <em>Great Days in Dayton</em> for the Dayton Power and Light
                Co. Somewhat later, he operated his own successful summer theatre,
                The Port Players in Port Washington, just outside of Milwaukee,
                Wisc. For another two summers, he directed the productions of the
                Cragsmoor Summer Theatre in New York. Among the stars he directed
                in summer theatre are Joan Blondell, Judy Holliday, Lillian Gish
                and Ruth Chatterton.
              </p>
              <p>
                Da Costa&apos;s first Broadway play as an actor was{" "}
                <em>The Skin of Our Teeth</em>, starring Tallulah Bankhead and
                Frederic March. Other plays in which he was featured are{" "}
                <em>War President</em>, <em>The G.I. Hamlet</em>,{" "}
                <em>Man and Superman</em>, <em>Stovepipe Hat</em>, and{" "}
                <em>The Tangled Web</em>. It was on <em>The G.I. Hamlet</em> that
                Da Costa met Maurice Evans. Later he became Evan&apos;s assistant and
                in tis capacity organized the road company of{" "}
                <em>Man and Superman</em>. He also persuaded Evans to become
                artistic supervisor for the New York City Center productions. It
                was there that Da Costa was launched as a Broadway stage director,
                with the presentation of a series of classics in 1950, ie:{" "}
                <em>The Alchemist</em>, starring Jose Ferrer;{" "}
                <em>She Stoops to Conquer</em>, staring Celeste Holm;{" "}
                <em>Dream Girl</em>, starring Judy Holliday, and{" "}
                <em>Captain Brasshound&apos;s Conversation</em>, starring Edna Best.
                He also directed a touring company of <em>Autumn Crocus</em>{" "}
                starring Margaret Truman. Later, he directed the national company
                of <em>Sabrina Fair</em>, starring Diana Lynn, Wendell Corey, and
                Estelle Winwood. Then began his phenomenal string of Broadway
                successes. The first was <em>Plain and Fancy</em>, launched at the
                Mark Hellinger Theatre, in 1955, a success he also duplicated in
                London at the Drury Lane Theatre. Da Costa&apos;s career has also taken
                him to Hollywood where he directed the eminently successful film
                versions of his Broadway successes, <em>Auntie Mame </em>and{" "}
                <em>The Music Man</em>.
              </p>
            </div>
          </section>

          <hr className={styles.sectionRule} />

          <SongTable heading="THE MUSIC" rows={musicRows} />
          <SongTable heading="CONCERT" rows={concertRows} />

          <div className={styles.permissions}>
            <div>
              <Image
                src="/images/texas11/texas73.jpg"
                alt="Program illustration"
                width={340}
                height={341}
                className={styles.photoImg}
                unoptimized
              />
              <Image
                src="/images/texas11/texas72.jpg"
                alt="Program illustration"
                width={400}
                height={263}
                className={styles.photoImg}
                unoptimized
              />
            </div>
            <div className={styles.permissionsBox}>
              <p style={{ textAlign: "center", fontSize: "0.75rem" }}>
                MUSIC USED BY SPECIAL PERMISSION
                <br />
                OF THE PUBLISHERS
              </p>
              <p>{permissionsNote}</p>
            </div>
          </div>

          <hr className={styles.sectionRule} />

          <section aria-label="Creative staff">
            <div className={styles.staffRow}>
              {staffPortraits.slice(0, 4).map((p) => (
                <PortraitCard key={p.file} portrait={p} />
              ))}
            </div>
            <div className={styles.staffRow}>
              {staffPortraits.slice(4, 7).map((p) => (
                <PortraitCard key={p.file} portrait={p} />
              ))}
            </div>
            <div className={styles.staffRow}>
              {staffPortraits.slice(7).map((p) => (
                <PortraitCard key={p.file} portrait={p} />
              ))}
            </div>
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.castCollage} aria-label="Cast collage">
            <Image src="/images/texas11/texas90.jpg" alt="" width={225} height={155} unoptimized />
            <Image src="/images/texas11/texas91.jpg" alt="" width={227} height={155} unoptimized />
            <Image src="/images/texas11/texas92.jpg" alt="" width={229} height={155} unoptimized />
            <Image src="/images/texas11/texas93.jpg" alt="" width={219} height={155} unoptimized />
            <div className={styles.castCollageRow2}>
              <Image src="/images/texas11/texas98.jpg" alt="" width={225} height={284} unoptimized />
              <Image src="/images/texas11/texas100.jpg" alt="" width={456} height={284} unoptimized />
              <Image src="/images/texas11/texas99.jpg" alt="" width={219} height={284} unoptimized />
            </div>
            <Image src="/images/texas11/texas94.jpg" alt="" width={225} height={155} unoptimized />
            <Image src="/images/texas11/texas95.jpg" alt="" width={227} height={155} unoptimized />
            <Image src="/images/texas11/texas96.jpg" alt="" width={229} height={155} unoptimized />
            <Image src="/images/texas11/texas97.jpg" alt="" width={219} height={155} unoptimized />
          </section>

          <hr className={styles.sectionRule} />

          <section aria-label="Cast">
            <div className={styles.portraitGrid}>
              {castPortraits.map((p) => (
                <PortraitCard key={p.file} portrait={p} />
              ))}
            </div>
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="Welcome to The Texas Pavilions">
            <Image
              src="/images/texas11/texas123.jpg"
              alt="Texas State Flag"
              width={400}
              height={252}
              className={styles.photoImg}
              unoptimized
            />
            <div className={styles.prose}>
              <p><strong>Welcome to THE TEXAS PAVILIONS</strong></p>
              <p>
                We hope you will linger a while in The Texas Pavilions after you
                have seen <em>To Broadway With Love</em>. Our three acres here in
                the Lake Amusement area offer a generous sampling of the wonderful,
                wide, wide world of Texas, an oasis of friendship at the Fair. The
                Texas Pavilions provide fun-filled entertainment for the entire
                family and at the same time presents the &quot;new&quot; Texas, the state
                of ultra-modern turnpikes and highways . . . state parks and lakes
                offering the finest in outdoor recreation and living . . .
                industrial plants unmatched by any in the entire country . . . all
                of this making up the &quot;new face&quot; of Texas - a state destined to be
                the exploration center in the &quot;race for space&quot;.
              </p>
              <p>
                Elsewhere in these pages there are descriptions of The Frontier
                Palace, the Executive Lounge and other pleasant places to eat and
                drink. But you won&apos;t want to miss the delightful regional treats
                offered by the <em>Gateway to Mexico</em> which specializes in such
                tangy South-of-the-Border dishes as Chili Con Carne, Enchiladas and
                Tacos . . . and the <em>Shrimp House</em> specializing in every
                conceivable means of serving up those marvelous Texas gulf shrimp .
                . . and the <em>Beer Gardens</em> specializing in Chicken-in-the-Basket
                and Texas Hot Dogs. All these - and other delectations - offer
                assurance to the Texas Pavilions visitor that he won&apos;t go hungry!
              </p>
            </div>
            <figure>
              <Image
                src="/images/texas11/texas124.jpg"
                alt="Angus G. Wynne, Jr. and Governor John Connally"
                width={400}
                height={226}
                className={styles.photoImg}
                unoptimized
              />
              <p className={styles.source} style={{ textAlign: "right" }}>
                Angus G. Wynne, Jr. (left) and Governor John Connally pictured with
                drawing of The Texas Pavilions.
              </p>
            </figure>
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="Texas Pavilions amenities">
            <Image
              src="/images/texas11/texas125.jpg"
              alt="The Frontier Palace"
              width={600}
              height={211}
              className={styles.photoImg}
              unoptimized
            />
            <div className={styles.proseWide} style={{ textAlign: "left" }}>
              <p><strong>The Frontier Palace</strong></p>
              <p>
                At The Frontier Palace the air is filled with the mouth-watering
                aroma of chuck-wagon beef . . . the clock will be turned back . . .
                and the Old West will come alive! On stage, beautiful dance-hall
                girls perform their traditional Can-Can to the delight of the
                audience! It&apos;s gaudy, romantic, authentic and daring - it&apos;s The
                Frontier Palace, where the Old West lives again! Open until 2 A.M.
              </p>
              <p><strong>Hosts and Hostesses</strong></p>
              <p>
                Four hundred young Texas men and women, selected on a merit basis
                from the colleges and universities throughout the state are your
                hosts and hostesses in The Texas Pavilions. They have at their
                command a full knowledge of Lone Star State folklore, and a thorough
                understanding of their own Pavilions. With their colorful costumes,
                they are easily spotted.
              </p>
              <p><strong>The Executive Lounge</strong></p>
              <p>
                The Executive Lounge is available to the patrons of the Champagne
                Circle and offers a note of luxury and elegance you will not want to
                miss. Located on the second floor of the Music Hall, it is a haven
                for discriminating visitors to the Fair who want to relax with
                their favorite cocktail and view <em>To Broadway With Love</em> from
                the fabulous Champagne Circle.
              </p>
            </div>
            <Image
              src="/images/texas11/texas126.jpg"
              alt="Texas Pavilions"
              width={600}
              height={218}
              className={styles.photoImg}
              unoptimized
            />
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="Management">
            <div className={styles.proseWide} style={{ textAlign: "left" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Image
                  src="/images/texas11/texas128.jpg"
                  alt="Gordon R. Wynne, Jr."
                  width={171}
                  height={221}
                  unoptimized
                />
                <div style={{ flex: "1 1 16rem" }}>
                  <p>
                    <strong>I</strong>n six short years, Gordon R. Wynne, Jr. has
                    established himself in New York as one of its most promising and
                    talented young producers. Serving now as Executive Producer for
                    the Music hall, it was Mr. Wynne who two years ago brought the
                    idea of a spectacular musical production for the World&apos;s Fair to
                    his associates at Compass Productions, producers of the
                    award-winning Hallmark Hall of Fame. For the past two years, he
                    has acted as Vice-President and Chief Executive officer of Compass
                    Fair, Inc. and in that capacity has been instrumental in
                    bringing together the creative and financial efforts which have
                    resulted in the construction of the Music Hall and the production
                    of To Broadway With Love.
                  </p>
                  <p>
                    Mr. Wynne graduated from Culver Military Academy in 195, from
                    the University of Texas with a B.A. degree in 1954 and with a Law
                    degree in 1957. For three years he worked as Stage Manager and
                    the Production Manager of the State Fair Musicals in Dallas,
                    Texas and went on subsequently to become Production Manager for
                    Judy Garland. Since 1959 he has served as Vice-President of
                    Compass Productions, Inc.
                  </p>
                  <p>
                    He is married to the former Phyllis Berry of Houston. With their
                    two children, Cammy and Carol, they reside in Darien, Connecticut.
                  </p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem", margin: "1rem 0" }}>
                <Image src="/images/texas11/texas127.jpg" alt="Dean I. Dawley" width={107} height={132} unoptimized />
                <Image src="/images/texas11/texas129.jpg" alt="Rod H. Rodomista" width={115} height={132} unoptimized />
                <Image src="/images/texas11/texas130.jpg" alt="William McCallum" width={117} height={132} unoptimized />
                <Image src="/images/texas11/texas131.jpg" alt="Charles R. Meeker, Jr." width={114} height={132} unoptimized />
                <Image src="/images/texas11/texas132.jpg" alt="Luther D. Clark" width={119} height={132} unoptimized />
              </div>
              <p>
                <strong>DEAN I. DAULEY</strong> is General Manager of the Texas
                Pavilions and the Music Hall. Following his armed forces career as a
                Lieutenant in Naval Intelligence, he was an Assistant Professor in
                Government at Texas Technological College in Lubbock. He then held
                the position of the first City Manager for the cities of Owensboro,
                Ky., Grand Prairie, Texas and Little Rock, Ark. He joined Great
                Southwest Corporation in 1960 where he has been V.P. in charge of
                property management and Gen. Mgr. of 6 Flags Over Texas.
              </p>
              <p>
                <strong><u>The Music Hall and The Texas Pavilions</u></strong>
              </p>
              <p>
                <strong>&quot;ROD&quot; H. RODOMISTA</strong> is Director of Operations for
                the Texas Pavilions and the Music Hall. His early years were spent in
                the vaudeville, presentation and legitimate theatres. With the advent
                of television, he joined the National Broadcasting Company in 1950
                and soon became responsible for production services and studio and
                theatre operations. In 1960 he joined CBS in a similar capacity until
                April, 1963, when he joined Wynne-Compass-Fair, Inc.
              </p>
              <p>
                <strong>WILLIAM McCALLUM</strong> is the food and beverage director
                for the Texas Pavilions and the Music Hall. He was the owner of Blair
                House Restaurant before joining the Angus Wynne, Jr. organization. His
                career took him from the Cunard Line to the Hampshire House, from there
                to the Hotel Pierre, the Voisin and Restaurant Associates.
              </p>
              <p>
                <strong>CHARLES R. MEEKER, Jr., </strong> was responsible for the
                entertainment in the Texas Pavilions and the Frontier Palace. He also
                conducted the orientation and indoctrination of all the college
                students that serve as hosts and hostesses in the Pavilion. After
                attending Southern Methodist University, he served in various executive
                capacities with Interstate Theatres before becoming Managing Director
                of the State Fair Musicals and State Fair Music Hall in Dallas. In
                1961 he became a consultant to Great Southwest Corporation and SIX
                FLAGS Over Texas. He stages all the productions and entertainment at
                that successful family recreation park and also sets up and conducts
                the careful orientation and indoctrination programs that have made the
                park famous throughout the country.
              </p>
              <p>
                <strong>LUTHER D. CLARK</strong> was Manager of construction of the
                Music Hall and the Texas Pavilions and has been associated with Angus
                Wynne for the past seventeen years. His background has included
                varied experience in all fields of construction ranging from heavy
                engineering installations to the complicated details of the amusement
                park, SIX FLAGS Over Texas. A native Texan, Mr. Clark has had direct
                and sole responsibility for the nearly twenty million dollars of
                commercial and industrial construction in the Great Southwest
                Industrial District, the nation&apos;s largest planned industrial complex
                located midway between Dallas and Fort Worth.
              </p>
            </div>
          </section>

          <hr className={styles.sectionRule} />

          <section className={styles.programBlock} aria-label="Closing essay">
            <p className={styles.source}>
              Source: for this page and all previous, excerpted from the Souvenir
              Program <em>To Broadway With Love</em>
            </p>
            <Image
              src="/images/texas11/texas135.jpg"
              alt="Angus G. Wynne, Jr."
              width={400}
              height={416}
              className={styles.photoImg}
              unoptimized
            />
            <div className={styles.closingEssay}>
              <p>
                <strong>W</strong>ELCOME TO The Texas Pavilions and The Music Hall. We
                hope that your stay here will enhance your enjoyment of this, the
                greatest of all world fairs.
              </p>
              <p>
                The efforts of many talented and dedicated people have gone into the
                construction and operation of this complex. My thanks to them and to
                you for being with us.
              </p>
              <p style={{ textAlign: "center" }}>Regards,</p>
              <p style={{ textAlign: "right" }}>
                <Image
                  src="/images/texas11/texas133.jpg"
                  alt="Angus G. Wynne, Jr. signature"
                  width={150}
                  height={53}
                  unoptimized
                />
              </p>
              <p>
                <strong>T</strong>HE INEVITABLE RESULTS of a project such as The Texas
                Pavilions will be the definite reflections of the man behind the
                idea. So it is that Angus G. Wynne, Jr., brings to the New York
                World&apos;s Fair a wealth of leadership and dedication that assures a
                successful beginning as well as a successful ending.
              </p>
              <p>
                Born to the heritage of a great Texas name, Wynne has earned his
                experience in the postgraduate schools that range from oil-field
                roughneck to president of the famed Great Southwest Corporation,
                developers of one of the nation&apos;s unique and outstanding industrial
                parks. His capacity for concentrated and continuous effort is
                legendary among his associates, and his willingness to dream big
                dreams and then make them come true has endowed him with the
                reputation of making a habit of success.
              </p>
              <p>
                Wynne&apos;s most recent spectacular was the creation of{" "}
                <em>Six Flags Over Texas</em>, the multi-million-dollar amusement
                enterprise that has earned international approval in less than two
                years and now beckons tourists from all over the world. With the adroit
                touch of the master showman, he makes his debut on the Gotham scene
                with considerable experience in imaginative creation and sound
                operation.
              </p>
              <p>
                An alumnus of the University of Texas and a native son devoted to his
                state and its welfare, he approaches the forthcoming undertaking at
                the World&apos;s Fair with great zeal, believing that, in the best
                tradition of Texas, Texans have always known more of victory than of
                defeat.
              </p>
            </div>
            <Image
              src="/images/texas11/texas134.jpg"
              alt="Texas Pavilions"
              width={200}
              height={133}
              className={styles.photoImg}
              unoptimized
            />
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/texas10"
        explicitPrevious
        overviewHref="/texasoverview"
        nextHref="/texasoverview"
      />
    </>
  );
}
