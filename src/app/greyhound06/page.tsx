import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Guide Pamphlets — Greyhound — nywf64.com",
  description:
    "Greyhound How to See the New York World's Fair guide pamphlets — 1964/1965 New York World’s Fair on nywf64.com.",
};

function Cover({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <span className={styles.photoFrame}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.photoImg}
        unoptimized
      />
    </span>
  );
}

function VehiclePhoto({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styles.vehiclePhoto}
      unoptimized
    />
  );
}

/**
 * Greyhound — Guide Pamphlets.
 * Body from legacy greyhound06.html (1964 How to See pamphlet facsimile).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Typo preserved: “As new-as-tomorrow fleet”.
 */
export default function Greyhound06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Greyhound">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/greyhoundoverview/hero-banner.jpg"
            alt="Greyhound at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreyhoundNavChrome />

      <article className={styles.article} aria-labelledby="greyhound06-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound06-title" className={styles.titleBarMain}>
            Guide Pamphlets
          </h1>
        </header>

        <div className={styles.articleInnerWide}>
          <div className={styles.coversRow}>
            <Cover
              src="/images/greyhound06/greyhound34.jpg"
              alt="Greyhound Pamphlet 1964"
              width={290}
              height={475}
            />
            <Cover
              src="/images/greyhound06/greyhound35.jpg"
              alt="Greyhound Pamphlet 1965"
              width={290}
              height={508}
            />
          </div>

          <h2 className={styles.pamphletTitle}>IT&apos;S A BIG FAIR</h2>
          <p className={styles.pamphletSubtitle}>
            Here&apos;s how to see and enjoy it all
          </p>

          <div className={styles.bigFairRow}>
            <p className={styles.pamphletLead}>
              First, get your bearings. Give the Fair a good &quot;once-over&quot;.
              Then, with a better idea of what there is to see, you&apos;ll be
              ready to go back and do the Fair right. And you&apos;ll be able to
              devote more time to the things that interest you most. Best approach
              is a &quot;get-acquainted&quot; sightseeing tour. Take a Grand tour
              of the entire Fair ... or special tours through various exposition
              areas. And remember: it&apos;s a big Fair. The promenades and
              roadways alone are nearly forty miles long! To make your sightseeing
              easier and more rewarding, Greyhound provides complete Fair-wide
              transportation, tour and information services -- all fully
              described in this convenient folder. Keep it handy. Put these
              services to work for you whenever you can. They&apos;ll save many a
            </p>
            <div>
              <p className={styles.pamphletLead}>
                weary walk ... add hours to your sightseeing day ... and help
                make your visit to the New York World&apos;s Fair a truly
                memorable occasion.
              </p>
              <span className={styles.photoFramePlain}>
                <VehiclePhoto
                  src="/images/greyhound06/greyhound43.jpg"
                  alt="Main Mall image"
                  width={290}
                  height={233}
                />
              </span>
            </div>
          </div>

          <div className={styles.pamphletBanner}>
            <p className={styles.pamphletBannerHead}>
              SAVE TIME -- SEE MORE IN THIS EXCITING WAY
            </p>
            <div className={styles.bannerGrid}>
              <div className={styles.fountainBlock}>
                <VehiclePhoto
                  src="/images/greyhound06/greyhound45.jpg"
                  alt="Lunar Fountain"
                  width={140}
                  height={83}
                />
                <p className={styles.fountainLabel}>LUNAR FOUNTAIN</p>
              </div>
              <div className={styles.bannerCopy}>
                <p>
                  Welcome to the Fair of the Century! As you enter through any of
                  the main gates, you&apos;ll find yourself in the fascinating
                  World of the Future ... and you&apos;ll discover a wide and
                  wonderful choice of transportation and sightseeing services to
                  help you explore it. Greyhound will whisk you from one area to
                  another by time-saving Rapid Transit bus. Or take you on a
                  Grand Tour of the Fair in a luxurious sightseeing
                </p>
              </div>
              <div className={styles.bannerCopy}>
                <p>
                  Scenicruiser! Or show you the sights at a more leisurely pace
                  in an open-air Glide-a-ride. Or cruise you about in your own
                  private motorized lounge-car -- the Escorter. Walking tours may
                  be arranged, with trained guides who speak Spanish, French,
                  German or Italian, as well as English. Greyhound has thought of
                  everything to help you get the most out of the World&apos;s
                  Biggest Fair!
                </p>
              </div>
              <div className={styles.fountainBlock}>
                <VehiclePhoto
                  src="/images/greyhound06/greyhound44.jpg"
                  alt="Solar Fountain"
                  width={140}
                  height={83}
                />
                <p className={styles.fountainLabel}>SOLAR FOUNTAIN</p>
              </div>
            </div>
            <p className={styles.bannerTurn}>
              (TURN TO INSIDE FOR COMPLETE INFORMATION ON TRANSPORTATION AND
              TOUR SERVICES)
            </p>
          </div>

          <div className={styles.vehicleGrid}>
            <div className={styles.vehicleCard}>
              <p className={styles.vehicleHead}>
                GREYHOUND AT THE
                <br />
                WORLD&apos;S FAIR
              </p>
              <div className={styles.vehicleFull}>
                <p>
                  As new-as-tomorrow fleet of more than 300 specialized vehicles
                  is at your service ... ready to make your visit to the New York
                  World&apos;s Fair as pleasant and carefree as possible. In
                  addition, Greyhound information specialists are standing by at
                  Official Information Booths to answer <u>all</u> your questions
                  about the Fair.
                </p>
              </div>
            </div>

            <VehicleCard
              src="/images/greyhound06/greyhound37.jpg"
              alt="Glide-a-ride"
              width={145}
              height={89}
              label="GLIDE-A-RIDE"
            >
              <p>
                This ultra-modern vehicle was designed and built especially for
                the New York World&apos;s Fair. Step on ... settle back in a
                comfortable seat ... and let the Glide-a-ride carry you smoothly
                to your destination. Or select one of several pre-planned
                Glide-a-ride tours and enjoy leisurely open-air sightseeing.
              </p>
            </VehicleCard>

            <VehicleCard
              src="/images/greyhound06/greyhound36.jpg"
              alt="Rapid Transit bus"
              width={145}
              height={107}
              label={
                <>
                  POINT <span className={styles.smallTo}>TO</span> POINT TRANSIT
                  SERVICE
                </>
              }
            >
              <p>
                These luxurious new Rapid Transit buses circle the Fair
                continuously in both directions ... whisk you from one point to
                another in a matter of minutes. Each bus is equipped with smooth,
                air-suspension ride ... and is air-conditioned for your complete
                comfort.
              </p>
            </VehicleCard>

            <VehicleCard
              src="/images/greyhound06/greyhound42.jpg"
              alt="Information booth"
              width={145}
              height={164}
              label="INFORMATION BOOTH"
            >
              <p>
                Official World&apos;s Fair Information Booths -- staffed by
                helpful Greyhound personnel -- are at your service throughout the
                Fair. Each maintains direct teletype and telephone contact with
                the Official Information Center, thus assuring you of the latest
                word on special events or program changes. Tickets for Greyhound
                World&apos;s Fair services may be purchased at these booths.
              </p>
            </VehicleCard>

            <VehicleCard
              src="/images/greyhound06/greyhound40.jpg"
              alt="Escorter"
              width={145}
              height={132}
              label="ESCORTER"
            >
              <p>
                The futuristic Escorter is made to order for the Fair-goer
                seeking personalized sightseeing service or private metered
                service. It carries one to four passengers in lounge-chair
                comfort. You sit up front where nothing can obstruct your view.
                Driver-guide sits behind, points out everything of interest. Plan
                your own tour ... let your driver suggest an interesting route
                ... or choose one of several pre-planned tours.
              </p>
            </VehicleCard>

            <VehicleCard
              src="/images/greyhound06/greyhound39.jpg"
              alt="Sightseeing Scenicruiser"
              width={145}
              height={103}
              label="SIGHTSEEING-SCENICRUISER"
            >
              <p>
                This all-new sightseeing Scenicruiser provides the ultimate in
                luxury on your Grand Tour of the Fair. Sink into deeply-cushioned
                reclining seat. Relax in air-conditioned comfort. Sightsee
                through panoramic picture windows and tinted glass roof. Modern
                electronic speaker system describes Fair exhibits and attractions
                as you ride.
              </p>
            </VehicleCard>

            <VehicleCard
              src="/images/greyhound06/greyhound41.jpg"
              alt="Bus station"
              width={145}
              height={88}
              label="BUS STATIONS"
            >
              <p>
                Wherever you may be -- anywhere within the Fair grounds --
                you&apos;ll find a sheltered Greyhound Bus Station just a few
                steps away. These convenient stations offer a wide variety of
                transportation and tour services. And each is equipped with a
                map that shows you how to reach every part of the Fair.
              </p>
            </VehicleCard>

            <VehicleCard
              src="/images/greyhound06/greyhound38.jpg"
              alt="Greyhound Exhibit"
              width={145}
              height={83}
              label="GREYHOUND EXHIBIT"
            >
              <p>
                This handsome pavilion -- situated in the Transportation area --
                houses the dramatic Greyhound Circle Theater and a fascinating
                group of Greyhound Post House Restaurants -- each featuring
                distinctive regional decor and offering good food at reasonable
                prices.
              </p>
            </VehicleCard>
          </div>

          <p className={styles.source}>
            SOURCE: Greyhound Corporation, Pamphlet (1964){" "}
            <em>
              How to See the New York World&apos;s Fair (NOTE: Pamphlet&apos;s
              Tour Route Maps can be found on successive pages within the
              Greyhound Feature)
            </em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound05"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound07"
      />
    </>
  );
}

function VehicleCard({
  src,
  alt,
  width,
  height,
  label,
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={styles.vehicleCard}>
      <div className={styles.vehicleBody}>
        <VehiclePhoto src={src} alt={alt} width={width} height={height} />
        {children}
      </div>
      <p className={styles.vehicleLabel}>{label}</p>
    </div>
  );
}
