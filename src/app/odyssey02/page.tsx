import type { Metadata } from "next";
import Image from "next/image";
import { OdysseyHero } from "@/components/OdysseyHero";
import { OdysseyNavChrome } from "@/components/OdysseyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../odysseyEssay.module.css";

export const metadata: Metadata = {
  title:
    "A World’s Fair Odyssey & An Afternoon of Delight (Page 2) — nywf64.com",
  description:
    "Craig Bavaro’s essay continues — a 1976 visit to Flushing Meadows with his grandfather, on nywf64.com.",
};

/**
 * Odyssey essay page 2 (legacy odyssey03.html remapped to /odyssey02).
 * Stack: hero → Odyssey nav (Page 3) → navy title bar → essay → nav2
 * PREVIOUS → /odyssey01; NEXT → /odyssey03
 */
export default function Odyssey02Page() {
  return (
    <>
      <OdysseyHero />

      <OdysseyNavChrome />

      <article className={styles.article} aria-labelledby="odyssey02-title">
        <header className={styles.titleBar}>
          <h1 id="odyssey02-title" className={styles.titleBarMain}>
            Essay:{" "}
            <em>A World&apos;s Fair Odyssey &amp; An Afternoon of Delight</em>
          </h1>
          <p className={styles.titleBarByline}>
            ... by Craig Bavaro (Page 2)
          </p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              I remember the day vividly. It was one of those picture-perfect
              summer days where you could just lay in the grass for hours and
              watch the white puffy clouds drift by against a perfect blue
              backdrop. But there would be no lazing around today! Today was a
              day for adventure and it was about to begin right now!
            </p>

            <p>
              My grandfather and I pile into my parent&apos;s old Chrysler New
              Yorker and stop to pick up my friend before we get on the Long
              Island Expressway for the drive to the Park. Once we&apos;re on
              the highway I turn on the radio. My grandfather doesn&apos;t mind
              pop music. As we listen to the latest rock and disco tunes we
              drive along on this warm summer day with the windows rolled down
              counting the exits one-by-one. This is necessary because the old
              Chrysler has this nasty habit of overheating in the summertime if
              the air conditioning is used!
            </p>

            <p>
              What a sight it is to approach the Park from the east on the LIE.
              Just as you pass over that last rise, all of a sudden, the Park is
              upon you. Wow! The Unisphere, New York State Pavilion and Heliport
              look so large. At this point, both my friend and I are trying to
              imagine what it must have looked like when this view was filled
              with the kaleidoscope of structures that comprised the Fair. My
              grandfather is smiling; not because of us but because, in his
              mind, he can see what we can only imagine.
            </p>

            <p>
              Finally we are here. My grandfather slowly drives off the LIE onto
              the service road next to the Grand Central Parkway and into the
              Park through what was once the New Amsterdam Gate. Wow! Look at
              those stone markers. They are engraved to commemorate two
              World&apos;s Fairs. Hey, there&apos;s the Fair Administration
              Building! And look over there -- it&apos;s the Press Building.
              Drive slow grandpa, there&apos;s some cops out front. My friend and
              I are hanging out the window like dogs at this point soaking in
              every detail.
            </p>

            <p>
              A little background about New York in general and the Park
              specifically: It&apos;s the mid-seventies and New York is on the
              verge of bankruptcy. In Manhattan, bridges and roads are literally
              falling down around people for lack of funds to maintain them. You
              wouldn&apos;t let your child wander through Times Square alone for
              all of the drug dealers, hookers and adult bookstores around and
              the subways are a very dangerous and intimidating ride at their
              graffiti-covered best. Out in Queens things are not going much
              better at Flushing Meadows. They&apos;ve just announced that the
              U.S. Open will be moving to the Park soon from its current home in
              Forest Hills. The fountains don&apos;t work. Almost everything and
              every building has been vandalized or abandoned for lack of
              interest and funds so the Park Service can barely keep up on
              cutting the grass or picking up the trash. While this is bad for
              the Park this is very good for us since this will give us almost
              unlimited access to go or see anything that we want to by car. This
              is going to be especially helpful to this little adventure since
              my grandfather is suffering from asbestos on his lungs which
              prevents him from walking very long distances.
            </p>

            <p>
              And so our adventure starts. Soon after we pass the Press Building
              we come to a bridge over the Grand Central Parkway that allows us
              to drive into the old Transportation section of the Fairgrounds
              and right by the Hall of Science. My grandfather stops and
              describes to us the type of wiring and lighting he did in the Great
              Hall. Unfortunately we can&apos;t go inside since it&apos;s closed
              today but we can walk around the Space Park. All the display
              panels are overgrown with weeds and bushes and one of the rocket
              boosters has fallen down off of its pedestal. Being a big science
              fiction fan I think this is what would happen to the world if some
              great war caused mankind to abandon its cities.
            </p>

            <p>
              Next stop, the Heliport. Wow! It&apos;s so much bigger up close.
              It&apos;s such a shame they let those panels on the underside fall
              out. Across the way is the zoo. Is it possible that dome is from
              the Fair? No time to look up-close. We have so much more to see.
              &quot;Stop!&quot; my friend calls out. &quot;The map says this is
              where the General Motors Pavilion was!&quot; My grandfather stops
              and we pile out of the car. We all stand there in awe. It&apos;s
              hard to believe that one of the biggest and most popular exhibits
              at the Fair stood on this very spot. But it did; and all we can
              see now in its place is a baseball field.
            </p>

            <p>
              Next stop: the New York State Pavilion. Back over the other bridge
              into the main part of the Park again. We stop in front of this
              most imposing structure. The colorful roof is gone now. All that
              is left are the support cables and center ring. There is graffiti
              on much of the outside walls but looking through the gates on three
              sides, the interior doesn&apos;t look too badly damaged. Damn! I
              wish we could squeeze through one of these gates to see the largest
              map of NYS in the world or get one of those elevators to work so we
              could view the Fairgrounds from the highest point in the Park.
            </p>

            <figure className={styles.gridFigure}>
              <div className={styles.gridRow}>
                <Image
                  src="/images/odyssey/odys01.jpg"
                  alt="New York State distant view"
                  width={240}
                  height={240}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys06.jpg"
                  alt="New York State Towers and Tent"
                  width={240}
                  height={237}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys05.jpg"
                  alt="New York State Towers"
                  width={240}
                  height={241}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys16.jpg"
                  alt="Theaterama and Tent"
                  width={240}
                  height={240}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                New York State on that summer day in &apos;76
              </figcaption>
            </figure>

            <p>
              Pouring over our Guidebook we discover that the Time Capsules are
              across the street. &quot;Come on! Let&apos;s find them!&quot; And
              find them we do in a circle of tall trees. Inside the circle is a
              low circular stone retaining wall that also serves as a bench. The
              inside of the circle is paved in flagstones covered with some weeds
              growing between them. In the center is the capsule marker. It&apos;s
              also circular and engraved with information about both of the time
              capsules. It&apos;s a little hard to read because there is some
              graffiti that covers it. I take a picture even though it looks a
              little sad there all alone and forgotten. &quot;Do you think it
              will survive the 5000 years it is supposed,&quot; I ask my friend?
              He just shrugs his shoulders and says he doesn&apos;t know.
            </p>

            <figure className={styles.pairFigure}>
              <div className={styles.pairRow}>
                <Image
                  src="/images/odyssey/odys03.jpg"
                  alt="Time Capsules Marker"
                  width={240}
                  height={240}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys04.jpg"
                  alt="Vatican Pavilion Marker"
                  width={240}
                  height={242}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                left: Time Capsules Marker | right: Monument donated by Rome to
                commemorate the Vatican Pavilion
              </figcaption>
            </figure>

            <p>
              Hey, what&apos;s that to the left of the bridge that will take us
              to the old Amusement Area and Meadow Lake? My friend and I run over
              to see what the marker is. My grandfather, who has been slowly
              following us with the car around the NYS Pavilion, stops by the
              bridge and walks over to us. Once again my friend and I stand in
              awe. Can you imagine that on this very spot the Pieta stood after
              traveling all the way from Rome? OK. Back in the car and over the
              bridge that crosses the LIE to the old Amusement Area. Not much to
              see here. Just the old Amphitheater that housed the Florida Water
              Ski Show. It&apos;s locked up tight as a drum but at least it looks
              like it gets used now and again. My grandfather points out that
              his building was from the &apos;39 Fair and that a very famous
              water show was put on here then too.
            </p>

            <p>
              Then it&apos;s back into the car to hit the main section of the
              Park. Around the old Astral Fountain. Nothing of the
              superstructure remains now except the central water ring. We travel
              up the Avenue of Asia &apos;till we get to where the Solar Fountain
              once stood. Of course it is nothing more than a grass-covered
              circle now. We continue on until we get to the Eisenhower
              Promenade. At least now there are some people around. Being a
              beautiful summer day there are kids riding bikes and families
              laying on the grass having picnic lunches. Some teenagers are
              riding their skateboards in the Fountains of the Fairs. They
              shouldn&apos;t be doing that in there. Don&apos;t they know this is
              hallowed ground?!?
            </p>

            <p>
              We continue up the promenade to the Court of the Universe. Once
              again we get out of the car to imagine what the great industrial
              pavilions looked like. &quot;Hey,&quot; I say to all present,
              &quot;over to the left stood the forest of metal trees and the
              ovoid theater with the letters I-B-M all over it.&quot; I ask my
              grandfather if he thinks computers will ever be as commonplace as
              they said they would be back then. He says no, just like those
              Picturephones that were on display in Bell&apos;s floating wing
              right across this pool. I ask him how he knew about those if he
              didn&apos;t see the exhibit at the Fair. He laughs and says &quot;I
              worked on that building you know.&quot; He seems lost in thought
              for just a moment as he mentions what a view of the Fairgrounds
              they had from the upper level of the Bell Pavilion where the ride
              started.
            </p>

            <p>
              Once back in the car my friend points out the spot where GE&apos;s
              &quot;Carousel of Progress&quot; stood. Having both taken the
              actual ride itself newly installed at Disney World in Orlando,
              this gives us something to discuss in detail first-hand. My friend
              starts to hum that annoying little tune that goes with the show
              that I both love and hate. I beg him to stop and threaten him with
              the &quot;It&apos;s a Small World&quot; ditty if he doesn&apos;t.
              He promptly falls silent.
            </p>

            <p>
              As we continue on our ride around the Promenade of Industry we
              observe the various sites where pavilions once stood trying to
              conjure up images of the exhibits or the crowds eagerly waiting in
              line to see them (minus my parents, of course). But in reality, all
              we really see is tranquil parkland with small clusters of people
              playing ball games in far off fields. As we continue around the
              park we stumble across various makers and statues, each of them
              with a connection to some exhibitor long gone or the Fair in
              general. Slowly we are working our way towards the center of the
              park and the mighty Unisphere.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/odyssey01"
        explicitPrevious
        nextHref="/odyssey03"
      />
    </>
  );
}
