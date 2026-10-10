import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "In the Beginning: Moses — Building the Fair — nywf64.com",
  description:
    "In the Beginning: Moses — Building the Fair and Flushing Meadow Park at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * Building the Fair — In the Beginning: Moses.
 * Body from legacy building02.html (mapped to /building01 as Page 1 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building01-title">
        <header className={styles.titleBar}>
          <h1 id="building01-title" className={styles.titleBarMain}>
            In the Beginning: Moses . . .
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              ...created Flushing Meadows Park. Robert Moses, that is.
            </p>
            <p>
              One cannot begin to document the story of the building of the Fair
              without first a reference to Flushing Meadow Park and its creator,
              Robert Moses. The stories of the Fair, the Park and Robert Moses
              are so intertwined it is only appropriate to begin with Flushing
              Meadow, Moses&apos; grand dream for the greatest of urban parks.
              And although he was not the originator of the idea for a
              World&apos;s Fair in New York in the mid-twentieth century, Robert
              Moses surely was the catalyst that brought it to fruition.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 481 }}>
            <Image
              src="/images/building01/saga02.jpg"
              alt="The Corona Dumps"
              width={481}
              height={325}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              <Link href="/flushing-meadows/saga">
                The Saga of Flushing Meadows
              </Link>{" "}
              has been told in detail on other pages at <BrandMark /> and you
              are invited to read it. Briefly, the site of New York&apos;s
              World&apos;s Fairs was once a refuse dump in the Borough of
              Queens; the Corona Dumps by name. In 1936 this blighted area was
              chosen by then New York City Parks Commissioner Robert Moses to
              host the city&apos;s first World&apos;s Fair; the New York
              World&apos;s Fair of 1939/1940. Moses realized that the population
              of the city was shifting ever further east. He saw the reclamation
              of the Corona Dumps for the 1939 World&apos;s Fair as an
              opportunity to create a vast urban park in an area which would be
              closer to the population center of the metropolis.
            </p>
            <p>
              More than 1200 acres of swamp land were reclaimed for the site of
              the World&apos;s Fair. Beneath this huge expanse of marshy land
              was laid miles and miles of gas, electric, water and sewer lines.
              On the surface, miles more of roadways, paths, trees and flower
              beds were created. The World&apos;s Fair would be temporary. The
              utilities, roadways and plantings were permanent. They, and the
              huge proceeds from the Fair, would provide the foundation for the
              site&apos;s restoration to a park after the Fair had ended.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 396 }}>
            <Image
              src="/images/building01/building02.jpg"
              alt="1939/1940 New York World's Fair"
              width={396}
              height={301}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The 1939/1940 New York World&apos;s Fair at Flushing Meadows Park
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The 1939/1940 World&apos;s Fair was a popular success. It was a
              financial flop. There were no proceeds to complete Moses&apos;
              grand urban park. And, despite some additional funding provided to
              enhance certain areas of Flushing Meadow when it played host to a
              youthful United Nations Headquarters in the mid 1940s, the park
              remained more of a wilderness area than a true urban park.
            </p>
            <p>
              Then, in 1959, a group of men began to float an idea around City
              Hall that New York should again play host to the world with a new
              Fair. Twenty years had passed since the 1939 World&apos;s Fair and
              they felt that it would benefit their children, and all children,
              to have an opportunity to experience &quot;The World of
              Tomorrow&quot; and its wonders as they had two decades before at
              the 1939/1940 New York World&apos;s Fair. As the idea began to
              take hold and it became clear that a site would be needed to host
              a new Fair, Flushing Meadow Park was the obvious choice. It also
              became clear that it would require someone of extraordinary talent
              to undertake such an immense project as the building of a
              World&apos;s Fair.
            </p>
            <p>
              Robert Moses was about to be provided with an opportunity to see
              his great park become a reality at last.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/buildingoverview"
        explicitPrevious
        nextHref="/building02"
      />
    </>
  );
}
