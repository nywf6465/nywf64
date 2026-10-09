import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "TWA \u2014 Transportation & Travel \u2014 nywf64.com",
  description: "TWA at the Transportation & Travel Pavilion \u2014 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Trantrav13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Transportation & Travel">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image src="/images/trantravoverview/hero-banner.jpg" alt="Transportation & Travel at the 1964/1965 New York’s Fair" width={1902} height={827} priority sizes="100vw" className={overviewHeroStyles.art} unoptimized />
        </div>
      </section>
      <TrantravNavChrome />

      <article className={styles.article} aria-labelledby="trantrav13-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav13-title" className={styles.titleBarMain}>TWA</h1>
        </header>
        <div className={styles.articleInner}>
          <div className={styles.collage}>
              <Image src="/images/trantrav13/tratra94.1.jpg" alt="" width={300} height={331} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra94.2.jpg" alt="" width={300} height={331} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra94.3.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra94.4.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra94.5.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra94.6.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
          </div>
          <p className={styles.source}>Source: Advertisement <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em></p>
          <div className={styles.collage}>
              <Image src="/images/trantrav13/tratra95.1.jpg" alt="" width={300} height={331} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra95.2.jpg" alt="" width={300} height={331} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra95.3.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra95.4.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra95.5.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
              <Image src="/images/trantrav13/tratra95.6.jpg" alt="" width={300} height={330} className={styles.tile} unoptimized />
          </div>
          <p className={styles.source}>Source: Advertisement 1965<em> Official Guide, 1964-1965 New York World&apos;s Fair</em></p>
          <hr className={styles.hr} />
          <div className={styles.twaBooklet}>
            <div className={styles.twaBookletRow}>
              <Image src="/images/trantrav13/tratra43.jpg" alt="Fairground Map" width={300} height={367} className={styles.borderlessImg} unoptimized />
              <div className={styles.bodyArial}>
                <p><strong>The Transportation and Travel Pavilion </strong>houses fascinating displays of space travel, as well as the more unusual kind we use on earth. The first floor of this pavilion is given over entirely to the transportation and travel industry. At the TWA exhibits flanking the main entrance, TWA will help you with travel plans, your return trip, and give you any travel assistance you wish. TWA&apos;s exhibit is an Official New York World&apos;s Fair Information Center. TWA is also the &quot;Official Air Carrier of the Transportation and Travel Pavilion, New York World&apos;s Fair 1964-1965&quot;. The second floor is devoted to a spectacular presentation of moon exploration, fee 75c.</p>
              </div>
              <Image src="/images/trantrav13/tratra44.jpg" alt="TWA Logo" width={100} height={64} className={styles.borderlessImg} unoptimized />
            </div>
            <p className={styles.bookletHeading}><strong>TWA EXHIBITS IN THE TRANSPORTATION &amp; TRAVEL BUILDING</strong></p>
            <Image src="/images/trantrav13/tratra46.jpg" alt="TWA Exhibit" width={500} height={199} className={styles.borderlessImg} unoptimized />
            <p className={styles.bodyArial}>At the TWA exhibit on the left as you enter the Pavilion, TWA&apos;s part in developing air transport is shown in a semi-circle of 14 glass &quot;history pylons,&quot; with scale models of aircraft and legends describing the advance of aviation.</p>
            <Image src="/images/trantrav13/tratra45.jpg" alt="TWA SST" width={500} height={189} className={styles.borderlessImg} unoptimized />
            <p className={styles.bodyArial}>To the right as you enter the Pavilion you will see TWA&apos;s 30-foot model of the composite design of the supersonic transport suspended from the ceiling. The wall background simulates the upper atmosphere in which it will fly.</p>
            <p className={styles.bodyArial}>TWA&apos;s two exhibits in the Transportation and Travel Pavilion, flanking the entrance to the two-level building, tell the story of air transport and TWA&apos;s role in it -- yesterday, today and tomorrow. The entrance to the Pavilion is across the way from the General Motors Building.</p>
          </div>
          <p className={styles.source}>Source: Photos presented courtesy Bill Cotter Collection</p>
          <div className={styles.aircraftStack}>
            <Image src="/images/trantrav13/tratra87.jpg" alt="TWA Constellation" width={338} height={500} className={styles.framedImg} unoptimized />
            <p className={styles.bodyArial}>TWA&apos;s Historic Aircraft Display in the T&amp;T Pavilion. Above: TWA Constellation; Below: TWA Douglas Aircraft.</p>
            <Image src="/images/trantrav13/tratra88.jpg" alt="TWA Douglas Aircraft" width={338} height={500} className={styles.framedImg} unoptimized />
          </div>
        </div>
      </article>
      <Nav2Bar previousHref="/trantrav12" overviewHref="/trantravoverview" nextHref="/trantrav14" explicitPrevious />
    </>
  );
}
