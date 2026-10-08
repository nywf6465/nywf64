import type { Metadata } from "next";
import Image from "next/image";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sierra05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Sierra Leone — nywf64.com",
  description:
    "Groundbreaking pamphlet excerpts for the Sierra Leone pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sierra Leone — Pamphlet: Groundbreaking.
 * Body from legacy sierra05.html (brochure photos + ceremony transcript).
 *
 * Stack: hero → SierraNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sierra05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sierra Leone">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sierraoverview/hero-banner.jpg"
            alt="Sierra Leone pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SierraNavChrome />

      <article className={styles.article} aria-labelledby="sierra05-title">
        <header className={styles.titleBar}>
          <h1 id="sierra05-title" className={styles.titleBarMain}>
            Pamphlet: Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sierra05/sierra05.jpg"
                alt="Cover"
                width={600}
                height={392}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <p className={styles.source}>
            SOURCE: Groundbreaking Brochure, The Pavilion of Sierra Leone
          </p>

          <div className={styles.body}>
            <p>
              Excerpts from a transcription of remarks by officials of the
              World&apos;s Fair and Sierra Leone, at the at the Pavilion of
              Sierra Leone groundbreaking ceremony, New York World&apos;s Fair,
              Wednesday, April 10, 1963.
            </p>

            <p>
              <span className={styles.speaker}>
                MR. ALLEN E. BEACH [Director, International Exhibits]:
              </span>{" "}
              This is an important day for the New York World&apos;s Fair and for
              Sierra Leone. Sierra Leone is the first African nation to break
              ground for its pavilion. April is an important month for this proud
              nation; two years ago, on April 27, 1961, Sierra Leone gained its
              independence. Sierra Leone is small in size only; it has a big
              story to tell to the world through its pavilion at this Fair.
              Sierra Leone, strategically located on the west coast of Africa,
              is an enterprising, energetic nation with a background of culture
              and tradition that millions of Fair visitors will find most
              interesting.
            </p>
            <p>
              Consul General Claudius Gibrilla has been the Fair&apos;s principal
              contact for many months, and Dr. George Bennett of our
              International Division staff will attest to the fact that his
              sincerity in projecting his personal belief that his country must
              be represented convinced us from the onset that in him we were not
              only dealing with a distinguished government official, but with a
              warm friend.
            </p>
            <p>
              On June 18, 1961, shortly after Sierra Leone&apos;s declaration of
              independence, Governor Poletti, Dr. L. Gray Cowan, director of
              African Studies at Columbia University, and Mr. Marcel Duriaux,
              who at that time was executive secretary of the Unites States
              Society of Editors and Commentators, arrived in Freetown to
              present the official invitation to participate in the New York
              World&apos;s Fair. On this occasion, Dr. John Karefa-Smart,
              Minister of External Affairs, told the delegation that Sierra
              Leone would be present. Since that time, consistent and efficient
              progress has been made. Mr. Costas Machlouzarides has been
              appointed architect for the building that will shortly be erected
              here on the Avenue of Africa.
            </p>
          </div>

          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 300 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sierra05/sierra06.jpg"
                  alt="Groundbreaking"
                  width={300}
                  height={320}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 300 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sierra05/sierra07.jpg"
                  alt="Pavilion Location"
                  width={300}
                  height={387}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
          <p className={styles.caption}>
            William Berns, vice president of Communications of the New York
            World&apos;s Fair; His Excellency, Ambassador Richared E.
            Kelfa-Caulker; Consul-General Claudius A. Gibrilla and Allen E.
            Beach.
          </p>

          <div className={styles.body}>
            <p>We are proud and honored that Sierra Leone will exhibit at our Fair. Thank you.</p>

            <p>
              <span className={styles.speaker}>
                HIS EXCELLENCY, AMBASSADOR RICHARD E. KELFA-CAULKER:
              </span>{" "}
              I would like to start by quoting two old sayings that you might
              hear in the market places and elsewhere in Freetown. The first is:
              People are counting the big yams by the dozen, and in between a
              little one rolls along to be counted too. It seems to me that our
              presence here in the midst of the grandeur of these great
              pavilions being erected gives us the feeling that we too, however
              little, want to be counted.
            </p>
            <p>
              The other saying is: If a little child sits near a big man and
              listens, he will learn a great deal. Perhaps this is our motive
              for coming here - that we might learn from the things that we
              shall see, as well as have an opportunity to help people come to
              know us.
            </p>
            <p>
              Sierra Leone is the oldest and first British colony in West
              Africa. She therefore had a hand in the opening up of West Africa
              through education, through the Christion religion, and through
              commerce. Ours is a small country, and we shall advance by
              mingling with the peoples of the world at this great Fair. We are
              endowed with the same intelligence, the same spirit for
              advancement, and we believe not only that we have a contribution
              to make, but especially that through our association with the Fair,
              we shall learn and profit equally from the experience of all
              peoples and nations.
            </p>
            <p>
              In 1460, Portuguese navigator Pedro de Centra discovered Sierra
              Leone, which means Mountain of the Lion. This discovery led to the
              institution of slavery for which Sierra Leone became a trading
              base. It also led to the establishment of the first free colony in
              Africa, a colony conceived in liberty and dedicated to the
              proposition that all men are created free. In the continuing
              pursuit of this freedom we will come to the Fair in the year 1964
              to present Sierra Leone to America, and to the West, not in
              slavery, but in freedom; not in ignorance but with intelligence.
              Only time will tell the results of our efforts. We will hope for
              mutual understanding. We will appreciate what is good, for we will
              come to learn with eyes wide open.
            </p>
            <p>
              We trust that in presenting the spirit of Sierra Leone, we shall
              help America and the West to see not only Sierra Leone but Africa
              as a whole, her potential and her present needs.
            </p>
            <p>
              Mr. Chairman, it is a great pleasure to take part in this
              groundbreaking ceremony to establish the Pavilion of Sierra Leone
              at the New York World&apos;s Fair. Thank you.
            </p>

            <p>
              <span className={styles.speaker}>WILLIAM BERNS:</span> Supported
              by the enthusiasm and interest of the executives and staff of the
              New York World&apos;s Fair for the participation of the African
              nations, it is a pleasure to bring you this message from the
              president of the New York World&apos;s Fair, the Honorable Robert
              Moses:
            </p>
            <p>
              &quot;We are delighted with this participation by one of the
              ambitious new nations of West Africa, a nation aiming at the same
              objectives and with the same democratic principles as ours. The
              design of your pavilion is particularly attractive - I assume your
              exhibits will be equally impressive. I look forward to greeting
              you when the Fair opens.&quot;
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sierra05/sierra08.jpg"
                alt="Pavilion Model"
                width={600}
                height={314}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Model of Pavilion of Sierra Leone, an ultra-modern structure that
              conveys the romantic traditions of this new western African
              nation. Its exhibits will tell the story of Sierra Leone, from a
              slave colony to proud independence.
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sierra04"
        explicitPrevious
        overviewHref="/sierraoverview"
        nextHref="/sierra06"
      />
    </>
  );
}
