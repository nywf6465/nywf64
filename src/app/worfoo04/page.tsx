import type { Metadata } from "next";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { NyplRecordsSource } from "@/components/worfoo/NyplRecordsSource";
import styles from "./worfoo04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Concept — World of Food — nywf64.com",
  description:
    "The Concept — World of Food pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Worfoo04Page() {
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

      <article className={styles.article} aria-labelledby="worfoo04-title">
        <header className={styles.titleBar}>
          <h1 id="worfoo04-title" className={styles.titleBarMain}>
            The Concept
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.salmonHeading}>
            Those Who See the Invisible Can Do the Impossible
          </h2>

          <div className={styles.grayBody}>
            <p>
              With those words, Jim Jones, executive vice president of the World
              of Food, broke ground for his five-story pavilion at its 50,066
              square foot plot in the Fair&apos;s Industrial Area on January 23,
              1963. It would be one of the largest pavilions at the Fair,
              occupying an enviable site right at the Main Gate and playing host
              to some of America&apos;s largest food related corporations
              including Adolph&apos;s Ltd., RCA-Whirlpool, Hershey Chocolate,
              Thomas J. Lipton Tea Co., Pepsi-Cola, Roman Products, Inc. and
              five major food associations.
            </p>
          </div>

          <figure className={styles.figureCenter} style={{ maxWidth: 150 }}>
            <Image
              src="/images/worfoo04/wof03.jpg"
              alt=""
              width={150}
              height={72}
              className={styles.photoBorder}
              unoptimized
            />
          </figure>

          <div className={styles.grayBody}>
            <p>
              You won&apos;t find a listing for The World of Food Pavilion in
              either issue of the <em>Official Guide</em> even though it is
              often found on early maps of the Fair, only adding to the mystery
              of this &quot;phantom pavilion.&quot; Ask any Fairgoer about the
              exhibits they saw there and they&apos;ll tell you they don&apos;t
              remember that pavilion. Why? Because The World of Food has the
              unfortunate distinction of being the Fair&apos;s first{" "}
              <em>flop</em>. The steel framework of the unfinished pavilion was
              demolished just weeks before the Fair&apos;s opening by order of
              the courts and the World&apos;s Fair Corporation. The steel was
              stored and later sold for scrap. The foundation was buried, the
              site was seeded over and The World of Food disappeared into
              World&apos;s Fair history before the Fair ever opened.
            </p>
            <p>
              Not much has been uncovered about the story of The World of Food
              and what went wrong with this important exhibit until now, thanks
              to the research of Philip Ras into the records stored in the{" "}
              <em>Manuscripts and Archives Division</em> of the New York Public
              Library.{" "}
              <span className={styles.nywf64Blue}>nywf</span>
              <span className={styles.nywf64Red}>64</span>
              <span className={styles.nywf64Blue} style={{ fontSize: "0.85rem" }}>
                .com
              </span>{" "}
              presents the story of The World of Food through memos and letters
              from the files of the New York World&apos;s Fair 1964/1965
              Corporation.
            </p>
          </div>

          <figure className={styles.figureCenter} style={{ maxWidth: 460 }}>
            <p className={styles.photoCaption}>
              More than thirty major food manufacturers and distributors will
              display their products in the World of Food Pavilion. Shown here
              and situated near the main entrance to the Fairgrounds, the
              five-story structure will be topped by an &quot;edible garden.&quot;
              Exterior landscaping will be highlighted by rare fruit trees and
              spice plants. Architect: Lionel K. Levy. Contractor: Charles
              Miesemer, Inc.
            </p>
            <Image
              src="/images/worfoo04/wof10.jpg"
              alt="Artist's Pavilion Rendering"
              width={460}
              height={313}
              className={styles.photoBorder}
              unoptimized
            />
            <p className={styles.sourceLine}>
              Source: Progress Report #5 - New York World&apos;s Fair 1964/1965
              Corporation
            </p>
            <p className={styles.sourceLine}>Source: May 17, 1962</p>
          </figure>

          <div className={styles.exhibitBox}>
            <h2 className={styles.salmonHeading}>The Concept</h2>
            <p>
              <strong>
                <u>EXHIBIT 1</u>
              </strong>
            </p>
            <p>
              The project will be a multiple exhibit pavilion under the name
              &quot;The World of Food&quot; physically disposed and programmed
              over the two year period of the Fair to constitute a University of
              Food as well as a Forum of regular, lively, public demonstrations
              of all foods of the world in their recipe, dietetic, nutrition,
              economic, preparation, service and other related aspects.
            </p>
            <p>
              The University phase of the project would be purposed toward
              educating the public through a regular course curriculum and
              scheduled classes, in the proper use of all foods from the
              preparation, service, economic, dietetic, nutrition and etiquette
              standpoints. The exhibitors would provide the material, faculty and
              other necessaries of the curriculum. The regularity of the classes
              and development of the program throughout each day during the Fair
              will require attendance at the project.
            </p>
            <p>
              The Forum phase of the project will include, subject to coordination
              with the approval of the Fair Corporation, such things as
            </p>
            <ol className={styles.items}>
              <li>
                Actual cooking lessons of specialty foods of particular
                countries:
              </li>
              <li>Various methods of preparing particular foods,</li>
              <li>
                Demonstration tie ins with (a) local food features, e.g., Apple
                Festivals, Shrimp Festivals, Pennsylvania Dutch Days, etc., (b)
                manufacturers of food products not otherwise represented at the
                Fair and (c) Trade Associations representing a particular food or
                food grouping not permanently represented at the Fair;
              </li>
              <li>
                Demonstrations of new foods in cooperation with foreign
                governments, United States agencies and State Agricultural
                groups;
              </li>
              <li>
                The largest collection of cookbooks and food reference material
                with a recipe finder service on the spot; and
              </li>
              <li>
                Demonstrations of the preparation and enjoyment of exotic cooking.
              </li>
            </ol>
            <p>
              T he exhibitors will include companies in the food and related
              industries who will, subject to the provisions of this Agreement
              and the Rider attached hereto, hire space in the pavilion from The
              World of Food Inc. Their exhibits, displays, expositions, etc. will
              be constructed and coordinated by The World of Food Inc.
            </p>
            <p>
              The Project may include a restaurant and a bar as well as
              amusements, entertainments And/or diversions to the public all of
              which shall be no more than subsidiary and incidental to the purpose
              of the particular exhibitors involved and to the foregoing
              educational purposes of the Project.
            </p>
            <p>
              The Project may include a private club for exhibitors, staff, and
              their invited guests, to which the general public will not be
              admitted.
            </p>
          </div>

          <NyplRecordsSource />

          <figure className={styles.figureCenter} style={{ maxWidth: 460 }}>
            <p className={styles.photoCaption}>
              Proposed <em>Miracle Kitchen</em> in The World of Food
            </p>
            <Image
              src="/images/worfoo04/wof11.jpg"
              alt="Miracle Kitchen"
              width={460}
              height={199}
              className={styles.photoBorder}
              unoptimized
            />
            <p className={styles.sourceLine}>
              Source: Progress Report #8 - New York World&apos;s Fair 1964/1965
              Corporation
            </p>
            <p className={styles.sourceLine}>Source: April 22, 1963</p>
          </figure>
        </div>
      </article>

      <Nav2Bar previousHref="/worfoo03" nextHref="/worfoo05" />
    </>
  );
}
