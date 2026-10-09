import type { Metadata } from "next";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";
import styles from "./veneze05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Release / News — Venezuela — nywf64.com",
  description:
    "Press release and news coverage of the Venezuela Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela press release / news page — custom from legacy veneze05.html.
 * Stack: hero → VenezeNavChrome → navy title → body → Nav2Bar.
 */
export default function Veneze05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Venezuela">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/veneerview/hero-banner.jpg"
            alt="Venezuela pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VenezeNavChrome />

      <article className={styles.article} aria-labelledby="veneze05-title">
        <header className={styles.titleBar}>
          <h1 id="veneze05-title" className={styles.titleBarMain}>
            Press Release / News
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.release}>
            <Image
              src="/images/veneze05/veneze04.jpg"
              alt="Letterhead"
              width={580}
              height={101}
              className={styles.letterhead}
              unoptimized
            />
            <p className={styles.releaseHead}>
              VENEZUELAN PAVILION, NEW YORK WORLD&apos;S FAIR 1964-65
            </p>
            <p>
              The Venezuelan Pavilion, sponsored by the Ministerio de Fomento of
              the Government of Venezuela, was designed by architects Edmundo
              Diquez and Oscar Gonzalez, with Stephen Leigh &amp; Associates,
              Inc., consultants. It is a sober expression of young Venezuelan
              architecture.
            </p>
            <p>
              Covering an area of 10,000 square feet, the building is constructed
              of prefabricated concrete in the form of four hyperparabolic
              umbrellas. The walls are of redwood, conceived of as a composition
              of planes and volumes separated from each other by open
              integration of ceiling and walls provides a dramatic interior
              effect, whose changes in perspective will delight the spectator.
            </p>
            <p>
              The exhibition will demonstrate the imagination of the designer and
              the craftsman of Venezuela and will consist of four main sections.
              As you enter the Pavilion, you will see the colonial art and
              historical background of the country. In this section, an original
              altar from one of the first churches built by the Spaniards in
              Venezuela will be on display.
            </p>
            <p>
              In the rear section will be the industrial displays, showing the
              potential of Venezuela with samples of manufactured products, raw
              materials, technical data on production and marketing, as well as
              comprehensive data on the industrial life of the country.
              Photographs of plants, factories and other industrial installations
              will create the atmosphere for the display of samples of products
              pictured. There will be a special exhibit on the oil industry.
              Officials from Venezuela&apos;s commercial world will be on hand to
              discuss opportunities in the country and to answer questions from
              American businessmen.
            </p>
            <p>
              Along the mezzanine of the building, there will be an exhibit of
              Venezuelan art, including contemporary and ancient samples of the
              cultural life of the country. As you walk out of the pavilion, you
              will see the last and most fascinating part of the exhibit -
              Venezuela in the future. next to the exit will be a counter where
              souvenirs and typical handicrafts of Venezuela will be on sale.
            </p>
            <p>
              Among the highlights of the Pavilion will be entertainment by
              guitarists, dancers, and other Venezuelan performers. Guitarist
              Alirio Diaz, pianist Judith Jaimes and contemporary dance groups
              are scheduled for this season. Venezuela will spare no effort in
              assuring that each visit to its Pavilion will be a memorable
              experience.
            </p>
            <p className={styles.source}>
              Source: Venezuelan Pavilion Press Release
            </p>
          </div>

          <hr className={styles.rule} />

          <figure className={styles.figure}>
            <Image
              src="/images/veneze05/veneze07.jpg"
              alt="Cover"
              width={376}
              height={480}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionBold}>
              The Venezuelan pavilion at the New York World&apos;s Fair, designed
              by two young architects of Caracas, is a modernistic structure of
              California redwood with 6,500 square feet of space. Visitors will
              find samples of Venezuelan industry, as well as pictures, charts
              and displays that give an idea of the country&apos;s development
              today. President Johnson dedicated the pavilion in person last May
              9.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/veneze05/veneze08.jpg"
              alt="President Johnson Opens Pavilion"
              width={498}
              height={314}
              className={styles.photoNoBorder}
              unoptimized
            />
            <figcaption className={styles.captionBoldSmall}>
              President Johnson shakes hands with the typically attired hostesses
              at the Venezuelan Pavilion. At his side is ex-President Betancourt.
              Following are Ambassador Tejera-Paris, Mrs. Johnson and Mrs.
              Tejera-Paris.
            </figcaption>
          </figure>

          <div className={styles.newsBody}>
            <p>
              The Venezuelan pavilion at the New York World&apos;s Fair was open
              to the public May 9. President Johnson paid honor to the nation by
              dedicating the pavilion in person. After cutting a symbolic ribbon
              at the entrance, he and Mr.s Johnson, accompanied by former
              President Betancourt, Venezuelan Ambassador and Mrs. Tejera-Paris
              and other Venezuelan officials who came especially for the
              occasion, viewed the exhibits, shook hands with the hostesses in
              their picturesque costumes, and sauntered to admire the works of
              arts brought from Venezuela.
            </p>
            <p>
              Greeting the President, Ambassador Tejera-Paris said: &quot;Your
              coming to this pavilion is a great honor you bestow on the people
              and Government of Venezuela. You will find this exhibition to be,
              not so much a show of industry, in this country of inventors, as it
              is the presence of a small but proud country that has achieved a
              big victory against terrorists and has rallied around hope and the
              pursuit of happiness.&quot;
            </p>
            <p>
              President Johnson replied: &quot;As President of a democracy, I am
              proud to be present at the Pavilion of another great democracy
              whose vision and spirit have lighted not only this hemisphere but
              all the world, and to be present here with the leader of that
              democracy during the time that great effort was being made.&quot;
            </p>
            <p>The New York Times says:</p>
            <p>
              &quot;The Venezuelan Pavilion has received less notice than it
              deserves because it opened late. An airy wooden structure designed
              with fifty times the imagination of the average, it parcels out its
              limited area by concentrating on small, well spaced nuclei where at
              one moment you may be looking at a case of pre-Colombian or folk
              art and the next at an industrial display, with no sense of being
              bounced around.&quot;
            </p>
            <p>
              A modernistic building of redwood throughout, the pavilion occupies
              an area of 6,500 square feet. pictures, charts and displays are on
              the main floor, paintings and sculptures on the mezzanine. It was
              designed by two young Caracas architects. It was financed for the
              most part by Venezuelan industrialists.
            </p>
            <p className={styles.source}>
              Source: <em>Venezuela Up-to-Date</em> Summer 1964, Vol. XI, No. 8
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/veneze04"
        explicitPrevious
        overviewHref="/veneerview"
        nextHref="/veneerview"
      />
    </>
  );
}
