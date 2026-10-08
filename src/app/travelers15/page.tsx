import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./travelers15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Article: Under the Bright Red Roof — Travelers Insurance — nywf64.com",
  description:
    "Article: Under the Bright Red Roof — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const EXHIBITS: { num: string; hideLeadingZero?: boolean; label: string }[] =
  [
    { num: "01", hideLeadingZero: true, label: "Dawn of Man" },
    { num: "02", hideLeadingZero: true, label: "Discovery of Fire" },
    { num: "03", hideLeadingZero: true, label: "Origin of Art" },
    { num: "04", hideLeadingZero: true, label: "Beginning of Agriculture" },
    { num: "05", hideLeadingZero: true, label: "The First Civilization" },
    { num: "06", hideLeadingZero: true, label: "The Grandeur of Rome" },
    { num: "07", hideLeadingZero: true, label: "Civilization in Peril" },
    { num: "08", hideLeadingZero: true, label: "The Black Death" },
    { num: "09", hideLeadingZero: true, label: "The Voyage of Man's Mind" },
    { num: "10", label: "The Journey to the New World" },
    { num: "11", label: "The Taming of a Continent" },
    { num: "12", label: "The American Crisis" },
    { num: "13", label: "Man's Leap to the Stars" },
  ];

/** Travelers — Article: Under the Bright Red Roof (legacy travelers15.html). */
export default function Travelers15Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Travelers Insurance Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <article className={styles.article} aria-labelledby="travelers15-title">
        <header className={styles.titleBar}>
          <h1 id="travelers15-title" className={styles.titleBarMain}>
            Article: Under the Bright Red Roof
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              <span className={styles.dropCap}>T</span>ravelers employees
              throughout the United States and Canada should by now have a
              reasonably accurate concept of what the Company&apos;s building at
              the 1964-65 New York World&apos;s Fair will look like when
              completed.
            </p>
            <p>
              Pictures of and stories about this distinctive, red umbrella-roofed
              pavilion have appeared over the past several months in a number of
              Company publications. What is to be seen inside this unique
              structure, however, has been given far less publicity.
            </p>
            <p>
              Not purposely being kept a secret, the exhibit itself has been
              subject to almost constant revision and improvement over the past
              two years. This has been necessary because the exhibit, if it is
              to attract visitors to our World&apos;s Fair building, must prove
              to be accurate and educational as well as dramatic and
              entertaining. Those who have planned the exhibits are convinced
              that it possesses all of these qualities.
            </p>

            <h2 className={styles.redHeading}>under the Bright Red Roof</h2>

            <p>
              The idea for the Travelers World&apos;s Fair exhibit, which will
              take viewers on a journey through two and a half billion years of
              life on this planet, originated with Donald Desky Associates of
              New York. It has been entitled, &quot;The Triumph of Man.&quot;
            </p>
            <p>
              Retained to work with this organization as a consultant has been
              Dr. Harry L. Shapiro, head of the Department of Anthropology at
              New York&apos;s Museum of Natural History. To him has fallen the
              task of assuring our exhibit&apos;s authenticity by by making
              certain it is anthropologically sound, at least in as far as
              man&apos;s best knowledge is concerned.
            </p>

            <p className={styles.subhead}>Carefully Selected Episodes</p>

            <p>
              In describing &quot;The Triumph of Man,&quot; Dr. Shapiro has said
              that &quot;it will tell, in 13 carefully selected episodes, the
              progress of man from his earliest known beginnings over a million
              years ago up to the present. Each scene in the sequence will
              illustrate the significant steps man has made in his journey from
              an ape-like nature to his present estate.&quot;
            </p>
            <p>
              Dr. Shapiro has noted that this exhibit would not have been
              possible during the 1939 World&apos;s Fair in New York. He said
              that in recent years spectacular discoveries of new fossil men
              have been made, resulting in a much deeper understanding of the
              origin and evolution of culture than we have ever had before.
            </p>
            <p>
              Development of The Travelers exhibit has been marked by a strict
              adherence to the truth, with no compromises on standards for the
              sake of showmanship. What has resulted is an exhibit inherently
              more dramatic and moving in its truth than any artful distortion
              could possibly have been.
            </p>
            <p>
              The principle portion of the Company&apos;s exhibit will be
              located on the second floor of our World&apos;s Fair building. It
              has been designed as a series of 13 separate stages, each with
              its own tableau and each isolated one from another both visually
              and acoustically. Visitors will wend their way around the 350-foot
              walkway where they will view the tableau in a pre-determined
              sequence.
            </p>

            <div className={styles.floorplanBlock}>
              <Image
                src="/images/travelers15/trvlrs04.jpg"
                alt="Pavilion floorplan"
                width={447}
                height={458}
                className={styles.floorplan}
                unoptimized
              />
              <div className={styles.floorplanMeta}>
                <p>
                  <strong>
                    This floorplan of The Travelers building at the New York
                    World&apos;s Fair shows the main exhibit area on the second
                    floor of the pavilion, with relative positions of the 13
                    exhibits.
                  </strong>
                </p>
                <ul className={styles.exhibitList}>
                  {EXHIBITS.map((item) => (
                    <li key={item.num}>
                      {item.hideLeadingZero ? (
                        <>
                          <span className={styles.exhibitZero}>0</span>
                          {item.num.slice(1)}. {item.label}
                        </>
                      ) : (
                        <>
                          {item.num}. {item.label}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className={styles.subhead}>In Groups of Thirty</p>

            <p>
              Those Fairgoers entering The Travelers pavilion will line up in
              the building&apos;s &quot;neck&quot; where attendants at a gate
              will control the flow of people into the exhibit area. A group of
              not more than 30 will enter the first floor area of the exhibit
              every 75-seconds. In this 60-foot curved passageway, visitors will
              see a three-dimensional display showing life under water at it
              existed more than a billion and a half years ago.
            </p>
            <p>
              The moderator at this time will explain the slow evolution of
              these early sea creatures to the point where some, after millions
              of years had elapsed, became oxygen breathers and took up a new
              life on land. This later resulted in the age of reptiles,
              followed by dinosaurs, and eventually the arrival of the first
              primates some 75 million years ago.
            </p>
            <p>
              It is at this point where visitors are taken up an escalator to
              the spot where they will view the first of 13 tableaux. This shows
              early man in East Africa some million and a half years ago, where
              he is using the most primitive type of stone artifact.
            </p>
            <p>
              Once the recorded voice of the moderator completes its explanation
              of the significance in man&apos;s development shown in the first
              scene, viewers are guided by both sound and light to the second
              stage, then the third, and so on. Each diorama contains
              life-sized models of men and animals, and each is constructed so
              as to give viewers the feeling they are actually a part of the
              scene.
            </p>

            <p className={styles.subhead}>Exhibit Requires Half Hour</p>

            <p>
              Each stage area has its own individual lighting and sound control,
              with a master control for the over-all sequence. The exhibit is
              designed so that about 30 seconds are allowed for movement from
              one stage to the next. Something less than a half hour will be
              required to see the entire exhibit.
            </p>
            <p>
              As visitor descends by escalator from the second floor exhibit
              area, the moderator points out that dangers and hazards have been
              part of man&apos;s life from the very beginning, and that while
              man tries to live in safety, he must recognize that the future is
              never certain nor free from danger.
            </p>
            <p>
              At this point visitors are told of the Company&apos;s 100th
              anniversary and made aware of the role it has played in helping
              Americans over the past century to overcome dangers of all types.
              They are then invited to join those who are already being
              protected under The Travelers umbrella of insurance protection.
            </p>

            <p className={styles.source}>
              Source: exerpted from <em>The Beacon</em>, January-February, 1964
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers14"
        overviewHref="/travelersoverview"
        nextHref="/travelers16"
      />
    </>
  );
}
