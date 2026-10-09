import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sales Brochure - Proposed Pavilion Design \u2014 Transportation & Travel \u2014 nywf64.com",
  description: "Sales Brochure - Proposed Pavilion Design \u2014 Transportation & Travel at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Trantrav06Page() {
  return (
    <>

      <section className={styles.hero} aria-label="Transportation & Travel">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/trantravoverview/hero-banner.jpg"
            alt="Transportation & Travel at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>
      <TrantravNavChrome />

      <article className={styles.article} aria-labelledby="trantrav06-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav06-title" className={styles.titleBarMain}>Sales Brochure - Proposed Pavilion Design</h1>
        </header>
        <div className={styles.articleInner}>
          <Image src="/images/trantrav06/tratra20.jpg" alt="Cover" width={600} height={263} className={styles.framedImg} unoptimized />
          <hr className={styles.hr} />

          <section className={styles.floorBlock} data-floor="A">
            <p className={styles.floorLabel}>FLOOR A</p>
            <div className={styles.floorIntro}>
              <Image src="/images/trantrav06/tratra22.jpg" alt="Artist's Conception Floor A" width={300} height={236} className={styles.floorArt} unoptimized />
              <p className={styles.floorCopy}>The Transportation and Travel Pavilion, designed by architects Charles Luckman Associates for its site at the heart of the Fair, will tell the story of \"People and Products on the Move\" in dramatic terms. An estimated 4,000 people per hour will begin in the highest of three floors (A), where they will explore the subject of travel for fun in the Western Hemisphere. On this floor and others, display areas are arranged so each visitor will view every presentation. Thus, your exhibit will be a memorable chapter in a vital and unified story. Visitors will remember it better because they can never forget the experience as a whole.</p>
            </div>
            <p className={styles.floorPlanNote}><strong>Enlarged floor plans available on request. Minor variations in subject areas may be made.</strong></p>
            <Image src="/images/trantrav06/tratra21.jpg" alt="Floorplan Floor A" width={600} height={301} className={styles.planImg} unoptimized />
            <p className={styles.listCaption}><strong>WESTERN HEMISPHERE AREAS</strong></p>
            <ul className={styles.areaList}>
                <li>1-2 Introductory panels establishing theme and putting all exhibits in perspective.</li>
                <li>3 Tentatively reserved for &quot;Seven Seas Theater,&quot; where visitors can tour the nation and world through film and live presentations.</li>
                <li>4-6 Introductory panels by exhibitors, Theme: Travel for Fun</li>
                <li>7 Where to Go Exhibit. nations, states, cities, resorts, hotels ... and more</li>
                <li>8 Publications. The magazines, newspaper sections and maps that show the way</li>
                <li>9 How to Get There: By bus</li>
                <li>10  How to Get There: By passenger railroad</li>
                <li>11-12 How to Get There: By domestic airline</li>
                <li>13-14 How to Get There: By private and corporate aircraft</li>
                <li>15 Sports cars</li>
                <li>16-18 Exhibitor story panels</li>
            </ul>
          </section>
          <hr className={styles.hr} />
          <section className={styles.floorBlock} data-floor="B">
            <p className={styles.floorLabel}>FLOOR B</p>
            <div className={styles.floorIntro}>
              <Image src="/images/trantrav06/tratra24.jpg" alt="Artist's Conception Floor B" width={300} height={236} className={styles.floorArt} unoptimized />
              <p className={styles.floorCopy}>As visitors descend from Floor A to Floor B of the T&T Pavilion, already caught up by the unfolding story, their interest will be directed to travel in the world at large. Just as they could dream, visualize and plan a Western Hemisphere holiday on the floor above, here they can envision and arrange for a trip anywhere else in the world. Where to Go, How to Get There, What to Do When You Arrive ... these are the ever-fascinating subjects that companies such as yours will cover in detail on Floors A and B. The world is the subject of the entire Fair. The subject of experiencing the world at first hand will be focused here.</p>
            </div>
            <p className={styles.floorPlanNote}><strong>Enlarged floor plans available on request. Minor variations in subject areas may be made.</strong></p>
            <Image src="/images/trantrav06/tratra23.jpg" alt="Floorplan Floor B" width={600} height={301} className={styles.planImg} unoptimized />
            <p className={styles.listCaption}><strong>THE WORLD AT LARGE</strong></p>
            <ul className={styles.areaList}>
                <li>19 Space-Age lounge and refreshment area</li>
                <li>20 Where to Go Exhibit. nations, cities, resorts, hotels, attractions, travel information services ... and more</li>
                <li>21 Queens of the Seas Exhibit where steamship lines will tell the story of their routes, accommodations, personnel and ports of call</li>
                <li>22 Travel agents, international railroads and bus and road information</li>
                <li>23-24 International airlines exhibit, dramatizing the world-wide network of air routes and the places they bring within reach; also foreign aircraft manufacturers</li>
                <li>25 Pleasure marine. The whole exciting story of the small boat industry</li>
                <li>26-27 Special automobile equipment for outdoor holidays, camping and sports equipment</li>
                <li>28 Automobile service companies and associations, major oil companies, accessory and equipment manufacturers. Everything that makes modern automobile travel fun, comfortable and efficient</li>
                <li>29 Foreign and domestic automobiles</li>
            </ul>
          </section>
          <hr className={styles.hr} />
          <section className={styles.floorBlock} data-floor="C">
            <p className={styles.floorLabel}>FLOOR C</p>
            <div className={styles.floorIntro}>
              <Image src="/images/trantrav06/tratra26.jpg" alt="Artist's Conception Floor C" width={300} height={236} className={styles.floorArt} unoptimized />
              <p className={styles.floorCopy}>Floor C of the T&T Pavilion will carry the visitor from the exciting area of travel for pleasure into the equally fascinating area of transportation for commerce and industry ... and comfort and convenience. Here the private and corporate motor vehicles, airplanes, freighters, trucks, freight trains, materials handling system, trailer and countless other transportation media will share the spotlight. Most important, they will be dramatized to show their importance to everyone's daily life. The unique arrangement of display areas in the T&T Pavilion ... along a dramatic story line ... will enable any company to gain forceful exposure in each area where its exhibit will be effective and appropriate.</p>
            </div>
            <p className={styles.floorPlanNote}><strong>Enlarged floor plans available on request. Minor variations in subject areas may be made.</strong></p>
            <Image src="/images/trantrav06/tratra25.jpg" alt="Floorplan Floor C" width={600} height={301} className={styles.planImg} unoptimized />
            <p className={styles.listCaption}><strong>TRANSPORTATION BY INDUSTRY</strong></p>
            <ul className={styles.areaList}>
                <li>30 Major automobile exhibit. An outstanding exhibit of one of America&#x27;s great and advanced automobile manufacturers</li>
                <li>31 Specialty automotive exhibit</li>
                <li>32 Truck manufacturers, trucking companies and truck equipment and accessory suppliers</li>
                <li>33 Tire manufacturing industry</li>
                <li>34 Materials handling equipment</li>
                <li>35 Railroad freight services</li>
                <li>36 Major aircraft manufacturers and special exhibits</li>
                <li>(Travel of the Future)</li>
            </ul>
          </section>
          <hr className={styles.hr} />
          <p className={styles.source}>SOURCE: Sales Promotion Booklet for the Transportation &amp; Travel Pavilion</p>
          <Image src="/images/trantrav06/tratra27.jpg" alt="Back Page" width={600} height={244} className={styles.framedImg} unoptimized />
        </div>
      </article>

      <Nav2Bar previousHref="/trantrav05" overviewHref="/trantravoverview" nextHref="/trantrav07" explicitPrevious />
    </>
  );
}
