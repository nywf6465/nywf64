import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "Trans World Airlines — Airlines & The Fair — nywf64.com",
  description:
    "TWA Flight Center, Fair helicopter service, and Bill Young’s treasured TWA collectible — on nywf64.com.",
};

/** Morning (gray Times) vs afternoon (bold blue Arial) — matches legacy timetable. */
function TimeCell({
  time,
  bold,
}: {
  time: string;
  bold?: boolean;
}) {
  return (
    <td className={bold ? styles.scheduleTimeBold : styles.scheduleTime}>
      {time}
    </td>
  );
}

/**
 * Airlines feature page 3 (legacy airlines04.html remapped to /airlines03).
 * Stack: hero → Airlines nav (Page 4) → navy title bar → article → nav2
 * PREVIOUS → /airlines02; NEXT → /airlines04
 */
export default function Airlines03Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines03-title">
        <header className={styles.titleBar}>
          <h1 id="airlines03-title" className={styles.titleBarMain}>
            Trans World Airlines
          </h1>
        </header>

        <div className={styles.articleInnerWide}>
          <figure className={styles.combinedFigure}>
            <Image
              src="/images/airlines03/airlines43.jpg"
              alt="TWA Your Gateway to the Fair souvenir map advertisement"
              width={900}
              height={480}
              className={styles.combinedPhoto}
              unoptimized
            />
          </figure>
          <p className={styles.sourceLeft}>
            SOURCE: Souvenir Map &amp; Guide
          </p>

          <div className={styles.carrierRow}>
            <Image
              src="/images/airlines03/airlines07.jpg"
              alt="Timetable Cover"
              width={208}
              height={480}
              className={styles.carrierCover}
              unoptimized
            />
            <div className={`${styles.carrierCopy} ${styles.twaCopy}`}>
              <Image
                src="/images/airlines03/airlines06.jpg"
                alt="TWA Flight Center at JFK"
                width={250}
                height={136}
                className={styles.carrierMap}
                unoptimized
              />
              <p>
                The Space Age arrived for TWA at Kennedy International Airport
                in May, 1962 when their <em>magnificent Flight Center</em>{" "}
                opened for business. Designed by noted Finnish architect Eero
                Saarinen (who also designed the pavilion for IBM at the Fair)
                the TWA Flight Center was as contemporary and exciting as any
                pavilion a World&apos;s Fairgoer would see.
              </p>
              <p>
                Out at the Fairgrounds, TWA&apos;s four-engined piston powered
                Constellations roared overhead on take-off from LaGuardia. TWA
                participated in the Fair in a big way. Besides being the
                &quot;Official Airline&quot; of the Transportation &amp; Travel
                Pavilion, TWA featured Jet Helicopter service to the Port
                Authority Heliport at the Fair from the JFK Flight Center. The
                flight schedule for July, 1964 is shown below.
              </p>
            </div>
          </div>

          <div className={styles.scheduleWrap}>
            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th colSpan={16}>
                    <span className={styles.scheduleTitle}>
                      HELICOPTER SERVICE BETWEEN THE TWA FLIGHT CENTER AND THE
                      NEW YORK WORLD&apos;S FAIR
                    </span>
                    <span className={styles.scheduleFare}>
                      {" "}
                      * - FARE $6.00
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.scheduleLabel}>
                    N.Y. AIRWAYS FLIGHT NUMBER
                  </td>
                  {[
                    "151",
                    "252",
                    "156",
                    "259",
                    "170",
                    "272",
                    "173",
                    "274",
                    "175",
                    "277",
                    "178",
                    "279",
                    "190",
                    "291",
                    "294",
                  ].map((n) => (
                    <td key={n} className={styles.scheduleNum}>
                      {n}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.scheduleStation}>
                    <span className={styles.scheduleHead}>
                      TWA FLIGHT CENTER
                    </span>
                    <span className={styles.scheduleLabel}>
                      ..............Lv
                    </span>
                    <br />
                    <span className={styles.scheduleLabel}>
                      J.F.Kennedy Int&apos;l Airport
                    </span>
                  </td>
                  <TimeCell time="10 41" />
                  <TimeCell time="11 20" />
                  <TimeCell time="1 05" bold />
                  <TimeCell time="2 56" bold />
                  <TimeCell time="3 29" bold />
                  <TimeCell time="4 08" bold />
                  <TimeCell time="4 41" bold />
                  <TimeCell time="5 20" bold />
                  <TimeCell time="5 53" bold />
                  <TimeCell time="6 32" bold />
                  <TimeCell time="7 05" bold />
                  <TimeCell time="7 44" bold />
                  <TimeCell time="8 17" bold />
                  <TimeCell time="8 56" bold />
                  <TimeCell time="10 08" bold />
                </tr>
                <tr>
                  <td className={styles.scheduleStation}>
                    <span className={styles.scheduleHead}>
                      N.Y. WORLD&apos;S FAIR
                    </span>
                    <span className={styles.scheduleLabel}>
                      .................Ar
                    </span>
                  </td>
                  <TimeCell time="10 47" />
                  <TimeCell time="11 26" />
                  <TimeCell time="1 11" bold />
                  <TimeCell time="3 02" bold />
                  <TimeCell time="3 35" bold />
                  <TimeCell time="4 14" bold />
                  <TimeCell time="4 47" bold />
                  <TimeCell time="5 26" bold />
                  <TimeCell time="5 59" bold />
                  <TimeCell time="6 38" bold />
                  <TimeCell time="7 11" bold />
                  <TimeCell time="7 50" bold />
                  <TimeCell time="8 23" bold />
                  <TimeCell time="9 02" bold />
                  <TimeCell time="10 14" bold />
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.scheduleWrap}>
            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th colSpan={16}>
                    <span className={styles.scheduleTitle}>
                      HELICOPTER SERVICE BETWEEN THE NEW YORK WORLD&apos;S FAIR
                      AND THE TWA FLIGHT CENTER
                    </span>
                    <span className={styles.scheduleFare}>
                      {" "}
                      * - FARE $6.00
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.scheduleLabel}>
                    N.Y. AIRWAYS FLIGHT NUMBER
                  </td>
                  {[
                    "140",
                    "242",
                    "145",
                    "249",
                    "160",
                    "261",
                    "162",
                    "264",
                    "165",
                    "266",
                    "167",
                    "268",
                    "180",
                    "281",
                    "283",
                  ].map((n) => (
                    <td key={n} className={styles.scheduleNum}>
                      {n}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.scheduleStation}>
                    <span className={styles.scheduleHead}>
                      N.Y. WORLD&apos;S FAIR
                    </span>
                    <span className={styles.scheduleLabel}>
                      ................Lv
                    </span>
                  </td>
                  <TimeCell time="10 25" />
                  <TimeCell time="11 04" />
                  <TimeCell time="12 49" bold />
                  <TimeCell time="2 40" bold />
                  <TimeCell time="3 13" bold />
                  <TimeCell time="3 52" bold />
                  <TimeCell time="4 25" bold />
                  <TimeCell time="5 04" bold />
                  <TimeCell time="5 37" bold />
                  <TimeCell time="6 16" bold />
                  <TimeCell time="6 49" bold />
                  <TimeCell time="7 28" bold />
                  <TimeCell time="8 01" bold />
                  <TimeCell time="8 40" bold />
                  <TimeCell time="9 52" bold />
                </tr>
                <tr>
                  <td className={styles.scheduleStation}>
                    <span className={styles.scheduleHead}>
                      TWA FLIGHT CENTER
                    </span>
                    <span className={styles.scheduleLabel}>
                      ..............Ar
                    </span>
                    <br />
                    <span className={styles.scheduleLabel}>
                      J.F.Kennedy Int&apos;l Airport
                    </span>
                  </td>
                  <TimeCell time="10 31" />
                  <TimeCell time="11 10" />
                  <TimeCell time="12 55" bold />
                  <TimeCell time="2 46" bold />
                  <TimeCell time="3 19" bold />
                  <TimeCell time="3 58" bold />
                  <TimeCell time="4 31" bold />
                  <TimeCell time="5 10" bold />
                  <TimeCell time="5 43" bold />
                  <TimeCell time="6 22" bold />
                  <TimeCell time="6 55" bold />
                  <TimeCell time="7 34" bold />
                  <TimeCell time="8 07" bold />
                  <TimeCell time="8 46" bold />
                  <TimeCell time="9 58" bold />
                </tr>
              </tbody>
            </table>
            <p className={styles.scheduleFoot}>
              *In cooperation with N.Y. Airways
            </p>
            <p className={styles.sourceLeft}>
              SOURCE: <em>TWA</em> timetable, July, 1964, Bob Esler Collection.
              Top Photo: <em>TWA</em> Archives
            </p>
          </div>

          <div className={styles.chicagoRow}>
            <div className={styles.twaCopy}>
              <p>
                Headquartered in New York, TWA realized that the Fair would mean
                big travel business as one of America&apos;s leading domestic
                and international carriers. Typical 1964 one-way fares between
                Los Angeles and New York on a TWA <em>StarStream</em> Jet ranged
                from $145 Coach to $162 Jet First Class. Round trip between
                Madrid and New York went for $341 for a 21-day Excursion fare to
                a whopping $754 for First Class travel.
              </p>
              <p>
                TWA has faded into history along with the Fair having recently
                been acquired by American Airlines. Their magnificent Flight
                Center sits abandoned at Kennedy Airport, its fate uncertain. A
                ghostly reminder of the Space Age.
              </p>
            </div>
            <Image
              src="/images/airlines03/airlines08.jpg"
              alt="Timetable Cover"
              width={186}
              height={320}
              className={styles.chicagoCover}
              unoptimized
            />
          </div>
          <p className={styles.sourceLeft}>
            SOURCE: <em>TWA</em> Chicago timetable, March, 1964, Bob Esler
            Collection.
          </p>

          <figure className={styles.matchbookFigure}>
            <Image
              src="/images/airlines03/airlines37.jpg"
              alt="Matchbook Cover"
              width={200}
              height={363}
              className={styles.matchbookPhoto}
              unoptimized
            />
          </figure>

          <figure className={styles.adFullFigure}>
            <Image
              src="/images/airlines03/airlines32.jpg"
              alt="French Magazine TWA Advertisement"
              width={547}
              height={371}
              className={styles.adFullPhoto}
              unoptimized
            />
          </figure>
          <p className={styles.sourceLeft}>SOURCE: online auction, eBay</p>

          <figure className={styles.framedFigure}>
            <Image
              src="/images/airlines03/airlines44.jpg"
              alt=""
              width={220}
              height={480}
              className={styles.framedPhoto}
              unoptimized
            />
          </figure>
          <p className={styles.sourceLeft}>
            SOURCE: Souvenir Map &amp; Guide
          </p>

          <hr className={styles.rule} />

          <p className={styles.treasureTitle}>My Treasured</p>
          <p className={styles.treasureTitle}>Collectible from TWA</p>
          <p className={styles.treasureBy}>Bill Young</p>

          <div className={styles.treasureRow}>
            <Image
              src="/images/airlines03/airlines05.jpg"
              alt="TWA Counter Display Unit"
              width={215}
              height={322}
              className={styles.treasurePhoto}
              unoptimized
            />
            <div className={styles.treasureCopy}>
              <p>
                It didn&apos;t take long after that visit to O&apos;Hare for my
                cousin to realize that I was hooked on airplanes. He would often
                send home discarded airline items for me to decorate my room
                with.
              </p>
              <p>
                One late autumn day in 1964 a box of counter display items
                arrived that happened to advertise the New York World&apos;s
                Fair! There were two large cardboard displays from TWA that came
                complete with a model Unisphere and <em>StarStream</em> Jet
                flying overhead. The larger was over 4-feet tall and the smaller
                stood about 3-feet. The other item was a series of interlocking
                cardboard cubes advertising exciting United Air Lines
                destinations, including New York and the Fair!
              </p>
            </div>
          </div>

          <div className={styles.treasureBody}>
            <p>
              Almost a decade went by and, in 1972, I began to develop my
              long-lasting interest in the Fair. When my Dad realized I was
              collecting stuff from the Fair he said &quot;I put some junk up in
              the attic years ago that you got from Rich from that Fair. You
              want it?&quot; Did I want it??? YES!
            </p>
            <p>
              Unfortunately, all that was left was the smaller of the two TWA
              displays. I immediately decided to &quot;dress-it-up&quot; a bit
              and spray painted the yellow and purple orbitals of the Unisphere
              gold! Oh well! Say good-bye to the value of the piece on the
              collectibles market. It is still something I&apos;ll never part
              with and is my most treasured collectible.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines02"
        explicitPrevious
        nextHref="/airlines04"
      />
    </>
  );
}
