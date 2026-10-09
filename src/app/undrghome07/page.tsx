import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/undrghomeLegacy.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Booklet — Underground World Home — nywf64.com",
  description:
    "Souvenir booklet for the Underground World Home at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home — souvenir booklet part 1 (legacy undrghome07.html).
 */
export default function Undrghome07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Underground World Home">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/undrghomeoverview/hero-banner.jpg"
            alt="Underground World Home at the 1964/1965 New York World’s Fair"
            width={2073}
            height={758}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UndrghomeNavChrome />

      <article className={styles.article} aria-labelledby="undrghome07-title">
        <header className={styles.titleBar}>
          <h1 id="undrghome07-title" className={styles.titleBarMain}>
            Booklet
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.bodyBooklet}`}>
          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh09.jpg"
              alt="Booklet Cover"
              width={464}
              height={401}
              className={styles.photoPlain}
              unoptimized
            />
          </figure>

          <hr className={styles.bookletHr} />

          <p className={styles.bookletSectionTitle}>Why live underground?</p>
          <p>
            The need for a better life, the will to control one&apos;s way of
            life, has led people to move away from an unhealthy or unpleasant
            climate, from air polluted by wastes, from invasions of privacy,
            from the assaults of sounds. The move can be across a continent, a
            hundred miles, or it can be only a few feet.
          </p>
          <p>
            A few feet underground can give man &quot;... an island unto
            himself;&quot; a place where he controls his own world - a world of
            total ease and comfort, of security, safety and above all, privacy.
          </p>
          <p>
            <strong>Climate Control:</strong> Create your own climate by
            &quot;dialing&quot; temperature and humidity settings. Pressurize
            the structure - much as a plane cabin is pressurized-and create any
            season of the year. Underground, one is free of the outside climate,
            and health no longer depends on it. Sufferers of chronic colds,
            asthma, sinus and allergies enjoy relief and the healthy man feels
            healthier.
          </p>
          <p>
            The air in underground structures is drawn through a central point
            assuring absolute control of all climate factors: the breeze of a
            mountaintop, the exhilarating high-pressure feeling of a Spring day
            can be created at will.
          </p>
          <p>
            <strong>Atmosphere Control:</strong> Live in air completely free of
            impurities and so clean that housekeeping is reduced to one light
            dusting a month. Passage of the air through fiber filters and
            electrostatic precipitators removes smog, smoke, automobile exhaust
            fumes and similar by-products of urban and suburban life. The
            constant, automatic flow of thousands of tons of fresh, filtered air
            ensures ideal ventilation without any danger of harmful cross-drafts.
          </p>
          <p>
            <strong>Sound Control:</strong> Sound or silence is yours to choose
            underground. Thousands of tons of steel, concrete and earth prevent
            all sound from entering unless you invite it in. The clamor of
            traffic, jets, noisy neighbors - all are gone with a turn of a switch
            and you are free to rest in silence, or experience for the first
            time the full range of sensations that today&apos;s sensitive stereo
            systems are able to produce.
          </p>
          <p>
            <strong>Economy:</strong> Underground structures require practically
            no maintenance, depreciate little, and have a longevity literally
            longer-than-lifetime. Thus initial costs, which are slightly more
            than custom-designed surface construction, are quickly offset.
            Insurance below is a mere one-eighth of normal rates; the costs of
            utilities in a home surrounded by tons of natural insulation where
            temperatures vary only a few degrees throughout the year, are about
            one-third. Finally, underground construction allows double use of
            real estate; the overhead ground surface may be used for sunrooms,
            garages, or a playground with enough room left over for a garden or
            private park.
          </p>
          <p>
            <strong>Security and Privacy:</strong> Life underground is free from
            natural hazards, even earthquakes. An underground structure cannot be
            destroyed by fire. Its location is less susceptible to theft and
            other criminal mayhem. Perhaps, most important, you have the comfort
            of being alone when you wish. Free from the involvement of neighbors,
            the danger of intruders, the home once again becomes &quot;a
            man&apos;s castle.&quot;
          </p>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh10.jpg"
              alt="Floorplan"
              width={464}
              height={306}
              className={styles.photoPlain}
              unoptimized
            />
          </figure>

          <p className={styles.bookletSectionTitle}>How to build underground:</p>
          <p>
            THE UNDERGROUND HOME at the New York World&apos;s Fair is developed
            to serve as a prototype for future underground residential design.
            Built to incorporate the best and most practical features of a
            series of pilot homes - one of which has been lived in for over 3
            years - the UNDERGROUND HOME offers a complete first hand view of
            construction and operating details of underground living.
          </p>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh11.jpg"
              alt="Cutaway view"
              width={464}
              height={188}
              className={styles.photoPlain}
              unoptimized
            />
          </figure>

          <p>
            <strong>Unique Construction:</strong> The entire 10-room home with its
            &quot;outdoor&quot; terrace and garden areas encased in a
            concrete-steel shell, is sunk fifteen feet underneath a landscaped
            garden. The shell, which measures 70&apos; wide by 80&apos; long,
            provides a floor area of 5,600 square feet and encloses well over 75.5
            thousand cubic feet of air. The World&apos;s Fair home is totally
            moisture proof.
          </p>
          <p>
            Inside the shell, the living area is divided into &quot;exterior&quot;
            and &quot;interior&quot; areas. Over the home&apos;s ceilings are
            passage-ways carrying utility lines and plumbing pipes to provide
            easy access for repairs and alterations.
          </p>
          <p>
            Connecting the interior of the shell with the outside is a custom-built
            air system that draws air from the bottom of a breathing tube or
            &quot;Snorkel&quot; down through a mechanical equipment room. There
            the air temperature, humidity and pressure are regulated at will.
            From the equipment room, air flows under the floor of the house,
            circulates through the entire shell and returns to the outside via
            the &quot;Snorkel.&quot; The air filtration system can be modified to
            cope with overhead dust and sandstorms and even to remove fall-out
            particles.
          </p>
          <p>
            The room also contains a 20KW diesel generator with an automatic,
            seven second cut-in in case of outside electrical utility failure, a
            sewage lift and an automatic sewage ejector.
          </p>
          <p>
            <strong>Luxurious Living:</strong> Every detail of the UNDERGROUND HOME
            has been developed to illustrate the luxury which underground living
            can provide.
          </p>
          <p>
            &quot;Murals of Light&quot; surround the home. Every room in the
            house looks out on a panoramic landscape lit by special effects in
            all shades of daylight and nighttime. Dimmers and a specially designed
            low-voltage light control system permit a rising sun effect in the
            kitchen, while a star-filled night blankets the &quot;outdoor&quot;
            patio.
          </p>
          <p>
            <strong>Carefree Living:</strong> UNDERGROUND HOMES at the World&apos;s
            Fair and elsewhere require little or no maintenance - no windows to
            wash or replace, no exteriors to paint, no roof to repair. The unique
            air-purification system makes dusting once a month more than adequate.
            Corroding smog and polluted air cannot affect roofing, metal equipment
            or masonry in this filtered-air home. Controlled lighting does away
            with fading of upholstery, paints and carpets, leaving them fresh and
            cleaner longer.
          </p>

          <figure className={styles.figureLeft}>
            <Image
              src="/images/undrghome07/uwh17.jpg"
              alt="Entrance by daylight"
              width={250}
              height={249}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              Entrance by daylight...
            </figcaption>
          </figure>

          <figure className={styles.figureCenter} style={{ maxWidth: "15.625rem" }}>
            <Image
              src="/images/undrghome07/uwh12.jpg"
              alt="Entrance at sunset"
              width={250}
              height={245}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              ...at sunset...
            </figcaption>
          </figure>

          <figure className={styles.figureRight}>
            <Image
              src="/images/undrghome07/uwh16.jpg"
              alt="Entrance in evening"
              width={250}
              height={242}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              ...and evening.
            </figcaption>
          </figure>

          <p>
            In an underground home, the decor of one&apos;s choice can be blended
            with a favorite &quot;outside&quot; view; the time of day or night may
            be &quot;dialed&quot; to fit any mood or occasion. Here, in a home
            recently completed under a Colorado peak, the &quot;outside&quot;
            views span a continent with San Francisco&apos;s Golden Gate to the
            West and New York&apos;s skyline to the East.
          </p>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh15.jpg"
              alt="Living Room"
              width={464}
              height={358}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>Living Room</figcaption>
          </figure>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh14.jpg"
              alt="Dining Room"
              width={464}
              height={410}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>Dining Room</figcaption>
          </figure>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh13.jpg"
              alt="Terrace & Swimming Pool"
              width={464}
              height={364}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              Terrace with swimming pool
            </figcaption>
          </figure>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome07/uwh18.jpg"
              alt="Terrace Night View"
              width={464}
              height={436}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              Terrace&apos;s New York City vista
            </figcaption>
            <p className={styles.continuedNext}>Continued next page...</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/undrghome06"
        explicitPrevious
        overviewHref="/undrghomeoverview"
        nextHref="/undrghome08"
      />
    </>
  );
}
