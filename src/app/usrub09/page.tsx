import type { Metadata } from "next";
import Image from "next/image";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./usrub09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A Royal Legacy — U.S. Rubber — nywf64.com",
  description:
    "The Uniroyal Giant Tire legacy after the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber — A Royal Legacy essay.
 * Body from legacy usrub09.html. Legacy wording (“it's NailGuard”) preserved.
 *
 * Stack: hero → UsrubNavChrome → navy title → essay → Nav2Bar.
 */
export default function Usrub09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Rubber">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/usruboverview/hero-banner.jpg"
            alt="U.S. Rubber at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UsrubNavChrome />

      <article className={styles.article} aria-labelledby="usrub09-title">
        <header className={styles.titleBar}>
          <h1 id="usrub09-title" className={styles.titleBarMain}>
            A Royal Legacy
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.postcardBlock}>
            <Image
              src="/images/usrub09/usrub17.jpg"
              alt="Postcard c. 1970s - Daytime"
              width={400}
              height={256}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>
              SOURCE: Postcards of the Allen Park (Michigan) Uniroyal Giant Tire,
              circa early 1970s
            </figcaption>
            <div className={styles.postcardCaption}>
              <strong>THE UNIROYAL GIANT TIRE</strong>
              <strong>Interstate Highway I-94, Allen Park, Mich.</strong>
              <p>
                Originally constructed for the 1964-65 New York World&apos;s Fair, the
                spectacular 80-foot-high tire is the newest landmark on the main
                highway from Detroit Metropolitan Airport to the city center. The
                largest tire ever built, it weighs over 100 tons. The exterior sides
                are fabricated from Uniroyal&apos;s flame resistant Vibrin polyester
                resin reinforced with glass fiber, and can resist hurricane force
                winds. Special cantilevered construction eliminates need for exposed
                support wires.
              </p>
            </div>
            <Image
              src="/images/usrub09/usrub16.jpg"
              alt="Postcard - c. 1970s - Nighttime"
              width={400}
              height={252}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              Following the close of the World&apos;s Fair in 1965, U.S. Rubber&apos;s giant
              tire was shipped to the company&apos;s sales office in Allen Park,
              Michigan. It has become one of the Fair&apos;s most enduring legacies.
              According to Uniroyal, U.S. Rubber&apos;s predecessor ...
            </p>
          </div>

          <ul className={styles.list}>
            <li>
              Standing eight stories tall, the Giant Tire is the largest tire model
              ever built. It is 80-feet high and weighs 12 tons. The interior is
              120,576 cubic feet, and the tread is half a foot deep.
            </li>
            <li>
              The tire was originally a Ferris wheel with 24 barrel-shaped gondolas
              -- each carrying four people -- that were rotated around the
              circumference of the tire by a 100-horsepower motor. It was designed by
              the architectural firm of Shreve, Lamb and Harmon -- designers of the
              Empire State Building.
            </li>
            <li>Each ride cost 25 cents and lasted about 10 minutes.</li>
            <li>
              When the Fair ended in 1965, the tire was shipped by rail in 188 sections
              to Detroit. It was reassembled in four months and anchored in concrete
              and steel off I-94 at the tire company&apos;s Allen Park, Michigan sales
              office.
            </li>
            <li>
              In 1994, the Giant Tire was remodeled. Neon lighting and a new hubcap
              were added to give it a more sleeker, modern appearance.
            </li>
            <li>
              In 1998, the Giant Tire received another new look when Uniroyal launched
              it&apos;s NailGuard® self-sealing passenger tire. The tire acquired a giant
              nail protruding from the tread to dramatically demonstrate the
              product&apos;s ability to withstand most tread punctures.
            </li>
            <li>
              In August 2003, the Giant Tire underwent renovation once again. The
              tire&apos;s main structure was repaired and the exterior painted. The
              various structural improvements will ensure the longevity of the Giant
              Tire for many years to come.
            </li>
          </ul>

          <figure className={styles.postcardBlock}>
            <Image
              src="/images/usrub09/usrub18.jpg"
              alt="Approaching the Giant Tire"
              width={400}
              height={300}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.source}>
              SOURCE: Photographs courtesy Mary Ellen Coughlan, © 2008, All Rights
              Reserved
            </figcaption>
            <div className={styles.postcardCaption}>
              <strong>THE UNIROYAL GIANT TIRE</strong>
              <p>The tire as it appears today in Allen Park, Michigan.</p>
            </div>
            <Image
              src="/images/usrub09/usrub19.jpg"
              alt="Giant Tire Today"
              width={400}
              height={302}
              className={styles.photo}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/usrub08"
        explicitPrevious
        overviewHref="/usruboverview"
        nextHref="/usruboverview"
      />
    </>
  );
}
