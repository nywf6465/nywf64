import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "United Air Lines — Airlines & The Fair — nywf64.com",
  description:
    "United Air Lines at the Fair — June 1964 timetable, Exhibit Check List, and T&T Pavilion slides — on nywf64.com.",
};

/**
 * Airlines feature page 5 (legacy airlines06.html remapped to /airlines05).
 * Stack: hero → Airlines nav (Page 6) → navy title bar → article → nav2
 * PREVIOUS → /airlines04; NEXT → /airlines06
 */
export default function Airlines05Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines05-title">
        <header className={styles.titleBar}>
          <h1 id="airlines05-title" className={styles.titleBarMain}>
            United Air Lines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.carrierRow}>
            <Image
              src="/images/airlines05/airlines10.jpg"
              alt="Timetable Cover"
              width={218}
              height={480}
              className={styles.carrierCover}
              unoptimized
            />
            <div className={styles.unitedCopy}>
              <p>
                With exhibits in <em>both</em> the Transportation &amp; Travel
                and Hawaiian Pavilions, United Air Lines <em>embraced</em> the
                Fair.
              </p>
              <p>
                Their June 1964 timetable advertises the Saul Bass film
                &quot;From Here to There,&quot; United&apos;s main tent show in
                the Transportation &amp; Travel Pavilion.
              </p>
              <p>
                Typical air fare on a United DC-8 <em>Jet Mainliner</em> between
                Chicago and New York in 1964 ran about $43 for Coach travel and
                $53 for First Class. United could boast of one daily round-trip,
                one-stop flight between New York and Honolulu.
              </p>
              <p>
                United developed a superb slide show on the Fair as a part of
                their promotional efforts. You may notice slides from &quot;United
                Air Lines Presents&quot; on various pages here at the website.
                There are even a couple below showing the interior of
                United&apos;s exhibit at T&amp;T.
              </p>
            </div>
          </div>

          <figure className={styles.interiorFigure}>
            <Image
              src="/images/airlines05/airlines11.jpg"
              alt="Timetable Interior"
              width={428}
              height={480}
              className={styles.interiorPhoto}
              unoptimized
            />
          </figure>

          <p className={styles.unitedAdLead}>UNITED . . .</p>
          <p className={styles.unitedAdLeadSub}>
            <u>THE</u> AIRLINE TO THE WORLD&apos;S FAIR
          </p>
          <p className={styles.unitedAdBody}>
            At the Fair, be sure to include United&apos;s two exhibits -- in the
            Travel and Transportation Building and the beautiful Hawaiian
            Pavilion. At our Travel and Transportation exhibit, a film,
            &quot;From Here to There&quot;, reveals the pleasure of jet flight
            in a new and unique way, through the cinema artistry of Saul Bass
            and Associates who have won wide acclaim for their achievements in
            Hollywood.
          </p>
          <p className={styles.unitedAdBody}>
            United or your Travel Agent will be pleased to make all of the
            arrangements for a wonderful vacation at the Fair. United&apos;s
            Family Plan saves 25% on travel for your wife and children. And
            remember United offers jet service to New York from more cites than
            any other airline.
          </p>
          <p className={styles.sourceLeft}>
            SOURCE: <em>United</em> timetable, June, 1964, Bob Esler Collection
          </p>

          <div className={styles.adRow}>
            <Image
              src="/images/airlines05/airlines12.jpg"
              alt="Timetable Advertisement"
              width={345}
              height={394}
              className={styles.unitedAdPhoto}
              unoptimized
            />
            <div className={styles.unitedCopy}>
              <p>
                With the Fair&apos;s opening just around the corner, United
                placed full page ads in major US publications featuring
                Unisphere and the Fair. This one appeared in their March, 1964
                timetable.
              </p>
            </div>
          </div>
          <p className={styles.sourceLeft}>
            SOURCE: <em>United</em> timetable, March, 1964, Bob Esler Collection
            (above)
          </p>
          <p className={styles.sourceLeft}>
            SOURCE: <em>United</em> Exhibit Check List pamphlet (below)
          </p>

          <div className={styles.checkListRow}>
            <div className={styles.unitedCopy}>
              <h2 className={styles.checkListHeading}>Exhibit Check List</h2>
              <p>
                A popular collectible of the Fair is United&apos;s &quot;Exhibit
                Check List&quot; featuring a <em>Jet Mainliner</em> passing over
                the Fairgrounds. The small fold-out pamphlet included maps of
                the grounds and arterial highway approaches to the Fair, tips on
                what to see and do in New York and helpful hints and telephone
                numbers. A list of every pavilion at the fair along with two
                check boxes make up the majority of the pamphlet to help United
                customers remember the pavilions they&apos;d like to see and the
                ones they saw.
              </p>
            </div>
            <Image
              src="/images/airlines05/airlines13.jpg"
              alt="Exhibit Check List"
              width={205}
              height={480}
              className={styles.checkListCover}
              unoptimized
            />
          </div>

          <figure className={styles.checkListInterior}>
            <Image
              src="/images/airlines05/airlines14.jpg"
              alt="Check List Interior"
              width={480}
              height={284}
              className={styles.checkListInteriorPhoto}
              unoptimized
            />
          </figure>

          <div className={styles.pamphletCols}>
            <div>
              <p className={styles.pamphletTitle}>
                WELCOME TO THE NEW YORK WORLD&apos;S FAIR
              </p>
              <p>
                You&apos;ll find it a magic looking glass through which you step
              </p>
              <p>
                to visit other lands ... and other peoples ... to learn of their
              </p>
              <p>folkways and food ... architecture and art ... their hopes</p>
              <p>
                and dreams. Here you&apos;ll find a vibrant vista of colorful,
                excit-
              </p>
              <p>
                ing structures ... shimmering multicolored lights ... flashing
              </p>
              <p>fountains ... everything from huge, lifelike dinosaurs to</p>
              <p>space ships ... atomic power ... electronic wizardry ...</p>
              <p>
                delicate metal fabrics ... indestructible plastic gears ... and
              </p>
              <p>
                don&apos;t miss your United Jet Flight Preview! Everything at
                the
              </p>
              <p>
                fair combines to provide an excitingly entertaining experience
              </p>
              <p>you and your family will always remember!</p>
              <p>&nbsp;</p>
              <p>
                With so much to see and do at the Fair, you&apos;ll want to make
              </p>
              <p>every minute count ... garner every ounce of precious</p>
              <p>
                energy. It&apos;s easy when you fly to the Fair on United Air
                Lines!
              </p>
              <p>United has the biggest fleet of jets in the world ... jets to</p>
              <p>
                New York City from more U.S. cities than any other airline...
              </p>
            </div>
            <div>
              <p>
                At United, you&apos;ll find us doing our utmost to make your
              </p>
              <p>
                World&apos;s Fair trip as enjoyable -- and effortless -- as
                possible.
              </p>
              <p>And our wide selection of tours lets you choose exactly</p>
              <p>
                what you want ... at the price you want to pay. Every tour
              </p>
              <p>
                is complete .. even to United&apos;s special ticket service.
                Tell
              </p>
              <p>
                us which play, musical, concert, or sporting event you want
              </p>
              <p>to enjoy, we&apos;ll do the rest.</p>
              <p>&nbsp;</p>
              <p className={styles.pamphletTitle}>
                HOW TO USE YOUR EXHIBIT CHECK LIST
              </p>
              <p>
                Another United Extra is this check list. With it, you can plan
              </p>
              <p>
                your time at the Fair in detail ... be sure of seeing the
              </p>
              <p>attractions that interest you most!</p>
              <p>&nbsp;</p>
              <p>
                When you turn the page, you&apos;ll find a color-coded map,
              </p>
              <p>
                together with a list of major exhibits. The &quot;to see&quot;
                boxes
              </p>
              <p>
                are colored to correspond with the area on the map (facing
              </p>
              <p>the check list) in which they&apos;ll be found.</p>
              <p>&nbsp;</p>
              <p>Ready to start your plan? Turn the page!</p>
            </div>
          </div>

          <div className={styles.slideStack}>
            <Image
              src="/images/airlines05/tratra02.jpg"
              alt="UAL Jetarama Theater"
              width={350}
              height={238}
              className={styles.slidePhoto}
              unoptimized
            />
            <p className={styles.slideCaption}>
              The United Air Lines exhibit in the
              <br />
              Transportation &amp; Travel Pavilion
            </p>
            <Image
              src="/images/airlines05/tratra03.jpg"
              alt="UAL Exhibit - T&T Pavilion"
              width={350}
              height={234}
              className={styles.slidePhoto}
              unoptimized
            />
          </div>
          <p className={styles.sourceLeft}>
            Source: &quot;United Air Lines Presents&quot; Promotional Slide Show
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines04"
        explicitPrevious
        nextHref="/airlines06"
      />
    </>
  );
}
