import type { Metadata } from "next";
import Image from "next/image";
import { WffdHero } from "@/components/WffdHero";
import { WffdNavChrome } from "@/components/WffdNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../wffdPage.module.css";

export const metadata: Metadata = {
  title:
    "Fire Departments of City and Fair Agree on Mutual Aid Plans — nywf64.com",
  description:
    "The New York City Fire Department and the 1964/1965 World’s Fair sign a mutual fire fighting assistance agreement — from Fair News, on nywf64.com.",
};

/**
 * WFFD feature page 1 (legacy wffd02.html remapped to /wffd01).
 * Stack: hero → Wffd nav (Page 2) → navy title bar → article → nav2
 * PREVIOUS → /wffdoverview; NEXT → /wffd02
 */
export default function Wffd01Page() {
  return (
    <>
      <WffdHero />

      <WffdNavChrome />

      <article className={styles.article} aria-labelledby="wffd01-title">
        <header className={styles.titleBar}>
          <h1 id="wffd01-title" className={styles.titleBarMain}>
            Page 2
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>
            Fire Departments of City and Fair Agree on Mutual Aid Plans
          </h2>

          <div className={styles.columns}>
            <div className={styles.col}>
              <p>
                The New York City Fire Department, largest in the world, and the
                greatest international exposition in history have signed a
                mutual fire fighting assistance agreement, it has been announced
                by Robert Moses, president of the New York 1964-1965 World&apos;s
                Fair, who signed the agreement with City Fire Commissioner Edward
                Thompson.
              </p>
              <p>
                In effect, the pact between the City department and the Fair
                Corporation places units of the City&apos;s fire fighting
                resources, 13,000 men strong and 760 pieces of rolling apparatus,
                at the service of the Fair when, as and if needed. Conversely,
                the Fair&apos;s firemen and equipment are at the disposal of the
                City&apos;s Fire Department, as needed. The Pinkerton National
                Detective Agency has been awarded the contract for security,
                including fire protection, prevention and extinguishment at the
                World&apos;s Fair.
              </p>
              <p className={styles.subhead}>Details of Pact</p>
              <p>
                The fire fighting agreement permits either the Fire Department
                of the City or the Fair to call for assistance when necessary.
                It then becomes the duty of the senior officer on duty at the
                fire office
              </p>
            </div>

            <div className={styles.col}>
              <p>
                receiving the request to determine the availability of apparatus
                and personnel and to dispatch them to the scene.
              </p>
              <p>
                The Fair Fire Department, composed primarily of recently retired
                City fire officers and men, will be divided into three companies,
                each consisting of a captain, three lieutenants and 20 firemen.
                They will operate on a round-the-clock basis to protect the
                buildings on the Fairgrounds and will stand ready to assist the
                New York City Fire Departments in fighting fires in the vicinity
                of the Flushing Meadow Park site of the Fair.
              </p>

              <figure className={styles.sideFigure}>
                <Image
                  src="/images/wffd01/wffd01.jpg"
                  alt="Fair Fire Truck"
                  width={170}
                  height={110}
                  className={styles.sidePhoto}
                  unoptimized
                />
                <figcaption className={styles.sideCaption}>
                  The first of three fire engines, ordered by the New York
                  1964-1965 World&apos;s Fair Fire Department, which has been
                  delivered to the Flushing Meadow Park site of the international
                  exposition. The engine, decorated in the familiar orange and
                  blue of the Fair and the City of New York, has the most modern
                  equipment available, including more than 600 feet of nylon,
                  self-drying hose.
                </figcaption>
              </figure>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: <em>Fair News</em>, Vol 2, No. 1, January 21, 1963
          </p>

          <hr className={styles.rule} />

          <figure className={styles.featureFigure}>
            <Image
              src="/images/wffd01/wffd03.jpg"
              alt="Firemen, Truck and Unisphere"
              width={392}
              height={499}
              className={styles.featurePhoto}
              unoptimized
            />
            <figcaption className={styles.featureCaption}>
              Photo courtesy of Gary Urbanowicz
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wffdoverview"
        explicitPrevious
        nextHref="/wffd02"
      />
    </>
  );
}
