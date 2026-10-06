import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { HollywoodLegacyTopicPage } from "@/components/HollywoodLegacyTopicPage";
import styles from "@/styles/hollywoodLegacyTopic.module.css";

export const metadata: Metadata = {
  title: "Welcome — Hollywood — nywf64.com",
  description:
    "Welcome message from George Murphy — Hollywood U.S.A. at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SOUVENIR_SOURCE = (
  <>
    SOURCE: Souvenir Program and Guide Book{" "}
    <em>Hollywood U.S.A. at the New York World&apos;s Fair</em>
  </>
);

const LEGEND: { n: number; color: string; label: string }[] = [
  { n: 1, color: "red", label: "Hollywoood U.S.A. entrance (reproduction of Grauman's Chinese Theatre, Hollywood)" },
  { n: 2, color: "blue", label: "South Pacific (beach set)" },
  { n: 3, color: "#ff8c00", label: "Juice stand" },
  { n: 4, color: "#4169e1", label: "Dr. Kildare television series (hospital consulting room set)" },
  { n: 5, color: "yellow", label: "Souvenir stand" },
  { n: 6, color: "#228b22", label: "Rest rooms" },
  { n: 7, color: "#ff8c00", label: "Candy store -- Loft's Candies" },
  { n: 8, color: "#556b2f", label: "The King and I (temple set)" },
  { n: 9, color: "#ff1493", label: "Cleopatra (throne room set and statues)" },
  { n: 10, color: "#ba55d3", label: "The Fall of the Roman Empire (symbolic hand of Life set)" },
  { n: 11, color: "#f4a460", label: "Seven Days in May (President's office)" },
  { n: 12, color: "#ff8c00", label: "The Unsinkable Molly Brown (Paris Cafe set)" },
  { n: 13, color: "yellow", label: "West Side Story (street and candy store sets)" },
  { n: 14, color: "#87ceeb", label: "General Store (curios, souvenirs, gifts)" },
  { n: 15, color: "#483d8b", label: "Western Street" },
  { n: 16, color: "#ff8c00", label: "Museum (memorabilia of early days of Hollywood)" },
  { n: 17, color: "#556b2f", label: "Restaurant" },
  { n: 18, color: "#ff4500", label: "Cocktail lounge" },
];

export default function Hollywood06Page() {
  return (
    <HollywoodLegacyTopicPage
      title="Welcome"
      titleId="hollywood06-title"
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood05"
      nextHref="/hollywood07"
      source={SOUVENIR_SOURCE}
    >
      <div className={styles.banner}>
        <Image
          src="/images/hollywood06/holwod06.jpg"
          alt=""
          width={850}
          height={209}
          className={styles.bannerArt}
          unoptimized
        />
      </div>
      <Image
        src="/images/hollywood06/holwod05.jpg"
        alt="Guidebook Cover"
        width={900}
        height={580}
        className={styles.fullBleed}
        unoptimized
      />
      <div className={styles.welcomeLead}>
        <Image
          src="/images/hollywood06/holwod07.jpg"
          alt="Geroge Murphy"
          width={150}
          height={196}
          className={styles.welcomePortrait}
          unoptimized
        />
        <div className={styles.welcomeCopy}>
          <p>
            Greetings and a warm welcome to the Hollywood Pavilion of the New
            York World&apos;s Fair 1964-65.
          </p>
          <p>
            During the 25 years I have spent in show business and Hollywood, the
            most common request I hear from the thousands of visitors to the
            world&apos;s entertainment capital is: &quot;I&apos;d love to see
            motion picture and television settings in the studios.&quot;
          </p>
          <p>
            We couldn&apos;t take you all to Hollywood. So we brought Hollywood
            -- millions of dollars of it -- to the New York World&apos;s Fair.
          </p>
        </div>
      </div>
      <div className={styles.welcomeCopy}>
        <p>
          From the moment you pass through the world-famous portals of
          Grauman&apos;s Chinese Theatre last lingering reflections of the
          Western street, you will thrill to happy memories of famous pictures
          and television shows of the past -- and the anticipation of great
          shows of the future
        </p>
        <p>
          Here you will see Hollywood&apos;s most famous television and motion
          picture sets. Each day thousands of you will walk through them, and
          relive stirring scenes in such great spectacles as{" "}
          <i>Seven Days In May, The King and I, Cleopatra, West Side Story, The Fall of the Roman Empire, The Unsinkable Molly Brown, </i>
          and<i> South Pacific</i>.
        </p>
        <p>
          Here, too, is the actual consulting room where Dr. Kildare and Dr.
          Gillespie of the <i>Dr. Kildare</i> television series perform.
        </p>
        <p>
          Nearby is the picturesque, little Western street with its General Store
          to delight you and the youngsters.
        </p>
        <p>
          Moreover, when you visit our Museum, you will lose yourself in a world
          of the past. Here are relics and mementoes of the legendary motion
          pictures directed by the great Cecil B. DeMille and many others. Here,
          rich in nostalgia, are hundreds of exciting pieces, like the 60-foot
          model train from <i>The Greatest Show On Earth</i> and the
          perfect-scale ship used in many of DeMille&apos;s epics.
        </p>
        <p>
          Also in the Museum are costumes, jewelry, props, scripts, cameras, and
          other accessories which have gone into the making of great motion
          pictures and television shows.
        </p>
        <p>
          This much is certain: Hollywood U.S.A. will prove to be one of the most
          enjoyable and memorable experiences at The Fair. As a result, you will
          appreciate even more the efforts of this giant industry to preserve the
          great literature of all time; to create amusement, inspiration, and
          education for peoples throughout the world; and to bring to your motion
          picture and television screens the highest possible standard of
          entertainment.
        </p>
      </div>
      <div className={styles.signatureBlock}>
        <div />
        <div>
          <Image
            src="/images/hollywood06/holwod08.jpg"
            alt="Director's Chair"
            width={150}
            height={155}
            className={styles.bannerArt}
            unoptimized
          />
        </div>
      </div>
      <div className={styles.signatureBlock}>
        <div>
          <Image
            src="/images/hollywood06/holwod09.jpg"
            alt="Signature"
            width={198}
            height={67}
            className={styles.signatureArt}
            unoptimized
          />
          <p className={styles.signatureMeta}>George Murphy</p>
          <p className={styles.signatureMeta}>
            Chairman, George Murphy and Associates
            <br />
            Member, Board of Directors,
            <br />
            New York World&apos;s Fair 1964-65 Corp.
          </p>
        </div>
      </div>
      <Image
        src="/images/hollywood06/holwod10.jpg"
        alt="Artist's Rendering"
        width={900}
        height={726}
        className={styles.fullBleed}
        unoptimized
      />
      <div className={styles.legendRow}>
        <p className={styles.welcomeCopy}>
          Hollywood U.S.A. unfolds a vivid panorama of the color and excitement
          of the motion picture and television industry. It is traditional for
          Hollywood U.S.A. to portray the drama of history, to peel back curtains
          of secrecy so that audiences may peer at sights they can never otherwise
          experience. Hollywood U.S.A. has picked the choice productions of our
          time, and brought the key sets to The Fair for all to enjoy. In this
          bird&apos;s-eye view of the Hollywood pavilion some roofed-in areas have
          been opened up to allow the visitor to undertand what goes on in every
          corner of this spectacular exhibition. From the moment the visitor
          enters the land of <i>South Pacific</i> to the time he laughs with{" "}
          <i>Molly Brown</i> in the Paris Cafe set, he is lost in the wonder of
          Hollywood U.S.A.
        </p>
        <div>
          <ul className={styles.legendList}>
            {LEGEND.map((item) => (
              <li key={item.n} className={styles.legendItem}>
                <span
                  className={styles.legendBadge}
                  style={{ backgroundColor: item.color }}
                >
                  {item.n}
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <Image
            src="/images/hollywood06/holwod11.jpg"
            alt="Pavilion Map"
            width={300}
            height={324}
            className={styles.bannerArt}
            unoptimized
          />
        </div>
      </div>
    </HollywoodLegacyTopicPage>
  );
}
