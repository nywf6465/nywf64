import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak press releases about the Kodak Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak press releases page.
 * Body from legacy easkod09.html.
 */
export default function Easkod09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod09-title">
        <header className={styles.titleBar}>
          <h1 id="easkod09-title" className={styles.titleBarMain}>
            Press Releases
          </h1>
        </header>
        <div className={styles.articleInner}>
          <p className={styles.source}>
            SOURCE: Eastman Kodak Press Release - Courtesy Gary Holmes
            Collection
          </p>
          <Image
            src="/images/easkod09/kod48.jpg"
            alt="Eastman Kodak letterhead"
            width={218}
            height={138}
            className={styles.letterhead}
            unoptimized
          />
          <p className={styles.releaseKicker}>For Immediate Release</p>
          <p className={styles.headlinePlain}>
            Kodak Pavilion to be Major World&apos;s Fair Attraction
          </p>
          <p className={styles.body}>
            The most fascinating story ever told about photography and its
            impact on our everyday lives has been promised visitors to the Kodak
            Pavilion at the New York World&apos;s Fair.
          </p>
          <p className={styles.body}>
            Now nearing completion, the Kodak Pavilion will be one of the ten
            largest industrial exhibits at the Fair. The two-level, uniquely
            designed structure will house over 15 separate show areas that will
            dramatize the vital role the camera&apos;s &quot;searching eye&quot;
            plays in science, medicine, industry, commerce, education,
            communications, history recording, outer space exploration, and
            leisure-time activities.
          </p>
          <p className={styles.body}>
            The exhibit will provide attractive and restful areas where
            fairgoers can relax, take pictures against exotic backdrops
            including a panoramic view of the Fair itself, discuss photography
            with experts and view collections of some of the world&apos;s finest
            photographs.
          </p>
          <p className={styles.body}>
            According to Lincoln V. Burrows, Kodak&apos;s director of World&apos;s
            Fair Planning, the exhibit will be an attraction not only for camera
            enthusiasts but for people of all ages and from all walks of life.
          </p>
          <p className={styles.body}>
            &quot;Our pavilion will be a place where people will be able to{" "}
            <span className={styles.underline}>do</span> exciting things as well
            as <span className={styles.underline}>see</span> them,&quot; he
            said.
          </p>
          <p className={styles.body}>
            Many of the exhibits will incorporate audience-participation devices
            that will enable visitors to select photographic subjects of their
            choice for viewing, and practice new techniques to improve
            picture-taking skills.
          </p>
          <p className={styles.body}>
            One of the most spectacular features will be a giant, circular
            Picture Tower rising eight stories above the Fair grounds. Around
            the tower will be five huge outdoor color prints -- the world&apos;s
            largest. Each measuring 30 feet x 36 feet, they will be
            front-illuminate day and night by a specially-developed lighting
            system. The pictures, taken by crews of Kodak photographers in most
            countries of the Free World, will be changed every four weeks.
            Because the Picture Tower will be visible for miles around, it is
            expected to become a favorite rendezvous spot for Fair visitors.
          </p>
          <p className={styles.body}>
            A feature attraction at the Kodak Pavilion will be a major film
            production, &quot;The Searching Eye&quot; by Saul Bass, noted
            Hollywood graphics designer. Through dramatic applications of color
            photography and new multi-image, 70mm projection techniques,
            common-place and unusual wonders of the world will be presented as
            seen through the eyes and imagination of a 10 year-old boy. The
            continuous show will take place in a circular, air-conditioned
            theater capable of accommodating 35,000 people daily.
          </p>
          <p className={styles.body}>
            Of special interest to camera-carrying visitors will be the
            glass-enclosed, air-conditioned Information Center, staffed by Kodak
            technicians who will answer questions concerning photography.
            Helpful literature on how to photograph the Fair will be available
            and information will be posted announcing the photogenic events of
            the day around the Fair grounds. Kodak products will be on display
            and there will even be a darkroom where minor camera adjustments and
            repairs can be made for the public by the pavilion staff.
          </p>
          <p className={styles.body}>
            Multi-lingual attendants will be on duty in the International area
            to assist foreign visitors. The Salon area will feature
            prize-winning press, professional and amateur color photographs from
            all over the world.
          </p>
          <p className={styles.body}>
            A working model of the Tiros weather satellite will show how space
            photography is used in weather forecasting, and an animated model of
            a spaceman will demonstrate a library of the future on microfilm
            using a microfilm viewer -- all confined in his space capsule
            compartment.
          </p>
          <p className={styles.body}>
            Informative exhibits of photography in the graphic arts, news
            photography and the motion picture industry will be displayed.
            Newsworthy events at the Fair will be photographed and projected in
            the Kodak exhibit almost as they occur.
          </p>
          <p className={styles.body}>
            X-rays and their application to the physical well-being of man and
            his machines, their use in crime detection and other uses will be
            dramatized. Special exhibits will be devoted to expanding the
            picture-taking horizons of the amateur photographer.
          </p>
          <p className={styles.body}>
            Mr. Burrows estimates that it will take a visitor about four hours
            to see the complete Kodak exhibition. A number of attractions will
            be change from time to time as the Fair progresses.
          </p>
          <p className={styles.hash}>#</p>
          <p className={styles.dateLine}>12/63</p>

          <p className={styles.source}>SOURCE: Eastman Kodak Press Release</p>
          <Image
            src="/images/easkod09/kod48.jpg"
            alt="Eastman Kodak letterhead"
            width={218}
            height={138}
            className={styles.letterhead}
            unoptimized
          />
          <p className={styles.releaseKicker}>For Immediate Release</p>
          <p className={styles.dateLine}>September 10, 1964</p>
          <p className={styles.body}>
            Eastman Kodak is among those firms that count their participation in
            the Fair as &quot;a profitable business investment.&quot;
          </p>
          <p className={styles.body}>
            Lincoln V. Burrows, director of world&apos;s fair planning for the
            company, siad that more than 4 million persons visited the Kodak
            Pavilion during the first 90 days of the Fair.
          </p>
          <p className={styles.body}>
            The Kodak Pavilion has placed consistently among the top ten
            exhibits in a popularity poll conducted weekly by the New York
            World&apos;s Fair Corporation.
          </p>
          <p className={styles.body}>
            &quot;More than 70 per cent of the family groups that visit the
            Pavilion carry at least one camera with them,&quot; Burrows noted.
            He called the Fair &quot;one of the most photographed events in
            history.
          </p>
          <p className={styles.body}>
            &quot;Every time a shutter clicks at the Fair the photographic
            business gets another boost,&quot; Burrows said. &quot;And the
            photos made at the fair mean more than immediate film sales and
            photofinishing. When the visitor returns home and shows his slides,
            prints, and movies he is promoting photography in a substantial
            way.
          </p>
          <p className={styles.body}>
            &quot;Dealers, distributors, photofinishers, and other business
            customers are enthusiastic about the Kodak Pavilion and the
            company&apos;s World&apos;s Fair promotions,&quot; he said.
            &quot;They anticipate, as we do, that the Fair and Kodak&apos;s
            participation will result in better business.&quot;
          </p>
          <p className={styles.body}>
            Burrows said he would not relate the company&apos;s participation in
            the Fair to specific gains in Kodak sales, but he did note that
            &quot;Sales and earnings by the company&apos;s U.S. units were at
            record levels during April, May, and June.
          </p>
          <p className={styles.body}>
            Consolidated sales by Kodak&apos;s U.S. units in the second quarter
            of 1964 totaled $278,995,610, the highest in the company&apos;s
            history. Earnings for the quarter also set record highs.
          </p>
          <p className={styles.body}>
            The Kodak executive spoke also of other benefits to Kodak as a
            result of the World&apos;s Fair.
          </p>
          <p className={styles.body}>
            &quot;The fair gives us a rare opoortunity to shake hands with those
            who use our products and those who are prospective customers,&quot;
            Burrows said.
          </p>
          <p className={styles.body}>
            &quot;Like other firms represented at the Fair,&quot; he said,
            &quot;we are intersted in telling the company story in a way that
            will help people to know us better,&quot; he continued.
          </p>
          <p className={styles.body}>
            &quot;That objective is being met,&quot; he said. &quot;Our market
            research people tell us that thousands of visitors to the Kodak
            Pavilion are learning, for the first time, of the company&apos;s
            size, scope, and diversification.&quot;
          </p>
          <p className={styles.body}>
            The Kodak Pavilion has been called the most complete and colorful
            exhibit ever assembled to display photography&apos;s pervasive
            scope. Visitors learn there that Kodak&apos;s interests extend far
            beyond the manufacture of cameras and roll film to chemicals,
            plastics, fibers, and a variety of products and processes that serve
            business, industry, medicine, science, and defense.
          </p>
          <p className={styles.body}>
            &quot;We believe that our investment in the Fair -- upwards of $10
            million -- will continue to produce a good return,&quot; he
            concluded.
          </p>
          <p className={styles.hash}>#</p>
          <p className={styles.dateLine}>9/64/177</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod08"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod10"
      />
    </>
  );
}
