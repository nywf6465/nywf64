import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/undrghomeLegacy.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure — Underground World Home — nywf64.com",
  description:
    "Souvenir brochure for the Underground World Home at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const SPONSORS: { name: string; material: string }[] = [
  {
    name: "Allen Industries, Inc.\nChicago, Illinois",
    material: "Carpet padding",
  },
  {
    name: "Century Furniture Co.\nHickory, North Carolina",
    material: "Furniture",
  },
  {
    name: "Channel Master\nEllenville, New York",
    material: "TV Antenna System",
  },
  {
    name: "Cohn-Hall-Marx Company\nNew York City, New York",
    material: "Draperies, Upholstery and\nBedspread fabrics",
  },
  {
    name: "The Englander Co., Inc.\nChicago 54, Illinois",
    material: "Bedding",
  },
  {
    name: "General Electric Company\nNew York City, New York",
    material:
      "Appliances, heating and\nAir Conditioning, Home Entertainment, TV, Switch Gear Equipment,\nWiring Devices and Bulbs, Textolite",
  },
  {
    name: "A. & M. Karagheusian Co.\nNew York 16, New York",
    material: "Gulistan Carpets",
  },
  {
    name: "Kenbury Glass Works, Inc.\nNew York 11, New York",
    material: "Bead Art",
  },
  {
    name: "Murals, Inc.\nNew York, New York",
    material: "Wall Coverings",
  },
  {
    name: "Rheem Manufacturing Company\nNew York 17, New York",
    material: "Plumbing fixtures",
  },
  {
    name: "Robbins Floor Products\nTuscumbia, Alabama",
    material: "Vinyl Floor Covering",
  },
  {
    name: "Schlage Lock Company\nNew York 1, New York",
    material: "Door locks",
  },
  {
    name: "J. P. Stevens and Company\nNew York, New York",
    material: "Linens and uniforms",
  },
  {
    name: "Scroll, Inc.\nMiami 64, Florida",
    material: "Patio furniture",
  },
  {
    name: "Steinway & Sons\nNew York, New York",
    material: "Grand piano",
  },
  {
    name: "The Thomas Organ Company\nLos Angeles 48, California",
    material: "Organ",
  },
  {
    name: "Yeoman & Smith, Inc.\nFort Lauderdale, Florida",
    material: "Cabinets",
  },
  {
    name: "Benjamin Moore Paint Company\nNew York, New York",
    material: "Painting",
  },
  {
    name: "Victor Oolitic Stone Company\nBloomington, Indiana",
    material: "Stonework",
  },
  {
    name: "Jay Lighting Mfg. Co., Inc.\nBrooklyn 38, New York",
    material: "Chandeliers",
  },
  {
    name: "Beacon Lamp Co., Inc.\nNew York 1, New York",
    material: "Lamps",
  },
];

function SponsorName({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

/**
 * Underground World Home — souvenir brochure (legacy undrghome06.html).
 */
export default function Undrghome06Page() {
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

      <article className={styles.article} aria-labelledby="undrghome06-title">
        <header className={styles.titleBar}>
          <h1 id="undrghome06-title" className={styles.titleBarMain}>
            Brochure
          </h1>
        </header>

        <div className={`${styles.articleInnerWide} ${styles.brochureBody}`}>
          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome06/uwh05.jpg"
              alt=""
              width={464}
              height={199}
              className={styles.photoBorder}
              unoptimized
            />
          </figure>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome06/uwh06.jpg"
              alt=""
              width={464}
              height={194}
              className={styles.photoBorder}
              unoptimized
            />
          </figure>

          <p className={styles.brochureLeadGreen}>
            How would you like sunshine every day...when you want it?
          </p>
          <p className={styles.brochureSubLead}>
            GREATER SECURITY - PEACE OF MIND - THE ULTIMATE IN TRUE PRIVACY!
          </p>

          <p>
            <strong>
              Cut insurance, heating, maintenance costs to practically nothing.
              Reduce sinus, allergy and asthmatic annoyances - Dust but once a
              month.
            </strong>
          </p>

          <p>
            <strong>Fantastic . . . An impossible dream . . . </strong>
            the perfect way of life for future generations? Not at all -
            it&apos;s here NOW! You can see these exciting new ideas - and many
            more - at the revolutionary Underground Home exhibit at the New York
            World&apos;s Fair, Avenue of Transportation (Block 50), between the
            Heliport and the Ford exhibit near the Western entrance.
          </p>

          <p>
            <strong>Create your own private world . . . </strong>
            shut out noise, dangerous intruders, storms, pollen, air pollution .
            . . Control your climate electronically . . . &quot;dial&quot; Spring
            weather in midwinter, sunshine on a rainy day, high noon at midnight
            . . . grow luxuriant flowers under artificial sunlight in a garden
            15 feet beneath the earth&apos;s surface. Use your land twice . . .
            build a swimming pool, playground area or woodland park right over
            your home.
          </p>

          <p>
            <strong>Terrific . . . </strong>
            these advantages and innovations truly sound wonderful, but what IS an
            underground home? What does it look like and how &quot;different&quot;
            is it? The visitor is in for a surprise!!! After following a wide,
            spiral staircase down into the subterranean entrance, he will enter
            a luxurious, ultramodern ten room residence resembling an elegant
            above ground home.
          </p>

          <p>
            The difference . . . the reason for all these marvelous improvements
            and benefits . . . is WHERE it is built -15 feet down!!! Entirely new
            concepts and techniques in architecture, construction, interior
            design, lighting, ventilation and utility installations make the home{" "}
            <strong>the most advanced</strong> of all the futuristic World&apos;s
            Fair structures.
          </p>

          <p>
            It is built, like a ship in a bottle, inside of an oblong shell of
            waterproof concrete 130 feet by 90 feet wide. The shell&apos;s
            concrete top, 36 inches below the surface, is covered by the
            earth&apos;s insulation. The Underground Home is thus protected from
            the ravages of nature, the physical and psychological assaults caused
            by our industrialized society and the population explosion.
          </p>

          <p>
            By &quot;dialing&quot; the proper blends of electrical sunshine,
            twilight, moonlight or starlight, and mixing the correct formulas of
            heating or cooling, occupants can regulate their own climate,
            scenery, barometric pressure and even the season of the year.
          </p>

          <p>
            From inside the Home, occupants may look out through sliding glass
            doors onto a &quot;sun drenched&quot;, inviting marble terrace where
            flowers bloom, a fountain splashes and tropical fish swim in a pool.
            When ready for bed, raise the window, and a refreshing breeze from
            the shell stirs the draperies, inviting sleep.
          </p>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome06/uwh07.jpg"
              alt=""
              width={464}
              height={145}
              className={styles.photoPlain}
              unoptimized
            />
          </figure>

          <p>
            <strong>UNDERGROUND LIVING DOES MAKE SENSE AND HERE&apos;S WHY:</strong>
          </p>

          <p>
            <strong>IT COSTS LESS -</strong>
            heating and cooling bills are negligible - the earth&apos;s insulation
            insures a constant temperature, total utility costs are cut to one
            third; no weather damage; impossible to burn; insurance costs
            reduced to one eighth; home lasts forever, no fading of draperies,
            carpets or furniture; no need for roof repairs, storm windows, etc.;
            it&apos;s easier to keep clean. In addition to all this - you have{" "}
            <strong>DOUBLE USE OF YOUR LAND.</strong>
          </p>

          <p>
            <strong>HEALTHIER, CLEANER, QUIETER LIVING -</strong>
            asthma, sinus, allergy and chronic cold sufferers receive almost
            instant relief in abundant, dry, stimulating filtered air. It can be
            pressurized to any altitude - much like a plane cabin. No dirt means
            less house work and more time for recreation. It&apos;s QUIET, easier
            on the nerves, perfect for relaxing and enjoying good music. But most
            of all, it offers the average man the proverbial island unto
            himself.
          </p>

          <p>
            <strong>THE UTMOST IN SECURITY -</strong>
            lessens the likelihood of human intruders; protection from storms of
            all types; is impervious to nuclear fallout.
          </p>

          <p>
            The underground concept is not limited only to residential
            construction. Indeed, the numerous advantages are just that much
            greater when applied to underground apartments, factories, motels,
            shopping centers and restaurants.
          </p>

          <p>
            The World&apos;s Fair is the fourth such home to be built by Jay
            Swayze, Plainview, Texas, business executive and home builder. He, his
            wife and two teenage daughters have, for the past two years, lived in
            their underground home which has been visited by over 20,000 people.
          </p>

          <p>
            Special group tours may be arranged. Admission is only one dollar for
            adults and fifty cents for children. A complete, colorfully illustrated
            story of the Underground Home and Underground construction is contained
            in a booklet available at the exhibit for $1.00 or by mailing a check
            or money order to Mr. Jay Swayze, President, Underground World Home
            Corporation, P.O. Box 1827, Flushing 52, New York. A specially
            trained staff at the exhibit will be prepared to explain how you too,
            can have an Underground Home.
          </p>

          <table className={styles.sponsorTable}>
            <tbody>
              <tr>
                <td colSpan={2} className={styles.sponsorHead}>
                  List of
                  <br />
                  participating sponsors
                  <br />
                  for the Underground World Home
                </td>
              </tr>
              <tr>
                <td className={styles.sponsorHeadLabel}>NAME OF SPONSOR</td>
                <td className={styles.sponsorHeadLabel}>MATERIAL</td>
              </tr>
              <tr className={styles.sponsorDivider}>
                <td colSpan={2} />
              </tr>
              {SPONSORS.map((row) => (
                <tr key={row.name}>
                  <td>
                    <SponsorName text={row.name} />
                  </td>
                  <td className={styles.sponsorMaterial}>
                    <SponsorName text={row.material} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <figure className={styles.figureCenter} style={{ maxWidth: "23.8125rem" }}>
            <Image
              src="/images/undrghome06/uwh08.jpg"
              alt=""
              width={381}
              height={585}
              className={styles.photoPlain}
              unoptimized
            />
            <p className={styles.sourceNarrowLeft}>
              SOURCE: Souvenir Brochure
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/undrghome05"
        explicitPrevious
        overviewHref="/undrghomeoverview"
        nextHref="/undrghome07"
      />
    </>
  );
}
