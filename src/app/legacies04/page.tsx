import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LegaciesNavChrome } from "@/components/LegaciesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./legacies04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Ottilio Building — The Fair that Survived — nywf64.com",
  description:
    "The Ottilio Building in Totowa, N.J. — a New York Times excerpt and Elizabeth Klug’s diary of World’s Fair remnants salvaged into an office building on nywf64.com.",
};

type GalleryItem = {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
};

const GALLERY: GalleryItem[] = [
  {
    src: "/images/legacies04/legacy19.jpg",
    width: 180,
    height: 322,
    caption: "Upper Exterior Wall Stone / Vatican Pavilion",
    alt: "Upper exterior wall stone from the Vatican Pavilion",
  },
  {
    src: "/images/legacies04/legacy18.jpg",
    width: 300,
    height: 274,
    caption: "Hanging Lamps / Vatican Pavilion",
    alt: "Hanging lamps from the Vatican Pavilion",
  },
  {
    src: "/images/legacies04/legacy17.jpg",
    width: 180,
    height: 289,
    caption:
      "Gate from Chapel / Vatican Pavilion; originally from a church in Sicily",
    alt: "Gate from the Vatican Pavilion chapel",
  },
  {
    src: "/images/legacies04/legacy16.jpg",
    width: 300,
    height: 198,
    caption: "Carrara Marble Floor from Pieta Display / Vatican Pavilion",
    alt: "Carrara marble floor from the Vatican Pavilion Pieta display",
  },
  {
    src: "/images/legacies04/legacy15.jpg",
    width: 180,
    height: 307,
    caption: "Marble Pedestal / Vatican Pavilion",
    alt: "Marble pedestal from the Vatican Pavilion",
  },
  {
    src: "/images/legacies04/legacy14.jpg",
    width: 300,
    height: 195,
    caption: "Marble Bench / Vatican Pavilion",
    alt: "Marble bench from the Vatican Pavilion",
  },
  {
    src: "/images/legacies04/legacy24.jpg",
    width: 180,
    height: 281,
    caption: "Lava Stone from Mt. Fuji / Japanese Pavilion",
    alt: "Lava stone from Mt. Fuji at the Japanese Pavilion",
  },
  {
    src: "/images/legacies04/legacy13.jpg",
    width: 300,
    height: 185,
    caption:
      "Pavilion of Japan, New York World's Fair 1964/1965 (note the Jade Stones in the middle of the moat and the Lava Stone walls)",
    alt: "Pavilion of Japan at the New York World's Fair",
  },
  {
    src: "/images/legacies04/legacy22.jpg",
    width: 300,
    height: 205,
    caption:
      "Ottilio Building Lobby featuring Jade Stone from Japanese Pavilion moat",
    alt: "Ottilio Building lobby with jade stone from the Japanese Pavilion",
  },
  {
    src: "/images/legacies04/legacy20.jpg",
    width: 300,
    height: 205,
    caption:
      "Stairs / Transportation & Travel Pavilion; Railings / Seven-Up & Equitable Pavilions",
    alt: "Stairs from the Transportation and Travel Pavilion",
  },
  {
    src: "/images/legacies04/legacy21.jpg",
    width: 180,
    height: 274,
    caption:
      "Stairs / Transportation & Travel Pavilion; Railings / Seven-Up & Equitable Pavilions",
    alt: "Staircase railings from Seven-Up and Equitable pavilions",
  },
];

/**
 * The Fair that Survived — The Ottilio Building.
 * Body from legacy legacies05.html (Page 4 after overview).
 *
 * Stack: legacieshero → LegaciesNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Legacies04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="The Fair that Survived">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/legacies/legacieshero.jpg"
            alt="The Fair that Survived — legacies of the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LegaciesNavChrome />

      <article className={styles.article} aria-labelledby="legacies04-title">
        <header className={styles.titleBar}>
          <h1 id="legacies04-title" className={styles.titleBarMain}>
            The Ottilio Building
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.articleTitle}>
            Demolition Firm Builds With Relics of Past
          </p>
          <p className={styles.articleByline}>by William Robbins</p>
          <p className={styles.excerptNote}>
            Excerpted from <em>The New York Times</em>, June 6, 1968
          </p>

          <p className={styles.body}>
            HALF-CENTURY-OLD marble columns from a Paterson hospital, wrought
            iron from the Passaic County Jail, cobblestones from Jersey streets,
            a foyer from the Paramount Theater, lights and stone from the
            Japanese Pavilion at the New York World&apos;s Fair -- these and
            dozens of other materials each with a history of its own have been
            blended into a new office building that dominates the crest of a
            six-acre hill on Preakness Avenue in Paterson, N.J.
          </p>
          <p className={styles.body}>
            The building is the new headquarters of V. Ottilio &amp; Sons. It
            was built and decorated with material salvaged by the company, most
            of it from structures the company had been commissioned to demolish.
          </p>
          <p className={styles.body}>
            The large contracting company, operating throughout the New York
            metropolitan area, derives about half its revenue from demolition
            jobs, and the other half from heavy construction, such as
            excavation, foundations and paving.
          </p>
          <p className={styles.body}>
            Though completed only last month, the Ottilio Building covers a span
            of 57 years, and reaches back in decorative tangents to still
            earlier times. Although construction work started three years ago,
            the project is more than 15 years old, dating from the time when
            Carmen and his brother, Michael Ottilio, began collecting the
            materials.
          </p>
          <p className={styles.body}>
            The building was designed by Carmen Ottilio, a square-set man whose
            mobile face glows when he speaks of the project.
          </p>
          <p className={styles.body}>
            &quot;It was a labor of love,&quot; he says. Carmen is now the chief
            executive officer of the company founded by his father, Victor, in
            1914.
          </p>
          <p className={styles.body}>
            Even the labor that went into the building is salvaged. It was spare
            time conserved when company crews were between jobs or temporarily
            delayed on other projects.
          </p>
          <p className={styles.body}>
            A visitor first views the building from beyond a fence formed by a
            massive chain dragged from the bottom of the Hudson River during
            demolition of a pier. Each link of the chain weighs 94 pounds.
          </p>
          <p className={styles.body}>
            The visitor enters the building through a glass enclosed vestibule
            with doors and material from the old Paramount Theater in New York.
          </p>
          <p className={styles.body}>
            Inside, a fountain from the Japanese Pavilion at the World&apos;s
            Fair forms the focal point of a spacious lobby, set in the center of
            a marble floor also preserved from a World&apos;s Fair pavilion.
          </p>
          <p className={styles.body}>
            Above the fountain, a metal staircase rises in a graceful sweep
            toward an open balcony accented by artifacts taken from demolition
            projects. The staircase was taken from the Transportation Building
            at the World&apos;s Fair, and its railings are metalwork from the
            Seven-Up and Equitable Life Pavilions at the Fair.
          </p>
          <p className={styles.body}>
            Off the balcony is Mr. Ottilio&apos;s office, which has walls
            composed partly of stone from the Japanese pavilion at the fair.
          </p>
          <p className={styles.body}>
            On a slope behind the Ottilio building the company is now completing
            a Japanese garden, using massive stones salvaged from demolition and
            a bridge that was at the World&apos;s Fair.
          </p>
          <p className={styles.body}>
            Carmen Ottilio, describing the project, said last week:
          </p>
          <p className={styles.body}>
            &quot;It has been my pleasure to save these pieces from grand
            buildings that other people had thought outlived their usefulness
            and to create something from them.&quot;
          </p>

          <p className={styles.diaryHead}>Diary of a NYWF Legacy Mystery</p>
          <p className={styles.diarySub}>The Ottilio Building</p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies04/legacy23.jpg"
              alt="The Ottilio Building"
              width={300}
              height={117}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.diaryBy}>by Elizabeth Klug</p>
          <p className={styles.source}>
            SOURCE: Diary Article and Photographs:
            <br />
            © Copyright 2001, Elizabeth Klug
          </p>

          <p className={styles.dateHead}>Saturday, July 8, 2000</p>
          <p className={styles.body}>
            I decided to take a ride to Clifton, NJ on the Garden State Parkway
            to try to locate the re-assembled India Pavilion [
            <Link href="/legacies03">See Legacies Page 1</Link>]. After paying a
            few tolls to turn around a couple times, I thought I found the
            structure. I stopped on the highway (which is a great way to get
            creamed), and grabbed a quick picture. I got back in the car and
            decided to try to find the road running parallel to the GSP from
            which the building is accessible. I found the road and pulled into
            the parking lot to take some more photos. Still unsure if I had the
            right place, I noticed a sign for the leasing agent of the building.
            I&apos;ll give them a call on Monday in hopes that they can shed
            some light on this mystery.
          </p>

          <p className={styles.dateHead}>Monday, July 10, 2000</p>
          <p className={styles.body}>
            I spoke with the leasing agent. He had no knowledge of this building
            having originated from the NYWF, but he gave me the name of a Mr.
            Anthony Ottilio. Mr. Ottilio&apos;s father was involved in the
            demolition of the Fair and constructed an office building located in
            Totowa, NJ using remnants of the Fair. Talk about stumbling on
            information!
          </p>

          <p className={styles.dateHead}>Tuesday, July 11, 2000</p>
          <p className={styles.body}>
            I spoke with Mr. Ottilio. His father was in charge of parts of the
            demolition of the NYWF. He used remnants of the Vatican, Japanese
            and Transportation &amp; Travel Pavilions from the 1964-65 NYWF, as
            well as remnants of the old Paramount Theater in NYC and a local
            hospital in Paterson, NJ to construct this office building, which is
            registered in the National Registry of Historic Places. He has
            kindly invited me over for a tour next Wednesday. What a fantastic
            find!
          </p>

          <p className={styles.dateHead}>Wednesday, July 19, 2000</p>
          <p className={styles.body}>
            Mr. Ottilio was very gracious and took me on a tour of this
            fascinating building. Here are the highlights of the NYWF artifacts
            used in this building:
          </p>

          <p className={styles.galleryLabel}>GALLERY</p>

          {GALLERY.map((item) => (
            <figure key={item.src} className={styles.figure}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>{item.caption}</figcaption>
            </figure>
          ))}

          <p className={styles.body}>
            An article was written about this building in the New York Times
            Real Estate Section on June 6, 1968 [See section above]. A major
            renovation is currently being planned and will be completed in the
            summer of 2001. The historical elements of the building will be
            preserved during the renovation.
          </p>
          <p className={styles.body}>
            I still have not solved the mystery of the India Pavilion.
          </p>

          <p className={styles.webmaster}>
            Webmaster&apos;s Note: I would like to thank Liz Klug for risking
            life and limb out on the Garden State Parkway to attempt to track
            down the former India Pavilion, which was rumored to have been
            reconstructed in the Clifton, NJ area following the Fair. Her
            &quot;Grand Adventure&quot; lead her to the treasure trove of
            World&apos;s Fair mementos at the Ottilio Building in Totowa, NJ.
            Thanks, Liz, for allowing us to join you on your mystery tour!
          </p>
          <p className={styles.signoff}>
            Bill Young
            <br />
            July, 2000
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/legacies03"
        explicitPrevious
        overviewHref="/legaciesoverview"
        nextHref="/legacies05"
      />
    </>
  );
}
