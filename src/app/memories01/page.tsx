import type { Metadata } from "next";
import Image from "next/image";
import { MemoriesHero } from "@/components/MemoriesHero";
import { MemoriesNavChrome } from "@/components/MemoriesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../memoriesEssay.module.css";

export const metadata: Metadata = {
  title: "Memories of the 1964 World's Fair — nywf64.com",
  description:
    "Katherine Khalife’s memories of the 1964/1965 New York World’s Fair — from nywf64.com.",
};

/**
 * Memories page stack (modeled on holmes01 / fisher01 / rm01):
 * site header → hero → Memories nav → navy title bar → essay body → nav2 → site footer
 *
 * Body from legacy memories01.html.
 */
export default function Memories01Page() {
  return (
    <>
      <MemoriesHero />

      <MemoriesNavChrome />

      <article className={styles.article} aria-labelledby="memories01-title">
        <header className={styles.titleBar}>
          <h1 id="memories01-title" className={styles.titleBarMain}>
            Essay: <em>Memories of the 1964 World&apos;s Fair</em>
          </h1>
          <p className={styles.titleBarByline}>... by Katherine Khalife</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              <span className={styles.dropcap} aria-hidden="true">
                W
              </span>
              ORLD&apos;S FAIRS gave us the Eiffel Tower and the Space Needle,
              the Ford Mustang and the Ferris Wheel, Sally Rand&apos;s fan
              dance, steak sauce and giant steam engines. They gave us a reason
              to celebrate the present and look forward to the future. And they
              gave us memories.
            </p>

            <p>
              Our personal memories of world&apos;s fairs are as much a snapshot
              of a certain time in our lives as they are specific recollections
              of the exhibits we saw. For a lot of us, a world&apos;s fair was
              also a rite of passage - our first trip to a major city, a
              honeymoon, the first vacation we took on our own. Whether our
              memories are entirely accurate or not probably doesn&apos;t even
              matter. What does matter is that we have them, and thus we share a
              common denominator with the rest of our generation.
            </p>

            <p>
              Historians look back on world&apos;s fairs and judge them within a
              larger context, deciding which ones were important and which ones
              were not. We ordinary folks use a simpler standard. For most of
              us, the best world&apos;s fair ever held will always be the first
              one we attended. For my brother and I, that means the fair that
              opened at Flushing Meadow during April school vacation in 1964,
              when he was twelve and I was fourteen.
            </p>

            <p>
              From our first sighting of the Unisphere through the windshield of
              the family Mercury as we trundled along the Van Wyck Expressway, it
              was clear that this time our parents had chosen a vacation with
              potential. Spreading before us was a dazzling panorama of promise
              and possibility unlike anything we had ever seen. Everything was
              modern and magical and larger than life. Pavilions soared skyward
              in strange futuristic shapes. Pop Art was everywhere - a ten-story
              rocket, an eighty-foot car, a giant rubber tire turned into a
              ferris wheel.
            </p>

            <p>
              It was all incredible and it was all ours. For two whole days,
              armed with piggybank proceeds and official guide books, we were on
              our own to travel wherever curiosity carried us - through an
              amazing world of color and space exploration and exotic foreign
              lands.
            </p>

            <p>
              We stuck our heads into plastic spheres at Clairol to see how
              we&apos;d look in Jackie Kennedy bouffants or frosted flips,
              played with IBM Selectrics at the Typewriter Bar, and with
              touch-tone phones at the Bell Pavilion. At Parker Pen we filled
              out questionnaires and were matched - by computer! - with pen
              pals. At DuPont, actors in go-go boots, Oleg Cassini outfits and
              hats trimmed in giant molecules sang and danced and introduced us
              to dripless paint and the Happy Plastics Family.
            </p>

            <p>
              We took pictures on the lunar landscape roof at Eastman Kodak,
              sampled peanut soup in the tree house restaurant at the African
              pavilion, and waited in a long, boring line to ride a moving
              sidewalk past Michelangelo&apos;s Pieta. And we ate as many Bel-Gem
              waffles as funds and fortitude allowed.
            </p>

            <p>
              At General Motors&apos; Futurama we were transported to a time when
              tourists would board atomic submarine trains for jaunts under the
              ice of Antarctica or drive their Aqua-Scooters to undersea hotels.
              Heady stuff for two kids within spitting distance of their first
              drivers&apos; licenses.
            </p>

            <p>
              We walked from Albany to Buffalo on the giant map at the New York
              State pavilion and argued about how we&apos;d spend the million
              dollars on the money tree at American Express. At Festival of Gas
              we fantasized about the Norge Dishmaker ending our nightly
              dishwashing duties forever - by turning dirty plastic dinner dishes
              into brand new plates in time for breakfast.
            </p>

            <p>
              And who could ever forget that epitome of fallout shelters, the
              Underground Home? A subterranean ranch house that promised us
              freedom from pollution and radiation, it boasted a glamorous round
              bed, backlit mural &quot;landscaping&quot; and a patio complete
              with chaise lounges and a barbecue grill.
            </p>

            <p>
              Since we had spent weeks during the Cuban missile crisis diving
              under our school desks in practice air raid drills, the idea of
              living underground didn&apos;t seem all that far-fetched (or
              entirely undesirable, to my shallow fourteen year-old mind,
              especially if a round bed was part of the deal).
            </p>

            <p>
              Like most Americans in 1964, we were fascinated with space. We had
              grown up with Sputnik and watched, in breathless amazement on a
              classroom TV as Alan Shepard took his fifteen-minute Mercury flight
              in 1961. Our vocabularies were filled with words like Telstar and
              splashdown, and NASA was becoming as familiar as The Ed Sullivan
              Show. We drank Tang, wondered how astronauts went to the bathroom,
              and tried to imagine life at zero gravity. The world&apos;s fair
              was a spectacular showcase of this new era, a cornucopia of command
              modules and booster rockets, space stations and moon domes - and it
              gave us our first ever opportunity to see it all up close.
            </p>

            <p>
              Of all the innovations on display, though, our hands-down favorite
              was Audio-Animatronics, a Walt Disney-designed invention that
              produced incredibly life-like electronic figures who seemed to move
              and speak just like real people. Several pavilions used them, but
              the best, as far as we were concerned, was the G.E. Carousel of
              Progress.
            </p>

            <p>
              There, in theater seats that traveled around a center stage, we
              watched an entire audio-animatronics family move through history,
              from the days of drudgery before electricity right up to an
              ultramodern life of leisure in their all-electric home. So
              mesmerized were we that today, over thirty years later, we can both
              still hum the exhibit&apos;s theme song on command.
            </p>

            <p>
              For us, THE world&apos;s fair will always be 1964. Looking back, it
              still seems magical - even though the great big beautiful tomorrow
              of G.E.&apos;s theme song didn&apos;t turn out quite as well as
              predicted. Who knew back then that the Happy Plastics Family would
              end up worrying about overflowing landfills, school violence and
              cholesterol?
            </p>

            <p>
              Personally, I hope they fared better. I like to think they&apos;re
              still out there somewhere, maybe in the Talking Formica House,
              firing up their Dishmaker and eating lots of Bel-Gem waffles.
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>

          <p className={styles.bio}>
            Katherine Khalife is a writer and marketing consultant based in
            Lancaster, PA. She has co-authored three books for Arcadia
            Publishing&apos;s Images of America series and writes articles on a
            variety of topics for national magazines. She spent 20 years in the
            tourism industry and does marketing consulting for museums, tourist
            attractions and small businesses. In her next life, she&apos;d like
            to own a Bel-Gem waffle franchise. This essay first appeared as a
            sidebar from a World&apos;s Fair feature article she wrote in 1993
            for Heyday Magazine, a regional magazine that she published in New
            England.
          </p>

          <p className={styles.copyright}>
            © Copyright 2000 Katherine Khalife — do not reprint without
            permission.
          </p>
        </div>
      </article>

      <Nav2Bar previousHref="/stories" explicitPrevious hideNext />
    </>
  );
}
