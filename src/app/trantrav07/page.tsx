import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sales Brochure - Final Pavilion Design \u2014 Transportation & Travel \u2014 nywf64.com",
  description: "Sales Brochure - Final Pavilion Design \u2014 Transportation & Travel at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Trantrav07Page() {
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

      <article className={styles.article} aria-labelledby="trantrav07-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav07-title" className={styles.titleBarMain}>Sales Brochure - Final Pavilion Design</h1>
        </header>
        <div className={styles.articleInner}>
          <Image src="/images/trantrav07/tratra28.jpg" alt="Cover" width={600} height={249} className={styles.framedImg} unoptimized />
          <hr className={styles.hr} />
          <section className={styles.bluePanel}>
            <div className={styles.blueRow}>
              <div className={styles.blueStack}>
                <span>MAN</span><span>ON THE</span><span>MOVE . . . .</span>
                <span>MAN</span><span>ON THE</span><span>MOON . . . .</span>
              </div>
              <div className={styles.blueCopy}>
                <p><strong>The dramatic story of modern transportation and travel is going up ... from the land masses, oceans and atmosphere of the Earth to the newest dimension of discovery -- Outer Space. A great climax in this story will come this decade, when man sets out to conquer the Moon to get ready for travel to other worlds.</strong></p>
                <p><strong>This great adventure will be unfolded right here, at the Transportation &amp; Travel Pavilion at the World&apos;s Fair. A replica Moon crater will be built on gigantic scale so visitors to the T&amp;T Pavilion can experience -- with all their senses -- a simulation of the climatic moment when Man takes his first, hard-won steps on our satellite.</strong></p>
                <p><strong>The T&amp;T Pavilion now has been redesigned to house the powerful space show attraction authorized by the World&apos;s Fair Corporation and to assure its benefits to every exhibitor in the T&amp;T Pavilion. The voyage to the Moon will be an integral part of the most modern transportation and travel story ever told.</strong></p>
              </div>
            </div>
            <Image src="/images/trantrav07/tratra29.jpg" alt="1st Floor Floorplan" width={600} height={385} className={styles.borderlessImg} unoptimized />
            <div className={styles.blueRow}>
              <div className={styles.blueStack}>
                <span>THE</span><span>T&amp;T</span><span>STORY</span><span>WILL BE</span><span>TOLD</span><span>HERE</span>
              </div>
              <div className={styles.blueCopy}>
                <p><strong>With its neighbors in the Fair&apos;s Transportation Section -- including Chrysler, Ford, GM, Sinclair, U.S. Rubber and the Port of New York Authority -- the T&amp;T Pavilion will attract spectacular crowds and generate maximum excitement.</strong></p>
                <p><strong>If your company should be among those creating this excitement and deriving its benefits, T&amp;T is the logical place for your exhibit.</strong></p>
                <p><strong>The plan above relates to the ground floor of the Pavilion, a full city block in size, where exhibitors will tell their stories. The space spectacular, &quot;Man on the Moon,&quot; will occupy the upper floor, including the exciting lunar crater under the planetarium-type dome.</strong></p>
                <p><strong>Because of the unique floor plan, every visitor will be exposed to every exhibit. Units of floor space are 250 square feet. Two units comprise the rentable minimum. Many have been leased to organizations such as Allied Van Lines, Canadian Pacific and Trans World Airlines. Our experienced sales force can assist in selecting your best location.</strong></p>
              </div>
            </div>
          </section>
          <hr className={styles.hr} />
          <section className={styles.bluePanel}>
            <Image src="/images/trantrav07/tratra30.jpg" alt="Moonscape Top" width={600} height={215} className={styles.borderlessImg} unoptimized />
            <Image src="/images/trantrav07/tratra31.jpg" alt="Moonscape Bottom" width={600} height={186} className={styles.borderlessImg} unoptimized />
            <div className={styles.blueRow}>
              <div className={styles.moonStack}>&quot;MAN<br />ON THE<br />MOON&quot;</div>
              <div className={styles.blueCopy}>
                <p><strong>Excitement ... the sense of adventure -- these and other emotions will sweep over T&amp;T visitors at the climax of the Pavilion&apos;s space spectacular.</strong></p>
                <p><strong>They will see a huge crater before them and the vast, mystic and glowing lunar landscape all around. Above their heads they will see a beautiful, turning planet and will recognize it as Earth. The visitors will become aware of the strange, total silence on the Moon&apos;s surface.</strong></p>
                <p><strong>As they ride around the rim of the crater, visitors will see modern travelers, astronauts at work exploring and conducting experiments being planned by our space officials today. The visitors will witness a landing vehicle touch down, retrorockets blasting ... men stepping out and bouncing in response to a lesser gravity ... the mother ship orbiting overhead ... communications with Mother Earth ... and many more thrilling events. All will be scientifically accurate, planned and designed by professional experts.</strong></p>
                <p><strong>The Moon crater is the climax of the show. Before they reach it, visitors will pass through a space-flight wonderland that dramatically establishes the Moon in the perspective of our solar system, our galaxy, the expanding universe, as well as the perspective of history. The World&apos;s Fair visitors will see giant models of vehicles that have carried Man to the Moon in his imagination ... the hardware developed by American industry for the actual Moon voyages that lie ahead ... and much more.</strong></p>
                <p><strong>Down to earth once more, the visitors find themselves at the entrance lobby of the exciting T&amp;T exhibit area.</strong></p>
              </div>
            </div>
          </section>
          <hr className={styles.hr} />
          <section className={styles.grayPanel}>
            <Image src="/images/trantrav07/tratra32.jpg" alt="T&amp;T" width={250} height={177} className={styles.borderlessImg} unoptimized />
            <div className={styles.featureRow}><h3 className={styles.featureLabel}>CENTER OF<br />ATTRACTION</h3><div className={styles.featureCopy}><p><strong>Hailed by Presidents Hoover, Truman, Eisenhower and Kennedy, the New York World&apos;s Fair 1964-1965 will be a national and world-wide attraction, drawing more than 70 million people. It is sited on 646 acres in Flushing Meadow Park, New York City -- at the center of the world&apos;s greatest metropolitan area.</strong></p><p><strong>The Fair will open April 22, 1964 and will remain open through October. A similar schedule will be followed in 1965. Exhibits will be operated 10 a.m. to at least 10 p.m. seven days a week, including holidays.</strong></p></div></div>
            <hr className={styles.rule} />
            <div className={styles.featureRow}><h3 className={styles.featureLabel}>HALL<br />OF FAME</h3><div className={styles.featureCopy}><p><strong>The T&amp;T Pavilion will be the home of a Transportation Hall of Fame, honoring this century&apos;s leaders and pioneers in every aspect of the industry. Members will be selected from hundreds of nominations which have been received from every section of the U.S. and from abroad.</strong></p><p><strong>Many of the greatest and most popular heroes of the 20th century are men and women who have achieved milestones in the field of transportation. Announcement of their selection is certain to make national and international news. Their presence in the Hall of Fame is certain to attract crowds ... and to reflect their personal prestige on the entire T&amp;T Pavilion.</strong></p></div></div>
            <hr className={styles.rule} />
            <div className={styles.featureRow}><h3 className={styles.featureLabel}>POWERFUL<br />PROMOTION</h3><div className={styles.featureCopy}><p><strong>The position of the T&amp;T Pavilion as one of the major attractions of the Fair will be reinforced by a national promotion campaign prior to and throughout the period of the Fair.</strong></p><p><strong>This campaign, which has already reached millions more through the widest variety of media: newspapers, radio and television, magazines and trade publication. It has been designed to add strength to the campaigns of individual exhibitors.</strong></p></div></div>
            <hr className={styles.rule} />
            <div className={styles.featureRow}><h3 className={styles.featureLabel}>THE<br />RIGHT PRICE</h3><div className={styles.featureCopy}><p><strong>The cost of your exhibit at the Fair, in the T&amp;T Pavilion, is competitive with that of exposure in many media that are far less memorable and effective. Units of 250 square feet are available at a rental cost of $25,000 each for the two year period of the fair. An exhibitor may lease a minimum of two units.</strong></p><p><strong>The rental cost covers such normal services as air conditioning, general lighting, general maintenance and access to all utilities. Payments schedule is as follows:</strong></p><ul className={styles.payList}><li><strong>50% upon signing of lease</strong></li><li><strong>20% October 12, 1963</strong></li><li><strong>20% April 22, 1964</strong></li><li><strong>10% April 1, 1965</strong></li></ul></div></div>
            <Image src="/images/trantrav07/tratra33.jpg" alt="T&amp;T Going Up!" width={600} height={239} className={styles.borderlessImg} unoptimized />
          </section>
          <hr className={styles.hr} />
          <p className={styles.source}>SOURCE: Sales Promotion Booklet for the Transportation &amp; Travel Pavilion</p>
          <Image src="/images/trantrav07/tratra34.jpg" alt="Back Page" width={600} height={256} className={styles.framedImg} unoptimized />
        </div>
      </article>

      <Nav2Bar previousHref="/trantrav06" overviewHref="/trantravoverview" nextHref="/trantrav08" explicitPrevious />
    </>
  );
}
