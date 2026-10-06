import type { Metadata } from "next";
import Image from "next/image";
import { GmNavChrome } from "@/components/GmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gm11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Transcript of the Futurama II Ride with audio! — General Motors — nywf64.com",
  description:
    "Transcript of the Futurama II Ride with audio from the General Motors Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors — Transcript of the Futurama II Ride with audio.
 * Body from legacy gm11.html (custom transcript page).
 * Stack: hero → GmNavChrome → navy title → audio intro → transcript → Nav2Bar.
 */
export default function Gm11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Motors Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gmoverview/hero-banner.jpg"
            alt="General Motors Pavilion at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GmNavChrome />

      <article className={styles.article} aria-labelledby="gm11-title">
        <header className={styles.titleBar}>
          <h1 id="gm11-title" className={styles.titleBarMain}>
            Transcript of the Futurama II Ride <em>with audio!</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.welcome}>
            Welcome to <em>Futurama II</em>
          </h2>

          <p className={styles.dashner}>
            <strong className={styles.dashnerName}>Ray Dashner</strong>, tape
            recorder in hand, preserved the soundtracks of many of the New York
            World&apos;s Fair shows for his own enjoyment. Now, relive the sounds
            of the Fair through Ray&apos;s fabulous recordings!
          </p>

          <div className={styles.listenRow}>
            <p className={styles.listenTitle}>
              General Motors&apos;
              <br />
              <em>&quot;FUTURAMA II&quot;</em>
              <br />
              Soundtrack
            </p>
            <div>
              <p className={styles.listenLink}>
                <a href="/audio/gm/Dashner_GM.mp3" target="_blank" rel="noreferrer">
                  LISTEN! <span className={styles.listenSize}>(4.68MB)</span>
                </a>
              </p>
              <p className={styles.audioSource}>
                Source: Ray Dashner Archives 2007 All Rights Reserved
              </p>
            </div>
          </div>

          <audio
            className={styles.audio}
            controls
            preload="none"
            src="/audio/gm/Dashner_GM.mp3"
          >
            <a href="/audio/gm/Dashner_GM.mp3">Download Futurama II soundtrack</a>
          </audio>

          <hr className={styles.rule} />

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm185.jpg"
          alt=""
          width={200}
          height={144}
          className={styles.floatLeft}
          unoptimized
        />
        <Image
          src="/images/gm11/gm190.jpg"
          alt=""
          width={200}
          height={145}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.escort}>Let&apos;s enter beneath the soaring ten-story facade and explore together what Futurama will tell us about new opportunities, new excitements and new hopes offered by man&apos;s future mobility.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm182.jpg"
          alt=""
          width={200}
          height={114}
          className={styles.floatLeft}
          unoptimized
        />
        <Image
          src="/images/gm11/gm186.jpg"
          alt=""
          width={200}
          height={109}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.escort}>You&apos;ve stood in line for over an hour to see the Fair&apos;s most popular attraction. At last it&apos;s your turn to take your place on the Ride Train. You step from a moving walkway to your personal lounge chair and settle back with anticipation as sprightly music flows through your own stereo speakers setting the mood for &quot;tomorrow.&quot;</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>Welcome to Futurama II. Welcome to a journey into the future. A journey for everyone today into the everywhere of tomorrow.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>Never has the world held a brighter promise of things to come or a greater need for new resources; for the tools and machinery of power and mobility; for the building together of a road to a new life of abundance and a greater dignity for us all.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>The answers we seek will be found in the near tomorrow: In the dark distances of outer space. Locked in the frozen wastes of the Antarctic. In the deepest of the ocean&apos;s depths. In tropic forests. In desert sands. And in the bright new cities of tomorrow&apos;s world. Let us go to these places. Let us explore together the future. A future not of dreams but of reality. For much of what we are about to see is even now beyond the promise and well on its way to tomorrow&apos;s world.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm187.jpg"
          alt=""
          width={200}
          height={116}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>Never has the world held a brighter promise of things to come or a greater need for new resources; for the tools and machinery of power and mobility; for the building together of a road to a new life of abundance and a greater dignity for us all.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm188.jpg"
          alt=""
          width={200}
          height={129}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>The answers we seek will be found in the near tomorrow: In the dark distances of outer space. Locked in the frozen wastes of the Antarctic. In the deepest of the ocean&apos;s depths. In tropic forests. In desert sands. And in the bright new cities of tomorrow&apos;s world. Let us go to these places. Let us explore together the future. A future not of dreams but of reality. For much of what we are about to see is even now beyond the promise and well on its way to tomorrow&apos;s world.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm189.jpg"
          alt=""
          width={200}
          height={125}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>It is now tomorrow. Now we can find our way along the dark star-studded corridors of space and make that long dreamed voyage to our nearest neighbor in the great unknown: That silent satellite of earth we call the moon</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm191.jpg"
          alt=""
          width={200}
          height={145}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>On the moon there is no air to breathe. No rain to fall. No sound that can be heard. Nothing can grow or can decay in the vacuum of this time-stilled world.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm192.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>Yet here is man. Exploring. Building his first bridge head in his span of space. Lunar rovers float magically over powdered plains. Range the crater&apos;s edge. Their elastic train-like bodies conforming to every surface character of the moon.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>Here are bases of communication and supply. Islands of existance built to withstand the melting heat of the lunar day; the shattering cold of the lunar night.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm193.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>Men in space now monitor the earth while men on earth are finding a whole new world of answers to the world-wide needs of mankind.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>The earth shines more than five times brighter than its moon and brighter still, its oceans and its seas. A diamond brilliance draws us to a frozen shore. The dancing lights of an aurora welcome us to a land of ice nearly twice the size of the United States; to Antarctica, the southern polar cap of the world.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm194.jpg"
          alt=""
          width={200}
          height={145}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>Once as remote as the far side of the moon Antarctica is now a land of growing communities dedicated to scientific observation and research.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm195.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>Here nations of the world, speaking the same common language of science, work together to serve the peoples of the globe; probe for the earth&apos;s secrets through countless centuries of ice. In mobile laboratories form expeditions into the vast white wastelands of the still unknown</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm196.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatLeft}
          unoptimized
        />
        <Image
          src="/images/gm11/gm197.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>And here is Weather Central forecasting to the world the great climatic changes born in the Antarctic&apos;s never-ending winds. Technicians, kept warm within their walls of ice, gather data from the deapths of space; from polar winds; surrounding seas. In microseconds, relaying information wherever needed anywhere on earth.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm198.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>Three quarters of our earth lies beneath the cold still deeps of the sea. A water world in which we now can find abundance far beyond our dreams. Now we can farm and harvest a drifting, swimming, never ending nourishment; food enough to feed seven times the population of the earth.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm199.jpg"
          alt=""
          width={200}
          height={148}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>In aquacopters search the ocean floor to find, miles deep, vast fields of precious minerals and ores. And in the deepest trenches of the seas, study at first hand long hidden secrets of survival. Work easily the rich oil deposits of the Continental Shelves while trains of submarines transport materials and goods along the waterways of the under sea.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm200.jpg"
          alt=""
          width={200}
          height={145}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>And in warmer seas are new realms of pleasure: A weekend, if you wish, at Hotel Atlantis in the kingdom of the sea! A holiday of thrills and of adventure. Of beauty and enchantment. Of radiant wonders in the sun bright gardens of the seas. Our new knowledge and skills, new power and mobility, have given us a new and wondrous under water world. A miracle of gifts from the limitless treasury of the sea.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>In tropical waters fabulous coral reefs lead us back to the land. An equatorial land where nature flourishes more abundantly and in greater variety than in any other region of the world. Yet nowhere else have man&apos;s productive efforts been so challenged and for so long.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>Now technology has found a way to penetrate and control the wild profusion of this wonder world. A jungle road is built in one continuous operation.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm201.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>First, a searing ray of light -- a laser beam -- cuts through the trees.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm203.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>Then a giant machine, a factory on wheels, grinds up the stumps and jungle growth, sets the firm foundations, forms the surface slabs, sets them in place and the roadway bed is paved.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm202.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>These forest highways now are bringing to the innermost deapths of the tropic world the goods and materials of progress and prosperity creating productive communities that can enter profitably the markets of the world and offering to us all enchanting tours through the storybook forests of tropic lands.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>The fertile green of the equator presses upward against the sloping earth until, no longer fed by rain-laden winds, it dies against the rocky heights of the great mountain ranges of the world.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm204.jpg"
          alt=""
          width={200}
          height={142}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>The mountain barrier, legendary challenge of man, now invites communal living in a world of awesome beauty. A new system of highways spans the continents to transport men and goods swiftly and separately across the land.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm205.jpg"
          alt=""
          width={200}
          height={143}
          className={styles.floatLeft}
          unoptimized
        />
        <Image
          src="/images/gm11/gm206.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>And for our deserts a new technology: waters from the sea made fresh as rain to nourish crops planted in the sand. Produce from seed to shipment, programmed and processed by a new agriculture. A science of plenty for an ever growing world.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm184.jpg"
          alt=""
          width={200}
          height={113}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>People live today where they will. Neither terrain nor distance a deterrent to where the men of the city build their homes.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm207.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>All roads lead, as they have for centuries, to the great centers of commerce and communication as the Continental Highway now leads us to the city of tomorrow. Here the city first receives its goods and produce from the factories and the fields of the world. Plazas of urban living rise over freeways.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm208.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatLeft}
          unoptimized
        />
        <Image
          src="/images/gm11/gm209.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatRight}
          unoptimized
        />
        <p className={styles.narration}>Vehicles, electronically paced, travel routes remarkably safe, swift and efficient. Towering terminals serve sections of the city; make public transportation more convenient; provide ample space for private cars. And from a lower level, covered moving walks radiate to shopping areas that are now, truly, marketplaces of the world.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>Its traditions and its faiths preserved, there is new beauty and new strength in the city of tomorrow. In its commerce and its culture; its sports; its sciences and its arts.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm210.jpg"
          alt=""
          width={200}
          height={146}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>The present is but an instant between an infinite past and a hurrying future. The strivings of man: his ambitions, his achievements, his aspirations -- all are mirrored in the face of his cities. Technology can point the way to a future of limitless promise, but man must chart his own course into tomorrow. A course that frees the mind and the spirit as it improves the well-being of mankind.</p>
      </div>

      <div className={styles.block}>

        <p className={styles.narration}>We have completed our ride into the world of tomorrow. We&apos;re pleased to have been your host on this journey into the future and to have shown you many of the things which are already on their way to serve the needs of the near tomorrow. Although many of you may wish to ride around again, it is not possible to do so at this time. Every seat for the next Futurama ride is taken and we must all leave our chairs as soon as we reach the unloading platform. Elsewhere in the General Motors building there is much more to see -- much more to learn about. In the Avenue of Progress other intriguing ideas designed for tomorrow. In the Product Plaza, new and exciting things available today. To these and other exhibits in this building: We cordially invite you all.</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm211.jpg"
          alt=""
          width={200}
          height={147}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>We disembark from our Ride caught up in the excited babble of people who have just spent a continuously breathtaking fifteen minutes. As we exit the Ride area a polite young assistant in his blue blazer hands us a souvenir of our Ride -- a small metal pin that you&apos;ve kept to this very day. You think ...</p>
      </div>

      <div className={styles.block}>

        <Image
          src="/images/gm11/gm49.gif"
          alt=""
          width={175}
          height={154}
          className={styles.floatLeft}
          unoptimized
        />
        <p className={styles.narration}>have</p>
      </div>

      <div className={styles.block}>

        <p className={styles.credit}>The narration of the Futurama &quot;Ride into Tomorrow&quot; was written by Edward Reveaux of Stoney Creek, Conn., a dramatist and author, in consultation with the General Motors Styling Staff. The background music was composed, arranged and conducted by James Fagas in New York City. The narration was given by Alexander Scourby, well-known American actor.</p>
      </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gm10"
        explicitPrevious
        overviewHref="/gmoverview"
        nextHref="/gm12"
      />
    </>
  );
}
