import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./worfoo05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Exhibitors — World of Food — nywf64.com",
  description:
    "Exhibitors — World of Food pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SUB_EXHIBITORS: [string, string][] = [
  ["Adolph's International Restaurant", "King Korn Stamp Co."],
  ["Albert Barsion", "Knox Gelatin"],
  ["American Sugar Company", "Lea & Perrins, Inc."],
  ["Angostura-Wupperman Corp.", "Libby-Owens Glass"],
  ["Atalanta Trading", "Thomas J. Lipton Company, Inc."],
  ["Anker Cash Register", "London Specialty Co."],
  [
    "Automatic Canteen Company of America (The)",
    "Miller Brewing Co.",
  ],
  ["B&M Beans", "Minimarkets"],
  ["Beckley-Haltom-Hickman Service Corp.", "Morton Salt Company"],
  ["Brooklyn Union Gas", "Mushroom Council"],
  ["Chain Store Age", "Pepsi-Cola Company"],
  ["Cheese Shop of Connecticut (The)", "Quality Bakers of America"],
  ["City Island Ice", "Reese Candy"],
  ["Claxton Bakery", "Reiter Beer"],
  ["Conex Division of Illinois Tool Works", "Roman Products"],
  ["Dairylea", "Ruston Hornsby Ltd."],
  ["Data Patterns", "Salton, Inc."],
  ["Duffy-Mott Co., Inc.", "Stanley Kernel Fresh Popcorn"],
  ["Engineering Controls", "Taylor Provisions Company (The)"],
  ["Flavo-Rite Foods Inc.", "Tekni-Craft Inc."],
  ["Fortune Enterprises", "Trunz Inc."],
  ["Gift-O-Rama", "U.S. Nutrition Products"],
  ["Heide Candy", "Whirlpool Corporation"],
  ["Hershey Chocolate", "Wise Potato Chips"],
  ["Hickory Farms", "York Co. (The)"],
  ["Ideal Electric & Manufacturing Co.", "Trade Associations: SMI, NAFC, NARGUS, CFPA, NAWGA"],
];

export default function Worfoo05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="World of Food">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/worfoooverview/hero-banner.jpg"
            alt="World of Food pavilion site at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WorfooNavChrome />

      <article className={styles.article} aria-labelledby="worfoo05-title">
        <header className={styles.titleBar}>
          <h1 id="worfoo05-title" className={styles.titleBarMain}>
            Exhibitors
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figureCenter} style={{ maxWidth: 440 }}>
            <Image
              src="/images/worfoo05/wof16.jpg"
              alt="The World of Food, Inc."
              width={440}
              height={253}
              className={styles.photoBorder}
              unoptimized
            />
            <p
              className={styles.salmonHeading}
              style={{ fontSize: "1.15rem", textAlign: "right" }}
            >
              The World of Food, Inc.
            </p>
          </figure>

          <h2
            className={styles.featureSalmon}
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              margin: "0 0 0.75rem",
            }}
          >
            Features
          </h2>

          <div className={styles.body}>
            <p>
              <strong>
                The theme of the World of Food Pavilion is &quot;Garden to
                Gourmet&quot;
              </strong>
            </p>
            <p>
              <strong>
                <span className={styles.featureSalmon}>Exterior</span> The
                three and a half story pavilion is located at the main entrance
                to the Fair. The sparkling white exterior will be decorated with
                colorful mosaic panels. The landscaping will be highlighted by
                rare fruit trees and spice plants.
              </strong>
            </p>
            <p>
              <strong>
                <span className={styles.featureSalmon}>Interior</span> The first
                floor and the first floor mezzanine will feature food exhibits,
                kitchen exhibits (the RCA Whirlpool &quot;Miracle Kitchen&quot; -
                the electronic ultimate in the push-button field aimed to reduce
                kitchen work to a minimum), and Adolph&apos;s International Steak
                House seating 500 persons. There will also be a replica of
                Hershey Town of Pennsylvania.
              </strong>
            </p>
          </div>

          <div className={styles.highlightBar}>
            In the &quot;Americana Area&quot;, the American Sugar Refining Co.
            will tell the story of sugar as a quick-energy food and a food for
            fun and good taste. Miller Brewing Co. will trace the history of beer
            from early Americana (home brewing) to the use of beer in recipes.
            There will be a new England fishing village replica with a
            &quot;foods afloat&quot; section in which the sea&apos;s products will
            be displayed along with a model houseboat which will feature the
            latest contributions in nautical gallery equipment.
          </div>

          <div className={styles.body}>
            <p>
              <strong>
                A teen center will be located on the first floor mezzanine. Here
                the World of Food plans to feature cook-outs and guest appearances
                of recording stars.
              </strong>
            </p>
            <p>
              <strong>
                The second floor and the second floor mezzanine will have a wine
                tasting bar, exhibits of foods, beverages, fruits and seafood.
                There will be a supermarket which will display exhibitors&apos;
                products. In this market, there will be a booth where the woman
                of the house can press buttons and receive menu suggestions for
                any meal. Actual sales will be made by using completely new
                electronic merchandising display and selection techniques. The
                purchases will be delivered electrically to the check-out counter.
                Other assigned areas will feature unusual frozen foods (instant
                heat and eat), a gourmet shop managed by Hickory Farms of Ohio,
                and an International Brauhaus and Biergarten.
              </strong>
            </p>
            <p>
              <strong>
                On the third floor there will be a canteen, delicatessen, health
                and diet exhibits.
              </strong>
            </p>
          </div>

          <div className={styles.highlightBar}>
            The roof terrace will feature a fully equipped auditorium (TV, radio)
            and exhibits of outdoor camping and picnicking. There will be an
            &quot;edible garden&quot; where foods will be growing, fostered by
            louvered panels which will be synchronized with the sun to approximate
            a tropical climate for the foods that will grow only under these
            conditions.
          </div>

          <div className={styles.body}>
            <p>
              <strong>
                Numerous special events: demonstrations and seminars on food, its
                uses, and food products of the future will be held daily under the
                direction of the World of Food Editorial Advisory Board.
              </strong>
            </p>
          </div>

          <h2
            className={styles.featureSalmon}
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              margin: "1.25rem 0 0.5rem",
            }}
          >
            Sub-Exhibitors
          </h2>

          <div className={styles.subGrid}>
            {SUB_EXHIBITORS.map(([left, right]) => (
              <Fragment key={left}>
                <div>{left}</div>
                <div>{right}</div>
              </Fragment>
            ))}
          </div>

          <p className={styles.source} style={{ marginTop: "1.25rem" }}>
            Source: New York World&apos;s Fair 1964/1965 Corporation Operations
            Manual, page dated 8-13-63
          </p>
          <p className={styles.source}>Source: April 22, 1963</p>
        </div>
      </article>

      <Nav2Bar previousHref="/worfoo04" nextHref="/worfoo06" />
    </>
  );
}
