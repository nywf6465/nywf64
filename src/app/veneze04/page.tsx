import type { Metadata } from "next";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";
import styles from "./veneze04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking — Venezuela — nywf64.com",
  description:
    "Groundbreaking ceremony for the Venezuela Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela groundbreaking page — custom essay from legacy veneze04.html.
 * Stack: hero → VenezeNavChrome → navy title → body → Nav2Bar.
 */
export default function Veneze04Page() {
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

      <article className={styles.article} aria-labelledby="veneze04-title">
        <header className={styles.titleBar}>
          <h1 id="veneze04-title" className={styles.titleBarMain}>
            Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/veneze04/veneze02.jpg"
              alt="Cover"
              width={559}
              height={358}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <strong>Cover:</strong> The Venezuelan Pavilion will cover 6,4000
              sq. ft. of a 20,000 sq. ft. lot and will rise three-and-one-half
              stories above the finished ground level. One of the outstanding
              highlights of the pavilion will be a basement-night club which
              will specialize in authentic Venezuelan cuisine and feature an
              array of the country&apos;s top entertainment. Design conceived by
              Edmundo Diquez and Oscar Gonzalez.
            </figcaption>
            <p className={styles.lead}>
              Excerpts from transcription of remarks made by Venezuelan and
              World&apos;s Fair officials at the groundbreaking ceremony for the
              Venezuelan Pavilion, New York World&apos;s Fair, Friday, March 29,
              1963.
            </p>
            <p className={styles.source}>
              Source: Ground Breaking Commemoration Brochure - NY World&apos;s
              Fair Corp.
            </p>
          </figure>

          <div className={styles.twoCol}>
            <div>
              <p>
                GOVERNOR CHARLES POLETTI: I&apos;d like to express enthusiastic
                appreciation to Consul-General Gonzalez for bring us this
                magnificent sunshine. It is truly reminiscent of the beautiful
                climate we enjoyed in Caracas.
              </p>
              <p>
                While in Venezuela I met Edmundo Diquez and Oscar Gonzalez, the
                two young architects who won the competition for design of this
                pavilion. I was quite impressed by them and happy they found it
                possible to visit us here at the Fair sometime ago.
              </p>
              <p>
                We believe that this pavilion will be one of the best in the
                Fair. It will served to educate some seventy million Fair
                visitors in the traditions, culture, hopes and aspirations of
                the Venezuelan people. To the United States, Venezuela has a
                special value and a significant place, and we find happiness in
                the establishment of harmonious relationships between our
                peoples. We wish you success in the achievement of the pavilion.
                May you find that many more North Americans will visit Venezuela,
                that your foreign trade will be stimulated and that foreign
                capital investments will be augmented substantially. On this day
                I wish you and your people well. As a memento of this auspicious
                occasion, Mr. Consul-General, I&apos;d like to present to you on
                behalf of Fair President Robert Moses and his Executive
                Committee, this New York World&apos;s Fair medal.
              </p>
            </div>
            <div>
              <p>
                DR. LUIS ALEJANDRO GONZALEZ, CONSUL-GENERAL OF VENEZUELA: I think
                this groundbreaking ceremony is symbolic of the progress that
                Venezuela is making the world over. I believe that when this
                pavilion is completed, it will be another demonstration of the
                joint efforts of the Venezuelan Government and American capital
                in cementing friendship and understanding and will create new
                sources of income for our people.
              </p>
              <p>
                Upon completion this pavilion will show the development of my
                country within the last few years. You will be able to see how
                revenues derived from oil are used to stabilize our economy,
                promote industrial expansion and intensify our agricultural
                production. You will also learn of the gains we are making by
                improving the living standards, the education health, housing and
                social conditions of our people. You will learn of our abundant
                hydroelectric power, modern irrigation, highway and communication
                systems. This pavilion will become a showcase of democracy. It
                will bear witness to the basic philosophy of the Venezuelan
                Government. Only through equitable distribution of national wealth
                will be be able to fight successfully the penetration of
                communism.
              </p>
              <p>
                I congratulate the World&apos;s Fair organization for its efforts
                which I know will bear fruit. You will have the full cooperation
                of the Venezuelan Consulate in New York.
              </p>
            </div>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/veneze04/veneze03.jpg"
              alt="Breaking Ground"
              width={541}
              height={360}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Dr. Luis Alejandro Gonzalez, Consul-General of Venezuela and
              Governor Chalres Poletti, Fair vice president for International
              Affairs, break ground for the Pavilion of Venezuela.
            </figcaption>
          </figure>

          <hr className={styles.rule} />

          <figure className={styles.figureNarrow}>
            <p className={styles.plansLead}>
              Plans were released for the Venezuelan Pavilion which will occupy a
              20,000 sq. ft. site on the Avenue of the Americas. Utilizing native
              materials the structure designed by Edmundo Diquez and Oscar
              Gonzalez will be representative of modern Venezuelan architecture.
              Its floors an ceiling of exotic tropical wood will hang suspended
              from exposed steel columns forming various sized balconies at each
              level. Included in the exhibit will be displays of native life in
              primative surroundings against examples of the ultra modern
              advances which have been taking place as a result of the
              Republic&apos;s rapid industrialzation. One of the highlights of
              the Pavilion will be a basement restaurant-nightclub reached by a
              free-floating hydraulic telescoping elevator rising vertically
              through the entire ediface. The nightclub will feature native
              dishes and an array of the country&apos;s top talent.
            </p>
            <Image
              src="/images/veneze04/veneze06.jpg"
              alt="Artist's Rendering"
              width={300}
              height={198}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.photoTitle}>
              Rendering of the Pavilion of Venezuela
            </p>
            <p className={styles.source}>
              Source: <em>FAIR NEWS</em> Vol 2, No. 3, March 6, 1963
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/veneze03"
        explicitPrevious
        overviewHref="/veneerview"
        nextHref="/veneze05"
      />
    </>
  );
}
