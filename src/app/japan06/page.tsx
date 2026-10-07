import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./japan06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking — Japan — nywf64.com",
  description:
    "Groundbreaking ceremony remarks and photographs for the Japan Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Japan groundbreaking — body from legacy japan06.html.
 * Remarks transcription + photographs; Adobe chrome omitted.
 * Legacy wording and typos preserved (Attache', Mashahide, Exhibitor's).
 */
export default function Japan06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Japan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/japanoverview/hero-banner.jpg"
            alt="Japan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JapanNavChrome />

      <article className={styles.article} aria-labelledby="japan06-title">
        <header className={styles.titleBar}>
          <h1 id="japan06-title" className={styles.titleBarMain}>
            Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/japan06/japan23.jpg"
              alt="Shinto purification rites at Japan Pavilion groundbreaking"
              width={600}
              height={408}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Susumu Yoshida, Shinto Priest, performs the Shinto rites of
              purification upon the ground where the Japan Pavilion is to be
              built
            </figcaption>
            <p className={styles.source}>
              SOURCE: Groundbreaking Brochure, The Japan Pavilion
            </p>
          </figure>

          <p className={styles.lede}>
            Following is the transcription of remarks made by Japanese and
            World&apos;s Fair officials at the groundbreaking for the Japan
            Pavilion, New York World&apos;s Fair, Monday, April 15, 1963.
          </p>

          <p className={styles.speaker}>
            AMBASSADOR RICHARD C. PATTERSON, JR. [Chief of Protocol]:
          </p>
          <p className={styles.body}>
            The first speaker is a man who through lifelong experience with
            projects similar to this World&apos;s Fair, is considered
            America&apos;s number-one expert in the realm of expositions. I give
            you my colleague, Mr. Allen Beach, director of International Exhibits
            for the World&apos;s Fair.
          </p>

          <p className={styles.speaker}>ALLEN BEACH.:</p>
          <p className={styles.body}>
            Thank you Ambassador. Consul General Kanayama, Mr. Moses, Mr.
            Kanatomi, Mr. Makita, Mr. Kimura, Mr. Fujise, distinguished guests,
            ladies and gentlemen. I would like to read a cable I received from
            Governor Poletti, vice president for the International Division, who
            is today in Kuwait: &quot;Please tell the members of the Japanese
            delegation and others participating in the Japanese groundbreaking
            ceremony, that I am very sorry my travels prevent me from being
            present. The Japanese Pavilion at the New York World&apos;s Fair
            promises to be one of the finest exhibitions in our International
            Section, and you all have my sincerest congratulations.&quot;
          </p>
          <p className={styles.body}>
            May I add that some of the people Governor Poletti refers to are
            those members of the Japanese Consulate, the Japanese
            Exhibitors&apos; Association in New York and JETRO with whom we have
            been working very closely at the Fair. Mr. Gates Davison of our
            International staff, and I, would like to thank Consul General
            Kanayama, Mr. Kanatomi of the Exhibitor&apos;s Association, and Mr.
            Fujise, director of the Trade Center. Also not to be forgotten is the
            efficient and cooperative work done by Mr. Allen Chase, Commercial
            Attache&apos; of the American Embassy in Tokyo, and Mr. Antonio de
            Grassi, Jr., of de Grassi and Associates, our official Fair
            representative in Tokyo.
          </p>
          <p className={styles.body}>
            This fine team plus the other officials present here have brought the
            progress of the Japanese exhibition to this day&apos;s eventful
            moment. We are all very grateful.
          </p>
          <p className={styles.body}>
            In closing, I would like to speak a few words in Japanese. Please
            excuse my pronunciation. {"{Translation:}"} I have traveled to Japan
            many times in the past ten years. Until recently, I knew Tokyo better
            than I{"\u00a0"}knew New York. I have worked on five of the annual
            trade fairs in Tokyo and Osaka, and through this work I came to love
            the people and customs of Japan. Now in the Japanese Pavilion at the
            New York World&apos;s Fair many people from all over the world will
            be able to enjoy Japan and after visiting the pavilion, will want to
            travel to Japan.
          </p>
          <p className={styles.body}>
            Thank you for the fine cooperation and friendship you have given us.
          </p>

          <p className={styles.speaker}>AMBASSADOR PATTERSON:</p>
          <p className={styles.body}>
            Your Japanese must have been good because all these
            beautifully-gowned young ladies in front applauded vigorously. Our
            second speaker is an eminent representative of Japan. He has had a
            most distinguished career in the field of diplomacy. He is not only
            Consul General of Japan, but president of the highly important
            consular corps of seventy-four nations accredited to New York City. I
            am happy to introduce a very close personal friend of mine, the
            Honorable Masahide Kanayama..
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/japan06/japan25.jpg"
              alt="Japanese Exhibitors' Association staff with Robert Moses"
              width={600}
              height={377}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Staff members of the Japanese Exhibitors&apos; Association with
              Robert Moses, Fair president, and Gates Davison of the Fair&apos;s
              International Exhibits staff. Front row: (left to right) Yoshiji
              Kanatomi, executive vice president, Robert Moses, Kiyoshi Makita,
              vice president; standing: Gates Davison; Herbert W. Newman, general
              counsel, the Thinking Corporation of New York; Nori Sinoto,
              president of the Thinking Corporation of New York.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/japan06/japan24.jpg"
              alt="Official groundbreaking for the Japan Pavilion"
              width={600}
              height={383}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The first shovels of earth are lifted at the official
              groundbreaking for the Japan Pavilion. Left to right: Susumu
              Yoshida, Shinto Priest; Robert Moses, Fair president; Yoshiji
              Kanatomi, executive vice president of the Japanese Exhibitors
              Association; Mitsuo Kimura, director of Japan External Trade
              Organization and Consul General Mashahide Kanayama.
            </figcaption>
          </figure>

          <figure className={`${styles.figure} ${styles.figureNarrow}`}>
            <Image
              src="/images/japan06/japan26.jpg"
              alt='Japanese wave motif and calligraphy "JAPAN"'
              width={300}
              height={279}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Japanese wave motif and calligraphy &quot;JAPAN&quot;
            </figcaption>
          </figure>

          <p className={styles.speaker}>
            CONSUL GENERAL MASAHIDE KANAYAMA:
          </p>
          <p className={styles.body}>
            Thank you very much Ambassador. Mr. Moses, Mr. Beach, distinguished
            guests, ladies and gentlemen. This is a very happy day for me, as the
            representative of Japan in New York, to participate in the historic
            groundbreaking ceremonies for the Japan Pavilion in the forthcoming
            New York World&apos;s Fair. I believe it significant that the Fair
            coincides with the 300th anniversary of the City of New York. Within
            this span of years, New York has become the hub of the world&apos;s
            cultural and economic life. This occasion brings to mind our previous
            participation in the 1939-1940 New York World&apos;s Fair on this
            very same Flushing Meadows site.
          </p>
          <p className={styles.body}>
            Now, after a quarter of a century, Japan is participating in the fair
            on a greater scale than the last time. It is all the more significant
            that this comes at a time when the relations between our two nations
            are closer than at any other time in history. I am confident that our
            participation will long be remembered as one of the highlights in the
            history of Japanese-American friendship. The Japanese government and
            the private enterprises representing our country at the Fair are
            motivated by the sincere hope that our various exhibits will firmly
            demonstrate our faith and confidence in the Fair&apos;s theme --
            Peace Through Understanding.
          </p>
          <p className={styles.body}>
            Our exhibit will feature both the traditional and contemporary
            aspects of Japanese cultural and economic life in keeping with the
            theme as exemplified by the Unisphere. We have noted with great pride
            and appreciation the growing interest among Americans in all walks of
            life, in the diverse facets of Japanese life -- all of which have
            contributed immensely to better understanding between our two
            nations. I feel confident that the Fair will afford us a still
            greater opportunity to make our country known to the countless
            millions of visitors who will visit our pavilion.
          </p>
          <p className={styles.body}>
            And now I would like to introduce to you the key men of the Japanese
            Exhibit: Mr. Yoshiji Kanatomi, executive vice president and Mr.
            Kiyoshi Makita, vice president of the Japanese Exhibitors&apos;
            Association; Mr. Mitsuo Kimura, director of the Japan External Trade
            Organization; Mr. Ejiro Fujise, executive director of the Japan Trade
            Center of New York. Thank you very much.
          </p>

          <p className={styles.speaker}>AMBASSADOR PATTERSON:</p>
          <p className={styles.body}>
            Thank you Mr. Consul General. Ladies and gentlemen, one of the
            greatest New Yorkers of all time is the president of the New York
            World&apos;s Fair Corporation 1964-1965. I give you the honorable
            Robert Moses.
          </p>

          <p className={styles.speaker}>ROBERT MOSES:</p>
          <p className={styles.body}>
            Consul General Kanayama, Messrs. Kanatomi, Makita, Kimura and Fujise.
            I come here today primarily to pay the respects of the officers and
            directors of the Fair to those who have been before, and shall be
            again, a very great people. Yours is a formidable bastion of freedom
            which, since Admiral Perry and extending through the stewardship of
            General MacArthur, has looked to the West for inspiration, and
            guarantees that inevitably in the long run, the Far East shall be
            free. The Japanese are an extraordinarily proud, courageous,
            ingenious and hard-working people. Day is dawning again over the
            Pacific.
          </p>
          <p className={styles.body}>
            We are happy that you have space at the very center of the Fair for
            dramatic presentation of your ancient arts, and your finest modern
            wares. We welcome these and other evidences of your meteoric rise
            from utter prostration to renewed respect, dignity, serenity, and
            world leadership. You will compete at Flushing Meadow in an
            atmosphere of friendship for the good opinion of the world, and by
            the end of 1965 you will surely have earned it.
          </p>

          <figure className={`${styles.figure} ${styles.figureNarrow}`}>
            <Image
              src="/images/japan06/japan27.jpg"
              alt="Japan Pavilion map motif"
              width={300}
              height={354}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/japan05"
        explicitPrevious
        overviewHref="/japanoverview"
        nextHref="/japan07"
      />
    </>
  );
}
